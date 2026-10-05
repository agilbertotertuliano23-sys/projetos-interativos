// Baixa os modelos 3D gratuitos (CC0 / CC BY) do GitHub, recolore para a
// paleta SQUEMA, otimiza e grava em assets/modelos/<id>.js (GLB em base64,
// script clássico — funciona abrindo o HTML direto do disco).
//
//   npm run modelos
//
// Kenney usa uma textura-paleta ("colormap.png") compartilhada pelos modelos do
// kit; recolorir essa paleta muda as cores de todos os modelos do kit de uma vez.
import fs from 'node:fs';
import path from 'node:path';
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dedup, prune, resample, quantize, weld } from '@gltf-transform/functions';
import { PNG } from 'pngjs';

const RAW = 'https://raw.githubusercontent.com';
const AQUI = path.dirname(new URL(import.meta.url).pathname);
const CACHE = path.join(AQUI, '.cache-modelos');
const SAIDA = path.join(AQUI, '..', 'assets', 'modelos');

// Paleta da identidade (extraída do logotipo e dos ícones).
export const PALETA = {
  amarelo: '#FFC21A', laranja: '#FF9416', azul: '#1F5BE0', celeste: '#2BB4F5',
  verde: '#36C04A', roxo: '#8B3DFF', rosa: '#FF6B8A', vermelho: '#EE3B45',
  marrom: '#C98B4E', branco: '#F4F7FF', tinta: '#0B1438',
};

const KENNEY = {
  cidade: { repo: 'KenneyNL/Starter-Kit-City-Builder', nome: 'Kenney — Starter Kit City Builder' },
  plataforma: { repo: 'KenneyNL/Starter-Kit-3D-Platformer', nome: 'Kenney — Starter Kit 3D Platformer' },
  corrida: { repo: 'KenneyNL/Starter-Kit-Racing', nome: 'Kenney — Starter Kit Racing' },
};
const kenney = (kit, arquivo, id, nome, en) => ({
  id, nome, en, kit,
  url: `${RAW}/${KENNEY[kit].repo}/main/models/${arquivo}.glb`,
  textura: `${RAW}/${KENNEY[kit].repo}/main/models/Textures/colormap.png`,
  credito: KENNEY[kit].nome, licenca: 'CC0 1.0',
  pagina: `https://github.com/${KENNEY[kit].repo}`,
});

export const MODELOS = [
  {
    id: 'robo', nome: 'Robô expressivo', en: 'robot',
    url: `${RAW}/mrdoob/three.js/dev/examples/models/gltf/RobotExpressive/RobotExpressive.glb`,
    credito: 'Tomás Laulhé (Quaternius); morphs por Don McCurdy', licenca: 'CC0 1.0',
    pagina: 'https://github.com/mrdoob/three.js/tree/dev/examples/models/gltf/RobotExpressive',
    cores: { Main: PALETA.azul, Grey: PALETA.branco, Black: PALETA.tinta },
  },
  {
    id: 'raposa', nome: 'Raposa', en: 'fox',
    url: `${RAW}/KhronosGroup/glTF-Sample-Assets/main/Models/Fox/glTF-Binary/Fox.glb`,
    credito: 'Modelo: PixelMannen (CC0) · rig e animação: tomkranis (CC BY 4.0) · conversão: @AsoboStudio e @scurest (CC BY 4.0)',
    licenca: 'CC0 1.0 + CC BY 4.0',
    pagina: 'https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models/Fox',
    recolorirTexturas: true,
  },
  {
    id: 'flor', nome: 'Flor', en: 'flower',
    url: `${RAW}/mrdoob/three.js/dev/examples/models/gltf/Flower/Flower.glb`,
    credito: 'Kenney (Nature Pack); ajustes por Don McCurdy', licenca: 'CC0 1.0',
    pagina: 'https://github.com/mrdoob/three.js/tree/dev/examples/models/gltf/Flower',
    cores: { Blossom: PALETA.amarelo, Stem: PALETA.verde },
  },
  kenney('cidade', 'building-small-a', 'casa-a', 'Casa A', 'house'),
  kenney('cidade', 'building-small-b', 'casa-b', 'Casa B', 'house'),
  kenney('cidade', 'building-small-c', 'predio', 'Prédio', 'building'),
  kenney('cidade', 'building-small-d', 'casa-d', 'Casa D', 'house'),
  kenney('cidade', 'building-garage', 'garagem', 'Garagem', 'garage'),
  kenney('cidade', 'grass-trees', 'arvores', 'Árvores', 'trees'),
  kenney('cidade', 'grass-trees-tall', 'arvores-altas', 'Árvores altas', 'tall trees'),
  kenney('cidade', 'grass', 'grama', 'Grama', 'grass'),
  kenney('cidade', 'pavement-fountain', 'fonte', 'Fonte', 'fountain'),
  kenney('cidade', 'pavement', 'calcada', 'Calçada', 'sidewalk'),
  kenney('cidade', 'road-straight', 'rua', 'Rua', 'road'),
  kenney('cidade', 'road-straight-lightposts', 'rua-postes', 'Rua com postes', 'street lights'),
  kenney('cidade', 'road-corner', 'rua-curva', 'Esquina', 'corner'),
  kenney('plataforma', 'cloud', 'nuvem', 'Nuvem', 'cloud'),
  kenney('plataforma', 'flag', 'bandeira', 'Bandeira', 'flag'),
  kenney('plataforma', 'coin', 'moeda', 'Moeda', 'coin'),
  kenney('plataforma', 'character', 'personagem', 'Personagem', 'character'),
  kenney('plataforma', 'platform-grass-large-round', 'ilha', 'Ilha de grama', 'island'),
  kenney('corrida', 'vehicle-truck-yellow', 'caminhao', 'Caminhão', 'truck'),
  kenney('corrida', 'vehicle-motorcycle', 'moto', 'Moto', 'motorcycle'),
  kenney('corrida', 'decoration-forest', 'floresta', 'Floresta', 'forest'),
  kenney('corrida', 'decoration-tents', 'barracas', 'Barracas', 'tents'),
];

// ---------- cor ----------
const hex2rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const srgb2lin = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);

function rgb2hsl(r, g, b) {
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2;
  if (mx === mn) return [0, 0, l];
  const d = mx - mn, s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
  let h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return [h * 60, s, l];
}
function hsl2rgb(h, s, l) {
  const k = (n) => (n + h / 30) % 12, a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [f(0), f(8), f(4)];
}
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// Leva qualquer cor para a família de cor SQUEMA mais próxima, preservando a
// luminosidade relativa (os degradês da paleta Kenney continuam visíveis).
export function corSquema(r, g, b) {
  const [h, s, l] = rgb2hsl(r, g, b);
  if (s < 0.16 || l > 0.96) {
    // neutros viram azul-ardósia (as sombras da marca são azuladas, nunca cinza puro)
    return hsl2rgb(226, clamp(0.16 + (1 - l) * 0.3, 0, 0.42), l < 0.3 ? clamp(l * 0.8 + 0.05, 0.08, 0.3) : clamp(l * 1.03, 0, 0.97));
  }
  const L = clamp(l, 0.22, 0.9);
  if (h >= 345 || h < 12) return hsl2rgb(356, Math.max(s, 0.78), L);
  if (h < 40) {
    if (s < 0.6 && l > 0.62) return hsl2rgb(28, clamp(s, 0.45, 0.7), l); // pele
    if (l < 0.5) return hsl2rgb(27, 0.48, clamp(l * 1.05, 0.25, 0.5)); // madeira / marrom
    return hsl2rgb(31, 1, clamp(L, 0.45, 0.62)); // laranja
  }
  if (h < 66) return hsl2rgb(44, 1, clamp(L, 0.48, 0.66));
  if (h < 170) return hsl2rgb(128, 0.58, clamp(L * 0.95, 0.3, 0.6));
  if (h < 250) return l > 0.66 ? hsl2rgb(201, 0.9, clamp(L, 0.66, 0.86)) : hsl2rgb(222, 0.78, clamp(L, 0.36, 0.6));
  if (h < 300) return hsl2rgb(266, 0.88, clamp(L, 0.45, 0.72));
  return hsl2rgb(338, 0.9, clamp(L, 0.55, 0.78));
}

function recolorirPNG(buffer, reduzirPara) {
  let png = PNG.sync.read(buffer);
  if (reduzirPara && png.width > reduzirPara) png = reduzir(png, png.width / reduzirPara);
  const d = png.data;
  for (let i = 0; i < d.length; i += 4) {
    const [r, g, b] = corSquema(d[i] / 255, d[i + 1] / 255, d[i + 2] / 255);
    d[i] = Math.round(r * 255); d[i + 1] = Math.round(g * 255); d[i + 2] = Math.round(b * 255);
  }
  return PNG.sync.write(png, { colorType: png.alpha ? 6 : 2 });
}

function reduzir(png, fator) {
  const w = Math.round(png.width / fator), h = Math.round(png.height / fator);
  const out = new PNG({ width: w, height: h });
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const acc = [0, 0, 0, 0]; let n = 0;
    for (let yy = Math.floor(y * fator); yy < Math.floor((y + 1) * fator); yy++)
      for (let xx = Math.floor(x * fator); xx < Math.floor((x + 1) * fator); xx++) {
        const j = (yy * png.width + xx) * 4; for (let c = 0; c < 4; c++) acc[c] += png.data[j + c]; n++;
      }
    const o = (y * w + x) * 4; for (let c = 0; c < 4; c++) out.data[o + c] = Math.round(acc[c] / n);
  }
  return out;
}

// ---------- download com cache ----------
async function baixar(url, destino) {
  if (fs.existsSync(destino)) return fs.readFileSync(destino);
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${r.status} ao baixar ${url}`);
  const buf = Buffer.from(await r.arrayBuffer());
  fs.mkdirSync(path.dirname(destino), { recursive: true });
  fs.writeFileSync(destino, buf);
  return buf;
}

// ---------- principal ----------
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
fs.mkdirSync(SAIDA, { recursive: true });
const catalogo = [];
const paletasKenney = {};

for (const m of MODELOS) {
  const pasta = path.join(CACHE, m.kit || m.id);
  const arquivoGlb = path.join(pasta, path.basename(new URL(m.url).pathname));
  await baixar(m.url, arquivoGlb);
  if (m.textura) {
    const original = await baixar(m.textura, path.join(pasta, 'Textures', 'colormap.png'));
    paletasKenney[m.kit] ??= recolorirPNG(original, 256);
  }

  const doc = await io.read(arquivoGlb);
  const raiz = doc.getRoot();

  if (m.textura) {
    for (const t of raiz.listTextures()) { t.setImage(paletasKenney[m.kit]).setMimeType('image/png').setURI(''); }
  }
  if (m.recolorirTexturas) {
    for (const t of raiz.listTextures()) if (t.getMimeType() === 'image/png') t.setImage(recolorirPNG(Buffer.from(t.getImage())));
  }
  if (m.cores) {
    for (const mat of raiz.listMaterials()) {
      const c = m.cores[mat.getName()];
      if (c) mat.setBaseColorFactor([...hex2rgb(c).map(srgb2lin), 1]);
    }
  }
  for (const mat of raiz.listMaterials()) mat.setMetallicFactor(0).setRoughnessFactor(Math.min(mat.getRoughnessFactor(), 0.6));

  const etapas = [dedup(), weld(), prune(), resample()];
  if (m.quantizar !== false) etapas.push(quantize({ quantizeNormal: 10, quantizePosition: 14 }));
  await doc.transform(...etapas);
  const glb = Buffer.from(await io.writeBinary(doc));

  const meta = {
    id: m.id, nome: m.nome, en: m.en, credito: m.credito, licenca: m.licenca, pagina: m.pagina, fonte: m.url,
    animacoes: raiz.listAnimations().map((a) => a.getName()), bytes: glb.length,
  };
  const js = `/* ${m.nome} — ${m.credito} — ${m.licenca}. Fonte: ${m.pagina}\n   Recolorido para a paleta SQUEMA por ferramentas/preparar-modelos.mjs */\n` +
    `(window.SQUEMA_MODELOS=window.SQUEMA_MODELOS||{})[${JSON.stringify(m.id)}]=${JSON.stringify({ ...meta, glb: glb.toString('base64') })};\n`;
  fs.writeFileSync(path.join(SAIDA, `${m.id}.js`), js);
  catalogo.push(meta);
  console.log(`${m.id.padEnd(14)} ${(glb.length / 1024).toFixed(1).padStart(7)} KB  ${meta.animacoes.join(',')}`);
}

fs.writeFileSync(path.join(SAIDA, 'catalogo.js'),
  `/* Gerado por ferramentas/preparar-modelos.mjs — não editar à mão. */\nwindow.SQUEMA_CATALOGO_MODELOS=${JSON.stringify(catalogo, null, 1)};\n`);
console.log(`${catalogo.length} modelos em assets/modelos/`);
