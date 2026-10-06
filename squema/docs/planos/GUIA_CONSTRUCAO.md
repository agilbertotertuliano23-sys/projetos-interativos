# Guia para construir uma demo SQUEMA

Projeto: `/home/user/projetos-interativos/squema/` (site estático em pt-BR, abre por `file://`).
Cada demo é **um único arquivo** `squema/demos/<id>.html`. A ficha do sistema (nome, área, resumo,
objetivos, roteiro, tags) já está em `squema/js/catalogo.js` — **não edite** o catálogo, o CSS,
`js/squema.js`, `js/squema3d.js` nem arquivos de outras demos. Só crie/edite o seu arquivo.
Se precisar de CSS específico, use um `<style>` no `<head>` da sua demo, com seletores prefixados
para não vazar (ex.: `.pr-tabela`, `.dx-cartas`).

Leia `squema/js/squema.js` (441 linhas) e, se for usar 3D, `squema/js/squema3d.js` (331 linhas) —
são curtos e são a referência definitiva. Demos boas para se inspirar (padrão de qualidade):
`demos/optica.html` (2D, arrastar, desafios), `demos/eletricidade.html` (2D, montagem),
`demos/relevo-3d.html` (3D, malha procedural, vertex colors), `demos/corpo-humano.html` (3D, clique em objetos),
`demos/codigo-visual.html` (UI densa com HTML no palco), `demos/vida-financeira.html` (gráficos com `SQ.vista`).

## Esqueleto obrigatório

```html
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>NOME — SQUEMA</title>
  <meta name="theme-color" content="#1F5BE0">
  <link rel="icon" href="../assets/icones/ICONE_DA_AREA">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/squema.css">
  <style> /* opcional, seletores prefixados */ </style>
</head>
<body data-raiz="../">
  <script src="../js/catalogo.js"></script>
  <script src="../js/squema.js"></script>
  <!-- só se usar 3D: -->
  <script src="../vendor/three.squema.js"></script>
  <script src="../js/squema3d.js"></script>
  <script>
  // dados e constantes primeiro…
  SQ.demo('<id>', {
    fundo: 'papel',            // 'papel' (quadriculado claro) | 'ceu' (gradiente claro) | 'noite' (azul escuro) | 'espaco' (escuro)
    dica: 'Arraste … / Clique …', // aparece no canto do palco e some após a 1ª interação
    sala: ['…', '…', '…'],     // sugestões para o professor (TEXTO PURO — é escapado, nada de <b>)
    comoIA: '…',               // como a IA real entraria (TEXTO PURO, escapado)
    guia: {
      ola: 'Mensagem inicial (pode ter <b>HTML</b>)',
      perguntas: [
        { p: 'Pergunta que vira botão?', chaves: ['palavra', 'outra'], r: 'Resposta com <b>HTML</b>' },
        { p: '…', chaves: [...], r: (ctx) => `resposta que usa o estado atual: ${ctx.algo}` },
        // { p, chaves, r, oculta: true } → não vira botão, só responde texto digitado
      ],
      padrao: (ctx, texto) => 'resposta quando nada casa (opcional)',
    },
    montar({ palco, painel, guia, ui, sistema, area }) {
      // monte controles no painel (ui.grupo) e a cena no palco
      guia.contexto = () => ({ /* estado relevante para uma IA real */ });
    },
  });
  </script>
</body>
</html>
```

Ícones por área (`../assets/icones/…`): biologia `dna.webp`, fisica `atomo.webp`, quimica `frasco-roxo.webp`,
matematica `esquadro.webp`, geografia `mapa.webp`, historia `coliseu.webp`, portugues `livro-aberto.webp`.

`SQ.demo` monta automaticamente: cabeçalho (nome/estrelas/tags vindos do catálogo), o **palco** (área visual,
`position:relative; overflow:hidden; touch-action:none`, altura ≈ min(72vh, 680px) no desktop, 56vh/≥320px no
celular), o **painel** lateral de 360px (vai para baixo do palco em telas < 1020px), o **guia** (mascote) abaixo
dos controles e a seção "Esquema do caso" (resumo, fluxo, objetivos, `sala`, `comoIA`).

## Controles (`ui`)

Todos aceitam `pai` (elemento onde inserir). Crie grupos com `const g = ui.grupo('Título')` (retorna uma `section.bloco`
dentro do painel; `ui.grupo(titulo, pai, attrs)`).

- `ui.slider({ rotulo, min, max, passo, valor, unidade, casas, formatar: (v)=>str, aoMudar: (v)=>{}, pai })` → `{ el, input, valor }` (get/set `valor`)
- `ui.segmentado({ rotulo, opcoes: [{valor, rotulo, titulo}] | ['a','b'], valor, aoMudar, pai, classe })` → `{ el, valor }` (botões tipo abas; ótimo para modos)
- `ui.select({ rotulo, opcoes, valor, aoMudar(valorString), pai })` → `{ el, select, valor }`
- `ui.alternar({ rotulo, valor, aoMudar(bool), pai })` → `{ el, input, valor }`
- `ui.botao({ rotulo (HTML), classe: ''|'azul'|'verde'|'branco'|'pequeno' (combináveis), aoClicar, pai, titulo })` → `<button>`
- `ui.linha(pai, ...botoes)` → linha de botões lado a lado
- `ui.leituras([{ id, rotulo, valor, destaque }], pai)` → grade de leituras; `.set(id, texto)`

Elementos livres: `SQ.el(tag, attrs, ...filhos)` (attrs: `class`, `html`, `style` objeto, `onclick`…).
Classes CSS prontas: `.bloco`, `.botao` (+`azul`,`verde`,`branco`,`pequeno`), `.chip`, `.chip.claro`, `.miudo`, `.texto-suave`,
`.flex`, `.palco-hud` (faixa absoluta no topo do palco, filhos clicáveis) com `.hud-caixa` (caixinha branca com borda tinta),
`.kbd`, `.tabela-wrap > table.tabela`. Variáveis CSS: `--tinta`, `--azul`, `--amarelo`, `--verde`, `--vermelho`, `--roxo`,
`--laranja`, `--celeste`, `--rosa`, `--linha`, `--nevoa`, `--gelo`, `--texto-suave`, `--fonte`, `--fonte-mono`, `--raio`, `--cor-area`.

## Guia (`guia`)

- `guia.diz(html, { tipo: ''|'sucesso'|'alerta'|'dica', chave })` — fala no chat; com a mesma `chave`, **substitui** a última
  mensagem em vez de empilhar (use para narração contínua de sliders: `guia.diz(txt, { chave: 'estado' })`).
- `guia.contexto = () => ({...})` — estado atual (é o que uma IA real receberia; `r(ctx)` também recebe isso).
- Narre eventos importantes (desafio cumprido, resultado de experimento) com frases curtas e corretas. Não inunde o chat:
  nada de mensagem a cada frame/arrasto — use `chave` ou só ao soltar.

## Canvas 2D

```js
let tela; // crie DEPOIS de declarar tudo que desenhar() usa (evita TDZ: "Cannot access X before initialization")
tela = SQ.canvas2d(palco, (api) => { tela = api; desenhar(); }, { larguraMin: 640 });
function desenhar() { const { ctx, w, h } = tela; ctx.clearRect(0, 0, w, h); /* … */ }
// redesenhe com tela.redesenhar() (reaplica a escala); tela.w/tela.h são unidades lógicas
```
- `larguraMin`: em telas mais estreitas a cena é desenhada nessa largura "virtual" e reduzida. Use (600–720) quando o desenho
  tem muitos rótulos; `SQ.ponteiro` já converte as coordenadas. Mesmo assim, desenhe pensando em proporções (w, h), não em pixels fixos.
- `SQ.ponteiro(tela.canvas, { inicio(pos, e) { return false para não capturar }, mover(pos), fim(pos), hover(pos) })` — arrastar/tocar.
- `SQ.loop((dt, t) => { … }).iniciar()` / `.parar()` — laço de animação (dt ≤ 0,05 s; pausa em aba oculta).
- Kit `SQ.d`: `rr(ctx,x,y,w,h,r)`, `bloco(ctx,x,y,w,h,{cor,r,sombra,esp,alt})` (cartão com sombra sólida e borda tinta),
  `bola(ctx,x,y,r,cor,{esp,brilho})`, `seta(ctx,x1,y1,x2,y2,cor,esp,ponta)`, `texto(ctx,t,x,y,{cor,tam,peso,alinhar,base,fonte:'titulo'|'mono',contorno,esp})`,
  `etiqueta(ctx,t,x,y,{cor,texto,tam,alinhar})` (pílula com borda; retorna largura), `clarear(hex,f)`, `escurecer(hex,f)`, `grade(ctx,w,h,passo)`.
- Gráficos: `const v = SQ.vista({ x0, x1, y0, y1 }, { x, y, w, h })` → `v.X(x)`, `v.Y(y)`, `v.ix(px)`, `v.iy(py)`, `v.dentro(px,py)`,
  `v.zoom(f,px,py)`, `v.arrastar(dx,dy)`, `v.curva(ctx, f, { cor, esp, tracejado, x0, x1, passos })`;
  `SQ.d.eixos(ctx, v, { grade, nomeX, nomeY, fmtX, fmtY, fundo, alvoX, alvoY, eixoNaBorda })`.
- Fonte no canvas: SEMPRE `800 12px Nunito, "Segoe UI", system-ui, sans-serif` (ou via `SQ.d.texto`) — `measureText` precisa da mesma fonte usada no `fillText`.
- Paleta `SQ.CORES`: amarelo #FFC21A, laranja #FF9416, azul #1F5BE0, azulEscuro #1236A8, celeste #2BB4F5, celesteClaro #BFE8FF,
  verde #36C04A, verdeEscuro #1E8A30, roxo #8B3DFF, rosa #FF6B8A, vermelho #EE3B45, marrom #C98B4E, tinta #0B1438, suave #55628F,
  linha #CBD7F5, nevoa #F4F7FF, gelo #E6EEFF. Estilo da marca: formas arredondadas, contorno tinta 2–3px, sombras sólidas, cores vivas.
- Utilidades: `SQ.num(v, casas)` (formato pt-BR), `SQ.numFixo(v, casas)`, `SQ.esc(s)`, `SQ.semAcento(s)`, `SQ.som(freq, dur, tipo, vol)`,
  `SQ.falar(texto, lang)`, `SQ.reduzMovimento`.

## 3D (`S3D`, three.js r180 em `window.THREE` = `S3D.T`)

```js
const c = S3D.cena(palco, { camera: [6, 5, 8], alvo: [0, 0, 0], distancia: [3, 20], polarMax: 1.45, autoGirar: 0.6, sombraRaio: 10, neblina: [cor, perto, longe] });
// c.scene, c.camera, c.controls (OrbitControls), c.renderer
c.aoQuadro((dt, t) => { … });           // tarefa por quadro
await c.tween(0.8, (k) => { … }, { ease: 'suave'|'saida'|'linear'|'mola' });
c.voarPara([x,y,z], [ax,ay,az], 1.1);   // move câmera e alvo
c.escolher(() => listaDeObjetos, (obj, hit) => { … }, { aoPassar: (obj) => { … } }); // clique sem arrastar + hover
```
- Materiais: `S3D.mat(cor, { rugosidade, metal, verniz, opacidade, emissivo, emissivoForca, lados, facetado })` (MeshPhysical brilhante);
  `S3D.matBolha(cor, { opacidade, borda })` (translúcido com borda — para cascas/vidros); `S3D.contorno(obj, esp)` (traço tinta; não usar em transparentes).
- `S3D.rotulo(texto, { classe: ''|'escuro'|'ativo', aoClicar, html })` → CSS2DObject (adicione a um objeto; `.position.set`).
- `S3D.chao(raio, cor)` base cilíndrica; `S3D.texturaCanvas(w, h, (ctx,w,h)=>{})`; `S3D.limpar(grupo)` (remove filhos e rótulos); `S3D.remover(obj)`.
- Modelos livres embutidos: `const { obj, mixer, acoes } = await S3D.instancia('arvores', { tamanho: 2, porAltura: true })` — ids:
  arvores, arvores-altas, floresta, flor, grama, ilha, nuvem, casa-a, casa-b, casa-d, predio, garagem, rua, rua-curva, rua-postes, calcada,
  caminhao, moto, personagem, robo, raposa, bandeira, barracas, fonte, moeda.
- Cores por vértice: `cor.setRGB(r, g, b, T.SRGBColorSpace)` (senão fica lavado).
- Desempenho: mire em celular. Geometrias moderadas, `InstancedMesh` para muitos objetos, nada de física pesada.
- `S3D.suportaWebGL()`: `S3D.cena` lança erro sem WebGL — o `SQ.demo` mostra uma mensagem; não precisa tratar.

Dados disponíveis: `../assets/dados/mundo.js` (`window.SQUEMA_MUNDO.paises`: `n` nome pt, `en`, `a2`, `c` continente, `s` sub-região,
`pop`, `pib` (US$ mi), `renda`, `lx/ly` centro, `an` anéis de polígono em 1/20 de grau — veja `demos/terra-interativa.html`),
`../assets/dados/moleculas.js` (`window.SQUEMA_MOLECULAS`).

## Regras de qualidade

1. **Funciona de primeira, sem erros no console**, em 1360px e em 390px de largura (celular, toque). Sem rolagem horizontal da página.
2. **Sacada interativa**: o aluno manipula, prevê, experimenta e recebe retorno. Desafios com verificação automática.
3. **Correção de conteúdo**: fórmulas, unidades, datas, nomes e exemplos certos; textos em português do Brasil, sem erros de digitação.
   Prefira dados reais (com a fonte citada em comentário e/ou no texto). Não invente estatísticas.
4. **Legível**: nada de texto sobreposto ou cortado, contraste bom; rótulos não colidem; o palco não fica vazio nem poluído.
   Cuide do estado inicial: ele já deve mostrar algo bonito e significativo (é dele que sai a miniatura).
5. **Painel enxuto**: controles agrupados (2–4 grupos), modo/aba com `ui.segmentado`, leituras numéricas com `ui.leituras`.
6. **Guia**: 6–8 perguntas com `chaves` relevantes (palavras sem acento também casam), respostas curtas e corretas;
   respostas dinâmicas `r(ctx)` quando fizer sentido; `guia.contexto` preenchido.
7. Acessibilidade básica: botões com texto, `aria-label` nos controles desenhados à mão quando possível, teclado não obrigatório.
8. Sem dependências externas além das já listadas; nada de `fetch` de dados em tempo de execução; nada de `localStorage` obrigatório.
9. Strings de `sala` e `comoIA` são texto puro (são escapadas). Use aspas tipográficas/travessões à vontade.

## Verificação (obrigatória antes de terminar)

```
# Playwright com Chromium; no ambiente de nuvem: export PLAYWRIGHT=/opt/node22/lib/node_modules/playwright
cd squema/ferramentas
node verificar-demo.cjs <id>                  # desktop + celular: erros, rolagem, capturas
node verificar-demo.cjs <id> roteiro.cjs     # idem, executando interações no desktop
```
O roteiro é um módulo `module.exports = async (p, info) => { … }` (Playwright `page`): clique em botões
(`await p.click('button:has-text("Novo")')` — use `button:has-text(...)`, porque `text=` também casa a dica do palco),
mexa em sliders (`await p.locator('input[type=range]').nth(0).fill('30')` dispara `input`), arraste no palco
(`p.mouse.move/down/up` com coordenadas de `await p.locator('.palco').boundingBox()`), espere (`p.waitForTimeout`)
e tire capturas do palco: `await p.locator('.palco').screenshot({ path: info.shot('modo2') })`.
Guarde os roteiros fora do site (por exemplo em `ferramentas/roteiros/<id>.cjs`). **Abra as capturas (ferramenta Read no PNG) e olhe de verdade**:
sobreposição de textos, cortes, cores, estado vazio, layout no celular (`<id>-mob.png`, `<id>-mob-palco.png`). As capturas vão para `$SHOTS` (padrão: pasta temporária do sistema, `squema-shots`).
Teste todos os modos e os desafios. Corrija e verifique de novo até ficar limpo.
