/* Site-wide English/Chinese UI. Source text and game state stay separate. */
(() => {
  'use strict';
  const key = 'bill-website-language-v1', dictionaries = new Map(), patterns = [];
  const textSources = new WeakMap(), attributeSources = new WeakMap();
  const normalize = s => String(s).replace(/\s+/g, ' ').trim();
  const valid = s => s === 'en' || s === 'zh';
  let language = 'en', observer, pending = false, ready = false;
  try { const saved = localStorage.getItem(key); if (valid(saved)) language = saved; } catch {}
  try { const explicit = new URL(location.href).searchParams.get('lang'); if (valid(explicit)) language = explicit; } catch {}
  try { if (parent !== window && parent.location.origin === location.origin && parent.BillI18n) language = parent.BillI18n.language; } catch {}
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  function translate(source, targetLanguage = language) {
    if (typeof source !== 'string' || !source.trim()) return source;
    const n = normalize(source), pair = dictionaries.get(n);
    let result = pair ? pair[targetLanguage === 'zh' ? 1 : 0] : null;
    if (result === null) for (const rule of patterns) {
      rule.re.lastIndex = 0;
      if (rule.re.test(n)) {
        rule.re.lastIndex = 0;
        result = n.replace(rule.re, rule[targetLanguage]); break;
      }
    }
    return result === null ? source : source.match(/^\s*/)[0] + result + source.match(/\s*$/)[0];
  }
  function excluded(el, isText) {
    if (!el || el.closest('[data-i18n-ignore],[translate="no"],script,style,textarea')) return true;
    return isText && !!el.closest('pre,code,input') && !el.closest('[data-i18n-text]');
  }
  function updateText(node) {
    if (excluded(node.parentElement, true)) return;
    const now = node.nodeValue;
    let record = textSources.get(node);
    if (!record || now !== record.rendered) record = {source:now, rendered:now};
    const next = translate(record.source);
    if (next !== now) node.nodeValue = next;
    record.rendered = next; textSources.set(node, record);
  }
  const attributes = ['aria-label','aria-valuetext','placeholder','title','alt'];
  function updateAttributes(el) {
    if (excluded(el, false)) return;
    const names = el.matches('meta[name="description"]') ? ['content'] : attributes;
    let records = attributeSources.get(el);
    if (!records) { records = new Map(); attributeSources.set(el, records); }
    for (const name of names) {
      if (!el.hasAttribute(name)) continue;
      const now = el.getAttribute(name); let record = records.get(name);
      if (!record || now !== record.rendered) record = {source:now,rendered:now};
      const next = translate(record.source);
      if (next !== now) el.setAttribute(name,next);
      record.rendered = next; records.set(name,record);
    }
  }
  function observe() {
    observer?.observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:[...attributes,'content']});
  }
  function apply() {
    if (!ready) return;
    pending = false; observer?.disconnect();
    // Text-only <option> elements must retain their original machine value.
    document.querySelectorAll('option:not([value])').forEach(el=>el.setAttribute('value',el.textContent));
    const walker = document.createTreeWalker(document.documentElement,NodeFilter.SHOW_TEXT);
    let node; while ((node = walker.nextNode())) updateText(node);
    document.querySelectorAll('[aria-label],[aria-valuetext],[placeholder],[title],[alt],meta[name="description"]').forEach(updateAttributes);
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('.bill-language-switch button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.language===language)));
    observe();
  }
  function schedule() { if (!pending && ready) { pending=true; queueMicrotask(apply); } }
  function sendToFrames() {
    document.querySelectorAll('iframe').forEach(frame=>{
      try { frame.contentWindow.postMessage({type:'bill-website-language',language},location.origin==='null'?'*':location.origin); } catch {}
    });
  }
  document.addEventListener('load',e=>{if(e.target?.tagName==='IFRAME')sendToFrames();},true);
  function setLanguage(next, persist=true) {
    if (!valid(next)) return;
    const changed = language !== next; language = next;
    if (persist) { try { localStorage.setItem(key,next); } catch {} }
    apply();
    if (changed) {
      window.dispatchEvent(new CustomEvent('bill:languagechange',{detail:{language}}));
      sendToFrames();
      if (persist && parent!==window) { try { parent.postMessage({type:'bill-website-language',language},location.origin==='null'?'*':location.origin); } catch {} }
    }
  }
  window.BillI18n = {
    get language(){return language;}, get lang(){return language;}, t:translate, setLanguage, refresh:schedule,
    register(data) {
      for (const pair of data.strings || []) {
        if (!Array.isArray(pair) || pair.length !== 2 || pair.some(v=>typeof v!=='string')) continue;
        dictionaries.set(normalize(pair[0]),pair); dictionaries.set(normalize(pair[1]),pair);
      }
      for (const rule of data.patterns || []) if (rule.re instanceof RegExp && typeof rule.en==='string' && typeof rule.zh==='string') patterns.push(rule);
      schedule();
    }
  };
  window.addEventListener('storage',e=>{if(e.key===key && valid(e.newValue)) setLanguage(e.newValue,false);});
  window.addEventListener('message',e=>{
    if (e.data?.type!=='bill-website-language' || !valid(e.data.language) || e.origin!==location.origin) return;
    const trusted = (parent!==window && e.source===parent) || [...document.querySelectorAll('iframe')].some(f=>f.contentWindow===e.source);
    if (trusted) setLanguage(e.data.language,false);
  });
  function start() {
    const style=document.createElement('style');
    style.textContent='.bill-language-switch{position:fixed;right:18px;bottom:18px;z-index:1000;display:flex;gap:2px;padding:4px;background:#08120fee;border:1px solid #456557;box-shadow:0 6px 24px #0006;backdrop-filter:blur(12px);font:11px "JetBrains Mono",monospace}.bill-language-switch button{font:inherit;min-width:42px;min-height:34px;padding:6px 10px;border:0;background:transparent;color:#abc4b4;cursor:pointer;line-height:1.2}.bill-language-switch button[aria-pressed=true]{background:#b4efc8;color:#08120f}.bill-language-switch button:focus-visible{outline:2px solid #e8cf8d;outline-offset:2px}body{padding-bottom:68px!important}@media(max-width:600px){.bill-language-switch{right:10px;bottom:max(10px,env(safe-area-inset-bottom))}.bill-language-switch button{min-height:38px}}@media print{.bill-language-switch{display:none}}';
    document.head.append(style);
    const control=document.createElement('div'); control.className='bill-language-switch';control.dataset.i18nIgnore='';control.setAttribute('role','group');control.setAttribute('aria-label','Language / 语言');
    for (const [code,label] of [['en','EN'],['zh','中文']]) {const b=document.createElement('button');b.type='button';b.textContent=label;b.dataset.language=code;b.setAttribute('aria-label',code==='en'?'Switch to English':'切换为中文');b.onclick=()=>setLanguage(code);control.append(b);}
    document.body.append(control);ready=true;observer=new MutationObserver(schedule);apply();
    window.dispatchEvent(new CustomEvent('bill:languagechange',{detail:{language}}));
  }
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',start,{once:true}); else start();
})();
