(function () {
  // Derive the repo root from this script's own URL so the site works at any
  // host path (e.g. GitHub Pages at /holy/ as well as localhost:3000/).
  const base = new URL('../', document.currentScript.src).href;

  const html = `
    <button class="menu-toggle" id="menu-toggle" aria-label="Toggle navigation">
      <span></span><span></span><span></span>
    </button>
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
    <nav class="sidebar" id="sidebar">
      <div class="sidebar-logo">
        <a href="${base}"><img src="${base}assets/holy-logo.svg" alt="Holy" class="sidebar-logo-mark"></a>
        <span class="sidebar-logo-sub">Design System</span>
      </div>

      <div class="nav-group">
        <span class="nav-group-label">Foundations</span>
        <a class="nav-link" href="${base}pages/typography.html"><span class="nav-dot"></span> Typography</a>
        <a class="nav-link" href="${base}pages/colors.html"><span class="nav-dot"></span> Colors</a>
        <a class="nav-link" href="${base}pages/product-colours.html" style="padding-left:28px;font-size:13px;"><span class="nav-dot"></span> Product Colours</a>
        <a class="nav-link" href="${base}pages/spacing.html"><span class="nav-dot"></span> Spacing &amp; Grid</a>
        <a class="nav-link" href="${base}pages/tokens.html"><span class="nav-dot"></span> Design Tokens</a>
        <a class="nav-link" href="${base}pages/icons.html"><span class="nav-dot"></span> Icons</a>
        <a class="nav-link" href="${base}pages/flavour-icons.html" style="padding-left:28px;font-size:13px;"><span class="nav-dot"></span> Flavour Icons</a>
        <a class="nav-link" href="${base}pages/usp-icons.html" style="padding-left:28px;font-size:13px;"><span class="nav-dot"></span> USP Icons</a>
        <a class="nav-link" href="${base}pages/breakpoints.html"><span class="nav-dot"></span> Breakpoints</a>
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

  // Highlight active link
  const currentPath = location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '');
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPath = new URL(link.href).pathname === '/' ? '/' : new URL(link.href).pathname.replace(/\/$/, '');
    if (linkPath === currentPath) link.classList.add('active');
  });

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
