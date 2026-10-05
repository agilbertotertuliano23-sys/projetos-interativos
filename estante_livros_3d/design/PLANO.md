# Plano de implementação

Fluxo da skill [`img-to-html`](https://github.com/rtadewald/skills/tree/main/img-to-html):
wireframe tipado → fundo → estrutura/componentes + fontes → assets → revisão final.
A stack segue o projeto existente (React + Vite + three.js), como a própria skill
prevê quando o projeto já é React/Vite. CSS da página fica em
`src/styles/site.css`, com tokens em `:root` e uma classe por região do
[`wireframe.txt`](./wireframe.txt).

## Referências

| # | Arquivo | Papel na página |
|---|---------|-----------------|
| 1 | `referencias/01-logo.webp` | Logo: painéis de vidro em forma de livro, estrela e órbita |
| 2 | `referencias/02-estante-neon.webp` | Estante interativa neon, logo depois da seção do livro |
| 3 | `referencias/03-secao-livro.jpg` | Ordem da página: hero tipográfico → faixa → livro com brilho |
| 4 | `referencias/04-colecoes.webp` | Painel de coleções aberto pelo nav (chips, ordenar, cards tracejados) |
| 5 | `referencias/05-video-scroll.jpg` | Vídeo em scroll: dispositivo dobrável abrindo, título grande, CTA flor |

## Regiões

| Região / elemento | Etapa | Técnica |
|-------------------|-------|---------|
| Fundo da página (carvão + halos) | 2 | Gradientes CSS em `body` e nas seções |
| Logo (`img:logo`) | 2 / 4 | SVG próprio com gradientes e filtros de brilho; órbita animada em CSS |
| `nav` | 3 | Barra de vidro flutuante; busca filtra a estante; botão Coleções abre o painel |
| `hero` + `marquee` | 3 | Letras-objeto em gradiente neon (Syne 800) e faixa em loop CSS |
| `section#livro` / `media` | 3 | `BooksShowcase` (three.js) com `rail` de sessões e API `openRequest` |
| `section#estante` / `card` | 3 | Prateleiras em CSS 3D; cada livro usa as mesmas capas procedurais do modelo 3D |
| `card2` (placa neon) | 3 | Bloco iluminado com nome e contagem, como a placa "Brooklyn" da ref 2 |
| `quote` (popover) | 3 | Cartão de vidro com "Abrir em 3D" (rola até o livro e abre) |
| `section#video` | 3 | Palco sticky; dois painéis CSS 3D desenham metades de um mesmo quadro |
| Quadro do vídeo | 4 | `<video>` com scrub por scroll; sem arquivo, canvas procedural (céu + pétalas + livros) |
| Painel de coleções (`form`, `card3`, `card4`) | 3 | Bordas tracejadas na cor da sessão, leque de capas, bolsa de vidro |
| Configuração da sessão (`card5`, `form2`) | 3 | Renomear, cor, ordenar, remover, adicionar da biblioteca, criar livro |
| Página completa | 5 | Screenshots desktop/mobile via Playwright e ajustes de integração |

## Tipografia

| Tag | Família | Origem |
|-----|---------|--------|
| `h1`, `h2` (display) | Syne 700–800 | Aproximação do grotesco largo da ref 3 |
| `t1`–`t3`, `btn`, `in` | Plus Jakarta Sans | Aproximação do sans geométrico da ref 4 |
| `h1` do vídeo | Gloock | Aproximação do serifado de alto contraste "BLOOM" da ref 5 |

As fontes são empacotadas via `@fontsource` (sem CDN), então o `dist/` abre offline.

## Estado

`src/state/library.tsx` guarda biblioteca + sessões no `localStorage`
(`estante:v1`). Sessões são coleções: um livro pode estar em várias.

## Revisão (etapa 5)

Capturas da página montada (Chromium headless, 1440×900 e 390×844) em
[`capturas/`](./capturas). Ajustes feitos na revisão: título do hero menor para
caber em 1440px, chips de sessão movidos para o topo da seção 3D (não cobrem os
livros), sombra única sob o dispositivo do vídeo, prateleiras neon do vídeo
abaixo do título e filtros CSS trocados por gradientes nas faces 3D da estante
(desempenho).
