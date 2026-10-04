"""Build a single offline HTML from the editable sources. Python standard library only."""
from pathlib import Path
import urllib.request

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / 'src'
VENDOR = SRC / 'vendor'
VENDOR.mkdir(exist_ok=True)
assets = {
    'three.min.js': 'https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.min.js',
    'THREE-LICENSE.txt': 'https://cdn.jsdelivr.net/npm/three@0.160.1/LICENSE',
}
for name, url in assets.items():
    target = VENDOR / name
    if not target.exists():
        with urllib.request.urlopen(url, timeout=45) as response:
            target.write_bytes(response.read())
        print(f'Downloaded {name}: {target.stat().st_size} bytes')
html = (SRC / 'template.html').read_text(encoding='utf-8')
for marker, name in [('STYLE', 'style.css'), ('THREE', 'vendor/three.min.js'), ('APP', 'app.js')]:
    html = html.replace(f'/* EMBED_{marker} */', (SRC / name).read_text(encoding='utf-8'))
(ROOT / 'index.html').write_text(html, encoding='utf-8')
print(f'Built {ROOT / "index.html"} ({len(html)} characters)')
