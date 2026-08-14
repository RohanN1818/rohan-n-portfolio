// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Typewriter animation for nav brand: types "Rohan N" then settles
(function typeBrand() {
  const el = document.getElementById('navBrandText');
  const full = 'Rohan N';
  let i = 0;
  el.textContent = '';
  function tick() {
    if (i <= full.length) {
      el.textContent = full.slice(0, i);
      i++;
      setTimeout(tick, 90);
    }
  }
  tick();
})();

// Nav shadow/background on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Reveal-on-scroll for sections and project cards
const revealTargets = document.querySelectorAll(
  '.project, .skillcard, .about__grid, .contact__inner'
);

revealTargets.forEach((el) => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

revealTargets.forEach((el) => revealObserver.observe(el));

// Safety net: force-reveal anything still hidden after 2s
// (covers edge cases where IntersectionObserver misbehaves)
setTimeout(() => {
  revealTargets.forEach((el) => el.classList.add('reveal--visible'));
}, 2000);
