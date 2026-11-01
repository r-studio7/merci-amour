/* Merci — アニメーション用の小さなスクリプト（ビルド不要） */
(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.add("js");

  // フッターの年
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // カードを順番に少しずつ遅れて表示（同じ段ごとに 0.08 秒ずつ）
  document.querySelectorAll(".card-grid").forEach(function (grid) {
    grid.querySelectorAll(".card.reveal").forEach(function (card, i) {
      card.style.setProperty("--d", ((i % 5) * 0.08).toFixed(2) + "s");
    });
  });
  document.querySelectorAll(".timeline__item.reveal").forEach(function (item, i) {
    item.style.setProperty("--d", (i * 0.12).toFixed(2) + "s");
  });

  // スクロールで要素をふわっと表示
  var items = document.querySelectorAll(".reveal, .timeline");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!("IntersectionObserver" in window) || reduce) {
    items.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  items.forEach(function (el) { io.observe(el); });
})();
