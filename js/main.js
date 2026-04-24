/* --- Nav mobile toggle --- */
const toggle = document.querySelector('.nav-toggle');
const links  = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });
}

/* --- Reveal on scroll --- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* --- Highlight active nav link based on path --- */
const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === here) a.classList.add('active');
  // Traiter le cas racine
  if (here === '' && (href === 'index.html' || href === './')) a.classList.add('active');
});

/* --- Terminal typing animation (hero only) --- */
const term = document.querySelector('[data-terminal]');
if (term) {
  const lines = JSON.parse(term.dataset.lines || '[]');
  let i = 0;
  const render = () => {
    if (i > lines.length) return;
    term.innerHTML = lines.slice(0, i).map(l => {
      if (l.startsWith('#')) return `<div class="term-line term-comment">${l}</div>`;
      if (l.startsWith('$')) return `<div class="term-line"><span class="term-prompt">$</span>${l.slice(1)}</div>`;
      if (l.startsWith('=')) return `<div class="term-line term-ok">${l.slice(1)}</div>`;
      return `<div class="term-line">${l}</div>`;
    }).join('');
    i++;
    setTimeout(render, 350);
  };
  render();
}
