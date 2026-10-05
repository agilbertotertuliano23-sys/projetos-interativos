/* SQUEMA — moldura das páginas, kit de controles, guia (mascote) e utilidades 2D.
   Scripts clássicos (sem módulos) para que tudo abra direto do disco (file://). */
(function () {
  const D = window.SQUEMA_DADOS;
  const raiz = document.body.dataset.raiz || '';
  const CONFIG = Object.assign({ ia: { endpoint: null } }, window.SQUEMA_CONFIG || {});

  const CORES = {
    amarelo: '#FFC21A', amareloEscuro: '#D98E00', laranja: '#FF9416', azul: '#1F5BE0', azulEscuro: '#1236A8',
    celeste: '#2BB4F5', celesteClaro: '#BFE8FF', verde: '#36C04A', verdeEscuro: '#1E8A30', roxo: '#8B3DFF',
    rosa: '#FF6B8A', vermelho: '#EE3B45', marrom: '#C98B4E', branco: '#FFFFFF', nevoa: '#F4F7FF', gelo: '#E6EEFF',
    tinta: '#0B1438', texto: '#16224F', suave: '#55628F', linha: '#CBD7F5',
  };

  // ---------- DOM ----------
  function el(tag, attrs, ...filhos) {
    const n = document.createElement(tag);
    if (attrs) for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === 'class') n.className = v;
      else if (k === 'html') n.innerHTML = v;
      else if (k === 'style' && typeof v === 'object') Object.assign(n.style, v);
      else if (k.startsWith('on') && typeof v === 'function') n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v === true ? '' : v);
    }
    for (const f of filhos.flat()) if (f != null && f !== false) n.append(f instanceof Node ? f : document.createTextNode(String(f)));
    return n;
  }
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const num = (v, casas = 2) => Number(v).toLocaleString('pt-BR', { maximumFractionDigits: casas, minimumFractionDigits: 0 });
  const numFixo = (v, casas = 1) => Number(v).toLocaleString('pt-BR', { maximumFractionDigits: casas, minimumFractionDigits: casas });
  const iconeArea = (area) => `${raiz}assets/icones/${(typeof area === 'string' ? D.areaPorId[area] : area).icone}`;
  const estrelas = (n) => `<span class="estrelas" aria-label="Potencial visual ${n} de 5">${'★'.repeat(n)}<span class="apagada">${'★'.repeat(5 - n)}</span></span>`;
  const maiuscula = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const semAcento = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const reduzMovimento = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- moldura (topo, órbitas, rodapé) ----------
  function moldura({ ativo = '', trilha = [] } = {}) {
    document.body.prepend(el('div', { class: 'orbitas', 'aria-hidden': 'true', html:
      '<div class="estrelinhas"></div><svg viewBox="0 0 1400 700" preserveAspectRatio="none"><ellipse cx="700" cy="330" rx="640" ry="150" transform="rotate(-6 700 330)"/><ellipse cx="760" cy="420" rx="520" ry="110" transform="rotate(5 760 420)" opacity=".5"/></svg>' }));
    const nav = el('nav', { 'aria-label': 'Principal' },
      el('a', { href: `${raiz}index.html`, 'aria-current': ativo === 'inicio' ? 'page' : null }, 'Início'),
      el('a', { href: `${raiz}index.html#areas`, 'aria-current': ativo === 'areas' ? 'page' : null }, 'Áreas'),
      el('a', { href: `${raiz}biblioteca.html`, 'aria-current': ativo === 'biblioteca' ? 'page' : null }, 'Biblioteca'));
    const trilhaEl = trilha.length ? el('div', { class: 'trilha' }, ...trilha.flatMap((t, i) => [
      i ? el('span', { 'aria-hidden': 'true' }, '›') : null,
      t.href ? el('a', { href: t.href }, t.rotulo) : el('span', { class: 'atual' }, t.rotulo)])) : null;
    document.body.prepend(el('header', { class: 'topo' },
      el('a', { class: 'marca', href: `${raiz}index.html`, 'aria-label': 'SQUEMA — início' }, el('img', { src: `${raiz}assets/marca/logo-squema.webp`, alt: 'SQUEMA', width: 158, height: 40 })),
      trilhaEl, nav));
    const pagina = el('main', { class: 'pagina', id: 'conteudo' });
    document.body.append(pagina, el('footer', { class: 'rodape' }, el('div', { class: 'conteudo' },
      el('img', { src: `${raiz}assets/marca/logo-wordmark.webp`, alt: 'SQUEMA', width: 110, height: 35 }),
      el('span', { html: `Esquemas e demonstrações de sistemas educacionais com IA · Modelos 3D livres (CC0 / CC BY) recoloridos para a marca — <a href="${raiz}biblioteca.html#creditos">créditos</a>` }))));
    return pagina;
  }

  // ---------- controles ----------
  const ui = {
    grupo(titulo, pai, extra) {
      const b = el('section', { class: 'bloco', ...(extra || {}) }, titulo ? el('h2', null, titulo) : null);
      (pai || ui._painel).append(b); return b;
    },
    slider({ rotulo, min, max, passo = 1, valor, unidade = '', casas, formatar, aoMudar, pai }) {
      const id = 'c' + Math.random().toString(36).slice(2, 8);
      const out = el('output', { for: id });
      const inp = el('input', { type: 'range', id, min, max, step: passo, value: valor });
      const fmt = formatar || ((v) => `${num(v, casas ?? (String(passo).split('.')[1] || '').length)}${unidade ? ' ' + unidade : ''}`);
      const pinta = () => { inp.style.setProperty('--p', ((inp.value - min) / (max - min)) * 100 + '%'); out.textContent = fmt(+inp.value); };
      inp.addEventListener('input', () => { pinta(); aoMudar && aoMudar(+inp.value); });
      pinta();
      const c = el('div', { class: 'ctrl' }, el('label', { for: id }, el('span', null, rotulo), out), inp);
      pai && pai.append(c);
      return { el: c, input: inp, get valor() { return +inp.value; }, set valor(v) { inp.value = v; pinta(); } };
    },
    segmentado({ rotulo, opcoes, valor, aoMudar, pai, classe = 'branco pequeno' }) {
      const linha = el('div', { class: 'segmentado', role: 'group', 'aria-label': rotulo || null });
      const botoes = opcoes.map((o) => {
        const op = typeof o === 'object' ? o : { valor: o, rotulo: o };
        const b = el('button', { type: 'button', class: `botao ${classe}`, 'aria-pressed': String(op.valor === valor), title: op.titulo || null }, op.rotulo);
        b.addEventListener('click', () => { api.valor = op.valor; aoMudar && aoMudar(op.valor); });
        b._v = op.valor; linha.append(b); return b;
      });
      const c = el('div', { class: 'ctrl' }, rotulo ? el('span', { class: 'rotulo' }, rotulo) : null, linha);
      pai && pai.append(c);
      const api = { el: c, get valor() { return valor; }, set valor(v) { valor = v; botoes.forEach((b) => b.setAttribute('aria-pressed', String(b._v === v))); } };
      return api;
    },
    select({ rotulo, opcoes, valor, aoMudar, pai }) {
      const id = 'c' + Math.random().toString(36).slice(2, 8);
      const s = el('select', { id }, ...opcoes.map((o) => {
        const op = typeof o === 'object' ? o : { valor: o, rotulo: o };
        return el('option', { value: op.valor, selected: op.valor === valor }, op.rotulo);
      }));
      s.addEventListener('change', () => aoMudar && aoMudar(s.value));
      const c = el('div', { class: 'ctrl' }, rotulo ? el('label', { for: id }, rotulo) : null, s);
      pai && pai.append(c);
      return { el: c, select: s, get valor() { return s.value; }, set valor(v) { s.value = v; } };
    },
    alternar({ rotulo, valor = false, aoMudar, pai }) {
      const inp = el('input', { type: 'checkbox', role: 'switch' }); inp.checked = valor;
      inp.addEventListener('change', () => aoMudar && aoMudar(inp.checked));
      const c = el('label', { class: 'alternar' }, el('span', null, rotulo), inp);
      pai && pai.append(c);
      return { el: c, input: inp, get valor() { return inp.checked; }, set valor(v) { inp.checked = v; } };
    },
    botao({ rotulo, classe = '', aoClicar, pai, titulo }) {
      const b = el('button', { type: 'button', class: `botao ${classe}`, title: titulo || null, html: rotulo });
      if (aoClicar) b.addEventListener('click', aoClicar);
      pai && pai.append(b); return b;
    },
    linha(pai, ...filhos) { const l = el('div', { class: 'linha-botoes' }, ...filhos); pai && pai.append(l); return l; },
    leituras(itens, pai) {
      const g = el('div', { class: 'leituras' }); const mapa = {};
      for (const it of itens) {
        const b = el('b', null, it.valor ?? '—');
        g.append(el('div', { class: 'leitura' + (it.destaque ? ' destaque' : '') }, el('small', null, it.rotulo), b));
        mapa[it.id] = b;
      }
      pai && pai.append(g);
      return { el: g, set(id, v) { if (mapa[id]) mapa[id].textContent = v; }, campo: mapa };
    },
  };

  // ---------- guia (mascote) ----------
  function guia(pai, { ola, perguntas = [], caso, padrao } = {}) {
    const msgs = el('div', { class: 'guia-msgs', 'aria-live': 'polite' });
    const chips = el('div', { class: 'guia-perguntas' });
    const inp = el('input', { type: 'text', placeholder: 'Pergunte ao guia…', 'aria-label': 'Pergunta para o guia', maxlength: 240 });
    const form = el('form', { class: 'guia-form' }, inp, el('button', { class: 'botao azul pequeno', type: 'submit' }, 'Perguntar'));
    const bloco = el('section', { class: 'bloco guia', 'aria-label': 'Guia Squema' },
      el('div', { class: 'guia-topo' },
        el('img', { src: `${raiz}assets/marca/avatar.webp`, alt: '', width: 52, height: 52 }),
        el('div', null, el('h2', null, 'Guia Squema'), el('small', null, 'Narra o que acontece na tela e responde dúvidas do caso.'))),
      msgs, chips, form,
      el('p', { class: 'guia-nota', html: CONFIG.ia.endpoint ? 'Conectado a um serviço de IA configurado em <code>SQUEMA_CONFIG.ia</code>.' : 'Modo demonstração: respostas roteirizadas para este caso. Para ligar uma IA, veja o README (seção “Guia com IA”).' }));
    pai.append(bloco);

    let ultima = null;
    const api = {
      el: bloco,
      contexto: () => ({}),
      diz(texto, { tipo = '', chave = null } = {}) {
        if (chave && ultima && ultima._chave === chave) { ultima.innerHTML = texto; ultima.className = 'guia-msg ' + tipo; }
        else {
          ultima = el('div', { class: 'guia-msg ' + tipo, html: texto }); ultima._chave = chave;
          msgs.append(ultima);
          while (msgs.children.length > 40) msgs.firstChild.remove();
        }
        msgs.scrollTop = msgs.scrollHeight;
      },
      async perguntar(texto) {
        texto = texto.trim(); if (!texto) return;
        ultima = el('div', { class: 'guia-msg aluno' }, texto); msgs.append(ultima); msgs.scrollTop = msgs.scrollHeight;
        if (CONFIG.ia.endpoint) {
          try {
            const r = await fetch(CONFIG.ia.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', ...(CONFIG.ia.cabecalhos || {}) },
              body: JSON.stringify({ caso, pergunta: texto, contexto: api.contexto() }) });
            if (!r.ok) throw new Error(r.status);
            const j = await r.json(); api.diz(esc(j.resposta || '…')); return;
          } catch (e) { api.diz('Não consegui falar com o serviço de IA agora; respondo com o roteiro local.', { tipo: 'alerta' }); }
        }
        api.diz(responderLocal(texto));
      },
    };
    function responderLocal(texto) {
      const q = semAcento(texto); let melhor = null, nota = 0;
      for (const p of perguntas) {
        const chaves = (p.chaves || semAcento(p.p).split(/\W+/).filter((w) => w.length > 3));
        const n = chaves.reduce((s, k) => s + (q.includes(semAcento(k)) ? (k.length > 5 ? 2 : 1) : 0), 0);
        if (n > nota) { nota = n; melhor = p; }
      }
      if (melhor) return typeof melhor.r === 'function' ? melhor.r(api.contexto()) : melhor.r;
      return padrao ? (typeof padrao === 'function' ? padrao(api.contexto(), texto) : padrao)
        : 'Essa ainda não está no meu roteiro. Experimente uma das perguntas sugeridas — ou mexa nos controles que eu explico o que mudou.';
    }
    for (const p of perguntas.filter((p) => !p.oculta)) {
      chips.append(el('button', { type: 'button', onclick: () => api.perguntar(p.p) }, p.p));
    }
    form.addEventListener('submit', (e) => { e.preventDefault(); api.perguntar(inp.value); inp.value = ''; });
    if (ola) api.diz(ola);
    return api;
  }

  // ---------- página de demonstração ----------
  function demo(id, cfg) {
    const s = D.sistemaPorId[id], area = D.areaPorId[s.area];
    document.title = `${s.nome} — ${area.nome} · SQUEMA`;
    document.documentElement.style.setProperty('--cor-area', area.cor);
    const pagina = moldura({ ativo: 'areas', trilha: [
      { rotulo: 'Áreas', href: `${raiz}index.html#areas` },
      { rotulo: area.nome, href: `${raiz}area.html?a=${area.id}` },
      { rotulo: s.nome }] });
    const palco = el('div', { class: 'palco', 'data-fundo': cfg.fundo || 'ceu', role: 'application', 'aria-label': `Cena interativa: ${s.nome}` });
    if (cfg.dica) {
      const dica = el('div', { class: 'palco-dica' }, cfg.dica); palco.append(dica);
      // a dica some na primeira interação com a cena (para não cobrir o conteúdo)
      palco.addEventListener('pointerdown', () => setTimeout(() => dica.classList.add('sumida'), 1500), { once: true });
    }
    const palcoBloco = el('div', { class: 'bloco palco-bloco' }, palco);
    const painel = el('aside', { class: 'painel', 'aria-label': 'Controles' });
    const btnTela = el('button', { class: 'botao branco pequeno', type: 'button', html: '⛶ Tela cheia' });
    btnTela.addEventListener('click', () => (document.fullscreenElement ? document.exitFullscreen() : palcoBloco.requestFullscreen?.()));
    pagina.append(el('div', { class: 'conteudo' },
      el('div', { class: 'demo-cabeca' },
        el('img', { class: 'icone-area', src: iconeArea(area), alt: '' }),
        el('div', null,
          el('h1', null, s.nome),
          el('div', { class: 'meta', html: `<span class="chip">${esc(area.nome)}</span>${estrelas(s.potencial)}<span class="chip claro">${esc((s.tags || []).join(' · '))}</span>` })),
        el('div', { class: 'acoes' }, el('a', { class: 'botao branco pequeno', href: '#esquema' }, 'Ver esquema'), btnTela)),
      el('div', { class: 'demo-grade' }, palcoBloco, painel),
      secaoEsquema(s, area, cfg)));

    ui._painel = painel;
    const contControles = el('div', { class: 'painel', style: { gap: '16px' } });
    painel.append(contControles);
    ui._painel = contControles;
    const g = guia(painel, { ...(cfg.guia || {}), caso: id });
    addEventListener('fullscreenchange', () => dispatchEvent(new Event('resize')));
    try {
      cfg.montar({ palco, painel: contControles, guia: g, ui, sistema: s, area });
    } catch (e) {
      console.error(e);
      palco.append(el('div', { class: 'hud-caixa', style: { position: 'absolute', inset: 'auto 12px 50px 12px' } }, 'Não foi possível iniciar esta demonstração neste navegador: ' + e.message));
    }
    return { palco, painel: contControles, guia: g };
  }

  function fluxoHTML(s, interacao) {
    const passos = [
      ['1', 'Aluno', interacao || 'Explora e muda parâmetros'],
      ['2', 'Visualização', maiuscula(s.visualizar)],
      ['3', 'Papel da IA', maiuscula(s.ia)],
      ['4', 'Aprendizagem', (s.objetivos || []).slice(0, 2).join(' · ') || '—']];
    return `<div class="fluxo">${passos.map(([n, r, t]) => `<div class="passo"><div class="rot"><i>${n}</i>${r}</div><p>${esc(t)}</p></div>`).join('')}</div>`;
  }

  function secaoEsquema(s, area, cfg) {
    const sala = cfg.sala || [];
    return el('section', { class: 'bloco esquema-caso', id: 'esquema', html: `
      <div class="flex entre"><h2 class="mb0">Esquema do caso</h2><span class="selo-status pronta">● Demo pronta</span></div>
      <p class="texto-suave" style="margin-top:6px">${esc(s.resumo || '')}</p>
      ${fluxoHTML(s, cfg.interacao || s.interacao)}
      <div class="colunas">
        <div><h3>Objetivos de aprendizagem</h3><ul>${(s.objetivos || []).map((o) => `<li>${esc(o)}</li>`).join('')}</ul>
        ${sala.length ? `<h3 style="margin-top:16px">Para usar em sala</h3><ul>${sala.map((o) => `<li>${esc(o)}</li>`).join('')}</ul>` : ''}</div>
        <div><h3>Como a IA entra aqui</h3><p>${esc(cfg.comoIA || `O guia recebe o estado da cena (valores dos controles e o que foi selecionado) e devolve explicações. Nesta versão as respostas são roteirizadas; ao configurar um serviço de IA, o mesmo contexto é enviado para gerar respostas abertas.`)}</p>
        <p class="miudo texto-suave">Área: <a href="${raiz}area.html?a=${area.id}">${esc(area.nome)}</a> · Potencial visual ${estrelas(s.potencial)}</p></div>
      </div>` });
  }

  // ---------- canvas 2D ----------
  function canvas2d(palco, desenhar) {
    const c = el('canvas'); palco.prepend(c);
    const ctx = c.getContext('2d');
    const api = { canvas: c, ctx, w: 0, h: 0, dpr: 1, redesenhar() { ctx.setTransform(api.dpr, 0, 0, api.dpr, 0, 0); desenhar && desenhar(api); } };
    function ajustar() {
      const r = palco.getBoundingClientRect();
      api.dpr = Math.min(devicePixelRatio || 1, 2); api.w = r.width; api.h = r.height;
      c.width = Math.max(1, Math.round(r.width * api.dpr)); c.height = Math.max(1, Math.round(r.height * api.dpr));
      api.redesenhar();
    }
    new ResizeObserver(ajustar).observe(palco); ajustar();
    return api;
  }

  function ponteiro(alvo, { inicio, mover, fim, hover }) {
    let ativo = false;
    const pos = (e) => { const r = alvo.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
    alvo.addEventListener('pointerdown', (e) => { ativo = inicio ? inicio(pos(e), e) !== false : true; if (ativo) alvo.setPointerCapture(e.pointerId); });
    alvo.addEventListener('pointermove', (e) => { if (ativo) mover && mover(pos(e), e); else hover && hover(pos(e), e); });
    const acabar = (e) => { if (ativo) { ativo = false; fim && fim(pos(e), e); } };
    alvo.addEventListener('pointerup', acabar); alvo.addEventListener('pointercancel', acabar);
  }

  function loop(fn) {
    let id = 0, t0 = 0, rodando = false;
    const passo = (t) => { const dt = Math.min(0.05, (t - (t0 || t)) / 1000); t0 = t; fn(dt, t / 1000); if (rodando) id = requestAnimationFrame(passo); };
    const api = {
      iniciar() { if (!rodando) { rodando = true; t0 = 0; id = requestAnimationFrame(passo); } return api; },
      parar() { rodando = false; cancelAnimationFrame(id); return api; },
      get ativo() { return rodando; },
    };
    document.addEventListener('visibilitychange', () => { if (document.hidden && rodando) { cancelAnimationFrame(id); } else if (rodando) { t0 = 0; id = requestAnimationFrame(passo); } });
    return api;
  }

  // ---------- desenho 2D no estilo da marca ----------
  const d = {
    rr(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x, y, w, h, r) : ctx.rect(x, y, w, h); },
    bloco(ctx, x, y, w, h, { cor = '#fff', r = 12, sombra = CORES.azulEscuro, esp = 2.5, alt = 4 } = {}) {
      if (alt) { ctx.fillStyle = sombra; d.rr(ctx, x, y + alt, w, h, r); ctx.fill(); }
      ctx.fillStyle = cor; d.rr(ctx, x, y, w, h, r); ctx.fill();
      ctx.lineWidth = esp; ctx.strokeStyle = CORES.tinta; ctx.stroke();
    },
    bola(ctx, x, y, r, cor, { esp = 2.5, brilho = true, contorno = CORES.tinta } = {}) {
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
      const g = ctx.createRadialGradient(x - r * .35, y - r * .4, r * .1, x, y, r);
      g.addColorStop(0, d.clarear(cor, .35)); g.addColorStop(1, cor);
      ctx.fillStyle = g; ctx.fill();
      if (esp) { ctx.lineWidth = esp; ctx.strokeStyle = contorno; ctx.stroke(); }
      if (brilho && r > 5) { ctx.beginPath(); ctx.ellipse(x - r * .35, y - r * .42, r * .32, r * .18, -0.5, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255,255,255,.65)'; ctx.fill(); }
    },
    seta(ctx, x1, y1, x2, y2, cor = CORES.tinta, esp = 3, ponta = 10) {
      const a = Math.atan2(y2 - y1, x2 - x1), L = Math.hypot(x2 - x1, y2 - y1);
      if (L < 1) return;
      const p = Math.min(ponta, L * 0.6);
      ctx.strokeStyle = cor; ctx.fillStyle = cor; ctx.lineWidth = esp; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2 - Math.cos(a) * p * .8, y2 - Math.sin(a) * p * .8); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x2, y2);
      ctx.lineTo(x2 - Math.cos(a - .45) * p, y2 - Math.sin(a - .45) * p); ctx.lineTo(x2 - Math.cos(a + .45) * p, y2 - Math.sin(a + .45) * p);
      ctx.closePath(); ctx.fill();
    },
    texto(ctx, t, x, y, { cor = CORES.tinta, tam = 14, peso = 800, alinhar = 'left', base = 'alphabetic', fonte = 'var', contorno = null, esp = 4 } = {}) {
      ctx.font = `${peso} ${tam}px ${fonte === 'titulo' ? '"Baloo 2", "Trebuchet MS", sans-serif' : fonte === 'mono' ? 'ui-monospace, Consolas, monospace' : 'Nunito, "Segoe UI", system-ui, sans-serif'}`;
      ctx.textAlign = alinhar; ctx.textBaseline = base;
      if (contorno) { ctx.lineWidth = esp; ctx.strokeStyle = contorno; ctx.lineJoin = 'round'; ctx.strokeText(t, x, y); }
      ctx.fillStyle = cor; ctx.fillText(t, x, y);
    },
    etiqueta(ctx, t, x, y, { cor = '#fff', texto = CORES.tinta, tam = 12, alinhar = 'center' } = {}) {
      ctx.font = `800 ${tam}px Nunito, "Segoe UI", system-ui, sans-serif`;
      const w = ctx.measureText(t).width + 14, h = tam + 10;
      const x0 = alinhar === 'center' ? x - w / 2 : alinhar === 'right' ? x - w : x;
      d.bloco(ctx, x0, y - h / 2, w, h, { cor, r: 8, alt: 2, esp: 2, sombra: 'rgba(11,20,56,.35)' });
      d.texto(ctx, t, x0 + w / 2, y + 1, { cor: texto, tam, alinhar: 'center', base: 'middle' });
      return w;
    },
    clarear(hex, f) {
      const n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
      const m = (c) => Math.round(c + (255 - c) * f);
      return `rgb(${m(r)},${m(g)},${m(b)})`;
    },
    escurecer(hex, f) {
      const n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
      const m = (c) => Math.round(c * (1 - f));
      return `rgb(${m(r)},${m(g)},${m(b)})`;
    },
    grade(ctx, w, h, passo, cor = '#E3EAFA') {
      ctx.strokeStyle = cor; ctx.lineWidth = 1; ctx.beginPath();
      for (let x = (w / 2) % passo; x < w; x += passo) { ctx.moveTo(x + .5, 0); ctx.lineTo(x + .5, h); }
      for (let y = (h / 2) % passo; y < h; y += passo) { ctx.moveTo(0, y + .5); ctx.lineTo(w, y + .5); }
      ctx.stroke();
    },
  };

  // ---------- gráficos (eixos cartesianos) ----------
  // Passo "redondo" (1, 2 ou 5 × 10^n) para dividir um intervalo em ~alvo partes.
  function passoBonito(intervalo, alvo = 8) {
    const bruto = intervalo / alvo, p = 10 ** Math.floor(Math.log10(bruto || 1)), k = bruto / p;
    return (k < 1.5 ? 1 : k < 3.5 ? 2 : k < 7.5 ? 5 : 10) * p;
  }
  // Vista: liga um retângulo da tela (area) a um domínio do mundo (dom).
  function vista(dom, area) {
    const v = {
      dom: { ...dom }, area: { ...area },
      X: (x) => v.area.x + ((x - v.dom.x0) / (v.dom.x1 - v.dom.x0)) * v.area.w,
      Y: (y) => v.area.y + v.area.h - ((y - v.dom.y0) / (v.dom.y1 - v.dom.y0)) * v.area.h,
      ix: (px) => v.dom.x0 + ((px - v.area.x) / v.area.w) * (v.dom.x1 - v.dom.x0),
      iy: (py) => v.dom.y0 + ((v.area.y + v.area.h - py) / v.area.h) * (v.dom.y1 - v.dom.y0),
      dentro: (px, py) => px >= v.area.x && px <= v.area.x + v.area.w && py >= v.area.y && py <= v.area.y + v.area.h,
      // Zoom em torno de um ponto da tela (fator > 1 aproxima).
      zoom(fator, px, py) {
        const cx = v.ix(px), cy = v.iy(py);
        v.dom = { x0: cx + (v.dom.x0 - cx) / fator, x1: cx + (v.dom.x1 - cx) / fator, y0: cy + (v.dom.y0 - cy) / fator, y1: cy + (v.dom.y1 - cy) / fator };
      },
      arrastar(dpx, dpy) {
        const kx = (v.dom.x1 - v.dom.x0) / v.area.w, ky = (v.dom.y1 - v.dom.y0) / v.area.h;
        v.dom.x0 -= dpx * kx; v.dom.x1 -= dpx * kx; v.dom.y0 += dpy * ky; v.dom.y1 += dpy * ky;
      },
      // Desenha y = f(x), quebrando a linha em descontinuidades e fora da área.
      curva(ctx, f, { cor = CORES.azul, esp = 3.5, tracejado = null, x0 = v.dom.x0, x1 = v.dom.x1, passos = 600 } = {}) {
        ctx.save(); ctx.beginPath(); ctx.rect(v.area.x, v.area.y, v.area.w, v.area.h); ctx.clip();
        ctx.strokeStyle = cor; ctx.lineWidth = esp; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; if (tracejado) ctx.setLineDash(tracejado);
        ctx.beginPath(); let ant = null;
        const lim = (v.dom.y1 - v.dom.y0) * 4;
        for (let i = 0; i <= passos; i++) {
          const x = x0 + ((x1 - x0) * i) / passos, y = f(x);
          const ok = Number.isFinite(y) && y > v.dom.y0 - lim && y < v.dom.y1 + lim;
          if (ok && ant !== null && Math.abs(y - ant) < lim / 2) ctx.lineTo(v.X(x), v.Y(y)); else if (ok) ctx.moveTo(v.X(x), v.Y(y));
          ant = ok ? y : null;
        }
        ctx.stroke(); ctx.restore();
      },
    };
    return v;
  }
  function eixos(ctx, v, { grade = true, nomeX = 'x', nomeY = 'y', fmtX, fmtY, fundo = '#fff', corEixo = CORES.tinta, alvoX = 8, alvoY = 6, eixoNaBorda = false } = {}) {
    const { x, y, w, h } = v.area, { x0, x1, y0, y1 } = v.dom;
    ctx.save();
    if (fundo) { ctx.fillStyle = fundo; ctx.fillRect(x, y, w, h); }
    const px = passoBonito(x1 - x0, alvoX), py = passoBonito(y1 - y0, alvoY);
    const fx = fmtX || ((t) => num(t, 3)), fy = fmtY || ((t) => num(t, 3));
    ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
    if (grade) {
      ctx.strokeStyle = '#E3EAFA'; ctx.lineWidth = 1; ctx.beginPath();
      for (let gx = Math.ceil(x0 / px) * px; gx <= x1; gx += px) { ctx.moveTo(Math.round(v.X(gx)) + 0.5, y); ctx.lineTo(Math.round(v.X(gx)) + 0.5, y + h); }
      for (let gy = Math.ceil(y0 / py) * py; gy <= y1; gy += py) { ctx.moveTo(x, Math.round(v.Y(gy)) + 0.5); ctx.lineTo(x + w, Math.round(v.Y(gy)) + 0.5); }
      ctx.stroke();
    }
    const ax = eixoNaBorda ? y + h : Math.min(y + h, Math.max(y, v.Y(0))), ay = eixoNaBorda ? x : Math.min(x + w, Math.max(x, v.X(0)));
    ctx.strokeStyle = corEixo; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x, ax); ctx.lineTo(x + w, ax); ctx.moveTo(ay, y); ctx.lineTo(ay, y + h); ctx.stroke();
    ctx.font = '700 11px Nunito, "Segoe UI", system-ui, sans-serif'; ctx.fillStyle = CORES.suave;
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    for (let gx = Math.ceil(x0 / px) * px; gx <= x1; gx += px) { if (Math.abs(gx) < px / 1e6 && !eixoNaBorda) continue; const t = fx(Math.abs(gx) < px / 1e6 ? 0 : gx); ctx.fillText(t, v.X(gx), Math.min(y + h - 14, ax + 4)); }
    ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
    for (let gy = Math.ceil(y0 / py) * py; gy <= y1; gy += py) { if (Math.abs(gy) < py / 1e6 && !eixoNaBorda) continue; const t = fy(Math.abs(gy) < py / 1e6 ? 0 : gy); ctx.fillText(t, Math.max(x + 30, ay - 5), v.Y(gy)); }
    ctx.restore();
    ctx.font = '800 12px Nunito, "Segoe UI", system-ui, sans-serif'; ctx.fillStyle = corEixo;
    ctx.textAlign = 'right'; ctx.textBaseline = 'bottom'; ctx.fillText(nomeX, x + w - 4, ax - 4);
    ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.fillText(nomeY, ay + 6, y + 4);
    ctx.lineWidth = 2.5; ctx.strokeStyle = corEixo; d.rr(ctx, x, y, w, h, 10); ctx.stroke();
  }
  d.eixos = eixos;

  // Som curto sintetizado (sem arquivos de áudio).
  let audioCtx = null;
  function som(freq = 660, dur = 0.12, tipo = 'sine', vol = 0.08) {
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const o = audioCtx.createOscillator(), g = audioCtx.createGain();
      o.type = tipo; o.frequency.value = freq; g.gain.value = vol;
      g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur);
      o.connect(g).connect(audioCtx.destination); o.start(); o.stop(audioCtx.currentTime + dur);
    } catch (e) { /* sem áudio disponível */ }
  }
  function falar(texto, lang = 'en-US') {
    if (!('speechSynthesis' in window)) return false;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(texto); u.lang = lang; u.rate = 0.9;
    speechSynthesis.speak(u); return true;
  }

  window.SQ = {
    raiz, dados: D, CORES, CONFIG, el, esc, num, numFixo, iconeArea, estrelas, maiuscula, semAcento, reduzMovimento,
    moldura, ui, guia, demo, fluxoHTML, canvas2d, ponteiro, loop, d, som, falar, vista, passoBonito,
  };
})();
