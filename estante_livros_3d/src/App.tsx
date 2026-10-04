import BooksShowcase, { type BookCfg } from './components/BooksShowcase/BooksShowcase';
import { projetos } from './data/projetos';

// Projetos → livros. As capas são procedurais (título + autor), geradas pelo
// próprio componente; nenhuma arte extra é necessária.
const livros: BookCfg[] = projetos.map((p, i) => ({
  id: `proj-${i}`,
  title: p.titulo,
  author: 'Vinicius',
  year: '2026',
  stars: 5,
  desc: p.descricao,
  edge: '#e9dcc0',
  spineBg: '#141018',
  spineInk: '#E7C079',
  backBg: '#141018',
  backInk: '231,192,121',
}));

export function App() {
  return (
    <main className="estante dark">
      <BooksShowcase
        books={livros}
        heroTitle="Estante"
        navTitle="Selecionados"
        themeColors={{
          bgLight: '#0B0B0F',
          bgDark: '#0B0B0F',
          foregroundLight: '#ECECF2',
          foregroundDark: '#ECECF2',
          navy: '#131018',
          cream: '#F4EFE4',
          pink: '#C68A2E',
          lav: '#B7AE9C',
          peri: '#E7C079',
        }}
      />
    </main>
  );
}
