# Estante — livros interativos

Página web com os livros 3D (three.js + React + Tailwind v4), uma estante neon
organizada em sessões e um vídeo que se abre conforme o scroll.

O componente 3D veio do portfólio
[ZEUS-interface-portifolio](https://github.com/agilbertotertuliano23-sys/ZEUS-interface-portifolio)
(`src/components/LivrosShowcase`). A interface foi construída com o fluxo da skill
[`img-to-html`](https://github.com/rtadewald/skills/tree/main/img-to-html):
referências → wireframe tipado + plano → fundo → componentes + fontes → assets →
revisão. Veja [`design/`](./design).

## Estrutura da página

| # | Seção | Referência | O que faz |
|---|-------|------------|-----------|
| — | Nav | 04 | Logo, busca (filtra a estante), links e o botão **Coleções** |
| — | Hero | 01, 03 | Logo animado + título de letras-objeto e faixa em loop |
| 01 | Livro 3D | 03 | `BooksShowcase` com os livros da sessão escolhida nos chips |
| 02 | Estante neon | 02 | Uma prateleira por sessão; livros em CSS 3D com a mesma capa do modelo 3D |
| 03 | Vídeo em scroll | 05 | Dispositivo dobrável que se abre e toca o vídeo conforme o scroll |

### Coleções e sessões

- **Coleções** (nav) abre o painel com todas as sessões: filtrar, ordenar, abrir uma sessão.
- **Nova sessão** cria uma prateleira nova na estante.
- Na configuração da sessão: renomear, trocar a cor, mudar a posição na estante,
  ordenar/remover livros, adicionar livros da biblioteca ou **criar um livro novo**.
- Na estante: clique num livro para ver detalhes e **Abrir em 3D**; arraste para
  outra prateleira para mover (ou dentro da mesma para reordenar).
- Tudo fica salvo no `localStorage` do navegador (`estante:v1`). "Restaurar
  estante de exemplo", no rodapé do painel, volta ao conteúdo inicial.

## Rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # gera dist/ (abre de qualquer subpasta)
```

## Editar conteúdo

| Arquivo | Conteúdo |
|---------|----------|
| `src/data/projetos.ts` | Seus projetos (viram livros da sessão "Projetos") |
| `src/data/biblioteca.ts` | Livros de referência, sessões iniciais e paleta neon |
| `src/data/video.ts` | Cenas, textos e especificação do vídeo em scroll |
| `src/lib/capas.ts` | Pintores das capas neon (frente, lombada, verso) |
| `src/styles/site.css` | Tokens (`:root`) e estilos de cada região do wireframe |

## Vídeo em scroll — pronto para um modelo de vídeo

Sem vídeo, a seção desenha um quadro procedural (`src/lib/quadroProcedural.ts`)
com as mesmas quatro cenas. Para usar um vídeo gerado:

1. Gere o clipe com o prompt de `videoScroll.modelo.prompt` (16:9, 8 s, 24 fps);
   cada cena de `videoScroll.cenas` traz o `plano` do trecho correspondente.
2. Reencode todo-intra para o scrub ficar liso:
   ```bash
   ffmpeg -i entrada.mp4 -an -vf scale=1920:-2 -c:v libx264 -g 1 -crf 20 \
     -pix_fmt yuv420p -movflags +faststart public/video/estante.mp4
   ```
3. Em `src/data/video.ts`, preencha `src: 'video/estante.mp4'`.

O título, o menu, o botão e as legendas continuam em HTML por cima do vídeo,
então o vídeo não deve ter texto (o centro e os 15% inferiores ficam livres).

## API extra do `BooksShowcase`

Além das props originais (`books`, `themeColors`, …):

- `openRequest={{ id, nonce }}` — abre um livro pelo id quando a seção está na tela
  (traz o livro para o carrossel se precisar).
- `labels` — textos da interface (padrão em inglês).
- `detailMeta(book)` / `renderDetailActions(book)` — conteúdo do painel de detalhe.
