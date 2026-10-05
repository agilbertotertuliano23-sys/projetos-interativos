import { useEffect, useMemo, useRef, useState, type CSSProperties, type FormEvent } from 'react';
import { CORES_NEON, type Livro, type Sessao } from '../data/biblioteca';
import { livrosDaSessao, useLibrary } from '../state/library';
import { CapaMini } from './CapaMini';
import {
  IconBaixo,
  IconCheck,
  IconCima,
  IconCubo,
  IconFechar,
  IconFiltro,
  IconLixo,
  IconMais,
  IconSeta,
  IconVoltar,
} from './icons';

export type VistaPainel = { tipo: 'lista' } | { tipo: 'sessao'; id: string; foco?: 'nome' | 'adicionar' };

interface Props {
  aberto: boolean;
  vista: VistaPainel;
  onVista: (v: VistaPainel) => void;
  onFechar: () => void;
  onMostrar3D: (sessaoId: string) => void;
}

/** Painel de Coleções (ref. 04): lista de sessões e configuração de cada uma. */
export function CollectionsPanel({ aberto, vista, onVista, onFechar, onMostrar3D }: Props) {
  const lib = useLibrary();
  const painelRef = useRef<HTMLDivElement>(null);
  const sessao = vista.tipo === 'sessao' ? lib.sessoes.find((s) => s.id === vista.id) : undefined;

  // sessão apagada enquanto aberta → volta para a lista
  useEffect(() => {
    if (vista.tipo === 'sessao' && !sessao) onVista({ tipo: 'lista' });
  }, [vista, sessao, onVista]);

  useEffect(() => {
    if (!aberto) return;
    const root = document.documentElement;
    const antes = root.style.overflow;
    root.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (vista.tipo === 'sessao') onVista({ tipo: 'lista' });
      else onFechar();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      root.style.overflow = antes;
      window.removeEventListener('keydown', onKey);
    };
  }, [aberto, vista.tipo, onFechar, onVista]);

  useEffect(() => {
    if (aberto) painelRef.current?.focus({ preventScroll: true });
  }, [aberto, vista.tipo]);

  return (
    <div className="painel" data-aberto={aberto || undefined} inert={!aberto} aria-hidden={!aberto}>
      <div className="painel__veu" onClick={onFechar} />
      <div
        ref={painelRef}
        id="painel-colecoes"
        className="painel__folha form"
        role="dialog"
        aria-modal="true"
        aria-label="Coleções"
        tabIndex={-1}
      >
        {sessao ? (
          <EditorSessao
            key={sessao.id}
            sessao={sessao}
            foco={vista.tipo === 'sessao' ? vista.foco : undefined}
            onVoltar={() => onVista({ tipo: 'lista' })}
            onMostrar3D={() => onMostrar3D(sessao.id)}
          />
        ) : (
          <ListaSessoes onAbrir={(id, foco) => onVista({ tipo: 'sessao', id, foco })} onFechar={onFechar} />
        )}
      </div>
    </div>
  );
}

// Lista ---------------------------------------------------------------------------

type Filtro = 'todas' | 'com' | 'vazias';
type Ordem = 'estante' | 'nome' | 'livros';

function ListaSessoes({ onAbrir, onFechar }: { onAbrir: (id: string, foco?: 'nome' | 'adicionar') => void; onFechar: () => void }) {
  const lib = useLibrary();
  const [filtro, setFiltro] = useState<Filtro>('todas');
  const [ordem, setOrdem] = useState<Ordem>('estante');
  const [confirmarReset, setConfirmarReset] = useState(false);

  const visiveis = useMemo(() => {
    let lista = lib.sessoes.filter((s) =>
      filtro === 'todas' ? true : filtro === 'com' ? s.livros.length > 0 : s.livros.length === 0,
    );
    if (ordem === 'nome') lista = [...lista].sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
    if (ordem === 'livros') lista = [...lista].sort((a, b) => b.livros.length - a.livros.length);
    return lista;
  }, [lib.sessoes, filtro, ordem]);

  const chips: { id: Filtro; rotulo: string }[] = [
    { id: 'todas', rotulo: 'Todas' },
    { id: 'com', rotulo: 'Com livros' },
    { id: 'vazias', rotulo: 'Vazias' },
  ];

  return (
    <>
      <header className="painel__topo">
        <div>
          <p className="t3 painel__kicker">Configuração de coleções</p>
          <h1 className="h1 painel__titulo">Minhas coleções</h1>
        </div>
        <button type="button" className="btn-icone" aria-label="Fechar coleções" onClick={onFechar}>
          <IconFechar />
        </button>
      </header>

      <div className="painel__ferramentas">
        <div className="rail chips" role="group" aria-label="Filtrar sessões">
          {chips.map((c) => (
            <button
              key={c.id}
              type="button"
              className={filtro === c.id ? 'chip is-ativo' : 'chip'}
              aria-pressed={filtro === c.id}
              onClick={() => setFiltro(c.id)}
            >
              {c.rotulo}
            </button>
          ))}
          {lib.sessoes.map((s) => (
            <button
              key={s.id}
              type="button"
              className="chip chip--sessao"
              style={{ '--c': s.cor } as CSSProperties}
              onClick={() => onAbrir(s.id)}
            >
              {s.nome}
            </button>
          ))}
        </div>
        <label className="rail2 ordenar">
          <IconFiltro />
          <span className="sr-only">Ordenar</span>
          <select value={ordem} onChange={(e) => setOrdem(e.target.value as Ordem)}>
            <option value="estante">Ordem da estante</option>
            <option value="nome">Nome (A–Z)</option>
            <option value="livros">Mais livros</option>
          </select>
        </label>
      </div>

      <div className="painel__grade">
        {visiveis.map((s) => (
          <CartaoSessao key={s.id} sessao={s} livros={livrosDaSessao(s, lib.livroPorId)} onAbrir={() => onAbrir(s.id)} />
        ))}
        <button
          type="button"
          className="card4 cartao-novo"
          onClick={() => onAbrir(lib.criarSessao(), 'nome')}
        >
          <span className="cartao-novo__mais">
            <IconMais />
          </span>
          <span className="t2">Nova sessão</span>
          <span className="t3">vira uma prateleira na estante</span>
        </button>
      </div>

      <footer className="painel__rodape">
        <span className="t3">
          {lib.livros.length} livros na biblioteca · {lib.sessoes.length} sessões · salvo neste navegador
        </span>
        <button
          type="button"
          className={confirmarReset ? 'lnk-botao is-perigo' : 'lnk-botao'}
          onClick={() => {
            if (!confirmarReset) return setConfirmarReset(true);
            lib.restaurar();
            setConfirmarReset(false);
          }}
          onBlur={() => setConfirmarReset(false)}
        >
          {confirmarReset ? 'Confirmar: restaurar exemplo' : 'Restaurar estante de exemplo'}
        </button>
      </footer>
    </>
  );
}

function CartaoSessao({ sessao, livros, onAbrir }: { sessao: Sessao; livros: Livro[]; onAbrir: () => void }) {
  const leque = livros.slice(0, 3);
  return (
    <button type="button" className="card3 cartao" style={{ '--c': sessao.cor } as CSSProperties} onClick={onAbrir}>
      <span className="cartao__palco" aria-hidden="true">
        <span className="leque">
          {[0, 1, 2].map((i) =>
            leque[i] ? (
              <CapaMini key={leque[i].id} livro={leque[i]} className={`leque__livro leque__livro--${i}`} />
            ) : (
              <span key={`vazio-${i}`} className={`leque__livro leque__livro--${i} leque__livro--vazio`} />
            ),
          )}
        </span>
        <span className="cartao__bolso">
          <i />
          <i />
          <i />
          <i />
        </span>
      </span>
      <span className="cartao__rodape">
        <span>
          <span className="h3 cartao__nome">{sessao.nome}</span>
          <span className="t3 cartao__conta">
            {sessao.livros.length} {sessao.livros.length === 1 ? 'livro' : 'livros'}
          </span>
        </span>
        <span className="cartao__seta">
          <IconSeta />
        </span>
      </span>
    </button>
  );
}

// Editor de sessão --------------------------------------------------------------

function EditorSessao({
  sessao,
  foco,
  onVoltar,
  onMostrar3D,
}: {
  sessao: Sessao;
  foco?: 'nome' | 'adicionar';
  onVoltar: () => void;
  onMostrar3D: () => void;
}) {
  const lib = useLibrary();
  const nomeRef = useRef<HTMLInputElement>(null);
  const buscaRef = useRef<HTMLInputElement>(null);
  const [filtro, setFiltro] = useState('');
  const [confirmar, setConfirmar] = useState<string | null>(null);
  const livros = livrosDaSessao(sessao, lib.livroPorId);
  const posicao = lib.sessoes.findIndex((s) => s.id === sessao.id);

  useEffect(() => {
    const alvo = foco === 'nome' ? nomeRef.current : foco === 'adicionar' ? buscaRef.current : null;
    if (!alvo) return;
    const id = window.setTimeout(() => {
      alvo.focus({ preventScroll: true });
      if (foco === 'nome') alvo.select();
      else alvo.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, 120);
    return () => window.clearTimeout(id);
  }, [foco]);

  const biblioteca = useMemo(() => {
    const q = filtro.trim().toLowerCase();
    return lib.livros.filter((l) => !q || `${l.titulo} ${l.autor}`.toLowerCase().includes(q));
  }, [lib.livros, filtro]);

  const pedirConfirmacao = (chave: string, acao: () => void) => {
    if (confirmar === chave) {
      acao();
      setConfirmar(null);
    } else setConfirmar(chave);
  };

  return (
    <div className="editor" style={{ '--c': sessao.cor } as CSSProperties}>
      <header className="editor__topo">
        <button type="button" className="btn3" onClick={onVoltar}>
          <IconVoltar /> Coleções
        </button>
        <div className="editor__acoes">
          <button type="button" className="btn3" onClick={onMostrar3D} disabled={livros.length === 0}>
            <IconCubo /> Ver no livro 3D
          </button>
          <button
            type="button"
            className={confirmar === 'sessao' ? 'btn3 is-perigo' : 'btn3'}
            onClick={() => pedirConfirmacao('sessao', () => lib.excluirSessao(sessao.id))}
            onBlur={() => setConfirmar((c) => (c === 'sessao' ? null : c))}
          >
            <IconLixo /> {confirmar === 'sessao' ? 'Confirmar exclusão' : 'Excluir sessão'}
          </button>
        </div>
      </header>

      <div className="editor__identidade">
        <label className="editor__nome">
          <span className="t3">Nome da sessão</span>
          <input
            ref={nomeRef}
            className="in in--titulo"
            value={sessao.nome}
            maxLength={40}
            onChange={(e) => lib.atualizarSessao(sessao.id, { nome: e.target.value })}
            onBlur={(e) => !e.target.value.trim() && lib.atualizarSessao(sessao.id, { nome: 'Sem nome' })}
          />
        </label>
        <div className="editor__meta">
          <fieldset className="cores">
            <legend className="t3">Cor da prateleira</legend>
            {CORES_NEON.map((c) => (
              <button
                key={c}
                type="button"
                className={sessao.cor === c ? 'cor is-ativa' : 'cor'}
                style={{ '--c': c } as CSSProperties}
                aria-label={`Cor ${c}`}
                aria-pressed={sessao.cor === c}
                onClick={() => lib.atualizarSessao(sessao.id, { cor: c })}
              />
            ))}
          </fieldset>
          <div className="posicao">
            <span className="t3">
              Prateleira {posicao + 1} de {lib.sessoes.length}
            </span>
            <button
              type="button"
              className="btn-icone btn-icone--p"
              aria-label="Subir prateleira"
              disabled={posicao <= 0}
              onClick={() => lib.moverSessao(sessao.id, -1)}
            >
              <IconCima />
            </button>
            <button
              type="button"
              className="btn-icone btn-icone--p"
              aria-label="Descer prateleira"
              disabled={posicao >= lib.sessoes.length - 1}
              onClick={() => lib.moverSessao(sessao.id, 1)}
            >
              <IconBaixo />
            </button>
          </div>
        </div>
      </div>

      <div className="editor__colunas">
        <section className="card5" aria-labelledby="nesta-sessao">
          <h2 id="nesta-sessao" className="h3">
            Nesta sessão <span className="t3">({livros.length})</span>
          </h2>
          {livros.length === 0 ? (
            <p className="t2 vazio">Nenhum livro ainda. Adicione da biblioteca ou crie um novo.</p>
          ) : (
            <ol className="linhas">
              {livros.map((l, i) => (
                <li key={l.id} className="linha">
                  <CapaMini livro={l} />
                  <span className="linha__texto">
                    <span className="t1">{l.titulo}</span>
                    <span className="t3">
                      {l.autor} · {l.ano}
                    </span>
                  </span>
                  <span className="linha__acoes">
                    <button
                      type="button"
                      className="btn-icone btn-icone--p"
                      aria-label={`Mover ${l.titulo} para cima`}
                      disabled={i === 0}
                      onClick={() => lib.transferirLivro(sessao.id, sessao.id, l.id, i - 1)}
                    >
                      <IconCima />
                    </button>
                    <button
                      type="button"
                      className="btn-icone btn-icone--p"
                      aria-label={`Mover ${l.titulo} para baixo`}
                      disabled={i === livros.length - 1}
                      onClick={() => lib.transferirLivro(sessao.id, sessao.id, l.id, i + 1)}
                    >
                      <IconBaixo />
                    </button>
                    <button
                      type="button"
                      className="btn-icone btn-icone--p"
                      aria-label={`Remover ${l.titulo} da sessão`}
                      onClick={() => lib.removerLivro(sessao.id, l.id)}
                    >
                      <IconFechar />
                    </button>
                  </span>
                </li>
              ))}
            </ol>
          )}
        </section>

        <section className="card5" aria-labelledby="adicionar-livros">
          <h2 id="adicionar-livros" className="h3">
            Adicionar livros
          </h2>
          <input
            ref={buscaRef}
            className="in"
            type="search"
            placeholder="Filtrar biblioteca…"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            aria-label="Filtrar biblioteca"
          />
          <ul className="linhas linhas--biblioteca">
            {biblioteca.map((l) => {
              const dentro = sessao.livros.includes(l.id);
              return (
                <li key={l.id} className="linha">
                  <CapaMini livro={l} />
                  <span className="linha__texto">
                    <span className="t1">{l.titulo}</span>
                    <span className="t3">{l.autor}</span>
                  </span>
                  <span className="linha__acoes">
                    {l.criadoPeloUsuario && (
                      <button
                        type="button"
                        className={confirmar === l.id ? 'btn-icone btn-icone--p is-perigo' : 'btn-icone btn-icone--p'}
                        aria-label={confirmar === l.id ? `Confirmar: apagar ${l.titulo}` : `Apagar ${l.titulo} da biblioteca`}
                        title={confirmar === l.id ? 'Clique de novo para apagar' : 'Apagar da biblioteca'}
                        onClick={() => pedirConfirmacao(l.id, () => lib.excluirLivro(l.id))}
                        onBlur={() => setConfirmar((c) => (c === l.id ? null : c))}
                      >
                        <IconLixo />
                      </button>
                    )}
                    <button
                      type="button"
                      className={dentro ? 'btn btn--p is-dentro' : 'btn btn--p'}
                      aria-pressed={dentro}
                      onClick={() => (dentro ? lib.removerLivro(sessao.id, l.id) : lib.adicionarLivro(sessao.id, l.id))}
                    >
                      {dentro ? <IconCheck /> : <IconMais />}
                      {dentro ? 'Na sessão' : 'Adicionar'}
                    </button>
                  </span>
                </li>
              );
            })}
            {biblioteca.length === 0 && <li className="t2 vazio">Nada encontrado para “{filtro}”.</li>}
          </ul>
          <CriarLivro sessaoId={sessao.id} sugestao={filtro} />
        </section>
      </div>
    </div>
  );
}

function CriarLivro({ sessaoId, sugestao }: { sessaoId: string; sugestao: string }) {
  const lib = useLibrary();
  const [aberto, setAberto] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [ano, setAno] = useState('');
  const [descricao, setDescricao] = useState('');
  const [cor, setCor] = useState<string>(CORES_NEON[lib.livros.length % CORES_NEON.length]);

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    if (!titulo.trim()) return;
    lib.criarLivro({ titulo, autor, ano, descricao, cor }, sessaoId);
    setTitulo('');
    setAutor('');
    setAno('');
    setDescricao('');
    setAberto(false);
  };

  if (!aberto) {
    return (
      <button
        type="button"
        className="btn2 criar-abrir"
        onClick={() => {
          setTitulo(sugestao);
          setAberto(true);
        }}
      >
        <IconMais /> Criar livro novo
      </button>
    );
  }

  return (
    <form className="form2 criar" onSubmit={enviar}>
      <p className="h3">Novo livro</p>
      <label>
        <span className="t3">Título *</span>
        <input className="in" value={titulo} onChange={(e) => setTitulo(e.target.value)} required maxLength={60} autoFocus />
      </label>
      <div className="criar__par">
        <label>
          <span className="t3">Autor</span>
          <input className="in" value={autor} onChange={(e) => setAutor(e.target.value)} maxLength={50} />
        </label>
        <label>
          <span className="t3">Ano</span>
          <input className="in" value={ano} onChange={(e) => setAno(e.target.value)} inputMode="numeric" maxLength={4} />
        </label>
      </div>
      <label>
        <span className="t3">Descrição</span>
        <textarea className="in" rows={3} value={descricao} onChange={(e) => setDescricao(e.target.value)} maxLength={280} />
      </label>
      <fieldset className="cores">
        <legend className="t3">Cor da capa</legend>
        {CORES_NEON.map((c) => (
          <button
            key={c}
            type="button"
            className={cor === c ? 'cor is-ativa' : 'cor'}
            style={{ '--c': c } as CSSProperties}
            aria-label={`Cor ${c}`}
            aria-pressed={cor === c}
            onClick={() => setCor(c)}
          />
        ))}
      </fieldset>
      <div className="criar__acoes">
        <button type="button" className="btn3" onClick={() => setAberto(false)}>
          Cancelar
        </button>
        <button type="submit" className="btn" disabled={!titulo.trim()}>
          Criar e adicionar
        </button>
      </div>
    </form>
  );
}
