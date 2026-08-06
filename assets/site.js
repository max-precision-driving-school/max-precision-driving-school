/* ============================================================================
   MAX PRECISION DRIVING SCHOOL — comportamiento compartido
   Módulos independientes, cada uno con guarda de existencia:
   si uno falla, los demás siguen vivos.
   ============================================================================ */

/* ── CONFIG — lo único que la escuela necesita tocar ─────────────────────── */
const CONFIG = {
  phone:      '+19177348361',
  phoneLabel: '(917) 734-8361',
  whatsapp:   '19177348361',
  waText:     "Hi, I saw your website and I'd like to book driving lessons.",
  waTextEs:   'Hola, vi su página web y quisiera reservar clases de manejo.',
  email:      '',            // ← si la escuela da un correo, va aquí
  formEndpoint: '',          // ← endpoint del formulario; vacío = entrega por WhatsApp
  dmvSchool:  '11886'
};

/* ── i18n ────────────────────────────────────────────────────────────────── */
(function(){
  const nodes = document.querySelectorAll('[data-en]');
  const btns  = document.querySelectorAll('.lang button');
  if(!btns.length) return;
  const dec = s => { const t = document.createElement('textarea'); t.innerHTML = s; return t.value; };

  function apply(lang){
    nodes.forEach(n => {
      const v = n.getAttribute('data-' + lang);
      if(v != null) n.innerHTML = dec(v);
    });
    document.documentElement.lang = lang === 'es' ? 'es-US' : 'en';
    btns.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    const txt = encodeURIComponent(lang === 'es' ? CONFIG.waTextEs : CONFIG.waText);
    document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
      a.href = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + txt;
    });
    try{ localStorage.setItem('mp-lang', lang); }catch(e){}
    // cambiar de idioma reescribe nodos: re-asegurar que nada quede invisible
    if(window.__mpReveal) window.__mpReveal();
  }

  btns.forEach(b => b.addEventListener('click', () => apply(b.dataset.lang)));
  let saved = null;
  try{ saved = localStorage.getItem('mp-lang'); }catch(e){}
  if(!saved && (navigator.language || '').toLowerCase().startsWith('es')) saved = 'es';
  if(saved === 'es') apply('es');
})();

/* ── revelado: mejora progresiva, jamás requisito ────────────────────────── */
(function(){
  const els = document.querySelectorAll('.rv');
  if(!els.length) return;
  const show = el => el.classList.add('in');
  if(!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion:reduce)').matches){
    els.forEach(show); return;
  }
  const io = new IntersectionObserver((es,o) => {
    es.forEach(e => { if(e.isIntersecting){ show(e.target); o.unobserve(e.target); } });
  },{rootMargin:'0px 0px -8% 0px',threshold:.02});

  // barrido de seguridad: lo que ya está en pantalla o quedó arriba se muestra YA
  function sweep(){
    document.querySelectorAll('.rv:not(.in)').forEach(el => {
      if(el.getBoundingClientRect().top < innerHeight * .94) show(el);
    });
  }
  window.__mpReveal = sweep;
  els.forEach((el,i) => {
    el.style.transitionDelay = (i % 4) * 70 + 'ms';
    if(el.getBoundingClientRect().top < innerHeight * .94){ show(el); return; }
    io.observe(el);
  });
  addEventListener('scroll', () => requestAnimationFrame(sweep), {passive:true});
  addEventListener('load', sweep);
})();

/* ── menú móvil ──────────────────────────────────────────────────────────── */
(function(){
  const b = document.getElementById('burger'), n = document.getElementById('nav');
  if(!b || !n) return;
  const close = () => { n.classList.remove('open'); b.setAttribute('aria-expanded','false'); };
  b.addEventListener('click', () => {
    b.setAttribute('aria-expanded', String(n.classList.toggle('open')));
  });
  n.addEventListener('click', e => { if(e.target.tagName === 'A') close(); });
  addEventListener('keydown', e => { if(e.key === 'Escape') close(); });
  addEventListener('resize', () => { if(innerWidth > 860) close(); });
})();

/* ── header: se opaca al hacer scroll ────────────────────────────────────── */
(function(){
  const h = document.querySelector('.hdr');
  if(!h) return;
  let tick = false;
  const upd = () => { h.classList.toggle('stuck', scrollY > 12); tick = false; };
  addEventListener('scroll', () => { if(!tick){ tick = true; requestAnimationFrame(upd); } }, {passive:true});
  upd();
})();

/* ── carrusel infinito de reseñas ────────────────────────────────────────
   Se clona el set completo: hay 2 sets, así que -50% cae exactamente donde
   empezó y el bucle no salta. La duración se calcula según cuántas hay.      */
(function(){
  document.querySelectorAll('[data-marq]').forEach(marq => {
    const track = marq.querySelector('.marq-track');
    const set = marq.querySelector('.marq-set');
    if(!track || !set) return;
    const n = set.children.length;
    if(!n) return;
    const clone = set.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');           // no se anuncia dos veces
    clone.querySelectorAll('a,button').forEach(el => el.setAttribute('tabindex','-1'));
    track.appendChild(clone);
    track.style.setProperty('--dur', (n * 11) + 's');    // ~11s por reseña
  });
})();

/* ── vídeos: autoplay silencioso, se pausan fuera de pantalla ────────────── */
(function(){
  const vids = document.querySelectorAll('video[data-auto]');
  if(!vids.length) return;
  if(matchMedia('(prefers-reduced-motion:reduce)').matches) return;   // queda el poster
  const play = v => { const p = v.play(); if(p && p.catch) p.catch(()=>{}); };
  if(!('IntersectionObserver' in window)){ vids.forEach(play); return; }
  const io = new IntersectionObserver(es => {
    es.forEach(e => {
      const v = e.target;
      if(e.isIntersecting){
        if(v.preload === 'none'){ v.preload = 'auto'; v.load(); }
        play(v);
      } else v.pause();
    });
  },{threshold:.12,rootMargin:'200px'});
  vids.forEach(v => io.observe(v));
})();

/* ── formulario ──────────────────────────────────────────────────────────── */
(function(){
  const f = document.getElementById('lead');
  if(!f) return;
  const out = document.getElementById('f-out');
  const btn = document.getElementById('f-send');
  const es  = () => document.documentElement.lang.startsWith('es');

  const T = {
    reqName:  ['Please tell us your name.', 'Dinos tu nombre, por favor.'],
    reqEmail: ['We need an email to reply to you.', 'Necesitamos un correo para responderte.'],
    badEmail: ['That email address looks incomplete.', 'Ese correo se ve incompleto.'],
    badPhone: ['That phone number looks incomplete.', 'Ese teléfono se ve incompleto.'],
    reqMsg:   ['Tell us how we can help.', 'Cuéntanos en qué podemos ayudarte.'],
    sending:  ['Sending…', 'Enviando…'],
    send:     ['Submit', 'Enviar'],
    okMsg:    ['Thanks — opening WhatsApp so we get your message right away.', 'Gracias — abrimos WhatsApp para que recibamos tu mensaje enseguida.'],
    okSent:   ['Thanks! We got it. We will get back to you.', '¡Gracias! Lo recibimos. Te vamos a contactar.'],
    failMsg:  ['We could not send it. Tap here to message us on WhatsApp instead.', 'No pudimos enviarlo. Toca aquí para escribirnos por WhatsApp.']
  };
  const t = k => T[k][es() ? 1 : 0];

  function setErr(el, msg){
    const box = f.querySelector('[data-err="' + el.id + '"]');
    if(box) box.textContent = msg || '';
    el.setAttribute('aria-invalid', msg ? 'true' : 'false');
    return !msg;
  }
  const q = id => f.querySelector('#' + id);
  const vName  = () => setErr(q('f-name'), q('f-name').value.trim() ? '' : t('reqName'));
  const vEmail = () => {
    const el = q('f-email'); if(!el) return true;
    const v = el.value.trim();
    if(!v) return setErr(el, t('reqEmail'));
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return setErr(el, t('badEmail'));
    return setErr(el, '');
  };
  const vPhone = () => {                       // opcional en el form original
    const el = q('f-phone'); if(!el) return true;
    const d = el.value.replace(/\D/g,'');
    if(d && d.length < 10) return setErr(el, t('badPhone'));
    return setErr(el, '');
  };
  const vMsg = () => { const el = q('f-msg'); if(!el) return true;
    return setErr(el, el.value.trim() ? '' : t('reqMsg')); };

  ['f-name','f-email','f-phone','f-msg'].forEach(id => {
    const el = q(id); if(!el) return;
    el.addEventListener('blur', {'f-name':vName,'f-email':vEmail,'f-phone':vPhone,'f-msg':vMsg}[id]);
  });

  function waLink(d){
    const body = (es()
      ? `Hola, soy ${d.name}. Mi correo es ${d.email}.` + (d.phone ? ` Teléfono: ${d.phone}.` : '')
      : `Hi, I'm ${d.name}. My email is ${d.email}.` + (d.phone ? ` Phone: ${d.phone}.` : ''))
      + (d.message ? ` ${d.message}` : '');
    return 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(body);
  }

  f.addEventListener('submit', async e => {
    e.preventDefault();
    const ok = [vName(), vEmail(), vPhone(), vMsg()];
    if(ok.includes(false)){
      const first = ['f-name','f-email','f-phone','f-msg'].find((id,i) => ok[i] === false);
      if(first) q(first).focus();
      return;
    }

    const d = {
      name:    q('f-name').value.trim(),
      email:   (q('f-email')||{}).value || '',
      phone:   (q('f-phone')||{}).value.trim() || '',
      message: (q('f-msg')||{}).value.trim() || ''
    };
    out.className = 'form-msg'; out.textContent = '';
    btn.disabled = true; btn.textContent = t('sending');

    // sin endpoint configurado el lead se entrega por WhatsApp: nunca se pierde
    if(!CONFIG.formEndpoint){
      out.className = 'form-msg ok'; out.textContent = t('okMsg');
      window.open(waLink(d), '_blank', 'noopener');
      btn.disabled = false; btn.textContent = t('send');
      f.reset(); return;
    }
    try{
      const r = await fetch(CONFIG.formEndpoint, {
        method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(d)
      });
      if(!r.ok) throw new Error(r.status);
      out.className = 'form-msg ok'; out.textContent = t('okSent');
      f.reset();
    }catch(err){
      out.className = 'form-msg bad';
      out.innerHTML = '<a href="' + waLink(d) + '" target="_blank" rel="noopener">' + t('failMsg') + '</a>';
    }finally{
      btn.disabled = false; btn.textContent = t('send');
    }
  });
})();

/* ── año del footer ──────────────────────────────────────────────────────── */
(function(){ document.querySelectorAll('[data-yr]').forEach(e => e.textContent = new Date().getFullYear()); })();

/* ── luz que sigue el cursor en las tarjetas ─────────────────────────────── */
(function(){
  if(matchMedia('(hover: none)').matches) return;          // en táctil no aporta
  if(matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  const sel = '.feat, .pack, .g-rev, .ct-row';
  document.querySelectorAll('.pack').forEach(p => {
    p.classList.add('is-lit');
    if(p.classList.contains('is-top')){                     // el destacado usa su propio nodo
      p.classList.remove('is-lit');
      const l = document.createElement('span'); l.className = 'lit'; l.setAttribute('aria-hidden','true');
      p.appendChild(l);
    }
  });
  let tick = false, queue = [];
  document.addEventListener('pointermove', e => {
    const card = e.target.closest(sel);
    if(!card) return;
    queue = [card, e.clientX, e.clientY];
    if(tick) return;
    tick = true;
    requestAnimationFrame(() => {
      const [c, x, y] = queue;
      const r = c.getBoundingClientRect();
      c.style.setProperty('--mx', (x - r.left) + 'px');
      c.style.setProperty('--my', (y - r.top) + 'px');
      tick = false;
    });
  }, {passive:true});
})();

/* ── contadores: cuentan una vez al aparecer ─────────────────────────────── */
(function(){
  const els = document.querySelectorAll('[data-count]');
  if(!els.length || !('IntersectionObserver' in window)) return;
  if(matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  const io = new IntersectionObserver((es, o) => {
    es.forEach(e => {
      if(!e.isIntersecting) return;
      o.unobserve(e.target);
      const el = e.target;
      const to = parseFloat(el.dataset.count);
      const dec = (el.dataset.count.split('.')[1] || '').length;
      const suf = el.dataset.suffix || '';
      const t0 = performance.now(), dur = 1100;
      (function step(now){
        const p = Math.min(1, (now - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);            // easeOutCubic
        el.textContent = (to * eased).toFixed(dec) + suf;
        if(p < 1) requestAnimationFrame(step);
      })(t0);
    });
  }, {threshold:.4});
  els.forEach(el => io.observe(el));
})();

/* ── banda de texto: se clona el set para que el bucle no salte ──────────── */
(function(){
  document.querySelectorAll('[data-ticker]').forEach(t => {
    const track = t.querySelector('.ticker-tr'), set = t.querySelector('.ticker-set');
    if(!track || !set) return;
    const c = set.cloneNode(true);
    c.setAttribute('aria-hidden','true');
    track.appendChild(c);
  });
})();

/* ── el degradado de Instagram vive en un <defs> inyectado una vez ──────── */
(function(){
  if(!document.querySelector('.soc-ig')) return;
  const s = document.createElementNS('http://www.w3.org/2000/svg','svg');
  s.setAttribute('width','0'); s.setAttribute('height','0');
  s.setAttribute('aria-hidden','true');
  s.style.cssText = 'position:absolute;width:0;height:0';
  s.innerHTML = '<defs><linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">' +
    '<stop offset="0%" stop-color="#F58529"/><stop offset="35%" stop-color="#DD2A7B"/>' +
    '<stop offset="70%" stop-color="#8134AF"/><stop offset="100%" stop-color="#515BD4"/></linearGradient></defs>';
  document.body.appendChild(s);
})();

/* ── se enciende lo que cruza el centro de la pantalla ────────────────────
   Un solo observer para todo el sitio, con la ventana de raíz reducida a una
   franja central: entra al pasar por ahí y se apaga al salir, así el efecto
   acompaña el scroll en vez de dispararse una vez y quedarse.              */
(function(){
  if(matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  if(!('IntersectionObserver' in window)) return;
  const sel = '.pack, .price-row, .feat, .reqs > div, .curric li, .road > div, .g-rev, .ct-row, .cert';
  const els = document.querySelectorAll(sel);
  if(!els.length) return;
  const io = new IntersectionObserver(es => {
    es.forEach(e => e.target.classList.toggle('is-active', e.isIntersecting));
  }, {rootMargin: '-42% 0px -42% 0px', threshold: 0});
  els.forEach(el => io.observe(el));
})();

/* ── el encabezado de sección entra con su propio ritmo ──────────────────── */
(function(){
  const heads = document.querySelectorAll('.sec-head');
  if(!heads.length) return;
  const show = h => h.classList.add('in');
  if(!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion:reduce)').matches){
    heads.forEach(show); return;
  }
  const io = new IntersectionObserver((es, o) => {
    es.forEach(e => { if(e.isIntersecting){ show(e.target); o.unobserve(e.target); } });
  }, {rootMargin: '0px 0px -12% 0px', threshold: .1});
  heads.forEach(h => {
    // lo que ya está en pantalla al cargar se muestra sin esperar
    if(h.getBoundingClientRect().top < innerHeight * .92){ show(h); return; }
    io.observe(h);
  });
  addEventListener('load', () => heads.forEach(h => {
    if(h.getBoundingClientRect().top < innerHeight * .92) show(h);
  }));
})();

/* ── armador de presupuesto ──────────────────────────────────────────────
   El total sale de leer el DOM, no de una tabla paralela: los precios viven
   en data-price y las sesiones de cada paquete en data-ses, así que si el
   día de mañana cambia un precio en la página, el cálculo cambia con él.  */
(function(){
  const box = document.getElementById('pricer');
  if(!box) return;
  const rows   = [...box.querySelectorAll('.pr-row')];
  const totEl  = box.querySelector('.pr-total');
  const detEl  = document.getElementById('pr-detail');
  const emptyEl= box.querySelector('.pr-empty');
  const hintEl = document.getElementById('pr-hint');
  const goEl   = document.getElementById('pr-go');
  const resetEl= document.getElementById('pr-reset');
  const es = () => document.documentElement.lang.startsWith('es');
  const qty = new Map(rows.map(r => [r.dataset.item, 0]));

  // los paquetes base, leídos de su propia tarjeta
  const packs = [...document.querySelectorAll('.pack[data-ses]')]
    .map(p => ({ses: +p.dataset.ses, price: +p.dataset.price,
                nm: p.dataset.nmes, nmEn: p.dataset.nmen || ''}))
    .filter(p => p.ses > 0)
    .sort((a, b) => a.ses - b.ses);

  const label = r => (es() ? r.dataset.lblEs : r.dataset.lblEn);
  const money = n => '$' + n.toLocaleString('en-US');

  function paint(){
    let total = 0, lines = [];
    rows.forEach(r => {
      const n = qty.get(r.dataset.item);
      const price = +r.dataset.price;
      r.classList.toggle('on', n > 0);
      const q = r.querySelector('.pr-q');
      if(q) q.textContent = n;
      const tog = r.querySelector('.pr-tog');
      if(tog) tog.setAttribute('aria-pressed', String(n > 0));
      const dec = r.querySelector('[data-step="-1"]');
      if(dec) dec.disabled = n === 0;
      if(n > 0){
        total += price * n;
        lines.push({t: (n > 1 ? n + ' × ' : '') + label(r), v: price * n});
      }
    });

    totEl.textContent = money(total);
    totEl.classList.add('bump');
    setTimeout(() => totEl.classList.remove('bump'), 220);

    detEl.innerHTML = lines.map(l =>
      '<li><span>' + l.t + '</span><b>' + money(l.v) + '</b></li>').join('');
    emptyEl.hidden = lines.length > 0;
    goEl.setAttribute('aria-disabled', String(lines.length === 0));

    // ¿algún paquete cubre lo mismo por menos?
    const les = qty.get('lesson') || 0;
    const p = packs.find(x => x.ses >= les && les > 0);
    if(p && total > p.price){
      const save = total - p.price;
      hintEl.innerHTML = es()
        ? 'Con el <b>' + p.nm + '</b> pagas <b>' + money(p.price) + '</b> y te ahorras <b>' + money(save) + '</b>.'
        : 'The <b>' + (p.nmEn || p.nm) + '</b> costs <b>' + money(p.price) + '</b> — you save <b>' + money(save) + '</b>.';
      hintEl.hidden = false;
    } else {
      hintEl.hidden = true;
    }

    // el enlace lleva la lista ya escrita
    const head = es() ? 'Hola, quisiera cotizar esto:' : 'Hi, I would like to book:';
    const body = lines.map(l => '• ' + l.t + ' — ' + money(l.v)).join('\n');
    const foot = (es() ? 'Total: ' : 'Total: ') + money(total);
    goEl.href = 'https://wa.me/' + CONFIG.whatsapp + '?text=' +
      encodeURIComponent(lines.length ? head + '\n' + body + '\n' + foot : (es() ? CONFIG.waTextEs : CONFIG.waText));
  }

  box.addEventListener('click', e => {
    const step = e.target.closest('[data-step]');
    const tog  = e.target.closest('[data-toggle]');
    if(!step && !tog) return;
    const row = e.target.closest('.pr-row');
    const k = row.dataset.item;
    if(step){
      const n = Math.max(0, Math.min(20, qty.get(k) + (+step.dataset.step)));
      qty.set(k, n);
    } else {
      qty.set(k, qty.get(k) ? 0 : 1);
    }
    paint();
  });

  resetEl.addEventListener('click', () => { qty.forEach((_, k) => qty.set(k, 0)); paint(); });
  // al cambiar de idioma se reescriben las etiquetas del desglose
  document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => setTimeout(paint, 40)));
  paint();
})();

/* ── el botón de cada paquete lleva su detalle a WhatsApp ─────────────────
   Mismo trato que el armador de precios: en vez de abrir un chat en blanco,
   el mensaje llega con el paquete, su duración y su precio ya escritos, y en
   el idioma que el visitante esté viendo.                                  */
(function(){
  const btns = document.querySelectorAll('[data-pack-cta]');
  if(!btns.length) return;
  const es = () => document.documentElement.lang.startsWith('es');

  function pintar(){
    btns.forEach(b => {
      const p = b.closest('.pack');
      if(!p) return;
      const nm  = (es() ? p.dataset.nmes  : p.dataset.nmen)  || '';
      const dur = (es() ? p.dataset.dures : p.dataset.duren) || '';
      const precio = p.dataset.price ? '$' + Number(p.dataset.price).toLocaleString('en-US') : '';
      const head = es() ? 'Hola, quiero reservar este paquete:' : 'Hi, I would like to book this package:';
      const txt = head + '\n• ' + nm + (dur ? ' — ' + dur : '') + (precio ? '\n' + (es() ? 'Precio: ' : 'Price: ') + precio : '');
      b.href = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(txt);
    });
  }

  pintar();
  // al cambiar de idioma el i18n reescribe los wa.me genéricos: se vuelve a pintar
  document.querySelectorAll('.lang button').forEach(x => x.addEventListener('click', () => setTimeout(pintar, 60)));
})();
