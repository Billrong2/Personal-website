"""Build a portable preview and source archive from the GitHub Pages source."""
from pathlib import Path
import base64
import json
import mimetypes
import re
import zipfile

ROOT = Path(__file__).resolve().parent
DIST = ROOT / 'docs'
OUT = ROOT / 'artifacts'

def data_url(path):
    mime = mimetypes.guess_type(path.name)[0] or 'application/octet-stream'
    return 'data:' + mime + ';base64,' + base64.b64encode(path.read_bytes()).decode()

def css_inline(path):
    return re.sub(r'url\([\'\"]?([^\)\'\"]+)[\'\"]?\)',
                  lambda m: 'url("' + data_url(path.parent / m[1]) + '")', path.read_text())

def standalone(path):
    html = path.read_text()
    html = re.sub(r'<link\b[^>]*rel=[\'\"]stylesheet[\'\"][^>]*>',
                  lambda m: '<style>' + css_inline(path.parent / re.search(r'href=[\'\"]([^\'\"]+)', m[0])[1]) + '</style>', html)
    html = re.sub(r'<script\b[^>]*src=[\'\"]music\.js[\'\"][^>]*>\s*</script>',
                  lambda m: '<script>' + (DIST / 'music.js').read_text() + '</script>', html)
    return html

def main():
    OUT.mkdir(exist_ok=True)
    html = standalone(DIST / 'index.html')
    worlds = {}
    # Native source pages remain ordinary links. The portable HTML carries all
    # three documents and opens them in a sandboxed, full-screen iframe.
    child_router = '''<script>document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(!a||parent===window)return;const href=a.getAttribute('href'),leaf=href.split('/').pop();if(['index.html','life.html','research.html','play.html'].includes(leaf)){e.preventDefault();parent.postMessage({type:'bill-world-route',world:leaf.replace('.html','')},'*')}});</script>'''
    for world in ['life', 'research', 'play']:
        page = standalone(DIST / 'worlds' / (world + '.html'))
        page = page.replace('<head>', '<head><base href="about:srcdoc">')
        page = page.replace('</body>', child_router + '</body>')
        worlds[world] = base64.b64encode(page.encode()).decode()
    viewer = r'''<style>#world-view{position:fixed;inset:0;z-index:100;background:#0e0a1c}#world-view[hidden]{display:none}#world-frame{width:100%;height:100%;border:0;display:block}</style><div id="world-view" hidden role="dialog" aria-modal="true" aria-label="个人世界"><iframe id="world-frame" title="个人世界" sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe></div><script>
(()=>{const pages=__WORLDS__,names={life:'生活 · 像素小屋',research:'科研 · Matrix',play:'游戏 · 像素雨城'},view=document.getElementById('world-view'),frame=document.getElementById('world-frame');let previous=null,current='';const siblings=Array.from(document.body.children).filter(e=>e!==view&&!['SCRIPT','STYLE'].includes(e.tagName));function show(world){if(!pages[world]){view.hidden=true;frame.removeAttribute('srcdoc');document.body.style.overflow='';siblings.forEach(e=>e.inert=false);if(previous)previous.focus({preventScroll:true});current='';return}if(current===world)return;if(!current)previous=document.activeElement;current=world;frame.title=names[world];frame.srcdoc=new TextDecoder().decode(Uint8Array.from(atob(pages[world]),c=>c.charCodeAt(0)));view.hidden=false;siblings.forEach(e=>e.inert=true);document.body.style.overflow='hidden';frame.focus()}function navigate(world){if(!pages[world])world='';history.pushState(null,'',world?'#world='+world:location.pathname+location.search);show(world)}document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(!a)return;const match=a.getAttribute('href').match(/^worlds\/(life|research|play)\.html$/);if(match){e.preventDefault();navigate(match[1])}});addEventListener('message',e=>{if(e.source===frame.contentWindow&&e.data?.type==='bill-world-route')navigate(e.data.world)});addEventListener('popstate',()=>show(location.hash.startsWith('#world=')?location.hash.slice(7):''));show(location.hash.startsWith('#world=')?location.hash.slice(7):'');})();
</script>'''.replace('__WORLDS__', json.dumps(worlds))
    html = html.replace('</body>', viewer + '</body>')
    (OUT / 'xiaokai-homepage.html').write_text(html)
    with zipfile.ZipFile(OUT / 'xiaokai-homepage-v1.zip', 'w', zipfile.ZIP_DEFLATED) as archive:
        for path in sorted(ROOT.rglob('*')):
            if not path.is_file() or any(part.startswith('.') or part == '__pycache__' for part in path.relative_to(ROOT).parts):
                continue
            if OUT in path.parents or path.name.startswith('qa-'):
                continue
            archive.write(path, Path('xiaokai-homepage') / path.relative_to(ROOT))
        archive.writestr('xiaokai-homepage/xiaokai-homepage.html', html)
    print('Built self-contained homepage HTML and editable source ZIP.')

if __name__ == '__main__':
    main()
