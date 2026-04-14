(function () {
  // Derive the repo root from this script's own URL so the site works at any
  // host path (e.g. GitHub Pages at /holy/ as well as localhost:3000/).
  const base = new URL('../', document.currentScript.src).href;

  // ── Stylesheet ──────────────────────────────────────────────
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = base + 'styles.css';
  document.head.appendChild(css);

  // ── Favicons ────────────────────────────────────────────────
  const favIco = document.createElement('link');
  favIco.rel = 'icon';
  favIco.href = base + 'assets/favicon.ico';
  favIco.setAttribute('sizes', '32x32');
  document.head.appendChild(favIco);

  const favSvg = document.createElement('link');
  favSvg.rel = 'icon';
  favSvg.href = base + 'assets/favicon.svg';
  favSvg.type = 'image/svg+xml';
  document.head.appendChild(favSvg);

  const apple = document.createElement('link');
  apple.rel = 'apple-touch-icon';
  apple.href = base + 'assets/apple-touch-icon.png';
  document.head.appendChild(apple);
})();
