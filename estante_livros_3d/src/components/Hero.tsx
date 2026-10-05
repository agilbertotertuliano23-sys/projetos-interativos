import type { CSSProperties } from 'react';
import { useLibrary } from '../state/library';
import { Logo } from './Logo';

const LETRAS: { l: string; c: string }[] = [
  { l: 'e', c: '#ff5a4e' },
  { l: 's', c: '#8a5cff' },
  { l: 't', c: '#ffc53d' },
  { l: 'a', c: '#ff6fd8' },
  { l: 'n', c: '#c6ff3d' },
  { l: 't', c: '#2fd8ff' },
  { l: 'e', c: '#ff8a2a' },
];

/** `hero` + `marquee` (ref. 03): título de letras-objeto e faixa em loop. */
export function Hero() {
  const lib = useLibrary();
  const itens = [
    'Vinicius',
    `${lib.livros.length} livros`,
    `${lib.sessoes.length} sessões`,
    'three.js',
    'estante neon',
    'vídeo em scroll',
  ];

  return (
    <>
      <section id="topo" className="hero">
        <div className="hero__halo" aria-hidden="true" />
        <Logo className="hero__logo" animated />
        <h1 className="hero__titulo" aria-label="Estante interativa">
          <span className="hero__letras" aria-hidden="true">
            {LETRAS.map(({ l, c }, i) => (
              <span key={i} className="hero__letra" style={{ '--c': c, '--i': i } as CSSProperties}>
                {l}
              </span>
            ))}
          </span>
          <span className="hero__sub" aria-hidden="true">
            interativa
          </span>
        </h1>
        <p className="t2 hero__texto">
          Projetos, referências e leituras como livros 3D — numa estante neon que você organiza em sessões.
        </p>
        <a className="hero__descer t3" href="#livro">
          <span>role</span>
          <i aria-hidden="true" />
        </a>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__trilho">
          {[0, 1].map((k) => (
            <div key={k} className="marquee__grupo">
              {[...itens, ...itens].map((t, i) => (
                <span key={i} className="marquee__item">
                  <span className="marquee__estrela">✦</span>
                  <span className="t1">{t}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
