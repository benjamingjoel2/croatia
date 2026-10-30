// Interactive island-hopping planner. Progressive enhancement: the page
// already lists ready-made routes rendered at build time.
import { plan, fmtMins, legLabel, t, fill } from './planner-core.js';

const data = JSON.parse(document.getElementById('planner-data').textContent);
const app = document.getElementById('planner-app');
const form = app.querySelector('form');
const chosenList = app.querySelector('.chosen');
const result = app.querySelector('.planner-result');
const byId = Object.fromEntries(data.islands.map((i) => [i.id, i]));
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

let stops = [];

function legHTML(s) {
  return `<li class="leg leg-${s.type}"><span class="leg-type">${legLabel[s.type]}</span><span class="leg-route">${esc(s.fromName)} → ${esc(s.toName)}${s.op ? ` <span class="leg-op">${esc(s.op)}</span>` : ''}</span><span class="leg-time">~${fmtMins(s.mins)}${s.seasonal ? ' <span class="badge">' + t('seasonal') + '</span>' : ''}</span></li>`;
}

function routeText(r) {
  const out = [fill('Start: %s', { s: r.start })];
  for (const s of r.segments) out.push(fill('%i (%n nights, base %b)', { i: s.name, n: s.nights, b: s.base }));
  if (r.end) out.push(fill('End: %s', { s: r.end }));
  return out.join(' → ');
}

function render() {
  // Chosen list
  // Labels are built outside the template so scripts/i18n.mjs sees each phrase as its own string.
  const moveUp = (n) => fill('Move %s earlier', { s: n });
  const moveDown = (n) => fill('Move %s later', { s: n });
  const remove = (n) => fill('Remove %s', { s: n });
  chosenList.innerHTML = stops.map((id, i) => `<li><span class="name">${esc(byId[id].name)}</span>
    <button type="button" data-move="${i}" data-dir="-1" aria-label="${esc(moveUp(byId[id].name))}" ${i === 0 ? 'disabled' : ''}>↑</button>
    <button type="button" data-move="${i}" data-dir="1" aria-label="${esc(moveDown(byId[id].name))}" ${i === stops.length - 1 ? 'disabled' : ''}>↓</button>
    <button type="button" data-remove="${i}" aria-label="${esc(remove(byId[id].name))}">✕</button></li>`).join('');
  app.querySelectorAll('[data-add]').forEach((b) => {
    const used = stops.includes(b.dataset.add);
    b.setAttribute('aria-disabled', String(used));
  });

  if (!stops.length) {
    result.innerHTML = '<div class="planner-empty"><h3>Your island hop</h3><p>Add islands on the left and your route appears here, with each ferry or catamaran leg, rough crossing times and suggested nights.</p></div>';
    return;
  }
  const r = plan(data, { start: form.start.value, end: form.end.value, stops, car: form.car.checked });
  result.innerHTML = `<h3>${t('Your island hop')}</h3>
  <ol class="itinerary">
    <li class="it-start"><span class="it-dot" aria-hidden="true"></span><strong>${esc(fill('Start: %s', { s: r.start }))}</strong></li>
    ${r.segments.map((s) => `<li class="it-stop"><ul class="legs">${s.steps.map(legHTML).join('')}</ul>
      <div class="it-island"><span class="it-dot" aria-hidden="true"></span><div>
        <h4>${esc(s.name)} <span class="nights">${fill('%n nights', { n: s.range[0] === s.range[1] ? s.range[0] : `${s.range[0]}–${s.range[1]}` })}</span></h4>
        <p class="small">${esc(fill('Base: %s.', { s: s.base }))} ${esc(s.why)}</p></div></div></li>`).join('')}
    ${r.end ? `<li class="it-stop"><ul class="legs">${r.finalSteps.map(legHTML).join('')}</ul><div class="it-island"><span class="it-dot" aria-hidden="true"></span><strong>${esc(fill('End: %s', { s: r.end }))}</strong></div></li>` : ''}
  </ol>
  <p class="it-total">${fill('<strong>%n nights</strong> on islands · about <strong>%t</strong> of crossings and transfers', { n: `${r.totalNights}–${r.segments.reduce((n, s) => n + s.range[1], 0)}`, t: fmtMins(r.totalMins) })}</p>
  ${r.warnings.length ? `<ul class="it-warn">${r.warnings.map((w) => `<li>${esc(w)}</li>`).join('')}</ul>` : ''}
  <p><a class="btn" href="/enquire/?route=${encodeURIComponent(routeText(r))}">${t('Ask us about this route')}<span class="btn-icon" aria-hidden="true">→</span></a></p>`;
}

app.addEventListener('click', (e) => {
  const t = e.target.closest('button');
  if (!t) return;
  if (t.dataset.add && t.getAttribute('aria-disabled') !== 'true') stops.push(t.dataset.add);
  else if (t.dataset.remove) stops.splice(+t.dataset.remove, 1);
  else if (t.dataset.move) {
    const i = +t.dataset.move, j = i + +t.dataset.dir;
    [stops[i], stops[j]] = [stops[j], stops[i]];
    render();
    chosenList.querySelectorAll('li')[j]?.querySelector(`[data-dir="${t.dataset.dir}"]:not([disabled])`)?.focus();
    return;
  } else return;
  render();
});
form.addEventListener('change', render);

document.querySelectorAll('[data-load-preset]').forEach((b) => b.addEventListener('click', () => {
  const p = data.presets.find((x) => x.id === b.dataset.loadPreset);
  stops = [...p.stops];
  form.start.value = p.start;
  form.end.value = p.end;
  render();
  app.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  form.start.focus({ preventScroll: true });
}));

render();
