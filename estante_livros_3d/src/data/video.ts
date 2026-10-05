/**
 * Vídeo em scroll (ref. 05) — estrutura pré-organizada para um modelo de vídeo.
 *
 * Sem `src`, a seção desenha um quadro procedural (céu, flores, capas, estante
 * neon) que segue exatamente as mesmas cenas. Para trocar pelo vídeo gerado:
 *   1. gere o clipe com `modelo.prompt` (proporção, duração e cenas abaixo);
 *   2. reencode todo-intra para o scrub ficar liso (ver `modelo.encode`);
 *   3. salve em `public/video/estante.mp4` e preencha `src: 'video/estante.mp4'`.
 */

export interface CenaVideo {
  id: string;
  /** Início/fim dentro da linha do tempo do vídeo (0–1). */
  inicio: number;
  fim: number;
  titulo: string;
  texto: string;
  /** Descrição do plano para o modelo de vídeo (trecho do prompt). */
  plano: string;
}

export interface VideoScrollConfig {
  /** Caminho relativo a `public/`. Vazio → quadro procedural. */
  src: string;
  poster?: string;
  /** Altura total da seção em vh (quanto scroll o vídeo consome). */
  alturaVh: number;
  /** Proporção da tela do dispositivo (= do vídeo). */
  proporcao: [number, number];
  titulo: string;
  subtitulo: string;
  cta: string;
  botaoTopo: string;
  cenas: CenaVideo[];
  modelo: {
    duracaoSegundos: number;
    fps: number;
    resolucao: string;
    prompt: string;
    negativo: string;
    encode: string;
  };
}

export const videoScroll: VideoScrollConfig = {
  src: '',
  alturaVh: 460,
  proporcao: [16, 9],
  titulo: 'ESTANTE',
  subtitulo: 'Livros fazem o dia parecer diferente',
  cta: 'Monte sua coleção',
  botaoTopo: 'Montar coleção',
  cenas: [
    {
      id: 'dia',
      inicio: 0,
      fim: 0.28,
      titulo: 'Abre o dia',
      texto: 'O dispositivo se desdobra e as flores atravessam o céu.',
      plano:
        '0–2s: céu azul-claro de manhã; rosas cor-de-rosa e pêssego, pétalas brancas e lilases voando em diagonal (baixo-esquerda → cima-direita) com motion blur e profundidade de campo rasa.',
    },
    {
      id: 'capas',
      inicio: 0.28,
      fim: 0.58,
      titulo: 'As capas voam',
      texto: 'Os livros da biblioteca sobem entre as pétalas, girando devagar.',
      plano:
        '2–4.5s: livros com capas de bordas neon (ciano, magenta, violeta, amarelo) sobem entre as flores, girando lentamente, como se flutuassem.',
    },
    {
      id: 'estante',
      inicio: 0.58,
      fim: 0.82,
      titulo: 'A estante acende',
      texto: 'Anoitece em violeta e as prateleiras neon se desenham.',
      plano:
        '4.5–6.5s: o céu escurece para um crepúsculo violeta com estrelas; finas prateleiras neon acendem no terço inferior e silhuetas de livros iluminados aparecem nelas.',
    },
    {
      id: 'colecao',
      inicio: 0.82,
      fim: 1,
      titulo: 'Monte sua coleção',
      texto: 'Crie sessões, arraste livros e organize a sua estante.',
      plano: '6.5–8s: leve push-in; as pétalas assentam e o brilho neon das prateleiras preenche o quadro.',
    },
  ],
  modelo: {
    duracaoSegundos: 8,
    fps: 24,
    resolucao: '1920x1080',
    prompt:
      'Plano único e contínuo, câmera travada, sem texto e sem interface, 8 segundos, 16:9. ' +
      '0–2s: céu azul-claro de manhã, rosas cor-de-rosa e pêssego e pétalas brancas e lilases voando em diagonal com motion blur. ' +
      '2–4.5s: livros com capas de bordas neon (ciano, magenta, violeta, amarelo) sobem entre as flores, girando devagar. ' +
      '4.5–6.5s: o céu escurece para um crepúsculo violeta com estrelas; finas prateleiras neon acendem no terço inferior. ' +
      '6.5–8s: leve push-in, o brilho neon preenche o quadro. ' +
      'Deixe o centro do quadro calmo (o título entra ali) e os 15% inferiores simples (botão).',
    negativo: 'texto, letras, logotipos, marca d’água, mãos, rostos, tremor de câmera, cortes',
    encode:
      'ffmpeg -i entrada.mp4 -an -vf scale=1920:-2 -c:v libx264 -g 1 -crf 20 -pix_fmt yuv420p -movflags +faststart public/video/estante.mp4',
  },
};
