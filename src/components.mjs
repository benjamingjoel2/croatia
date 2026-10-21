import { esc, dag, sourcesBlock } from './lib.mjs';
import { crowds, crowdLevels, months, monthsLong, foodSeasons } from './data/seasons.mjs';
import * as ferries from './data/ferries.mjs';
import { plan, fmtMins, legLabel } from './assets/planner-core.js';

/* ── Crowd calendar ─────────────────────────────────────────── */
export function crowdCalendar({ withAlternatives = true } = {}) {
  const rows = crowds.map((c) => `<tr>
      <th scope="row">${esc(c.place)}</th>
      ${c.levels.map((l, i) => `<td class="lvl lvl-${l}" data-month="${i}"><span aria-hidden="true">${l}</span><span class="sr-only">${monthsLong[i]}: ${crowdLevels[l]}</span></td>`).join('')}
    </tr>`).join('');
  const alts = withAlternatives ? `<div class="alt-grid">${crowds.map((c) => `
    <div class="alt">
      <h3>Instead of ${esc(c.place)} in peak months</h3>
      <p class="small">${dag(c.note)}</p>
      <ul>${c.alternatives.map(([n, t]) => `<li><strong>${esc(n)}</strong>: ${dag(t)}</li>`).join('')}</ul>
      <p class="quiet-months">Quietest: <strong>${c.levels.map((l, i) => (l <= 2 ? months[i] : null)).filter(Boolean).join(', ')}</strong></p>
    </div>`).join('')}</div>${sourcesBlock(crowds.map((c) => c.src || []))}` : '';
  return `<div class="crowd" data-crowd>
  <div class="table-scroll" tabindex="0" role="region" aria-label="Crowd calendar, scrolls sideways">
  <table class="crowd-table">
    <caption>How busy it usually is, month by month <span class="small">(indicative, 1 = quiet, 5 = peak)</span></caption>
    <thead><tr><th scope="col"><span class="sr-only">Place</span></th>${months.map((m, i) => `<th scope="col" data-month="${i}"><abbr title="${monthsLong[i]}">${m}</abbr></th>`).join('')}</tr></thead>
    <tbody>${rows}</tbody>
  </table>
  </div>
  <ul class="legend" aria-label="Key">${crowdLevels.slice(1).map((l, i) => `<li><span class="swatch lvl lvl-${i + 1}" aria-hidden="true">${i + 1}</span>${l}</li>`).join('')}</ul>
  ${alts}
</div>`;
}

/* ── Istrian food seasons strip ─────────────────────────────── */
const span = (from, to) => (from <= to ? [[from, to]] : [[from, 11], [0, to]]);
const rangeText = (from, to) => (from === to ? monthsLong[from] : `${monthsLong[from]} to ${monthsLong[to]}`);

export function foodStrip({ withSources = false } = {}) {
  return `<div class="strip" data-strip>
  <div class="strip-months" aria-hidden="true"><span></span>${months.map((m, i) => `<span data-month="${i}">${m[0]}<span class="m-rest">${m.slice(1)}</span></span>`).join('')}</div>
  <ol class="strip-rows">
  ${foodSeasons.map((s) => `<li class="strip-row">
    <details>
      <summary>
        <span class="strip-label">${esc(s.name)}<span class="sr-only">: ${rangeText(s.from, s.to)}, best ${rangeText(...s.peak)}</span></span>
        <span class="strip-track" aria-hidden="true">
          ${months.map((_, i) => `<span class="tick" data-month="${i}" style="grid-column:${i + 1}"></span>`).join('')}
          ${span(s.from, s.to).map(([a, b]) => `<span class="bar bar-${s.color}" style="grid-column:${a + 1} / ${b + 2}"></span>`).join('')}
          ${span(...s.peak).map(([a, b]) => `<span class="bar-peak" style="grid-column:${a + 1} / ${b + 2}"></span>`).join('')}
        </span>
      </summary>
      <p>${dag(s.detail)}</p>
    </details>
  </li>`).join('')}
  </ol>
  <p class="strip-key small"><span class="nowrap"><span class="key-bar" aria-hidden="true"></span> Season</span> <span class="nowrap"><span class="key-peak" aria-hidden="true"></span> Usually best</span> <span>Tap a row for details.</span></p>
  ${withSources ? sourcesBlock(foodSeasons.map((f) => f.src || [])) : ''}
</div>`;
}

/* ── Island-hopping planner ─────────────────────────────────── */
export function itineraryHTML(r) {
  const leg = (s) => `<li class="leg leg-${s.type}"><span class="leg-type">${legLabel[s.type]}</span><span class="leg-route">${esc(s.fromName)} → ${esc(s.toName)}${s.op ? ` <span class="leg-op">${esc(s.op)}</span>` : ''}</span><span class="leg-time">~${fmtMins(s.mins)}${s.seasonal ? ' <span class="badge">seasonal</span>' : ''}</span></li>`;
  return `<ol class="itinerary">
    <li class="it-start"><span class="it-dot" aria-hidden="true"></span><strong>Start: ${esc(r.start)}</strong></li>
    ${r.segments.map((s) => `<li class="it-stop">
      <ul class="legs">${s.steps.map(leg).join('')}</ul>
      <div class="it-island"><span class="it-dot" aria-hidden="true"></span>
        <div><h4>${esc(s.name)} <span class="nights">${s.range[0] === s.range[1] ? s.range[0] : `${s.range[0]}–${s.range[1]}`} nights</span></h4>
        <p class="small">Base: ${esc(s.base)}. ${esc(s.why)}</p></div>
      </div>
    </li>`).join('')}
    ${r.end ? `<li class="it-stop"><ul class="legs">${r.finalSteps.map(leg).join('')}</ul><div class="it-island"><span class="it-dot" aria-hidden="true"></span><strong>End: ${esc(r.end)}</strong></div></li>` : ''}
  </ol>
  <p class="it-total"><strong>${r.totalNights}+ nights</strong> on islands · about <strong>${fmtMins(r.totalMins)}</strong> of crossings and transfers in total</p>
  ${r.warnings.length ? `<ul class="it-warn">${r.warnings.map((w) => `<li>${esc(w)}</li>`).join('')}</ul>` : ''}`;
}

export function plannerStatic() {
  return `<div class="presets">${ferries.presets.map((p) => `
    <article class="preset" data-preset="${p.id}">
      <h3>${esc(p.name)}</h3>
      <p class="small">${esc(p.blurb)}</p>
      ${itineraryHTML(plan(ferries, p))}
      <button class="btn btn-ghost js-only" type="button" data-load-preset="${p.id}">Customise this route</button>
    </article>`).join('')}</div>`;
}

export const plannerSources = () => sourcesBlock(ferries.legs.filter((l) => l.src).map((l) => l.src));

export function plannerData() {
  const { ports, legs, islands, startPorts, presets } = ferries;
  return JSON.stringify({ ports, legs, islands, startPorts, presets }).replace(/</g, '\\u003c');
}

export function plannerUI() {
  const opt = (id) => `<option value="${id}">${esc(ferries.ports[id].name)}</option>`;
  return `<div class="planner js-only" id="planner-app">
  <form class="planner-form" aria-describedby="planner-help">
    <p id="planner-help" class="small">Choose where you start and finish, then add islands in the order you’d like to visit them. Crossing times are typical, not timetabled.</p>
    <div class="field-row">
      <label>Start<select name="start">${ferries.startPorts.map(opt).join('')}</select></label>
      <label>Finish<select name="end">${ferries.startPorts.map(opt).join('')}</select></label>
    </div>
    <fieldset class="island-picker">
      <legend>Add islands</legend>
      <div class="chip-list">${ferries.islands.map((i) => `<button type="button" class="chip" data-add="${i.id}" aria-label="Add ${esc(i.name)}">+ ${esc(i.name)}</button>`).join('')}</div>
    </fieldset>
    <div class="chosen-wrap">
      <h3 class="h-small">Your route</h3>
      <ol class="chosen" aria-live="polite"></ol>
      <p class="chosen-empty small">No islands yet. Add one above, or customise a ready-made route below.</p>
    </div>
    <label class="check"><input type="checkbox" name="car"> Travelling with a car (car ferries and roads only)</label>
  </form>
  <div class="planner-result" aria-live="polite"></div>
</div>`;
}
