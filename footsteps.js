/* ============================================================
   Mind Summit 2026 — Pegadas animadas nos corredores do mapa
   Cada trilha é uma polilinha em % (0–100) do mapa (map-inner).
   As pegadas são a PRIMEIRA camada do mapa, então qualquer
   pegada que encoste num bloco some atrás dele (nunca bagunça).

   NOVO: as rotas mudam com o filtro ativo (data-filter no .map-root).
   "all" usa as rotas padrão; cada categoria aponta pras suas zonas.
   Edite os pontos [x%, y%] à vontade pra calibrar.
   ============================================================ */
(function () {
  var W = 1000, H = 1918;
  var SPACING = 48;   // distância (px) entre pegadas ao longo da trilha
  var STANCE = 8.5;   // meia-distância entre pé esquerdo e direito

  // rotas padrão (filtro "Tudo") — corredores gerais
  var DEFAULT = [
    { pts: [[67.5, 11], [67.5, 79]], dur: 8.5 },              // corredor vertical central (desce)
    { pts: [[6, 57.4], [58, 57.4]], dur: 7.5, phase: 1.2 },   // corredor horizontal do meio (direita)
    { pts: [[76, 96], [76, 83]], dur: 5.5, phase: 0.6 },      // entrada -> credenciamento (sobe)
    { pts: [[53, 79.5], [67, 79.5]], dur: 6, phase: 1.6 },    // baixo-centro, rumo à Sextante
    { pts: [[33, 61.5], [33, 79.5]], dur: 6.5, phase: 0.9 },  // entre a praça e os estandes centrais
    { pts: [[13, 85.9], [64, 85.9]], dur: 7.2, phase: 3.0 }   // barracas <-> banheiros/escadas/chapelaria
  ];

  // rotas por categoria — as pegadas fluem em direção às zonas daquele filtro
  var SETS = {
    all: DEFAULT,

    // ARENAS: vêm de longe (entrada/bordas) e fluem até as arenas
    arena: [
      { pts: [[76, 96], [76, 84], [68, 84], [68, 36], [71.6, 35.5]], dur: 9, phase: 0.4 },  // entrada -> Top Voice
      { pts: [[68, 79], [68, 26], [61, 25]], dur: 7.5, phase: 1.4 },                          // corredor central -> Arena Mind
      { pts: [[58, 57.4], [8, 57.4], [8, 53.4]], dur: 7, phase: 2.2 },                        // vem da esquerda -> Arena Mind (por baixo)
      { pts: [[53, 79.5], [68, 79.5], [68, 69], [71.9, 68]], dur: 7, phase: 1.0 }             // vem de baixo -> Sextante
    ],

    // ESTANDES: vêm da entrada, da esquerda e do banheiro até os stands
    stand: [
      { pts: [[76, 96], [76, 84], [68, 84], [68, 45], [71.7, 44.5]], dur: 9, phase: 0.5 },   // entrada -> estandes da direita
      { pts: [[6, 57.4], [42, 57.4], [42, 61.6]], dur: 7.5, phase: 1.6 },                     // esquerda -> estandes centrais
      { pts: [[68, 72], [68, 59], [72.6, 59]], dur: 6, phase: 0.9 },                          // corredor central -> Well Z
      { pts: [[28, 65], [36.6, 65]], dur: 4, phase: 2.3 },                                    // lateral -> stand central
      { pts: [[32, 88], [32, 84], [32, 66], [36.6, 65]], dur: 7, phase: 3.1 }                 // banheiro (base) -> sobe -> estandes
    ],

    // LOUNGES: vêm de longe (entrada, esquerda e banheiros) até os lounges + BWG
    lounge: [
      { pts: [[76, 96], [76, 84], [68, 84], [68, 14], [71.6, 12.5]], dur: 9.5, phase: 0.4 },     // entrada -> Lounge Heineken
      { pts: [[68, 55], [68, 19], [71.6, 19]], dur: 7, phase: 1.6 },                              // central sobe -> Lounge Prime
      { pts: [[6, 57.4], [62, 57.4], [68, 52], [72.5, 50]], dur: 8, phase: 2.4 },                 // esquerda -> Coworking
      { pts: [[68, 60], [68, 26], [71.6, 26]], dur: 7, phase: 3.0 },                              // central -> Lounge BWG (vira)
      { pts: [[15, 4], [62, 4], [68, 10], [68, 19], [71.6, 19]], dur: 8.5, phase: 1.2 },          // banheiro do topo -> Lounge Prime
      { pts: [[32, 88], [32, 85.9], [68, 85.9], [68, 13], [71.6, 12.5]], dur: 10.5, phase: 2.8 }  // banheiro de baixo -> sobe -> Heineken
    ],

    // ALIMENTAÇÃO: vêm de longe convergindo pra Praça e barracas
    food: [
      { pts: [[76, 96], [76, 85.9], [13, 85.9], [13, 66]], dur: 9, phase: 0.5 },              // entrada -> corredor -> Praça
      { pts: [[58, 57.4], [14, 57.4], [14, 61.4]], dur: 7, phase: 1.8 },                       // direita -> desce na Praça
      { pts: [[50, 79], [30, 79], [30, 80.6]], dur: 5.5, phase: 1.0 },                         // -> barracas da praça (por cima)
      { pts: [[76, 84], [68, 84], [68, 82], [52.5, 82]], dur: 6.5, phase: 2.5 },               // -> barracas da praça (pela direita)
      { pts: [[88, 54], [88, 58.2]], dur: 3.5, phase: 1.2 },                                   // barraca-loja de baixo <- de cima
      { pts: [[95, 29], [95, 44.3]], dur: 4.5, phase: 0.4 },                                   // barraca-loja de cima <- de cima
      { pts: [[95, 57], [92.6, 58.8]], dur: 3.5, phase: 2.0 }                                  // barraca-loja de baixo <- de baixo
    ],

    // APOIO: coluna empilhada no meio (banheiro/chapelaria/escada) + banheiro do corredor + canto direito
    apoio: [
      { pts: [[45, 86], [45, 99]], dur: 7, phase: 0.4 },                                        // desce a coluna: banheiro -> chapelaria -> escada
      { pts: [[68, 72], [68, 7.5]], dur: 8.5, phase: 1.4 },                                      // corredor central -> banheiro (topo do corredor)
      { pts: [[94.5, 82], [94.5, 89]], dur: 4.5, phase: 2.0 }                                    // -> escada/elevador da direita
    ]
  };

  function buildTrail(box, trail) {
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
      var ang = Math.atan2(s.b.y - s.a.y, s.b.x - s.a.x);
      var side = (k % 2 === 0) ? 1 : -1;
      var ox = Math.cos(ang + Math.PI / 2) * STANCE * side;
      var oy = Math.sin(ang + Math.PI / 2) * STANCE * side;
      var fx = x + ox, fy = y + oy;
      var deg = ang * 180 / Math.PI + 90;

      var el = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      el.setAttribute('class', 'foot');
      el.setAttribute('viewBox', '0 0 40 64');
      el.style.left = (fx / W * 100) + '%';
      el.style.top = (fy / H * 100) + '%';
      el.style.transform = 'translate(-50%,-50%) rotate(' + deg.toFixed(1) + 'deg) scaleX(' + side + ')';
      el.style.animationDuration = dur + 's';
      el.style.animationDelay = (k / (n + 1) * dur + phase).toFixed(2) + 's';
      var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      use.setAttribute('href', '#i-foot');
      el.appendChild(use);
      box.appendChild(el);
    }
  }

  var box = null;
  function render(cat) {
    var mapInner = document.querySelector('.map-inner');
    if (!mapInner) return;
    if (!box) {
      box = document.createElement('div');
      box.className = 'footsteps';
      box.setAttribute('aria-hidden', 'true');
      mapInner.insertBefore(box, mapInner.firstChild);
    }
    box.textContent = '';
    (SETS[cat] || SETS.all).forEach(function (trail) { buildTrail(box, trail); });
  }

  function currentCat() {
    var mr = document.querySelector('.map-root');
    return (mr && mr.getAttribute('data-filter')) || 'all';
  }

  // pegadas no corredor principal do 2º andar (só aparecem quando o overlay abre)
  function buildFloor2() {
    var content = document.querySelector('.floor2-overlay .f2-content');
    if (!content || content.querySelector('.footsteps-f2')) return;
    var box = document.createElement('div');
    box.className = 'footsteps footsteps-f2 f2-rise';   // sobe junto com o corredor
    box.setAttribute('aria-hidden', 'true');
    // vindo das escadas/elevadores PARA o corredor (centro y ≈ 83.25%); tudo à direita do texto
    buildTrail(box, { pts: [[45, 87], [45, 83.25], [61, 83.25]], dur: 5, phase: 0 });       // escada do meio -> corredor (direita)
    buildTrail(box, { pts: [[94.5, 87], [94.5, 83.25], [79, 83.25]], dur: 5.5, phase: 1.4 }); // elevador da direita -> corredor (esquerda)
    content.appendChild(box); // último filho = por cima da barra do corredor
  }

  function init() {
    render(currentCat());
    buildFloor2();
    var mr = document.querySelector('.map-root');
    if (mr && window.MutationObserver) {
      new MutationObserver(function () { render(currentCat()); })
        .observe(mr, { attributes: true, attributeFilter: ['data-filter'] });
    }
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
