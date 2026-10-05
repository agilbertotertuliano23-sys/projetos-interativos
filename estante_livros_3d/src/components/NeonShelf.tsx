import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type DragEvent } from 'react';
import type { Livro, Sessao } from '../data/biblioteca';
import { hash } from '../lib/capas';
import { useCapa } from '../lib/useCapa';
import { livrosDaSessao, useLibrary } from '../state/library';
import { CapaMini } from './CapaMini';
import { IconCubo, IconFechar, IconLapis, IconMais } from './icons';

interface Props {
  busca: string;
  destaque: { id: string; nonce: number } | null;
  onAbrir3D: (livroId: string, sessaoId: string) => void;
  onEditarSessao: (sessaoId: string, foco?: 'nome' | 'adicionar') => void;
  onNovaSessao: () => void;
}

type Selecao = { livroId: string; sessaoId: string; rect: DOMRect };
type Arrasto = { livroId: string; de: string };
type Alvo = { sessaoId: string; indice: number };

const MIN_ITENS = 7;
const TIPO_DRAG = 'application/x-estante-livro';

/** Normaliza para busca sem acento/caixa. */
export function normalizar(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
}

export function casaBusca(livro: Livro, q: string): boolean {
  if (!q) return true;
  return normalizar(`${livro.titulo} ${livro.autor} ${livro.ano}`).includes(q);
}

/** `section#estante` (ref. 02): uma prateleira neon por sessão. */
export function NeonShelf({ busca, destaque, onAbrir3D, onEditarSessao, onNovaSessao }: Props) {
  const lib = useLibrary();
  const [selecao, setSelecao] = useState<Selecao | null>(null);
  const [arrasto, setArrasto] = useState<Arrasto | null>(null);
  const [alvo, setAlvo] = useState<Alvo | null>(null);
  const q = normalizar(busca.trim());

  // destaque vindo do livro 3D ("Ver na estante")
  const [piscando, setPiscando] = useState<string | null>(null);
  useEffect(() => {
    if (!destaque) return;
    setPiscando(destaque.id);
    const el = document.querySelector<HTMLElement>(`[data-livro="${CSS.escape(destaque.id)}"]`);
    el?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    const t = window.setTimeout(() => setPiscando(null), 2600);
    return () => window.clearTimeout(t);
  }, [destaque]);

  const soltar = (e: DragEvent, sessaoId: string) => {
    e.preventDefault();
    const dados = arrasto ?? lerArrasto(e);
    const destino = alvo?.sessaoId === sessaoId ? alvo.indice : undefined;
    setArrasto(null);
    setAlvo(null);
    if (!dados) return;
    let indice = destino;
    if (dados.de === sessaoId && indice !== undefined) {
      const atual = lib.sessoes.find((s) => s.id === sessaoId)?.livros.indexOf(dados.livroId) ?? -1;
      if (atual >= 0 && atual < indice) indice -= 1;
    }
    lib.transferirLivro(dados.de, sessaoId, dados.livroId, indice);
  };

  return (
    <section id="estante" className="section estante-neon" aria-labelledby="estante-titulo">
      <header className="secao-topo">
        <div>
          <p className="t3 secao-topo__kicker">02 — estante</p>
          <h2 id="estante-titulo" className="h2">
            A estante
          </h2>
          <p className="t2 secao-topo__texto">
            Cada prateleira é uma sessão. Clique num livro para abrir, arraste para trocar de prateleira.
          </p>
        </div>
        <button type="button" className="btn2" onClick={onNovaSessao}>
          <IconMais /> Nova sessão
        </button>
      </header>

      <div className="parede">
        {lib.sessoes.length === 0 && (
          <button type="button" className="parede__vazia t2" onClick={onNovaSessao}>
            A estante está vazia. Crie a primeira sessão.
          </button>
        )}
        {lib.sessoes.map((s) => (
          <Prateleira
            key={s.id}
            sessao={s}
            livros={livrosDaSessao(s, lib.livroPorId)}
            q={q}
            piscando={piscando}
            selecionado={selecao?.sessaoId === s.id ? selecao.livroId : null}
            arrasto={arrasto}
            alvo={alvo?.sessaoId === s.id ? alvo.indice : null}
            onSelecionar={(livroId, rect) =>
              setSelecao((atual) =>
                atual && atual.livroId === livroId && atual.sessaoId === s.id ? null : { livroId, sessaoId: s.id, rect },
              )
            }
            onArrastar={(livroId) => setArrasto(livroId ? { livroId, de: s.id } : null)}
            onAlvo={(indice) => setAlvo(indice === null ? null : { sessaoId: s.id, indice })}
            onSoltar={(e) => soltar(e, s.id)}
            onEditar={(foco) => onEditarSessao(s.id, foco)}
          />
        ))}
      </div>

      {selecao && (
        <Popover
          selecao={selecao}
          onFechar={() => setSelecao(null)}
          onAbrir3D={() => {
            onAbrir3D(selecao.livroId, selecao.sessaoId);
            setSelecao(null);
          }}
        />
      )}
    </section>
  );
}

function lerArrasto(e: DragEvent): Arrasto | null {
  try {
    const bruto = e.dataTransfer.getData(TIPO_DRAG);
    return bruto ? (JSON.parse(bruto) as Arrasto) : null;
  } catch {
    return null;
  }
}

// Prateleira ----------------------------------------------------------------------

interface PrateleiraProps {
  sessao: Sessao;
  livros: Livro[];
  q: string;
  piscando: string | null;
  selecionado: string | null;
  arrasto: Arrasto | null;
  alvo: number | null;
  onSelecionar: (livroId: string, rect: DOMRect) => void;
  onArrastar: (livroId: string | null) => void;
  onAlvo: (indice: number | null) => void;
  onSoltar: (e: DragEvent) => void;
  onEditar: (foco?: 'nome' | 'adicionar') => void;
}

function Prateleira({
  sessao,
  livros,
  q,
  piscando,
  selecionado,
  arrasto,
  alvo,
  onSelecionar,
  onArrastar,
  onAlvo,
  onSoltar,
  onEditar,
}: PrateleiraProps) {
  const fileiraRef = useRef<HTMLDivElement>(null);
  const vagas = Math.max(1, MIN_ITENS - livros.length);

  const calcularIndice = (clientX: number) => {
    const els = fileiraRef.current?.querySelectorAll<HTMLElement>('[data-livro]') ?? [];
    let i = 0;
    for (const el of els) {
      const r = el.getBoundingClientRect();
      if (clientX < r.left + r.width / 2) return i;
      i++;
    }
    return els.length;
  };

  return (
    <div
      className="card prateleira"
      style={{ '--c': sessao.cor } as CSSProperties}
      data-arrastando={arrasto ? true : undefined}
      data-alvo={alvo !== null || undefined}
      onDragOver={(e) => {
        if (!arrasto && !e.dataTransfer.types.includes(TIPO_DRAG)) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        onAlvo(calcularIndice(e.clientX));
      }}
      onDragLeave={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) onAlvo(null);
      }}
      onDrop={onSoltar}
    >
      <div className="prateleira__trilho">
        <div className="prateleira__fileira" ref={fileiraRef}>
          <Placa sessao={sessao} total={livros.length} onEditar={() => onEditar('nome')} />
          {livros.map((l, i) => (
            <LivroNeon
              key={l.id}
              livro={l}
              sessaoId={sessao.id}
              marcador={alvo === i}
              apagado={Boolean(q) && !casaBusca(l, q)}
              encontrado={Boolean(q) && casaBusca(l, q)}
              piscando={piscando === l.id}
              selecionado={selecionado === l.id}
              arrastando={arrasto?.livroId === l.id && arrasto.de === sessao.id}
              onSelecionar={onSelecionar}
              onArrastar={onArrastar}
            />
          ))}
          {alvo !== null && alvo >= livros.length && <span className="marcador" aria-hidden="true" />}
          {Array.from({ length: vagas }, (_, i) => (
            <button
              key={`vaga-${i}`}
              type="button"
              className={i === 0 ? 'vaga vaga--primeira' : 'vaga'}
              tabIndex={i === 0 ? 0 : -1}
              aria-label={i === 0 ? `Adicionar livros em ${sessao.nome}` : undefined}
              aria-hidden={i === 0 ? undefined : true}
              onClick={() => onEditar('adicionar')}
            >
              {i === 0 && (
                <>
                  <IconMais />
                  <span className="t3">adicionar</span>
                </>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="prateleira__tabua" aria-hidden="true" />
      <button type="button" className="prateleira__editar btn-icone btn-icone--p" aria-label={`Configurar ${sessao.nome}`} onClick={() => onEditar()}>
        <IconLapis />
      </button>
    </div>
  );
}

/** `card2`: placa iluminada com o nome da sessão (como a "Brooklyn" da ref. 02). */
function Placa({ sessao, total, onEditar }: { sessao: Sessao; total: number; onEditar: () => void }) {
  return (
    <button type="button" className="card2 placa" onClick={onEditar} aria-label={`Renomear ${sessao.nome}`}>
      <span className="placa__nome">{sessao.nome}</span>
      <span className="placa__cubo">
        <span className="h3">{total}</span>
        <span className="t3">{total === 1 ? 'livro' : 'livros'}</span>
      </span>
    </button>
  );
}

// Livro ---------------------------------------------------------------------------------

interface LivroProps {
  livro: Livro;
  sessaoId: string;
  marcador: boolean;
  apagado: boolean;
  encontrado: boolean;
  piscando: boolean;
  selecionado: boolean;
  arrastando: boolean;
  onSelecionar: (livroId: string, rect: DOMRect) => void;
  onArrastar: (livroId: string | null) => void;
}

/** Arranjo determinístico por livro+sessão: de capa ou de lombada, altura, espessura, pedestal. */
function arranjo(livroId: string, sessaoId: string) {
  const h = hash(`${sessaoId}/${livroId}`);
  const deCapa = h % 10 < 3;
  return {
    deCapa,
    altura: 0.8 + ((h >>> 4) % 21) / 100, // 0.80–1.00
    espessura: 0.15 + ((h >>> 9) % 9) / 100, // 0.15–0.23
    pedestal: deCapa && (h >>> 13) % 2 === 0,
  };
}

function LivroNeon({
  livro,
  sessaoId,
  marcador,
  apagado,
  encontrado,
  piscando,
  selecionado,
  arrastando,
  onSelecionar,
  onArrastar,
}: LivroProps) {
  const a = arranjo(livro.id, sessaoId);
  const frente = useCapa(livro, 'frente');
  const lombada = useCapa(livro, 'lombada');
  const estilo = {
    '--c': livro.cor,
    '--a': a.pedestal ? a.altura * 0.8 : a.altura,
    '--e': a.espessura,
    '--frente': frente ? `url(${frente})` : 'none',
    '--lombada': lombada ? `url(${lombada})` : 'none',
  } as CSSProperties;

  const classes = [
    'livro',
    a.deCapa ? 'livro--capa' : 'livro--lombada',
    apagado && 'is-apagado',
    encontrado && 'is-encontrado',
    piscando && 'is-piscando',
    selecionado && 'is-selecionado',
    arrastando && 'is-arrastando',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      {marcador && <span className="marcador" aria-hidden="true" />}
      <span className="livro__slot" style={estilo} data-pedestal={a.pedestal || undefined}>
        <button
          type="button"
          className={classes}
          data-livro={livro.id}
          draggable
          aria-label={`${livro.titulo}, ${livro.autor}`}
          aria-expanded={selecionado}
          onClick={(e) => onSelecionar(livro.id, e.currentTarget.getBoundingClientRect())}
          onDragStart={(e) => {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData(TIPO_DRAG, JSON.stringify({ livroId: livro.id, de: sessaoId }));
            e.dataTransfer.setData('text/plain', livro.titulo);
            onArrastar(livro.id);
          }}
          onDragEnd={() => onArrastar(null)}
        >
          <span className="livro__corpo">
            {a.deCapa ? (
              <>
                <span className="livro__face livro__frente" />
                <span className="livro__face livro__dorso" />
                <span className="livro__face livro__miolo" />
              </>
            ) : (
              <>
                <span className="livro__face livro__dorso" />
                <span className="livro__face livro__lado" />
                <span className="livro__face livro__lado livro__lado--esq" />
              </>
            )}
            <span className="livro__face livro__topo" />
          </span>
          <span className="livro__dica t3">{livro.titulo}</span>
        </button>
        {a.pedestal && <span className="pedestal" aria-hidden="true" />}
      </span>
    </>
  );
}

// Popover ------------------------------------------------------------------------------------

function Popover({ selecao, onFechar, onAbrir3D }: { selecao: Selecao; onFechar: () => void; onAbrir3D: () => void }) {
  const lib = useLibrary();
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);
  const livro = lib.livroPorId.get(selecao.livroId);
  const sessao = lib.sessoes.find((s) => s.id === selecao.sessaoId);
  const emSessoes = lib.sessoes.filter((s) => s.livros.includes(selecao.livroId));

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.innerWidth < 700) {
      setPos(null); // vira bottom sheet via CSS
      return;
    }
    const r = selecao.rect;
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const margem = 16;
    let left = r.right + 18;
    if (left + w > window.innerWidth - margem) left = r.left - w - 18;
    left = Math.max(margem, Math.min(left, window.innerWidth - w - margem));
    const top = Math.max(84, Math.min(r.top + r.height / 2 - h / 2, window.innerHeight - h - margem));
    setPos({ left, top });
  }, [selecao]);

  useEffect(() => {
    const fora = (e: PointerEvent) => {
      const t = e.target as HTMLElement;
      if (ref.current?.contains(t) || t.closest?.('[data-livro]')) return;
      onFechar();
    };
    const tecla = (e: KeyboardEvent) => e.key === 'Escape' && onFechar();
    const rolar = () => onFechar();
    document.addEventListener('pointerdown', fora);
    window.addEventListener('keydown', tecla);
    window.addEventListener('scroll', rolar, { passive: true, once: true });
    return () => {
      document.removeEventListener('pointerdown', fora);
      window.removeEventListener('keydown', tecla);
      window.removeEventListener('scroll', rolar);
    };
  }, [onFechar]);

  if (!livro || !sessao) return null;

  return (
    <div
      ref={ref}
      className="quote popover"
      role="dialog"
      aria-label={livro.titulo}
      data-posicionado={pos ? true : undefined}
      style={{ '--c': livro.cor, ...(pos ? { left: pos.left, top: pos.top } : null) } as CSSProperties}
    >
      <button type="button" className="popover__fechar btn-icone btn-icone--p" aria-label="Fechar" onClick={onFechar}>
        <IconFechar />
      </button>
      <div className="popover__cabeca">
        <CapaMini livro={livro} className="popover__capa" />
        <div>
          <h3 className="h3">{livro.titulo}</h3>
          <p className="t3">
            {livro.autor} · {livro.ano}
          </p>
          <div className="popover__sessoes">
            {emSessoes.map((s) => (
              <span key={s.id} className="etiqueta" style={{ '--c': s.cor } as CSSProperties}>
                {s.nome}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="t2 popover__texto">{livro.descricao}</p>
      <div className="popover__acoes">
        <button type="button" className="btn" onClick={onAbrir3D}>
          <IconCubo /> Abrir em 3D
        </button>
        <button
          type="button"
          className="btn3"
          onClick={() => {
            lib.removerLivro(sessao.id, livro.id);
            onFechar();
          }}
        >
          Tirar de {sessao.nome}
        </button>
      </div>
    </div>
  );
}
