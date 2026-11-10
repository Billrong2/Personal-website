/* Opt-in background music. The project owner supplies the audio source.
   The decoded track is crossfaded once in memory, then looped by Web Audio. */
(() => {
  'use strict';

  function finiteNumber(value, fallback) {
    const number = Number(value);
    return Number.isFinite(number) ? number : fallback;
  }

  function createLoopBuffer(context, decoded, settings) {
    const rate = decoded.sampleRate;
    const start = Math.max(0, Math.min(decoded.length - 1, Math.round(settings.start * rate)));
    const requestedEnd = settings.end > 0 ? Math.round(settings.end * rate) : decoded.length;
    const end = Math.max(0, Math.min(decoded.length, requestedEnd));
    const length = end - start;
    if (length < 4) throw new Error('The selected loop region is too short.');
    const minimumOverlap = Math.max(1, Math.round(rate * 0.005));
    const overlap = Math.max(1, Math.min(Math.floor(length / 4),
      Math.max(minimumOverlap, Math.round(settings.crossfade * rate))));
    const interiorLength = length - overlap * 2;
    const result = context.createBuffer(decoded.numberOfChannels, length - overlap, rate);

    for (let channel = 0; channel < decoded.numberOfChannels; channel += 1) {
      const input = decoded.getChannelData(channel);
      const output = result.getChannelData(channel);
      output.set(input.subarray(start + overlap, end - overlap));
      for (let index = 0; index < overlap; index += 1) {
        // The last sample approaches the head at `overlap`, which is also
        // the first sample of the next native loop. No timer restarts it.
        const phase = (index + 0.5) / overlap * Math.PI / 2;
        output[interiorLength + index] = input[end - overlap + index] * Math.cos(phase)
          + input[start + index] * Math.sin(phase);
      }
    }
    // Correlated head/tail audio can rise by up to sqrt(2) during an
    // equal-power blend. A single scale for the whole loop preserves its
    // dynamics and stereo image while keeping full-volume playback safe.
    let peak = 0;
    for (let channel = 0; channel < result.numberOfChannels; channel += 1) {
      const output = result.getChannelData(channel);
      for (let index = 0; index < output.length; index += 1) peak = Math.max(peak, Math.abs(output[index]));
    }
    if (peak > 0.98) {
      const scale = 0.98 / peak;
      for (let channel = 0; channel < result.numberOfChannels; channel += 1) {
        const output = result.getChannelData(channel);
        for (let index = 0; index < output.length; index += 1) output[index] *= scale;
      }
    }
    return result;
  }

  function initializeMusic() {
    const toggle = document.getElementById('music-toggle');
    if (!toggle) return;
    const label = document.getElementById('music-label');
    const slider = document.getElementById('music-volume');
    const volumeValue = document.getElementById('music-volume-value');
    const status = document.getElementById('music-status');
    const panel = document.getElementById('music-panel');
    const volumeKey = 'xr-music-volume-v1';
    let volume = 12;
    try {
      const stored = localStorage.getItem(volumeKey);
      if (stored !== null) volume = Math.max(0, Math.min(100, finiteNumber(stored, 12)));
    } catch { /* Controls remain usable when browser storage is unavailable. */ }

    let wanted = false;
    let playing = false;
    let loading = false;
    let intent = 0;
    let context = null;
    let master = null;
    let loopBuffer = null;
    let bufferPromise = null;
    let activeVoice = null;
    let pausedOffset = 0;
    let pauseReference = null;
    const retiringVoices = new Set();

    function say(message, reveal = false) {
      if (status) status.textContent = message;
      if (reveal && panel) panel.open = true;
    }
    function showState() {
      if (label) label.textContent = playing ? (volume === 0 ? 'Music muted' : 'Music on')
        : wanted && loading ? 'Music loading' : 'Music off';
      toggle.setAttribute('aria-pressed', String(playing));
      toggle.setAttribute('aria-busy', String(wanted && loading));
      toggle.setAttribute('aria-label', wanted ? 'Turn background music off' : 'Turn background music on');
      toggle.title = wanted ? 'Turn background music off' : 'Turn background music on';
      if (slider) {
        slider.value = String(volume);
        slider.setAttribute('aria-valuetext', Math.round(volume) + ' percent');
      }
      if (volumeValue) volumeValue.textContent = Math.round(volume) + '%';
    }
    function smoothGain(parameter, value, seconds) {
      const now = context.currentTime;
      const current = parameter.value;
      if (typeof parameter.cancelAndHoldAtTime === 'function') parameter.cancelAndHoldAtTime(now);
      else {
        parameter.cancelScheduledValues(now);
        parameter.setValueAtTime(current, now);
      }
      parameter.linearRampToValueAtTime(value, now + seconds);
    }
    function positionAt(voice, time) {
      return (voice.offset + Math.max(0, time - voice.startedAt)) % loopBuffer.duration;
    }
    function disconnectVoice(voice) {
      voice.source.onended = null;
      voice.source.disconnect();
      voice.gain.disconnect();
      retiringVoices.delete(voice);
    }
    function pause(fadeSeconds = 0.035) {
      ++intent;
      wanted = false;
      playing = false;
      if (activeVoice) {
        const voice = activeVoice;
        const stopAt = context.currentTime + fadeSeconds;
        pausedOffset = positionAt(voice, stopAt);
        pauseReference = { voice, stopAt };
        activeVoice = null;
        retiringVoices.add(voice);
        if (fadeSeconds > 0) smoothGain(voice.gain.gain, 0, fadeSeconds);
        else voice.gain.gain.setValueAtTime(0, context.currentTime);
        voice.source.stop(stopAt);
      }
      say('Music is off.');
      showState();
    }
    function ensureContext() {
      if (context) return;
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) throw new Error('This browser does not support background audio.');
      context = new AudioContextClass();
      master = context.createGain();
      master.gain.value = volume / 100;
      master.connect(context.destination);
      context.addEventListener('statechange', () => {
        if (activeVoice && context.state !== 'running') {
          pause(0);
          say('Music was paused by the browser. Tap Music on to resume.', true);
        }
      });
    }
    function loadBuffer(source) {
      if (loopBuffer) return Promise.resolve(loopBuffer);
      if (bufferPromise) return bufferPromise;
      loading = true;
      showState();
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 30000);
      bufferPromise = (async () => {
        try {
          const response = await fetch(source, { signal: controller.signal });
          if (!response.ok) throw new Error('Audio could not be loaded.');
          const decoded = await context.decodeAudioData(await response.arrayBuffer());
          loopBuffer = createLoopBuffer(context, decoded, {
            start: Math.max(0, finiteNumber(toggle.dataset.loopStart, 0)),
            end: Math.max(0, finiteNumber(toggle.dataset.loopEnd, 0)),
            crossfade: Math.max(0, finiteNumber(toggle.dataset.crossfade, 8))
          });
          return loopBuffer;
        } finally {
          window.clearTimeout(timeout);
          loading = false;
          bufferPromise = null;
          showState();
        }
      })();
      return bufferPromise;
    }
    function startPlayback() {
      if (!wanted || activeVoice || context.state !== 'running') return false;
      const now = context.currentTime;
      // A quick off/on cancels the retiring voice immediately. Its later
      // `ended` callback cannot stop or change the newly created voice.
      if (pauseReference && now < pauseReference.stopAt) pausedOffset = positionAt(pauseReference.voice, now);
      pauseReference = null;
      for (const retiring of retiringVoices) {
        retiring.source.stop(now);
        disconnectVoice(retiring);
      }
      const source = context.createBufferSource();
      const gain = context.createGain();
      const voice = { source, gain, offset: pausedOffset, startedAt: now };
      source.buffer = loopBuffer;
      source.loop = true;
      source.loopStart = 0;
      source.loopEnd = loopBuffer.duration;
      source.connect(gain);
      gain.connect(master);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(1, now + 0.8);
      master.gain.cancelScheduledValues(now);
      master.gain.setValueAtTime(volume / 100, now);
      source.onended = () => {
        disconnectVoice(voice);
        if (activeVoice === voice) {
          activeVoice = null;
          playing = false;
          wanted = false;
          say('Music stopped. Tap Music on to resume.');
          showState();
        }
      };
      source.start(now, pausedOffset);
      activeVoice = voice;
      playing = true;
      showState();
      say(volume === 0 ? 'Music is muted.' : 'Music is playing. Adjust the volume at any time.');
      return true;
    }

    toggle.addEventListener('click', async () => {
      if (wanted) { pause(); return; }
      const source = (toggle.dataset.audioSrc || '').trim();
      if (!source) {
        say('Audio isn’t available yet.', true);
        showState();
        return;
      }
      const thisIntent = ++intent;
      wanted = true;
      say('Loading music…');
      showState();
      try {
        ensureContext();
        // resume() is invoked directly inside the click gesture, before any
        // network request or decode awaits. Loading never implies playback.
        const resume = context.resume();
        await Promise.all([resume, loadBuffer(source)]);
        if (!wanted || thisIntent !== intent) return;
        if (!startPlayback()) {
          wanted = false;
          say('Tap Music on again to allow audio in this browser.', true);
          showState();
        }
      } catch (error) {
        if (thisIntent !== intent) return;
        wanted = false;
        playing = false;
        say(error?.name === 'AbortError' ? 'Audio took too long to load. Please try again.'
          : 'Audio could not be loaded. Please try again.', true);
        showState();
      }
    });
    slider?.addEventListener('input', () => {
      volume = Math.max(0, Math.min(100, finiteNumber(slider.value, volume)));
      try { localStorage.setItem(volumeKey, String(volume)); } catch { /* Per-visit volume still works. */ }
      if (master) smoothGain(master.gain, volume / 100, 0.06);
      showState();
      if (playing) say(volume === 0 ? 'Music is muted.' : 'Music volume: ' + Math.round(volume) + '%.');
    });
    window.addEventListener('pagehide', () => {
      pause(0);
      for (const retiring of retiringVoices) {
        retiring.source.stop(context.currentTime);
        disconnectVoice(retiring);
      }
      if (context?.state === 'running') context.suspend().catch(() => {});
    });
    showState();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initializeMusic, { once: true });
  else initializeMusic();
})();
