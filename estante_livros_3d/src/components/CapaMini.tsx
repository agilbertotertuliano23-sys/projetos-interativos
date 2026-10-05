import type { CSSProperties } from 'react';
import type { Livro } from '../data/biblioteca';
import type { Face } from '../lib/capas';
import { useCapa } from '../lib/useCapa';

/** Miniatura de uma face do livro, com a mesma arte do modelo 3D. */
export function CapaMini({ livro, face = 'frente', className }: { livro: Livro; face?: Face; className?: string }) {
  const url = useCapa(livro, face);
  return (
    <span
      className={['capa-mini', `capa-mini--${face}`, className].filter(Boolean).join(' ')}
      style={{ '--c': livro.cor } as CSSProperties}
      aria-hidden="true"
    >
      {url && <img src={url} alt="" draggable={false} />}
    </span>
  );
}
