/* SQUEMA 3D — cena padrão (luz, câmera, órbita, rótulos), materiais "brinquedo
   brilhante", contorno azul-tinta (como nos ícones) e carregamento dos modelos
   livres embutidos em assets/modelos/*.js. Depende de vendor/three.squema.js. */
(function () {
  const T = window.THREE;
  const PAL = {
    amarelo: 0xFFC21A, laranja: 0xFF9416, azul: 0x1F5BE0, azulEscuro: 0x1236A8, celeste: 0x2BB4F5,
    verde: 0x36C04A, roxo: 0x8B3DFF, rosa: 0xFF6B8A, vermelho: 0xEE3B45, marrom: 0xC98B4E,
    branco: 0xF4F7FF, tinta: 0x0B1438, gelo: 0xE6EEFF, ardosia: 0x5D6B94,
  };

  function suportaWebGL() {
    try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; }
  }

  // ---------- cena ----------
  function cena(palco, o = {}) {
    if (!suportaWebGL()) throw new Error('WebGL indisponível');
    const renderer = new T.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: !!o.captura });
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
    renderer.outputColorSpace = T.SRGBColorSpace;
    renderer.toneMapping = T.ACESFilmicToneMapping;
    renderer.toneMappingExposure = o.exposicao ?? 1.0;
    renderer.shadowMap.enabled = o.sombras !== false;
    renderer.shadowMap.type = T.PCFSoftShadowMap;
    palco.prepend(renderer.domElement);

    const scene = new T.Scene();
    const pmrem = new T.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new T.RoomEnvironment(), 0.04).texture;
    scene.environmentIntensity = o.ambiente ?? 0.6;
    if (o.neblina) scene.fog = new T.Fog(o.neblina[0], o.neblina[1], o.neblina[2]);

    const camera = new T.PerspectiveCamera(o.fov ?? 42, 1, o.perto ?? 0.1, o.longe ?? 500);
    camera.position.set(...(o.camera || [6, 5, 8]));
    const controls = new T.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; controls.dampingFactor = 0.08;
    controls.target.set(...(o.alvo || [0, 0, 0]));
    if (o.distancia) { controls.minDistance = o.distancia[0]; controls.maxDistance = o.distancia[1]; }
    if (o.polarMax != null) controls.maxPolarAngle = o.polarMax;
    controls.enablePan = o.pan ?? true;
    if (o.autoGirar) { controls.autoRotate = true; controls.autoRotateSpeed = o.autoGirar; }

    const hemi = new T.HemisphereLight(o.ceu ?? 0xE4F1FF, o.solo ?? 0x23347A, o.hemi ?? 1.0);
    const sol = new T.DirectionalLight(0xFFF3DD, o.sol ?? 2.4);
    sol.position.set(...(o.solPos || [6, 11, 7]));
    sol.castShadow = renderer.shadowMap.enabled;
    const r = o.sombraRaio ?? 10;
    Object.assign(sol.shadow.camera, { left: -r, right: r, top: r, bottom: -r, near: 0.5, far: 60 });
    sol.shadow.mapSize.set(2048, 2048); sol.shadow.bias = -0.0004; sol.shadow.normalBias = 0.02;
    const contra = new T.DirectionalLight(0x8EC4FF, o.contra ?? 1.1);
    contra.position.set(-7, 5, -8);
    scene.add(hemi, sol, sol.target, contra);

    const rotulos = new T.CSS2DRenderer();
    rotulos.domElement.className = 'camada-rotulos';
    palco.append(rotulos.domElement);

    function ajustar() {
      const b = palco.getBoundingClientRect();
      if (!b.width || !b.height) return;
      renderer.setSize(b.width, b.height, false);
      renderer.domElement.style.width = '100%'; renderer.domElement.style.height = '100%';
      rotulos.setSize(b.width, b.height);
      camera.aspect = b.width / b.height; camera.updateProjectionMatrix();
    }
    new ResizeObserver(ajustar).observe(palco); ajustar();

    const tarefas = [], tweens = [];
    const relogio = new T.Clock();
    let pausado = false;
    renderer.setAnimationLoop(() => {
      const bruto = relogio.getDelta(), dt = Math.min(bruto, 0.05), t = relogio.elapsedTime;
      if (pausado) return;
      for (let i = tweens.length - 1; i >= 0; i--) {
        const tw = tweens[i]; tw.t += Math.min(bruto, 0.25); // transições seguem o relógio real
        const k = Math.min(1, tw.t / tw.dur), e = tw.ease(k);
        tw.passo(e);
        if (k >= 1) { tweens.splice(i, 1); tw.fim(); }
      }
      for (const f of tarefas) f(dt, t);
      controls.update();
      renderer.render(scene, camera);
      rotulos.render(scene, camera);
    });
    document.addEventListener('visibilitychange', () => { pausado = document.hidden; relogio.getDelta(); });

    // clique (sem arrastar) e hover sobre objetos
    const ray = new T.Raycaster(), ptr = new T.Vector2();
    function acertar(e, alvos) {
      const b = renderer.domElement.getBoundingClientRect();
      ptr.set(((e.clientX - b.left) / b.width) * 2 - 1, -((e.clientY - b.top) / b.height) * 2 + 1);
      ray.setFromCamera(ptr, camera);
      const lista = typeof alvos === 'function' ? alvos() : alvos;
      const hits = ray.intersectObjects(lista, true);
      for (const h of hits) {
        let o = h.object;
        if (o.userData.ehContorno || !o.visible) continue;
        while (o && !lista.includes(o)) o = o.parent;
        if (o) return { obj: o, hit: h };
      }
      return null;
    }
    function escolher(alvos, aoEscolher, { aoPassar } = {}) {
      let ini = null;
      const el = renderer.domElement;
      el.addEventListener('pointerdown', (e) => { ini = [e.clientX, e.clientY]; });
      el.addEventListener('pointerup', (e) => {
        if (!ini || Math.hypot(e.clientX - ini[0], e.clientY - ini[1]) > 6) return;
        const a = acertar(e, alvos); aoEscolher(a ? a.obj : null, a ? a.hit : null, e);
      });
      el.addEventListener('pointermove', (e) => {
        if (e.buttons) return;
        const a = acertar(e, alvos); el.style.cursor = a ? 'pointer' : '';
        aoPassar && aoPassar(a ? a.obj : null, a ? a.hit : null);
      });
    }

    const EASE = { suave: (k) => k * k * (3 - 2 * k), saida: (k) => 1 - (1 - k) ** 3, linear: (k) => k, mola: (k) => 1 - Math.cos(k * Math.PI * 2.5) * Math.exp(-5 * k) };
    function tween(dur, passo, { ease = 'suave' } = {}) {
      return new Promise((fim) => tweens.push({ t: 0, dur: Math.max(dur, 0.001), passo, fim, ease: EASE[ease] || ease }));
    }
    function voarPara(pos, alvo, dur = 1.1) {
      const p0 = camera.position.clone(), a0 = controls.target.clone();
      const p1 = new T.Vector3(...pos), a1 = new T.Vector3(...alvo);
      return tween(dur, (k) => { camera.position.lerpVectors(p0, p1, k); controls.target.lerpVectors(a0, a1, k); });
    }

    return {
      renderer, scene, camera, controls, rotulos, sol, hemi, contra,
      aoQuadro(f) { tarefas.push(f); return f; },
      remover(f) { const i = tarefas.indexOf(f); if (i >= 0) tarefas.splice(i, 1); },
      escolher, acertar, tween, voarPara,
      get pausado() { return pausado; },
    };
  }

  // ---------- materiais ----------
  function mat(cor, o = {}) {
    return new T.MeshPhysicalMaterial({
      color: cor, roughness: o.rugosidade ?? 0.36, metalness: o.metal ?? 0,
      clearcoat: o.verniz ?? 0.65, clearcoatRoughness: o.vernizRugosidade ?? 0.22,
      transparent: o.opacidade != null && o.opacidade < 1, opacity: o.opacidade ?? 1,
      emissive: o.emissivo ?? 0x000000, emissiveIntensity: o.emissivoForca ?? 1,
      side: o.lados ?? T.FrontSide, flatShading: !!o.facetado, depthWrite: o.depthWrite ?? true,
    });
  }

  // Material translúcido com borda escura por fresnel: o contorno por casco
  // invertido não funciona em objetos transparentes (o verso escuro aparece através).
  function matBolha(cor, { opacidade = 0.3, borda = 0.82, lados = T.DoubleSide } = {}) {
    const m = new T.MeshPhysicalMaterial({ color: cor, transparent: true, opacity: opacidade, roughness: 0.18, clearcoat: 1, side: lados, depthWrite: false });
    m.onBeforeCompile = (sh) => {
      sh.fragmentShader = sh.fragmentShader.replace('#include <dithering_fragment>', `#include <dithering_fragment>
        float rimS = 1.0 - abs(dot(normalize(normal), normalize(vViewPosition)));
        float linhaS = smoothstep(${borda.toFixed(3)}, ${(borda + 0.07).toFixed(3)}, rimS);
        gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.043, 0.078, 0.22), linhaS);
        gl_FragColor.a = max(gl_FragColor.a, linhaS * 0.95 * min(1.0, opacity * 6.0));`);
    };
    m.customProgramCacheKey = () => 'squema-bolha-' + borda;
    return m;
  }

  function converterMaterial(m) {
    if (!m || m.userData.squema) return m;
    const n = new T.MeshPhysicalMaterial({ roughness: 0.45, metalness: 0, clearcoat: 0.45, clearcoatRoughness: 0.3 });
    for (const k of ['name', 'map', 'vertexColors', 'flatShading', 'transparent', 'opacity', 'alphaTest', 'side', 'normalMap', 'emissiveMap', 'aoMap', 'alphaMap']) if (m[k] !== undefined) n[k] = m[k];
    if (m.color) n.color.copy(m.color);
    if (m.emissive) n.emissive.copy(m.emissive);
    n.userData.squema = true;
    return n;
  }

  // Material do traço: empurra os vértices ao longo da normal e desenha só o verso.
  function materialContorno(cor, espessura) {
    const m = new T.MeshBasicMaterial({ color: cor, side: T.BackSide });
    m.onBeforeCompile = (sh) => {
      sh.uniforms.uEspessura = { value: espessura };
      sh.vertexShader = 'uniform float uEspessura;\n' + sh.vertexShader.replace('#include <begin_vertex>',
        '#include <begin_vertex>\n  transformed += normalize(normal) * uEspessura;');
    };
    m.customProgramCacheKey = () => 'squema-contorno';
    return m;
  }

  // Malhas com esqueleto só têm caixa correta depois que as matrizes dos ossos
  // são calculadas (normalmente isso só acontece no primeiro render).
  function atualizarEsqueletos(obj) {
    obj.updateWorldMatrix(true, false);
    obj.updateMatrixWorld(true); // (updateWorldMatrix não atualiza bindMatrixInverse das SkinnedMesh)
    obj.traverse((m) => {
      if (!m.isSkinnedMesh) return;
      m.skeleton.update(); m.computeBoundingBox(); m.computeBoundingSphere();
      m.frustumCulled = false; // a pose animada sai da esfera calculada na pose inicial
    });
  }

  // Casco invertido: uma cópia levemente "inflada" pelo verso desenha o traço escuro.
  const cascos = new WeakMap();
  function contorno(obj, espessura = 0.03, cor = PAL.tinta) {
    atualizarEsqueletos(obj);
    const meshes = [];
    obj.traverse((m) => { if (m.isMesh && !m.userData.ehContorno && !m.userData.semContorno) meshes.push(m); });
    for (const m of meshes) {
      let g = cascos.get(m.geometry);
      if (!g) {
        g = m.geometry.clone();
        for (const k of Object.keys(g.attributes)) if (!['position', 'skinIndex', 'skinWeight'].includes(k)) g.deleteAttribute(k);
        g.morphAttributes = {};
        try { g = T.mergeVertices(g, 1e-4); } catch (e) { /* mantém normais originais */ }
        g.computeVertexNormals();
        cascos.set(m.geometry, g);
      }
      // Escala efetiva = tamanho no mundo / tamanho da geometria crua. Cobre nós
      // escalados, malhas quantizadas e malhas com esqueleto (escala nos ossos).
      m.geometry.computeBoundingBox();
      const caixaMundo = (m.isSkinnedMesh ? m.boundingBox : m.geometry.boundingBox).clone();
      caixaMundo.applyMatrix4(m.matrixWorld);
      const escala = caixaMundo.getSize(new T.Vector3()).length() / (m.geometry.boundingBox.getSize(new T.Vector3()).length() || 1) || 1;
      const matC = materialContorno(cor, espessura / escala);
      const casco = m.isSkinnedMesh ? new T.SkinnedMesh(g, matC) : new T.Mesh(g, matC);
      if (m.isSkinnedMesh) casco.bind(m.skeleton, m.bindMatrix);
      casco.userData.ehContorno = true;
      casco.raycast = () => {};
      casco.castShadow = false; casco.receiveShadow = false;
      casco.frustumCulled = m.frustumCulled;
      m.add(casco);
    }
    return obj;
  }

  function estilizar(obj, { contorno: esp = 0.025, sombra = true, cor } = {}) {
    obj.traverse((m) => {
      if (!m.isMesh || m.userData.ehContorno) return;
      m.castShadow = sombra; m.receiveShadow = sombra;
      if (m.isSkinnedMesh) m.frustumCulled = false;
      m.material = Array.isArray(m.material) ? m.material.map(converterMaterial) : converterMaterial(m.material);
      if (cor != null && !Array.isArray(m.material)) m.material.color.set(cor);
    });
    if (esp) contorno(obj, esp);
    return obj;
  }

  // ---------- modelos livres embutidos ----------
  const scripts = {};
  function garantirScript(src) {
    return (scripts[src] ??= new Promise((ok, falha) => {
      const s = document.createElement('script'); s.src = src; s.onload = ok;
      s.onerror = () => falha(new Error('não carregou ' + src));
      document.head.append(s);
    }));
  }
  function base64ParaBuffer(b64) {
    const bin = atob(b64), u = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
    return u.buffer;
  }
  const gltfs = {};
  function carregarModelo(id) {
    return (gltfs[id] ??= (async () => {
      if (!window.SQUEMA_MODELOS?.[id]) await garantirScript(`${window.SQ ? SQ.raiz : ''}assets/modelos/${id}.js`);
      const m = window.SQUEMA_MODELOS[id];
      const g = await new T.GLTFLoader().parseAsync(base64ParaBuffer(m.glb), '');
      g.meta = m;
      return g;
    })());
  }
  // Cópia independente (inclusive esqueleto), já estilizada e com altura/maior lado normalizados.
  async function instancia(id, { tamanho, porAltura = false, estilo = {}, apoiar = true } = {}) {
    const g = await carregarModelo(id);
    const obj = T.SkeletonUtils.clone(g.scene);
    if (tamanho) normalizar(obj, tamanho, { porAltura, apoiar });
    estilizar(obj, estilo);
    const mixer = g.animations.length ? new T.AnimationMixer(obj) : null;
    const acoes = {};
    if (mixer) for (const a of g.animations) acoes[a.name] = mixer.clipAction(a);
    return { obj, mixer, acoes, animacoes: g.animations, meta: g.meta };
  }
  function normalizar(obj, tamanho, { porAltura = false, apoiar = true } = {}) {
    atualizarEsqueletos(obj);
    const caixa = new T.Box3().setFromObject(obj), dim = caixa.getSize(new T.Vector3());
    const ref = porAltura ? dim.y : Math.max(dim.x, dim.y, dim.z);
    const k = tamanho / (ref || 1);
    obj.scale.multiplyScalar(k);
    atualizarEsqueletos(obj);
    const c2 = new T.Box3().setFromObject(obj), centro = c2.getCenter(new T.Vector3());
    obj.position.x -= centro.x; obj.position.z -= centro.z;
    obj.position.y -= apoiar ? c2.min.y : centro.y;
    return obj;
  }

  // ---------- peças comuns ----------
  function rotulo(texto, { classe = '', aoClicar, html = false } = {}) {
    const div = document.createElement('div');
    div.className = 'rotulo-3d ' + classe + (aoClicar ? ' clicavel' : '');
    if (html) div.innerHTML = texto; else div.textContent = texto;
    if (aoClicar) div.addEventListener('click', aoClicar);
    const o = new T.CSS2DObject(div);
    o.center.set(0.5, 1);
    return o;
  }

  function chao(raio = 8, cor = 0xEAF2FF, { altura = 0.4, borda = PAL.azul } = {}) {
    const g = new T.Group();
    const topo = new T.Mesh(new T.CylinderGeometry(raio, raio, altura, 72), mat(cor, { verniz: 0.2, rugosidade: 0.7 }));
    topo.position.y = -altura / 2; topo.receiveShadow = true;
    const lado = new T.Mesh(new T.CylinderGeometry(raio * 1.002, raio * 1.002, altura * 1.6, 72, 1, true), mat(borda, { lados: T.DoubleSide }));
    lado.position.y = -altura * 0.9;
    g.add(topo, lado);
    contorno(g, 0.04);
    return g;
  }

  // Remove da cena e apaga do DOM os rótulos HTML aninhados (o three.js só limpa
  // o rótulo quando ele próprio é removido, não quando sai junto com o pai).
  function remover(obj) {
    if (!obj) return;
    obj.parent && obj.parent.remove(obj);
    obj.traverse((o) => { if (o.isCSS2DObject && o.element.parentNode) o.element.remove(); });
  }
  function limpar(grupo) { [...grupo.children].forEach(remover); }

  function texturaCanvas(w, h, desenhar) {
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    desenhar(c.getContext('2d'), w, h);
    const t = new T.CanvasTexture(c); t.colorSpace = T.SRGBColorSpace; t.anisotropy = 4;
    return t;
  }

  window.S3D = { T, PAL, suportaWebGL, cena, mat, matBolha, contorno, estilizar, converterMaterial, carregarModelo, instancia, normalizar, rotulo, chao, texturaCanvas, garantirScript, remover, limpar };
})();
