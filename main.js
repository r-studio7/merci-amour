// Merci site — main.js
(function () {
  // ----- mobile menu -----
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('gnav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ----- little gradient hearts that follow the mouse (whole page) -----
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia && window.matchMedia('(hover: hover)').matches;
  var layer = document.getElementById('hearts');
  if (!layer || reduce || !fine) return;

  var NS = 'http://www.w3.org/2000/svg';
  var POOL = 16, hearts = [], gens = [];
  for (var k = 0; k < POOL; k++) {
    var s = document.createElementNS(NS, 'svg');
    s.setAttribute('class', 'heart');
    s.setAttribute('viewBox', '0 0 24 24');
    s.style.display = 'none';
    var p = document.createElementNS(NS, 'path');
    p.setAttribute('d', 'M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.7 1.2 4.6 2.7.9-1.5 2.5-2.7 4.6-2.7 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z');
    p.setAttribute('fill', 'url(#mg)');
    s.appendChild(p);
    layer.appendChild(s);
    hearts.push(s);
    gens.push(0);
  }
  var seq = 0, last = null;
  window.addEventListener('mousemove', function (e) {
    var x = e.clientX, y = e.clientY;
    if (last) {
      var dx = x - last.x, dy = y - last.y;
      if (dx * dx + dy * dy < 30 * 30) return;
    }
    last = { x: x, y: y };
    var i = seq % POOL; seq++;
    gens[i] = gens[i] ? 0 : 1; // alternate keyframes so the animation restarts
    var size = 10 + Math.round(Math.random() * 8);
    var rot = Math.round(Math.random() * 30 - 15);
    var h = hearts[i];
    h.style.cssText = 'display:block;left:' + x + 'px;top:' + y + 'px;width:' + size + 'px;height:' + size + 'px;--rot:' + rot + 'deg;animation-name:' + (gens[i] ? 'floatA' : 'floatB');
  }, { passive: true });
})();
