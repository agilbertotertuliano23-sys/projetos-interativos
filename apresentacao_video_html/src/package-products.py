from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root = Path(__file__).resolve().parent.parent
products = root / 'produtos'
readme = '''MONO — Montagens web individuais

Abra index.html para escolher um produto.
Cada HTML de produto funciona sozinho, offline, com animação 3D e manual.
Os PNGs são capas do catálogo; os JSONs são projetos editáveis.
No produto, Construir > Material de montagem > Baixar manual web exporta uma nova versão.
Three.js 0.160.1, licença MIT incluída em THREE-LICENSE.txt.
'''
(products / 'LEIA-ME.txt').write_text(readme, encoding='utf-8')
with ZipFile(root / 'MONO-montagens-web.zip', 'w', compression=ZIP_DEFLATED, compresslevel=9) as archive:
    for file in sorted(products.iterdir()):
        if file.is_file():
            archive.write(file, file.name)
    archive.write(root / 'src' / 'vendor' / 'THREE-LICENSE.txt', 'THREE-LICENSE.txt')
print(root / 'MONO-montagens-web.zip')
