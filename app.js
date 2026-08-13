/* ============================================================
   Mind Summit 2026 — Mapa do evento
   Interactivity: filter dimming · zone detail sheet · diagram fit + pan/zoom
   ZONES content transcribed verbatim from the design prototype.
   ============================================================ */
(function () {
  'use strict';

  var ZONES = {
    'banheiro-topo': { k: 'Apoio · Services', t: 'Banheiros', e: 'Restrooms', b: 'Bloco de sanitários no canto esquerdo do fundo do pavilhão, atrás da Arena Mind.' },
    'banheiro-base': { k: 'Apoio · Services', t: 'Banheiros', e: 'Restrooms', b: 'Bloco de sanitários junto à entrada, ao centro do pavilhão.' },
    'escada-1': { k: 'Apoio · Services', t: 'Escadas', e: 'Stairs', b: 'Escadas no canto inferior esquerdo do pavilhão, ao lado da saída. Acesso ao 2º andar.' },
    'escada-2': { k: 'Apoio · Services', t: 'Escadas', e: 'Stairs', b: 'Escadas no canto inferior direito do pavilhão, ao lado da entrada. Acesso ao 2º andar.' },
    'escada-3': { k: 'Apoio · Services', t: 'Escada', e: 'Stairs', b: 'Escada entre os banheiros e a chapelaria (ESC. 2.1 na planta).' },
    entrada: { k: 'Entrada · Entrance', t: 'Entrada', e: 'Entrance', b: 'Acesso principal do pavilhão, à direita, direto para o credenciamento.' },
    saida: { k: 'Saída · Exit', t: 'Saída', e: 'Exit', b: 'Porta de saída na lateral esquerda do pavilhão, ao final da praça de alimentação.' },
    'traducao-1': { k: 'Apoio · Services', t: 'Fones de tradução', e: 'Translation headsets', b: 'Posto de retirada à direita da Arena Mind, na altura das cadeiras Prime.' },
    'traducao-2': { k: 'Apoio · Services', t: 'Fones de tradução', e: 'Translation headsets', b: 'Segundo posto de retirada, logo abaixo da Área Mind.' },
    'segundo-andar': { k: '2º andar · Upper floor', t: 'Centro de Convenções', e: 'Convention Centre', b: 'Salas 201 a 211 no andar de cima, ligadas pelo corredor principal. Workshop VIP 1 (204 A·B·C), Workshop VIP 2 (208 A·B), Workshop VIP 3 (208 C·D), Masterclass Prime (206 A·B·C), Sala Mind 1 (205) e Sala Mind 2 (207). Suba pelas escadas ao lado do credenciamento; a Sala 211 fica no fim do corredor.' },
    chapelaria: { k: 'Apoio · Services', t: 'Chapelaria', e: 'Coat check', b: 'Guarda-volumes e casacos, ao centro, logo após o credenciamento.' },
    escadas: { k: 'Apoio · Services', t: 'Escadas', e: 'Stairs', b: 'Acesso pelas escadas junto à entrada do pavilhão, à direita do credenciamento.' },
    'arena-mind': { k: 'Arena', t: 'Arena Mind', e: 'Mind Arena', b: 'Referências globais estarão reunidas no mesmo palco para discutir liderança, saúde mental, cultura e o futuro do trabalho.\n\nA arena principal, com o palco à frente e as três áreas de assento: Prime, VIP e Mind.' },
    prime: { k: 'Assentos · Seating', t: 'Área Prime', e: 'Prime seating', b: 'Assentos roxos, na frente do palco da Arena Mind. Acesso exclusivo Prime e patrocinadores.' },
    vip: { k: 'Assentos · Seating', t: 'Área VIP', e: 'VIP seating', b: 'Assentos coral, logo atrás da Área Prime.' },
    mind: { k: 'Assentos · Seating', t: 'Área Mind', e: 'General seating', b: 'Assentos verdes, ao fundo da Arena Mind. Acesso com credencial Mind.' },
    'arena-topvoice': { k: 'Arena', t: 'Arena Top Voice', e: 'Top Voice Arena', b: 'As vozes que influenciam o mercado reunidas para discutir as mudanças, os desafios e as decisões que estão moldando o futuro do trabalho.\n\nPlenária com palco próprio, no corredor direito, ao lado do Lounge BWG.' },
    'arena-sextante': { k: 'Arena', t: 'Arena Sextante', e: 'Sextante Arena', b: 'A Editora Sextante, uma das mais importantes do Brasil, convida autores best sellers para discutir liderança, saúde mental, propósito, foco, tecnologia, longevidade e bem-estar.\n\nPlenária com palco próprio, no corredor direito, logo acima da Livraria da Villa.' },
    'lounge-heineken': { k: 'Lounge', t: 'Lounge Heineken', e: 'Heineken lounge', b: 'Primeiro lounge do corredor direito, no topo do pavilhão.' },
    'lounge-prime': { k: 'Lounge', t: 'Lounge Prime', e: 'Prime lounge', b: 'Reservado a credenciais Prime e patrocinadores. Estar, café e networking.' },
    'lounge-bwg': { k: 'Lounge', t: 'Lounge BWG', e: 'BWG lounge', b: 'Lounge patrocinado, entre o Lounge Prime e a Arena Top Voice.' },
    coworking: { k: 'Lounge', t: 'Área Coworking', e: 'Coworking area', b: 'Mesas, tomadas e Wi-Fi para trabalhar entre uma sessão e outra.' },
    diversidade: { k: 'Lounge', t: '+Diversidade Mind', e: 'Diversity hub', b: 'Espaço dedicado às iniciativas de diversidade e inclusão do ecossistema Mind.' },
    'stand-bwg': { k: 'Estande · Booth', t: 'BWG', e: 'BWG booth', b: 'Estande 3 × 3 m, na fileira entre a Arena Top Voice e a Área Coworking.' },
    'stand-bp': { k: 'Estande · Booth', t: 'Faculdade BP', e: 'BP booth', b: 'Estande 3 × 3 m, na fileira entre a Arena Top Voice e a Área Coworking.' },
    'stand-chilli': { k: 'Estande · Booth', t: 'Chilli Beans', e: 'Chilli Beans booth', b: 'Estande 3 × 3 m, na fileira entre a Arena Top Voice e a Área Coworking.' },
    'stand-3x3': { k: 'Estande · Booth', t: 'Estande 3 × 3 m', e: 'Booth', b: 'Espaço de ativação na fileira entre a Arena Top Voice e a Área Coworking.' },
    wellz: { k: 'Estande · Booth', t: 'Well Z', e: 'Well Z booth', b: 'Estande 7 × 3 m no corredor direito, ao lado do café.' },
    livraria: { k: 'Estande · Booth', t: 'Livraria da Villa', e: 'Bookstore', b: 'Livraria curada, lançamentos, conversas e encontros com autores convidados. Um espaço para circular ideias, descobrir referências e levar o Summit para além do palco.\n\nEstantes, mesas de livros, puffs, backdrop e caixa. Sessões de autógrafo com os palestrantes.' },
    'stand-vale': { k: 'Estande · Booth', t: 'Vale', e: 'Vale booth', b: 'Estande 8 × 5 m no bloco central de ativações.' },
    'stand-heineken': { k: 'Estande · Booth', t: 'Heineken', e: 'Heineken booth', b: 'Estande 8 × 5 m no bloco central de ativações.' },
    'stand-natura': { k: 'Estande · Booth', t: 'Natura', e: 'Natura booth', b: 'Estande 8 × 5 m no bloco central de ativações.' },
    'stand-livre': { k: 'Estande · Booth', t: 'Estande 8 × 5 m', e: 'Booth', b: 'Espaço de ativação no bloco central, ao lado do estande Natura.' },
    praca: { k: 'Alimentação · Food', t: 'Praça de Alimentação', e: 'Food court', b: 'A praça principal, na lateral esquerda do pavilhão, com mesas e opções quentes, frias e doces.' },
    barracas: { k: 'Alimentação · Food', t: 'Barracas de alimentação', e: 'Food stalls', b: 'Pontos avulsos de comida e bebida espalhados pelo pavilhão: um junto à entrada e dois no corredor direito.' },
    credenciamento: { k: 'Entrada · Entrance', t: 'Credenciamento', e: 'Check-in', b: 'Retirada de credencial logo na entrada: fila Prime / Patrocinador à esquerda e fila Mind / VIP à direita. Tenha o QR code do ingresso em mãos.' },
    'elevador-1': { k: 'Apoio · Services', t: 'Elevador', e: 'Elevator', b: 'Elevador de acesso ao 2º andar (Centro de Convenções), ao lado das escadas e do credenciamento.' },
    'elevador-2': { k: 'Apoio · Services', t: 'Elevador', e: 'Elevator', b: 'Elevador de acesso ao 2º andar (Centro de Convenções), ao lado das escadas e do credenciamento.' },
    'sala-vip3': { k: '2º andar · Sala', t: 'Workshop VIP 3', e: 'VIP Workshop 3', b: 'Sala 208 C · D, no Centro de Convenções (2º andar). Workshops exclusivos para credenciais VIP.' },
    'sala-vip2': { k: '2º andar · Sala', t: 'Workshop VIP 2', e: 'VIP Workshop 2', b: 'Sala 208 A · B, no Centro de Convenções (2º andar). Workshops exclusivos para credenciais VIP.' },
    'sala-vip1': { k: '2º andar · Sala', t: 'Workshop VIP 1', e: 'VIP Workshop 1', b: 'Sala 204 A · B · C, no Centro de Convenções (2º andar). Workshops exclusivos para credenciais VIP.' },
    'sala-master': { k: '2º andar · Sala', t: 'Masterclass Prime', e: 'Prime Masterclass', b: 'Sala 206 A · B · C, no Centro de Convenções (2º andar). Masterclasses exclusivas para credenciais Prime.' },
    'sala-mind2': { k: '2º andar · Sala', t: 'Sala Mind 2', e: 'Mind Room 2', b: 'Sala 207, no Centro de Convenções (2º andar). Sessões abertas a todas as credenciais Mind.' },
    'sala-mind1': { k: '2º andar · Sala', t: 'Sala Mind 1', e: 'Mind Room 1', b: 'Sala 205, no Centro de Convenções (2º andar). Sessões abertas a todas as credenciais Mind.' },
    'wc-2andar': { k: '2º andar · Apoio', t: 'Banheiros', e: 'Restrooms', b: 'Banheiros do 2º andar, distribuídos ao longo do corredor do Centro de Convenções.' },
    'escada-2andar': { k: '2º andar · Apoio', t: 'Escadas', e: 'Stairs', b: 'Escadas de acesso entre o pavilhão (térreo) e o Centro de Convenções, no 2º andar.' },
    'corredor-2andar': { k: '2º andar · Circulação', t: 'Corredor principal', e: 'Main corridor', b: 'Corredor que dá acesso a todas as salas do Centro de Convenções, no 2º andar.' }
  };

  var mapRoot = document.querySelector('.map-root');

  /* ---------- Filters ---------- */
  var filters = document.getElementById('filters');
  filters.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-cat]');
    if (!btn) return;
    mapRoot.classList.add('interacted');
    var cat = btn.getAttribute('data-cat');
    var current = mapRoot.getAttribute('data-filter');
    // toggle: clicking the active category (or "Tudo") resets to all
    var next = (cat === 'all' || current === cat) ? 'all' : cat;
    mapRoot.setAttribute('data-filter', next);
    filters.querySelectorAll('.pill').forEach(function (p) {
      p.classList.toggle('is-active', p.getAttribute('data-cat') === next);
    });
  });

  /* ---------- Detail sheet ---------- */
  var host = document.getElementById('sheet-host');
  var elKind = document.getElementById('sheet-kind');
  var elTitle = document.getElementById('sheet-title');
  var elTitleEn = document.getElementById('sheet-title-en');
  var elBody = document.getElementById('sheet-body');
  var elSched = document.getElementById('sheet-schedule');
  var elSchedToggle = document.getElementById('sched-toggle');
  var elSchedToggleWrap = document.getElementById('sched-toggle-wrap');
  var elSchedToggleTxt = elSchedToggle && elSchedToggle.querySelector('.sched-toggle-txt');
  var elScroll = document.getElementById('sheet-scroll');
  var lastFocus = null;
  var SCHED_LABELS = { open: 'Veja o que acontece aqui', close: 'Ocultar programação' };

  // color each ticket tier (Mind / VIP / Prime) with its own outlined chip
  function appendTickets(main, str) {
    var tk = document.createElement('div');
    tk.className = 'sched-tickets';
    String(str).split(',').forEach(function (part) {
      var name = part.trim();
      if (!name) return;
      var span = document.createElement('span');
      var low = name.toLowerCase();
      if (low.indexOf('mind') !== -1) span.className = 'tk tk-mind';
      else if (low.indexOf('vip') !== -1) span.className = 'tk tk-vip';
      else if (low.indexOf('prime') !== -1) span.className = 'tk tk-prime';
      else span.className = 'tk';
      span.textContent = name;
      tk.appendChild(span);
    });
    main.appendChild(tk);
  }

  // semantic colour of the type label (see cores.css):
  // workshop=coral · masterclass/autógrafo=roxo · palestra/painel/curadoria=verde · resto=cinza
  function schedTagVariant(k) {
    var t = k.toLowerCase();
    if (t.indexOf('workshop') !== -1) return 'coral';
    if (t.indexOf('masterclass') !== -1 || t.indexOf('autógrafo') !== -1 || t.indexOf('autografo') !== -1) return 'roxo';
    if (t.indexOf('palestra') !== -1 || t.indexOf('painel') !== -1 || t.indexOf('curadoria') !== -1 ||
        t.indexOf('abertura') !== -1 || t.indexOf('experiência') !== -1 || t.indexOf('experiencia') !== -1 ||
        t.indexOf('lançamento') !== -1 || t.indexOf('lancamento') !== -1) return 'verde';
    return 'cinza';
  }

  // "quem conduz": avatares em círculo (rostos-bolinha) + nome
  function appendWho(main, q) {
    var who = document.createElement('div');
    who.className = 'sched-who';
    var faces = window.SPEAKERS && window.SPEAKERS[q];
    if (faces && faces.length) {
      var av = document.createElement('span');
      av.className = 'sched-avatars';
      faces.forEach(function (key) {
        var img = document.createElement('img');
        img.className = 'sched-avatar';
        img.src = 'assets/speakers/' + key + '.png';
        img.alt = '';
        img.loading = 'lazy';
        img.decoding = 'async';
        av.appendChild(img);
      });
      who.appendChild(av);
    }
    var name = document.createElement('span');
    name.className = 'sched-who-name';
    name.textContent = q;
    who.appendChild(name);
    main.appendChild(who);
  }

  // build the per-location schedule (Dia 1 / Dia 2) into the sheet
  function renderSchedule(sched) {
    elSched.textContent = '';
    if (!sched) return;
    var head = document.createElement('div');
    head.className = 'sched-head';
    var sym = document.createElement('img');
    sym.className = 'sched-head-sym'; sym.src = 'assets/simbolo-mind-preto.png'; sym.alt = '';
    head.appendChild(sym);
    head.appendChild(document.createTextNode('Programação'));
    elSched.appendChild(head);
    [['Dia 1 · 16 de setembro', sched.d1], ['Dia 2 · 17 de setembro', sched.d2]].forEach(function (day) {
      if (!day[1] || !day[1].length) return;
      var dh = document.createElement('div');
      dh.className = 'sched-day';
      dh.textContent = day[0];
      elSched.appendChild(dh);
      day[1].forEach(function (s) {
        var kind = String(s.k || '');
        var cont = /^↳/.test(kind);                 // sessão paralela / continuação
        var kindClean = kind.replace(/^↳\s*/, '');
        var variant = schedTagVariant(kindClean);
        var row = document.createElement('div');
        row.className = 'sched-row sched-acc-' + variant + (cont ? ' sched-row--cont' : '');
        var time = document.createElement('div');
        time.className = 'sched-time';
        var parts = String(s.t).split(/\s*[–—-]\s*/);
        if (parts.length === 2) {
          var t1 = document.createElement('span'); t1.className = 'sched-t1'; t1.textContent = parts[0].trim();
          var sep = document.createElement('span'); sep.className = 'sched-time-sep'; sep.textContent = '·';
          var t2 = document.createElement('span'); t2.className = 'sched-t2'; t2.textContent = parts[1].trim();
          time.appendChild(t1); time.appendChild(sep); time.appendChild(t2);
        } else {
          time.textContent = String(s.t);
        }
        var main = document.createElement('div');
        main.className = 'sched-main';
        if (kindClean) { var tag = document.createElement('span'); tag.className = 'sched-tag sched-tag--' + variant; tag.textContent = kindClean; main.appendChild(tag); }
        var title = document.createElement('div'); title.className = 'sched-title'; title.textContent = s.s; main.appendChild(title);
        if (s.q) appendWho(main, s.q);
        if (s.i) appendTickets(main, s.i);
        row.appendChild(time);
        row.appendChild(main);
        elSched.appendChild(row);
      });
    });
  }

  function setSchedOpen(open) {
    if (!elSchedToggle) return;
    elSched.hidden = !open;
    elSchedToggle.setAttribute('aria-expanded', String(open));
    if (elSchedToggleTxt) elSchedToggleTxt.textContent = open ? SCHED_LABELS.close : SCHED_LABELS.open;
  }

  if (elSchedToggle) {
    elSchedToggle.addEventListener('click', function () {
      var willOpen = elSched.hidden;
      setSchedOpen(willOpen);
      if (willOpen) {
        requestAnimationFrame(function () { elSchedToggle.scrollIntoView({ block: 'nearest' }); });
      }
    });
  }

  function openSheet(id) {
    var z = ZONES[id];
    if (!z) return;
    elKind.textContent = z.k;
    elTitle.textContent = z.t;
    elTitleEn.textContent = z.e;
    elBody.textContent = z.b;
    var sched = window.SCHEDULE && window.SCHEDULE[id];
    renderSchedule(sched);
    if (elSchedToggleWrap) elSchedToggleWrap.hidden = !sched;
    setSchedOpen(false); // start collapsed; button reveals it
    if (elScroll) elScroll.scrollTop = 0;
    lastFocus = document.activeElement;
    host.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    host.querySelector('.btn-close').focus();
  }
  function closeSheet() {
    host.classList.remove('is-open');
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-close]')) { closeSheet(); return; }
    var zoneEl = e.target.closest('[data-zone]');
    if (zoneEl) { mapRoot.classList.add('interacted'); openSheet(zoneEl.getAttribute('data-zone')); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && host.classList.contains('is-open')) closeSheet();
  });

  /* ============================================================
     Diagrams: fit-to-width + pan/zoom
     Content is authored at native px. baseScale fits it to the
     viewport width (never above 1:1). Where there is room to zoom
     (narrow screens): one finger pans, two fingers pinch, a
     double-tap toggles fit <-> 1:1. Transform stays vector-crisp.
     ============================================================ */
  var MOVE_THRESHOLD = 6;   // px of travel before a drag counts as pan (not tap)
  var MAX_SCALE = 1.6;      // absolute cap (1.0 = native 1000px width)
  var DBL_MS = 300;

  function dist(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
  function mid(a, b) { return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }; }

  function buildPanZoom(frame) {
    var content = frame.firstElementChild;            // .scale-inner
    var W = parseFloat(frame.getAttribute('data-w'));
    var H = parseFloat(frame.getAttribute('data-h'));
    var base = 1, scale = 1, tx = 0, ty = 0;
    var pointers = new Map();
    var pinch = null, panLast = null, moved = 0, suppressClick = false;
    var lastTap = 0, lastTapX = 0, lastTapY = 0;

    function zoomable() { return base < 0.999; }
    function vpW() { return frame.clientWidth; }
    function vpH() { return H * base; }
    function maxScale() { return zoomable() ? MAX_SCALE : base; }

    function clampAndApply() {
      scale = Math.min(maxScale(), Math.max(base, scale));
      var cw = W * scale, ch = H * scale, vw = vpW(), vh = vpH();
      tx = cw <= vw ? (vw - cw) / 2 : Math.min(0, Math.max(vw - cw, tx));
      ty = ch <= vh ? (vh - ch) / 2 : Math.min(0, Math.max(vh - ch, ty));
      content.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + scale + ')';
      frame.style.touchAction = (scale > base + 0.001) ? 'none' : 'pan-y';
    }

    function layout() {
      var w = vpW();
      if (!w) { requestAnimationFrame(layout); return; } // width not ready (hidden/0-size): retry, never bake scale(0)
      base = Math.min(w / W, 1);
      frame.style.height = vpH() + 'px';
      scale = base; tx = 0; ty = 0;
      frame.classList.toggle('is-zoomable', zoomable());
      if (mapRoot) mapRoot.classList.toggle('is-zoomable', zoomable()); // drive the hint without :has()
      clampAndApply();
    }

    function loc(e) {
      var r = frame.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    }

    function zoomTo(target, px, py, dur) {
      dur = dur || 220;
      target = Math.min(maxScale(), Math.max(base, target));
      var cx = (px - tx) / scale, cy = (py - ty) / scale;
      scale = target; tx = px - cx * scale; ty = py - cy * scale;
      content.style.transition = 'transform ' + dur + 'ms cubic-bezier(0.16,1,0.3,1)';
      clampAndApply();
      setTimeout(function () { content.style.transition = ''; }, dur + 20);
    }

    function capture(id) { try { frame.setPointerCapture(id); } catch (_) {} }

    frame.addEventListener('pointerdown', function (e) {
      if (!zoomable()) return;                 // desktop / fits fully: leave clicks & native scroll alone
      pointers.set(e.pointerId, loc(e));
      moved = 0;
      frame.classList.add('hint-hidden');
      if (mapRoot) mapRoot.classList.add('hint-hidden');
      if (pointers.size === 2) {
        // pinch: own both pointers
        pointers.forEach(function (_, id) { capture(id); });
        var p = Array.from(pointers.values());
        var m = mid(p[0], p[1]);
        pinch = { dist: dist(p[0], p[1]), scale: scale, cx: (m.x - tx) / scale, cy: (m.y - ty) / scale };
      } else if (pointers.size === 1) {
        panLast = loc(e);
        // capture only when zoomed in (to pan); at fit, let the page scroll natively (touch-action:pan-y)
        if (scale > base + 0.001) capture(e.pointerId);
      }
    });

    frame.addEventListener('pointermove', function (e) {
      if (!pointers.has(e.pointerId)) return;
      pointers.set(e.pointerId, loc(e));
      if (pointers.size >= 2 && pinch) {
        var p = Array.from(pointers.values());
        var m = mid(p[0], p[1]);
        scale = pinch.scale * (dist(p[0], p[1]) / pinch.dist);
        scale = Math.min(maxScale(), Math.max(base, scale));
        tx = m.x - pinch.cx * scale;
        ty = m.y - pinch.cy * scale;
        moved = MOVE_THRESHOLD + 1; suppressClick = true;
        frame.classList.add('is-panning');
        clampAndApply();
      } else if (pointers.size === 1 && panLast) {
        var q = loc(e), dx = q.x - panLast.x, dy = q.y - panLast.y;
        panLast = q; moved += Math.abs(dx) + Math.abs(dy);
        if (scale > base + 0.001) {
          tx += dx; ty += dy;
          if (moved > MOVE_THRESHOLD) { suppressClick = true; frame.classList.add('is-panning'); }
          clampAndApply();
        }
      }
    });

    function end(e) {
      if (!pointers.has(e.pointerId)) return;
      var wasSingle = pointers.size === 1;
      pointers.delete(e.pointerId);
      frame.classList.remove('is-panning');
      if (pointers.size < 2) pinch = null;
      if (pointers.size === 1) panLast = Array.from(pointers.values())[0];
      if (pointers.size === 0) {
        panLast = null;
        if (wasSingle && moved <= MOVE_THRESHOLD) {          // a clean tap
          var now = Date.now(), p = loc(e);
          if (now - lastTap < DBL_MS && Math.abs(p.x - lastTapX) < 24 && Math.abs(p.y - lastTapY) < 24) {
            suppressClick = true;                            // double-tap → toggle zoom
            zoomTo(scale > base + 0.001 ? base : Math.min(1, maxScale()), p.x, p.y);
            lastTap = 0;
          } else {
            lastTap = now; lastTapX = p.x; lastTapY = p.y;
          }
        }
      }
    }
    frame.addEventListener('pointerup', end);
    frame.addEventListener('pointercancel', end);

    // swallow the synthetic click that follows a pan/pinch so it won't open a sheet
    frame.addEventListener('click', function (e) {
      if (suppressClick) { e.stopPropagation(); e.preventDefault(); suppressClick = false; }
    }, true);

    layout();
    return {
      layout: layout,
      zoomable: zoomable,
      zoomTo: zoomTo,
      demoZoom: function () { zoomTo(Math.min(MAX_SCALE, base * 1.9), vpW() * 0.5, vpH() * 0.42, 1300); },
      reset: function () { zoomTo(base, vpW() * 0.5, vpH() * 0.5, 1000); }
    };
  }

  var controllers = [];
  document.querySelectorAll('.scale-fit').forEach(function (frame) {
    controllers.push(buildPanZoom(frame));
  });

  /* ---------- Entrance reveals ----------
     - flowing sections fade+rise as they enter view
     - the MAP fills in "attendee-journey" order, accelerating (slow → fast)
     - the 2nd-floor rooms domino in via CSS when their card enters view */
  (function () {
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var mapInner = document.querySelector('.map-inner');

    var filled = false;
    function fillMap() {
      if (filled || !mapInner) return;
      filled = true;
      if (reduce) { mapInner.classList.remove('anim'); return; }
      // reveal everything softly and almost together, with a gentle bottom → top wash
      var units = [].slice.call(document.querySelectorAll('.map-inner .layer > *'));
      var bar = document.querySelector('.entrada-bar'); if (bar) units.push(bar);
      var cred = document.querySelector('[data-zone="credenciamento"]'); if (cred) units.push(cred);
      var SPREAD = 450;   // small, so it reads as simultaneous but unfurls from the bottom
      var maxDelay = 0;
      units.forEach(function (el) {
        var topPct = parseFloat(el.style.top);
        if (isNaN(topPct)) topPct = 50;
        var delay = (100 - topPct) / 100 * SPREAD;   // lower on the map = a touch earlier
        if (delay > maxDelay) maxDelay = delay;
        setTimeout(function () { el.classList.add('rv'); }, delay);
      });
      // once the whole map has settled, ring every button one time, all together
      setTimeout(function () {
        [].forEach.call(document.querySelectorAll('.map-inner .zone'), function (z) { z.classList.add('pulse-once'); });
      }, maxDelay + 1050);
      setTimeout(function () { mapInner.classList.remove('anim'); }, maxDelay + 1250); // cleanup
    }

    // 2nd-floor overlay: header switch shows/hides it (blurring the ground floor);
    // ring its buttons once, the first time it's revealed
    var switches = [].slice.call(document.querySelectorAll('.floor2-switch'));
    var floor2Pulsed = false;
    switches.forEach(function (sw) {
      sw.addEventListener('change', function () {
        var on = sw.checked;
        mapRoot.classList.add('floor2-seen'); // stop the attention pulse once used
        mapRoot.classList.toggle('show-floor2', on);
        switches.forEach(function (o) { if (o !== sw) o.checked = on; }); // keep both toggles in sync
        if (on && !floor2Pulsed && !reduce) {
          floor2Pulsed = true;
          setTimeout(function () {
            [].forEach.call(document.querySelectorAll('.floor2-overlay .zone'), function (z) { z.classList.add('pulse-once'); });
          }, 1100);
        }
      });
    });

    function trigger(el) {
      el.classList.add('in');
      if (el.classList.contains('scale-fit')) fillMap();
    }

    var els = [].slice.call(document.querySelectorAll('.reveal, .scale-fit'));
    if (!('IntersectionObserver' in window)) { els.forEach(trigger); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { trigger(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
    els.forEach(function (el, i) {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.style.transitionDelay = (Math.min(i, 6) * 120) + 'ms';   // stagger the first screenful
      }
      io.observe(el);
    });
    // safety net: reveal in-view items on full load if IO didn't fire
    window.addEventListener('load', function () {
      els.forEach(function (el) {
        if (!el.classList.contains('in') && el.getBoundingClientRect().top < window.innerHeight) trigger(el);
      });
    });
  })();

  /* ---------- Press feedback on tappable zones ---------- */
  (function () {
    var pressed = null, sx = 0, sy = 0;
    function release() { if (pressed) { pressed.classList.remove('is-pressed'); pressed = null; } }
    document.addEventListener('pointerdown', function (e) {
      var z = e.target.closest('[data-zone]');
      if (!z) return;
      release(); pressed = z; sx = e.clientX; sy = e.clientY;
      z.classList.add('is-pressed');
    }, true);
    document.addEventListener('pointermove', function (e) {
      if (pressed && (Math.abs(e.clientX - sx) > 10 || Math.abs(e.clientY - sy) > 10)) release();
    }, { capture: true, passive: true });
    ['pointerup', 'pointercancel'].forEach(function (ev) {
      document.addEventListener(ev, release, true);
    });
  })();

  /* ---------- Stop the "start here" pulse after a while even without interaction ---------- */
  setTimeout(function () { mapRoot.classList.add('interacted'); }, 14000);

  /* ---------- Praça hover (unified L outline; deterministic, no :has reliance) ---------- */
  document.querySelectorAll('[data-zone="praca"]').forEach(function (praca) {
    praca.querySelectorAll('.praca-hit').forEach(function (hit) {
      hit.addEventListener('mouseenter', function () { praca.classList.add('is-hover'); });
      hit.addEventListener('mouseleave', function (e) {
        var to = e.relatedTarget;
        // keep highlighted while moving between the praça's own painted parts
        if (!to || !to.closest || !to.closest('[data-zone="praca"]')) praca.classList.remove('is-hover');
      });
    });
  });
  /* ---------- Guided tour: each step performs the real action on the map ---------- */
  (function () {
    var host = document.getElementById('tut-host');
    if (!host) return;
    var KEY = 'mindmap_tutorial_v1';
    var steps = host.querySelectorAll('.tut-step');
    var dots = host.querySelectorAll('.tut-dots span');
    var btnNext = document.getElementById('tut-next');
    var btnSkip = document.getElementById('tut-skip');
    var btnHelp = document.getElementById('tut-help');
    var card = host.querySelector('.tut-card');
    var backdrop = host.querySelector('.tut-backdrop');
    var ctrl = controllers[0];
    var sw0 = document.querySelector('.floor2-switch');
    var mapFrame = document.querySelector('.scale-fit');
    var i = -1, lastFocus = null;
    var forced = /tutorial/.test(location.search) || /tutorial/.test(location.hash);

    /* ---- real map actions ---- */
    function setFilter(cat) {
      mapRoot.setAttribute('data-filter', cat);
      filters.querySelectorAll('.pill').forEach(function (p) {
        p.classList.toggle('is-active', p.getAttribute('data-cat') === cat);
      });
    }
    function setFloor2(on) { if (sw0) { sw0.checked = on; sw0.dispatchEvent(new Event('change')); } }
    function scrollToY(y) { window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' }); }
    function scrollMapTop() {
      if (mapFrame) scrollToY(mapFrame.getBoundingClientRect().top + window.pageYOffset - 96);
    }
    // place el's center at frac of the viewport height (0.5 = centered)
    function scrollElCenter(el, frac) {
      if (!el) return;
      frac = (frac == null) ? 0.5 : frac;
      var r = el.getBoundingClientRect();
      scrollToY(r.top + window.pageYOffset + r.height / 2 - window.innerHeight * frac);
    }
    function scrollFloor2() {
      var el = document.querySelector('.f2-rooms') || document.querySelector('.floor2-overlay');
      scrollElCenter(el, 0.62);                     // land on the 2nd floor (below the top card), no overshoot
    }
    function spot(el) {                             // double-pulse the thing we're about to show
      if (!el) return;
      el.classList.remove('tut-spot');
      void el.offsetWidth;                          // restart the animation if re-triggered
      el.classList.add('tut-spot');
      later(function () { el.classList.remove('tut-spot'); }, 2100);
    }
    var spotEl = null;
    function showSpotlight(target, pad) {           // James-Bond vignette around a map zone
      if (!target) return;
      pad = (pad == null) ? 16 : pad;
      if (!spotEl) { spotEl = document.createElement('div'); spotEl.className = 'tut-spotlight'; document.body.appendChild(spotEl); }
      var r = target.getBoundingClientRect();
      spotEl.style.left = (r.left - pad) + 'px';
      spotEl.style.top = (r.top - pad) + 'px';
      spotEl.style.width = (r.width + pad * 2) + 'px';
      spotEl.style.height = (r.height + pad * 2) + 'px';
      requestAnimationFrame(function () { if (spotEl) spotEl.classList.add('on'); });
    }
    function hideSpotlight() { if (spotEl) spotEl.classList.remove('on'); }
    function cleanupMap() {
      try { hideSpotlight(); } catch (e) {}
      try { setSchedOpen(false); } catch (e) {}
      try { closeSheet(); } catch (e) {}
      try { setFilter('all'); } catch (e) {}
      try { setFloor2(false); } catch (e) {}
      try { if (ctrl && ctrl.reset) ctrl.reset(); } catch (e) {}
    }

    // all deferred step actions go through here so they can be cancelled on step change
    var pending = [];
    function later(fn, ms) { var id = setTimeout(fn, ms); pending.push(id); return id; }
    function clearPending() { pending.forEach(clearTimeout); pending = []; }

    var demos = [
      { enter: function () {                          // 1) explorar: pulsa a zona, depois abre
          scrollMapTop();
          later(function () { spot(document.querySelector('[data-zone="praca"]')); }, 650);
          later(function () { openSheet('praca'); }, 1700);
        },
        exit: function () { closeSheet(); } },
      { enter: function () {                          // 2) filtros: mostra a barra e passa por todas as opções
          scrollMapTop();
          later(function () { spot(document.getElementById('filters')); }, 650);
          var cats = ['arena', 'stand', 'lounge', 'food', 'apoio'];
          cats.forEach(function (cat, idx) {
            later(function () {
              var pill = filters.querySelector('[data-cat="' + cat + '"]');
              if (pill) filters.scrollTo({ left: pill.offsetLeft - 40, behavior: 'smooth' });
              setFilter(cat);
              if (pill) spot(pill);
            }, 1700 + idx * 1200);                    // uma opção a cada 1,2s, lentamente
          });
        },
        exit: function () { setFilter('all'); if (filters) filters.scrollTo({ left: 0, behavior: 'smooth' }); } },
      { enter: function () {                          // 3) mover/zoom: pulsa o foco, aproxima e VOLTA
          scrollMapTop();
          later(function () { spot(document.querySelector('[data-zone="arena-mind"]')); }, 650);
          later(function () { if (ctrl && ctrl.zoomable && ctrl.zoomable()) ctrl.demoZoom(); }, 1700);
          later(function () { if (ctrl && ctrl.reset) ctrl.reset(); }, 3800); // volta ao normal
        },
        exit: function () { if (ctrl && ctrl.reset) ctrl.reset(); } },
      { enter: function () {                          // 4) 2º andar: rola até o botão, pulsa, aperta, revela (sem passar)
          var btn = document.querySelector('.floor-toggle-bottom');
          scrollElCenter(btn, 0.55);
          later(function () { spot(btn && btn.querySelector('.f2-bigbtn-face')); }, 1200);
          later(function () { setFloor2(true); }, 2200);
          later(scrollFloor2, 3300);
        },
        exit: function () { setFloor2(false); } },
      { enter: function () {                          // 5) FINALE cinematográfico na Arena Top Voice
          var zone = document.querySelector('[data-zone="arena-topvoice"]');
          scrollElCenter(zone, 0.5);
          later(function () { showSpotlight(zone); }, 1300);         // fundo escuro, arena em destaque
          later(function () { spot(zone); }, 2500);                  // pulso duplo
          later(function () { hideSpotlight(); openSheet('arena-topvoice'); }, 4600); // clique
          later(function () { spot(document.getElementById('sched-toggle')); }, 5700); // mostra o botão
          later(function () { setSchedOpen(true); }, 7400);          // pulso duplo + clique
          later(function () {                                        // programação surge: rola bem suave
            var scr = document.getElementById('sheet-scroll');
            var wrap = document.getElementById('sched-toggle-wrap');
            if (scr && wrap) {
              var r1 = wrap.getBoundingClientRect(), r0 = scr.getBoundingClientRect();
              scr.scrollTo({ top: scr.scrollTop + (r1.top - r0.top) - 8, behavior: 'smooth' });
            }
          }, 8100);
          later(function () { close(); }, 10600);                    // encerra e volta ao topo
        },
        exit: function () { hideSpotlight(); setSchedOpen(false); closeSheet(); } }
    ];

    /* ---- step machine ---- */
    function paint(n) {
      steps.forEach(function (s, k) { s.classList.toggle('is-active', k === n); });
      dots.forEach(function (d, k) { d.classList.toggle('is-active', k === n); });
      btnNext.textContent = (n === steps.length - 1) ? 'Concluir' : 'Próximo';
    }
    function goTo(n) {
      n = Math.max(0, Math.min(steps.length - 1, n));
      if (n === i) return;
      clearPending();                              // cancel the previous step's deferred actions
      if (demos[i] && demos[i].exit) demos[i].exit();
      i = n;
      paint(n);
      later(function () {                          // let the exit settle before the new demo runs
        if (!host.hidden && demos[n] && demos[n].enter) demos[n].enter();
      }, 700);
    }
    function next() { if (i < steps.length - 1) goTo(i + 1); else close(); }
    function prev() { if (i > 0) goTo(i - 1); }

    function open() {
      lastFocus = document.activeElement;
      if (btnHelp) btnHelp.classList.add('tut-hide');
      document.body.classList.add('tour-live');
      host.hidden = false;
      i = -1;
      requestAnimationFrame(function () { host.classList.add('in'); });
      goTo(0);
      btnNext.focus();
    }
    function close() {
      clearPending();
      host.classList.remove('in');
      cleanupMap();
      document.body.classList.remove('tour-live');
      window.scrollTo({ top: 0, behavior: 'smooth' }); // volta ao início
      try { localStorage.setItem(KEY, '1'); } catch (e) {}
      setTimeout(function () { host.hidden = true; if (btnHelp) btnHelp.classList.remove('tut-hide'); }, 480);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    btnNext.addEventListener('click', next);
    btnSkip.addEventListener('click', close);
    if (btnHelp) btnHelp.addEventListener('click', open);
    if (backdrop) backdrop.addEventListener('click', function () {}); // transparent shield, no accidental close

    document.addEventListener('keydown', function (e) {
      if (host.hidden) return;
      if (e.key === 'Escape') { close(); return; }
      if (e.key === 'ArrowRight') { next(); return; }
      if (e.key === 'ArrowLeft') { prev(); return; }
      if (e.key === 'Tab') {                       // keep focus inside the card
        var f = card.querySelectorAll('button');
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    // swipe between steps (mobile)
    var x0 = null;
    card.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    card.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 45) { if (dx < 0) next(); else prev(); }
      x0 = null;
    });

    // tuck the floating "Como usar" away when the footer/2nd-floor button is on screen
    if (btnHelp && 'IntersectionObserver' in window) {
      var footEl = document.querySelector('.floor-toggle-bottom');
      if (footEl) {
        new IntersectionObserver(function (entries) {
          btnHelp.classList.toggle('is-tucked', entries[0].isIntersecting);
        }, { rootMargin: '0px 0px -20px 0px' }).observe(footEl);
      }
    }

    var seen = false;
    try { seen = !!localStorage.getItem(KEY); } catch (e) {}
    if (forced || !seen) open();
  })();

  function relayout() { controllers.forEach(function (c) { c.layout(); }); }
  window.addEventListener('resize', relayout);
  window.addEventListener('load', relayout); // re-fit once webfont settles
})();
