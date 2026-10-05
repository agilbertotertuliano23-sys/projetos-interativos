import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from 'react';
import { CORES_NEON, LIVROS_INICIAIS, SESSOES_INICIAIS, slug, type Livro, type Sessao } from '../data/biblioteca';

/**
 * Biblioteca + sessões (prateleiras), persistidas no localStorage.
 * Sessões são coleções: guardam ids de livros, e um livro pode estar em várias.
 */

const CHAVE = 'estante:v1';

interface Estado {
  livros: Livro[];
  sessoes: Sessao[];
}

type Acao =
  | { tipo: 'criarSessao'; sessao: Sessao }
  | { tipo: 'atualizarSessao'; id: string; dados: Partial<Pick<Sessao, 'nome' | 'cor'>> }
  | { tipo: 'excluirSessao'; id: string }
  | { tipo: 'moverSessao'; id: string; delta: number }
  | { tipo: 'adicionarLivro'; sessaoId: string; livroId: string; indice?: number }
  | { tipo: 'removerLivro'; sessaoId: string; livroId: string }
  | { tipo: 'transferirLivro'; de: string; para: string; livroId: string; indice?: number }
  | { tipo: 'criarLivro'; livro: Livro; sessaoId?: string }
  | { tipo: 'excluirLivro'; id: string }
  | { tipo: 'restaurar' };

const inicial = (): Estado => ({ livros: LIVROS_INICIAIS, sessoes: SESSOES_INICIAIS });

function carregar(): Estado {
  try {
    const bruto = localStorage.getItem(CHAVE);
    if (!bruto) return inicial();
    const dados = JSON.parse(bruto) as Partial<Estado>;
    if (!Array.isArray(dados.livros) || !Array.isArray(dados.sessoes)) return inicial();
    const ids = new Set(dados.livros.map((l) => l.id));
    // descarta ids órfãos (livro apagado em outra aba, versão antiga etc.)
    const sessoes = dados.sessoes.map((s) => ({ ...s, livros: (s.livros ?? []).filter((id) => ids.has(id)) }));
    return { livros: dados.livros, sessoes };
  } catch {
    return inicial();
  }
}

/** Insere `id` em `lista` na posição `indice` (fim por padrão), sem duplicar. */
function inserir(lista: string[], id: string, indice?: number): string[] {
  const sem = lista.filter((x) => x !== id);
  const i = indice === undefined ? sem.length : Math.max(0, Math.min(sem.length, indice));
  sem.splice(i, 0, id);
  return sem;
}

function reducer(estado: Estado, acao: Acao): Estado {
  const mapSessao = (id: string, fn: (s: Sessao) => Sessao) =>
    estado.sessoes.map((s) => (s.id === id ? fn(s) : s));

  switch (acao.tipo) {
    case 'criarSessao':
      return { ...estado, sessoes: [...estado.sessoes, acao.sessao] };
    case 'atualizarSessao':
      return { ...estado, sessoes: mapSessao(acao.id, (s) => ({ ...s, ...acao.dados })) };
    case 'excluirSessao':
      return { ...estado, sessoes: estado.sessoes.filter((s) => s.id !== acao.id) };
    case 'moverSessao': {
      const i = estado.sessoes.findIndex((s) => s.id === acao.id);
      const j = i + acao.delta;
      if (i < 0 || j < 0 || j >= estado.sessoes.length) return estado;
      const sessoes = [...estado.sessoes];
      [sessoes[i], sessoes[j]] = [sessoes[j], sessoes[i]];
      return { ...estado, sessoes };
    }
    case 'adicionarLivro':
      return {
        ...estado,
        sessoes: mapSessao(acao.sessaoId, (s) => ({ ...s, livros: inserir(s.livros, acao.livroId, acao.indice) })),
      };
    case 'removerLivro':
      return {
        ...estado,
        sessoes: mapSessao(acao.sessaoId, (s) => ({ ...s, livros: s.livros.filter((id) => id !== acao.livroId) })),
      };
    case 'transferirLivro': {
      if (acao.de === acao.para) {
        return {
          ...estado,
          sessoes: mapSessao(acao.para, (s) => ({ ...s, livros: inserir(s.livros, acao.livroId, acao.indice) })),
        };
      }
      return {
        ...estado,
        sessoes: estado.sessoes.map((s) => {
          if (s.id === acao.de) return { ...s, livros: s.livros.filter((id) => id !== acao.livroId) };
          if (s.id === acao.para) return { ...s, livros: inserir(s.livros, acao.livroId, acao.indice) };
          return s;
        }),
      };
    }
    case 'criarLivro': {
      const livros = [...estado.livros, acao.livro];
      if (!acao.sessaoId) return { ...estado, livros };
      return {
        livros,
        sessoes: mapSessao(acao.sessaoId, (s) => ({ ...s, livros: inserir(s.livros, acao.livro.id) })),
      };
    }
    case 'excluirLivro':
      return {
        livros: estado.livros.filter((l) => l.id !== acao.id),
        sessoes: estado.sessoes.map((s) => ({ ...s, livros: s.livros.filter((id) => id !== acao.id) })),
      };
    case 'restaurar':
      return inicial();
  }
}

function idUnico(base: string, usados: Iterable<string>): string {
  const set = new Set(usados);
  const raiz = slug(base) || 'item';
  if (!set.has(raiz)) return raiz;
  let n = 2;
  while (set.has(`${raiz}-${n}`)) n++;
  return `${raiz}-${n}`;
}

export interface NovoLivro {
  titulo: string;
  autor?: string;
  ano?: string;
  descricao?: string;
  cor?: string;
}

interface Api {
  livros: Livro[];
  sessoes: Sessao[];
  livroPorId: Map<string, Livro>;
  criarSessao: (nome?: string) => string;
  atualizarSessao: (id: string, dados: Partial<Pick<Sessao, 'nome' | 'cor'>>) => void;
  excluirSessao: (id: string) => void;
  moverSessao: (id: string, delta: number) => void;
  adicionarLivro: (sessaoId: string, livroId: string, indice?: number) => void;
  removerLivro: (sessaoId: string, livroId: string) => void;
  transferirLivro: (de: string, para: string, livroId: string, indice?: number) => void;
  criarLivro: (dados: NovoLivro, sessaoId?: string) => string;
  excluirLivro: (id: string) => void;
  restaurar: () => void;
}

const Ctx = createContext<Api | null>(null);

export function LibraryProvider({ children }: { children: ReactNode }) {
  const [estado, dispatch] = useReducer(reducer, undefined, carregar);

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(estado));
    } catch {
      /* armazenamento bloqueado (aba privada etc.): segue só em memória */
    }
  }, [estado]);

  const api = useMemo<Api>(() => {
    const livroPorId = new Map(estado.livros.map((l) => [l.id, l]));
    return {
      livros: estado.livros,
      sessoes: estado.sessoes,
      livroPorId,
      criarSessao: (nome = 'Nova sessão') => {
        const id = idUnico(nome, estado.sessoes.map((s) => s.id));
        const usadas = new Set(estado.sessoes.map((s) => s.cor));
        const cor = CORES_NEON.find((c) => !usadas.has(c)) ?? CORES_NEON[estado.sessoes.length % CORES_NEON.length];
        dispatch({ tipo: 'criarSessao', sessao: { id, nome, cor, livros: [], criadaEm: Date.now() } });
        return id;
      },
      atualizarSessao: (id, dados) => dispatch({ tipo: 'atualizarSessao', id, dados }),
      excluirSessao: (id) => dispatch({ tipo: 'excluirSessao', id }),
      moverSessao: (id, delta) => dispatch({ tipo: 'moverSessao', id, delta }),
      adicionarLivro: (sessaoId, livroId, indice) => dispatch({ tipo: 'adicionarLivro', sessaoId, livroId, indice }),
      removerLivro: (sessaoId, livroId) => dispatch({ tipo: 'removerLivro', sessaoId, livroId }),
      transferirLivro: (de, para, livroId, indice) => dispatch({ tipo: 'transferirLivro', de, para, livroId, indice }),
      criarLivro: (dados, sessaoId) => {
        const titulo = dados.titulo.trim() || 'Sem título';
        const id = idUnico(titulo, livroPorId.keys());
        const livro: Livro = {
          id,
          titulo,
          autor: dados.autor?.trim() || 'Autor desconhecido',
          ano: dados.ano?.trim() || String(new Date().getFullYear()),
          descricao: dados.descricao?.trim() || 'Sem descrição.',
          cor: dados.cor ?? CORES_NEON[estado.livros.length % CORES_NEON.length],
          criadoPeloUsuario: true,
        };
        dispatch({ tipo: 'criarLivro', livro, sessaoId });
        return id;
      },
      excluirLivro: (id) => dispatch({ tipo: 'excluirLivro', id }),
      restaurar: () => dispatch({ tipo: 'restaurar' }),
    };
  }, [estado]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useLibrary(): Api {
  const api = useContext(Ctx);
  if (!api) throw new Error('useLibrary precisa de <LibraryProvider>');
  return api;
}

/** Livros (resolvidos) de uma sessão, na ordem da prateleira. */
export function livrosDaSessao(sessao: Sessao | undefined, livroPorId: Map<string, Livro>): Livro[] {
  if (!sessao) return [];
  return sessao.livros.map((id) => livroPorId.get(id)).filter((l): l is Livro => Boolean(l));
}
