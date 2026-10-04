(() => {
'use strict';
const $ = id => document.getElementById(id);
const DOCUMENT_TEMPLATE='<!doctype html>\n'+document.documentElement.outerHTML;
let embeddedProject=null;try{embeddedProject=JSON.parse($('projectData').textContent);}catch(_){}
const DURATION = 19.4, STORAGE = 'mono-blocks-project-v1'+(embeddedProject?.exportId?'-'+String(embeddedProject.exportId).slice(0,80):'');
const COLORS = ['#e7802e','#f2efe4','#505958','#a7b0a9','#eeb83e','#294c45'];
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
  rocket:[['Base de lançamento','Plataforma','Comece pela plataforma quadrada de apoio.'],['Força para partir','Motor','Centralize o motor na plataforma.'],['Primeiro módulo','Corpo inferior','Empilhe os dois primeiros segmentos cilíndricos.'],['Ganhar altura','Corpo superior','Acrescente os dois segmentos superiores.'],['Estabilidade','Aletas','Posicione as aletas em lados opostos do corpo.'],['Rumo ao alto','Cone superior','Encaixe o cone no topo do último segmento.'],['Uma janela para fora','Visor','Posicione o visor circular na frente.'],['Tudo pronto','Antena','Finalize com a antena no ponto mais alto.']]
};
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
  if(kind==='house'){
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
  const ids=new Set(), types=['brick','plate','cylinder','arch','eye','sphere','cone','wedge','wheel'];
  return data.pieces.map((p,i) => {
    const vector=(v,min,max)=>Array.isArray(v)&&v.length===3&&v.every(n=>typeof n==='number'&&Number.isFinite(n)&&n>=min&&n<=max);
    if(!p || !types.includes(p.type) || typeof p.name!=='string' || !/^#[0-9a-f]{6}$/i.test(p.color) || !vector(p.pos,-30,30) || p.pos[1]<0 || !vector(p.size,.01,10) || !vector(p.rot,-3600,3600) || !Number.isInteger(p.stage) || p.stage<0 || p.stage>7) throw new Error(`A peça ${i+1} contém propriedades inválidas.`);
    let id=typeof p.id==='string'&&/^[a-zA-Z0-9_-]{1,70}$/.test(p.id)?p.id:'import-'+i;
    if(ids.has(id)) id='import-'+i+'-'+Date.now(); ids.add(id);
    return {id,name:p.name.slice(0,60),type:p.type,pos:[...p.pos],size:[...p.size],rot:[...p.rot],color:p.color,stage:p.stage,studs:p.studs===true};
  });
}
let pieces=makeRobot(), savedLoad=false,projectTitle='Robô explorador',projectKind='robot';
function readMetadata(data){projectTitle=typeof data.title==='string'?data.title.slice(0,60):'Minha construção';projectKind=['robot','house','car','rocket'].includes(data.kind)?data.kind:'custom';}
try{if(embeddedProject){pieces=validateProject(embeddedProject);readMetadata(embeddedProject);}}catch(_){embeddedProject=null;}
try {const saved=localStorage.getItem(STORAGE);if(saved){const data=JSON.parse(saved);pieces=validateProject(data);readMetadata(data);savedLoad=true;}} catch(_) {}
let mode='present', playing=false, time=DURATION, speed=1, exploded=false, selected=null, addColor=COLORS[0], soundOn=false,cameraAuto=true,finalManualShown=false,needsRender=true;
let undoStack=[],redoStack=[], toastTimer, audioContext, lastSoundStage=-1,manualRevision=0,renderedManualRevision=-1,renderingManual=false;
const stageEl=$('stage'), viewport=$('viewport');
let renderer;
try {renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true});} catch(error){$('webglError').hidden=false;return;}
renderer.setPixelRatio(Math.min(devicePixelRatio,2)); renderer.setClearColor(0xa2d3e7);
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.outputColorSpace=THREE.SRGBColorSpace; renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.18;
viewport.appendChild(renderer.domElement);
const scene=new THREE.Scene();scene.background=new THREE.Color('#a2d3e7');
const camera=new THREE.OrthographicCamera(-8,8,7,-7,.1,150);
const cameraState={theta:.54,phi:1.14,zoom:1,target:new THREE.Vector3(0,3.15,0)};
scene.add(new THREE.HemisphereLight(0xf7fbff,0x7e8983,2.1));
const sun=new THREE.DirectionalLight(0xfff5dd,3.4);sun.position.set(-8,16,9);sun.castShadow=true;
sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-12,right:12,top:16,bottom:-12,near:1,far:50});sun.shadow.normalBias=.035;sun.shadow.bias=-.00015;sun.shadow.radius=3;scene.add(sun);
const fill=new THREE.DirectionalLight(0xd2efff,.6);fill.position.set(7,7,-8);scene.add(fill);
const ground=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.MeshBasicMaterial({color:'#a2d3e7',toneMapped:false}));ground.rotation.x=-Math.PI/2;ground.position.y=-.03;scene.add(ground);
const shadowGround=new THREE.Mesh(ground.geometry,new THREE.ShadowMaterial({opacity:.25}));shadowGround.rotation.x=-Math.PI/2;shadowGround.position.y=-.026;shadowGround.receiveShadow=true;scene.add(shadowGround);
const grid=new THREE.GridHelper(30,60,0x789eaa,0x94bdcb);grid.position.y=.008;grid.material.opacity=.38;grid.material.transparent=true;grid.visible=false;scene.add(grid);
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
function buildObject(p){
  const group=new THREE.Group();group.userData.pieceId=p.id;
  const [w,h,d]=p.size;
  if(p.type==='arch'){
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
      for(let x=0;x<nx;x+=stepX)for(let z=0;z<nz;z+=stepZ){mesh(cylinder(r,.12),p.color,group,(x-(nx-1)/2)*w/nx,h/2+.04,(z-(nz-1)/2)*d/nz);}
    }
  }
  group.rotation.set(...p.rot.map(n=>THREE.MathUtils.degToRad(n)));
  group.position.fromArray(p.pos);return group;
}
function rebuild(){
  while(root.children.length)root.remove(root.children[0]);objects.clear();
  for(const p of pieces){const group=buildObject(p);root.add(group);objects.set(p.id,group);}
  root.updateMatrixWorld(true);
  function frame(items){if(!items.length)return null;const bounds=new THREE.Box3();for(const p of items)bounds.expandByObject(objects.get(p.id));return {center:bounds.getCenter(new THREE.Vector3()),size:bounds.getSize(new THREE.Vector3())};}
  fullFrame=frame(pieces);stageFrames=STAGES.map((_,i)=>frame(pieces.filter(p=>p.stage===i)));
  $('pieceCount').textContent=`${pieces.length} PEÇAS`;
  $('projectTitle').value=projectTitle;$('modelTag').textContent=projectTitle.toUpperCase();$('projectMeta').textContent='MONO / '+projectTitle.toUpperCase();refreshStages();
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
function resetCamera(){
  Object.assign(cameraState,{theta:.54,phi:1.14,zoom:1});
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
    group.visible=mode==='edit'||time>start-.8;
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
  const edit=mode==='edit';$('workspace').classList.toggle('editing',edit);$('presentationPanel').hidden=edit;$('editorPanel').hidden=!edit;$('playback').hidden=edit;$('editorBottom').hidden=!edit;
  $('presentMode').classList.toggle('active',!edit);$('editMode').classList.toggle('active',edit);$('presentMode').setAttribute('aria-pressed',String(!edit));$('editMode').setAttribute('aria-pressed',String(edit));
  $('stageMode').textContent=edit?'CONSTRUÇÃO LIVRE':'MONTAGEM INTERATIVA';grid.visible=edit;$('gridToggle').setAttribute('aria-pressed',String(grid.visible));
  if(!edit)selected=null;updateInspector();updatePose();updatePlayback();
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
  document.querySelectorAll('#pieceColors button').forEach(b=>b.classList.toggle('active',b.dataset.color.toLowerCase()===p.color.toLowerCase()));
}
function nextId(){return 'custom-'+Date.now().toString(36)+'-'+(++uid);}
function addPart(type){if(pieces.length>=400){toast('Limite de 400 peças. Remova uma peça para continuar.');return;}
  const defs={brick:['Bloco 2 × 4',[1,.5,2]],plate:['Placa 2 × 4',[1,.2,2]],cube:['Bloco 1 × 1',[.5,.5,.5]],beam:['Viga',[.5,1.75,.5]],arch:['Arco',[2,1,.5]],eye:['Olho',[1,1,.4]],wedge:['Rampa',[1,1,2]],sphere:['Esfera',[1,1,1]],cylinder:['Cilindro',[1,1,1]],cone:['Cone',[1,1.5,1]],wheel:['Roda',[1,1,.5]],panel:['Painel',[2,2,.2]]};
  const [name,size]=defs[type],selectedPiece=current();
  change(()=>{const p=piece(name,selectedPiece?[selectedPiece.pos[0],clamp(selectedPiece.pos[1]+selectedPiece.size[1]/2+size[1]/2+.1,0,30),selectedPiece.pos[2]]:[0,size[1]/2,2.8],size,addColor,Math.min(7,Math.floor(pieces.length/5)),{type:['arch','eye','plate','wedge','sphere','cylinder','cone','wheel'].includes(type)?type:'brick',studs:['brick','plate','cube'].includes(type),id:nextId(),rot:type==='cylinder'?[90,0,0]:[0,0,0]});pieces.push(p);selected=p.id;});
  toast('Peça adicionada. Arraste ou ajuste as coordenadas.');
}
function duplicate(){const p=current();if(!p)return;if(pieces.length>=400){toast('Limite de 400 peças.');return;}change(()=>{const q=clone(p);q.id=nextId();q.name=(q.name+' · cópia').slice(0,60);q.pos[0]=clamp(q.pos[0]+.75,-30,30);q.pos[1]=clamp(q.pos[1]+.25,0,30);pieces.push(q);selected=q.id;});}
function deleteSelected(){if(!current())return;change(()=>{pieces=pieces.filter(p=>p.id!==selected);selected=null;});}
function download(blob,name){const a=document.createElement('a'),url=URL.createObjectURL(blob);a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function save(){download(new Blob([JSON.stringify(envelope(),null,2)],{type:'application/json'}),'mono-projeto.json');toast('Projeto exportado. Use Abrir um projeto para continuar.');}
function groupedParts(items){const groups=new Map();for(const p of items){const key=[p.type,p.color,...p.size].join('|');if(groups.has(key))groups.get(key).quantity++;else groups.set(key,{name:p.name,color:p.color,size:p.size,quantity:1});}return [...groups.values()];}
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
  const oldTime=time,oldExploded=exploded,oldMode=mode,oldGrid=grid.visible,oldSelected=selected;
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
    time=oldTime;exploded=oldExploded;mode=oldMode;selected=oldSelected;grid.visible=oldGrid;Object.assign(cameraState,cameraBackup);resize();updatePose();renderingManual=false;
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
[['brick','Bloco 2 × 4'],['plate','Placa'],['cube','Bloco 1 × 1'],['beam','Viga'],['arch','Arco'],['wedge','Rampa'],['cylinder','Cilindro'],['sphere','Esfera'],['cone','Cone'],['wheel','Roda'],['panel','Painel'],['eye','Olho']].forEach(([type,label])=>{
  const b=document.createElement('button');b.className='part-card';b.dataset.part=type;b.innerHTML=`<span class="part-icon ${type}"></span><span>${label}</span>`;b.setAttribute('aria-label','Adicionar '+label);b.onclick=()=>addPart(type);$('partsLibrary').appendChild(b);
});
for(const target of ['newColors','pieceColors'])COLORS.forEach((color,i)=>{const b=document.createElement('button');b.className='swatch';b.style.setProperty('--swatch',color);b.dataset.color=color;b.setAttribute('aria-label',`Cor ${['laranja','marfim','cinza','cinza claro','amarelo','verde'][i]}`);b.classList.toggle('active',target==='newColors'&&color===addColor);b.onclick=()=>{if(target==='newColors'){addColor=color;document.querySelectorAll('#newColors button').forEach(el=>el.classList.toggle('active',el===b));}else if(current()){change(()=>{current().color=color;});}};$(target).appendChild(b);});
$('presentMode').onclick=()=>setMode('present');$('editMode').onclick=()=>setMode('edit');
$('play').onclick=()=>setPlaying(!playing);$('restart').onclick=()=>{time=0;lastSoundStage=-1;finalManualShown=false;setPlaying(true);};
$('timeline').oninput=e=>seek(Number(e.target.value));$('speed').onchange=e=>{speed=Number(e.target.value);};
$('prevStage').onclick=()=>goStage(Math.max(0,activeStage()-1));$('nextStage').onclick=()=>goStage(Math.min(7,activeStage()+1));
$('explode').onclick=()=>{exploded=!exploded;playing=false;time=DURATION;$('explode').setAttribute('aria-pressed',String(exploded));updatePose();resetCamera();updatePlayback();};
$('sound').onclick=()=>{soundOn=!soundOn;$('sound').setAttribute('aria-pressed',String(soundOn));$('sound').setAttribute('aria-label',soundOn?'Desativar som de encaixe':'Ativar som de encaixe');$('sound').innerHTML=`Som <span>${soundOn?'●':'○'}</span>`;if(soundOn){lastSoundStage=-1;ping(activeStage());}};
$('followCamera').onclick=()=>setCameraAuto(!cameraAuto);
$('resetView').onclick=resetCamera;$('gridToggle').onclick=()=>{grid.visible=!grid.visible;needsRender=true;$('gridToggle').setAttribute('aria-pressed',String(grid.visible));};
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
for(const [id,kind,title] of [['housePreset','house','Minha casa'],['carPreset','car','Meu veículo'],['rocketPreset','rocket','Meu foguete']])$(id).onclick=()=>confirmReplace(`Construir: ${title.toLowerCase()}?`,()=>{change(()=>{pieces=makeExample(kind);selected=null;projectTitle=title;projectKind=kind;});resetCamera();});
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
  if(e.shiftKey){setCameraAuto(false);gesture={kind:'pan',x:e.clientX,y:e.clientY,target:cameraState.target.clone(),changed:false};return;}
  const id=mode==='edit'?pick(e.clientX,e.clientY):null;
  if(id){select(id);plane.constant=-current().pos[1];rayAt(e.clientX,e.clientY);raycaster.ray.intersectPlane(plane,hit);gesture={kind:'move',x:e.clientX,y:e.clientY,start:hit.clone(),pos:[...current().pos],changed:false};}
  else gesture={kind:'orbit',x:e.clientX,y:e.clientY,theta:cameraState.theta,phi:cameraState.phi,changed:false};
});
renderer.domElement.addEventListener('pointermove',e=>{
  if(!pointers.has(e.pointerId))return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(pointers.size===2){const [a,b]=[...pointers.values()],d=Math.hypot(a.x-b.x,a.y-b.y);if(pinchDistance>0){cameraState.zoom=clamp(cameraState.zoom*d/pinchDistance,.08,6);updateCamera();}pinchDistance=d;return;}
  if(!gesture)return;const dx=e.clientX-gesture.x,dy=e.clientY-gesture.y;if(!gesture.changed&&Math.hypot(dx,dy)<4)return;
  if(gesture.kind==='pan'){gesture.changed=true;const scale=(camera.top-camera.bottom)/camera.zoom/viewport.clientHeight;const right=new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld,0),up=new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld,1);cameraState.target.copy(gesture.target).addScaledVector(right,-dx*scale).addScaledVector(up,dy*scale);updateCamera();}
  else if(gesture.kind==='orbit'){gesture.changed=true;setCameraAuto(false);cameraState.theta=gesture.theta-dx*.007;cameraState.phi=clamp(gesture.phi-dy*.006,.2,1.5);updateCamera();}
  else if(current()){
    rayAt(e.clientX,e.clientY);if(!raycaster.ray.intersectPlane(plane,hit))return;if(!gesture.changed){remember();gesture.changed=true;}
    const quantize=n=>$('snap').checked?Math.round(n*4)/4:Math.round(n*100)/100;
    current().pos[0]=clamp(quantize(gesture.pos[0]+hit.x-gesture.start.x),-30,30);current().pos[2]=clamp(quantize(gesture.pos[2]+hit.z-gesture.start.z),-30,30);updatePose();updateInspector();
  }
});
function endPointer(e){pointers.delete(e.pointerId);if(gesture?.kind==='move'&&gesture.changed)committed();else if(gesture?.kind==='orbit'&&!gesture.changed&&mode==='edit')select(null);gesture=null;pinchDistance=0;}
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
  if(key==='escape'){select(null);return;}if(key==='delete'||key==='backspace'){e.preventDefault();deleteSelected();return;}
  const movement={ArrowLeft:[0,-1],ArrowRight:[0,1],ArrowUp:[2,-1],ArrowDown:[2,1],PageUp:[1,1],PageDown:[1,-1]}[e.key];
  if(current()&&movement){e.preventDefault();change(()=>{const [a,d]=movement;current().pos[a]=clamp(current().pos[a]+d*(e.shiftKey?1:.25),a===1?0:-30,30);});}
});
let last=performance.now(),lastUI=0;
function animate(now){requestAnimationFrame(animate);const dt=Math.min((now-last)/1000,.08);last=now;
  if(renderingManual)return;
  if(playing&&!document.hidden){time=Math.min(DURATION,time+dt*speed);updatePose();followAssembly(dt);if(now-lastUI>80){updatePlayback();lastUI=now;}ping(activeStage());if(time>=DURATION){playing=false;updatePlayback();if(embeddedProject?.autoManual&&!finalManualShown){finalManualShown=true;setTimeout(()=>{if(mode==='present'&&!document.querySelector('dialog[open]'))openManual();},700);}}}
  if(needsRender){renderer.render(scene,camera);needsRender=false;}
}
document.addEventListener('visibilitychange',()=>{last=performance.now();});
rebuild();resize();if(savedLoad||embeddedProject)resetCamera();updatePlayback();requestAnimationFrame(animate);
if(savedLoad)toast('Sua última construção foi restaurada.');
// A read-only snapshot helps inspect an exported file without exposing mutable state.
window.mono={getProject:()=>envelope(),getStatus:()=>({mode,playing,time,exploded,selected,pieceCount:pieces.length,geometryCount:geometries.size})};
if(embeddedProject?.startMode==='manual')setTimeout(openManual,150);
if(embeddedProject){document.title=projectTitle+' — Montagem interativa | MONO';document.body.classList.add('product-page');}
if(embeddedProject?.autoplay&&!matchMedia('(prefers-reduced-motion: reduce)').matches){time=0;setPlaying(true);}
})();
