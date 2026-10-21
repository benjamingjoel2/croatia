import config from '../site.config.mjs';
import { photos } from './data/photos.mjs';

export const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Mark facts that need checking with a dagger linked to the note on each page.
export const dag = (s) => String(s).replace(/†/g, '<sup class="dag"><a href="#verify-note" aria-label="Detail to check before travel">†</a></sup>');

const utm = `utm_source=${encodeURIComponent(config.brand.name.toLowerCase())}&utm_medium=referral`;

const imgUrl = (src, w, ratio) => `${src}?w=${w}${ratio ? `&h=${Math.round(w / ratio)}&fit=crop&crop=entropy` : ''}&auto=format&q=70`;

export const credit = (ph) =>
  `Photo: <a href="https://unsplash.com/@${ph.username}?${utm}">${esc(ph.photographer)}</a> on <a href="${ph.page}?${utm}">Unsplash</a>`;

/** Responsive Unsplash image with credit. */
export function img(key, { ratio = 3 / 2, sizes = '100vw', widths = [480, 800, 1200, 1600], eager = false, cls = '', caption = true /* false: credit only; null: no figcaption (caller credits) */ } = {}) {
  const ph = photos[key];
  if (!ph) throw new Error(`Unknown photo "${key}"`);
  const w0 = widths[1] || widths[0];
  const srcset = widths.map((w) => `${imgUrl(ph.src, w, ratio)} ${w}w`).join(', ');
  return `<figure class="photo ${cls}">
  <img src="${imgUrl(ph.src, w0, ratio)}" srcset="${srcset}" sizes="${sizes}" alt="${esc(ph.alt)}" width="${w0}" height="${Math.round(w0 / ratio)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
  ${caption === null ? '' : `<figcaption>${caption ? `<span class="where">${esc(ph.caption)}</span> · ` : ''}${credit(ph)}</figcaption>`}
</figure>`;
}

export const verifyNote = () => `<p class="verify-note" id="verify-note"><span aria-hidden="true">†</span> Details marked † change from year to year (timetables, ticket prices, opening dates). Check them with the operator before you travel.</p>`;

export const section = (inner, { cls = '', id = '', label = '' } = {}) =>
  `<section class="section ${cls}"${id ? ` id="${id}"` : ''}${label ? ` aria-labelledby="${label}"` : ''}><div class="wrap">${inner}</div></section>`;

export const pageHead = ({ eyebrow = '', title, lede = '', photo = null }) => `
<header class="page-head${photo ? ' has-photo' : ''}">
  <div class="wrap page-head-grid">
    <div>
      ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
      <h1>${title}</h1>
      ${lede ? `<p class="lede">${dag(lede)}</p>` : ''}
    </div>
    ${photo ? img(photo, { eager: true, sizes: '(min-width: 900px) 50vw, 100vw', cls: 'page-head-photo' }) : ''}
  </div>
</header>`;

export const card = ({ href, photo, title, text, meta = '', hl = 3 }) => `
<article class="card">
  ${img(photo, { sizes: '(min-width: 1000px) 33vw, (min-width: 640px) 50vw, 100vw', widths: [400, 640, 900], caption: null })}
  <div class="card-body">
    ${meta ? `<p class="meta">${meta}</p>` : ''}
    <h${hl} class="card-title"><a href="${href}">${title}</a></h${hl}>
    <p>${dag(text)}</p>
  </div>
  <p class="card-credit">${credit(photos[photo])}</p>
</article>`;
