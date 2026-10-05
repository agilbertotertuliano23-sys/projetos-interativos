// Empacota three.js + os addons usados pelas demos num único script clássico
// (vendor/three.squema.js, global THREE). Script clássico em vez de módulo ES
// para que as páginas abram direto do disco (file://), sem servidor.
import * as esbuild from 'esbuild';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const versao = JSON.parse(fs.readFileSync(new URL('./node_modules/three/package.json', import.meta.url))).version;

const entrada = `
export * from 'three';
export { OrbitControls } from 'three/addons/controls/OrbitControls.js';
export { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
export { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
export { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
export { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
export { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
export * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';
`;

await esbuild.build({
  stdin: { contents: entrada, resolveDir: new URL('.', import.meta.url).pathname, loader: 'js' },
  bundle: true,
  format: 'iife',
  globalName: 'THREE',
  minify: true,
  target: 'es2020',
  legalComments: 'none',
  banner: { js: `/* three.js r${versao.split('.')[1]} (${versao}) + addons — MIT, (c) 2010-2025 three.js authors. Ver vendor/THREE-LICENSE.txt */` },
  outfile: new URL('../vendor/three.squema.js', import.meta.url).pathname,
});

fs.copyFileSync(require.resolve('three').replace(/build[\\/].*$/, 'LICENSE'), new URL('../vendor/THREE-LICENSE.txt', import.meta.url));
const tam = fs.statSync(new URL('../vendor/three.squema.js', import.meta.url)).size;
console.log(`vendor/three.squema.js — three ${versao}, ${(tam / 1024).toFixed(0)} KB`);
