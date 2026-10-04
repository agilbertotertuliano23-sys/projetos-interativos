/** Livros da estante. Edite à vontade: cada item vira um livro 3D. */
export interface Projeto {
  titulo: string;
  descricao: string;
}

export const projetos: Projeto[] = [
  {
    titulo: 'ARES',
    descricao:
      'Vitrine de e-commerce com visualizador 3D real de tenis e apresentacao ' +
      'cinematografica. Astro estatico, ilhas Preact/React.',
  },
  {
    titulo: 'DIONISIO',
    descricao:
      'Duas frentes sobre uma base: versao web e vitrine mobile. Tokens ' +
      'compartilhados, efeito de brasa em WebGL na home.',
  },
  {
    titulo: 'HERMES',
    descricao:
      'Site do restaurante + console de operacao mobile/desktop (pedidos, ' +
      'cardapio, reservas) sobre a mesma base de secoes.',
  },
  {
    titulo: 'ATHENA',
    descricao:
      'Painel de relacionamento com cliente: KPIs, graficos, pipeline. ' +
      'Console desktop denso + versao mobile enxuta.',
  },
  {
    titulo: 'KOS',
    descricao:
      'Vault de conhecimento com camadas de aquisicao, ingestao, memoria e ' +
      'inteligencia. Squads de agentes reais.',
  },
  {
    titulo: 'Direcao visual',
    descricao:
      'Paleta carvao + fio de acento, grid/halftone sutis, poster A3 e ' +
      'sistema de tokens derivado dos assets.',
  },
];
