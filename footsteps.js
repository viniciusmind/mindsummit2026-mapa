/* ============================================================
   Mind Summit 2026 — Pegadas animadas nos corredores do mapa
   Cada trilha é uma polilinha em % (0–100) do mapa 1000×1918.
   As pegadas são a PRIMEIRA camada do mapa, então qualquer
   pegada que encoste num bloco some atrás dele (nunca bagunça).
   ============================================================ */
(function () {
  // trilhas nos corredores livres — ajuste os pontos se quiser
  var TRAILS = [
    { pts: [[67.5, 11], [67.5, 79]], dur: 8.5 },              // corredor vertical central (desce)
    { pts: [[6, 57.4], [58, 57.4]], dur: 7.5, phase: 1.2 },   // corredor horizontal do meio (direita)
    { pts: [[76, 96], [76, 83]], dur: 5.5, phase: 0.6 },      // entrada -> credenciamento (sobe)
    { pts: [[25, 3], [59, 3]], dur: 7, phase: 2.1 },          // faixa superior (direita)
    { pts: [[53, 79.5], [67, 79.5]], dur: 6, phase: 1.6 },    // baixo-centro, rumo à Sextante (direita)
    { pts: [[33, 61.5], [33, 79.5]], dur: 6.5, phase: 0.9 },  // entre a praça e os estandes centrais (desce)
    { pts: [[13, 85.9], [64, 85.9]], dur: 7.2, phase: 3.0 }   // barracas <-> banheiros/escadas/chapelaria (direita)
  ];

  var W = 1000, H = 1918;
  var SPACING = 48;   // distância (px nativos) entre pegadas ao longo da trilha
  var STANCE = 8.5;   // meia-distância entre pé esquerdo e direito

  function build() {
    var mapInner = document.querySelector('.map-inner');
    if (!mapInner) return;
    if (mapInner.querySelector('.footsteps')) return; // idempotente

    var box = document.createElement('div');
    box.className = 'footsteps';
    box.setAttribute('aria-hidden', 'true');

    TRAILS.forEach(function (trail) {
      var pts = trail.pts.map(function (p) { return { x: p[0] / 100 * W, y: p[1] / 100 * H }; });
      var segs = [], total = 0;
      for (var i = 0; i < pts.length - 1; i++) {
        var a = pts[i], b = pts[i + 1];
        var len = Math.hypot(b.x - a.x, b.y - a.y);
        segs.push({ a: a, b: b, len: len, acc: total });
        total += len;
      }
      if (total <= 0) return;
      var n = Math.floor(total / SPACING);
      var dur = trail.dur || 7;
      var phase = trail.phase || 0;

      for (var k = 0; k <= n; k++) {
        var d = k * SPACING, s = segs[0];
        for (var j = 0; j < segs.length; j++) {
          s = segs[j];
          if (d <= s.acc + s.len) break;
        }
        var t = s.len ? (d - s.acc) / s.len : 0;
        var x = s.a.x + (s.b.x - s.a.x) * t;
        var y = s.a.y + (s.b.y - s.a.y) * t;
        var ang = Math.atan2(s.b.y - s.a.y, s.b.x - s.a.x);   // direção do passo
        var side = (k % 2 === 0) ? 1 : -1;                    // alterna pé esq/dir
        var ox = Math.cos(ang + Math.PI / 2) * STANCE * side;
        var oy = Math.sin(ang + Math.PI / 2) * STANCE * side;
        var fx = x + ox, fy = y + oy;
        var deg = ang * 180 / Math.PI + 90;                   // símbolo aponta pra cima

        var el = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        el.setAttribute('class', 'foot');
        el.setAttribute('viewBox', '0 0 40 64');
        el.style.left = (fx / W * 100) + '%';
        el.style.top = (fy / H * 100) + '%';
        el.style.transform = 'translate(-50%,-50%) rotate(' + deg.toFixed(1) + 'deg) scaleX(' + side + ')';
        el.style.animationDuration = dur + 's';
        // atraso crescente = onda que avança na direção do caminho; fill both = fica invisível antes da vez
        el.style.animationDelay = (k / (n + 1) * dur + phase).toFixed(2) + 's';
        var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        use.setAttribute('href', '#i-foot');
        el.appendChild(use);
        box.appendChild(el);
      }
    });

    mapInner.insertBefore(box, mapInner.firstChild);
  }

  if (document.readyState !== 'loading') build();
  else document.addEventListener('DOMContentLoaded', build);
})();
