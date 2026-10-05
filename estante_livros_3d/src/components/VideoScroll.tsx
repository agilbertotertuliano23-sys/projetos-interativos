import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { videoScroll as cfg } from '../data/video';
import { urlCapa } from '../lib/capas';
import { desenharQuadro, type RecursosQuadro } from '../lib/quadroProcedural';
import { livrosDaSessao, useLibrary } from '../state/library';
import { Logo } from './Logo';

const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const faixa = (a: number, b: number, v: number) => clamp((v - a) / (b - a));
const suave = (t: number) => t * t * (3 - 2 * t);

// Fases do scroll (progresso da seção, 0–1)
const ABRE = [0.02, 0.2] as const; // o dispositivo se desdobra
const VIDEO = [0.18, 0.88] as const; // linha do tempo do vídeo
const ZOOM = [0.86, 1] as const; // aproxima e destaca o CTA

/** `section#video` (ref. 05): dispositivo dobrável que abre e toca o vídeo pelo scroll. */
export function VideoScroll({ onCta }: { onCta: () => void }) {
  const lib = useLibrary();
  const secaoRef = useRef<HTMLElement>(null);
  const palcoRef = useRef<HTMLDivElement>(null);
  const esqRef = useRef<HTMLCanvasElement>(null);
  const dirRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const petalasRef = useRef<HTMLDivElement>(null);
  const [cena, setCena] = useState(0);
  const [usarVideo, setUsarVideo] = useState(Boolean(cfg.src));

  const menu = lib.sessoes.slice(0, 5).map((s) => s.nome);

  // recursos do quadro procedural: capas dos livros + cores das sessões
  const livrosCapa = useMemo(() => {
    const vistos = new Set<string>();
    const lista = lib.sessoes.flatMap((s) => livrosDaSessao(s, lib.livroPorId)).filter((l) => !vistos.has(l.id) && vistos.add(l.id));
    return lista.slice(0, 6);
  }, [lib.sessoes, lib.livroPorId]);
  const recursos = useRef<RecursosQuadro>({ capas: [], cores: [] });
  const redesenhar = useRef<() => void>(() => {});

  useEffect(() => {
    recursos.current.cores = lib.sessoes.map((s) => s.cor);
    let vivo = true;
    Promise.all(
      livrosCapa.map(
        (l) =>
          urlCapa(l, 'frente').then(
            (u) =>
              new Promise<{ img: HTMLImageElement; cor: string } | null>((res) => {
                const img = new Image();
                img.onload = () => res({ img, cor: l.cor });
                img.onerror = () => res(null);
                img.src = u;
              }),
          ),
      ),
    ).then((capas) => {
      if (!vivo) return;
      recursos.current.capas = capas.filter((c): c is { img: HTMLImageElement; cor: string } => Boolean(c));
      redesenhar.current();
    });
    return () => {
      vivo = false;
    };
  }, [livrosCapa, lib.sessoes]);

  useEffect(() => {
    const secao = secaoRef.current;
    const palco = palcoRef.current;
    const esq = esqRef.current;
    const dir = dirRef.current;
    if (!secao || !palco || !esq || !dir) return;

    const quadro = document.createElement('canvas');
    const qx = quadro.getContext('2d');
    const ex = esq.getContext('2d');
    const dx = dir.getContext('2d');
    if (!qx || !ex || !dx) return;

    let raf = 0;
    let ultimoP = -1;
    let ultimoV = -1;
    let cenaAtual = -1;
    let emVista = false;

    const dimensionar = () => {
      const r = esq.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.max(2, Math.round(r.width * dpr));
      const h = Math.max(2, Math.round(r.height * dpr));
      for (const c of [esq, dir]) {
        if (c.width !== w || c.height !== h) {
          c.width = w;
          c.height = h;
        }
      }
      quadro.width = w * 2;
      quadro.height = h;
      ultimoV = -1;
    };

    const pintar = (v: number) => {
      const video = videoRef.current;
      const W = quadro.width;
      const H = quadro.height;
      if (usarVideo && video && video.readyState >= 2) {
        // cobre o quadro mantendo a proporção do vídeo
        const vr = video.videoWidth / video.videoHeight;
        const qr = W / H;
        let sw = video.videoWidth;
        let sh = video.videoHeight;
        if (vr > qr) sw = sh * qr;
        else sh = sw / qr;
        qx.drawImage(video, (video.videoWidth - sw) / 2, (video.videoHeight - sh) / 2, sw, sh, 0, 0, W, H);
      } else {
        desenharQuadro(qx, W, H, v, recursos.current);
      }
      const half = W / 2;
      ex.drawImage(quadro, 0, 0, half, H, 0, 0, esq.width, esq.height);
      dx.drawImage(quadro, half, 0, half, H, 0, 0, dir.width, dir.height);
    };

    const quadroLoop = () => {
      raf = 0;
      const r = secao.getBoundingClientRect();
      const total = Math.max(1, r.height - window.innerHeight);
      const p = clamp(-r.top / total);
      if (p !== ultimoP) {
        ultimoP = p;
        const abre = suave(faixa(ABRE[0], ABRE[1], p));
        const zoom = suave(faixa(ZOOM[0], ZOOM[1], p));
        const ceu = suave(faixa(0.04, 0.22, p)) * (1 - suave(faixa(0.95, 1, p)));
        palco.style.setProperty('--dobra', `${(60 - 54 * abre).toFixed(2)}deg`);
        palco.style.setProperty('--inclina', `${(16 - 11 * abre).toFixed(2)}deg`);
        palco.style.setProperty('--escala', (0.78 + 0.22 * abre + 0.12 * zoom).toFixed(4));
        palco.style.setProperty('--sobe', `${((1 - abre) * 6).toFixed(2)}vh`);
        palco.style.setProperty('--ceu', ceu.toFixed(3));
        palco.style.setProperty('--ui', suave(faixa(0.17, 0.26, p)).toFixed(3));
        palco.style.setProperty('--cta', suave(faixa(0.8, 0.92, p)).toFixed(3));
        palco.style.setProperty('--p', p.toFixed(4));

        const v = faixa(VIDEO[0], VIDEO[1], p);
        const c = Math.max(0, cfg.cenas.findIndex((s) => v >= s.inicio && v <= s.fim));
        if (c !== cenaAtual) {
          cenaAtual = c;
          setCena(c);
        }
        palco.style.setProperty('--v', v.toFixed(4));

        // pétalas na frente do dispositivo (paralaxe)
        petalasRef.current?.querySelectorAll<HTMLElement>('[data-petala]').forEach((el, i) => {
          const k = 0.6 + (i % 4) * 0.35;
          const tx = (v * 260 + i * 37) * k;
          const ty = -(v * 520 + i * 21) * k;
          el.style.transform = `translate3d(${tx.toFixed(1)}px, ${ty.toFixed(1)}px, 0) rotate(${(v * 360 * k + i * 40).toFixed(1)}deg)`;
        });

        const video = videoRef.current;
        if (usarVideo && video && Number.isFinite(video.duration) && video.duration > 0) {
          const t = v * video.duration;
          if (Math.abs(video.currentTime - t) > 1 / 30) video.currentTime = t;
        }
        if (Math.abs(v - ultimoV) > 0.0004 || ultimoV < 0) {
          ultimoV = v;
          pintar(v);
        }
      }
    };

    const pedir = () => {
      if (!raf && emVista) raf = requestAnimationFrame(quadroLoop);
    };
    redesenhar.current = () => {
      ultimoP = -1;
      ultimoV = -1;
      pedir();
    };

    const io = new IntersectionObserver(([e]) => {
      emVista = e.isIntersecting;
      if (emVista) redesenhar.current();
    });
    io.observe(secao);
    const ro = new ResizeObserver(() => {
      dimensionar();
      redesenhar.current();
    });
    ro.observe(esq);
    const video = videoRef.current;
    const aoBuscar = () => {
      ultimoV = -1;
      ultimoP = -1;
      pedir();
    };
    video?.addEventListener('seeked', aoBuscar);
    video?.addEventListener('loadeddata', aoBuscar);
    window.addEventListener('scroll', pedir, { passive: true });
    window.addEventListener('resize', pedir);
    dimensionar();
    pedir();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      video?.removeEventListener('seeked', aoBuscar);
      video?.removeEventListener('loadeddata', aoBuscar);
      window.removeEventListener('scroll', pedir);
      window.removeEventListener('resize', pedir);
      redesenhar.current = () => {};
    };
  }, [usarVideo]);

  const atual = cfg.cenas[cena];
  const estiloSecao = {
    '--altura': `${cfg.alturaVh}vh`,
    '--prop': `${cfg.proporcao[0]} / ${cfg.proporcao[1]}`,
    '--meia-prop': `${cfg.proporcao[0] / 2} / ${cfg.proporcao[1]}`,
  } as CSSProperties;

  return (
    <section id="video" ref={secaoRef} className="section video-scroll" style={estiloSecao} aria-label="Vídeo em scroll">
      {cfg.src && usarVideo && (
        <video
          ref={videoRef}
          className="video-scroll__fonte"
          src={`${import.meta.env.BASE_URL}${cfg.src}`}
          poster={cfg.poster ? `${import.meta.env.BASE_URL}${cfg.poster}` : undefined}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          onError={() => setUsarVideo(false)}
        />
      )}
      <div ref={palcoRef} className="video-scroll__palco">
        <div className="video-scroll__ceu" aria-hidden="true" />
        <p className="t3 video-scroll__kicker">03 — vídeo</p>

        <div className="media dispositivo" aria-hidden="true">
          <div className="dispositivo__metade dispositivo__metade--esq">
            <canvas ref={esqRef} className="media2" />
          </div>
          <div className="dispositivo__metade dispositivo__metade--dir">
            <canvas ref={dirRef} className="media2" />
          </div>
          <span className="dispositivo__dobradica" />
        </div>

        {/* UI sobre a tela (centralizada na dobradiça) */}
        <div className="tela-ui">
          <div className="tela-ui__topo">
            <span className="tela-ui__marca">
              <Logo />
            </span>
            <span className="tela-ui__menu">
              {menu.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </span>
            <button type="button" className="tela-ui__botao" tabIndex={-1} onClick={onCta}>
              {cfg.botaoTopo}
            </button>
          </div>
          <h2 className="tela-ui__titulo">{cfg.titulo}</h2>
          <p className="tela-ui__sub">{cfg.subtitulo}</p>
          <button type="button" className="tela-ui__flor" onClick={onCta}>
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <path d="M60 8c13 0 18 16 16 28 10-8 27-11 33 1s-6 23-18 27c12 4 22 17 14 27s-25 6-31-4c0 13-6 28-20 27s-18-16-14-28c-9 9-27 11-32-1s7-23 19-26C15 55 4 42 12 32s25-6 32 4c-2-12 3-28 16-28Z" />
            </svg>
            <span>{cfg.cta}</span>
          </button>
        </div>

        <div ref={petalasRef} className="video-scroll__petalas" aria-hidden="true">
          {Array.from({ length: 9 }, (_, i) => (
            <span key={i} data-petala className={`petala petala--${i % 3}`} style={{ '--i': i } as CSSProperties} />
          ))}
        </div>

        <div className="video-scroll__legenda" aria-live="polite">
          <span className="t3 video-scroll__contador">
            {String(cena + 1).padStart(2, '0')} / {String(cfg.cenas.length).padStart(2, '0')}
          </span>
          <h3 className="h3">{atual?.titulo}</h3>
          <p className="t2">{atual?.texto}</p>
          <div className="video-scroll__barra" role="presentation">
            {cfg.cenas.map((c, i) => (
              <span
                key={c.id}
                className={i < cena ? 'is-feita' : i === cena ? 'is-atual' : ''}
                style={{ '--peso': c.fim - c.inicio } as CSSProperties}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
