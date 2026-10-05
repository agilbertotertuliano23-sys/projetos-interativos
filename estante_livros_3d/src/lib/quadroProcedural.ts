/**
 * Quadro procedural do vídeo em scroll (substitui o vídeo enquanto `src` está
 * vazio). Função pura do tempo `v` (0–1), então o scroll pode ir e voltar.
 * As cenas seguem `src/data/video.ts`: dia com flores → capas voam →
 * anoitece e a estante acende → push-in.
 */
import { mix, rgba, rng } from './capas';

export interface RecursosQuadro {
  capas: { img: HTMLImageElement; cor: string }[];
  cores: string[];
}

const smooth = (a: number, b: number, v: number) => {
  const t = Math.max(0, Math.min(1, (v - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
const frac = (n: number) => n - Math.floor(n);

type Particula = {
  tipo: 'rosa' | 'petala' | 'flor';
  x0: number;
  y0: number;
  ang: number;
  vel: number;
  z: number;
  rot: number;
  giro: number;
  cor: string;
};

const CORES_FLOR = ['#f7a3a6', '#f6b8ad', '#ffd2c2', '#f4c3d8', '#fff6f1', '#b9b2f2', '#ffe0e6'];

const particulas: Particula[] = (() => {
  const r = rng(20261005);
  return Array.from({ length: 96 }, () => {
    const t = r();
    return {
      tipo: t < 0.22 ? 'rosa' : t < 0.4 ? 'flor' : 'petala',
      x0: r(),
      y0: r(),
      ang: -0.62 + (r() - 0.5) * 0.7,
      vel: 0.55 + r() * 0.8,
      z: 0.35 + r() * 1.15,
      rot: r() * Math.PI * 2,
      giro: (r() - 0.5) * 4,
      cor: CORES_FLOR[Math.floor(r() * CORES_FLOR.length)],
    } as Particula;
  }).sort((a, b) => a.z - b.z);
})();

const estrelas = (() => {
  const r = rng(77);
  return Array.from({ length: 110 }, () => ({ x: r(), y: r() * 0.7, s: 0.5 + r() * 1.6, f: r() }));
})();

function rosa(x: CanvasRenderingContext2D, raio: number, cor: string) {
  const g = x.createRadialGradient(0, 0, 0, 0, 0, raio);
  g.addColorStop(0, mix(cor.startsWith('#') ? cor : '#f7a3a6', '#9b3b4a', 0.35));
  g.addColorStop(0.7, cor);
  g.addColorStop(1, mix(cor, '#ffffff', 0.4));
  x.fillStyle = g;
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    x.beginPath();
    x.ellipse(Math.cos(a) * raio * 0.38, Math.sin(a) * raio * 0.38, raio * 0.62, raio * 0.5, a, 0, Math.PI * 2);
    x.fill();
  }
  x.strokeStyle = rgba('#7a2636', 0.28);
  x.lineWidth = Math.max(0.6, raio * 0.06);
  for (let i = 1; i <= 3; i++) {
    x.beginPath();
    x.arc(0, 0, raio * 0.16 * i, i, i + Math.PI * 1.4);
    x.stroke();
  }
}

function flor(x: CanvasRenderingContext2D, raio: number, cor: string) {
  x.fillStyle = cor;
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    x.beginPath();
    x.ellipse(Math.cos(a) * raio * 0.5, Math.sin(a) * raio * 0.5, raio * 0.48, raio * 0.3, a, 0, Math.PI * 2);
    x.fill();
  }
  x.fillStyle = '#ffd86b';
  x.beginPath();
  x.arc(0, 0, raio * 0.2, 0, Math.PI * 2);
  x.fill();
}

export function desenharQuadro(x: CanvasRenderingContext2D, w: number, h: number, v: number, rec: RecursosQuadro) {
  const noite = smooth(0.56, 0.8, v);
  const s = h / 600; // escala relativa

  // céu
  const ceu = x.createLinearGradient(0, 0, 0, h);
  ceu.addColorStop(0, mix('#6aa3e6', '#140b33', noite));
  ceu.addColorStop(0.55, mix('#a9cdf3', '#4b2378', noite));
  ceu.addColorStop(1, mix('#e8f1fb', '#c2468f', noite * 0.85));
  x.fillStyle = ceu;
  x.fillRect(0, 0, w, h);

  // sol / brilho
  const sol = x.createRadialGradient(w * 0.18, h * 0.08, 0, w * 0.18, h * 0.08, h * 0.9);
  sol.addColorStop(0, `rgba(255,255,255,${0.55 * (1 - noite)})`);
  sol.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = sol;
  x.fillRect(0, 0, w, h);

  // estrelas
  if (noite > 0.01) {
    for (const e of estrelas) {
      x.fillStyle = `rgba(255,255,255,${(noite * (0.35 + 0.65 * e.f)).toFixed(3)})`;
      x.fillRect(e.x * w, e.y * h, e.s * s, e.s * s);
    }
  }

  // nuvens
  for (let i = 0; i < 6; i++) {
    const cx = (frac(i * 0.37 + v * 0.18) * 1.6 - 0.3) * w;
    const cy = (0.12 + (i % 3) * 0.17) * h;
    const r = (120 + (i % 2) * 90) * s;
    const g = x.createRadialGradient(cx, cy, 0, cx, cy, r);
    g.addColorStop(0, `rgba(255,255,255,${0.35 * (1 - noite * 0.8)})`);
    g.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = g;
    x.fillRect(cx - r, cy - r, r * 2, r * 2);
  }

  // estante neon (cena 3)
  const acende = smooth(0.6, 0.8, v);
  if (acende > 0) {
    const prateleiras = [0.66, 0.79];
    prateleiras.forEach((py, i) => {
      const larg = w * 0.78 * smooth(0.6 + i * 0.05, 0.78 + i * 0.05, v);
      const y = h * py;
      const cor = rec.cores[i % rec.cores.length] ?? '#a64dff';
      x.save();
      x.shadowColor = cor;
      x.shadowBlur = 26 * s;
      x.strokeStyle = cor;
      x.lineWidth = 4 * s;
      x.beginPath();
      x.moveTo(w / 2 - larg / 2, y);
      x.lineTo(w / 2 + larg / 2, y);
      x.stroke();
      // livros acesos sobre a prateleira
      const n = 14;
      const aparece = smooth(0.66 + i * 0.04, 0.86, v);
      for (let k = 0; k < n; k++) {
        if (k / n > aparece) break;
        const bx = w / 2 - w * 0.36 + (k / n) * w * 0.72;
        const bh = (30 + ((k * 37 + i * 11) % 22)) * s;
        const bw = (k % 4 === 1 ? 26 : 11 + ((k * 7) % 7)) * s;
        const c = rec.cores[(k + i) % rec.cores.length] ?? cor;
        x.shadowColor = c;
        x.strokeStyle = c;
        x.lineWidth = 2 * s;
        x.fillStyle = rgba(c.startsWith('#') ? c : '#a64dff', 0.22);
        x.beginPath();
        x.roundRect(bx, y - bh - 3 * s, bw, bh, 2 * s);
        x.fill();
        x.stroke();
      }
      x.restore();
    });
  }

  // capas voando (cena 2)
  const janela = smooth(0.24, 0.34, v) * (1 - smooth(0.56, 0.66, v));
  if (janela > 0.01 && rec.capas.length) {
    rec.capas.slice(0, 6).forEach((c, i) => {
      const t = v - 0.22 - i * 0.025;
      const px = w * (0.12 + ((i * 0.31) % 0.8));
      const py = h * (1.15 - t * 2.2 - (i % 2) * 0.08);
      const alt = h * (0.24 + (i % 3) * 0.04);
      const larg = alt * (2 / 3);
      x.save();
      x.globalAlpha = janela;
      x.translate(px, py);
      x.rotate(Math.sin(t * 6 + i) * 0.35);
      x.shadowColor = c.cor;
      x.shadowBlur = 30 * s;
      x.drawImage(c.img, -larg / 2, -alt / 2, larg, alt);
      x.restore();
    });
  }

  // flores e pétalas (atravessam tudo, com rastro)
  const T = v * 3.4;
  for (const p of particulas) {
    const dist = T * p.vel * p.z * 0.55;
    const px = (frac(p.x0 + Math.cos(p.ang) * dist) * 1.3 - 0.15) * w;
    const py = (frac(p.y0 + Math.sin(p.ang) * dist) * 1.3 - 0.15) * h;
    const raio = (p.tipo === 'rosa' ? 26 : p.tipo === 'flor' ? 15 : 10) * s * p.z;
    const alpha = (0.55 + 0.45 * Math.min(1, p.z)) * (1 - noite * 0.35);
    x.save();
    x.translate(px, py);
    x.globalAlpha = alpha;
    if (p.z > 1.05) {
      // motion blur: estica ao longo da direção
      x.rotate(p.ang);
      x.scale(1.5, 0.92);
      x.rotate(-p.ang);
    }
    x.rotate(p.rot + T * p.giro);
    if (p.tipo === 'rosa') rosa(x, raio, p.cor);
    else if (p.tipo === 'flor') flor(x, raio, p.cor);
    else {
      x.fillStyle = p.cor;
      x.beginPath();
      x.ellipse(0, 0, raio, raio * 0.55, 0, 0, Math.PI * 2);
      x.fill();
    }
    x.restore();
  }

  // curva inferior (a "página" branca da ref. 05)
  x.fillStyle = mix('#fbf7f2', '#1b1030', noite);
  x.beginPath();
  x.moveTo(0, h * 0.93);
  x.quadraticCurveTo(w / 2, h * 0.8, w, h * 0.93);
  x.lineTo(w, h);
  x.lineTo(0, h);
  x.closePath();
  x.fill();
}
