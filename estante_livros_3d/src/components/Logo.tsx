import { useId } from 'react';

/**
 * Logo (ref. 01): livro aberto em painéis de vidro, hexágono com estrela e
 * uma órbita que passa por trás no alto e pela frente embaixo.
 */
export function Logo({ className, animated = false, title = 'Estante' }: { className?: string; animated?: boolean; title?: string }) {
  const raw = useId().replace(/:/g, '');
  const id = (n: string) => `${raw}-${n}`;
  const url = (n: string) => `url(#${id(n)})`;

  // órbita: elipse rotacionada; metade de trás antes dos painéis, metade da frente depois
  const ORB = 'translate(790 560) rotate(13)';
  const RX = 720;
  const RY = 170;

  return (
    <svg
      className={['logo', animated && 'logo--animada', className].filter(Boolean).join(' ')}
      viewBox="60 70 1470 880"
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient id={id('escuro')} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0b2a4a" />
          <stop offset="0.35" stopColor="#020509" />
          <stop offset="1" stopColor="#061626" />
        </linearGradient>
        <linearGradient id={id('aro')} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#bdf0ff" />
          <stop offset="0.45" stopColor="#2fb8ff" />
          <stop offset="1" stopColor="#1257c9" />
        </linearGradient>
        <linearGradient id={id('fosco')} x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#f6fbff" stopOpacity="0.96" />
          <stop offset="0.5" stopColor="#c4ddf3" stopOpacity="0.9" />
          <stop offset="1" stopColor="#8db7dc" stopOpacity="0.88" />
        </linearGradient>
        <linearGradient id={id('reflexo')} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={id('estrela')}>
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.25" stopColor="#7fdcff" stopOpacity="0.85" />
          <stop offset="1" stopColor="#2fb8ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id('esfera')} cx="0.38" cy="0.32">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.45" stopColor="#9fd8f5" />
          <stop offset="1" stopColor="#2a6f9e" />
        </radialGradient>
        <filter id={id('brilho')} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="9" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={id('halo')} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="26" />
        </filter>
      </defs>

      {/* halo de fundo */}
      <ellipse cx="760" cy="560" rx="430" ry="300" fill="#2fb8ff" opacity="0.16" filter={url('halo')} />

      {/* órbita — metade de trás */}
      <g transform={ORB} fill="none" strokeLinecap="round">
        <path d={`M ${-RX} 0 A ${RX} ${RY} 0 0 1 ${RX} 0`} stroke="#2fb8ff" strokeWidth="16" opacity="0.35" filter={url('brilho')} />
        <path d={`M ${-RX} 0 A ${RX} ${RY} 0 0 1 ${RX} 0`} stroke="#cfefff" strokeWidth="5" opacity="0.8" />
      </g>

      {/* página de trás (direita) */}
      <path
        d="M1150 330 L1336 398 Q1362 408 1362 436 L1362 806 Q1362 832 1336 836 L1150 862 Z"
        fill={url('escuro')}
        stroke={url('aro')}
        strokeWidth="9"
        strokeLinejoin="round"
      />

      {/* painel esquerdo escuro */}
      <path
        d="M352 120 L712 306 Q738 320 738 350 L738 744 Q738 772 712 780 L352 912 Q322 922 322 890 L322 148 Q322 106 352 120 Z"
        fill={url('escuro')}
        stroke={url('aro')}
        strokeWidth="11"
        strokeLinejoin="round"
        filter={url('brilho')}
      />
      <path d="M352 336 L720 386" stroke={url('reflexo')} strokeWidth="4" opacity="0.7" />

      {/* painel direito fosco */}
      <path
        d="M788 306 L1142 104 Q1174 90 1174 126 L1174 892 Q1174 924 1142 912 L788 780 Q762 772 762 744 L762 350 Q762 320 788 306 Z"
        fill={url('fosco')}
        stroke="#e6f6ff"
        strokeWidth="9"
        strokeLinejoin="round"
      />
      <path d="M1004 286 L1160 330" stroke="#ffffff" strokeWidth="5" opacity="0.65" />
      <path d="M980 520 L1160 470" stroke="#ffffff" strokeWidth="3" opacity="0.4" />

      {/* hexágono central (duas metades, como páginas) */}
      <g filter={url('brilho')}>
        <path
          d="M750 346 L960 424 Q980 432 980 452 L980 690 Q980 710 960 718 L750 776 L540 718 Q522 710 522 690 L522 452 Q522 432 540 424 Z"
          fill="#03070d"
          fillOpacity="0.92"
          stroke={url('aro')}
          strokeWidth="9"
          strokeLinejoin="round"
        />
      </g>
      <path d="M750 352 L750 770" stroke="#7fdcff" strokeWidth="5" opacity="0.8" />
      <path d="M860 400 L974 446 L974 690 L860 724 Z" fill="#9fd0f2" opacity="0.08" />

      {/* estrela */}
      <circle cx="751" cy="560" r="150" fill={url('estrela')} className="logo__estrela-halo" />
      <path
        className="logo__estrela"
        d="M751 432 Q760 551 906 560 Q760 569 751 690 Q742 569 596 560 Q742 551 751 432 Z"
        fill="#ffffff"
        filter={url('brilho')}
      />

      {/* órbita — metade da frente */}
      <g transform={ORB} fill="none" strokeLinecap="round">
        <path d={`M ${RX} 0 A ${RX} ${RY} 0 0 1 ${-RX} 0`} stroke="#2fb8ff" strokeWidth="18" opacity="0.45" filter={url('brilho')} />
        <path d={`M ${RX} 0 A ${RX} ${RY} 0 0 1 ${-RX} 0`} stroke="#e9f9ff" strokeWidth="6" />
        <path
          className="logo__rastro"
          d={`M ${RX} 0 A ${RX} ${RY} 0 0 1 ${-RX} 0`}
          stroke="#ffffff"
          strokeWidth="10"
          pathLength={1000}
          strokeDasharray="140 860"
          filter={url('brilho')}
        />
      </g>

      {/* esferas */}
      <g filter={url('brilho')}>
        <circle className="logo__satelite" cx="1214" cy="796" r="30" fill="#ffffff" />
      </g>
      <circle className="logo__bolha" cx="1318" cy="268" r="44" fill={url('esfera')} stroke="#d9f2ff" strokeWidth="4" />
    </svg>
  );
}
