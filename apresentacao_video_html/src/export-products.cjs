const {chromium}=require('./test-tools/node_modules/playwright');
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url');
const chromiumPath=()=>process.env.CHROMIUM_PATH||['C:/Users/agilb/AppData/Local/ms-playwright/chromium-1187/chrome-win/chrome.exe','/opt/pw-browsers/chromium'].find(file=>require('node:fs').existsSync(file));
const root=path.resolve(__dirname,'..'),out=path.join(root,'produtos');fs.mkdirSync(out,{recursive:true});fs.copyFileSync(path.join(__dirname,'assets','mono-logo.webp'),path.join(out,'mono-logo.webp'));
const products=[
  {preset:'modernPreset',slug:'casa-moderna',title:'Casa moderna',kind:'modern',description:'Térreo envidraçado, torre ripada de três andares, interior mobiliado, piscina, palmeiras, fogueira e moradores.'},
  {preset:'townhousePreset',slug:'sobrado-urbano',title:'Sobrado urbano',kind:'townhouse',description:'Três andares com entrada recuada, toldo, varanda florida, brise de madeira e terraço na cobertura.'},
  {model:'dioramas',slug:'ilhas-de-dioramas',title:'Ilhas de dioramas',kind:'dioramas',description:'Sete mundos em pequenas ilhas: obra, selva, deserto, portal, ilha pirata, castelo e cidade, cada um com seu personagem.'},
  {model:'dancer',slug:'robo-dancarino',title:'Robô dançarino',kind:'dancer',description:'Hub programável com matriz de luzes, motores, vigas Technic e cabos. Ligue a cena viva e ele dança.'},
  {model:'dragon',slug:'dragao-oriental',title:'Dragão oriental',kind:'dragon',description:'Um dragão em espiral ao redor de um pilar de rocha, com garras, bigodes, esferas de cristal e raios de energia.'},
  {model:'freighter',slug:'cargueiro-espacial',title:'Cargueiro espacial',kind:'freighter',description:'Casco em disco, mandíbulas, cabine lateral, antena parabólica e motores azuis. Flutua sobre o suporte.'},
  {model:'skyline',slug:'skyline-nova-york',title:'Skyline de Nova York',kind:'skyline',description:'Estátua da Liberdade, Empire State, Chrysler e One World Trade Center sobre o mapa da cidade.'},
  {preset:'robotPreset',slug:'robo-explorador',title:'Robô explorador',kind:'robot',description:'Pés laranja, articulações, torso e carenagem curva. A reconstrução inspirada no vídeo de referência.'},
  {preset:'housePreset',slug:'casa-modular',title:'Casa modular',kind:'house',description:'Do terreno ao telhado. Acompanhe as paredes, as esquadrias e cada detalhe da casa.'},
  {preset:'carPreset',slug:'veiculo-explorador',title:'Veículo explorador',kind:'car',description:'Chassi, rodas, carroceria e cabine. Cada conjunto tem seu momento de encaixe.'},
  {preset:'rocketPreset',slug:'foguete-orbital',title:'Foguete orbital',kind:'rocket',description:'Uma construção vertical, da plataforma de lançamento até a antena no topo.'},
  {preset:'cityPreset',slug:'praca-lego',title:'Praça LEGO',kind:'city',description:'Loja com porta e vitrine, calçada, árvores, flores, postes, banco e quatro personagens animados.'},
  {preset:'crewPreset',slug:'turma-personagens',title:'Turma de personagens',kind:'crew',description:'Sete minifiguras customizáveis em um palco de dois níveis: chapéus, expressões, estampas e acessórios.'}
];
(async()=>{
 const browser=await chromium.launch({executablePath:chromiumPath(),headless:true,args:['--enable-webgl','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 try{
  const context=await browser.newContext({viewport:{width:1440,height:1000},acceptDownloads:true});await context.setOffline(true);
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));page.setDefaultTimeout(60000);
  await page.goto(pathToFileURL(path.join(root,'index.html')).href);await page.waitForFunction(()=>window.mono);
  for(const product of products){
   if(product.model){await page.locator('#presentMode').click();await page.locator(`[data-model="${product.model}"]`).click();if(await page.locator('#confirmDialog').isVisible())await page.locator('#confirmAction').click();await page.locator('#editMode').click();}
   else{await page.locator('#editMode').click();await page.locator('#'+product.preset).click();await page.locator('#confirmAction').click();}
   await page.locator('#projectTitle').fill(product.title);await page.locator('#projectTitle').press('Tab');
   const data=await page.evaluate(()=>mono.getProject());product.pieces=data.pieces.length;assert.equal(data.kind,product.kind);
   fs.writeFileSync(path.join(out,product.slug+'.json'),JSON.stringify(data,null,2));
   await page.locator('#editorManual').click();await page.waitForFunction(()=>!document.getElementById('exportManual').disabled);
   assert.equal(await page.locator('#manualTitle').textContent(),product.title);
   assert.equal(await page.locator('#manualGrid img').count(),8);
   assert.ok(await page.locator('#manualGrid img').evaluateAll(images=>images.every(img=>img.complete&&img.naturalWidth>0)));
   product.stages=await page.locator('#manualGrid strong').allTextContents();
   const thumbnail=await page.locator('#manualGrid .manual-card').last().locator('img').getAttribute('src');fs.writeFileSync(path.join(out,product.slug+'.png'),Buffer.from(thumbnail.split(',')[1],'base64'));
   await page.locator('#manualDialog').screenshot({path:path.join(root,'verificacao','manual-'+product.slug+'.png')});
   await page.locator('#showInventory').click();const sum=await page.locator('#inventoryList .inventory-row>b').evaluateAll(items=>items.reduce((n,e)=>n+Number(e.textContent.replace(/\D/g,'')),0));assert.equal(sum,data.pieces.length);
   const downloadPromise=page.waitForEvent('download');await page.locator('#exportManual').click();const download=await downloadPromise;const file=path.join(out,product.slug+'.html');await download.saveAs(file);
   const separateContext=await browser.newContext({viewport:{width:1280,height:900}});await separateContext.setOffline(true);const exported=await separateContext.newPage();exported.setDefaultTimeout(60000);exported.on('pageerror',e=>errors.push(e.message));
   await exported.goto(pathToFileURL(file).href);await exported.waitForFunction(()=>window.mono);assert.deepEqual(await exported.evaluate(()=>mono.getProject()),data);
   assert.equal(await exported.evaluate(()=>mono.getStatus().playing),true);
   await exported.locator('#timeline').evaluate(el=>{el.value='19.25';el.dispatchEvent(new Event('input',{bubbles:true}));});await exported.locator('#play').click();
   await exported.waitForFunction(()=>document.getElementById('manualDialog').open);await exported.waitForFunction(()=>!document.getElementById('exportManual').disabled);
   assert.equal(await exported.locator('#manualTitle').textContent(),product.title);await exported.locator('#manualGrid button').nth(3).click();
   assert.ok(await exported.evaluate(()=>mono.getStatus().time>8&&mono.getStatus().time<9));
   await separateContext.close();await page.locator('[data-close="manualDialog"]').first().click();
   console.log('PASS '+product.title+': '+product.pieces+' peças; 8 etapas ilustradas; inventário correto; HTML independente offline; animação e manual final.');
  }
  assert.deepEqual(errors,[]);
  fs.writeFileSync(path.join(out,'catalogo.json'),JSON.stringify(products,null,2));
  const cards=products.map((p,i)=>`<a class="product" href="${p.slug}.html"><div class="visual"><span class="number">${String(i+1).padStart(2,'0')} /</span><img src="${p.slug}.png" alt="${p.title} montado"><span class="open">↗</span></div><div class="meta"><span>${p.pieces} PEÇAS</span><span>08 ETAPAS</span><span>3D INTERATIVO</span></div><h2>${p.title}</h2><p>${p.description}</p><span class="cta">Ver a montagem <span>↗</span></span></a>`).join('\n');
  fs.writeFileSync(path.join(out,'index.html'),`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>MONO — Cada produto, sua montagem</title><link rel="icon" href="mono-logo.webp"><style>
  *{box-sizing:border-box}body{margin:0;background:#fbf9f3;color:#161616;font-family:'Helvetica Neue',Arial,Helvetica,sans-serif}header{height:90px;border-bottom:1px solid #e5e0d3;display:flex;align-items:center;justify-content:space-between;padding:0 6%;font-size:10px;letter-spacing:1px}.brand img{height:46px;display:block;filter:drop-shadow(0 3px 4px #0000001f)}header>span:last-child{color:#77736a;border-left:3px solid #f9ae01;padding-left:10px}main{max-width:1320px;margin:auto;padding:66px 6% 70px}.eyebrow{font-size:9px;letter-spacing:2px;color:#161616;font-weight:700;margin-bottom:22px}.eyebrow:before{content:'';display:inline-block;width:25px;height:1px;background:#f9ae01;margin-right:12px;vertical-align:middle}h1{font-size:56px;font-weight:800;letter-spacing:-2.5px;line-height:1.08;margin:0 0 22px}h1 em{font-style:normal;background:#f9ae01;padding:0 .14em;border-radius:.16em}.intro{font-size:13px;line-height:1.9;color:#77736a;max-width:530px;margin-bottom:48px}.grid{display:grid;grid-template-columns:1fr 1fr;gap:40px 30px}a{text-decoration:none;color:inherit}.product{display:block}.visual{position:relative;overflow:hidden;border-radius:12px;background:#ebe7dc;aspect-ratio:1.45}.visual img{width:100%;height:100%;object-fit:cover;transition:transform .35s}.product:hover img{transform:scale(1.04)}.number{position:absolute;z-index:1;top:21px;left:23px;font-size:11px;font-weight:700;color:#161616}.open{position:absolute;bottom:20px;right:20px;width:34px;height:34px;border:1px solid #fff9;border-radius:50%;display:grid;place-items:center;color:#f9ae01;background:#161616}.meta{display:flex;gap:17px;font-size:8px;letter-spacing:.7px;margin-top:20px;color:#8a8373}h2{font-size:25px;font-weight:800;letter-spacing:-.7px;margin:12px 0}.product p{font-size:12px;line-height:1.8;color:#77736a;max-width:440px}.cta{display:flex;justify-content:space-between;font-size:11px;padding:16px 0;border-bottom:2px solid #f9ae01;color:#161616;font-weight:700}.note{margin-top:50px;padding:24px;border:1px solid #e5e0d3;border-radius:10px;font-size:12px;line-height:1.9;color:#77736a;background:#fff}.note strong{color:#161616}footer{border-top:1px solid #e5e0d3;display:flex;justify-content:space-between;padding:22px 6%;font-size:9px;letter-spacing:1px;color:#8a8373}a:focus-visible{outline:3px solid #f9ae01;outline-offset:6px}@media(max-width:650px){header{height:75px}.brand img{height:32px}header>span:last-child{font-size:7px}main{padding-top:42px}h1{font-size:38px}.grid{grid-template-columns:1fr;gap:32px}.intro{font-size:12px}.note{padding:18px}footer{font-size:7px}}
  </style></head><body><header><span class="brand"><img src="mono-logo.webp" alt="MONO"></span><span>COLEÇÃO DE MAQUETES / 002</span></header><main><div class="eyebrow">DO PRIMEIRO ENCAIXE AO ÚLTIMO DETALHE</div><h1>Cada maquete.<br>Uma montagem <em>própria.</em></h1><p class="intro">Casas, cidades, robôs e personagens de encaixe. Cada maquete abre em uma apresentação 3D com recursos para explorar: corte por andar, modo noite, giro 360°, vistas e um manual ilustrado feito para ela.</p><div class="grid">${cards}</div><div class="note"><strong>Abra um produto para começar.</strong> A montagem toca automaticamente, sem som, e termina no manual. Você pode pausar, voltar a uma etapa, girar a câmera e consultar a lista de peças. Em Construir, personalize o produto e baixe um novo manual web. Todos os arquivos funcionam offline.</div></main><footer><span>MONO / EXPLORAR. ENCAIXAR. INVENTAR.</span><span>${String(products.length).padStart(2,'0')} PRODUTOS · ${String(products.length).padStart(2,'0')} MANUAIS INDIVIDUAIS</span></footer></body></html>`,'utf8');
  const catalog=await context.newPage();await catalog.goto(pathToFileURL(path.join(out,'index.html')).href);assert.equal(await catalog.locator('.product').count(),products.length);await catalog.screenshot({path:path.join(root,'verificacao','07-catalogo-produtos.png'),fullPage:true});
  fs.writeFileSync(path.join(root,'verificacao','produtos-resultado.json'),JSON.stringify({products:products.map(p=>({title:p.title,pieces:p.pieces,stages:p.stages,offline:true,inventory:true,standalone:true,automaticManual:true})),errors},null,2));
  console.log('PASS Catálogo individual e '+products.length+' apresentações independentes.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
