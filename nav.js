// ============================================
// NAV.JS — Shared by every page: menu, footer, theme toggle, math, fade-in
// ============================================

// --- CÀI ĐẶT CHUNG: sửa menu và footer của toàn website tại đây ---
const SITE = {
  logo: 'HAI <span>NGO</span> NGOC',

  // Menu trên cùng. id khớp với initPage('...') ở cuối mỗi trang, dùng để tô đậm mục đang xem.
  menu: [
    { id: 'home', label: 'Home', href: 'index.html' },
    {
      id: 'research', label: 'Research', href: 'research.html',
      children: [
        { label: 'Massive BHs Across the Mass Spectrum', href: 'research-bh-mass-spectrum.html' },
        { label: 'Formation &amp; Evolution of IMBHs', href: 'research-bh-formation-growth.html' },
        { label: 'Co-evolution of SMBHs &amp; Hosts', href: 'research-bh-galaxy-coevolution.html' },
        { label: 'Computational Astrophysics', href: 'research-computational-astrophysics.html' },
      ],
    },
    { id: 'publications', label: 'Publications', href: 'publications.html' },
    { id: 'outreach', label: 'Outreach', href: 'outreach/index.html' },
    { id: 'cv', label: 'CV', href: 'cv.html' },
    { id: 'team', label: 'Our Team', href: 'team.html' },
  ],

  // Footer. Năm bản quyền tự cập nhật.
  footer: {
    owner: 'Hai Ngo Ngoc',
    affiliation: 'Galaxy Dynamics Lab, <a href="https://lsa.umich.edu/astro" target="_blank" rel="noopener">University of Michigan</a>',
    links: [
      { label: 'Home', href: 'index.html' },
      { label: 'Research', href: 'research.html' },
      { label: 'Publications', href: 'publications.html' },
      { label: 'Outreach', href: 'outreach/index.html' },
      { label: 'CV', href: 'cv.html' },
      { label: 'Team', href: 'team.html' },
    ],
  },
};

// Inject nav HTML into page
// basePath: relative prefix to the site root ('' at root, '../' one level down, etc.)
function injectNav(activePage, basePath = '') {
  const menuHTML = SITE.menu.map((item) => {
    const active = activePage === item.id;
    if (!item.children) {
      return `<li><a href="${basePath}${item.href}" ${active ? 'class="active"' : ''}>${item.label}</a></li>`;
    }
    const children = item.children.map((c) => `<a href="${basePath}${c.href}">${c.label}</a>`).join('');
    return `
      <li class="nav-dropdown">
        <a href="${basePath}${item.href}" class="nav-dropdown-link ${active ? 'active' : ''}">${item.label} <i class="fas fa-chevron-down nav-dropdown-caret"></i></a>
        <div class="nav-dropdown-menu">${children}</div>
      </li>`;
  }).join('');

  const navHTML = `
    <nav id="main-nav">
      <a class="nav-logo" href="${basePath}index.html">${SITE.logo}</a>
      <div class="nav-right">
        <ul class="nav-links" id="nav-links">${menuHTML}</ul>
        <button class="theme-toggle" id="theme-toggle" aria-label="Switch to dark theme" title="Toggle light/dark theme">
          <i class="fas fa-moon"></i>
        </button>
        <button class="nav-toggle" id="nav-toggle" aria-label="Menu">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  `;
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

  // Mobile menu open/close
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.innerHTML = open ? '<i class="fas fa-xmark"></i>' : '<i class="fas fa-bars"></i>';
    navToggle.setAttribute('aria-expanded', open);
  });

  // On mobile, tapping "Research" expands the submenu instead of navigating away,
  // since the submenu normally only opens on :hover (unavailable on touch).
  document.querySelector('.nav-dropdown').addEventListener('click', (e) => {
    if (!isMobile()) return;
    const link = e.target.closest('.nav-dropdown-link');
    if (!link) return;
    e.preventDefault();
    link.closest('.nav-dropdown').classList.toggle('open');
  });
}

// Inject footer HTML at the end of the page
function injectFooter(basePath = '') {
  const { owner, affiliation, links } = SITE.footer;
  const linksHTML = links.map((l) => `<a href="${basePath}${l.href}">${l.label}</a>`).join('');
  const footerHTML = `
    <footer>
      <div class="footer-inner">
        <div class="footer-copy">&copy; ${new Date().getFullYear()} ${owner}</div>
        <div class="footer-copy">${affiliation}</div>
        <div class="footer-links">${linksHTML}</div>
      </div>
    </footer>
  `;
  document.querySelector('.page-content').insertAdjacentHTML('beforeend', footerHTML);
}

// Light/dark theme toggle, persisted in localStorage
function initThemeToggle() {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const icon = btn.querySelector('i');

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }

  apply(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', next); } catch (e) {}
    apply(next);
  });
}

// Fade-in on scroll
function initFadeIn() {
  const els = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
}

// Load KaTeX and render $...$ and $$...$$ math in the page
function loadKaTeX() {
  const cdn = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/';

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = cdn + 'katex.min.css';
  document.head.appendChild(link);

  const script = document.createElement('script');
  script.src = cdn + 'katex.min.js';
  script.onload = () => {
    const auto = document.createElement('script');
    auto.src = cdn + 'contrib/auto-render.min.js';
    auto.onload = () => {
      renderMathInElement(document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
        ],
      });
    };
    document.head.appendChild(auto);
  };
  document.head.appendChild(script);
}

// Init all
function initPage(activePage, basePath = '') {
  injectNav(activePage, basePath);
  injectFooter(basePath);
  loadKaTeX();
  initThemeToggle();
  document.addEventListener('DOMContentLoaded', initFadeIn);
}
