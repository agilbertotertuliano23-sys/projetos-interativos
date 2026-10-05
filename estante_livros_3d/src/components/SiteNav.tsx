import { Logo } from './Logo';
import { IconBusca, IconColecoes, IconFechar } from './icons';

interface Props {
  oculto: boolean;
  secaoAtiva: string | null;
  busca: string;
  resultados: number | null;
  onBusca: (v: string) => void;
  onBuscaEnter: () => void;
  painelAberto: boolean;
  totalSessoes: number;
  onColecoes: () => void;
}

const LINKS = [
  { href: '#livro', id: 'livro', rotulo: 'Livro' },
  { href: '#estante', id: 'estante', rotulo: 'Estante' },
  { href: '#video', id: 'video', rotulo: 'Vídeo' },
];

/** `nav` do wireframe: barra de vidro flutuante, busca e botão de Coleções. */
export function SiteNav({
  oculto,
  secaoAtiva,
  busca,
  resultados,
  onBusca,
  onBuscaEnter,
  painelAberto,
  totalSessoes,
  onColecoes,
}: Props) {
  return (
    <header className="nav" data-oculto={oculto || undefined}>
      <div className="nav__barra">
        <a className="nav__marca" href="#topo" aria-label="Estante — início">
          <Logo className="nav__logo" />
          <span className="t1 nav__nome">Estante</span>
        </a>

        <label className="nav__busca">
          <IconBusca className="nav__busca-ico" />
          <input
            className="in"
            type="search"
            placeholder="Buscar livro…"
            value={busca}
            onChange={(e) => onBusca(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') onBuscaEnter();
              if (e.key === 'Escape') onBusca('');
            }}
            aria-label="Buscar livro na estante"
          />
          {busca && (
            <>
              <span className="t3 nav__resultados" aria-live="polite">
                {resultados === 0 ? 'nada' : `${resultados}`}
              </span>
              <button type="button" className="nav__limpar" aria-label="Limpar busca" onClick={() => onBusca('')}>
                <IconFechar />
              </button>
            </>
          )}
        </label>

        <nav className="nav__links" aria-label="Seções">
          {LINKS.map((l) => (
            <a key={l.id} className="lnk" href={l.href} aria-current={secaoAtiva === l.id ? 'true' : undefined}>
              {l.rotulo}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="btn nav__colecoes"
          aria-haspopup="dialog"
          aria-expanded={painelAberto}
          aria-controls="painel-colecoes"
          onClick={onColecoes}
        >
          <IconColecoes />
          <span className="nav__colecoes-rotulo">Coleções</span>
          <span className="nav__badge">{totalSessoes}</span>
        </button>
      </div>
    </header>
  );
}
