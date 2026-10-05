import { useEffect, useState } from 'react';
import type { Livro } from '../data/biblioteca';
import { urlCapa, type Face } from './capas';

/** URL da miniatura de uma face do livro; `null` enquanto pinta. */
export function useCapa(livro: Livro | null | undefined, face: Face): string | null {
  const [url, setUrl] = useState<string | null>(null);
  const chave = livro ? [livro.id, livro.titulo, livro.autor, livro.cor].join('|') : '';

  useEffect(() => {
    if (!livro) {
      setUrl(null);
      return;
    }
    let vivo = true;
    urlCapa(livro, face)
      .then((u) => vivo && setUrl(u))
      .catch(() => vivo && setUrl(null));
    return () => {
      vivo = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chave, face]);

  return url;
}
