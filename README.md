# Maestral: a Croatia travel website

A fast, static, mobile-first travel site for Croatia in the shoulder seasons:
islands, sailing, Istrian food and wine, and national parks away from the
cruise-ship crowds.

- **No framework and no dependencies.** A small Node script turns data files into plain HTML.
- **Brand in one file.** The name, contact details, palette and fonts all live in [`site.config.mjs`](site.config.mjs).
- **Sourced facts.** Ferry times, park tickets and seasons are checked against official sources, listed in `src/data/sources.mjs` and shown in a "Sources" block on each page.
- **Accessible.** The build fails if any palette text/background pair drops below WCAG AA (4.5:1).
- **Fact list.** Everything that needs checking is listed in [`FACTS-TO-VERIFY.md`](FACTS-TO-VERIFY.md).

## Run it

You need Node 18 or newer. There is nothing to install.

```bash
npm run dev        # contrast check + build, then serve at http://localhost:4321
npm run build      # contrast check + build into dist/
npm run serve      # serve the existing dist/ folder
npm run check      # contrast check only
```

`dist/` is a plain folder of HTML, CSS and JS that any static host can serve.

## Deploy (Vercel)

`vercel.json` already sets the build command (`npm run build`), the output
folder (`dist`) and clean URLs. Either:

- import the GitHub repo at vercel.com/new (no settings needed), or
- from the command line: `npx vercel --prod`.

Other hosts (Netlify, Cloudflare Pages, GitHub Pages) work with the build
command `npm run build` and the publish directory `dist`.

## Project layout

```
site.config.mjs          ← brand name, tagline, contact, form endpoint, palette, fonts
build.mjs                ← renders every page to dist/
src/
  pages.mjs              ← all page content and structure (one block per page)
  layout.mjs             ← <head>, header, nav, footer
  lib.mjs                ← helpers: image + credit, cards, † markers
  components.mjs         ← crowd calendar, food strip, planner markup
  data/
    ferries.mjs          ← ports, ferry/catamaran legs, islands, preset routes
    seasons.mjs          ← crowd levels, food seasons, when-to-go blurbs
    regions.mjs          ← the seven regions
    parks.mjs            ← the five national parks
    stays.mjs            ← PLACEHOLDER stays (invented names)
    journal.mjs          ← journal posts
    photos.mjs           ← every Unsplash photo, with verified location + credit
    sources.mjs          ← references (official ones flagged) behind the facts
  assets/
    style.css            ← all styles (colours come from config as CSS variables)
    site.js              ← menu, current-month highlight, enquiry form
    planner.js           ← interactive island-hopping planner
    planner-core.js      ← route-finding logic (shared by build and browser)
scripts/
  check-contrast.mjs     ← WCAG AA check for the palette
  serve.mjs              ← tiny local server
```

## Common edits

### Swap the brand
Edit `site.config.mjs`: `brand.name`, `tagline`, `nameStory`, `description`
and `contact`. The logo is a simple SVG built from the palette, in
`src/layout.mjs` (and the favicon in `build.mjs`). Rebuild.

### Change fonts
Edit `fonts` in `site.config.mjs`: three CSS font stacks (display, body,
mono) and the Google Fonts URL that loads them. The design uses Instrument
Serif for display type, Inter Tight for text and IBM Plex Mono for small labels.

### Change colours
Edit `palette` in `site.config.mjs`. If you add a new text/background
combination to the CSS, add it to `contrastPairs` so the check covers it.
`npm run build` refuses to build if any pair fails AA.

### Enquiry form
By default, submitting opens the visitor's email app with the enquiry
filled in, so no backend is needed. To collect submissions instead, set
`enquiry.formEndpoint` to a form-service URL (Formspree, Basin, Getform…). The
form then POSTs there and shows a thank-you message.

### Ferry legs and the island planner
`src/data/ferries.mjs`:
- `ports`: every harbour, with the island it belongs to (or `null` for mainland).
- `legs`: connections in both directions. `type` is `ferry`, `cat` or `road`;
  `mins` is the typical crossing time; `seasonal: true` shows a "seasonal" badge
  and a warning.
- `islands`: what appears in the planner, the base ports (first is
  preferred) and the suggested `nights: [min, max]`.
- `presets`: ready-made routes. They are also rendered without JavaScript.

The planner finds the most direct boats between your chosen islands
(shortest path, slightly favouring direct sailings over drives). Ticking
"Travelling with a car" limits it to car ferries and roads.

### Crowd calendar and food seasons
`src/data/seasons.mjs`. `crowds[].levels` holds 12 numbers (Jan→Dec) from
1 (quiet) to 5 (peak). `foodSeasons` uses 0-based months (`0` = January);
ranges can wrap the year end, for example `from: 8, to: 0` is September to January.

### Photos
All photos are hot-linked from Unsplash's CDN (as Unsplash asks) and
credited automatically next to each image and on `/credits/`. **Rule: only
use a photo where its Unsplash location field matches the place it
illustrates.** To add one, put an entry in `src/data/photos.mjs` with the
`photo-…` id, page slug, location (copied from the page), photographer and
username, then use it by key, for example `img('hvar')`.

### Sources
Add a reference to `src/data/sources.mjs` (title, publisher, URL, and
whether it's official), then list its key in a `src: [...]` field on the
data item: a region, park, food season, ferry leg or journal post. The page
renders it in its "Sources" block automatically.

### Design notes
- The home page, region, park, island, food and journal pages open with a full-bleed photo hero. The header is transparent over it and turns solid on scroll.
- Sections reveal on scroll (IntersectionObserver), except when the visitor asks for reduced motion. Content stays visible without JavaScript.
- Pass `hero: true` in a page definition when its header has a photo.

### Marking facts
Put a `†` in any copy that might change, such as a timetable, price or
date. It renders as a small link to the page's "check before you travel"
note. Add the fact to `FACTS-TO-VERIFY.md` too.

## Content rules this site follows
- No invented reviews, ratings, press logos or awards.
- Stays are clearly labelled placeholders until replaced with real partners.
- Every photo is credited, and its location matches its use.
- British English.
