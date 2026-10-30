// Small enhancements shared by every page. The site works without this file.

// Mobile menu (full-screen panel below 1100px)
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
// t() marks UI words for the per-language copies written by scripts/i18n.mjs.
const t = (s) => s;
const setMenu = (open) => {
  document.body.classList.toggle('nav-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.querySelector('.nav-toggle-label').textContent = open ? t('Close') : t('Menu');
  document.body.style.overflow = open ? 'hidden' : '';
};
toggle?.addEventListener('click', () => setMenu(!document.body.classList.contains('nav-open')));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && document.body.classList.contains('nav-open')) { setMenu(false); toggle.focus(); }
});

// Transparent header over the hero turns solid once you scroll past it.
const hero = document.querySelector('[data-hero]');
if (hero && header) {
  const update = () => header.classList.toggle('is-solid', window.scrollY > hero.offsetHeight - header.offsetHeight - 10);
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}

// Reveal-on-scroll. Content is visible without JS and with reduced motion.
const reveal = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  reveal.forEach((el) => io.observe(el));
  // Anything already scrolled past (deep links, fast scrolling) shows at once.
  const sweep = () => reveal.forEach((el) => { if (el.getBoundingClientRect().top < innerHeight) el.classList.add('is-in'); });
  addEventListener('scroll', sweep, { passive: true });
  addEventListener('load', sweep);
} else reveal.forEach((el) => el.classList.add('is-in'));

// Horizontal scroller buttons.
document.querySelectorAll('[data-scroll]').forEach((b) => b.addEventListener('click', () => {
  const sc = b.closest('section').querySelector('[data-scroller]');
  const card = sc.querySelector('.card');
  sc.scrollBy({ left: (+b.dataset.scroll) * ((card?.offsetWidth || 300) + 20), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}));

// Highlight the current month on the crowd calendar and food strip.
const month = new Date().getMonth();
document.querySelectorAll(`[data-crowd] [data-month="${month}"], [data-strip] [data-month="${month}"]`).forEach((el) => el.classList.add('is-now'));

// Enquiry form: validation, prefill and mailto fallback.
const form = document.getElementById('enquiry');
if (form) {
  const params = new URLSearchParams(location.search);
  if (params.get('region')) form.region.value = params.get('region');
  if (params.get('route')) form.message.value = 'Route from the island planner:' + '\n' + params.get('route') + '\n\n';

  const errors = form.querySelector('.form-errors');
  form.addEventListener('submit', async (e) => {
    const problems = [];
    for (const [name, msg] of [['name', 'Please enter your name.'], ['email', 'Please enter a valid email address.'], ['consent', 'Please tick the consent box so we can reply.']]) {
      const el = form.elements[name];
      const bad = el.type === 'checkbox' ? !el.checked : !el.value.trim() || (el.type === 'email' && !el.validity.valid);
      el.setAttribute('aria-invalid', String(bad));
      if (bad) problems.push(msg);
    }
    if (problems.length) {
      e.preventDefault();
      errors.innerHTML = `<p>${problems.join('<br>')}</p>`;
      form.querySelector('[aria-invalid="true"]').focus();
      return;
    }
    errors.innerHTML = '';
    const data = new FormData(form);
    const endpoint = form.dataset.endpoint;
    e.preventDefault();
    if (endpoint) {
      try {
        const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
        if (!res.ok) throw new Error(res.statusText);
        form.outerHTML = '<p class="form-done" role="status" tabindex="-1" id="form-done">Thank you. Your enquiry is on its way and we’ll reply soon.</p>';
        document.getElementById('form-done').focus();
      } catch {
        errors.innerHTML = '<p>' + 'Sorry, that didn’t send. Please email us at %s.'.replace('%s', form.dataset.email) + '</p>';
      }
      return;
    }
    const lines = [];
    for (const [k, v] of data) if (v && k !== 'consent') lines.push(`${k[0].toUpperCase() + k.slice(1)}: ${v}`);
    const subject = encodeURIComponent(`Enquiry from ${data.get('name')}`);
    location.href = `mailto:${form.dataset.email}?subject=${subject}&body=${encodeURIComponent(lines.join('\n'))}`;
  });
}
