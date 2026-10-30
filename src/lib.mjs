import config from '../site.config.mjs';
import { photos } from './data/photos.mjs';
import { sources } from './data/sources.mjs';

export const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Mark facts that change year to year with a dagger linked to the page note.
export const dag = (s) => String(s).replace(/†/g, '<sup class="dag"><a href="#verify-note" aria-label="Changes year to year: check before travel">†</a></sup>');

const imgUrl = (src, w, ratio) => `${src}?w=${w}${ratio ? `&h=${Math.round(w / ratio)}&fit=crop&crop=entropy` : ''}&auto=format&q=70`;
const srcset = (src, widths, ratio) => widths.map((w) => `${imgUrl(src, w, ratio)} ${w}w`).join(', ');

// Photos are not credited on the page (Unsplash License; owner's rule). Sources stay in data/photos.mjs.

/**
 * Responsive Unsplash image.
 * caption: true → place caption; false or null → no figcaption.
 */
export function img(key, { ratio = 3 / 2, sizes = '100vw', widths = [480, 800, 1200, 1600], eager = false, cls = '', caption = true } = {}) {
  const ph = photos[key];
  if (!ph) throw new Error(`Unknown photo "${key}"`);
  const w0 = widths[1] || widths[0];
  return `<figure class="photo ${cls}">
  <img src="${imgUrl(ph.src, w0, ratio)}" srcset="${srcset(ph.src, widths, ratio)}" sizes="${sizes}" alt="${esc(ph.alt)}" width="${w0}" height="${Math.round(w0 / ratio)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
  ${caption ? `<figcaption><span class="where">${esc(ph.caption)}</span></figcaption>` : ''}
</figure>`;
}

/** Full-bleed background picture: landscape crop on wide screens, portrait on phones. */
export function heroPicture(key, { eager = true } = {}) {
  const ph = photos[key];
  return `<picture class="bleed-img">
    <source media="(min-width: 800px)" srcset="${srcset(ph.src, [1200, 1800, 2400], 16 / 9)}" sizes="100vw">
    <img src="${imgUrl(ph.src, 900, 4 / 5)}" srcset="${srcset(ph.src, [600, 760, 900, 1200], 4 / 5)}" sizes="100vw" alt="${esc(ph.alt)}" width="900" height="1125" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
  </picture>`;
}

export const arrow = '<span class="btn-icon" aria-hidden="true"><svg viewBox="0 0 16 16" width="14" height="14"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
export const btn = (href, label, cls = '') => `<a class="btn ${cls}" href="${href}">${label}${arrow}</a>`;

export const label = (n, text) => `<p class="label">${n ? `<span class="label-n">(${n})</span> ` : ''}${text}</p>`;

export const verifyNote = () => `<p class="verify-note" id="verify-note"><span aria-hidden="true">†</span> Details marked † change from year to year (timetables, ticket prices, festival dates). They were checked in October 2026; confirm them with the operator before you travel.</p>`;

/** "Sources" block from keys in data/sources.mjs. */
export function sourcesBlock(keys = []) {
  const list = [...new Set(keys.flat())].map((k) => {
    const s = sources[k];
    if (!s) throw new Error(`Unknown source "${k}"`);
    return s;
  });
  if (!list.length) return '';
  return `<div class="sources">
  <p class="label">Sources</p>
  <ol>${list.map((s) => `<li><a href="${esc(s.url)}" rel="noopener">${esc(s.title)}</a> <span class="src-pub">${esc(s.publisher)}${s.official ? ' <span class="src-official">official</span>' : ''}</span></li>`).join('')}</ol>
</div>`;
}

export const section = (inner, { cls = '', id = '', labelledby = '' } = {}) =>
  `<section class="section ${cls}"${id ? ` id="${id}"` : ''}${labelledby ? ` aria-labelledby="${labelledby}"` : ''}><div class="wrap">${inner}</div></section>`;

/** Page header: full-bleed photo hero when `photo` is given, typographic otherwise. */
export const pageHead = ({ eyebrow = '', title, lede = '', photo = null }) => photo ? `
<header class="page-hero" data-hero>
  ${heroPicture(photo)}
  <div class="page-hero-shade" aria-hidden="true"></div>
  <div class="wrap page-hero-text">
    ${eyebrow ? `<p class="label label-light">${eyebrow}</p>` : ''}
    <h1 class="display">${title}</h1>
    ${lede ? `<p class="lede lede-light">${dag(lede)}</p>` : ''}
  </div>
</header>` : `
<header class="page-head">
  <div class="wrap">
    ${eyebrow ? `<p class="label">${eyebrow}</p>` : ''}
    <h1 class="display">${title}</h1>
    ${lede ? `<p class="lede">${dag(lede)}</p>` : ''}
  </div>
</header>`;

export const card = ({ href, photo, title, text, meta = '', hl = 3, n = '', ratio = 4 / 5 }) => `
<article class="card" data-reveal>
  ${img(photo, { ratio, sizes: '(min-width: 1000px) 33vw, (min-width: 640px) 50vw, 90vw', widths: [400, 640, 900], caption: null })}
  <div class="card-body">
    ${meta || n ? `<p class="label">${n ? `<span class="label-n">${n}</span> ` : ''}${meta}</p>` : ''}
    <h${hl} class="card-title"><a href="${href}">${title}</a></h${hl}>
    <p>${dag(text)}</p>
  </div>
</article>`;
