import { useEffect, useMemo, useRef, type CSSProperties } from 'react';
import { paraBookCfg } from '../lib/capas';
import { livrosDaSessao, useLibrary } from '../state/library';
import BooksShowcase from './BooksShowcase/BooksShowcase';
import { IconLapis } from './icons';

interface Props {
  /** Fontes dos canvas carregadas — só então a cena 3D é pintada. */
  pronto: boolean;
  sessaoId: string | null;
  onSessao: (id: string) => void;
  pedido: { id: string; nonce: number } | null;
  livroAberto: boolean;
  onLivroAberto: (aberto: boolean) => void;
  onEmVista: (emVista: boolean) => void;
  onVerNaEstante: (livroId: string) => void;
  onEditarSessao: (sessaoId: string) => void;
}

const ROTULOS = {
  open: 'Abrir',
  prev: 'Livros anteriores',
  next: 'Próximos livros',
  close: 'Fechar livro',
  empty: 'Esta sessão ainda não tem livros. Adicione pelo painel Coleções.',
  noWebgl: 'Esta experiência precisa de WebGL, que o navegador bloqueou ou não suporta.',
  index: 'ÍNDICE',
  region: 'livros em 3D',
};

/** `section#livro` (ref. 03): o modelo 3D dos livros da sessão escolhida. */
export function LivroSection({
  pronto,
  sessaoId,
  onSessao,
  pedido,
  livroAberto,
  onLivroAberto,
  onEmVista,
  onVerNaEstante,
  onEditarSessao,
}: Props) {
  const lib = useLibrary();
  const sessao =
    lib.sessoes.find((s) => s.id === sessaoId) ?? lib.sessoes.find((s) => s.livros.length > 0) ?? lib.sessoes[0];
  const livros = livrosDaSessao(sessao, lib.livroPorId);

  // só reconstrói a cena 3D quando o conteúdo muda de fato
  const assinatura = livros
    .map((l) => [l.id, l.titulo, l.autor, l.ano, l.cor, l.descricao].join('\u0001'))
    .join('\u0002');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const books = useMemo(() => livros.map(paraBookCfg), [assinatura]);

  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => onEmVista(e.intersectionRatio > 0.55), { threshold: [0, 0.55, 1] });
    io.observe(el);
    return () => io.disconnect();
  }, [onEmVista]);

  const cor = sessao?.cor ?? '#2fd8ff';

  return (
    <section
      ref={ref}
      id="livro"
      className="section secao-livro"
      style={{ '--c': cor } as CSSProperties}
      data-livro-aberto={livroAberto || undefined}
      aria-label="Livros em 3D"
    >
      <div className="secao-livro__brilho" aria-hidden="true" />
      {pronto && (
        <BooksShowcase
          books={books}
          heroTitle={sessao?.nome ?? 'Estante'}
          showNav={false}
          openRequest={pedido}
          labels={ROTULOS}
          detailMeta={(b) => b.author}
          onBookSelect={(b) => onLivroAberto(Boolean(b))}
          themeColors={{
            bgLight: 'transparent',
            bgDark: 'transparent',
            foregroundLight: '#f4f1ff',
            foregroundDark: '#f4f1ff',
            navy: '#0b0816',
            cream: '#f5f1ff',
            pink: cor,
            lav: '#c9c3e6',
            peri: '#8fdcff',
          }}
          renderDetailActions={(b) => (
            <>
              <button type="button" className="bs-acao bs-acao--primaria" onClick={() => onVerNaEstante(b.id)}>
                Ver na estante
              </button>
              {sessao && (
                <button type="button" className="bs-acao" onClick={() => onEditarSessao(sessao.id)}>
                  <IconLapis /> Editar {sessao.nome}
                </button>
              )}
            </>
          )}
        />
      )}

      <div className="rail secao-livro__rail" role="tablist" aria-label="Sessão exibida em 3D">
        <span className="t3 secao-livro__kicker">01 — livro</span>
        {lib.sessoes.map((s) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={s.id === sessao?.id}
            className={s.id === sessao?.id ? 'chip chip--sessao is-ativo' : 'chip chip--sessao'}
            style={{ '--c': s.cor } as CSSProperties}
            onClick={() => onSessao(s.id)}
          >
            {s.nome}
            <span className="chip__conta">{s.livros.length}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
