/**
 * Capas neon procedurais (ref. 02). Os mesmos pintores alimentam o livro 3D
 * (BookCfg.front/spine/back) e as miniaturas da estante e do painel, então um
 * livro tem sempre a mesma arte nos dois mundos. Tudo é determinístico por id.
 */
import type { BookCfg } from '../components/BooksShowcase/BooksShowcase';
import type { Livro } from '../data/biblioteca';

export const FONTE_DISPLAY = '"Syne Variable", "Syne", system-ui, sans-serif';
export const FONTE_UI = '"Plus Jakarta Sans Variable", system-ui, sans-serif';

/** Resolve quando as fontes usadas nos canvas estão carregadas. */
export const fontesProntas: Promise<void> =
  typeof document === 'undefined' || !document.fonts
    ? Promise.resolve()
    : Promise.all([
        document.fonts.load(`800 120px ${FONTE_DISPLAY}`),
        document.fonts.load(`600 40px ${FONTE_UI}`),
      ])
        .then(() => undefined)
        .catch(() => undefined);

// Utilidades: hash, PRNG e cor ------------------------------------------------

export function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function rng(seed: number): () => number {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function rgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.replace(/./g, (c) => c + c) : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function rgba(hex: string, a: number): string {
  const [r, g, b] = rgb(hex);
  return `rgba(${r},${g},${b},${a})`;
}

/** Mistura `a` com `b` (t = 0 → a, t = 1 → b). */
export function mix(a: string, b: string, t: number): string {
  const ca = rgb(a);
  const cb = rgb(b);
  const c = ca.map((v, i) => Math.round(v + (cb[i] - v) * t));
  return `rgb(${c[0]},${c[1]},${c[2]})`;
}

// Texto -----------------------------------------------------------------------

function quebrar(x: CanvasRenderingContext2D, texto: string, maxW: number): string[] {
  const palavras = texto.split(/\s+/).filter(Boolean);
  const linhas: string[] = [];
  let linha = '';
  for (const p of palavras) {
    const teste = linha ? `${linha} ${p}` : p;
    if (x.measureText(teste).width > maxW && linha) {
      linhas.push(linha);
      linha = p;
    } else linha = teste;
  }
  if (linha) linhas.push(linha);
  return linhas;
}

/** Maior corpo em que o texto cabe em `maxLinhas` linhas de `maxW`. */
function ajustar(
  x: CanvasRenderingContext2D,
  texto: string,
  maxW: number,
  maxLinhas: number,
  tamanho: number,
  minimo: number,
  peso = 800,
  familia = FONTE_DISPLAY,
) {
  let t = tamanho;
  for (; t > minimo; t -= 4) {
    x.font = `${peso} ${t}px ${familia}`;
    const linhas = quebrar(x, texto, maxW);
    if (linhas.length <= maxLinhas && linhas.every((l) => x.measureText(l).width <= maxW)) {
      return { linhas, tamanho: t };
    }
  }
  x.font = `${peso} ${minimo}px ${familia}`;
  return { linhas: quebrar(x, texto, maxW).slice(0, maxLinhas), tamanho: minimo };
}

function brilho(x: CanvasRenderingContext2D, cor: string, blur: number) {
  x.shadowColor = cor;
  x.shadowBlur = blur;
}
function semBrilho(x: CanvasRenderingContext2D) {
  x.shadowColor = 'transparent';
  x.shadowBlur = 0;
}

// Pintores ----------------------------------------------------------------------

export const FRENTE = { w: 1024, h: 1536 };
export const LOMBADA = { w: 220, h: 1536 };

export function pintarFrente(x: CanvasRenderingContext2D, w: number, h: number, livro: Livro) {
  const u = w / 1024;
  const c = livro.cor;
  const r = rng(hash(livro.id + ':frente'));
  const variante = hash(livro.id) % 5;
  const fundo = mix(c, '#07060c', 0.86);

  x.save();
  x.fillStyle = fundo;
  x.fillRect(0, 0, w, h);
  const halo = x.createRadialGradient(w * 0.5, h * 0.36, 0, w * 0.5, h * 0.36, h * 0.75);
  halo.addColorStop(0, rgba(c, 0.38));
  halo.addColorStop(1, rgba(c, 0));
  x.fillStyle = halo;
  x.fillRect(0, 0, w, h);

  x.textAlign = 'center';
  x.textBaseline = 'alphabetic';
  let tituloY = h * 0.76;
  let tituloCor = '#ffffff';

  if (variante === 0) {
    // círculo com inicial (como o "5 FIVE")
    brilho(x, c, 70 * u);
    x.fillStyle = c;
    x.beginPath();
    x.arc(w / 2, h * 0.37, w * 0.31, 0, Math.PI * 2);
    x.fill();
    semBrilho(x);
    x.fillStyle = mix(c, '#07060c', 0.82);
    x.font = `800 ${w * 0.4}px ${FONTE_DISPLAY}`;
    x.textBaseline = 'middle';
    x.fillText(livro.titulo.trim().charAt(0).toUpperCase(), w / 2, h * 0.375);
    x.textBaseline = 'alphabetic';
  } else if (variante === 1) {
    // listras diagonais + faixa de título (como "POSTERS")
    x.fillStyle = mix(c, '#07060c', 0.6);
    x.fillRect(0, 0, w, h);
    x.save();
    x.translate(w / 2, h / 2);
    x.rotate(-0.42);
    for (let i = -14; i < 14; i++) {
      x.fillStyle = i % 2 ? rgba(c, 0.5) : rgba(c, 0.16);
      x.fillRect(i * 90 * u, -h, 46 * u, h * 2);
    }
    x.restore();
    x.fillStyle = '#07060c';
    x.fillRect(70 * u, 90 * u, w - 140 * u, 330 * u);
    tituloY = 0;
  } else if (variante === 2) {
    // grande X luminoso
    x.lineCap = 'round';
    x.lineWidth = 120 * u;
    brilho(x, c, 60 * u);
    x.strokeStyle = c;
    x.beginPath();
    x.moveTo(170 * u, 190 * u);
    x.lineTo(w - 170 * u, h * 0.62);
    x.moveTo(w - 170 * u, 190 * u);
    x.lineTo(170 * u, h * 0.62);
    x.stroke();
    semBrilho(x);
    x.lineWidth = 34 * u;
    x.strokeStyle = 'rgba(255,255,255,0.55)';
    x.beginPath();
    x.moveTo(170 * u, 190 * u);
    x.lineTo(w - 170 * u, h * 0.62);
    x.stroke();
  } else if (variante === 3) {
    // retícula (halftone) irradiando de um ponto
    const cx = w * (0.3 + r() * 0.4);
    const cy = h * 0.32;
    const passo = 44 * u;
    x.fillStyle = c;
    for (let py = passo / 2; py < h * 0.66; py += passo) {
      for (let px = passo / 2; px < w; px += passo) {
        const d = Math.hypot(px - cx, py - cy) / (w * 0.75);
        const raio = Math.max(0, (1 - d) * passo * 0.48);
        if (raio < 1) continue;
        x.beginPath();
        x.arc(px, py, raio, 0, Math.PI * 2);
        x.fill();
      }
    }
  } else {
    // arcos concêntricos (nascer do sol)
    x.lineWidth = 30 * u;
    for (let i = 0; i < 9; i++) {
      x.strokeStyle = i % 2 ? rgba(c, 0.28) : c;
      if (i === 0) brilho(x, c, 50 * u);
      x.beginPath();
      x.arc(w / 2, h * 0.64, 90 * u + i * 62 * u, Math.PI, 0);
      x.stroke();
      semBrilho(x);
    }
    tituloCor = '#ffffff';
  }

  // título + autor
  if (variante === 1) {
    const { linhas, tamanho } = ajustar(x, livro.titulo.toUpperCase(), w - 220 * u, 3, 150 * u, 54 * u);
    const altura = linhas.length * tamanho * 0.98;
    let y = 90 * u + (330 * u - altura) / 2 + tamanho * 0.82;
    brilho(x, c, 34 * u);
    x.fillStyle = c;
    for (const l of linhas) {
      x.fillText(l, w / 2, y);
      y += tamanho * 0.98;
    }
    semBrilho(x);
    x.font = `600 ${44 * u}px ${FONTE_UI}`;
    x.fillStyle = '#ffffff';
    x.fillText(livro.autor, w / 2, h - 150 * u);
  } else {
    const { linhas, tamanho } = ajustar(x, livro.titulo, w - 200 * u, 3, 128 * u, 50 * u);
    let y = tituloY;
    brilho(x, rgba(c, 0.9), 26 * u);
    x.fillStyle = tituloCor;
    for (const l of linhas) {
      x.fillText(l, w / 2, y);
      y += tamanho * 1.02;
    }
    semBrilho(x);
    x.font = `600 ${44 * u}px ${FONTE_UI}`;
    x.fillStyle = mix(c, '#ffffff', 0.35);
    x.fillText(livro.autor, w / 2, Math.min(h - 120 * u, y + 34 * u));
  }

  // grão
  for (let i = 0; i < 900; i++) {
    x.fillStyle = `rgba(255,255,255,${(r() * 0.06).toFixed(3)})`;
    x.fillRect(r() * w, r() * h, 2.2 * u, 2.2 * u);
  }

  // moldura de neon (a "caixa de luz")
  const luz = x.createLinearGradient(0, 0, 0, h);
  luz.addColorStop(0, 'rgba(255,255,255,0.10)');
  luz.addColorStop(0.35, 'rgba(255,255,255,0)');
  x.fillStyle = luz;
  x.fillRect(0, 0, w, h);
  brilho(x, c, 40 * u);
  x.strokeStyle = c;
  x.lineWidth = 7 * u;
  x.beginPath();
  x.roundRect(34 * u, 34 * u, w - 68 * u, h - 68 * u, 22 * u);
  x.stroke();
  semBrilho(x);
  x.restore();
}

export function pintarLombada(x: CanvasRenderingContext2D, w: number, h: number, livro: Livro) {
  const u = w / 220;
  const c = livro.cor;
  x.save();
  const g = x.createLinearGradient(0, 0, w, 0);
  g.addColorStop(0, mix(c, '#07060c', 0.55));
  g.addColorStop(0.5, mix(c, '#07060c', 0.78));
  g.addColorStop(1, mix(c, '#07060c', 0.6));
  x.fillStyle = g;
  x.fillRect(0, 0, w, h);

  // filetes laterais acesos
  x.fillStyle = c;
  x.fillRect(0, 0, 7 * u, h);
  x.fillRect(w - 7 * u, 0, 7 * u, h);
  // faixas
  x.fillRect(0, 70 * u, w, 18 * u);
  x.fillRect(0, h - 88 * u, w, 18 * u);

  x.translate(w / 2, h * 0.44);
  x.rotate(Math.PI / 2);
  x.textAlign = 'center';
  x.textBaseline = 'middle';
  const { tamanho } = ajustar(x, livro.titulo.toUpperCase(), h * 0.6, 1, 104 * u, 34 * u);
  x.font = `800 ${tamanho}px ${FONTE_DISPLAY}`;
  brilho(x, c, 24 * u);
  x.fillStyle = mix(c, '#ffffff', 0.25);
  x.fillText(livro.titulo.toUpperCase(), 0, 0);
  semBrilho(x);
  x.font = `600 ${30 * u}px ${FONTE_UI}`;
  x.fillStyle = 'rgba(255,255,255,0.78)';
  x.fillText(livro.autor.toUpperCase(), h * 0.36, 0);
  x.restore();
}

export function pintarVerso(x: CanvasRenderingContext2D, w: number, h: number, livro: Livro) {
  const u = w / 1024;
  const c = livro.cor;
  const r = rng(hash(livro.id + ':verso'));
  x.save();
  x.fillStyle = mix(c, '#07060c', 0.84);
  x.fillRect(0, 0, w, h);
  x.textAlign = 'left';
  x.fillStyle = c;
  x.font = `800 ${64 * u}px ${FONTE_DISPLAY}`;
  x.fillText(livro.titulo, 130 * u, 230 * u);
  x.font = `500 ${40 * u}px ${FONTE_UI}`;
  x.fillStyle = 'rgba(255,255,255,0.78)';
  let y = 330 * u;
  for (const l of quebrar(x, livro.descricao, w - 260 * u).slice(0, 12)) {
    x.fillText(l, 130 * u, y);
    y += 58 * u;
  }
  // código de barras
  x.fillStyle = '#fff';
  x.beginPath();
  x.roundRect(w - 360 * u, h - 290 * u, 240 * u, 160 * u, 10 * u);
  x.fill();
  x.fillStyle = '#111';
  let bx = w - 340 * u;
  while (bx < w - 140 * u) {
    const bw = (2 + r() * 6) * u;
    if (r() > 0.4) x.fillRect(bx, h - 270 * u, bw, 100 * u);
    bx += bw + (2 + r() * 4) * u;
  }
  brilho(x, c, 30 * u);
  x.strokeStyle = c;
  x.lineWidth = 6 * u;
  x.beginPath();
  x.roundRect(34 * u, 34 * u, w - 68 * u, h - 68 * u, 22 * u);
  x.stroke();
  x.restore();
}

// Ponte para o modelo 3D -------------------------------------------------------

export function paraBookCfg(livro: Livro): BookCfg {
  return {
    id: livro.id,
    title: livro.titulo,
    author: livro.autor,
    year: livro.ano,
    stars: 5,
    desc: livro.descricao,
    front: (x, w, h) => pintarFrente(x, w, h, livro),
    spine: (x, w, h) => pintarLombada(x, w, h, livro),
    back: (x, w, h) => pintarVerso(x, w, h, livro),
    edge: '#efe6d2',
    spineBg: mix(livro.cor, '#07060c', 0.7),
    backBg: mix(livro.cor, '#07060c', 0.84),
    chapters: livro.capitulos,
  };
}

// Miniaturas (estante e painel) -----------------------------------------------

export type Face = 'frente' | 'lombada';
const cache = new Map<string, Promise<string>>();

/** URL (blob) de uma face pintada em escala reduzida. Cacheado por conteúdo. */
export function urlCapa(livro: Livro, face: Face, escala = 0.4): Promise<string> {
  const chave = [face, livro.id, livro.titulo, livro.autor, livro.cor, escala].join('|');
  let p = cache.get(chave);
  if (!p) {
    p = fontesProntas.then(
      () =>
        new Promise<string>((resolve, reject) => {
          const base = face === 'frente' ? FRENTE : LOMBADA;
          const c = document.createElement('canvas');
          c.width = Math.round(base.w * escala);
          c.height = Math.round(base.h * escala);
          const x = c.getContext('2d');
          if (!x) return reject(new Error('canvas 2d indisponível'));
          x.scale(escala, escala);
          if (face === 'frente') pintarFrente(x, base.w, base.h, livro);
          else pintarLombada(x, base.w, base.h, livro);
          c.toBlob((b) => (b ? resolve(URL.createObjectURL(b)) : reject(new Error('toBlob falhou'))), 'image/webp', 0.9);
        }),
    );
    cache.set(chave, p);
  }
  return p;
}
