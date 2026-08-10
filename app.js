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
    credenciamento: { k: 'Entrada · Entrance', t: 'Credenciamento', e: 'Check-in', b: 'Retirada de credencial logo na entrada: fila Prime / Patrocinador à esquerda e fila Mind / VIP à direita. Tenha o QR code do ingresso em mãos.' }
  };

  var mapRoot = document.querySelector('.map-root');

  /* ---------- Filters ---------- */
  var filters = document.getElementById('filters');
  filters.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-cat]');
    if (!btn) return;
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
  var lastFocus = null;

  function openSheet(id) {
    var z = ZONES[id];
    if (!z) return;
    elKind.textContent = z.k;
    elTitle.textContent = z.t;
    elTitleEn.textContent = z.e;
    elBody.textContent = z.b;
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
    if (zoneEl) openSheet(zoneEl.getAttribute('data-zone'));
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
      clampAndApply();
    }

    function loc(e) {
      var r = frame.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    }

    function zoomTo(target, px, py) {
      target = Math.min(maxScale(), Math.max(base, target));
      var cx = (px - tx) / scale, cy = (py - ty) / scale;
      scale = target; tx = px - cx * scale; ty = py - cy * scale;
      content.style.transition = 'transform 220ms cubic-bezier(0.16,1,0.3,1)';
      clampAndApply();
      setTimeout(function () { content.style.transition = ''; }, 240);
    }

    function capture(id) { try { frame.setPointerCapture(id); } catch (_) {} }

    frame.addEventListener('pointerdown', function (e) {
      if (!zoomable()) return;                 // desktop / fits fully: leave clicks & native scroll alone
      pointers.set(e.pointerId, loc(e));
      moved = 0;
      frame.classList.add('hint-hidden');
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
    return { layout: layout };
  }

  var controllers = [];
  document.querySelectorAll('.scale-fit').forEach(function (frame) {
    controllers.push(buildPanZoom(frame));
  });

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
  function relayout() { controllers.forEach(function (c) { c.layout(); }); }
  window.addEventListener('resize', relayout);
  window.addEventListener('load', relayout); // re-fit once webfont settles
})();
