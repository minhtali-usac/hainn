// ============================================
// NAV.JS — Shared navigation component
// ============================================

// Inject nav HTML into page
// basePath: relative prefix to the site root ('' at root, '../' one level down, etc.)
function injectNav(activePage, basePath = '') {
  const navHTML = `
    <nav id="main-nav">
      <a class="nav-logo" href="${basePath}index.html">HAI <span>NGO</span> NGOC</a>
      <ul class="nav-links" id="nav-links">
        <li><a href="${basePath}index.html" ${activePage === 'home' ? 'class="active"' : ''}>Home</a></li>
        <li class="nav-dropdown">
          <a href="${basePath}research.html" class="nav-dropdown-link ${activePage === 'research' ? 'active' : ''}">Research <i class="fas fa-chevron-down nav-dropdown-caret"></i></a>
          <div class="nav-dropdown-menu">
            <a href="${basePath}research.html#bh-formation-growth">Black Hole Formation &amp; Growth</a>
            <a href="${basePath}research.html#bh-mass-spectrum">Massive BHs Across the Mass Spectrum</a>
            <a href="${basePath}research.html#bh-galaxy-coevolution">BH &amp; Galaxy Coevolution</a>
            <a href="${basePath}research.html#kinematics-galaxy-dynamics">Kinematics &amp; Galaxy Dynamics</a>
            <a href="${basePath}research.html#computational-astrophysics">Computational Astrophysics</a>
          </div>
        </li>
        <li><a href="${basePath}publications.html" ${activePage === 'publications' ? 'class="active"' : ''}>Publications</a></li>
        <li><a href="${basePath}outreach/index.html" ${activePage === 'outreach' ? 'class="active"' : ''}>Outreach</a></li>
        <li><a href="${basePath}cv.html" ${activePage === 'cv' ? 'class="active"' : ''}>CV</a></li>
        <li><a href="${basePath}team.html" ${activePage === 'team' ? 'class="active"' : ''}>Our Team</a></li>
      </ul>
      <button class="nav-toggle" id="nav-toggle" aria-label="Menu">
        <i class="fas fa-bars"></i>
      </button>
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

// Starfield canvas
function initStarfield() {
  const canvas = document.createElement('canvas');
  canvas.id = 'starfield';
  document.body.insertAdjacentElement('afterbegin', canvas);

  const ctx = canvas.getContext('2d');
  let stars = [];
  let W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createStars(count) {
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.2 + 0.2,
        alpha: Math.random() * 0.6 + 0.1,
        speed: Math.random() * 0.015 + 0.005,
        phase: Math.random() * Math.PI * 2,
      });
    }
  }

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, W, H);
    frame += 0.01;
    for (const s of stars) {
      const a = s.alpha * (0.5 + 0.5 * Math.sin(frame * s.speed * 60 + s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 210, 240, ${a})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  resize();
  createStars(280);
  draw();

  window.addEventListener('resize', () => { resize(); createStars(280); });
}

// Nebula blobs
function initNebula() {
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="nebula nebula-1"></div>
    <div class="nebula nebula-2"></div>
    <div class="nebula nebula-3"></div>
  `;
  document.body.insertAdjacentElement('afterbegin', container);
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

// Nav scroll effect
function initNavScroll() {
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.style.background = 'rgba(4, 7, 14, 0.96)';
    } else {
      nav.style.background = 'rgba(4, 7, 14, 0.85)';
    }
  });
}

function loadKaTeX(){var link=document.createElement('link');link.rel='stylesheet';link.href='https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css';document.head.appendChild(link);var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js';script.onload=function(){var auto=document.createElement('script');auto.src='https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js';auto.onload=function(){renderMathInElement(document.body,{delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}]});};document.head.appendChild(auto);};document.head.appendChild(script);} // Init all
function initPage(activePage, basePath = '') {
  injectNav(activePage, basePath); loadKaTeX();
  initStarfield();
  initNebula();
  document.addEventListener('DOMContentLoaded', () => {
    initFadeIn();
    initNavScroll();
  });
}

// If DOMContentLoaded already fired
if (document.readyState !== 'loading') {
  initFadeIn && initFadeIn();
}
