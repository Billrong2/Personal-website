"""Package the complete static website and its editable source, without dependencies."""
from pathlib import Path
import zipfile

ROOT = Path(__file__).resolve().parent
DOCS = ROOT / 'docs'
OUT = ROOT / 'artifacts'
WORKS = ('attention', 'adaptagent', 'lamda', 'alignment', 'predex', 'safemin')
VARIANTS = ('story', 'lab', 'challenge')


def site_files():
    """Refuse incomplete bundles instead of silently omitting a research sample."""
    required = [
        DOCS / 'index.html',
        DOCS / '.nojekyll',
        DOCS / 'i18n.js',
        DOCS / 'worlds-translations.js',
        *(DOCS / 'worlds' / f'{world}.html' for world in ('life', 'research', 'play')),
        *(DOCS / 'research' / name for name in
          ('index.html', 'catalog.js', 'games-catalog.js', 'gallery.js', 'gallery.css', 'sources.html', 'translations.js')),
        *(DOCS / 'research' / 'samples' / work / f'{variant}.html'
          for work in WORKS for variant in VARIANTS),
        *(DOCS / 'research' / 'samples' / work / 'translations.js' for work in WORKS),
        *(DOCS / 'research' / 'games' / f'{work}.html' for work in WORKS),
        DOCS / 'research' / 'games' / 'attention.js',
        DOCS / 'research' / 'games' / 'attention-model.js',
        DOCS / 'research' / 'games' / 'attention.css',
    ]
    missing = [str(path.relative_to(ROOT)) for path in required if not path.is_file()]
    if missing:
        raise SystemExit('Cannot package an incomplete site. Missing:\n  ' + '\n  '.join(missing))
    return [path for path in sorted(DOCS.rglob('*'))
            if path.is_file()
            and not path.name.startswith('qa-')
            and not any(part == '__pycache__' or
                        (part.startswith('.') and part != '.nojekyll')
                        for part in path.relative_to(DOCS).parts)]


def main():
    files = site_files()
    OUT.mkdir(exist_ok=True)
    static_zip = OUT / 'personal-website-static.zip'
    with zipfile.ZipFile(static_zip, 'w', zipfile.ZIP_DEFLATED) as archive:
        for path in files:
            archive.write(path, Path('personal-website') / path.relative_to(DOCS))
    source_zip = OUT / 'personal-website-source.zip'
    with zipfile.ZipFile(source_zip, 'w', zipfile.ZIP_DEFLATED) as archive:
        for path in files:
            archive.write(path, Path('personal-website-source') / path.relative_to(ROOT))
        for name in ('README.md', 'ATTRIBUTION.md', 'RESEARCH_GOAL.md', 'REFERENCE_INVENTORY.md', 'VALIDATION.md', 'build.py', '.gitignore'):
            path = ROOT / name
            if path.is_file():
                archive.write(path, Path('personal-website-source') / name)
        for path in sorted((ROOT / 'preview').glob('*')):
            if path.is_file():
                archive.write(path, Path('personal-website-source') / path.relative_to(ROOT))
        for path in sorted((ROOT / 'tests').glob('*.cjs')):
            archive.write(path, Path('personal-website-source') / path.relative_to(ROOT))
    page_count = sum(path.suffix == '.html' for path in files)
    print(f'Packaged {len(files)} static files and {page_count} HTML pages: '
          '18 research samples, 6 bespoke games, and English/Chinese resources.')
    print(static_zip.relative_to(ROOT))
    print(source_zip.relative_to(ROOT))


if __name__ == '__main__':
    main()
