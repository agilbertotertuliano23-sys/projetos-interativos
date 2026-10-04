import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// base relativa: o build em dist/ abre de qualquer subpasta (ex.: GitHub Pages).
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
});
