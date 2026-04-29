(function () {
  // Derive the repo root from this script's own URL so the site works at any
  // host path (e.g. GitHub Pages at /holy/ as well as localhost:3000/).
  const scriptSrc = document.currentScript && document.currentScript.src;
  const base = scriptSrc
    ? new URL('../', scriptSrc).href
    : location.href.replace(/\/pages\/[^/]*$/, '/').replace(/\/[^/]*\.html$/, '/');

  // Determine the active page — strip .html so it works whether or not the
  // local server drops the extension (e.g. /pages/typography vs /pages/typography.html).
  const currentPath = location.pathname.toLowerCase().replace(/\.html$/, '');

  function navLink(path, label, extraStyle) {
    const isActive = currentPath.endsWith(path.toLowerCase().replace(/\.html$/, ''));
    const cls = 'nav-link' + (isActive ? ' active' : '');
    const styleAttr = extraStyle ? ' style="' + extraStyle + '"' : '';
    return '<a class="' + cls + '" href="' + base + path + '"' + styleAttr + '><span class="nav-dot"></span> ' + label + '</a>';
  }

  const html = `
    <div class="mobile-header">
      <a href="${base}" class="mobile-header-brand">
        <img src="${base}assets/holy-logo.svg" alt="Holy" class="mobile-header-logo">
        <span class="mobile-header-sub">Design System</span>
      </a>
      <button class="menu-toggle" id="menu-toggle" aria-label="Toggle navigation">
        <svg class="icon-bars" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg class="icon-x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
    <nav class="sidebar" id="sidebar">
      <div class="sidebar-logo">
        <a href="${base}"><img src="${base}assets/holy-logo.svg" alt="Holy" class="sidebar-logo-mark"></a>
        <span class="sidebar-logo-sub">Design System</span>
      </div>

      <div class="nav-group">
        <span class="nav-group-label">Foundations</span>
        ${navLink('pages/typography.html', 'Typography')}
        ${navLink('pages/colors.html', 'Colors')}
        ${navLink('pages/product-colours.html', 'Product Colours', 'padding-left:28px;font-size:13px;')}
        ${navLink('pages/product-colours-energy.html', 'Energy', 'padding-left:44px;font-size:12px;')}
        ${navLink('pages/product-colours-milkshake.html', 'Milkshake', 'padding-left:44px;font-size:12px;')}
        ${navLink('pages/product-colours-hydration.html', 'Hydration', 'padding-left:44px;font-size:12px;')}
        ${navLink('pages/product-colours-iced-tea.html', 'Iced Tea', 'padding-left:44px;font-size:12px;')}
        ${navLink('pages/product-colours-syrup.html', 'Syrup', 'padding-left:44px;font-size:12px;')}
        ${navLink('pages/spacing.html', 'Spacing &amp; Grid')}
        ${navLink('pages/tokens.html', 'Design Tokens')}
        ${navLink('pages/icons.html', 'Icons')}
        ${navLink('pages/flavour-icons.html', 'Flavour Icons', 'padding-left:28px;font-size:13px;')}
        ${navLink('pages/usp-icons.html', 'USP Icons', 'padding-left:28px;font-size:13px;')}
        ${navLink('pages/breakpoints.html', 'Breakpoints')}
      </div>

      <div class="nav-group">
        <span class="nav-group-label">Sandbox</span>
        ${navLink('sandbox/nutrition/index.html', 'PDP — Nutrition Tabs')}
      </div>

      <!-- <div class="nav-group">
        <span class="nav-group-label">Components</span>
        <a class="nav-link" href="${base}pages/announcement-bar.html"><span class="nav-dot"></span> Announcement Bar</a>
        <a class="nav-link" href="${base}pages/header.html"><span class="nav-dot"></span> Header &amp; Nav</a>
        <a class="nav-link" href="${base}pages/mega-menu.html"><span class="nav-dot"></span> Mega Menu</a>
        <a class="nav-link" href="${base}pages/scrolling-banner.html"><span class="nav-dot"></span> Scrolling Banner</a>
        <a class="nav-link" href="${base}pages/hero.html"><span class="nav-dot"></span> Hero Section</a>
        <a class="nav-link" href="${base}pages/buttons.html"><span class="nav-dot"></span> Buttons</a>
        <a class="nav-link" href="${base}pages/badges.html"><span class="nav-dot"></span> Badges &amp; Labels</a>
        <a class="nav-link" href="${base}pages/product-card.html"><span class="nav-dot"></span> Product Card</a>
        <a class="nav-link" href="${base}pages/product-grid.html"><span class="nav-dot"></span> Product Grid</a>
        <a class="nav-link" href="${base}pages/forms.html"><span class="nav-dot"></span> Form Fields</a>
        <a class="nav-link" href="${base}pages/trust-bar.html"><span class="nav-dot"></span> Trust Bar</a>
        <a class="nav-link" href="${base}pages/country-selector.html"><span class="nav-dot"></span> Country Selector</a>
        <a class="nav-link" href="${base}pages/footer.html"><span class="nav-dot"></span> Footer</a>
      </div> -->
    </nav>
  `;

  document.body.insertAdjacentHTML('afterbegin', html);

  // Toggle
  const sidebar  = document.getElementById('sidebar');
  const overlay  = document.getElementById('sidebar-overlay');
  const toggle   = document.getElementById('menu-toggle');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('open');
    toggle.classList.add('open');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    toggle.classList.remove('open');
  }

  toggle.addEventListener('click', () =>
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar()
  );
  overlay.addEventListener('click', closeSidebar);
})();
