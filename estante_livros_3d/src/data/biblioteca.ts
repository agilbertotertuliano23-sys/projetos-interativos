import { projetos } from './projetos';

/** Livro da biblioteca. Vira livro 3D (BooksShowcase) e livro da estante neon. */
export interface Livro {
  id: string;
  titulo: string;
  autor: string;
  ano: string;
  descricao: string;
  /** Cor neon da capa/lombada (hex). */
  cor: string;
  capitulos?: string[];
  /** Livros criados pelo usuário podem ser apagados da biblioteca. */
  criadoPeloUsuario?: boolean;
}

/** Sessão = prateleira da estante. Um livro pode estar em várias sessões. */
export interface Sessao {
  id: string;
  nome: string;
  cor: string;
  livros: string[];
  criadaEm: number;
}

/** Paleta neon da estante (ref. 02) — usada em capas e sessões. */
export const CORES_NEON = [
  '#2fd8ff',
  '#ff3ea5',
  '#a64dff',
  '#3d7bff',
  '#36f59a',
  '#ff8a2a',
  '#ffd43b',
  '#ff4757',
] as const;

const CORES_PROJETOS = ['#ff4757', '#a64dff', '#2fd8ff', '#3d7bff', '#36f59a', '#ffd43b'];
const CAPITULOS_PROJETO = ['Contexto', 'Direção visual', 'Arquitetura', 'Interface', 'Movimento', 'Entrega'];

export function slug(texto: string): string {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const livrosProjetos: Livro[] = projetos.map((p, i) => ({
  id: slug(p.titulo),
  titulo: p.titulo,
  autor: 'Vinicius',
  ano: '2026',
  descricao: p.descricao,
  cor: CORES_PROJETOS[i % CORES_PROJETOS.length],
  capitulos: CAPITULOS_PROJETO,
}));

/** Referências de design para popular a estante de exemplo. Apague à vontade. */
const livrosReferencias: Livro[] = [
  {
    id: 'grid-systems',
    titulo: 'Grid Systems',
    autor: 'Josef Müller-Brockmann',
    ano: '1981',
    descricao:
      'Manual do grid modular suíço: colunas, margens e proporções aplicadas a cartazes, livros e identidade visual.',
    cor: '#ff8a2a',
  },
  {
    id: 'interaction-of-color',
    titulo: 'Interaction of Color',
    autor: 'Josef Albers',
    ano: '1963',
    descricao:
      'Exercícios sobre como a cor muda conforme o contexto: relatividade, vibração e transparência ilusória.',
    cor: '#ff3ea5',
  },
  {
    id: 'thinking-with-type',
    titulo: 'Thinking with Type',
    autor: 'Ellen Lupton',
    ano: '2004',
    descricao: 'Guia de tipografia em três partes — letra, texto e grid — com exemplos históricos e contemporâneos.',
    cor: '#2fd8ff',
  },
  {
    id: 'design-as-art',
    titulo: 'Design as Art',
    autor: 'Bruno Munari',
    ano: '1966',
    descricao: 'Ensaios curtos sobre o design do dia a dia, do objeto ao cartaz, com humor e método.',
    cor: '#36f59a',
  },
  {
    id: 'ways-of-seeing',
    titulo: 'Ways of Seeing',
    autor: 'John Berger',
    ano: '1972',
    descricao: 'Como as imagens carregam ideias: pintura a óleo, publicidade e a forma como aprendemos a olhar.',
    cor: '#ffd43b',
  },
  {
    id: 'shape-of-design',
    titulo: 'The Shape of Design',
    autor: 'Frank Chimero',
    ano: '2012',
    descricao: 'Por que e como fazemos design: propósito, improviso e narrativa no trabalho criativo.',
    cor: '#a64dff',
  },
];

export const LIVROS_INICIAIS: Livro[] = [...livrosProjetos, ...livrosReferencias];

export const SESSOES_INICIAIS: Sessao[] = [
  {
    id: 'projetos',
    nome: 'Projetos',
    cor: '#2fd8ff',
    livros: livrosProjetos.map((l) => l.id),
    criadaEm: 1,
  },
  {
    id: 'referencias',
    nome: 'Referências',
    cor: '#ff3ea5',
    livros: livrosReferencias.map((l) => l.id),
    criadaEm: 2,
  },
  {
    id: 'destaques',
    nome: 'Destaques',
    cor: '#ffd43b',
    livros: ['ares', 'interaction-of-color', 'kos', 'thinking-with-type'],
    criadaEm: 3,
  },
  {
    id: 'para-ler',
    nome: 'Para ler',
    cor: '#36f59a',
    livros: [],
    criadaEm: 4,
  },
];
