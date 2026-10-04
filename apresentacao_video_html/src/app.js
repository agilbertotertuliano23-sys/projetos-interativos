(() => {
'use strict';
const $ = id => document.getElementById(id);
const DOCUMENT_TEMPLATE='<!doctype html>\n'+document.documentElement.outerHTML;
let embeddedProject=null;try{embeddedProject=JSON.parse($('projectData').textContent);}catch(_){}
const DURATION = 19.4, STORAGE = 'mono-blocks-project-v1'+(embeddedProject?.exportId?'-'+String(embeddedProject.exportId).slice(0,80):'');
const COLORS = ['#f9ae01','#1d1d1d','#f2efe4','#d63c2f','#2e5fa8','#3f7d5a','#e7802e','#8e9592'];
const COLOR_NAMES = ['amarelo MONO','preto','branco','vermelho','azul','verde','laranja','cinza'];
const STAGE_BG = '#ebe7dc', NIGHT_BG = '#161c27';
const STAGES = [
  ['A primeira base','Pés e plataformas','As placas laranja dão apoio à construção.'],
  ['Ponto de apoio','Tornozelos e pernas','Vigas inclinadas e pinos sustentam o movimento.'],
  ['Encaixe e equilíbrio','Articulações laterais','As carenagens brancas cobrem as juntas cinza.'],
  ['O centro de tudo','Corpo e estrutura','Camadas de pequenos blocos formam o torso.'],
  ['Um novo ponto de vista','Pescoço e suporte','O suporte conecta a estrutura à cabeça.'],
  ['Forma e expressão','Base da cabeça','Uma plataforma laranja recebe o visor.'],
  ['Cada detalhe conta','Carenagem curva','Arcos brancos formam uma cobertura segmentada.'],
  ['Pronto para explorar','Olho e acabamento','O olho circular dá personalidade ao explorador.']
];
const PRODUCT_STAGES={
  house:[['O chão da ideia','Terreno e piso','Monte a plataforma e o piso central.'],['Subindo as paredes','Laterais e fundo','Empilhe as camadas laterais e a parede do fundo.'],['Uma casa ganha forma','Fachada','Construa a frente, deixando espaço para a porta.'],['Luz e boas-vindas','Porta e janelas','Encaixe a porta, a maçaneta e as janelas com suas molduras.'],['Tudo conectado','Viga de apoio','Ligue os lados da fachada com a viga superior.'],['Um lugar protegido','Telhado','Una as duas rampas no centro para formar o telhado.'],['O detalhe no alto','Chaminé','Posicione a chaminé sobre uma das águas do telhado.'],['Vida ao redor','Árvores','Finalize com troncos e copas nas laterais do terreno.']],
  car:[['Ponto de partida','Chassi','A placa central sustenta todos os conjuntos.'],['Pronto para rodar','Rodas','Posicione as quatro rodas, duas em cada lateral.'],['Cor em movimento','Carroceria','Empilhe as três camadas de carroceria sobre o chassi.'],['Um lugar para dirigir','Cabine','Centralize a cabine sobre a carroceria.'],['Estrutura e proteção','Teto e pilares','Acrescente os quatro pilares e a placa de cobertura.'],['Volume dianteiro','Capô','Encaixe a placa dianteira à frente da cabine.'],['Olhando o caminho','Faróis','Posicione os dois faróis na face da frente.'],['Últimos encaixes','Para-choques','Finalize as extremidades dianteira e traseira.']],
  rocket:[['Base de lançamento','Plataforma','Comece pela plataforma quadrada de apoio.'],['Força para partir','Motor','Centralize o motor na plataforma.'],['Primeiro módulo','Corpo inferior','Empilhe os dois primeiros segmentos cilíndricos.'],['Ganhar altura','Corpo superior','Acrescente os dois segmentos superiores.'],['Estabilidade','Aletas','Posicione as aletas em lados opostos do corpo.'],['Rumo ao alto','Cone superior','Encaixe o cone no topo do último segmento.'],['Uma janela para fora','Visor','Posicione o visor circular na frente.'],['Tudo pronto','Antena','Finalize com a antena no ponto mais alto.']],
  city:[['Um lugar para encontrar','Base verde','Comece pela grande placa que recebe toda a praça.'],['Caminhos','Calçada e trilha','Placas lisas formam a calçada e o caminho até a porta.'],['A loja da esquina','Paredes','Levante o fundo, as laterais e a fachada com os vãos.'],['Abrir as portas','Porta e janela','Encaixe as esquadrias nos vãos da fachada.'],['Bem no alto','Telhado e letreiro','Cubra a loja e destaque o letreiro laranja.'],['Um pouco de verde','Árvores, flores e cerca','Plante as árvores e as flores e feche o fundo com a cerca.'],['Lugar de ficar','Postes e banco','Ilumine a praça e monte o banco de madeira.'],['A turma chegou','Personagens','Posicione os personagens. Clique neles para vê-los pular.']],
  modern:[['Terreno à beira-mar','Gramado, praia e deck','Comece pelo gramado, a faixa de areia, o mar e o deck de madeira.'],['Térreo envidraçado','Piso, pilares e vidros','Pilares cinza sustentam as portas de vidro de moldura preta.'],['A vida no térreo','Cozinha, jantar e sala','Monte a cozinha, a mesa de jantar, o sofá e as plantas.'],['Segundo pavimento','Laje, fachada e varanda','A laje recebe a fachada branca, a janela larga e a varanda de vidro.'],['Quarto e escritório','Interior superior','Cama, escrivaninha e estante ocupam o andar de cima.'],['A torre ripada','Torre de três andares','O ripado de madeira envolve a torre e suas janelas altas.'],['Cobertura','Lajes e lustre','Feche os telhados e pendure o lustre de vidro no alto da torre.'],['Dias de sol','Piscina, palmeiras e moradores','Piscina, espreguiçadeiras, fogueira, palmeiras e os moradores.']],
  townhouse:[['Chão firme','Calçada e fundação','A calçada recebe a fundação escura com a viga de furos.'],['Térreo','Entrada, vitrine e sala','Pilares pretos marcam a entrada recuada; a janela larga ilumina a sala.'],['Boas-vindas','Escada, toldo e jardim','Degraus de madeira, toldo inclinado, canteiro e estacas.'],['Segundo andar','Janelas e friso azul','Uma laje cinza, janelas de moldura preta e o friso azul vertical.'],['Varanda florida','Varanda e guarda-corpo','A varanda avança sobre a rua com vidro e vasos de flores.'],['Terceiro andar','Brise de madeira','Tubos de madeira fazem sombra sobre as janelas do alto.'],['Terraço','Cobertura e plantas','Feche a cobertura e monte o terraço com plantas e luminária.'],['Moradores','Personagens','Os moradores ocupam o terraço, a varanda e a calçada.']],
  crew:[['O palco','Plataforma','Monte a placa que recebe toda a turma.'],['Dois níveis','Arquibancada e degraus','Uma plataforma ao fundo e uma escada lateral.'],['Primeira da fila','Exploradora','Mochila nas costas e emblema no peito.'],['Rumo às estrelas','Astronauta','Capacete de vidro e zíper no traje.'],['Mão na massa','Construtora','Capacete de obra e ferramenta na mão.'],['Do palco à cozinha','Chef','Chapéu alto e gravata vermelha.'],['Majestade','Rainha','Coroa dourada e capa vermelha.'],['Luzes no palco','Herói, mago e holofotes','Os últimos personagens chegam e as luzes acendem.']]
};
const FIG_SIZE=[.9,1.9,.5];
const DEFAULT_FIG={skin:'#f2c94c',legs:'#2f4f8f',hair:'short',hairColor:'#5b3a29',face:'smile',print:'none',accessory:'none',accColor:'#e7802e'};
const FIG_OPTIONS={
  hair:[['none','Sem cabelo'],['short','Curto'],['long','Longo'],['ponytail','Rabo de cavalo'],['cap','Boné'],['hardhat','Capacete de obra'],['space','Capacete espacial'],['crown','Coroa'],['chef','Chapéu de chef'],['wizard','Chapéu de mago']],
  face:[['smile','Sorriso'],['happy','Alegre'],['wink','Piscando'],['surprised','Surpreso'],['serious','Sério'],['sunglasses','Óculos escuros']],
  print:[['none','Lisa'],['stripe','Listra'],['badge','Emblema'],['tie','Gravata'],['zipper','Zíper'],['star','Estrela']],
  accessory:[['none','Nenhum'],['backpack','Mochila'],['cape','Capa'],['tool','Ferramenta'],['shield','Escudo'],['balloon','Balão']]
};
const FIGURE_PRESETS=[
  {name:'Exploradora',torso:'#3f7d5a',fig:{skin:'#c68642',legs:'#8a6a45',hair:'long',hairColor:'#7a4a2a',face:'happy',print:'badge',accessory:'backpack',accColor:'#e7802e'}},
  {name:'Astronauta',torso:'#efece2',fig:{skin:'#f2c94c',legs:'#efece2',hair:'space',hairColor:'#efece2',face:'surprised',print:'zipper',accessory:'none',accColor:'#e7802e'}},
  {name:'Construtora',torso:'#e7802e',fig:{skin:'#8d5524',legs:'#3a5a8c',hair:'hardhat',hairColor:'#eeb83e',face:'smile',print:'stripe',accessory:'tool',accColor:'#c9cfc6'}},
  {name:'Chef',torso:'#f2efe4',fig:{skin:'#f1c27d',legs:'#505958',hair:'chef',hairColor:'#ffffff',face:'wink',print:'tie',accessory:'none',accColor:'#c0392b'}},
  {name:'Rainha',torso:'#6b3fa0',fig:{skin:'#5c3a1e',legs:'#3b2a5c',hair:'crown',hairColor:'#eeb83e',face:'smile',print:'star',accessory:'cape',accColor:'#c0392b'}},
  {name:'Herói',torso:'#2e5fa8',fig:{skin:'#f2c94c',legs:'#2e5fa8',hair:'short',hairColor:'#2b2b2b',face:'sunglasses',print:'star',accessory:'shield',accColor:'#d63c2f'}},
  {name:'Mago',torso:'#294c45',fig:{skin:'#e0ac69',legs:'#294c45',hair:'wizard',hairColor:'#3d3a7a',face:'serious',print:'star',accessory:'cape',accColor:'#eeb83e'}},
  {name:'Criança com balão',torso:'#eeb83e',fig:{skin:'#f2c94c',legs:'#7ba6a1',hair:'ponytail',hairColor:'#2b1d14',face:'happy',print:'none',accessory:'balloon',accColor:'#d63c2f'}},
  {name:'Moradora',torso:'#9bd06a',fig:{skin:'#f2c94c',legs:'#efe6d2',hair:'long',hairColor:'#8a5a2b',face:'happy',print:'zipper',accessory:'none',accColor:'#efece2'}},
  {name:'Morador',torso:'#f2efe4',fig:{skin:'#f2c94c',legs:'#5b8fd0',hair:'short',hairColor:'#4a2f1d',face:'smile',print:'stripe',accessory:'none',accColor:'#d63c2f'}}
];
const PART_DEFS={brick:['Bloco 2 × 4',[1,.5,2]],plate:['Placa 2 × 4',[1,.2,2]],cube:['Bloco 1 × 1',[.5,.5,.5]],beam:['Viga',[.5,1.75,.5]],arch:['Arco',[2,1,.5]],eye:['Olho',[1,1,.4]],wedge:['Rampa',[1,1,2]],sphere:['Esfera',[1,1,1]],cylinder:['Cilindro',[1,1,1]],cone:['Cone',[1,1.5,1]],wheel:['Roda',[1,1,.5]],panel:['Painel',[2,2,.2]],
  tile:['Placa lisa 2 × 2',[1,.12,1]],round:['Bloco redondo 1 × 1',[.5,.5,.5]],technic:['Viga Technic',[3,.4,.4]],stairs:['Escada',[1,1,1.2]],window:['Janela',[1.2,1.2,.25]],door:['Porta',[1,1.9,.25]],fence:['Cerca',[2,.7,.15]],gear:['Engrenagem',[1,1,.25]],ring:['Anel',[1,1,.24]],plant:['Flor',[.5,.8,.5]],tree:['Árvore',[1.4,2.4,1.4]],lamp:['Poste de luz',[.45,2.4,.45]],figure:['Personagem',FIG_SIZE],
  palm:['Palmeira',[2,4,2]],glasspanel:['Painel de vidro',[2,2.4,.1]],railing:['Guarda-corpo',[2,.9,.08]],slats:['Ripado de madeira',[2,2.4,.2]],water:['Água',[2,.15,2]],lounger:['Espreguiçadeira',[.8,.45,1.7]],sofa:['Sofá',[2,.75,.85]],bed:['Cama',[1.6,.8,2.1]],table:['Mesa',[1.4,.8,.9]],chair:['Cadeira',[.5,.95,.5]],shelf:['Estante',[1.2,1.8,.4]],kitchen:['Cozinha',[2,1,.6]],pendant:['Luminária pendente',[.8,1.4,.8]],campfire:['Fogueira',[.9,.55,.9]]};
const BOX_ALIASES={cube:'brick',beam:'brick',panel:'brick'};
const BASIC_PARTS=[['brick','Bloco 2 × 4'],['plate','Placa'],['cube','Bloco 1 × 1'],['beam','Viga'],['arch','Arco'],['wedge','Rampa'],['cylinder','Cilindro'],['sphere','Esfera'],['cone','Cone'],['wheel','Roda'],['panel','Painel'],['eye','Olho']];
const LEGO_PARTS=[['tile','Placa lisa'],['round','Bloco redondo'],['technic','Viga Technic'],['stairs','Escada'],['window','Janela'],['door','Porta'],['fence','Cerca'],['gear','Engrenagem'],['ring','Anel'],['plant','Flor'],['tree','Árvore'],['lamp','Poste de luz']];
const HOME_PARTS=[['palm','Palmeira'],['glasspanel','Painel de vidro'],['railing','Guarda-corpo'],['slats','Ripado'],['water','Água'],['lounger','Espreguiçadeira'],['sofa','Sofá'],['bed','Cama'],['table','Mesa'],['chair','Cadeira'],['shelf','Estante'],['kitchen','Cozinha'],['pendant','Luminária pendente'],['campfire','Fogueira']];
const HOME_COLORS={palm:'#3f8f3a',glasspanel:'#1d1d1d',railing:'#1d1d1d',slats:'#a8673c',water:'#3fa7d6',lounger:'#79c7b0',sofa:'#e8a33d',bed:'#d63c2f',table:'#a27c47',chair:'#1d1d1d',shelf:'#2e3a4f',kitchen:'#4bb3c8',pendant:'#1d1d1d',campfire:'#8b6a45'};
const PIECE_TYPES=['brick','plate','cylinder','arch','eye','sphere','cone','wedge','wheel','tile','round','technic','stairs','window','door','fence','gear','ring','plant','tree','lamp','figure',...HOME_PARTS.map(([type])=>type)];
const MODELS=[['modern','Casa moderna','Torre ripada e piscina'],['townhouse','Sobrado urbano','Três andares e varanda'],['city','Praça LEGO','Loja, praça e turma'],['crew','Turma de personagens','Sete minifiguras'],['robot','Robô explorador','A reconstrução do vídeo'],['house','Casa modular','Telhado e chaminé'],['car','Veículo explorador','Chassi e cabine'],['rocket','Foguete orbital','Da base à antena']];
const pickOne=list=>list[Math.floor(Math.random()*list.length)];
function randomFigure(){
  const clothes=['#e7802e','#2e5fa8','#3f7d5a','#d63c2f','#eeb83e','#6b3fa0','#efece2','#505958','#7ba6a1','#294c45','#f08bb4'];
  return {name:'Personagem',torso:pickOne(clothes),fig:{skin:pickOne(['#f2c94c','#f1c27d','#e0ac69','#c68642','#8d5524','#5c3a1e']),legs:pickOne(clothes),hair:pickOne(FIG_OPTIONS.hair)[0],hairColor:pickOne(['#2b1d14','#5b3a29','#7a4a2a','#d8a54a','#c0392b','#2b2b2b','#efece2','#eeb83e','#3d3a7a']),face:pickOne(FIG_OPTIONS.face)[0],print:pickOne(FIG_OPTIONS.print)[0],accessory:pickOne(FIG_OPTIONS.accessory)[0],accColor:pickOne(clothes)}};
}
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const clone = value => JSON.parse(JSON.stringify(value));
const smooth = t => t * t * (3 - 2 * t);
let uid = 0;
function piece(name, pos, size, color, stage, options = {}) {
  return {id: 'p' + (++uid), name, type: 'brick', pos, size, color, stage, rot: [0,0,0], studs: false, ...options};
}
function makeRobot() {
  const p = [], add = (...args) => p.push(piece(...args));
  const orange = '#dc792e', white = '#efece2', gray = '#555d5b', dark = '#353f3e', light = '#a6aea7';
  for (const side of [-1, 1]) {
    const x = side * 1.37, word = side === -1 ? 'esquerdo' : 'direito';
    for (let row=0; row<3; row++) {
      for (let col=0; col<2; col++) add(`Base do pé ${word}`, [x+(col-.5)*.91,.15+row*.19,.45], [.9,.18,2.25], row===0?'#e9b03e':orange, 0, {studs:row===2});
    }
    add(`Ponta do pé ${word}`, [x,.62,1.18], [1.8,.18,.74], orange, 0, {studs:true});
    add(`Calcanhar ${word}`, [x,.68,-.27], [1.15,.26,.76], orange, 0, {studs:true});
    add(`Perna ${word}`, [x,1.37,.03], [.8,1.42,.7], gray, 1, {rot:[-17,0,side*-8],studs:true});
    for(let j=0;j<5;j++) add(`Friso da perna ${word}`, [x,1.06+j*.17,.43-j*.055], [.86,.1,.13], '#707875', 1, {rot:[-17,0,side*-8]});
    for(const pin of [-1,1]) add(`Pino do tornozelo ${word}`, [x+pin*.53,.78,.13], [.16,.16,.45], dark, 1, {type:'cylinder',rot:[0,90,0]});
    add(`Articulação ${word}`, [x,2.3,-.1], [1.18,1.3,1.16], dark, 2, {rot:[-8,0,side*23]});
    for(let j=0;j<5;j++) {
      add(`Armadura ${word} ${j+1}`, [x+side*.4,2.44+j*.2,-.02], [1.08,.19,1.35], white, 2, {rot:[0,0,side*23]});
    }
    add(`Junta superior ${word}`, [side*.93,3.1,0], [.85,.7,1.25], gray, 2);
  }
  add('Quadril central', [0,3.08,0], [1.25,.7,1.28], dark, 3);
  for(const x of [-.72,.72]) {
    add('Estrutura inferior', [x,3.36,.5], [.64,.8,1.02], gray, 3);
    add('Acabamento inferior', [x,3.42,1.06], [.6,.42,.15], light, 3);
  }
  for(let i=0;i<3;i++) add('Cinta estrutural', [0,3.91+i*.13,0], [2.46,.095,1.82], dark, 3);
  add('Núcleo do torso', [0,4.55,-.1], [2.25,1.1,1.42], gray, 3);
  for(let row=0;row<5;row++) {
    const y=4.17+row*.23;
    for(const side of [-1,1]) {
      add('Painel lateral do torso', [side*1.18,y,-.02], [.34,.215,1.78], white, 3);
      add('Painel frontal do torso', [side*.88,y,.91], [.63,.215,.26], white, 3);
    }
    for(let col=0;col<3;col++) add('Painel traseiro do torso', [(col-1)*.75,y,-.92], [.73,.215,.25], white, 3);
  }
  for(let col=0;col<4;col++) add('Cobertura do torso', [(col-1.5)*.62,5.23,-.03], [.6,.18,1.95], white, 3);
  for(const y of [4.44,4.92]) for(const x of [-.93,.93]) add('Conector do torso', [x,y,1.08], [.16,.16,.24], dark, 3, {type:'cylinder'});
  add('Pescoço articulado', [0,5.6,.32], [.92,1.75,.72], gray, 4, {rot:[-13,0,0],studs:true});
  add('Coluna de suporte', [0,5.23,.7], [.76,.23,.28], '#727a74', 4, {rot:[-13,0,0]});
  for(const side of [-1,1]) add('Eixo do pescoço', [side*.61,6.0,.16], [.2,.2,.48], dark, 4, {type:'cylinder',rot:[0,90,0]});
  for(let row=0;row<3;row++) for(let col=0;col<4;col++) add('Base da cabeça', [(col-1.5)*.96,6.49+row*.18,.06], [.94,.165,2.94], orange, 5, {studs:row===2});
  add('Interior do visor', [0,7.17,-.85], [3.26,.94,.47], '#646c65', 5);
  for(const side of [-1,1]) for(let row=0;row<2;row++) add('Borda da cabeça', [side*1.81,6.95+row*.2,.04], [.27,.185,2.91], white, 6);
  for(let j=0;j<8;j++) add(`Arco da carenagem ${j+1}`, [0,7.59,-1.23+j*.375], [3.89,1.59,.36], white, 6, {type:'arch'});
  for(let j=0;j<4;j++) add('Fechamento traseiro', [(j-1.5)*.8,7.29,-1.45], [.79,.7,.16], white, 6);
  add('Olho do explorador', [0,7.24,1.31], [1.08,1.08,.49], '#edb237', 7, {type:'eye'});
  for(const side of [-1,1]) add('Pino da base da cabeça', [side*1.45,6.92,.85], [.22,.12,.22], orange, 7, {type:'cylinder',rot:[90,0,0]});
  return p;
}
function makeExample(kind){
  const p=[],add=(...args)=>p.push(piece(...args));
  const figure=(preset,pos,stage,turn=0)=>add(preset.name,pos,[...FIG_SIZE],preset.torso,stage,{type:'figure',rot:[0,turn,0],fig:{...DEFAULT_FIG,...preset.fig}});
  // A wall along X with a rectangular opening, filled later by a window or door piece.
  const wall=(name,stage,color,x0,x1,y0,y1,z,d,ox0,ox1,oy0,oy1)=>{const box=(a0,a1,b0,b1)=>{if(a1-a0>.02&&b1-b0>.02)add(name,[(a0+a1)/2,(b0+b1)/2,z],[a1-a0,b1-b0,d],color,stage);};box(x0,ox0,y0,y1);box(ox1,x1,y0,y1);box(ox0,ox1,y0,oy0);box(ox0,ox1,oy1,y1);};
  const resident=FIGURE_PRESETS.find(f=>f.name==='Moradora'),neighbor=FIGURE_PRESETS.find(f=>f.name==='Morador');
  if(kind==='modern'){
    const white='#f4f3ee',black='#1d1d1d',gray='#8e9592',tan='#d8c49a',wood='#a8673c';
    add('Gramado',[0,.1,-.6],[10,.2,7.2],'#6aa84f',0,{studs:true});add('Praia',[0,.1,3.7],[10,.2,1.4],'#e3cf9a',0);add('Mar',[0,.26,4.05],[10,.12,.7],'#3fa7d6',0,{type:'water'});
    add('Deck de madeira',[1.9,.26,2.1],[4.6,.12,1.8],'#a8794b',0,{type:'tile'});
    add('Piso térreo',[0,.26,-.5],[9.2,.12,3.4],tan,1,{type:'tile'});
    for(const x of [-4.45,-1.5,1.45])for(const z of [1.05,-2.05])add('Pilar',[x,1.72,z],[.3,2.8,.3],gray,1);
    for(const x of [-2.97,-.02])add('Porta de vidro',[x,1.72,1.05],[2.64,2.8,.12],black,1,{type:'window'});
    add('Parede lateral',[-4.5,1.72,-.5],[.2,2.8,3.1],white,1);
    add('Ripado da torre',[2,1.72,1.05],[.8,2.8,.2],wood,1,{type:'slats'});add('Janela da torre',[3.45,1.72,1.05],[2.1,2.8,.12],black,1,{type:'window'});
    add('Cozinha',[3.1,.82,-1.75],[2.6,1,.6],'#4bb3c8',2,{type:'kitchen'});add('Mesa redonda',[3,.72,-.6],[1.1,.8,.8],'#d63c2f',2,{type:'table'});
    add('Banqueta',[2.2,.8,-.6],[.5,.95,.5],'#f08bb4',2,{type:'chair',rot:[0,90,0]});add('Banqueta',[3.8,.8,-.6],[.5,.95,.5],'#f08bb4',2,{type:'chair',rot:[0,-90,0]});
    add('Mesa de jantar',[-3,.72,-.9],[1.4,.8,.9],'#a27c47',2,{type:'table'});add('Cadeira',[-3,.8,-1.65],[.5,.95,.5],black,2,{type:'chair'});add('Cadeira',[-3,.8,-.15],[.5,.95,.5],black,2,{type:'chair',rot:[0,180,0]});
    add('Sofá',[.3,.7,-1.6],[2.2,.75,.85],'#e8a33d',2,{type:'sofa'});add('Mesa de centro',[.3,.52,-.55],[1.2,.4,.6],'#9fd3e6',2,{type:'table'});add('Vaso de flores',[-.95,.72,-1.8],[.5,.8,.5],'#d63c2f',2,{type:'plant'});
    add('Laje',[0,3.2,-.5],[9.4,.16,3.6],white,3);add('Piso superior',[0,3.34,-.5],[9.2,.12,3.4],tan,3,{type:'tile'});
    wall('Fachada superior',3,white,-4.6,-1.2,3.4,6,1.1,.25,-4.1,-1.7,3.9,5.5);add('Janela larga',[-2.9,4.7,1.1],[2.4,1.6,.2],black,3,{type:'window'});
    add('Parede lateral superior',[-4.5,4.7,-.5],[.2,2.6,3.1],white,3);add('Porta da varanda',[.2,4.7,.2],[2.6,2.6,.12],black,3,{type:'glasspanel'});
    add('Guarda-corpo',[.2,3.85,1.2],[2.7,.9,.08],black,3,{type:'railing'});add('Vaso da varanda',[1.25,3.8,.75],[.45,.75,.45],'#f08bb4',3,{type:'plant'});
    add('Cama',[-3.2,3.8,-1],[1.6,.8,2.1],'#d63c2f',4,{type:'bed'});add('Escrivaninha',[.6,3.8,-1.65],[1.2,.8,.6],'#efece2',4,{type:'table'});add('Cadeira do escritório',[.6,3.88,-1.05],[.5,.95,.5],'#2e5fa8',4,{type:'chair',rot:[0,180,0]});
    add('Estante',[-1.5,4.3,-1.95],[1.2,1.8,.4],'#2e3a4f',4,{type:'shelf'});
    add('Ripado da torre',[2,4.7,1.05],[.8,2.6,.2],wood,5,{type:'slats'});add('Janela da torre',[3.45,4.7,1.05],[2.1,2.6,.12],black,5,{type:'window'});
    add('Ripado lateral',[4.5,4.47,-.5],[3.4,8.3,.2],wood,5,{type:'slats',rot:[0,90,0]});
    add('Poltrona',[3.6,3.78,-1.4],[1,.75,.8],'#eeb83e',5,{type:'sofa'});add('Estante colorida',[2.4,4.3,-1.95],[1,1.8,.4],'#2e5fa8',5,{type:'shelf'});add('Arvoreta',[4,3.9,-.4],[.6,1,.6],'#3f7d3a',5,{type:'tree'});
    add('Laje da torre',[3.1,6,-.5],[3.2,.16,3.6],white,5);add('Piso da torre',[3.1,6.14,-.5],[3,.12,3.4],tan,5,{type:'tile'});
    add('Ripado da torre',[2,7.4,1.05],[.8,2.4,.2],wood,5,{type:'slats'});add('Janela da torre',[3.45,7.4,1.05],[2.1,2.4,.12],black,5,{type:'window'});add('Parede da torre',[1.7,7.4,-.5],[.2,2.4,3.4],white,5);
    add('Cobertura',[-1.5,6,-.5],[6.4,.16,3.6],white,6);add('Cobertura da torre',[3.1,8.7,-.5],[3.3,.16,3.7],white,6);
    add('Lustre de vidro',[3.4,7.85,-.4],[.9,1.5,.9],black,6,{type:'pendant'});add('Palmeira do terraço',[.5,6.78,-1.2],[1.2,1.4,1.2],'#3f8f3a',6,{type:'palm'});
    add('Piscina',[-2.7,.27,2.1],[3,.14,1.4],'#4cc0e0',7,{type:'water'});
    for(const [x,z,w,d] of [[-2.7,1.3,3.4,.2],[-2.7,2.9,3.4,.2],[-4.3,2.1,.2,1.4],[-1.1,2.1,.2,1.4]])add('Borda da piscina',[x,.26,z],[w,.12,d],white,7,{type:'tile'});
    add('Patinho',[-2,.42,2],[.3,.25,.35],'#f9ae01',7,{type:'sphere'});add('Cabeça do patinho',[-2,.58,1.88],[.18,.18,.18],'#f9ae01',7,{type:'sphere'});
    for(const x of [.3,1.3])add('Espreguiçadeira',[x,.55,2.1],[.8,.45,1.7],'#79c7b0',7,{type:'lounger'});
    add('Fogueira',[3.4,.6,2.2],[.9,.55,.9],'#8b6a45',7,{type:'campfire'});
    add('Palmeira',[-4.6,2.4,1.5],[2.2,4.4,2.2],'#3f8f3a',7,{type:'palm'});add('Palmeira',[-3.6,2,-3.3],[1.8,3.6,1.8],'#4f9a45',7,{type:'palm'});
    figure(resident,[2.4,1.27,1.8],7,-20);figure(neighbor,[4,1.27,1.6],7,-40);
  }else if(kind==='townhouse'){
    const white='#f2f1ec',black='#1d1d1d',gray='#8e9592',wood='#8b5a2b';
    add('Calçada',[0,.1,.4],[7,.2,6],'#a7aaa6',0,{studs:true});add('Fundação',[0,.45,-.1],[5.2,.5,3],'#5d6361',0);add('Viga Technic',[.9,.45,1.42],[3.2,.4,.12],'#3c4241',0,{type:'technic'});
    add('Piso térreo',[0,.76,-.1],[5,.12,2.9],'#d8c49a',1,{type:'tile'});
    for(const x of [-2.35,-.45])add('Pilar preto',[x,2.12,1.25],[.25,2.6,.25],black,1);
    add('Porta de vidro',[-1.4,2.12,.4],[1.6,2.6,.1],black,1,{type:'glasspanel'});
    wall('Parede do térreo',1,white,-.3,2.5,.82,3.42,1.3,.25,.3,2.1,1.2,3);add('Janela da sala',[1.2,2.1,1.3],[1.8,1.8,.15],black,1,{type:'window'});
    for(const x of [-2.45,2.45])add('Parede lateral',[x,2.12,-.1],[.15,2.6,3],white,1);
    add('Sofá',[1.2,1.2,-1],[1.8,.75,.8],'#3fa9c4',1,{type:'sofa'});add('Mesa',[-1.2,1.22,-.6],[1,.8,.7],'#a27c47',1,{type:'table'});
    add('Degraus',[-1.4,.45,1.85],[1.4,.5,.9],'#a8794b',2,{type:'stairs'});add('Toldo',[-1.4,3.55,1.75],[2.3,.12,1.1],'#b49b73',2,{studs:true,rot:[-12,0,0]});
    add('Canteiro',[1.2,.3,2],[2.6,.2,1],'#4f9a45',2,{studs:true});
    for(let i=0;i<6;i++)add('Estaca de madeira',[.1+i*.4,.8,2.4],[.2,.2,.8],wood,2,{type:'cylinder',rot:[90,0,0]});
    add('Flor',[.4,.8,1.85],[.5,.8,.5],'#f9ae01',2,{type:'plant'});add('Arbusto',[2.1,.65,1.85],[.6,.5,.6],'#3f8f3a',2,{type:'sphere'});
    add('Laje cinza',[0,3.5,-.1],[5.2,.16,3.1],gray,3);
    wall('Fachada do segundo andar',3,white,-2.5,-.3,3.58,6.18,1.3,.25,-2.2,-.5,3.8,6);add('Janela alta',[-1.35,4.9,1.3],[1.7,2.2,.15],black,3,{type:'window'});
    wall('Fachada do segundo andar',3,white,-.3,2.5,3.58,6.18,1.3,.25,.1,2.2,3.9,5.9);add('Janela larga',[1.15,4.9,1.3],[2.1,2,.15],black,3,{type:'window'});
    for(const x of [-2.45,2.45])add('Parede lateral',[x,4.88,-.1],[.15,2.6,3],white,3);
    add('Friso azul',[-.3,6,1.44],[.06,4.8,.06],'#3fa9c4',3);
    add('Estante',[-1.4,4.48,-1.35],[1.2,1.8,.4],'#2e3a4f',3,{type:'shelf'});add('Cama',[1.3,3.98,-.6],[1.4,.8,1.8],'#2e5fa8',3,{type:'bed'});
    add('Laje superior',[0,6.26,-.1],[5.2,.16,3.1],white,4);add('Varanda',[1.25,6.26,1.95],[2.6,.3,1.1],gray,4);add('Borda furada',[1.25,6.26,2.52],[2.5,.3,.1],gray,4,{type:'technic'});
    add('Guarda-corpo de vidro',[1.25,6.86,2.45],[2.5,.9,.08],gray,4,{type:'railing'});
    add('Vaso de flores',[.4,6.81,2.1],[.5,.8,.5],'#f08bb4',4,{type:'plant'});add('Vaso de flores',[2.1,6.81,2.1],[.5,.8,.5],'#f9ae01',4,{type:'plant'});
    wall('Fachada do terceiro andar',5,white,-2.5,-.3,6.34,8.74,1.3,.25,-2.2,-.5,6.6,8.5);add('Janela do alto',[-1.35,7.55,1.3],[1.7,1.9,.15],black,5,{type:'window'});
    add('Porta da varanda',[1.15,7.45,1.3],[2.2,2.2,.12],black,5,{type:'glasspanel'});wall('Fachada do terceiro andar',5,white,-.3,2.5,6.34,8.74,1.3,.25,.05,2.25,6.35,8.55);
    for(const x of [-2.45,2.45])add('Parede lateral',[x,7.54,-.1],[.15,2.4,3],white,5);
    for(let i=0;i<7;i++)add('Brise de madeira',[.2+i*.33,8.4,1.6],[.28,.28,.5],wood,5,{type:'cylinder'});
    add('Cozinha',[-1.2,6.84,-1.25],[1.8,1,.6],'#efece2',5,{type:'kitchen'});add('Luminária pendente',[1,7.95,-.4],[.7,1.4,.7],black,5,{type:'pendant'});
    add('Cobertura',[0,8.82,-.1],[5.3,.16,3.2],white,6);add('Platibanda',[-1.35,9.15,1.35],[2.3,.5,.15],gray,6);
    add('Palmeira do terraço',[1.6,9.6,-.6],[1.2,1.4,1.2],'#3f8f3a',6,{type:'palm'});add('Luminária do terraço',[-.1,9.4,.6],[.4,1,.4],'#efece2',6,{type:'lamp'});
    figure(neighbor,[-1,9.85,.2],7,10);figure(resident,[1,7.36,1.95],7,-15);figure(FIGURE_PRESETS[7],[.2,1.15,3],7,-20);
  }else if(kind==='house'){
    add('Terreno',[0,.12,0],[5.6,.24,4.9],'#607b55',0,{studs:true});
    add('Piso',[0,.34,0],[4,.2,3.6],'#bf9866',0);
    for(let row=0;row<5;row++){
      const y=.7+row*.43;
      for(const side of [-1,1]){add('Parede lateral',[side*1.83,y,0],[.34,.41,3.55],'#ece2cc',1);add('Parede frontal',[side*1.25,y,1.62],[1.13,.41,.32],'#ece2cc',2);}
      for(let col=0;col<4;col++)add('Parede de fundo',[(col-1.5)*.9,y,-1.62],[.88,.41,.32],'#ece2cc',1);
    }
    add('Porta',[0,1.34,1.8],[.95,1.78,.16],'#607b72',3);
    add('Maçaneta',[.3,1.29,1.92],[.12,.12,.12],'#eeb83e',3,{type:'sphere'});
    for(const side of [-1,1]){add('Janela',[side*1.22,1.65,1.82],[.7,.85,.1],'#77afc5',3);add('Moldura',[side*1.22,1.65,1.9],[.045,.87,.07],'#f2efe4',3);add('Moldura',[side*1.22,1.65,1.9],[.72,.04,.07],'#f2efe4',3);}
    add('Viga frontal',[0,2.76,1.62],[4,.35,.32],'#ece2cc',4);
    for(const side of [-1,1])add('Água do telhado',[side*1.12,3.65,0],[2.25,1.6,4.12],'#ce723f',5,{type:'wedge',rot:[0,side===1?180:0,0]});
    add('Chaminé',[1.06,4.25,-.7],[.5,1.35,.55],'#8b6855',6,{studs:true});
    for(const side of [-1,1]){add('Tronco',[side*2.22,.94,-1.7],[.22,1.6,.22],'#a27c47',7);add('Copa',[side*2.22,2,-1.7],[1.05,1.6,1.05],'#345545',7,{type:'cone'});}
  }else if(kind==='car'){
    add('Chassi',[0,.63,0],[2,.26,4.5],'#424f4b',0);
    for(const x of [-1.08,1.08])for(const z of [-1.35,1.35])add('Roda',[x,.65,z],[1.12,1.12,.45],'#c9b472',1,{type:'wheel',rot:[0,90,0]});
    for(let row=0;row<3;row++)add('Carroceria',[0,.91+row*.2,0],[2,.18,4.3],'#dc792e',2,{studs:row===2});
    add('Cabine',[0,1.8,-.2],[1.72,.9,1.82],'#44727b',3);
    add('Teto',[0,2.32,-.2],[1.92,.17,2.08],'#efece2',4);
    for(const x of [-.88,.88])for(const z of [-1.07,.65])add('Pilar da cabine',[x,1.84,z],[.12,.94,.13],'#efece2',4);
    add('Capô',[0,1.44,1.48],[1.94,.18,1.17],'#dc792e',5,{studs:true});
    for(const x of [-.65,.65])add('Farol',[x,1.12,2.23],[.42,.34,.16],'#f3eac9',6,{type:'cylinder'});
    add('Para-choque',[0,.8,2.35],[2.08,.22,.22],'#a7b0a9',7);
    add('Para-choque traseiro',[0,.8,-2.35],[2.08,.22,.22],'#a7b0a9',7);
  }else if(kind==='city'){
    const wall='#efe6d2';
    add('Base verde',[0,.1,0],[10,.2,10],'#5f8f4e',0,{studs:true});
    for(let i=-2;i<=2;i++)add('Calçada',[i*1.98,.24,3.4],[1.94,.08,1.7],'#c9cbc2',1,{type:'tile'});
    for(const z of [.55,1.7])add('Trilha',[-3.1,.24,z],[1.1,.08,1.1],'#b4a68c',1,{type:'tile'});
    add('Parede de fundo',[-2.5,1.7,-3.9],[5,3,.3],wall,2);
    for(const x of [-4.85,-.15])add('Parede lateral',[x,1.7,-2.25],[.3,3,3],wall,2);
    add('Fachada esquerda',[-4.3,1.7,-.6],[1.4,3,.3],wall,2);add('Fachada central',[-2.4,1.7,-.6],[.4,3,.3],wall,2);add('Fachada direita',[-.3,1.7,-.6],[.6,3,.3],wall,2);
    add('Verga da porta',[-3.1,2.7,-.6],[1,1,.3],wall,2);add('Peitoril',[-1.4,.6,-.6],[1.6,.8,.3],wall,2);add('Verga da janela',[-1.4,2.8,-.6],[1.6,.8,.3],wall,2);
    add('Porta da loja',[-3.1,1.2,-.6],[1,2,.3],'#2e5fa8',3,{type:'door'});add('Vitrine',[-1.4,1.7,-.6],[1.6,1.4,.3],'#f2efe4',3,{type:'window'});
    add('Telhado',[-2.5,3.3,-2.25],[5.4,.2,3.9],'#505958',4,{studs:true});add('Letreiro',[-2.5,3.85,-.5],[3.2,.7,.15],'#e7802e',4);
    for(const x of [-4.55,-.45])add('Luminária do telhado',[x,3.65,-.9],[.5,.5,.5],'#eeb83e',4,{type:'round'});
    add('Árvore grande',[3.6,1.4,-2.8],[1.6,2.4,1.6],'#345545',5,{type:'tree'});add('Árvore pequena',[4.2,1.2,-.6],[1.2,2,1.2],'#4f7a3a',5,{type:'tree'});
    for(const [x,color] of [[-4.6,'#d63c2f'],[-.4,'#eeb83e'],[1.1,'#f08bb4']])add('Flor',[x,.6,.2],[.5,.8,.5],color,5,{type:'plant'});
    for(const [x,w] of [[1.4,1.6],[3,1.6],[4.4,1.2]])add('Cerca',[x,.55,-4.6],[w,.7,.15],'#efece2',5,{type:'fence'});
    for(const x of [1.4,-4.6])add('Poste de luz',[x,1.4,2.2],[.45,2.4,.45],'#505958',6,{type:'lamp'});
    add('Assento do banco',[3.6,.75,2],[1.8,.15,.6],'#a27c47',6);add('Encosto do banco',[3.6,1.05,1.75],[1.8,.45,.12],'#a27c47',6);
    for(const x of [2.95,4.25])add('Pé do banco',[x,.47,2],[.3,.4,.5],'#505958',6);
    figure(FIGURE_PRESETS[0],[.4,1.23,3.4],7,20);figure(FIGURE_PRESETS[3],[-3.1,1.23,1.1],7);figure(FIGURE_PRESETS[7],[2.2,1.23,3.6],7,-30);figure(FIGURE_PRESETS[2],[-1.3,1.15,.9],7,-10);
  }else if(kind==='crew'){
    add('Palco',[0,.15,0],[8,.3,4],'#505958',0,{studs:true});
    add('Arquibancada',[0,.55,-1],[7,.5,1.6],'#294c45',1,{studs:true});add('Degraus',[3.2,.55,.2],[.8,.5,.8],'#a7b0a9',1,{type:'stairs'});
    figure(FIGURE_PRESETS[0],[-2.4,1.25,1],2,10);figure(FIGURE_PRESETS[1],[-.8,1.25,1],3);figure(FIGURE_PRESETS[2],[.8,1.25,1],4);figure(FIGURE_PRESETS[3],[2.4,1.25,1],5,-10);
    figure(FIGURE_PRESETS[4],[0,1.75,-1],6);figure(FIGURE_PRESETS[5],[-1.6,1.75,-1],7,15);figure(FIGURE_PRESETS[6],[1.6,1.75,-1],7,-15);
    for(const x of [-3.6,3.6])add('Holofote',[x,1.5,1.5],[.4,2.4,.4],'#eeb83e',7,{type:'lamp'});
  }else{
    add('Plataforma',[0,.12,0],[4,.24,4],'#505958',0,{studs:true});
    add('Motor',[0,.8,0],[1.15,1.1,1.15],'#424f4b',1,{type:'cylinder',rot:[90,0,0]});
    for(let i=0;i<4;i++)add('Corpo do foguete',[0,1.56+i*.67,0],[1.65,1.65,.65],i%2?'#efece2':'#e7802e',2+Math.floor(i/2),{type:'cylinder',rot:[90,0,0]});
    add('Cone superior',[0,4.58,0],[1.66,1.4,1.66],'#e7802e',5,{type:'cone'});
    for(const side of [-1,1])add('Aleta',[side*1.01,1.09,0],[.9,1.6,.28],'#e7802e',4,{type:'wedge',rot:[0,side===1?180:0,0]});
    add('Janela',[0,3.23,.87],[.75,.75,.17],'#eeb83e',6,{type:'eye'});
    add('Antena',[0,5.47,0],[.08,.55,.08],'#505958',7);
  }
  return p;
}
function validateProject(data) {
  if(!data || data.format!=='mono-blocks' || data.version!==1 || !Array.isArray(data.pieces) || data.pieces.length>400) throw new Error('Escolha um projeto MONO válido, com até 400 peças.');
  const ids=new Set(), types=PIECE_TYPES;
  return data.pieces.map((p,i) => {
    const vector=(v,min,max)=>Array.isArray(v)&&v.length===3&&v.every(n=>typeof n==='number'&&Number.isFinite(n)&&n>=min&&n<=max);
    if(!p || !types.includes(p.type) || typeof p.name!=='string' || !/^#[0-9a-f]{6}$/i.test(p.color) || !vector(p.pos,-30,30) || p.pos[1]<0 || !vector(p.size,.01,10) || !vector(p.rot,-3600,3600) || !Number.isInteger(p.stage) || p.stage<0 || p.stage>7) throw new Error(`A peça ${i+1} contém propriedades inválidas.`);
    let id=typeof p.id==='string'&&/^[a-zA-Z0-9_-]{1,70}$/.test(p.id)?p.id:'import-'+i;
    if(ids.has(id)) id='import-'+i+'-'+Date.now(); ids.add(id);
    const result={id,name:p.name.slice(0,60),type:p.type,pos:[...p.pos],size:[...p.size],rot:[...p.rot],color:p.color,stage:p.stage,studs:p.studs===true};
    if(p.type==='figure')result.fig=validateFigure(p.fig);
    return result;
  });
}
function validateFigure(f){
  const out={...DEFAULT_FIG};if(!f||typeof f!=='object')return out;
  for(const key of ['skin','legs','hairColor','accColor'])if(typeof f[key]==='string'&&/^#[0-9a-f]{6}$/i.test(f[key]))out[key]=f[key];
  for(const key of ['hair','face','print','accessory'])if(FIG_OPTIONS[key].some(([value])=>value===f[key]))out[key]=f[key];
  return out;
}
let pieces=makeExample('modern'), savedLoad=false,projectTitle='Casa moderna',projectKind='modern';
function readMetadata(data){projectTitle=typeof data.title==='string'?data.title.slice(0,60):'Minha construção';projectKind=['robot','house','car','rocket','city','crew','modern','townhouse'].includes(data.kind)?data.kind:'custom';}
try{if(embeddedProject){pieces=validateProject(embeddedProject);readMetadata(embeddedProject);}}catch(_){embeddedProject=null;}
try {const saved=localStorage.getItem(STORAGE);if(saved){const data=JSON.parse(saved);pieces=validateProject(data);readMetadata(data);savedLoad=true;}} catch(_) {}
let mode='present', playing=false, time=DURATION, speed=1, exploded=false, selected=null, addColor=COLORS[0], soundOn=false,cameraAuto=true,finalManualShown=false,needsRender=true;
let night=false,spin=false,cutLevel=Infinity,flight=null,liveScene=!matchMedia('(prefers-reduced-motion: reduce)').matches,animated=[],clipboard=null,hoverPoint=null,thumbsReady=false;
let undoStack=[],redoStack=[], toastTimer, audioContext, lastSoundStage=-1,manualRevision=0,renderedManualRevision=-1,renderingManual=false;
const stageEl=$('stage'), viewport=$('viewport');
let renderer;
try {renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true});} catch(error){$('webglError').hidden=false;return;}
renderer.setPixelRatio(Math.min(devicePixelRatio,2)); renderer.setClearColor(STAGE_BG);
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.outputColorSpace=THREE.SRGBColorSpace; renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.18;
viewport.appendChild(renderer.domElement);
const scene=new THREE.Scene();scene.background=new THREE.Color(STAGE_BG);
const camera=new THREE.OrthographicCamera(-8,8,7,-7,.1,150);
const cameraState={theta:.54,phi:1.14,zoom:1,target:new THREE.Vector3(0,3.15,0)};
const hemi=new THREE.HemisphereLight(0xf7fbff,0x7e8983,2.1);scene.add(hemi);
const sun=new THREE.DirectionalLight(0xfff5dd,3.4);sun.position.set(-8,16,9);sun.castShadow=true;
sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-12,right:12,top:16,bottom:-12,near:1,far:50});sun.shadow.normalBias=.035;sun.shadow.bias=-.00015;sun.shadow.radius=3;scene.add(sun);
const fill=new THREE.DirectionalLight(0xd2efff,.6);fill.position.set(7,7,-8);scene.add(fill);
const ground=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.MeshBasicMaterial({color:STAGE_BG,toneMapped:false}));ground.rotation.x=-Math.PI/2;ground.position.y=-.03;scene.add(ground);
const shadowGround=new THREE.Mesh(ground.geometry,new THREE.ShadowMaterial({opacity:.25}));shadowGround.rotation.x=-Math.PI/2;shadowGround.position.y=-.026;shadowGround.receiveShadow=true;scene.add(shadowGround);
const grid=new THREE.GridHelper(30,60,0xa59d8a,0xc9c2b2);grid.position.y=.008;grid.material.opacity=.38;grid.material.transparent=true;grid.visible=false;scene.add(grid);
const root=new THREE.Group();scene.add(root);
const selectionBox=new THREE.BoxHelper(new THREE.Object3D(),0xf88735);selectionBox.visible=false;selectionBox.material.depthTest=false;selectionBox.renderOrder=10;scene.add(selectionBox);
const materials=new Map(),geometries=new Map(),objects=new Map();
let stageFrames=[],fullFrame=null;
function material(color){if(!materials.has(color))materials.set(color,new THREE.MeshStandardMaterial({color,roughness:.4,metalness:.04}));return materials.get(color);}
function cachedGeo(key,create){if(!geometries.has(key))geometries.set(key,create());return geometries.get(key);}
function boxGeometry(w,h,d){return cachedGeo(`b${w},${h},${d}`,()=>{
  const b=Math.min(.027,w/8,h/8,d/8), s=new THREE.Shape();
  s.moveTo(-w/2+b,-h/2+b);s.lineTo(w/2-b,-h/2+b);s.lineTo(w/2-b,h/2-b);s.lineTo(-w/2+b,h/2-b);s.closePath();
  const g=new THREE.ExtrudeGeometry(s,{depth:d-2*b,bevelEnabled:true,bevelSegments:1,steps:1,bevelSize:b,bevelThickness:b,curveSegments:1});g.translate(0,0,-d/2+b);return g;
});}
function mesh(geometry,color,parent,x=0,y=0,z=0){const m=new THREE.Mesh(geometry,material(color));m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
function cylinder(r,h){return cachedGeo(`c${r},${h}`,()=>new THREE.CylinderGeometry(r,r,h,24));}
function torus(r,t){return cachedGeo(`t${r},${t}`,()=>new THREE.TorusGeometry(r,t,10,36));}
function sphereGeo(r){return cachedGeo(`s${r}`,()=>new THREE.SphereGeometry(r,20,14));}
function capGeo(r){return cachedGeo(`cap${r}`,()=>new THREE.SphereGeometry(r,24,12,0,Math.PI*2,0,Math.PI/2));}
function shellGeo(r,h,start,length){return cachedGeo(`shell${r},${h},${start},${length}`,()=>new THREE.CylinderGeometry(r,r,h,28,1,true,start,length));}
function coneGeo(r,h){return cachedGeo(`k${r},${h}`,()=>new THREE.ConeGeometry(r,h,24));}
function glassMaterial(){if(!materials.has('glass'))materials.set('glass',new THREE.MeshStandardMaterial({color:'#d4eef7',transparent:true,opacity:.36,roughness:.05,metalness:.1,depthWrite:false}));return materials.get('glass');}
function glowMaterial(color){const key='glow'+color;if(!materials.has(key))materials.set(key,new THREE.MeshStandardMaterial({color,emissive:color,emissiveIntensity:night?3:1.3,roughness:.3}));return materials.get(key);}
function glass(geometry,parent,x=0,y=0,z=0){const m=new THREE.Mesh(geometry,glassMaterial());m.position.set(x,y,z);m.renderOrder=2;parent.add(m);return m;}
function glow(geometry,color,parent,x=0,y=0,z=0){const m=new THREE.Mesh(geometry,glowMaterial(color));m.position.set(x,y,z);parent.add(m);return m;}
function shapeGeometry(key,points,depth,bevel=0){return cachedGeo(key,()=>{const s=new THREE.Shape();points.forEach(([x,y],i)=>i?s.lineTo(x,y):s.moveTo(x,y));s.closePath();const g=new THREE.ExtrudeGeometry(s,{depth,bevelEnabled:bevel>0,bevelSize:bevel,bevelThickness:bevel,bevelSegments:1,curveSegments:8});g.translate(0,0,-depth/2);return g;});}
function gearGeometry(){return cachedGeo('gear',()=>{const s=new THREE.Shape(),teeth=12;for(let i=0;i<teeth*4;i++){const a=i/(teeth*4)*Math.PI*2,r=i%4<2?.5:.4;i?s.lineTo(Math.cos(a)*r,Math.sin(a)*r):s.moveTo(Math.cos(a)*r,Math.sin(a)*r);}s.closePath();const hole=new THREE.Path();hole.absarc(0,0,.13,0,Math.PI*2,true);s.holes.push(hole);const g=new THREE.ExtrudeGeometry(s,{depth:1,bevelEnabled:false,curveSegments:16});g.translate(0,0,-.5);return g;});}
const starPoints=[...Array(10)].map((_,i)=>{const a=Math.PI/2+i*Math.PI/5,r=i%2?.4:1;return [Math.cos(a)*r,Math.sin(a)*r];});
function idPhase(id){let n=0;for(const c of id)n=(n*31+c.charCodeAt(0))%9973;return n*.37;}
function swayGroup(group,h){const sway=new THREE.Group();sway.position.y=-h/2;group.add(sway);const inner=new THREE.Group();inner.position.y=h/2;sway.add(inner);return {sway,inner};}
function buildFigure(p,group){
  const f={...DEFAULT_FIG,...(p.fig||{})},[w,h,d]=p.size,torsoColor=p.color,ink='#1f2523',ac=f.accColor,hc=f.hairColor;
  const rig=new THREE.Group();rig.scale.set(w/FIG_SIZE[0],h/FIG_SIZE[1],d/FIG_SIZE[2]);group.add(rig);
  const body=new THREE.Group();body.position.y=-.95;rig.add(body);
  const legs=[-1,1].map(side=>{const pivot=new THREE.Group();pivot.position.set(side*.155,.64,0);body.add(pivot);mesh(boxGeometry(.29,.6,.32),f.legs,pivot,0,-.3,0);mesh(boxGeometry(.29,.07,.38),f.legs,pivot,0,-.565,.03);return pivot;});
  mesh(boxGeometry(.62,.1,.3),f.legs,body,0,.68,0);
  mesh(shapeGeometry('torso',[[-.31,0],[.31,0],[.23,.58],[-.23,.58]],.28,.02),torsoColor,body,0,.74,0);
  const front=.166;
  if(f.print==='stripe')mesh(boxGeometry(.54,.09,.012),ac,body,0,.98,front);
  else if(f.print==='badge'){const b=mesh(cylinder(.065,.012),ac,body,.13,1.2,front);b.rotation.x=Math.PI/2;}
  else if(f.print==='tie'){mesh(boxGeometry(.08,.3,.012),ac,body,0,1.03,front);mesh(boxGeometry(.11,.06,.014),ac,body,0,1.21,front+.001);}
  else if(f.print==='zipper'){mesh(boxGeometry(.03,.5,.012),ac,body,0,1.02,front);mesh(boxGeometry(.3,.05,.012),ac,body,0,1.29,front);}
  else if(f.print==='star'){const star=mesh(shapeGeometry('star',starPoints,.1),ac,body,0,1.04,front);star.scale.set(.13,.13,.12);}
  const arms=[-1,1].map(side=>{const pivot=new THREE.Group();pivot.position.set(side*.29,1.25,0);body.add(pivot);const limb=new THREE.Group();limb.rotation.z=side*.14;pivot.add(limb);
    mesh(sphereGeo(.085),torsoColor,limb);mesh(cylinder(.075,.42),torsoColor,limb,0,-.21,0);const hand=mesh(torus(.055,.03),f.skin,limb,0,-.46,.02);hand.rotation.x=Math.PI/2;return {pivot,limb};});
  mesh(cylinder(.1,.06),f.skin,body,0,1.37,0);
  const head=new THREE.Group();head.position.y=1.4;body.add(head);
  mesh(cylinder(.24,.4),f.skin,head,0,.2,0);if(f.hair==='none')mesh(cylinder(.12,.08),f.skin,head,0,.44,0);
  const eye=(side,big)=>{const e=mesh(sphereGeo(big?.045:.034),ink,head,side*.085,.25,.225);e.scale.z=.45;};
  const smile=(r,y)=>{const m=mesh(cachedGeo('smile'+r,()=>new THREE.TorusGeometry(r,.016,6,18,Math.PI)),ink,head,0,y,.226);m.rotation.z=Math.PI;};
  if(f.face==='wink'){eye(1);mesh(boxGeometry(.08,.02,.01),ink,head,-.085,.25,.236);smile(.08,.17);}
  else if(f.face==='surprised'){eye(-1,true);eye(1,true);mesh(torus(.035,.014),ink,head,0,.13,.232);}
  else if(f.face==='serious'){eye(-1);eye(1);mesh(boxGeometry(.12,.02,.01),ink,head,0,.13,.236);for(const side of [-1,1]){const brow=mesh(boxGeometry(.09,.018,.01),ink,head,side*.085,.31,.232);brow.rotation.z=-side*.2;}}
  else if(f.face==='sunglasses'){mesh(shellGeo(.247,.08,-.95,1.9),'#141918',head,0,.26,0);smile(.08,.17);}
  else if(f.face==='happy'){eye(-1);eye(1);smile(.1,.18);for(const side of [-1,1]){const cheek=mesh(sphereGeo(.035),'#e88a7a',head,side*.15,.15,.19);cheek.scale.z=.4;}}
  else{eye(-1);eye(1);smile(.08,.17);}
  if(['short','long','ponytail'].includes(f.hair)){const cap=mesh(capGeo(.262),hc,head,0,.3,0);cap.scale.y=.6;mesh(f.hair==='long'?shellGeo(.27,.5,Math.PI*.35,Math.PI*1.3):shellGeo(.262,.26,Math.PI/2,Math.PI),hc,head,0,f.hair==='long'?.1:.2,0);
    if(f.hair==='ponytail'){mesh(sphereGeo(.09),hc,head,0,.28,-.3);mesh(cylinder(.06,.3),hc,head,0,.1,-.32);}}
  else if(f.hair==='cap'){const dome=mesh(capGeo(.27),hc,head,0,.3,0);dome.scale.y=.65;mesh(cachedGeo('visor',()=>new THREE.CylinderGeometry(.22,.22,.03,24,1,false,-Math.PI/2,Math.PI)),hc,head,0,.31,.16);mesh(sphereGeo(.03),hc,head,0,.48,0);}
  else if(f.hair==='hardhat'){const dome=mesh(capGeo(.3),hc,head,0,.3,0);dome.scale.y=.72;mesh(cylinder(.34,.03),hc,head,0,.31,0);mesh(boxGeometry(.08,.06,.02),'#efece2',head,0,.4,.28);}
  else if(f.hair==='space'){const helmet=glass(sphereGeo(.36),head,0,.2,0);helmet.castShadow=false;mesh(cachedGeo('helmetBack',()=>new THREE.SphereGeometry(.37,24,16,Math.PI,Math.PI)),hc,head,0,.2,0);const collar=mesh(torus(.25,.05),hc,head,0,-.12,0);collar.rotation.x=Math.PI/2;}
  else if(f.hair==='crown'){mesh(cachedGeo('crown',()=>new THREE.CylinderGeometry(.26,.24,.14,24)),hc,head,0,.46,0);for(let i=0;i<6;i++){const a=i/6*Math.PI*2;mesh(coneGeo(.045,.12),hc,head,Math.sin(a)*.22,.59,Math.cos(a)*.22);}mesh(sphereGeo(.04),'#c0392b',head,0,.46,.25);}
  else if(f.hair==='chef'){mesh(cylinder(.25,.12),hc,head,0,.44,0);mesh(cylinder(.22,.2),hc,head,0,.58,0);const puff=mesh(sphereGeo(.3),hc,head,0,.72,0);puff.scale.y=.6;}
  else if(f.hair==='wizard'){mesh(cylinder(.4,.03),hc,head,0,.38,0);mesh(coneGeo(.25,.65),hc,head,0,.72,0);}
  let cape=null,balloon=null;
  if(f.accessory==='backpack'){mesh(boxGeometry(.46,.48,.2),ac,body,0,1.03,-.27);mesh(boxGeometry(.3,.18,.06),ac,body,0,.92,-.39);for(const side of [-1,1])mesh(boxGeometry(.06,.42,.02),ac,body,side*.14,1.08,.17);}
  else if(f.accessory==='cape'){cape=new THREE.Group();cape.position.set(0,1.32,-.17);cape.rotation.x=.12;body.add(cape);mesh(boxGeometry(.62,1,.03),ac,cape,0,-.5,-.02);}
  else if(f.accessory==='tool'){const handle=mesh(cylinder(.025,.36),'#505958',arms[1].limb,0,-.46,.17);handle.rotation.x=Math.PI/2;mesh(boxGeometry(.12,.05,.1),ac,arms[1].limb,0,-.46,.36);}
  else if(f.accessory==='shield'){const shield=mesh(cylinder(.24,.04),ac,arms[0].limb,-.1,-.3,.04);shield.rotation.z=Math.PI/2;mesh(sphereGeo(.05),'#efece2',arms[0].limb,-.13,-.3,.04);}
  else if(f.accessory==='balloon'){balloon=new THREE.Group();balloon.position.set(.36,.8,.05);body.add(balloon);mesh(cylinder(.006,1.2),'#efece2',balloon,0,.6,0);const ball=mesh(sphereGeo(.2),ac,balloon,0,1.42,0);ball.scale.y=1.15;}
  const phase=idPhase(p.id);group.userData.figure=true;
  group.userData.animate=(t,live)=>{
    let action=group.userData.action,k=1;if(action){k=(t-action.start)/action.duration;if(k>=1||k<0){group.userData.action=action=null;}}
    const env=action?Math.min(1,k*5,(1-k)*5):0,idle=live?1:0,s=t*1.7+phase;
    body.position.y=-.95+idle*Math.sin(s*2)*.01;rig.rotation.y=0;head.rotation.set(0,idle*Math.sin(s*.45)*.4,0);
    arms[0].pivot.rotation.set(idle*Math.sin(s)*.16,0,0);arms[1].pivot.rotation.set(-idle*Math.sin(s)*.16,0,0);legs[0].rotation.x=0;legs[1].rotation.x=0;
    if(cape)cape.rotation.x=.12+idle*(.05+Math.sin(s*1.3)*.05);if(balloon)balloon.rotation.z=idle*Math.sin(s*.8)*.06;
    if(!action)return;
    if(action.kind==='wave'){arms[1].pivot.rotation.z=env*(2.55+Math.sin(t*14)*.3);head.rotation.z=env*.12;}
    else if(action.kind==='jump'){const j=Math.sin(k*Math.PI);body.position.y+=j*.6;arms[0].pivot.rotation.z=-env*2.3;arms[1].pivot.rotation.z=env*2.3;legs[0].rotation.x=legs[1].rotation.x=j*.35;}
    else{rig.rotation.y=smooth(k)*Math.PI*2;arms[0].pivot.rotation.z=-env*(1.5+Math.sin(t*10)*.8);arms[1].pivot.rotation.z=env*(1.5+Math.cos(t*10)*.8);legs[0].rotation.x=env*Math.sin(t*10)*.4;legs[1].rotation.x=-env*Math.sin(t*10)*.4;body.position.y+=env*Math.abs(Math.sin(t*10))*.1;}
  };
}
function buildLegoPart(p,group){
  const [w,h,d]=p.size,c=p.color,phase=idPhase(p.id);
  if(p.type==='tile')mesh(boxGeometry(w,h,d),c,group);
  else if(p.type==='round'){const body=mesh(cylinder(.5,1),c,group);body.scale.set(w,h,d);const r=Math.min(.15,w*.3,d*.3);mesh(cylinder(r,.12),c,group,0,h/2+.06,0).userData.stud=true;}
  else if(p.type==='technic'){const r=h/2;mesh(boxGeometry(Math.max(.01,w-h),h,d),c,group);for(const side of [-1,1]){const end=mesh(cylinder(r,d),c,group,side*(w/2-r),0,0);end.rotation.x=Math.PI/2;}
    const n=Math.max(1,Math.round(w/h));for(let i=0;i<n;i++){const x=n===1?0:-w/2+r+i*(w-h)/(n-1),hole=mesh(cylinder(r*.5,d+.012),'#1d2523',group,x,0,0);hole.rotation.x=Math.PI/2;hole.castShadow=false;}}
  else if(p.type==='stairs'){const n=4;for(let i=0;i<n;i++){const depth=d*(n-i)/n;mesh(boxGeometry(w,h/n,depth),c,group,0,-h/2+h/n*(i+.5),-d/2+depth/2);}}
  else if(p.type==='window'){const t=Math.min(.12,w*.15,h*.15);for(const side of [-1,1]){mesh(boxGeometry(t,h,d),c,group,side*(w/2-t/2),0,0);mesh(boxGeometry(w,t,d),c,group,0,side*(h/2-t/2),0);}
    mesh(boxGeometry(t*.5,h-2*t,d*.4),c,group);mesh(boxGeometry(w-2*t,t*.5,d*.4),c,group);const pane=glass(boxGeometry(w-2*t,h-2*t,d*.25),group);pane.castShadow=false;mesh(boxGeometry(w+.08,t*.6,d+.12),c,group,0,-h/2+t*.3,.03);}
  else if(p.type==='door'){const t=Math.min(.1,w*.12,h*.08),frame='#f2efe4';for(const side of [-1,1])mesh(boxGeometry(t,h,d),frame,group,side*(w/2-t/2),0,0);mesh(boxGeometry(w,t,d),frame,group,0,h/2-t/2,0);
    const pw=w-2*t,ph=h-t;mesh(boxGeometry(pw,ph,d*.5),c,group,0,-t/2,0);for(const y of [.22,-.22])mesh(boxGeometry(pw*.62,ph*.3,d*.5+.04),c,group,0,y*ph-t/2,0);mesh(sphereGeo(Math.min(.06,w*.06)),'#eeb83e',group,pw*.36,-t/2,d*.25+.04);}
  else if(p.type==='fence'){const n=Math.max(2,Math.round(w/.5)+1),t=Math.min(.1,w/(n*2));for(let i=0;i<n;i++){const x=-w/2+t/2+i*(w-t)/(n-1);mesh(boxGeometry(t,h*.92,d),c,group,x,-h*.04,0);const tip=mesh(coneGeo(t*.72,h*.08),c,group,x,h/2-h*.04,0);tip.rotation.y=Math.PI/4;}
    for(const y of [-.15,.25])mesh(boxGeometry(w,h*.12,d*.6),c,group,0,y*h,-d*.05);}
  else if(p.type==='gear'){const spin=new THREE.Group();group.add(spin);const g=mesh(gearGeometry(),c,spin);g.scale.set(w,h,d);const axle=mesh(cylinder(.07,1.15),'#1d2523',spin);axle.rotation.x=Math.PI/2;axle.scale.set(w,d,h);
    group.userData.animate=(t,live)=>{if(live)spin.rotation.z=t*.9+phase;};}
  else if(p.type==='ring'){const ring=mesh(torus(.38,.12),c,group);ring.scale.set(w,h,d/.24);}
  else if(p.type==='plant'){const {sway,inner}=swayGroup(group,h);inner.scale.set(w,h,d);mesh(cylinder(.32,.28),'#9a5b3c',inner,0,-.36,0);mesh(cylinder(.035,.5),'#3f7d3a',inner,0,-.02,0);
    for(const side of [-1,1]){const leaf=mesh(sphereGeo(.12),'#4f9a45',inner,side*.13,-.05,0);leaf.scale.set(1.3,.45,.7);leaf.rotation.z=side*.5;}
    for(let i=0;i<5;i++){const a=i/5*Math.PI*2;const petal=mesh(sphereGeo(.1),c,inner,Math.cos(a)*.13,.3+Math.sin(a)*.13,0);petal.scale.z=.5;}mesh(sphereGeo(.08),'#eeb83e',inner,0,.3,.03);
    group.userData.animate=(t,live)=>{sway.rotation.z=live?Math.sin(t*1.4+phase)*.05:0;};}
  else if(p.type==='tree'){const {sway,inner}=swayGroup(group,h);inner.scale.set(w,h,d);mesh(cylinder(.09,.4),'#8b6a45',inner,0,-.3,0);
    for(const [r,ht,y] of [[.5,.42,-.04],[.4,.38,.17],[.28,.32,.36]])mesh(coneGeo(r,ht),c,inner,0,y,0);
    group.userData.animate=(t,live)=>{sway.rotation.z=live?Math.sin(t*.9+phase)*.025:0;sway.rotation.x=live?Math.cos(t*.7+phase)*.02:0;};}
  else if(p.type==='lamp'){const r=w/2;mesh(cylinder(r*.8,.1),'#3c4644',group,0,-h/2+.05,0);mesh(cylinder(Math.max(.03,r*.18),h-.2),c,group,0,-.05,0);mesh(cylinder(r,.08),c,group,0,h/2-.08,0);
    const bulb=glow(sphereGeo(Math.max(.06,r*.55)),'#ffe7a3',group,0,h/2-.08-r*.45,0);bulb.castShadow=false;}
}
function waterMaterial(color){const key='water'+color;if(!materials.has(key))materials.set(key,new THREE.MeshStandardMaterial({color,transparent:true,opacity:.72,roughness:.08,metalness:.15,emissive:color,emissiveIntensity:.08}));return materials.get(key);}
function leafGeometry(){return cachedGeo('leaf',()=>{const s=new THREE.Shape();[[0,0],[.25,.13],[.6,.12],[1,0],[.6,-.12],[.25,-.13]].forEach(([x,y],i)=>i?s.lineTo(x,y):s.moveTo(x,y));s.closePath();const g=new THREE.ExtrudeGeometry(s,{depth:.03,bevelEnabled:false});g.translate(0,0,-.015);g.rotateX(-Math.PI/2);return g;});}
const BOOK_COLORS=['#d63c2f','#f9ae01','#2e5fa8','#3f7d5a','#efece2','#e7802e','#6b3fa0'];
function buildHomePart(p,group){
  const [w,h,d]=p.size,c=p.color,phase=idPhase(p.id),dark='#2b2b2b';
  if(p.type==='palm'){
    const sway=new THREE.Group();sway.position.y=-h/2;group.add(sway);const r=Math.max(.05,Math.min(w,d)*.06),n=7,seg=h*.82/n;let top=null;
    for(let i=0;i<n;i++){const t=i/n,x=Math.pow(t,2)*w*.18;mesh(cylinder(r*(1-t*.35),seg*1.02),i%2?'#8b6a45':'#a07c52',sway,x,seg*(i+.5),0);top=[Math.pow((i+1)/n,2)*w*.18,seg*(i+1)];}
    const crown=new THREE.Group();crown.position.set(top[0],top[1],0);sway.add(crown);
    for(let i=0;i<8;i++){const pivot=new THREE.Group();pivot.rotation.y=i/8*Math.PI*2+phase;crown.add(pivot);const leaf=mesh(leafGeometry(),i%2?c:'#4f9a45',pivot);leaf.scale.set(w*.52,1,d*.5);leaf.rotation.z=-.32-(i%2)*.22;}
    for(let i=0;i<3;i++){const a=i/3*Math.PI*2;mesh(sphereGeo(r*.9),'#6b4a2b',crown,Math.cos(a)*r*1.2,-r,Math.sin(a)*r*1.2);}
    group.userData.animate=(t,live)=>{sway.rotation.z=live?Math.sin(t*.8+phase)*.03:0;crown.rotation.y=live?Math.sin(t*1.1+phase)*.08:0;};
  }else if(p.type==='glasspanel'||p.type==='railing'){
    const t=Math.min(.06,w*.06,h*.08);
    if(p.type==='railing'){for(const side of [-1,1])mesh(boxGeometry(t,h,Math.max(d,t)),c,group,side*(w/2-t/2),0,0);mesh(boxGeometry(w,t*1.2,Math.max(d,t)*1.3),c,group,0,h/2-t*.6,0);glass(boxGeometry(w-2*t,h-t*1.4,d*.4),group,0,-t*.7,0).castShadow=false;}
    else{for(const side of [-1,1]){mesh(boxGeometry(t,h,d),c,group,side*(w/2-t/2),0,0);mesh(boxGeometry(w,t,d),c,group,0,side*(h/2-t/2),0);}mesh(boxGeometry(t*.6,h-2*t,d*.6),c,group,0,0,0);glass(boxGeometry(w-2*t,h-2*t,d*.4),group).castShadow=false;}
  }else if(p.type==='slats'){
    mesh(boxGeometry(w,h,d*.35),'#3b2f26',group,0,0,-d*.32);const n=Math.max(2,Math.round(w/.17)),sw=w/n;
    for(let i=0;i<n;i++)mesh(boxGeometry(sw*.7,h,d*.6),c,group,-w/2+sw*(i+.5),0,d*.2);
  }else if(p.type==='water'){
    const water=new THREE.Mesh(boxGeometry(w,h,d),waterMaterial(c));water.receiveShadow=true;group.add(water);
    const glints=new THREE.Group();group.add(glints);for(let i=0;i<4;i++){const g=mesh(boxGeometry(Math.min(.5,w*.2),.012,.04),'#e8f7ff',glints,((i*.37+phase)%1-.5)*w*.8,h/2+.006,((i*.61+phase*.3)%1-.5)*d*.8);g.castShadow=false;}
    group.userData.animate=(t,live)=>{if(live)glints.children.forEach((g,i)=>{g.position.x=(((i*.37+phase+t*.05)%1)-.5)*w*.8;g.scale.x=.6+.4*Math.sin(t*2+i);});};
  }else if(p.type==='lounger'){
    for(const x of [-1,1])for(const z of [-1,1])mesh(boxGeometry(.06,h*.35,.06),'#d9d9d4',group,x*(w/2-.06),-h/2+h*.175,z*(d/2-.08));
    mesh(boxGeometry(w,h*.15,d),'#e9e9e4',group,0,-h/2+h*.42,0);mesh(boxGeometry(w*.92,h*.16,d*.55),c,group,0,-h/2+h*.57,d*.2);
    const back=new THREE.Group();back.position.set(0,-h/2+h*.5,-d*.08);back.rotation.x=.75;group.add(back);mesh(boxGeometry(w*.92,h*.16,d*.42),c,back,0,h*.08,-d*.21);
  }else if(p.type==='sofa'){
    const base=h*.4;mesh(boxGeometry(w,base,d),c,group,0,-h/2+base/2,0);
    const n=w>1.3?3:w>.9?2:1,cw=(w*.8)/n;for(let i=0;i<n;i++)mesh(boxGeometry(cw*.96,h*.16,d*.7),c,group,-w*.4+cw*(i+.5),-h/2+base+h*.08,d*.1);
    mesh(boxGeometry(w*.8,h*.6,d*.25),c,group,0,-h/2+base+h*.3,-d/2+d*.125);for(const side of [-1,1])mesh(boxGeometry(w*.1,h*.62,d),c,group,side*(w/2-w*.05),-h/2+h*.31,0);
    for(const x of [-1,1])for(const z of [-1,1])mesh(boxGeometry(.06,.06,.06),dark,group,x*(w/2-.08),-h/2+.03,z*(d/2-.08));
  }else if(p.type==='bed'){
    const frame='#a27c47',body=h*.35;mesh(boxGeometry(w,body,d),frame,group,0,-h/2+body/2,0);mesh(boxGeometry(w*.94,h*.18,d*.92),'#f7f6f1',group,0,-h/2+body+h*.09,0);
    mesh(boxGeometry(w*.98,h*.08,d*.58),c,group,0,-h/2+body+h*.2,d*.2);for(const side of [-1,1])mesh(boxGeometry(w*.38,h*.1,d*.18),'#ffffff',group,side*w*.22,-h/2+body+h*.23,-d*.33);
    mesh(boxGeometry(w,h,d*.06),frame,group,0,0,-d/2+d*.03);
  }else if(p.type==='table'){
    mesh(boxGeometry(w,Math.min(.1,h*.12),d),c,group,0,h/2-Math.min(.1,h*.12)/2,0);const r=Math.min(.05,w*.05);
    for(const x of [-1,1])for(const z of [-1,1])mesh(cylinder(r,h*.9),c==='#9fd3e6'?'#d9d9d4':c,group,x*(w/2-r*2.5),-h*.05,z*(d/2-r*2.5));
  }else if(p.type==='chair'){
    const seatY=-h/2+h*.48;mesh(boxGeometry(w,h*.07,d*.92),c,group,0,seatY,0);mesh(boxGeometry(w,h*.46,d*.1),c,group,0,seatY+h*.26,-d/2+d*.05);
    for(const x of [-1,1])for(const z of [-1,1])mesh(boxGeometry(.05,h*.48,.05),c,group,x*(w/2-.04),-h/2+h*.24,z*(d/2-.05));
  }else if(p.type==='shelf'){
    const t=Math.min(.06,w*.06);for(const side of [-1,1])mesh(boxGeometry(t,h,d),c,group,side*(w/2-t/2),0,0);mesh(boxGeometry(w,h,t),c,group,0,0,-d/2+t/2);
    const rows=4;for(let r=0;r<=rows;r++){const y=-h/2+t/2+r*(h-t)/rows;mesh(boxGeometry(w,t,d),c,group,0,y,0);
      if(r<rows){let x=-w/2+t+.02;const space=(h-t)/rows-t;let k=r*5+Math.floor(phase);while(x<w/2-t-.08){const bw=.06+((k*7)%5)*.012,bh=space*(.6+((k*3)%4)*.1);mesh(boxGeometry(bw,bh,d*.7),BOOK_COLORS[k%BOOK_COLORS.length],group,x+bw/2,y+t/2+bh/2,t/2);x+=bw+.012;k++;}}}
  }else if(p.type==='kitchen'){
    mesh(boxGeometry(w,h*.9,d),c,group,0,-h*.05,0);mesh(boxGeometry(w*1.02,h*.1,d*1.04),'#e9e9e4',group,0,h/2-h*.05,0);
    const n=Math.max(2,Math.round(w/.5));for(let i=1;i<n;i++)mesh(boxGeometry(.015,h*.8,.01),dark,group,-w/2+i*w/n,-h*.06,d/2+.003);
    for(let i=0;i<n;i++)mesh(boxGeometry(w/n*.4,.03,.03),'#d9d9d4',group,-w/2+(i+.5)*w/n,h*.3,d/2+.02);
    mesh(boxGeometry(w*.32,.02,d*.6),'#1d1d1d',group,w*.22,h/2+.01,0);for(const x of [-1,1]){const burner=mesh(torus(Math.min(.08,w*.04),.012),'#8e9592',group,w*.22+x*w*.07,h/2+.025,0);burner.rotation.x=Math.PI/2;}
    mesh(boxGeometry(w*.24,.02,d*.5),'#9aa3a6',group,-w*.25,h/2+.01,0);mesh(cylinder(.025,.2),'#c9cfc6',group,-w*.25,h/2+.1,-d*.3);
  }else if(p.type==='pendant'){
    const pivot=new THREE.Group();pivot.position.y=h/2;group.add(pivot);const r=w*.45,cord=Math.max(.05,h-2*r);
    mesh(cylinder(.012,cord),c,pivot,0,-cord/2,0);mesh(cylinder(r*.25,.06),c,pivot,0,-cord,0);
    const dome=glass(sphereGeo(r),pivot,0,-cord-r*.9,0);dome.castShadow=false;glow(sphereGeo(r*.3),'#ffe7a3',pivot,0,-cord-r*.9,0).castShadow=false;
    for(let i=0;i<3;i++){const ring=mesh(torus(r*(.7+i*.12),.01),c,pivot,0,-cord-r*(.4+i*.45),0);ring.rotation.x=Math.PI/2;}
    group.userData.animate=(t,live)=>{pivot.rotation.z=live?Math.sin(t*.9+phase)*.03:0;};
  }else if(p.type==='campfire'){
    for(let i=0;i<9;i++){const a=i/9*Math.PI*2,stone=mesh(sphereGeo(.5),'#8e9592',group,Math.cos(a)*w*.38,-h/2+h*.12,Math.sin(a)*d*.38);stone.scale.set(w*.2,h*.25,d*.2);}
    for(let i=0;i<3;i++){const log=mesh(cylinder(.5,1),c,group,0,-h/2+h*.18,0);log.scale.set(w*.12,w*.62,w*.12);log.rotation.order='YXZ';log.rotation.set(Math.PI/2,i/3*Math.PI,0);}
    const flames=[['#ff6a1f',.34,.75],['#ff9d2e',.26,.6],['#ffd23f',.16,.42]].map(([color,r,fh])=>{const f=glow(coneGeo(.5,1),color,group,0,0,0);f.castShadow=false;f.userData.base=[w*r*2,h*fh,d*r*2];f.scale.set(...f.userData.base);f.position.y=-h/2+h*.2+h*fh/2;return f;});
    group.userData.animate=(t,live)=>{flames.forEach((f,i)=>{const k=live?1+Math.sin(t*9+i*2+phase)*.12+Math.sin(t*13+i)*.06:1,[bx,by,bz]=f.userData.base;f.scale.set(bx,by*k,bz);f.position.y=-h/2+h*.2+by*k/2;});};
  }
}
function buildObject(p){
  const group=new THREE.Group();group.userData.pieceId=p.id;
  const [w,h,d]=p.size;
  if(p.type==='figure')buildFigure(p,group);
  else if(HOME_PARTS.some(([type])=>type===p.type))buildHomePart(p,group);
  else if(LEGO_PARTS.some(([type])=>type===p.type))buildLegoPart(p,group);
  else if(p.type==='arch'){
    const geo=cachedGeo('arch',()=>{
      const s=new THREE.Shape();s.moveTo(1,-.5);s.lineTo(1,-.12);
      for(let j=0;j<=24;j++){const a=j*Math.PI/24;s.lineTo(Math.cos(a),-.12+Math.sin(a)*.62);}
      s.lineTo(-1,-.5);s.lineTo(-.86,-.5);s.lineTo(-.86,-.12);
      for(let j=24;j>=0;j--){const a=j*Math.PI/24;s.lineTo(Math.cos(a)*.86,-.12+Math.sin(a)*.49);}
      s.lineTo(.86,-.5);s.closePath();
      const g=new THREE.ExtrudeGeometry(s,{depth:1,bevelEnabled:false,steps:1,curveSegments:24});g.translate(0,0,-.5);return g;
    });
    const m=mesh(geo,p.color,group);m.scale.set(w/2,h,d);
  }else if(p.type==='eye'){
    const eye=new THREE.Group();group.add(eye);eye.scale.set(w,h,d);
    const housing=mesh(cylinder(.48,.65),'#414c46',eye,0,0,-.1);housing.rotation.x=Math.PI/2;
    mesh(torus(.365,.12),p.color,eye,0,0,.28);
    const lens=mesh(cylinder(.258,.085),'#202f31',eye,0,0,.33);lens.rotation.x=Math.PI/2;
    const pupil=mesh(cylinder(.095,.02),'#122128',eye,0,0,.385);pupil.rotation.x=Math.PI/2;
    const glint=mesh(cylinder(.034,.025),'#879991',eye,-.085,.086,.385);glint.rotation.x=Math.PI/2;
  }else if(p.type==='sphere'){
    const m=mesh(cachedGeo('sphere',()=>new THREE.SphereGeometry(.5,24,16)),p.color,group);m.scale.set(w,h,d);
  }else if(p.type==='cone'){
    const m=mesh(cachedGeo('cone',()=>new THREE.ConeGeometry(.5,1,32)),p.color,group);m.scale.set(w,h,d);
  }else if(p.type==='wedge'){
    const geo=cachedGeo('wedge',()=>{const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute([-.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,-.5,-.5,.5,.5,-.5,.5,.5,.5,.5],3));g.setIndex([0,2,1,3,4,5,0,1,4,0,4,3,1,2,5,1,5,4,0,3,5,0,5,2]);const flat=g.toNonIndexed();flat.computeVertexNormals();g.dispose();return flat;});
    const m=mesh(geo,p.color,group);m.scale.set(w,h,d);
  }else if(p.type==='wheel'){
    const wheel=new THREE.Group();group.add(wheel);wheel.scale.set(w,h,d);
    mesh(torus(.35,.15),'#333d39',wheel);const hub=mesh(cylinder(.235,.35),p.color,wheel);hub.rotation.x=Math.PI/2;
    const axle=mesh(cylinder(.07,.39),'#65766b',wheel);axle.rotation.x=Math.PI/2;
  }else if(p.type==='cylinder'){
    const m=mesh(cylinder(.5,1),p.color,group);m.rotation.x=Math.PI/2;m.scale.set(w,d,h);
  }else{
    mesh(boxGeometry(w,h,d),p.color,group);
    if(p.studs){
      const nx=Math.max(1,Math.floor(w/.46)),nz=Math.max(1,Math.floor(d/.46));
      // Keep large user-created plates responsive.
      const stepX=Math.max(1,Math.ceil(nx/10)),stepZ=Math.max(1,Math.ceil(nz/10));
      const r=Math.min(.14,w*.25,d*.25);
      for(let x=0;x<nx;x+=stepX)for(let z=0;z<nz;z+=stepZ){mesh(cylinder(r,.12),p.color,group,(x-(nx-1)/2)*w/nx,h/2+.04,(z-(nz-1)/2)*d/nz).userData.stud=true;}
    }
  }
  group.rotation.set(...p.rot.map(n=>THREE.MathUtils.degToRad(n)));
  group.position.fromArray(p.pos);return group;
}
function rebuild(){
  while(root.children.length)root.remove(root.children[0]);objects.clear();
  animated=[];
  for(const p of pieces){const group=buildObject(p);root.add(group);objects.set(p.id,group);if(group.userData.animate){animated.push(group);group.userData.animate(performance.now()/1000,liveScene);}}
  root.updateMatrixWorld(true);
  let top=1;for(const object of objects.values()){const box=pieceBox(object);object.userData.bottom=box.min.y;top=Math.max(top,box.max.y);}
  const cut=$('cutLevel');cut.max=String(Math.ceil(top*10)/10);if(cutLevel===Infinity)cut.value=cut.max;
  function frame(items){if(!items.length)return null;const bounds=new THREE.Box3();for(const p of items)bounds.expandByObject(objects.get(p.id));return {center:bounds.getCenter(new THREE.Vector3()),size:bounds.getSize(new THREE.Vector3())};}
  fullFrame=frame(pieces);stageFrames=STAGES.map((_,i)=>frame(pieces.filter(p=>p.stage===i)));
  $('pieceCount').textContent=`${pieces.length} PEÇAS`;
  $('projectTitle').value=projectTitle;$('modelTag').textContent=projectTitle.toUpperCase();$('projectMeta').textContent='MONO / '+projectTitle.toUpperCase();$('stageTitle').textContent=projectTitle;refreshStages();
  const figures=pieces.filter(p=>p.type==='figure').length;$('figureFeature').textContent=figures?`${figures} ${figures===1?'personagem':'personagens'}. Clique em um para ele pular.`:'Esta maquete ainda não tem personagens.';$('waveAll').disabled=!figures;
  document.querySelectorAll('[data-model]').forEach(b=>{const active=b.dataset.model===projectKind;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  if(selected&&!objects.has(selected))selected=null;
  updateInspector();updatePose();
}
function setCameraAuto(value){cameraAuto=value;$('followCamera').setAttribute('aria-pressed',String(value));$('followCamera').innerHTML=`Câmera auto <span>${value?'●':'○'}</span>`;}
function followAssembly(dt){
  if(!cameraAuto||!fullFrame||exploded)return;
  const overview=time>17.05,frame=overview?fullFrame:(stageFrames[activeStage()]||fullFrame),target=frame.center.clone();target.y-=frame.size.y*.14;
  const diagonal=Math.max(2,frame.size.length()),scale=overview?.73:.62;
  const zoom=clamp(Math.min((camera.right-camera.left)*scale/diagonal,(camera.top-camera.bottom)*scale/diagonal),.08,2.1);
  const alpha=1-Math.exp(-dt*3.3);cameraState.target.lerp(target,alpha);cameraState.zoom+=(zoom-cameraState.zoom)*alpha;cameraState.theta+=(.54+Math.sin(time*.13)*.12-cameraState.theta)*alpha;cameraState.phi+=(1.14-cameraState.phi)*alpha;updateCamera();
}
function updateCamera(){
  needsRender=true;
  const r=22,t=cameraState.theta,p=cameraState.phi,target=cameraState.target;
  camera.position.set(target.x+r*Math.sin(p)*Math.sin(t),target.y+r*Math.cos(p),target.z+r*Math.sin(p)*Math.cos(t));
  camera.lookAt(target);camera.zoom=cameraState.zoom;camera.updateProjectionMatrix();
}
function resize(){const w=viewport.clientWidth,h=viewport.clientHeight,aspect=w/h;
  const size=aspect<.8?8.5:6.5;camera.left=-size*aspect;camera.right=size*aspect;camera.top=size;camera.bottom=-size;renderer.setSize(w,h);updateCamera();}
new ResizeObserver(resize).observe(viewport);
function resetCamera(view){
  Object.assign(cameraState,{theta:view?.theta??.54,phi:view?.phi??1.14,zoom:1});
  if(!pieces.length){cameraState.target.set(0,1,0);cameraState.zoom=1.4;resize();return;}
  updatePose();root.updateMatrixWorld(true);const bounds=new THREE.Box3().setFromObject(root),center=bounds.getCenter(new THREE.Vector3()),size=bounds.getSize(new THREE.Vector3());
  cameraState.target.copy(center);cameraState.target.y-=size.y*.1;resize();
  const diagonal=Math.max(2,size.length());cameraState.zoom=clamp(Math.min((camera.right-camera.left)*.72/diagonal,(camera.top-camera.bottom)*.76/diagonal),.08,3.8);updateCamera();
}
function updatePose(){
  needsRender=true;
  pieces.forEach((p,i)=>{
    const group=objects.get(p.id),start=p.stage*2.16+(i%5)*.07;
    const fraction=mode==='edit'?1:clamp((time-start)/1.65,0,1),e=smooth(fraction);
    const spread=exploded&&mode==='present'?1:0;
    group.visible=mode==='edit'||(time>start-.8&&!(group.userData.bottom>cutLevel));
    group.scale.setScalar(group.visible?Math.max(.02,Math.min(1,(time-start+.8)/.65)):1);
    if(mode==='edit')group.scale.setScalar(1);
    const sx=p.pos[0]===0?Math.sin(i*2.4):Math.sign(p.pos[0]);
    group.position.set(p.pos[0]+sx*((1-e)*1.1+spread*(.9+p.stage*.12)),p.pos[1]+(1-e)*3+spread*(p.stage*.49+.1),p.pos[2]+(1-e)*Math.cos(i)*.8+spread*(p.pos[2]*.4));
    group.rotation.set(...p.rot.map(n=>THREE.MathUtils.degToRad(n)));
    if(fraction<1)group.rotation.y+=(1-e)*.16*Math.sin(i);
  });
  if(selected&&objects.has(selected)&&mode==='edit'){selectionBox.setFromObject(objects.get(selected));selectionBox.visible=true;}else selectionBox.visible=false;
}
function activeStage(){return Math.min(7,Math.floor(Math.max(0,time-.1)/2.16));}
function stageDetails(i){return projectKind==='robot'?STAGES[i]:PRODUCT_STAGES[projectKind]?.[i]||[`Etapa ${i+1} de 8`,`Construção · etapa ${i+1}`,`Adicione as peças desta etapa à estrutura já montada. A ordem pode ser alterada no painel de cada peça.`];}
function refreshStages(){
  document.querySelectorAll('#steps [data-step]').forEach(b=>{b.querySelector('.step-name').textContent=stageDetails(Number(b.dataset.step))[1];});
  document.querySelectorAll('#manualGrid .manual-card').forEach((b,i)=>{const d=stageDetails(i);b.querySelector('strong').textContent=d[1];b.querySelector('p').textContent=d[2];});
  [...$('pieceStage').options].forEach((o,i)=>{o.textContent=`${i+1}. ${stageDetails(i)[1]}`;});
}
function updatePlayback(){
  const s=activeStage();$('timeline').value=time;$('play').textContent=playing?'Ⅱ':'▶';$('play').setAttribute('aria-label',playing?'Pausar montagem':'Reproduzir montagem');
  $('timecode').textContent=`00:${String(Math.floor(time)).padStart(2,'0')} / 00:19`;
  $('currentStepTitle').textContent=stageDetails(s)[0];$('currentStepSub').textContent=stageDetails(s)[1];
  document.querySelectorAll('[data-step]').forEach(b=>{const n=Number(b.dataset.step);b.classList.toggle('active',n===s);b.classList.toggle('complete',n<s);b.setAttribute('aria-current',n===s?'step':'false');});
}
function seek(value){time=clamp(value,0,DURATION);playing=false;updatePose();updatePlayback();}
function goStage(index){seek(Math.min(DURATION,index*2.16+2.12));}
function setPlaying(value){playing=value;if(value){if(exploded){exploded=false;$('explode').setAttribute('aria-pressed','false');resetCamera();}if(time>=DURATION-.03)time=0;}updatePlayback();}
function setMode(next){mode=next;playing=false;exploded=false;$('explode').setAttribute('aria-pressed','false');time=DURATION;
  const edit=mode==='edit';if(edit){setSpin(false);flight=null;}$('workspace').classList.toggle('editing',edit);$('presentationPanel').hidden=edit;$('modelsPanel').hidden=edit;$('editorPanel').hidden=!edit;$('playback').hidden=edit;$('editorBottom').hidden=!edit;
  $('presentMode').classList.toggle('active',!edit);$('editMode').classList.toggle('active',edit);$('presentMode').setAttribute('aria-pressed',String(!edit));$('editMode').setAttribute('aria-pressed',String(edit));
  $('stageMode').textContent=edit?'CONSTRUÇÃO LIVRE':'MAQUETE INTERATIVA';grid.visible=edit;$('gridToggle').setAttribute('aria-pressed',String(grid.visible));
  if(!edit)selected=null;updateInspector();updatePose();updatePlayback();if(edit)ensureThumbs();
}
function toast(message){$('toast').textContent=message;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),3300);}
function envelope(){return {format:'mono-blocks',version:1,title:projectTitle,kind:projectKind,pieces:clone(pieces)};}
function persist(){try{localStorage.setItem(STORAGE,JSON.stringify(envelope()));$('saveStatus').textContent='Salvo neste navegador';}catch(_){$('saveStatus').textContent='Use Salvar projeto para guardar';}}
function snapshot(){return {pieces:clone(pieces),title:projectTitle,kind:projectKind};}
function restore(s){pieces=s.pieces;projectTitle=s.title;projectKind=s.kind;}
function remember(){undoStack.push(snapshot());if(undoStack.length>50)undoStack.shift();redoStack=[];}
function committed(){manualRevision++;rebuild();persist();updateHistory();}
function change(action){remember();action();committed();}
function updateHistory(){$('undo').disabled=!undoStack.length;$('redo').disabled=!redoStack.length;}
function undo(){if(!undoStack.length)return;redoStack.push(snapshot());restore(undoStack.pop());committed();}
function redo(){if(!redoStack.length)return;undoStack.push(snapshot());restore(redoStack.pop());committed();}
function current(){return pieces.find(p=>p.id===selected);}
function select(id){selected=id;updateInspector();updatePose();}
function updateInspector(){const p=current();$('inspector').hidden=mode!=='edit'||!p;if(!p)return;
  $('pieceName').value=p.name;['X','Y','Z'].forEach((axis,i)=>{$('pos'+axis).value=Number(p.pos[i].toFixed(2));$('size'+axis).value=p.size[i];$('rot'+axis).value=p.rot[i];});
  $('pieceColor').value=p.color;$('pieceStage').value=p.stage;$('pieceStuds').checked=p.studs;$('pieceStuds').disabled=!['brick','plate'].includes(p.type);
  $('figureEditor').hidden=p.type!=='figure';
  if(p.type==='figure'){const f={...DEFAULT_FIG,...p.fig};for(const [id,key] of FIG_FIELDS)$(id).value=f[key];}
  document.querySelectorAll('#pieceColors button').forEach(b=>b.classList.toggle('active',b.dataset.color.toLowerCase()===p.color.toLowerCase()));
}
function nextId(){return 'custom-'+Date.now().toString(36)+'-'+(++uid);}
// Studs fit inside the piece above, so stacking ignores them.
function pieceBox(object){const box=new THREE.Box3();object.updateWorldMatrix(true,true);object.traverse(o=>{if(o.isMesh&&!o.userData.stud)box.expandByObject(o);});return box;}
function worldBoxes(excludeId){const boxes=[];for(const [id,object] of objects)if(id!==excludeId&&object.visible)boxes.push(pieceBox(object));return boxes;}
function stackTop(boxes,minX,maxX,minZ,maxZ){let top=0;const e=.02;for(const b of boxes)if(b.max.x>minX+e&&b.min.x<maxX-e&&b.max.z>minZ+e&&b.min.z<maxZ-e)top=Math.max(top,b.max.y);return top;}
function addPart(type,preset){if(pieces.length>=400){toast('Limite de 400 peças. Remova uma peça para continuar.');return;}
  const [defaultName,defaultSize]=PART_DEFS[type],size=[...defaultSize],name=preset?.name||defaultName,selectedPiece=current();
  change(()=>{
    const options={type:BOX_ALIASES[type]||type,studs:['brick','plate','cube'].includes(type),id:nextId(),rot:type==='cylinder'?[90,0,0]:[0,0,0]};
    if(type==='figure')options.fig={...DEFAULT_FIG,...(preset?.fig||{})};
    const p=piece(name,selectedPiece?[selectedPiece.pos[0],clamp(selectedPiece.pos[1]+selectedPiece.size[1]/2+size[1]/2+.1,0,30),selectedPiece.pos[2]]:[0,size[1]/2,2.8],size,preset?.torso||HOME_COLORS[type]||addColor,Math.min(7,Math.floor(pieces.length/5)),options);
    if(!selectedPiece&&$('stack').checked)p.pos[1]=clamp(Math.round((stackTop(worldBoxes(null),-size[0]/2,size[0]/2,2.8-size[2]/2,2.8+size[2]/2)+size[1]/2)*100)/100,0,30);
    pieces.push(p);selected=p.id;
  });
  toast(type==='figure'?'Personagem adicionado. Personalize visual, expressão e acessório no painel.':'Peça adicionada. Arraste ou ajuste as coordenadas.');
}
function act(id,kind,silent=false){const object=objects.get(id);if(!object?.userData.figure)return;object.userData.action={kind,start:performance.now()/1000,duration:{wave:1.8,jump:.9,dance:2.4}[kind]};needsRender=true;if(!silent)chirp(kind);}
function chirp(kind){if(!soundOn)return;try{audioContext=audioContext||new (window.AudioContext||window.webkitAudioContext)();audioContext.resume();const o=audioContext.createOscillator(),g=audioContext.createGain(),t=audioContext.currentTime;o.type='triangle';o.frequency.setValueAtTime(kind==='jump'?300:520,t);o.frequency.exponentialRampToValueAtTime(kind==='jump'?720:340,t+.16);g.gain.setValueAtTime(.04,t);g.gain.exponentialRampToValueAtTime(.001,t+.2);o.connect(g);g.connect(audioContext.destination);o.start();o.stop(t+.21);}catch(_){}}
function setLive(value){liveScene=value;$('liveToggle').setAttribute('aria-pressed',String(value));$('liveFeature').setAttribute('aria-pressed',String(value));const t=performance.now()/1000;for(const object of animated)object.userData.animate(t,value);needsRender=true;}
const thumbScene=new THREE.Scene(),thumbCamera=new THREE.OrthographicCamera(-1,1,1,-1,.1,100);
thumbScene.background=new THREE.Color('#f1eee6');thumbScene.add(new THREE.HemisphereLight(0xf7fbff,0x7e8983,2.3));{const light=new THREE.DirectionalLight(0xfff5dd,2.6);light.position.set(-8,16,9);thumbScene.add(light);}
function renderThumb(source,width,height,theta=.6){
  const object=new THREE.Group();for(const p of Array.isArray(source)?source:[source])object.add(buildObject(p));thumbScene.add(object);object.updateMatrixWorld(true);
  const box=new THREE.Box3().setFromObject(object),center=box.getCenter(new THREE.Vector3()),half=Math.max(.3,box.getSize(new THREE.Vector3()).length()*.46),aspect=width/height;
  Object.assign(thumbCamera,{left:-half*aspect,right:half*aspect,top:half,bottom:-half});thumbCamera.position.set(center.x+20*Math.sin(1.18)*Math.sin(theta),center.y+20*Math.cos(1.18),center.z+20*Math.sin(1.18)*Math.cos(theta));thumbCamera.lookAt(center);thumbCamera.updateProjectionMatrix();
  renderer.setSize(width,height,false);renderer.render(thumbScene,thumbCamera);
  const canvas=document.createElement('canvas');canvas.width=width*2;canvas.height=height*2;canvas.getContext('2d').drawImage(renderer.domElement,0,0,canvas.width,canvas.height);
  thumbScene.remove(object);return canvas.toDataURL('image/png');
}
function modelPieces(kind){return kind==='robot'?makeRobot():makeExample(kind);}
function renderModelThumbs(){try{for(const card of document.querySelectorAll('[data-model]'))card.querySelector('img').src=renderThumb(modelPieces(card.dataset.model),150,110);}finally{resize();}}
function ensureThumbs(){
  if(thumbsReady)return;thumbsReady=true;
  try{
    for(const card of document.querySelectorAll('#legoLibrary [data-part],#homeLibrary [data-part]')){const type=card.dataset.part,[,size]=PART_DEFS[type];card.querySelector('img').src=renderThumb({id:'thumb-'+type,type,size:[...size],color:{tree:'#345545',plant:'#d63c2f',window:'#f2efe4',fence:'#efece2',lamp:'#505958',technic:'#505958',ring:'#f9ae01',...HOME_COLORS}[type]||'#f9ae01',pos:[0,0,0],rot:[0,0,0],studs:false},96,72);}
    for(const card of document.querySelectorAll('#figureLibrary [data-figure]')){const preset=FIGURE_PRESETS[Number(card.dataset.figure)];if(preset)card.querySelector('img').src=renderThumb({id:'thumb-fig-'+card.dataset.figure,type:'figure',size:[...FIG_SIZE],color:preset.torso,fig:preset.fig,pos:[0,0,0],rot:[0,0,0]},84,96,.35);}
  }finally{resize();}
}
function duplicate(){const p=current();if(!p)return;if(pieces.length>=400){toast('Limite de 400 peças.');return;}change(()=>{const q=clone(p);q.id=nextId();q.name=(q.name+' · cópia').slice(0,60);q.pos[0]=clamp(q.pos[0]+.75,-30,30);q.pos[1]=clamp(q.pos[1]+.25,0,30);pieces.push(q);selected=q.id;});}
function deleteSelected(){if(!current())return;change(()=>{pieces=pieces.filter(p=>p.id!==selected);selected=null;});}
function download(blob,name){const a=document.createElement('a'),url=URL.createObjectURL(blob);a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function save(){download(new Blob([JSON.stringify(envelope(),null,2)],{type:'application/json'}),'mono-projeto.json');toast('Projeto exportado. Use Abrir um projeto para continuar.');}
function groupedParts(items){const groups=new Map();for(const p of items){const key=[p.type,p.color,...p.size,p.fig?JSON.stringify(p.fig):''].join('|');if(groups.has(key))groups.get(key).quantity++;else groups.set(key,{name:p.name,color:p.color,size:p.size,quantity:1});}return [...groups.values()];}
function slug(text){return text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,65)||'produto';}
function exportWebManual(){
  const data={...envelope(),exportId:slug(projectTitle)+'-'+Date.now().toString(36),startMode:'presentation',autoplay:true,autoManual:true};
  const json=JSON.stringify(data).replace(/</g,'\\u003c');
  const html=DOCUMENT_TEMPLATE.replace(/<script id="projectData" type="application\/json">[\s\S]*?<\/script>/,()=>'<script id="projectData" type="application/json">'+json+'<'+'/script>');
  download(new Blob([html],{type:'text/html;charset=utf-8'}),'montagem-'+slug(projectTitle)+'.html');
  toast('Manual web exportado com o produto, as etapas e o editor.');
}
async function openManual(){
  playing=false;updatePlayback();$('manualTitle').textContent=projectTitle;
  const usedStages=STAGES.filter((_,i)=>pieces.some(p=>p.stage===i)).length,groups=groupedParts(pieces);
  $('manualSummary').textContent=`${pieces.length} peças · ${groups.length} combinações de forma e cor · ${usedStages} etapas com peças. Um manual gerado a partir deste produto.`;
  $('manualGrid').hidden=false;$('inventoryPanel').hidden=true;$('showSteps').classList.add('active');$('showInventory').classList.remove('active');
  const list=$('inventoryList');list.replaceChildren();for(const item of groups){const row=document.createElement('div');row.className='inventory-row';const swatch=document.createElement('span');swatch.className='inventory-swatch';swatch.style.background=item.color;
    const info=document.createElement('span'),name=document.createElement('strong'),dims=document.createElement('small'),count=document.createElement('b');name.textContent=item.name;dims.textContent=item.size.map(n=>Number(n.toFixed(2))).join(' × ')+' u · '+item.color;info.append(name,dims);count.textContent='× '+item.quantity;row.append(swatch,info,count);list.appendChild(row);}
  $('manualDialog').showModal();
  if(renderedManualRevision===manualRevision||renderingManual)return;
  renderingManual=true;$('manualNote').textContent='Preparando as vistas de cada etapa…';$('exportManual').disabled=true;
  const oldTime=time,oldExploded=exploded,oldMode=mode,oldGrid=grid.visible,oldSelected=selected,oldCut=cutLevel;if(night)applyLighting(false);cutLevel=Infinity;
  const cameraBackup={theta:cameraState.theta,phi:cameraState.phi,zoom:cameraState.zoom,target:cameraState.target.clone()};
  try{
    mode='present';time=DURATION;exploded=false;selected=null;grid.visible=false;updatePose();resetCamera();
    const aspect=1.45,size=6.5;camera.left=-size*aspect;camera.right=size*aspect;camera.top=size;camera.bottom=-size;camera.zoom=Math.min(cameraState.zoom,1.3);camera.updateProjectionMatrix();
    renderer.setSize(420,290,false);
    const thumb=document.createElement('canvas');thumb.width=420;thumb.height=290;const ctx=thumb.getContext('2d');
    for(let i=0;i<8;i++){
      const stageBounds=new THREE.Box3();pieces.forEach(p=>{const object=objects.get(p.id);object.visible=p.stage<=i;if(object.visible)stageBounds.expandByObject(object);});
      if(!stageBounds.isEmpty()){const center=stageBounds.getCenter(new THREE.Vector3()),extent=stageBounds.getSize(new THREE.Vector3()),diag=Math.max(2,extent.length());cameraState.target.copy(center);cameraState.target.y-=extent.y*.05;cameraState.zoom=clamp(Math.min((camera.right-camera.left)*.8/diag,(camera.top-camera.bottom)*.8/diag),.08,3.2);updateCamera();}
      renderer.render(scene,camera);ctx.drawImage(renderer.domElement,0,0,420,290);
      const card=$('manualGrid').children[i],img=card.querySelector('img'),batch=pieces.filter(p=>p.stage===i);img.src=thumb.toDataURL('image/png');img.alt=`${projectTitle}: montagem até a etapa ${i+1}`;
      card.querySelector('.manual-quantity').textContent=batch.length?`+ ${batch.length} peças · ver em 3D ↗`:'Sem peças nesta etapa';
      card.querySelector('.manual-part-summary').textContent=groupedParts(batch).slice(0,3).map(g=>g.quantity+'× '+g.name).join(' · ')+(groupedParts(batch).length>3?' · …':'');
      await new Promise(resolve=>requestAnimationFrame(resolve));
    }
    renderedManualRevision=manualRevision;
  }finally{
    time=oldTime;exploded=oldExploded;mode=oldMode;selected=oldSelected;grid.visible=oldGrid;cutLevel=oldCut;if(night)applyLighting(true);Object.assign(cameraState,cameraBackup);resize();updatePose();renderingManual=false;
    $('manualNote').textContent='Clique em uma etapa para ver a montagem em 3D. As dimensões da lista estão em unidades da cena.';$('exportManual').disabled=false;
  }
}
function confirmReplace(title,action){$('confirmTitle').textContent=title;$('confirmAction').onclick=()=>{$('confirmDialog').close();action();};$('confirmDialog').showModal();}
function ping(stage){if(!soundOn||stage===lastSoundStage)return;lastSoundStage=stage;try{audioContext=audioContext||new (window.AudioContext||window.webkitAudioContext)();audioContext.resume();const o=audioContext.createOscillator(),g=audioContext.createGain();o.type='sine';o.frequency.setValueAtTime(380+stage*45,audioContext.currentTime);o.frequency.exponentialRampToValueAtTime(150,audioContext.currentTime+.07);g.gain.setValueAtTime(.035,audioContext.currentTime);g.gain.exponentialRampToValueAtTime(.001,audioContext.currentTime+.1);o.connect(g);g.connect(audioContext.destination);o.start();o.stop(audioContext.currentTime+.11);}catch(_) {}}

STAGES.forEach(([title,subtitle,description],i)=>{
  const li=document.createElement('li'),button=document.createElement('button');
  button.dataset.step=i;button.innerHTML=`<span class="step-num">0${i+1}</span><span class="step-name">${subtitle}</span><span class="step-symbol">↗</span>`;button.onclick=()=>goStage(i);li.appendChild(button);$('steps').appendChild(li);
  const dot=document.createElement('button');dot.dataset.step=i;dot.setAttribute('aria-label',`Etapa ${i+1}: ${subtitle}`);dot.onclick=()=>goStage(i);$('dots').appendChild(dot);
  const card=document.createElement('button');card.className='manual-card';card.innerHTML=`<span>0${i+1} /</span><img alt="Vista da montagem" class="manual-thumb"><strong>${subtitle}</strong><p>${description}</p><small class="manual-part-summary"></small><small class="manual-quantity"></small>`;card.onclick=()=>{if(renderingManual)return;$('manualDialog').close();setMode('present');goStage(i);};$('manualGrid').appendChild(card);
  const option=document.createElement('option');option.value=i;option.textContent=`${i+1}. ${subtitle}`;$('pieceStage').appendChild(option);
});
BASIC_PARTS.forEach(([type,label])=>{
  const b=document.createElement('button');b.className='part-card';b.dataset.part=type;b.innerHTML=`<span class="part-icon ${type}"></span><span>${label}</span>`;b.setAttribute('aria-label','Adicionar '+label);b.onclick=()=>addPart(type);$('partsLibrary').appendChild(b);
});
LEGO_PARTS.forEach(([type,label])=>{
  const b=document.createElement('button');b.className='part-card lego-card';b.dataset.part=type;b.innerHTML=`<img class="part-thumb" alt=""><span>${label}</span>`;b.setAttribute('aria-label','Adicionar '+label);b.onclick=()=>addPart(type);$('legoLibrary').appendChild(b);
});
HOME_PARTS.forEach(([type,label])=>{
  const b=document.createElement('button');b.className='part-card lego-card';b.dataset.part=type;b.innerHTML=`<img class="part-thumb" alt=""><span>${label}</span>`;b.setAttribute('aria-label','Adicionar '+label);b.onclick=()=>addPart(type);$('homeLibrary').appendChild(b);
});
FIGURE_PRESETS.forEach((preset,i)=>{
  const b=document.createElement('button');b.className='figure-card';b.dataset.figure=i;b.innerHTML=`<img alt=""><span>${preset.name}</span>`;b.setAttribute('aria-label','Adicionar personagem: '+preset.name);b.onclick=()=>addPart('figure',preset);$('figureLibrary').appendChild(b);
});
{const b=document.createElement('button');b.className='figure-card random';b.id='randomFigure';b.innerHTML='<span class="dice">⚄</span><span>Sortear personagem</span>';b.setAttribute('aria-label','Adicionar personagem sorteado');b.onclick=()=>addPart('figure',randomFigure());$('figureLibrary').appendChild(b);}
const LIBRARY_COUNTS={partsLibrary:'12 FORMAS',legoLibrary:'12 PEÇAS DE ENCAIXE',homeLibrary:'14 PEÇAS DE CASA E JARDIM',figureLibrary:FIGURE_PRESETS.length+' MODELOS + SORTEIO'};
document.querySelectorAll('[data-library]').forEach(tab=>tab.onclick=()=>{
  document.querySelectorAll('[data-library]').forEach(other=>{const active=other===tab;other.classList.toggle('active',active);other.setAttribute('aria-selected',String(active));$(other.dataset.library).hidden=!active;});
  $('libraryCount').textContent=LIBRARY_COUNTS[tab.dataset.library];ensureThumbs();
});
const FIG_FIELDS=[['figSkin','skin'],['figLegs','legs'],['figHairColor','hairColor'],['figAccColor','accColor'],['figHair','hair'],['figFace','face'],['figPrint','print'],['figAccessory','accessory']];
for(const [id,key] of [['figHair','hair'],['figFace','face'],['figPrint','print'],['figAccessory','accessory']])for(const [value,label] of FIG_OPTIONS[key]){const option=document.createElement('option');option.value=value;option.textContent=label;$(id).appendChild(option);}
for(const [id,key] of FIG_FIELDS)$(id).onchange=e=>{const p=current();if(p?.type==='figure')change(()=>{p.fig={...DEFAULT_FIG,...p.fig,[key]:e.target.value};});};
$('figRandom').onclick=()=>{const p=current();if(p?.type!=='figure')return;const look=randomFigure();change(()=>{p.color=look.torso;p.fig=look.fig;});};
document.querySelectorAll('[data-action]').forEach(b=>b.onclick=()=>{if(selected)act(selected,b.dataset.action);});
$('liveToggle').setAttribute('aria-pressed',String(liveScene));$('liveToggle').onclick=()=>{setLive(!liveScene);toast(liveScene?'Cena viva ligada: personagens e peças animados.':'Cena viva desligada.');};
for(const target of ['newColors','pieceColors'])COLORS.forEach((color,i)=>{const b=document.createElement('button');b.className='swatch';b.style.setProperty('--swatch',color);b.dataset.color=color;b.setAttribute('aria-label','Cor '+COLOR_NAMES[i]);b.classList.toggle('active',target==='newColors'&&color===addColor);b.onclick=()=>{if(target==='newColors'){addColor=color;document.querySelectorAll('#newColors button').forEach(el=>el.classList.toggle('active',el===b));}else if(current()){change(()=>{current().color=color;});}};$(target).appendChild(b);});
$('presentMode').onclick=()=>setMode('present');$('editMode').onclick=()=>setMode('edit');
$('play').onclick=()=>setPlaying(!playing);$('restart').onclick=()=>{time=0;lastSoundStage=-1;finalManualShown=false;setPlaying(true);};
$('timeline').oninput=e=>seek(Number(e.target.value));$('speed').onchange=e=>{speed=Number(e.target.value);};
$('prevStage').onclick=()=>goStage(Math.max(0,activeStage()-1));$('nextStage').onclick=()=>goStage(Math.min(7,activeStage()+1));
$('explode').onclick=()=>{exploded=!exploded;playing=false;time=DURATION;$('explode').setAttribute('aria-pressed',String(exploded));updatePose();resetCamera();updatePlayback();};
$('sound').onclick=()=>{soundOn=!soundOn;$('sound').setAttribute('aria-pressed',String(soundOn));$('sound').setAttribute('aria-label',soundOn?'Desativar som de encaixe':'Ativar som de encaixe');$('sound').innerHTML=`Som <span>${soundOn?'●':'○'}</span>`;if(soundOn){lastSoundStage=-1;ping(activeStage());}};
$('followCamera').onclick=()=>setCameraAuto(!cameraAuto);
$('resetView').onclick=()=>resetCamera();
function applyLighting(dark){
  const bg=dark?NIGHT_BG:STAGE_BG;scene.background.set(bg);renderer.setClearColor(bg);ground.material.color.set(bg);
  hemi.intensity=dark?.42:2.1;hemi.color.set(dark?'#8fa3c8':'#f7fbff');sun.intensity=dark?.45:3.4;sun.color.set(dark?'#9db4ff':'#fff5dd');fill.intensity=dark?.25:.6;shadowGround.material.opacity=dark?.4:.25;
  const glassy=glassMaterial();glassy.emissive.set(dark?'#ffc56b':'#000000');glassy.emissiveIntensity=dark?.6:0;glassy.opacity=dark?.55:.36;
  for(const [key,m] of materials)if(key.startsWith('glow'))m.emissiveIntensity=dark?3:1.3;
  grid.material.opacity=dark?.16:.38;stageEl.classList.toggle('night',dark);needsRender=true;
}
function setNight(value){night=value;$('nightToggle').setAttribute('aria-pressed',String(value));applyLighting(value);}
function setSpin(value){spin=value;$('spinToggle').setAttribute('aria-pressed',String(value));if(value){setCameraAuto(false);flight=null;}}
function resetCut(){cutLevel=Infinity;$('cutLevel').value=$('cutLevel').max;$('cutLabel').textContent='Tudo visível';}
const VIEWS={front:{theta:0,phi:1.2},back:{theta:Math.PI,phi:1.12},side:{theta:Math.PI/2,phi:1.2},top:{theta:.3,phi:.22}};
function flyTo(view){
  setSpin(false);setCameraAuto(false);
  const state=()=>({theta:cameraState.theta,phi:cameraState.phi,zoom:cameraState.zoom,target:cameraState.target.clone()}),from=state();
  resetCamera(view);const to=state();to.theta=from.theta+(((to.theta-from.theta)%(Math.PI*2))+Math.PI*3)%(Math.PI*2)-Math.PI;
  Object.assign(cameraState,{theta:from.theta,phi:from.phi,zoom:from.zoom});cameraState.target.copy(from.target);updateCamera();flight={from,to,start:performance.now()};
}
function openModel(kind,title){
  const load=()=>{change(()=>{pieces=modelPieces(kind);selected=null;projectTitle=title;projectKind=kind;});exploded=false;$('explode').setAttribute('aria-pressed','false');playing=false;time=DURATION;resetCut();updatePose();updatePlayback();resetCamera();toast(`${title}: ${pieces.length} peças. Use os recursos à esquerda para explorar.`);};
  if(projectKind===kind){flyTo(null);return;}
  if(projectKind==='custom'&&pieces.length)confirmReplace(`Abrir a maquete ${title}?`,load);else load();
}
MODELS.forEach(([kind,title,caption])=>{const b=document.createElement('button');b.className='model-card';b.dataset.model=kind;b.innerHTML=`<img alt=""><span>${title}<small>${caption}</small></span>`;b.setAttribute('aria-label','Abrir a maquete '+title);b.onclick=()=>openModel(kind,title);$('modelGrid').appendChild(b);});
$('featurePlay').onclick=()=>{setSpin(false);setCameraAuto(true);time=0;lastSoundStage=-1;finalManualShown=false;setPlaying(true);};
$('nightToggle').onclick=()=>setNight(!night);$('spinToggle').onclick=()=>setSpin(!spin);$('liveFeature').onclick=()=>setLive(!liveScene);
$('cutLevel').oninput=e=>{const value=Number(e.target.value),max=Number(e.target.max);cutLevel=value>=max-.001?Infinity:value;$('cutLabel').textContent=cutLevel===Infinity?'Tudo visível':`Até ${value.toFixed(1).replace('.',',')} u de altura`;updatePose();};
document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>flyTo(VIEWS[b.dataset.view]));
$('waveAll').onclick=()=>{let first=true;for(const [id,object] of objects)if(object.userData.figure){act(id,'wave',!first);first=false;}};
$('customizeFeature').onclick=()=>setMode('edit');$('gridToggle').onclick=()=>{grid.visible=!grid.visible;needsRender=true;$('gridToggle').setAttribute('aria-pressed',String(grid.visible));};
$('capture').onclick=()=>{renderer.render(scene,camera);renderer.domElement.toBlob(blob=>{if(blob){download(blob,'mono-construcao.png');toast('Imagem PNG salva.');}},'image/png');};
$('fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await stageEl.requestFullscreen();}catch(_){toast('Tela cheia indisponível neste navegador.');}};
$('openManual').onclick=openManual;$('editorManual').onclick=openManual;$('exportManual').onclick=exportWebManual;$('help').onclick=()=>$('helpDialog').showModal();
$('showSteps').onclick=()=>{$('manualGrid').hidden=false;$('inventoryPanel').hidden=true;$('showSteps').classList.add('active');$('showInventory').classList.remove('active');};
$('showInventory').onclick=()=>{$('manualGrid').hidden=true;$('inventoryPanel').hidden=false;$('showSteps').classList.remove('active');$('showInventory').classList.add('active');};
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>$(b.dataset.close).close());
$('saveProject').onclick=save;$('importProject').onclick=()=>$('fileInput').click();
$('fileInput').onchange=async event=>{
  const file=event.target.files[0];event.target.value='';if(!file)return;
  try{if(file.size>2_000_000)throw new Error('O arquivo deve ter até 2 MB.');const data=JSON.parse(await file.text()),imported=validateProject(data);
    confirmReplace('Abrir esta construção?',()=>{change(()=>{pieces=imported;selected=null;readMetadata(data);});setMode('edit');resetCamera();toast(`${pieces.length} peças carregadas.`);});
  }catch(e){toast(e instanceof SyntaxError?'Este arquivo não contém um JSON válido.':e.message);}
};
$('undo').onclick=undo;$('redo').onclick=redo;$('deselect').onclick=()=>select(null);
$('robotPreset').onclick=()=>confirmReplace('Voltar ao robô original?',()=>{change(()=>{pieces=makeRobot();selected=null;projectTitle='Robô explorador';projectKind='robot';});resetCamera();});
$('emptyPreset').onclick=()=>confirmReplace('Começar uma construção vazia?',()=>{change(()=>{pieces=[];selected=null;projectTitle='Minha construção';projectKind='custom';});resetCamera();toast('Escolha a primeira peça na biblioteca.');});
for(const [id,kind,title] of [['housePreset','house','Minha casa'],['carPreset','car','Meu veículo'],['rocketPreset','rocket','Meu foguete'],['cityPreset','city','Minha praça'],['crewPreset','crew','Minha turma'],['modernPreset','modern','Casa moderna'],['townhousePreset','townhouse','Sobrado urbano']])$(id).onclick=()=>confirmReplace(`Construir: ${title.toLowerCase()}?`,()=>{change(()=>{pieces=makeExample(kind);selected=null;projectTitle=title;projectKind=kind;});resetCamera();});
$('projectTitle').onchange=e=>change(()=>{projectTitle=e.target.value.trim().slice(0,60)||'Minha construção';});
$('previewBuild').onclick=()=>{setMode('present');time=0;lastSoundStage=-1;setPlaying(true);};
$('pieceName').onchange=e=>{if(current())change(()=>{current().name=e.target.value.trim().slice(0,60)||'Peça sem nome';});};
for(const [group,prefix] of [['pos','pos'],['size','size'],['rot','rot']])['X','Y','Z'].forEach((axis,i)=>{
  $(prefix+axis).onchange=e=>{if(!current())return;const value=Number(e.target.value);if(e.target.value===''||!Number.isFinite(value)){updateInspector();return;}change(()=>{current()[group][i]=clamp(value,group==='rot'?-360:group==='size'?.01:(i===1?0:-30),group==='rot'?360:group==='size'?10:30);});};
});
$('pieceColor').onchange=e=>{if(current())change(()=>{current().color=e.target.value;});};
$('pieceStuds').onchange=e=>{if(current())change(()=>{current().studs=e.target.checked;});};
$('pieceStage').onchange=e=>{if(current())change(()=>{current().stage=Number(e.target.value);});};
document.querySelectorAll('[data-axis]').forEach(b=>b.onclick=()=>{if(current())change(()=>{const a=Number(b.dataset.axis);current().rot[a]=(current().rot[a]+90)%360;});});
$('duplicate').onclick=duplicate;$('deletePiece').onclick=deleteSelected;

const raycaster=new THREE.Raycaster(),ndc=new THREE.Vector2(),plane=new THREE.Plane(new THREE.Vector3(0,1,0),0),hit=new THREE.Vector3();
const pointers=new Map();let gesture=null,pinchDistance=0;
function rayAt(x,y){const r=renderer.domElement.getBoundingClientRect();ndc.set((x-r.left)/r.width*2-1,-((y-r.top)/r.height)*2+1);raycaster.setFromCamera(ndc,camera);}
function pick(x,y){rayAt(x,y);const hits=raycaster.intersectObjects(root.children,true);for(const h of hits){let o=h.object;while(o&&o!==root){if(o.userData.pieceId&&o.visible)return o.userData.pieceId;o=o.parent;}}return null;}
renderer.domElement.addEventListener('pointerdown',e=>{
  if(e.button!==0)return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});renderer.domElement.setPointerCapture(e.pointerId);
  if(pointers.size===2){const [a,b]=[...pointers.values()];pinchDistance=Math.hypot(a.x-b.x,a.y-b.y);if(gesture?.changed)committed();gesture=null;return;}
  flight=null;
  if(e.shiftKey){setCameraAuto(false);gesture={kind:'pan',x:e.clientX,y:e.clientY,target:cameraState.target.clone(),changed:false};return;}
  const id=mode==='edit'?pick(e.clientX,e.clientY):null;
  if(id){const wasSelected=selected===id;select(id);plane.constant=-current().pos[1];rayAt(e.clientX,e.clientY);raycaster.ray.intersectPlane(plane,hit);
    const own=pieceBox(objects.get(id)),pos=current().pos,e2=.05;
    const boxes=worldBoxes(id).filter(b=>!(b.min.y>=own.max.y-e2&&b.max.x>own.min.x&&b.min.x<own.max.x&&b.max.z>own.min.z&&b.min.z<own.max.z));
    gesture={kind:'move',x:e.clientX,y:e.clientY,start:hit.clone(),pos:[...pos],changed:false,wasSelected,boxes,rel:{minX:own.min.x-pos[0],maxX:own.max.x-pos[0],minZ:own.min.z-pos[2],maxZ:own.max.z-pos[2],yOff:pos[1]-own.min.y}};}
  else gesture={kind:'orbit',x:e.clientX,y:e.clientY,theta:cameraState.theta,phi:cameraState.phi,changed:false};
});
renderer.domElement.addEventListener('pointermove',e=>{
  if(!pointers.has(e.pointerId))return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(pointers.size===2){const [a,b]=[...pointers.values()],d=Math.hypot(a.x-b.x,a.y-b.y);if(pinchDistance>0){cameraState.zoom=clamp(cameraState.zoom*d/pinchDistance,.08,6);updateCamera();}pinchDistance=d;return;}
  if(!gesture)return;const dx=e.clientX-gesture.x,dy=e.clientY-gesture.y;if(!gesture.changed&&Math.hypot(dx,dy)<4)return;
  if(gesture.kind==='pan'){gesture.changed=true;const scale=(camera.top-camera.bottom)/camera.zoom/viewport.clientHeight;const right=new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld,0),up=new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld,1);cameraState.target.copy(gesture.target).addScaledVector(right,-dx*scale).addScaledVector(up,dy*scale);updateCamera();}
  else if(gesture.kind==='orbit'){gesture.changed=true;setCameraAuto(false);if(spin)setSpin(false);cameraState.theta=gesture.theta-dx*.007;cameraState.phi=clamp(gesture.phi-dy*.006,.2,1.5);updateCamera();}
  else if(current()){
    rayAt(e.clientX,e.clientY);if(!raycaster.ray.intersectPlane(plane,hit))return;if(!gesture.changed){remember();gesture.changed=true;}
    const quantize=n=>$('snap').checked?Math.round(n*4)/4:Math.round(n*100)/100;
    const p=current(),x=clamp(quantize(gesture.pos[0]+hit.x-gesture.start.x),-30,30),z=clamp(quantize(gesture.pos[2]+hit.z-gesture.start.z),-30,30),r=gesture.rel;p.pos[0]=x;p.pos[2]=z;
    if($('stack').checked)p.pos[1]=clamp(Math.round((stackTop(gesture.boxes,x+r.minX,x+r.maxX,z+r.minZ,z+r.maxZ)+r.yOff)*100)/100,0,30);
    updatePose();updateInspector();
  }
});
function endPointer(e){pointers.delete(e.pointerId);
  if(gesture?.kind==='move'&&gesture.changed)committed();
  else if(gesture?.kind==='move'&&gesture.wasSelected)act(selected,'wave');
  else if(gesture?.kind==='orbit'&&!gesture.changed&&mode==='edit')select(null);
  else if(gesture?.kind==='orbit'&&!gesture.changed&&mode==='present'){const id=pick(e.clientX,e.clientY);if(id)act(id,'jump');}
  gesture=null;pinchDistance=0;}
renderer.domElement.addEventListener('pointermove',e=>{if(!pointers.size)hoverPoint={x:e.clientX,y:e.clientY};});
renderer.domElement.addEventListener('pointerleave',()=>{hoverPoint=null;renderer.domElement.style.cursor='';});
renderer.domElement.addEventListener('pointerup',endPointer);renderer.domElement.addEventListener('pointercancel',endPointer);
renderer.domElement.addEventListener('wheel',e=>{e.preventDefault();setCameraAuto(false);cameraState.zoom=clamp(cameraState.zoom*Math.exp(-e.deltaY*.001),.08,6);updateCamera();},{passive:false});
document.addEventListener('keydown',e=>{
  if(e.target.closest('input,select,textarea')||document.querySelector('dialog[open]'))return;
  if(e.target.closest('button')&&(e.code==='Space'||e.key==='Enter'))return;
  const key=e.key.toLowerCase(),cmd=e.ctrlKey||e.metaKey;
  if(cmd&&key==='s'){e.preventDefault();save();return;}
  if(mode==='present'){if(e.code==='Space'){e.preventDefault();setPlaying(!playing);}return;}
  if(cmd&&key==='z'){e.preventDefault();e.shiftKey?redo():undo();return;}
  if(cmd&&key==='y'){e.preventDefault();redo();return;}
  if(cmd&&key==='d'){e.preventDefault();duplicate();return;}
  if(cmd&&key==='c'&&current()){clipboard=clone(current());toast('Peça copiada. Ctrl/Cmd + V cola uma cópia.');return;}
  if(cmd&&key==='v'&&clipboard){e.preventDefault();if(pieces.length>=400){toast('Limite de 400 peças.');return;}change(()=>{const q=clone(clipboard);q.id=nextId();q.pos[0]=clamp(q.pos[0]+.5,-30,30);q.pos[2]=clamp(q.pos[2]+.5,-30,30);clipboard.pos=[...q.pos];pieces.push(q);selected=q.id;});return;}
  if(!cmd&&key==='r'&&current()){e.preventDefault();change(()=>{const p=current();p.rot[1]=(p.rot[1]+(e.shiftKey?-90:90))%360;});return;}
  if(key==='escape'){select(null);return;}if(key==='delete'||key==='backspace'){e.preventDefault();deleteSelected();return;}
  const movement={ArrowLeft:[0,-1],ArrowRight:[0,1],ArrowUp:[2,-1],ArrowDown:[2,1],PageUp:[1,1],PageDown:[1,-1]}[e.key];
  if(current()&&movement){e.preventDefault();change(()=>{const [a,d]=movement;current().pos[a]=clamp(current().pos[a]+d*(e.shiftKey?1:.25),a===1?0:-30,30);});}
});
let last=performance.now(),lastUI=0;
function animate(now){requestAnimationFrame(animate);const dt=Math.min((now-last)/1000,.08);last=now;
  if(renderingManual)return;
  if(flight){const k=Math.min(1,(now-flight.start)/750),e=smooth(k),f=flight.from,t=flight.to;cameraState.theta=f.theta+(t.theta-f.theta)*e;cameraState.phi=f.phi+(t.phi-f.phi)*e;cameraState.zoom=f.zoom+(t.zoom-f.zoom)*e;cameraState.target.lerpVectors(f.target,t.target,e);updateCamera();if(k===1)flight=null;}
  if(spin&&!document.hidden){cameraState.theta+=dt*.22;updateCamera();}
  if(animated.length&&!document.hidden){const t=now/1000;let moving=false;for(const object of animated)if(liveScene||object.userData.action){object.userData.animate(t,liveScene);moving=true;}
    if(moving){needsRender=true;if(selectionBox.visible&&objects.get(selected)?.userData.animate)selectionBox.setFromObject(objects.get(selected));}}
  if(hoverPoint&&!pointers.size){const id=pick(hoverPoint.x,hoverPoint.y);renderer.domElement.style.cursor=id?(mode==='edit'?'grab':objects.get(id).userData.figure?'pointer':''):'';hoverPoint=null;}
  if(playing&&!document.hidden){time=Math.min(DURATION,time+dt*speed);updatePose();followAssembly(dt);if(now-lastUI>80){updatePlayback();lastUI=now;}ping(activeStage());if(time>=DURATION){playing=false;updatePlayback();if(embeddedProject?.autoManual&&!finalManualShown){finalManualShown=true;setTimeout(()=>{if(mode==='present'&&!document.querySelector('dialog[open]'))openManual();},700);}}}
  if(needsRender){renderer.render(scene,camera);needsRender=false;}
}
document.addEventListener('visibilitychange',()=>{last=performance.now();});
rebuild();resize();resetCamera();updatePlayback();requestAnimationFrame(animate);
setTimeout(renderModelThumbs,120);
if(savedLoad)toast('Sua última construção foi restaurada.');
// A read-only snapshot helps inspect an exported file without exposing mutable state.
window.mono={getProject:()=>envelope(),getStatus:()=>({mode,playing,time,exploded,selected,pieceCount:pieces.length,geometryCount:geometries.size,liveScene,night,spin,cutLevel:cutLevel===Infinity?null:cutLevel,hiddenByCut:mode==='present'?pieces.filter(p=>objects.get(p.id).userData.bottom>cutLevel).length:0,model:projectKind,title:projectTitle,actingCount:[...objects.values()].filter(o=>o.userData.action).length,animatedCount:animated.length,figureCount:pieces.filter(p=>p.type==='figure').length,action:selected?objects.get(selected)?.userData.action?.kind||null:null})};
if(embeddedProject?.startMode==='manual')setTimeout(openManual,150);
if(embeddedProject){document.title=projectTitle+' — Montagem interativa | MONO';document.body.classList.add('product-page');}
if(embeddedProject?.autoplay&&!matchMedia('(prefers-reduced-motion: reduce)').matches){time=0;setPlaying(true);}
})();
