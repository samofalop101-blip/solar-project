// nav.js — inject shared nav + footer + scroll logic on all pages
(function () {
  // ── Detect active page ──
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = [
    { href: 'index.html',    label: 'HOME' },
    { href: 'about.html',    label: 'ABOUT' },
    { href: 'services.html', label: 'SERVICES' },
    { href: 'products.html', label: 'PRODUCTS' },
    { href: 'contact.html',  label: 'CONTACT' },
  ];
  const linksHTML = navLinks.map(l =>
    `<li><a href="${l.href}" class="${path === l.href ? 'active' : ''}">${l.label}</a></li>`
  ).join('');

  // ── Nav HTML ──
  const navHTML = `
  <nav class="nav" id="mainNav">
    <a href="index.html" class="nav-logo">
      <img src="logo.png" alt="B&M Logo">
      B&amp;M <b>Solar</b>
    </a>
    <ul class="nav-links" id="navLinks">${linksHTML}</ul>
    <a class="nav-btn" href="contact.html">Get Quote</a>
    <div class="hamburger" id="hamburger">
      <span></span><span></span><span></span>
    </div>
  </nav>`;

  // ── Footer HTML ──
  const footerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo-row">
            <img src="logo.png" alt="Logo">
            B&amp;M <b>Solar</b>
          </div>
          <p>Reliable, affordable solar energy solutions designed for Nigerian homes and businesses. Powering lives since 2015.</p>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="services.html">Solar Installation</a></li>
            <li><a href="services.html">Inverter Setup</a></li>
            <li><a href="services.html">Maintenance</a></li>
            <li><a href="services.html">Off-Grid Systems</a></li>
            <li><a href="services.html">Consultation</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <p>📧 bminverterandsolarltd@gmail.com</p>
          <p style="margin-top:8px">📞 +234-09049311684</p>
          <p style="margin-top:8px">📍 Lagos, Nigeria</p>
        </div>
      </div>
      <div class="footer-bottom">
  <p>© 2026 B&M Solar and Inverter Ltd. All rights reserved.</p>

  <div class="social-links">
    <a class="social-link"
       href="https://instagram.com/bminverterandsolarltd"
       target="_blank"
       title="Instagram">

      <i class="fab fa-instagram"></i>

    </a>
   </div>
    </div>
  </footer>`;

  // ── Inject ──
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // ── Scroll nav shadow ──
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  });

  // ── Mobile hamburger ──
  const ham = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    links.classList.toggle('mobile-open');
  });

  // ── Fade-up on scroll ──
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  
})();
