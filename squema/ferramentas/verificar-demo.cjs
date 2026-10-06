// Verificação headless de UMA demo do SQUEMA.
// Uso: node verificar-demo.cjs <id> [roteiro.cjs]
//   - abre demos/<id>.html em 1360x900 (desktop) e 390x844 (celular)
//   - lista erros/avisos do console, exceções, requisições locais que falharam,
//     rolagem horizontal da página e elementos que vazam do palco/painel
//   - salva capturas em $SHOTS (padrão: <tmp>/squema-shots)/<id>-desk.png, <id>-desk-palco.png, <id>-mob.png, <id>-mob-palco.png
//   - se [roteiro.cjs] for dado (module.exports = async (p, info) => { ... }), executa-o no desktop
//     depois do carregamento; o roteiro pode tirar capturas extras com
//     await p.locator('.palco').screenshot({ path: info.shot('nome') })
// Playwright: npm i playwright (ou PLAYWRIGHT=/caminho/do/playwright). Variáveis: ESPERA (ms, padrão 2500), SO=desk|mob (só um tamanho), FULL=1 (página inteira)
const { chromium } = require(process.env.PLAYWRIGHT || 'playwright');
const path = require('path'), fs = require('fs');
const RAIZ = path.resolve(__dirname, '..') + '/';
const SHOTS = process.env.SHOTS || path.join(require('os').tmpdir(), 'squema-shots');
fs.mkdirSync(SHOTS, { recursive: true });
const id = process.argv[2];
const roteiro = process.argv[3] ? require(path.resolve(process.argv[3])) : null;
if (!id) { console.log('uso: node verificar-demo.cjs <id> [roteiro.cjs]'); process.exit(1); }
const IGNORAR = /fonts\.g|ERR_FAILED|GPU stall|WebGL|swiftshader|Automatic fallback|ERR_NAME_NOT_RESOLVED|ERR_INTERNET_DISCONNECTED|Failed to load resource: net::ERR_BLOCKED/i;
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
  const tamanhos = [['desk', 1360, 900], ['mob', 390, 844]].filter(([n]) => !process.env.SO || process.env.SO === n);
  let total = 0;
  for (const [nome, w, h] of tamanhos) {
    const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, hasTouch: nome === 'mob', isMobile: nome === 'mob' });
    const p = await ctx.newPage();
    const erros = [];
    p.on('console', (m) => { if ((m.type() === 'error' || m.type() === 'warning') && !IGNORAR.test(m.text())) erros.push(m.type() + ': ' + m.text()); });
    p.on('pageerror', (e) => erros.push('EXCEÇÃO: ' + e.message + (e.stack ? '\n    ' + e.stack.split('\n').slice(1, 4).join('\n    ') : '')));
    p.on('requestfailed', (r) => { if (r.url().startsWith('file:')) erros.push('arquivo não encontrado: ' + r.url().replace('file://' + RAIZ, '')); });
    await p.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
    await p.goto('file://' + RAIZ + 'demos/' + id + '.html');
    await p.waitForTimeout(+(process.env.ESPERA || 2500));
    const info = { nome, w, h, shot: (s) => path.join(SHOTS, `${id}-${nome}-${s}.png`) };
    if (roteiro && nome === 'desk') { try { await roteiro(p, info); } catch (e) { erros.push('roteiro: ' + e.message); } await p.waitForTimeout(800); }
    const medidas = await p.evaluate(() => {
      const de = document.documentElement, r = [];
      if (de.scrollWidth > de.clientWidth + 1) r.push(`rolagem horizontal: largura ${de.scrollWidth} > ${de.clientWidth}`);
      const vaz = [];
      for (const n of document.querySelectorAll('.painel *, .demo-cabeca *, .esquema-caso *')) {
        const b = n.getBoundingClientRect();
        if (b.width && (b.right > de.clientWidth + 1 || b.left < -1)) vaz.push(`${n.tagName.toLowerCase()}.${n.className || ''} (${Math.round(b.left)}–${Math.round(b.right)})`);
      }
      if (vaz.length) r.push('elementos fora da tela: ' + vaz.slice(0, 6).join('; '));
      const palco = document.querySelector('.palco');
      const pb = palco && palco.getBoundingClientRect();
      return { problemas: r, palco: pb ? `${Math.round(pb.width)}x${Math.round(pb.height)}` : 'sem palco', titulo: document.title,
        msgsGuia: document.querySelectorAll('.guia-msg').length, perguntas: document.querySelectorAll('.guia-perguntas button').length };
    });
    erros.push(...medidas.problemas);
    const palco = await p.$('.palco');
    if (palco) await palco.screenshot({ path: path.join(SHOTS, `${id}-${nome}-palco.png`) });
    await p.screenshot({ path: path.join(SHOTS, `${id}-${nome}.png`), fullPage: !!process.env.FULL });
    console.log(`== ${id} [${nome} ${w}x${h}] palco ${medidas.palco} · "${medidas.titulo}" · guia: ${medidas.msgsGuia} msg, ${medidas.perguntas} perguntas`);
    console.log(erros.length ? erros.map((e) => '  ✗ ' + e).join('\n') : '  ✓ sem erros');
    total += erros.length;
    await ctx.close();
  }
  console.log(`capturas em ${SHOTS}/${id}-*.png`);
  await b.close();
  process.exit(total ? 2 : 0);
})();
