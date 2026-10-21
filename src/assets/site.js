// Small enhancements shared by every page. The site works without this file.
document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

// Mobile menu
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
toggle?.addEventListener('click', () => {
  const open = header.classList.toggle('nav-open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && header.classList.contains('nav-open')) {
    header.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  }
});

// Highlight the current month on the crowd calendar and food strip.
const month = new Date().getMonth();
document.querySelectorAll(`[data-crowd] [data-month="${month}"], [data-strip] [data-month="${month}"]`).forEach((el) => el.classList.add('is-now'));

// Enquiry form: validation, prefill and mailto fallback.
const form = document.getElementById('enquiry');
if (form) {
  const params = new URLSearchParams(location.search);
  if (params.get('region')) form.region.value = params.get('region');
  if (params.get('route')) form.message.value = `Route from the island planner:\n${params.get('route')}\n\n`;

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
        errors.innerHTML = `<p>Sorry, that didn’t send. Please email us at ${form.dataset.email}.</p>`;
      }
      return;
    }
    const lines = [];
    for (const [k, v] of data) if (v && k !== 'consent') lines.push(`${k[0].toUpperCase() + k.slice(1)}: ${v}`);
    const subject = encodeURIComponent(`Enquiry from ${data.get('name')}`);
    location.href = `mailto:${form.dataset.email}?subject=${subject}&body=${encodeURIComponent(lines.join('\n'))}`;
  });
}
