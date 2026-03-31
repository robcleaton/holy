(function () {
  // ── Stylesheet ────────────────────────────────────────────
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = '/styles.css';
  document.head.appendChild(css);

  // ── Favicons ──────────────────────────────────────────────
  const favIco = document.createElement('link');
  favIco.rel = 'icon';
  favIco.href = '/favicon.ico';
  favIco.setAttribute('sizes', '32x32');
  document.head.appendChild(favIco);

  const favSvg = document.createElement('link');
  favSvg.rel = 'icon';
  favSvg.href = '/favicon.svg';
  favSvg.type = 'image/svg+xml';
  document.head.appendChild(favSvg);

  const apple = document.createElement('link');
  apple.rel = 'apple-touch-icon';
  apple.href = '/apple-touch-icon.png';
  document.head.appendChild(apple);
})();
