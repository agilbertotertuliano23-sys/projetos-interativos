/** Ícones de traço (24×24), herdam `currentColor`. */
type P = { className?: string };
const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export const IconBusca = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.6-3.6" />
  </svg>
);
export const IconColecoes = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 5h4v14H4zM10 5h4v14h-4z" />
    <path d="m16.2 6.2 3.6-1 3 13.6-3.6 1z" />
  </svg>
);
export const IconFechar = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const IconSeta = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const IconVoltar = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);
export const IconMais = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const IconCheck = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);
export const IconCima = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="m6 15 6-6 6 6" />
  </svg>
);
export const IconBaixo = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);
export const IconLixo = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" />
  </svg>
);
export const IconLapis = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 20h4L19 9l-4-4L4 16z" />
    <path d="m13.5 6.5 4 4" />
  </svg>
);
export const IconFiltro = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 5h16l-6 7.5V19l-4-2v-4.5z" />
  </svg>
);
export const IconCubo = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z" />
    <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
  </svg>
);
export const IconMenu = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
