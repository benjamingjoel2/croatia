import config from '../site.config.mjs';
import { esc, dag, img, pageHead, section, card, verifyNote, credit } from './lib.mjs';
import { regions } from './data/regions.mjs';
import { parks } from './data/parks.mjs';
import { islands } from './data/ferries.mjs';
import { whenToGo } from './data/seasons.mjs';
import { stays } from './data/stays.mjs';
import { posts } from './data/journal.mjs';
import { photos } from './data/photos.mjs';
import { crowdCalendar, foodStrip, plannerStatic, plannerUI, plannerData } from './components.mjs';

const B = config.brand.name;
const islandPhoto = { brac: 'brac', hvar: 'hvarPort', vis: 'vis', korcula: 'korcula', mljet: 'mljet', losinj: 'losinj', rab: 'rab' };
const fmtDate = (d) => new Date(d + 'T12:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

const pages = [];
const page = (p) => pages.push(p);

/* ── Home ───────────────────────────────────────────────────── */
page({
  path: '/', title: 'Home',
  body: `
<section class="hero">
  ${img('hvarPort', { eager: true, ratio: 16 / 9, widths: [640, 1000, 1600, 2200], cls: 'hero-photo' })}
  <div class="hero-text wrap">
    <p class="eyebrow">Croatia in the shoulder seasons</p>
    <h1>Islands, sailing, Istrian truffles and quiet national parks, away from the cruise-ship crowds.</h1>
    <p class="lede">${esc(config.brand.description)}</p>
    <p class="hero-ctas"><a class="btn" href="/islands/#planner">Plan an island hop</a> <a class="btn btn-ghost" href="/when-to-go/#crowds">See the crowd calendar</a></p>
  </div>
</section>

${section(`
  <div class="intro-grid">
    <div>
      <h2 id="h-why">Go when the coast is quiet</h2>
      <p>Most visitors arrive in July and August and head for Dubrovnik, Split and Plitvice. Come in May, June, September or October instead and you’ll find warm sea, open konobas, grape and olive harvests, and room on the ferry deck.</p>
      <p>We focus on the places and seasons that reward slow travellers: the islands beyond Hvar town, inland Istria, the Kvarner gulf, northern Dalmatia’s national parks, and Slavonia in the east.</p>
    </div>
    <ul class="pill-list" aria-label="What we cover">
      <li class="pill pill-sea">Island hopping by ferry</li>
      <li class="pill pill-pine">National parks off-peak</li>
      <li class="pill pill-terracotta">Istrian food &amp; wine</li>
      <li class="pill pill-lavender">Sailing the Adriatic</li>
    </ul>
  </div>`, { label: 'h-why' })}

${section(`
  <h2 class="section-title">Three tools for planning</h2>
  <div class="feature-grid">
    <a class="feature feature-sea" href="/islands/#planner">
      <span class="feature-num" aria-hidden="true">01</span>
      <h3>Island-hopping planner</h3>
      <p>Pick islands in order. It links them by ferry and catamaran, shows rough crossing times, and suggests how many nights to spend on each.</p>
      <span class="feature-go">Open the planner →</span>
    </a>
    <a class="feature feature-terracotta" href="/when-to-go/#crowds">
      <span class="feature-num" aria-hidden="true">02</span>
      <h3>Crowd calendar</h3>
      <p>How busy Dubrovnik, Split and Plitvice usually are, month by month, with quieter places to go instead.</p>
      <span class="feature-go">See the calendar →</span>
    </a>
    <a class="feature feature-pine" href="/food-and-wine/#seasons">
      <span class="feature-num" aria-hidden="true">03</span>
      <h3>Istrian food seasons</h3>
      <p>When to find white truffles, the olive and grape harvests, new oil and young wine.</p>
      <span class="feature-go">See the seasons →</span>
    </a>
  </div>`, { cls: 'section-tint' })}

${section(`
  <div class="section-head"><h2 class="section-title">Regions</h2><a href="/regions/">All regions →</a></div>
  <div class="card-grid">${regions.slice(0, 6).map((r) => card({ href: `/regions/${r.slug}/`, photo: r.photo, title: esc(r.name), text: r.short })).join('')}</div>`)}

${section(`
  <div class="split-feature">
    ${img('sailing', { sizes: '(min-width: 900px) 50vw, 100vw' })}
    <div>
      <p class="eyebrow">Sailing</p>
      <h2>Follow the afternoon breeze</h2>
      <p>On many summer days the maestral picks up after lunch and fades by evening. That’s a gentle rhythm for sailing: swim in the morning, sail in the afternoon, anchor before dark. The Kornati and the islands around Šibenik and Split make a good first charter area.</p>
      <p><a href="/national-parks/#kornati">The Kornati →</a> · <a href="/islands/">Islands →</a></p>
    </div>
  </div>`)}

${section(`
  <div class="section-head"><h2 class="section-title">Istrian food seasons</h2><a href="/food-and-wine/">Food &amp; wine →</a></div>
  ${foodStrip()}`, { cls: 'section-tint', id: 'seasons' })}

${section(`
  <div class="section-head"><h2 class="section-title">From the journal</h2><a href="/journal/">All posts →</a></div>
  <div class="card-grid">${posts.map((p) => card({ href: `/journal/${p.slug}/`, photo: p.photo, title: esc(p.title), text: p.excerpt, meta: fmtDate(p.date) })).join('')}</div>`)}

${section(`<div class="cta-band"><h2>Planning something slower?</h2><p>Tell us your dates and what you love. We’ll reply with ideas, not a sales pitch.</p><a class="btn btn-light" href="/enquire/">Send an enquiry</a></div>`)}
`,
});

/* ── Regions ────────────────────────────────────────────────── */
page({
  path: '/regions/', title: 'Regions', description: 'Croatia’s seven regions for slow travellers: Istria, Kvarner, Zadar and Šibenik, Split and the islands, Dubrovnik and the south, Zagreb and Slavonia.',
  body: `${pageHead({ eyebrow: 'Regions', title: 'Seven Croatias', lede: 'From the Italian-feeling peninsula of Istria to the Danube vineyards of Slavonia, Croatia changes a lot over a few hundred kilometres. Start here.' })}
${section(`<div class="card-grid">${regions.map((r) => card({ href: `/regions/${r.slug}/`, photo: r.photo, title: esc(r.name), text: r.short, hl: 2 })).join('')}</div>`)}`,
});

for (const r of regions) {
  page({
    path: `/regions/${r.slug}/`, title: r.name, description: r.short,
    body: `${pageHead({ eyebrow: '<a href="/regions/">Regions</a>', title: esc(r.name), lede: r.intro, photo: r.photo })}
${section(`
  <div class="detail-grid">
    <div>
      <h2>Highlights</h2>
      <dl class="highlights">${r.highlights.map(([h, t]) => `<div><dt>${esc(h)}</dt><dd>${dag(t)}</dd></div>`).join('')}</dl>
    </div>
    <div class="aside-stack">
      <div class="panel panel-pine"><h2 class="h-small">Best time</h2><p>${dag(r.best)}</p></div>
      <div class="panel panel-lavender"><h2 class="h-small">Beyond the crowds</h2><p>${dag(r.beyondCrowds)}</p></div>
      <div class="panel"><h2 class="h-small">Getting there</h2><p>${dag(r.getting)}</p></div>
    </div>
  </div>
  ${r.extraPhoto ? img(r.extraPhoto, { ratio: 21 / 9, cls: 'wide-photo' }) : ''}
  ${verifyNote()}
  <p class="next-links"><a class="btn" href="/enquire/?region=${encodeURIComponent(r.name)}">Ask about ${esc(r.name)}</a> <a class="btn btn-ghost" href="/islands/#planner">Island-hopping planner</a></p>`)}`,
  });
}

/* ── Islands ────────────────────────────────────────────────── */
page({
  path: '/islands/', title: 'Islands & island-hopping planner', description: 'Plan an island hop in Croatia: ferry and catamaran legs between the mainland and Hvar, Brač, Vis, Korčula, Mljet, Lošinj and more, with rough crossing times and nights per island.',
  scripts: ['/assets/planner.js'],
  body: `${pageHead({ eyebrow: 'Islands', title: 'Island hopping, slowly', lede: 'Croatia has more than a thousand islands, islets and rocks. Around fifty are inhabited.† These are the ones we would build a trip around, linked by year-round car ferries and seasonal catamarans.' })}
${section(`
  <h2 class="section-title" id="h-planner">Island-hopping planner</h2>
  <p class="section-lede">Choose your islands and we’ll join them up with the most direct boats. Times are rough crossing times, not timetables: always check the current schedule with Jadrolinija, Krilo or TP Line before you book.†</p>
  <noscript><p class="panel">The interactive planner needs JavaScript. The ready-made routes below work without it.</p></noscript>
  ${plannerUI()}
  <script type="application/json" id="planner-data">${plannerData()}</script>
  <h3 class="presets-title">Ready-made routes</h3>
  ${plannerStatic()}
  ${verifyNote()}`, { id: 'planner', label: 'h-planner', cls: 'section-tint' })}
${section(`
  <h2 class="section-title">The islands</h2>
  <div class="island-list">${islands.map((i) => `
    <article class="island" id="${i.id}">
      ${islandPhoto[i.id] ? img(islandPhoto[i.id], { sizes: '(min-width: 900px) 30vw, 100vw', widths: [400, 640, 900] }) : ''}
      <div>
        <h3>${esc(i.name)}</h3>
        <p>${esc(i.why)}</p>
        <p class="small">Suggested stay: <strong>${i.nights[0] === i.nights[1] ? i.nights[0] : `${i.nights[0]}–${i.nights[1]}`} nights</strong></p>
      </div>
    </article>`).join('')}</div>`)}
${section(`<div class="split-feature">${img('ferry', { sizes: '(min-width: 900px) 50vw, 100vw' })}<div><h2>Ferry tips</h2><ul class="tick-list">
  <li>Car ferries (trajekt) carry vehicles and run all year. Catamarans (katamaran) are foot passengers only, faster, and cut back sharply in winter.</li>
  <li>In July and August, queues for car ferries can last for hours. Book online where you can, and arrive early.†</li>
  <li>Bura (the cold north-easterly) and jugo (the south-easterly) can cancel catamarans. Leave a spare day before an international flight.</li>
  <li>Several islands are bridged: Krk, Pag, Čiovo, Murter and Vir. Cres and Lošinj are joined to each other at Osor.†</li>
</ul></div></div>`)}`,
});

/* ── National parks ─────────────────────────────────────────── */
page({
  path: '/national-parks/', title: 'National parks', description: 'Plitvice, Krka, Kornati, Mljet and Paklenica: when to go, how to avoid the crowds and what to know before you visit.',
  body: `${pageHead({ eyebrow: 'National parks', title: 'Five parks, out of season', lede: 'Croatia has eight national parks.† These five suit a slow, shoulder-season trip: lakes and waterfalls, an island archipelago, a forested island and limestone gorges.' })}
${section(`<nav class="toc" aria-label="Parks on this page"><ul>${parks.map((p) => `<li><a href="#${p.slug}">${esc(p.name)}</a></li>`).join('')}</ul></nav>
${parks.map((p, i) => `<article class="park ${i % 2 ? 'park-flip' : ''}" id="${p.slug}" aria-labelledby="h-${p.slug}">
  ${img(p.photo, { sizes: '(min-width: 900px) 50vw, 100vw' })}
  <div>
    <p class="eyebrow">${esc(p.region)}</p>
    <h2 id="h-${p.slug}">${esc(p.name)}</h2>
    <p>${dag(p.what)}</p>
    <p><strong>When:</strong> ${dag(p.when)}</p>
    <ul class="tick-list">${p.tips.map((t) => `<li>${dag(t)}</li>`).join('')}</ul>
  </div>
</article>`).join('')}
${verifyNote()}
<p><a href="/when-to-go/#crowds">See how busy Plitvice gets, month by month →</a></p>`)}`,
});

/* ── Food & wine ────────────────────────────────────────────── */
page({
  path: '/food-and-wine/', title: 'Food & wine', description: 'Istrian truffles, olive oil and Malvazija, Dalmatian Plavac Mali and Pošip, Ston oysters and Slavonian Graševina, plus the Istrian food seasons.',
  body: `${pageHead({ eyebrow: 'Food & wine', title: 'Eat with the seasons', lede: 'Croatia’s best meals tend to happen in a konoba, a family-run tavern with a wood fire, a peka bell and whatever was picked or caught that morning.', photo: 'motovun' })}
${section(`<h2 class="section-title" id="h-strip">Istrian food seasons</h2>
<p class="section-lede">Time an inland Istria trip around the harvests. The bars show when each is usually available; the darker band is when it’s usually best.</p>
${foodStrip()}
${verifyNote()}`, { id: 'seasons', label: 'h-strip', cls: 'section-tint' })}
${section(`<div class="three-col">
  <div><h2 class="h-mid">Istria</h2><p>White truffles over fuži pasta, boškarin (the native grey ox), olive oil from Buje and Vodnjan, Malvazija whites and inky Teran reds.</p></div>
  <div><h2 class="h-mid">Dalmatia</h2><p>Pašticada, peka of octopus or lamb, Pag cheese, and Plavac Mali, Pošip and Grk wines. On Vis, try viška pogača, the island’s fish-filled flatbread.</p></div>
  <div><h2 class="h-mid">The south & the east</h2><p>Oysters and mussels from Mali Ston Bay. In Slavonia, kulen (spicy paprika sausage), fiš paprikaš, and Graševina from Kutjevo and Ilok.</p></div>
</div>`)}
${section(`<div class="split-feature">${img('medimurje', { sizes: '(min-width: 900px) 50vw, 100vw' })}<div><h2>Wine beyond the coast</h2><p>Croatia has dozens of native grape varieties. Continental wine regions such as Međimurje, Plešivica and Slavonia make crisp whites that rarely leave the country. Ask in a konoba for the local wine, served “domaće”, house style.</p><p>Many smaller wineries and olive mills welcome visitors by appointment. Call ahead, especially during the harvest.</p></div></div>`)}`,
});

/* ── When to go ─────────────────────────────────────────────── */
page({
  path: '/when-to-go/', title: 'When to go', description: 'Croatia month by month: a crowd calendar for Dubrovnik, Split and Plitvice, quieter alternatives, and the best seasons for islands, food and parks.',
  body: `${pageHead({ eyebrow: 'When to go', title: 'Timing is everything', lede: 'The same harbour can be calm in May and unbearable in August. Here’s how the year usually unfolds, and how to dodge the peaks.' })}
${section(`<div class="season-grid">${whenToGo.map((s) => `<article class="season season-${s.tone}"><p class="season-months">${s.months}</p><h2 class="h-mid">${s.title}</h2><p>${dag(s.body)}</p></article>`).join('')}</div>`)}
${section(`<h2 class="section-title" id="h-crowds">Crowd calendar</h2>
<p class="section-lede">Indicative levels based on the usual patterns: school holidays, cruise season and park visitor peaks. They are not measured data. Single days can be much busier (cruise calls) or quieter (bad weather).</p>
${crowdCalendar()}
${verifyNote()}`, { id: 'crowds', label: 'h-crowds', cls: 'section-tint' })}`,
});

/* ── Stays ──────────────────────────────────────────────────── */
page({
  path: '/stays/', title: 'Stays', description: 'The kind of small, family-run places we like to stay in Croatia.',
  body: `${pageHead({ eyebrow: 'Stays', title: 'Small places, real hosts', lede: 'Stone houses, captains’ apartments, rooms above a konoba. We prefer small, locally owned stays to resorts.' })}
${section(`<p class="panel panel-terracotta placeholder-note"><strong>Placeholder listings.</strong> The names below are examples to show the layout. They are not real properties and cannot be booked. Photos show the area, not the property.</p>
<div class="card-grid">${stays.map((s) => `<article class="card">
  ${img(s.photo, { sizes: '(min-width: 1000px) 33vw, (min-width: 640px) 50vw, 100vw', widths: [400, 640, 900], caption: null })}
  <div class="card-body">
    <p class="meta">${esc(s.place)} · <span class="tag">Placeholder</span></p>
    <h2 class="card-title">${esc(s.name)}</h2>
    <p>${esc(s.type)}</p>
    <p class="small"><strong>Open:</strong> ${esc(s.season)}<br><strong>Good for:</strong> ${esc(s.good)}</p>
  </div>
  <p class="card-credit">Area photo: ${esc(photos[s.photo].caption)} · ${credit(photos[s.photo])}</p>
</article>`).join('')}</div>`)}`,
});

/* ── Journal ────────────────────────────────────────────────── */
page({
  path: '/journal/', title: 'Journal', description: 'Notes on travelling Croatia slowly: shoulder seasons, islands, parks and food.',
  body: `${pageHead({ eyebrow: 'Journal', title: 'Notes from the slow coast' })}
${section(`<div class="card-grid">${posts.map((p) => card({ href: `/journal/${p.slug}/`, photo: p.photo, title: esc(p.title), text: p.excerpt, meta: fmtDate(p.date), hl: 2 })).join('')}</div>`)}`,
});
for (const p of posts) {
  page({
    path: `/journal/${p.slug}/`, title: p.title, description: p.excerpt,
    body: `<article class="post">
  <header class="wrap post-head"><p class="eyebrow"><a href="/journal/">Journal</a> · <time datetime="${p.date}">${fmtDate(p.date)}</time></p><h1>${esc(p.title)}</h1><p class="lede">${esc(p.excerpt)}</p></header>
  <div class="wrap">${img(p.photo, { ratio: 2, eager: true, cls: 'wide-photo' })}</div>
  <div class="wrap prose">${dag(p.body)}${verifyNote()}</div>
</article>`,
  });
}

/* ── About ──────────────────────────────────────────────────── */
page({
  path: '/about/', title: 'About', description: `About ${B}: independent ideas for travelling Croatia slowly.`,
  body: `${pageHead({ eyebrow: 'About', title: `Why “${esc(B)}”?`, lede: config.brand.nameStory, photo: 'humac' })}
${section(`<div class="three-col">
  <div><h2 class="h-mid">What we believe</h2><p>Croatia is at its best when you aren’t queuing for it. Travel in the shoulder months, stay longer in fewer places, and choose family-run konobas and stays. Your money then reaches the islands and villages that need it.</p></div>
  <div><h2 class="h-mid">What we do</h2><p>We share route ideas, seasonal timing and practical notes on ferries and parks. Send us an enquiry with your dates and interests and we’ll reply with suggestions.</p></div>
  <div><h2 class="h-mid">What we don’t do</h2><p>We don’t publish reviews, star ratings or awards. Where something changes year to year, such as timetables, ticket prices or harvest dates, we mark it † so you know to check.</p></div>
</div>`)}
${section(`<div class="panel"><h2 class="h-mid">Contact</h2><p><a href="mailto:${esc(config.contact.email)}">${esc(config.contact.email)}</a> · <a href="tel:${esc(config.contact.phoneHref)}">${esc(config.contact.phone)}</a><br>${esc(config.contact.address)}<br>${esc(config.contact.hours)}</p></div>`)}`,
});

/* ── Enquiry ────────────────────────────────────────────────── */
const ep = config.enquiry.formEndpoint;
page({
  path: '/enquire/', title: 'Enquire', description: `Send ${B} an enquiry about travelling Croatia in the shoulder seasons.`,
  body: `${pageHead({ eyebrow: 'Enquire', title: 'Tell us about your trip', lede: 'A few details help us suggest the right islands, regions and timing. We usually reply within two working days.' })}
${section(`<div class="enquiry-grid">
<form class="enquiry" id="enquiry" ${ep ? `action="${esc(ep)}" method="post"` : `action="mailto:${esc(config.contact.email)}" method="post" enctype="text/plain"`} data-email="${esc(config.contact.email)}" data-endpoint="${esc(ep)}" novalidate>
  <div class="field"><label for="f-name">Your name <span class="req">(required)</span></label><input id="f-name" name="name" autocomplete="name" required></div>
  <div class="field"><label for="f-email">Email <span class="req">(required)</span></label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
  <div class="field-row">
    <div class="field"><label for="f-month">When would you like to travel?</label>
      <select id="f-month" name="month"><option value="">Not sure yet</option>${['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((m) => `<option>${m}</option>`).join('')}</select></div>
    <div class="field"><label for="f-nights">Roughly how many nights?</label><input id="f-nights" name="nights" type="number" min="1" max="60" inputmode="numeric"></div>
  </div>
  <div class="field"><label for="f-people">Who’s travelling?</label><input id="f-people" name="travellers" placeholder="e.g. two adults, one child aged 9"></div>
  <fieldset class="field"><legend>Interested in</legend>
    <div class="check-grid">${['Island hopping', 'Sailing', 'Istrian food & wine', 'National parks', 'Walking & cycling', 'Cities', 'Slavonia'].map((x) => `<label class="check"><input type="checkbox" name="interests" value="${x}"> ${esc(x)}</label>`).join('')}</div>
  </fieldset>
  <div class="field"><label for="f-region">Regions in mind</label><input id="f-region" name="region"></div>
  <div class="field"><label for="f-msg">Anything else?</label><textarea id="f-msg" name="message" rows="5"></textarea></div>
  <label class="check"><input type="checkbox" name="consent" required id="f-consent"> I’m happy for ${esc(B)} to use these details to reply to my enquiry. <span class="req">(required)</span></label>
  <div class="form-errors" role="alert" aria-live="assertive"></div>
  <button class="btn" type="submit">Send enquiry</button>
  <p class="small form-hint">${ep ? '' : 'Sending opens your email app with your enquiry filled in, ready to send.'}</p>
</form>
<div class="panel panel-pine"><h2 class="h-mid">Prefer to write directly?</h2><p><a href="mailto:${esc(config.contact.email)}">${esc(config.contact.email)}</a><br><a href="tel:${esc(config.contact.phoneHref)}">${esc(config.contact.phone)}</a></p><p class="small">${esc(config.contact.hours)}</p></div>
</div>`)}`,
});

/* ── Credits & 404 ──────────────────────────────────────────── */
page({
  path: '/credits/', title: 'Photo credits', description: 'Credits for the photographs used on this site.',
  body: `${pageHead({ eyebrow: 'Credits', title: 'Photo credits', lede: 'All photos come from Unsplash under the Unsplash License. Each was chosen only where the photo’s recorded location matches the place it illustrates.' })}
${section(`<div class="table-scroll" tabindex="0" role="region" aria-label="Photo credits table"><table class="credits"><thead><tr><th scope="col">Shows</th><th scope="col">Location on Unsplash</th><th scope="col">Photographer</th></tr></thead><tbody>
${Object.values(photos).map((ph) => `<tr><td>${esc(ph.caption)}</td><td>${esc(ph.location)}</td><td>${credit(ph)}</td></tr>`).join('')}
</tbody></table></div>`)}`,
});
page({
  path: '/404.html', title: 'Page not found', file: '404.html',
  body: `${pageHead({ eyebrow: '404', title: 'Lost at sea', lede: 'That page doesn’t exist. Try the <a href="/">home page</a> or the <a href="/islands/">island planner</a>.' })}`,
});

export default pages;
