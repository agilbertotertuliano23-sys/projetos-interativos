/**
 * Helpers puros do ZEUS. Sem dependencias externas.
 */

/** Junta classes ignorando falsy. classes('a', cond && 'b'). */
export function classes(...xs: Array<string | false | null | undefined>): string {
  return xs.filter(Boolean).join(' ');
}

