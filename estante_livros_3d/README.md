# Estante 3D — livros interativos

Componente de estante de livros em 3D (three.js + React + Tailwind v4), extraído
do portfólio [ZEUS-interface-portifolio](https://github.com/agilbertotertuliano23-sys/ZEUS-interface-portifolio)
(`src/components/LivrosShowcase`) e isolado como projeto independente.

- Clique num livro para tirá-lo da estante, abrir e girar.
- Setas passam o carrossel quando há mais livros do que cabem na tela.
- Capas procedurais geradas a partir de título + autor (não precisa de imagens).

## Rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # gera dist/ (abre de qualquer subpasta)
```

## Editar os livros

Os livros vêm de `src/data/projetos.ts`. Cores e textos da estante ficam em
`src/App.tsx` (`themeColors`, `heroTitle`, `navTitle`). Cada livro aceita
também capas por imagem (`images.front/back/spine`) ou pintores de canvas
próprios — veja a interface `BookCfg` em
`src/components/BooksShowcase/BooksShowcase.tsx`.
