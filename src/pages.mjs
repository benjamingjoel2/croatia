import config from '../site.config.mjs';
import { esc, dag, img, heroPicture, pageHead, section, card, verifyNote, btn, arrow, label, sourcesBlock } from './lib.mjs';
import { regions } from './data/regions.mjs';
import { parks } from './data/parks.mjs';
import { islands } from './data/ferries.mjs';
import { whenToGo, whenToGoSources } from './data/seasons.mjs';
import { stays } from './data/stays.mjs';
import { posts } from './data/journal.mjs';
import { photos } from './data/photos.mjs';
import { sources } from './data/sources.mjs';
import { LEGAL } from './legal.mjs';
import { crowdCalendar, foodStrip, plannerStatic, plannerUI, plannerData, plannerSources } from './components.mjs';

const B = config.brand.name;
const islandPhoto = { brac: 'brac', hvar: 'hvarPort', vis: 'vis', korcula: 'korcula', mljet: 'mljet', losinj: 'losinj', rab: 'rab' };
const fmtDate = (d) => new Date(d + 'T12:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const pad = (n) => String(n).padStart(2, '0');
const srcLink = (k) => `<a class="fact-src" href="${esc(sources[k].url)}" rel="noopener">${esc(sources[k].publisher)}</a>`;

const pages = [];
const page = (p) => pages.push(p);

/* ── Home ───────────────────────────────────────────────────── */
const facts = [
  ['1,244', 'islands, islets and rocks along Croatia’s coast. Fewer than fifty are lived on all year.', 'islands'],
  ['89', 'islands, islets and reefs inside the Kornati National Park, best seen from a boat.', 'kornati'],
  ['50 min', 'by car ferry from Split to Supetar on Brač, all year round.', 'jadSupetar'],
  ['€10', 'for a winter day at Plitvice Lakes in 2026, against €40 on a summer morning.', 'plitvicePrices'],
];

page({
  path: '/', title: 'Home', hero: true,
  body: `
<section class="hero" data-hero aria-labelledby="hero-title">
  ${heroPicture('hvarPort')}
  <div class="hero-shade" aria-hidden="true"></div>
  <div class="hero-inner wrap">
    <div class="hero-top">
      <p class="label label-light">43°10′N 16°26′E · Hvar town &amp; the Pakleni islands</p>
      <p class="label label-light hero-season">Apr–Jun · Sep–Nov</p>
    </div>
    <div class="hero-main">
      <h1 class="hero-wordmark" id="hero-title">${esc(B)}<span class="sr-only">: ${esc(config.brand.tagline)}</span></h1>
      <div class="hero-intro">
        <p>Croatia after the crowds have gone home. Islands by ferry, sailing on the afternoon breeze, truffles in the Istrian hills and waterfalls before breakfast.</p>
        <div class="btn-row">${btn('/islands/#planner', 'Plan an island hop', 'btn-light')}${btn('/when-to-go/#crowds', 'When to go', 'btn-ghost-light')}</div>
      </div>
    </div>
    <ol class="hero-strip">
      <li><a href="/islands/#planner"><span class="label-n">01</span><strong>Island hopping</strong><span>Ferries &amp; catamarans</span></a></li>
      <li><a href="/when-to-go/#crowds"><span class="label-n">02</span><strong>Crowd calendar</strong><span>Dubrovnik, Split, Plitvice</span></a></li>
      <li><a href="/food-and-wine/#seasons"><span class="label-n">03</span><strong>Istrian seasons</strong><span>Truffles, oil, young wine</span></a></li>
      <li><a href="/national-parks/"><span class="label-n">04</span><strong>National parks</strong><span>Five, out of season</span></a></li>
    </ol>
  </div>
</section>

<section class="section statement" aria-label="Our approach">
  <div class="wrap">
    ${label('01', 'The idea')}
    <p class="statement-text" data-reveal>Croatia is at its best when you aren’t queuing for it. <span class="muted">We plan around the shoulder months and the places beyond Dubrovnik: islands reached by ferry, konobas in truffle season, national parks at opening time.</span></p>
    <dl class="facts" data-reveal>
      ${facts.map(([n, t, k]) => `<div class="fact"><dt>${n}</dt><dd>${t} <span class="fact-cite">Source: ${srcLink(k)}</span></dd></div>`).join('')}
    </dl>
  </div>
</section>

<section class="section section-sand" aria-labelledby="h-regions">
  <div class="wrap">
    <div class="section-head">
      <div>${label('02', 'Regions')}<h2 class="h-xl" id="h-regions">Seven Croatias, <em>one coast</em> and a hinterland</h2></div>
      <div class="scroller-ctrl js-only-flex"><button class="round-btn" type="button" data-scroll="-1" aria-label="Previous regions">←</button><button class="round-btn" type="button" data-scroll="1" aria-label="Next regions">→</button></div>
    </div>
  </div>
  <div class="scroller" data-scroller tabindex="0" role="region" aria-label="Regions, scrolls sideways">
    <div class="scroller-track">
      ${regions.map((r, i) => card({ href: `/regions/${r.slug}/`, photo: r.photo, title: esc(r.name), text: r.short, n: `${pad(i + 1)} / ${pad(regions.length)}` })).join('')}
    </div>
  </div>
</section>

<section class="section section-deep" aria-labelledby="h-tools">
  <div class="wrap tools-grid">
    <div>
      ${label('03', 'Planning tools')}
      <h2 class="h-xl" id="h-tools">Three ways to <em>dodge the peak</em></h2>
      <ol class="tool-list">
        <li data-reveal><a href="/islands/#planner"><span class="tool-n">01</span><span class="tool-body"><strong>Island-hopping planner</strong><span>Choose islands in order. We link them with car ferries and catamarans, show 2026 crossing times and suggest nights on each.</span></span>${arrow}</a></li>
        <li data-reveal><a href="/when-to-go/#crowds"><span class="tool-n">02</span><span class="tool-body"><strong>Crowd calendar</strong><span>How busy Dubrovnik, Split and Plitvice usually are, month by month, with quieter places to go instead.</span></span>${arrow}</a></li>
        <li data-reveal><a href="/food-and-wine/#seasons"><span class="tool-n">03</span><span class="tool-body"><strong>Istrian food seasons</strong><span>White truffles, the olive and grape harvests, new oil and young wine, month by month.</span></span>${arrow}</a></li>
      </ol>
    </div>
    ${img('ferry', { ratio: 4 / 5, sizes: '(min-width: 900px) 40vw, 100vw', cls: 'tools-photo' })}
  </div>
</section>

<section class="section" aria-labelledby="h-sail">
  <div class="wrap split">
    ${img('sailing', { ratio: 4 / 5, sizes: '(min-width: 900px) 50vw, 100vw' })}
    <div class="split-text" data-reveal>
      ${label('04', 'Sailing')}
      <h2 class="h-xl" id="h-sail">Follow the <em>afternoon breeze</em></h2>
      <p>On many summer days the maestral rises after lunch and fades by evening. Swim in the morning, sail in the afternoon, and anchor before dark. The Kornati and the islands off Šibenik and Split make a good first charter area.</p>
      <div class="btn-row">${btn('/national-parks/#kornati', 'The Kornati')}${btn('/islands/', 'All islands', 'btn-ghost')}</div>
    </div>
  </div>
</section>

<section class="section section-sand" id="seasons" aria-labelledby="h-strip">
  <div class="wrap">
    <div class="section-head"><div>${label('05', 'Istria')}<h2 class="h-xl" id="h-strip">Eat with <em>the seasons</em></h2></div>${btn('/food-and-wine/', 'Food &amp; wine', 'btn-ghost')}</div>
    ${foodStrip()}
  </div>
</section>

<section class="section" aria-labelledby="h-journal">
  <div class="wrap">
    <div class="section-head"><div>${label('06', 'Journal')}<h2 class="h-xl" id="h-journal">Notes from <em>the slow coast</em></h2></div>${btn('/journal/', 'All posts', 'btn-ghost')}</div>
    <div class="card-grid">${posts.map((p) => card({ href: `/journal/${p.slug}/`, photo: p.photo, title: esc(p.title), text: p.excerpt, meta: fmtDate(p.date), ratio: 3 / 2 })).join('')}</div>
  </div>
</section>

<section class="cta-bleed" aria-labelledby="h-cta">
  ${heroPicture('kornati', { eager: false })}
  <div class="hero-shade" aria-hidden="true"></div>
  <div class="wrap cta-inner" data-reveal>
    <p class="label label-light">Enquiries</p>
    <h2 class="display" id="h-cta">Planning something <em>slower?</em></h2>
    <p>Tell us your dates and what you love. We reply with ideas, not a sales pitch.</p>
    ${btn('/enquire/', 'Send an enquiry', 'btn-light')}
  </div>
</section>`,
});

/* ── Regions ────────────────────────────────────────────────── */
page({
  path: '/regions/', title: 'Regions', hero: true, description: 'Croatia’s seven regions for slow travellers: Istria, Kvarner, Zadar and Šibenik, Split and the islands, Dubrovnik and the south, Zagreb and Slavonia.',
  body: `${pageHead({ eyebrow: 'Regions', title: 'Seven <em>Croatias</em>', lede: 'From the Italian-feeling peninsula of Istria to the Danube vineyards of Slavonia, Croatia changes a lot over a few hundred kilometres.', photo: 'zadar' })}
${section(`<div class="card-grid">${regions.map((r, i) => card({ href: `/regions/${r.slug}/`, photo: r.photo, title: esc(r.name), text: r.short, hl: 2, n: pad(i + 1) })).join('')}</div>`)}`,
});

for (const [ri, r] of regions.entries()) {
  page({
    path: `/regions/${r.slug}/`, title: r.name, description: r.short, hero: true,
    body: `${pageHead({ eyebrow: `<a href="/regions/">Regions</a> · ${pad(ri + 1)} / ${pad(regions.length)}`, title: esc(r.name), lede: r.intro, photo: r.photo })}
${section(`
  <div class="detail-grid">
    <div>
      ${label('', 'Highlights')}
      <ol class="numbered">${r.highlights.map(([h, t], i) => `<li data-reveal><span class="num">${pad(i + 1)}</span><div><h2 class="h-md">${esc(h)}</h2><p>${dag(t)}</p></div></li>`).join('')}</ol>
    </div>
    <div class="aside-stack">
      <div class="panel panel-pine"><p class="label">Best time</p><p>${dag(r.best)}</p></div>
      <div class="panel panel-lavender"><p class="label">Beyond the crowds</p><p>${dag(r.beyondCrowds)}</p></div>
      <div class="panel"><p class="label">Getting there</p><p>${dag(r.getting)}</p></div>
    </div>
  </div>`)}
${r.extraPhoto ? `<div class="wrap">${img(r.extraPhoto, { ratio: 21 / 9, cls: 'wide-photo' })}</div>` : ''}
${section(`<div class="btn-row">${btn(`/enquire/?region=${encodeURIComponent(r.name)}`, `Ask about ${esc(r.name)}`)}${btn('/islands/#planner', 'Island-hopping planner', 'btn-ghost')}</div>
  ${sourcesBlock(r.src || [])}${verifyNote()}`, { cls: 'section-tight' })}`,
  });
}

/* ── Islands ────────────────────────────────────────────────── */
page({
  path: '/islands/', title: 'Islands & island-hopping planner', hero: true, description: 'Plan an island hop in Croatia: ferry and catamaran legs between the mainland and Hvar, Brač, Vis, Korčula, Mljet, Lošinj and more, with 2026 crossing times and nights per island.',
  scripts: ['/assets/planner.js'],
  body: `${pageHead({ eyebrow: 'Islands', title: 'Island hopping, <em>slowly</em>', lede: 'Croatia has 1,244 islands, islets and rocks, and fewer than fifty are lived on all year. These are the ones we’d build a trip around, linked by year-round car ferries and catamarans.', photo: 'mljet' })}
${section(`
  <div class="section-head"><div>${label('01', 'Planner')}<h2 class="h-xl" id="h-planner">Join the islands <em>by boat</em></h2></div></div>
  <p class="section-lede">Choose your islands and we’ll link them with the most direct boats. Times are typical crossings taken from 2026 Jadrolinija, TP Line and Krilo timetables. Always check the current schedule before you book.†</p>
  <noscript><p class="panel">The interactive planner needs JavaScript. The ready-made routes below work without it.</p></noscript>
  ${plannerUI()}
  <script type="application/json" id="planner-data">${plannerData()}</script>
  <h3 class="h-lg presets-title">Ready-made routes</h3>
  ${plannerStatic()}
  ${plannerSources()}
  ${verifyNote()}`, { id: 'planner', labelledby: 'h-planner', cls: 'section-sand' })}
${section(`
  <div class="section-head"><div>${label('02', 'The islands')}<h2 class="h-xl">Fifteen islands <em>worth the crossing</em></h2></div></div>
  <div class="island-list">${islands.map((i, n) => `
    <article class="island" id="${i.id}" data-reveal>
      ${islandPhoto[i.id] ? img(islandPhoto[i.id], { ratio: 4 / 3, sizes: '(min-width: 1000px) 30vw, (min-width: 640px) 45vw, 100vw', widths: [400, 640, 900], caption: false }) : ''}
      <p class="label"><span class="label-n">${pad(n + 1)}</span> ${i.nights[0] === i.nights[1] ? i.nights[0] : `${i.nights[0]}–${i.nights[1]}`} nights</p>
      <h3 class="h-md">${esc(i.name)}</h3>
      <p>${esc(i.why)}</p>
    </article>`).join('')}</div>`)}
${section(`<div class="split">${img('ferry', { ratio: 4 / 5, sizes: '(min-width: 900px) 50vw, 100vw' })}<div class="split-text">${label('03', 'Ferry notes')}<h2 class="h-xl">Before you <em>board</em></h2><ol class="numbered numbered-tight">
  <li><span class="num">01</span><div><p>Car ferries (trajekt) carry vehicles and run all year. Catamarans (katamaran) take foot passengers only. They’re faster, and most switch to winter timetables from late September.</p></div></li>
  <li><span class="num">02</span><div><p>Book online with Jadrolinija or in its app. On some lines, such as Split–Stari Grad, a ticket also reserves your place on that departure; on most local lines it doesn’t guarantee a car space.†</p></div></li>
  <li><span class="num">03</span><div><p>Bura (the cold north-easterly) and jugo (the south-easterly) can cancel catamarans. Leave a spare day before an international flight.</p></div></li>
  <li><span class="num">04</span><div><p>Several islands are bridged: Krk, Pag, Čiovo, Murter and Vir. Cres and Lošinj are joined by a swing bridge at Osor.</p></div></li>
</ol>${sourcesBlock(['jadStariGrad', 'bridges', 'tp9608'])}</div></div>`)}`,
});

/* ── National parks ─────────────────────────────────────────── */
page({
  path: '/national-parks/', title: 'National parks', hero: true, description: 'Plitvice, Krka, Kornati, Mljet and Paklenica: when to go, 2026 tickets, and how to avoid the crowds.',
  body: `${pageHead({ eyebrow: 'National parks', title: 'Five parks, <em>out of season</em>', lede: 'Croatia has eight national parks. These five suit a slow, shoulder-season trip: lakes and waterfalls, an island archipelago, a forested island and limestone gorges.', photo: 'plitvice' })}
${section(`<nav class="toc" aria-label="Parks on this page"><ul>${parks.map((p, i) => `<li><a href="#${p.slug}"><span class="label-n">${pad(i + 1)}</span> ${esc(p.name)}</a></li>`).join('')}</ul></nav>
${parks.map((p, i) => `<article class="park ${i % 2 ? 'park-flip' : ''}" id="${p.slug}" aria-labelledby="h-${p.slug}">
  ${img(p.photo, { ratio: 4 / 5, sizes: '(min-width: 900px) 45vw, 100vw' })}
  <div class="split-text" data-reveal>
    <p class="label"><span class="label-n">${pad(i + 1)}</span> ${esc(p.region)}</p>
    <h2 class="h-xl" id="h-${p.slug}">${esc(p.name)}</h2>
    <p class="lede-sm">${dag(p.what)}</p>
    <p><strong>When to go:</strong> ${dag(p.when)}</p>
    <ul class="dash-list">${p.tips.map((t) => `<li>${dag(t)}</li>`).join('')}</ul>
    ${sourcesBlock(p.src || [])}
  </div>
</article>`).join('')}
${sourcesBlock(['parks8'])}
${verifyNote()}
<p>${btn('/when-to-go/#crowds', 'How busy Plitvice gets, month by month', 'btn-ghost')}</p>`)}`,
});

/* ── Food & wine ────────────────────────────────────────────── */
page({
  path: '/food-and-wine/', title: 'Food & wine', hero: true, description: 'Istrian truffles, olive oil and Malvazija, Dalmatian Plavac Mali and Pošip, Ston oysters and Slavonian Graševina, plus the Istrian food seasons.',
  body: `${pageHead({ eyebrow: 'Food & wine', title: 'Eat with <em>the seasons</em>', lede: 'Croatia’s best meals tend to happen in a konoba, a family-run tavern with a wood fire, a peka bell and whatever was picked or caught that morning.', photo: 'motovun' })}
${section(`<div class="section-head"><div>${label('01', 'Istria')}<h2 class="h-xl" id="h-strip">The Istrian <em>food year</em></h2></div></div>
<p class="section-lede">Time an inland Istria trip around the harvests. The pale bars show when each one is in season; the dark band is when it’s usually best. Tap a row for dates and details.</p>
${foodStrip({ withSources: true })}
${verifyNote()}`, { id: 'seasons', labelledby: 'h-strip', cls: 'section-sand' })}
${section(`${label('02', 'Regional tables')}<div class="three-col">
  <div data-reveal><h2 class="h-lg">Istria</h2><p>White truffles over fuži pasta, boškarin (the native grey ox), olive oil from Buje and Vodnjan, Malvazija whites and inky Teran reds.</p></div>
  <div data-reveal><h2 class="h-lg">Dalmatia</h2><p>Pašticada, octopus or lamb under the peka, Pag cheese, and Plavac Mali, Pošip and Grk wines. On Vis, try viška pogača, the island’s fish-filled flatbread.</p></div>
  <div data-reveal><h2 class="h-lg">The south &amp; the east</h2><p>Oysters from Mali Ston Bay (EU protected designation since 2020). In Slavonia, kulen (spicy paprika sausage), fiš paprikaš, and Graševina from Kutjevo and Ilok.</p></div>
</div>${sourcesBlock(['ston', 'ilok'])}`)}
${section(`<div class="split">${img('medimurje', { ratio: 4 / 5, sizes: '(min-width: 900px) 50vw, 100vw' })}<div class="split-text" data-reveal>${label('03', 'Wine')}<h2 class="h-xl">Wine <em>beyond the coast</em></h2><p>Croatia has dozens of native grape varieties. Continental regions such as Međimurje, Plešivica and Slavonia make crisp whites that rarely leave the country. In a konoba, ask for the local wine, served “domaće”, house style.</p><p>Many smaller wineries and olive mills welcome visitors by appointment. Call ahead, especially during the harvest.</p></div></div>`, { cls: 'section-sand' })}`,
});

/* ── When to go ─────────────────────────────────────────────── */
page({
  path: '/when-to-go/', title: 'When to go', description: 'Croatia month by month: a crowd calendar for Dubrovnik, Split and Plitvice, quieter alternatives, and the best seasons for islands, food and parks.',
  body: `${pageHead({ eyebrow: 'When to go', title: 'Timing is <em>everything</em>', lede: 'The same harbour can be calm in May and unbearable in August. Here’s how the year usually unfolds, and how to dodge the peaks.' })}
${section(`<ol class="season-row">${whenToGo.map((s, i) => `<li class="season season-${s.tone}" data-reveal><p class="label"><span class="label-n">${pad(i + 1)}</span> ${s.months}</p><h2 class="h-lg">${s.title}</h2><p>${dag(s.body)}</p></li>`).join('')}</ol>${sourcesBlock(whenToGoSources)}`, { cls: 'section-tight' })}
${section(`<div class="section-head"><div>${label('', 'Crowd calendar')}<h2 class="h-xl" id="h-crowds">How busy it <em>usually</em> is</h2></div></div>
<p class="section-lede">Indicative levels based on school holidays, cruise season and park visitor figures. Single days can be much busier (several cruise calls) or quieter (bad weather).</p>
${crowdCalendar()}
${verifyNote()}`, { id: 'crowds', labelledby: 'h-crowds', cls: 'section-sand' })}`,
});

/* ── Stays ──────────────────────────────────────────────────── */
page({
  path: '/stays/', title: 'Stays', description: 'The kind of small, family-run places we like to stay in Croatia.',
  body: `${pageHead({ eyebrow: 'Stays', title: 'Small places, <em>real hosts</em>', lede: 'Stone houses, captains’ apartments, rooms above a konoba. We prefer small, locally owned stays to resorts.' })}
${section(`<p class="panel panel-terracotta placeholder-note"><strong>Placeholder listings.</strong> The names below are examples to show the layout. They are not real properties and can’t be booked. Photos show the area, not the property.</p>
<div class="card-grid">${stays.map((s, i) => `<article class="card" data-reveal>
  ${img(s.photo, { ratio: 4 / 5, sizes: '(min-width: 1000px) 33vw, (min-width: 640px) 50vw, 100vw', widths: [400, 640, 900], caption: null })}
  <div class="card-body">
    <p class="label"><span class="label-n">${pad(i + 1)}</span> ${esc(s.place)} · <span class="tag">Placeholder</span></p>
    <h2 class="card-title">${esc(s.name)}</h2>
    <p>${esc(s.type)}</p>
    <dl class="mini-dl"><div><dt>Open</dt><dd>${esc(s.season)}</dd></div><div><dt>Good for</dt><dd>${esc(s.good)}</dd></div></dl>
  </div>
  <p class="card-credit">Area photo: ${esc(photos[s.photo].caption)}</p>
</article>`).join('')}</div>`)}`,
});

/* ── Journal ────────────────────────────────────────────────── */
page({
  path: '/journal/', title: 'Journal', description: 'Notes on travelling Croatia slowly: shoulder seasons, islands, parks and food.',
  body: `${pageHead({ eyebrow: 'Journal', title: 'Notes from <em>the slow coast</em>' })}
${section(`<div class="card-grid">${posts.map((p) => card({ href: `/journal/${p.slug}/`, photo: p.photo, title: esc(p.title), text: p.excerpt, meta: fmtDate(p.date), hl: 2, ratio: 3 / 2 })).join('')}</div>`)}`,
});
for (const p of posts) {
  page({
    path: `/journal/${p.slug}/`, title: p.title, description: p.excerpt, hero: true,
    body: `<article class="post">
  ${pageHead({ eyebrow: `<a href="/journal/">Journal</a> · <time datetime="${p.date}">${fmtDate(p.date)}</time>`, title: esc(p.title), lede: p.excerpt, photo: p.photo })}
  <div class="wrap prose">${dag(p.body)}${sourcesBlock(p.src || [])}${verifyNote()}</div>
</article>`,
  });
}

/* ── About ──────────────────────────────────────────────────── */
page({
  path: '/about/', title: 'About', hero: true, description: `About ${B}: independent ideas for travelling Croatia slowly.`,
  body: `${pageHead({ eyebrow: 'About', title: `Why “${esc(B)}”?`, lede: config.brand.nameStory, photo: 'humac' })}
${section(`<p class="statement-text" data-reveal>Stay longer in fewer places. <span class="muted">Travel in the shoulder months, choose family-run konobas and stays, and your money reaches the islands and villages that need it.</span></p>`, { cls: 'statement' })}
${section(`<div class="three-col">
  <div data-reveal>${label('01', 'What we do')}<p>We share route ideas, seasonal timing and practical notes on ferries and parks. Send us an enquiry with your dates and interests and we’ll reply with suggestions.</p></div>
  <div data-reveal>${label('02', 'How we check')}<p>Ferry times, park tickets and seasons are checked against operators’ and parks’ own sources, which we link on each page. Anything that changes year to year is marked †.</p></div>
  <div data-reveal>${label('03', 'What we don’t do')}<p>We don’t publish reviews, star ratings or awards. When we recommend a place, we tell you why in our own words.</p></div>
</div>`)}
${section(`<div class="panel contact-panel">${label('', 'Contact')}<p class="h-lg"><a href="mailto:${esc(config.contact.email)}">${esc(config.contact.email)}</a></p><p class="muted">${esc(config.contact.address)} · ${esc(config.contact.hours)}</p></div>`, { cls: 'section-tight' })}`,
});

/* ── Enquiry ────────────────────────────────────────────────── */
const ep = config.enquiry.formEndpoint;
page({
  path: '/enquire/', title: 'Enquire', description: `Send ${B} an enquiry about travelling Croatia in the shoulder seasons.`,
  body: `${pageHead({ eyebrow: 'Enquire', title: 'Tell us about <em>your trip</em>', lede: 'A few details help us suggest the right islands, regions and timing. We usually reply within two working days.' })}
${section(`<div class="enquiry-grid">
<form class="enquiry" id="enquiry" ${ep ? `action="${esc(ep)}" method="post"` : `action="mailto:${esc(config.contact.email)}" method="post" enctype="text/plain"`} data-email="${esc(config.contact.email)}" data-endpoint="${esc(ep)}" novalidate>
  <div class="field-row">
    <div class="field"><label for="f-name">Your name <span class="req">(required)</span></label><input id="f-name" name="name" autocomplete="name" required></div>
    <div class="field"><label for="f-email">Email <span class="req">(required)</span></label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
  </div>
  <div class="field-row">
    <div class="field"><label for="f-month">When would you like to travel?</label>
      <select id="f-month" name="month"><option value="">Not sure yet</option>${['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((m) => `<option>${m}</option>`).join('')}</select></div>
    <div class="field"><label for="f-nights">Roughly how many nights?</label><input id="f-nights" name="nights" type="number" min="1" max="60" inputmode="numeric"></div>
  </div>
  <div class="field"><label for="f-people">Who’s travelling?</label><input id="f-people" name="travellers" placeholder="e.g. two adults, one child aged 9"></div>
  <fieldset class="field"><legend>Interested in</legend>
    <div class="chip-checks">${['Island hopping', 'Sailing', 'Istrian food & wine', 'National parks', 'Walking & cycling', 'Cities', 'Slavonia'].map((x) => `<label class="chip-check"><input type="checkbox" name="interests" value="${x}"><span>${esc(x)}</span></label>`).join('')}</div>
  </fieldset>
  <div class="field"><label for="f-region">Regions in mind</label><input id="f-region" name="region"></div>
  <div class="field"><label for="f-msg">Anything else?</label><textarea id="f-msg" name="message" rows="5"></textarea></div>
  <label class="check"><input type="checkbox" name="consent" required id="f-consent"> I’m happy for ${esc(B)} to use these details to reply to my enquiry. <span class="req">(required)</span></label>
  <div class="form-errors" role="alert" aria-live="assertive"></div>
  <button class="btn" type="submit">Send enquiry${arrow}</button>
  <p class="small form-hint">${ep ? '' : 'Sending opens your email app with your enquiry filled in, ready to send.'}</p>
</form>
<aside class="panel panel-deep" aria-label="Direct contact">${label('', 'Prefer to write directly?')}<p class="h-md"><a href="mailto:${esc(config.contact.email)}">${esc(config.contact.email)}</a></p><p class="small">${esc(config.contact.hours)}</p><p class="small">${esc(config.contact.address)}</p></aside>
</div>`)}`,
});

/* ── Legal: privacy, booking terms, cookies (data/legal.mjs) ── */
for (const l of LEGAL) {
  page({
    path: `/${l.slug}/`, title: l.title, description: l.lede,
    body: `${pageHead({ eyebrow: 'Legal', title: esc(l.title), lede: `${esc(l.lede)} <span class="small">Last updated <time datetime="${l.updated}">${fmtDate(l.updated)}</time>.</span>` })}
${section(`<div class="prose legal">${l.sections.map((x) => `<h2>${esc(x.h)}</h2>${x.p.map((t) => (t.includes('<ul>') ? `<div>${t}</div>` : `<p>${t}</p>`)).join('')}`).join('')}</div>`)}`,
  });
}

/* ── 404 ────────────────────────────────────────────────────── */
page({
  path: '/404.html', title: 'Page not found', file: '404.html',
  body: `${pageHead({ eyebrow: '404', title: 'Lost <em>at sea</em>', lede: 'That page doesn’t exist. Try the <a href="/">home page</a> or the <a href="/islands/">island planner</a>.' })}`,
});

export default pages;
