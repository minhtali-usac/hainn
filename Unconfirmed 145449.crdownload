// ============================================
// NAV.JS — Shared navigation component
// ============================================

// Inject nav HTML into page
function injectNav(activePage) {
  const navHTML = `
    <nav id="main-nav">
      <a class="nav-logo" href="index.html">HAI <span>NGO</span> NGOC</a>
      <ul class="nav-links" id="nav-links">
        <li><a href="index.html" ${activePage === 'home' ? 'class="active"' : ''}>Home</a></li>
        <li class="nav-dropdown">
          <a href="research.html" ${activePage === 'research' ? 'class="active"' : ''}>Research ▾</a>
          <div class="nav-dropdown-menu">
            <a href="research.html#star-clusters">IMBHs in Star Clusters</a>
            <a href="research.html#dwarf-galaxies">BH in Dwarf Galaxies</a>
            <a href="research.html#smbh-evolution">SMBH Evolution</a>
          </div>
        </li>
        <li><a href="publications.html" ${activePage === 'publications' ? 'class="active"' : ''}>Publications</a></li>
        <li><a href="cv.html" ${activePage === 'cv' ? 'class="active"' : ''}>CV</a></li>
        <li><a href="team.html" ${activePage === 'team' ? 'class="active"' : ''}>Our Team</a></li>
      </ul>
      <button class="nav-toggle" id="nav-toggle" aria-label="Menu">☰</button>
    </nav>
  `;
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Mobile toggle
  document.getElementById('nav-toggle').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('open');
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

// Init all
function initPage(activePage) {
  injectNav(activePage);
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
