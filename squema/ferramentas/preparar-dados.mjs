// Gera os dados embutidos das demos:
//   assets/dados/mundo.js      — países do Natural Earth 1:110m (domínio público)
//   assets/dados/moleculas.js  — estruturas 3D (PDB dos exemplos do three.js + moléculas simples)
//
//   npm run dados
import fs from 'node:fs';
import path from 'node:path';

const AQUI = path.dirname(new URL(import.meta.url).pathname);
const CACHE = path.join(AQUI, '.cache-modelos', 'dados');
const SAIDA = path.join(AQUI, '..', 'assets', 'dados');
fs.mkdirSync(CACHE, { recursive: true }); fs.mkdirSync(SAIDA, { recursive: true });

async function baixar(url) {
  const destino = path.join(CACHE, path.basename(new URL(url).pathname));
  if (!fs.existsSync(destino)) {
    const r = await fetch(url); if (!r.ok) throw new Error(`${r.status} ${url}`);
    fs.writeFileSync(destino, Buffer.from(await r.arrayBuffer()));
  }
  return fs.readFileSync(destino, 'utf8');
}

// ---------------- mundo ----------------
const CONTINENTES = { Africa: 'África', Asia: 'Ásia', Europe: 'Europa', 'North America': 'América do Norte', 'South America': 'América do Sul', Oceania: 'Oceania', Antarctica: 'Antártida', 'Seven seas (open ocean)': 'Ilhas oceânicas' };
const SUBREGIOES = {
  'Eastern Africa': 'África Oriental', 'Middle Africa': 'África Central', 'Northern Africa': 'Norte da África', 'Southern Africa': 'África Austral', 'Western Africa': 'África Ocidental',
  Caribbean: 'Caribe', 'Central America': 'América Central', 'South America': 'América do Sul', 'Northern America': 'América do Norte',
  'Central Asia': 'Ásia Central', 'Eastern Asia': 'Ásia Oriental', 'South-Eastern Asia': 'Sudeste Asiático', 'Southern Asia': 'Sul da Ásia', 'Western Asia': 'Ásia Ocidental (Oriente Médio)',
  'Eastern Europe': 'Europa Oriental', 'Northern Europe': 'Norte da Europa', 'Southern Europe': 'Sul da Europa', 'Western Europe': 'Europa Ocidental',
  'Australia and New Zealand': 'Austrália e Nova Zelândia', Melanesia: 'Melanésia', Micronesia: 'Micronésia', Polynesia: 'Polinésia', Antarctica: 'Antártida', 'Seven seas (open ocean)': 'Ilhas oceânicas',
};
const RENDA = { 1: 'Alta renda (OCDE)', 2: 'Alta renda', 3: 'Renda média-alta', 4: 'Renda média-baixa', 5: 'Baixa renda' };

const geo = JSON.parse(await baixar('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson'));
const Q = 20; // 1/20 de grau
const paises = geo.features.map((f) => {
  const p = f.properties;
  const poligonos = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
  const aneis = [];
  for (const pol of poligonos) for (const anel of pol) {
    const plano = [];
    let ax = null, ay = null;
    for (const [x, y] of anel) {
      const qx = Math.round(x * Q), qy = Math.round(y * Q);
      if (qx === ax && qy === ay) continue;
      plano.push(qx, qy); ax = qx; ay = qy;
    }
    if (plano.length >= 6) aneis.push(plano);
  }
  return {
    n: p.NAME_PT || p.NAME, en: p.NAME_EN || p.NAME, a2: p.ISO_A2_EH !== '-99' ? p.ISO_A2_EH : '',
    c: CONTINENTES[p.CONTINENT] || p.CONTINENT, s: SUBREGIOES[p.SUBREGION] || p.SUBREGION,
    pop: p.POP_EST, popAno: p.POP_YEAR, pib: p.GDP_MD, pibAno: p.GDP_YEAR,
    renda: RENDA[String(p.INCOME_GRP).charAt(0)] || '', lx: +p.LABEL_X.toFixed(2), ly: +p.LABEL_Y.toFixed(2),
    an: aneis,
  };
}).sort((a, b) => a.n.localeCompare(b.n, 'pt'));
fs.writeFileSync(path.join(SAIDA, 'mundo.js'),
  `/* Países — Natural Earth 1:110m Cultural Vectors, v5 (domínio público, naturalearthdata.com).\n   Coordenadas em 1/${Q} de grau. Gerado por ferramentas/preparar-dados.mjs. */\n` +
  `window.SQUEMA_MUNDO={escala:${Q},paises:${JSON.stringify(paises)}};\n`);
console.log(`mundo.js: ${paises.length} países, ${(fs.statSync(path.join(SAIDA, 'mundo.js')).size / 1024).toFixed(0)} KB`);

// ---------------- moléculas ----------------
const MASSA = { H: 1.008, C: 12.011, N: 14.007, O: 15.999, F: 18.998, Na: 22.99, Mg: 24.305, Al: 26.982, P: 30.974, S: 32.06, Cl: 35.45, K: 39.098, Ca: 40.078, Cu: 63.546, Ba: 137.33, Y: 88.906 };

function lerPDB(txt) {
  const atomos = [], idx = {}, ligacoes = new Map();
  for (const l of txt.split('\n')) {
    if (l.startsWith('ATOM') || l.startsWith('HETATM')) {
      const serial = parseInt(l.slice(6, 11));
      let el = l.slice(76, 78).trim() || l.slice(12, 16).trim().replace(/[0-9]/g, '');
      el = el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
      idx[serial] = atomos.length;
      atomos.push([el, +parseFloat(l.slice(30, 38)).toFixed(3), +parseFloat(l.slice(38, 46)).toFixed(3), +parseFloat(l.slice(46, 54)).toFixed(3)]);
    } else if (l.startsWith('CONECT')) {
      const nums = l.slice(6, 31).match(/.{1,5}/g).map((s) => parseInt(s)).filter((n) => n > 0);
      const a = idx[nums[0]];
      for (const s of nums.slice(1)) {
        const b = idx[s]; if (a == null || b == null) continue;
        const k = a < b ? `${a}-${b}` : `${b}-${a}`;
        ligacoes.set(k, (ligacoes.get(k) || 0) + 1);
      }
    }
  }
  // No CONECT cada ligação aparece pelos dois lados; repetições indicam ligação dupla.
  const lig = [...ligacoes].map(([k, n]) => { const [a, b] = k.split('-').map(Number); return [a, b, n >= 4 ? 2 : 1]; });
  return { atomos, ligacoes: lig };
}

function formula(atomos) {
  const c = {}; for (const [e] of atomos) c[e] = (c[e] || 0) + 1;
  const ordem = c.C ? ['C', 'H', ...Object.keys(c).filter((e) => e !== 'C' && e !== 'H').sort()] : Object.keys(c).sort();
  return ordem.filter((e) => c[e]).map((e) => e + (c[e] > 1 ? c[e] : '')).join('');
}

const SIMPLES = {
  agua: { nome: 'Água', atomos: [['O', 0, 0, 0], ['H', 0.757, 0.586, 0], ['H', -0.757, 0.586, 0]], ligacoes: [[0, 1, 1], [0, 2, 1]], geometria: 'Angular (104,5°)', uso: 'Solvente universal; ~70% do corpo humano.' },
  co2: { nome: 'Dióxido de carbono', atomos: [['C', 0, 0, 0], ['O', 1.16, 0, 0], ['O', -1.16, 0, 0]], ligacoes: [[0, 1, 2], [0, 2, 2]], geometria: 'Linear (180°)', uso: 'Produto da respiração e da combustão; usado na fotossíntese.' },
  metano: { nome: 'Metano', atomos: [['C', 0, 0, 0], ['H', 0.629, 0.629, 0.629], ['H', -0.629, -0.629, 0.629], ['H', -0.629, 0.629, -0.629], ['H', 0.629, -0.629, -0.629]], ligacoes: [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1]], geometria: 'Tetraédrica (109,5°)', uso: 'Principal componente do gás natural; gás de efeito estufa.' },
  amonia: { nome: 'Amônia', formula: 'NH3', atomos: [['N', 0, 0.12, 0], ['H', 0.94, -0.26, 0], ['H', -0.47, -0.26, 0.814], ['H', -0.47, -0.26, -0.814]], ligacoes: [[0, 1, 1], [0, 2, 1], [0, 3, 1]], geometria: 'Piramidal (107°)', uso: 'Base de fertilizantes nitrogenados.' },
  oxigenio: { nome: 'Gás oxigênio', atomos: [['O', 0.604, 0, 0], ['O', -0.604, 0, 0]], ligacoes: [[0, 1, 2]], geometria: 'Linear', uso: 'Essencial para a respiração celular.' },
  nitrogenio: { nome: 'Gás nitrogênio', atomos: [['N', 0.55, 0, 0], ['N', -0.55, 0, 0]], ligacoes: [[0, 1, 3]], geometria: 'Linear', uso: '78% do ar; ligação tripla muito estável.' },
};
const PDB = {
  etanol: { arq: 'ethanol', nome: 'Etanol', geometria: 'Cadeia aberta', uso: 'Combustível e álcool das bebidas.' },
  glicose: { arq: 'glucose', nome: 'Glicose', geometria: 'Anel de seis membros', uso: 'Fonte de energia das células.' },
  cafeina: { arq: 'caffeine', nome: 'Cafeína', geometria: 'Anéis fundidos (purina)', uso: 'Estimulante presente no café e no chá.' },
  aspirina: { arq: 'aspirin', nome: 'Ácido acetilsalicílico', geometria: 'Anel aromático', uso: 'Analgésico e anti-inflamatório (aspirina).' },
  nicotina: { arq: 'nicotine', nome: 'Nicotina', geometria: 'Dois anéis', uso: 'Alcaloide do tabaco; causa dependência.' },
  cubano: { arq: 'cubane', nome: 'Cubano', geometria: 'Cubo (ângulos de 90°)', uso: 'Hidrocarboneto sintético muito tensionado.' },
  colesterol: { arq: 'cholesterol', nome: 'Colesterol', geometria: 'Quatro anéis fundidos', uso: 'Componente das membranas celulares.' },
  buckyball: { arq: 'buckyball', nome: 'Fulereno C₆₀', geometria: 'Esfera (bola de futebol)', uso: 'Forma alotrópica do carbono.' },
  nacl: { arq: 'nacl', formula: 'NaCl', massa: 58.44, nome: 'Cloreto de sódio (cristal)', geometria: 'Retículo cúbico', uso: 'Sal de cozinha — composto iônico.', ionico: true },
  diamante: { arq: 'diamond', formula: 'C (rede)', massa: 12.01, nome: 'Diamante (trecho)', geometria: 'Rede tetraédrica', uso: 'Carbono em rede covalente: o material natural mais duro.' },
  grafite: { arq: 'graphite', formula: 'C (rede)', massa: 12.01, nome: 'Grafite (trecho)', geometria: 'Camadas hexagonais', uso: 'Carbono em folhas; usado em lápis.' },
};
const moleculas = {};
for (const [id, m] of Object.entries(SIMPLES)) moleculas[id] = { ...m, fonte: 'geometria de referência (VSEPR)' };
for (const [id, m] of Object.entries(PDB)) {
  const dados = lerPDB(await baixar(`https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/models/pdb/${m.arq}.pdb`));
  moleculas[id] = { nome: m.nome, geometria: m.geometria, uso: m.uso, ionico: !!m.ionico, formula: m.formula, massa: m.massa, ...dados, fonte: `three.js examples/models/pdb/${m.arq}.pdb` };
}
for (const m of Object.values(moleculas)) {
  m.formula ??= formula(m.atomos);
  m.massa ??= +m.atomos.reduce((s, [e]) => s + (MASSA[e] || 0), 0).toFixed(2);
}
fs.writeFileSync(path.join(SAIDA, 'moleculas.js'),
  `/* Moléculas 3D. Estruturas PDB dos exemplos do three.js (MIT; geradas pelo NCI/CADD), moléculas simples com geometria de referência.\n   Gerado por ferramentas/preparar-dados.mjs. */\nwindow.SQUEMA_MOLECULAS=${JSON.stringify(moleculas)};\n`);
console.log(`moleculas.js: ${Object.keys(moleculas).length} moléculas, ${(fs.statSync(path.join(SAIDA, 'moleculas.js')).size / 1024).toFixed(0)} KB`);
