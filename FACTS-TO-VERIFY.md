# Facts to verify

**Status (21 October 2026):** every fact on the site was checked against
published sources, using official operators, parks, tourist boards and
authorities wherever they were available. The sources are linked on the site,
in a "Sources" block on each page, and in `src/data/sources.mjs`.

Direct access to the Croatian sites is blocked from the build environment,
so the checks were made through web search results that cite them (for
example Jadrolinija's own 2026 timetable PDFs). Before launch, someone should
**open each official link once** and confirm the figure. Timetables, ticket
prices and festival dates change every year; on the site these are marked
**†**.

Legend: ✅ confirmed · 🔧 corrected after checking · ⚠️ still needs a human check

---

## 1. Ferry and catamaran legs (`src/data/ferries.mjs`)

Times are the typical crossings used by the island planner.

| Leg | Type | Time on site | Running | Operator | Source | Status |
|---|---|---|---|---|---|---|
| Split ↔ Supetar | Car ferry | ~50 min | Year-round | Jadrolinija | [Jadrolinija](https://www.jadrolinija.hr/download/7416be0dc1882ecdd21edf69b4207401) | ✅ |
| Split ↔ Bol | Catamaran | ~65 min | Year-round | Jadrolinija | [Jadrolinija](https://www.jadrolinija.hr/hr/putovanje/split_-_bol_brac_-_jelsa_hvar) | ✅ |
| Split ↔ Rogač | Car ferry | ~60 min | Year-round | Jadrolinija | [Jadrolinija](https://www.jadrolinija.hr/en/travel/split_-_rogac_solta) | ✅ |
| Split ↔ Stari Grad | Car ferry | ~110 min | Year-round | Jadrolinija | [Jadrolinija](https://www.jadrolinija.hr/en/travel/split_-_stari_grad_hvar) | ✅ |
| Split ↔ Hvar town | Catamaran | ~60 min | Year-round | TP Line | [TP Line](https://www.tp-line.hr/files/cjenici/BB-9604-Lastovo-Vela-Luka-Hvar-Split-26-ENG.pdf) | ✅ |
| Split ↔ Vis town | Car ferry | ~140 min | Year-round | Jadrolinija | [Jadrolinija](https://www.jadrolinija.hr/en/travel/split_%E2%80%93_vis) | ✅ |
| Split ↔ Vis town | Catamaran | ~80 min (70–115 min depending on stops) | Year-round | Jadrolinija / Krilo | [Ferry Croatia](https://www.ferrycroatia.com/en/split-vis/) (third-party) | ✅ |
| Split ↔ Vela Luka | Car ferry | ~180 min | Year-round | Jadrolinija | [Jadrolinija](https://www.jadrolinija.hr/en/travel/split_-vela_luka_korcula_-_ubli_lastovo) | ✅ |
| Split ↔ Korčula town | Catamaran | ~185 min (faster seasonal Split–Dubrovnik boats take about 2 h 30) | Year-round | TP Line | [TP Line](https://tp-line.hr/files/cjenici/BB-9608-Korcula-Prigradica-Hvar-Split-26-ENG.pdf) | ✅ |
| Bol ↔ Jelsa | Catamaran | ~25 min | Year-round | Jadrolinija | [Jadrolinija](https://www.jadrolinija.hr/hr/putovanje/split_-_bol_brac_-_jelsa_hvar) | ✅ |
| Hvar town ↔ Vis town | Catamaran | ~45 min | Seasonal | Jadrolinija (summer) | [Visit Croatia](https://www.visit-croatia.co.uk/?p=1597) (third-party) | ✅ |
| Hvar town ↔ Korčula town | Catamaran | ~75 min | Year-round | TP Line / Krilo | [Ferry Croatia](https://www.ferrycroatia.com/hr/hvar-korcula/) (third-party) | ✅ |
| Hvar town ↔ Vela Luka | Catamaran | ~55 min | Year-round | TP Line | [TP Line](https://www.tp-line.hr/files/cjenici/BB-9604-Lastovo-Vela-Luka-Hvar-Split-26-ENG.pdf) | ✅ |
| Makarska ↔ Sumartin | Car ferry | ~50 min | Year-round | Jadrolinija | [Jadrolinija](https://www.jadrolinija.hr/download/2e6f47e313d10852aaa4d59bab436c2e) | ✅ |
| Drvenik ↔ Sućuraj | Car ferry | ~30 min | Year-round | Jadrolinija | [Jadrolinija](https://www.jadrolinija.hr/download/7aea1e2b9282d8d567ba88a8c4b021fe) | ✅ |
| Vela Luka ↔ Ubli | Car ferry | ~90 min | Year-round | Jadrolinija | [Jadrolinija](https://www.jadrolinija.hr/en/travel/split_-vela_luka_korcula_-_ubli_lastovo) | ✅ |
| Orebić (Pelješac) ↔ Dominče (Korčula) | Car ferry | ~20 min | Year-round | Jadrolinija | [Jadrolinija](https://www.jadrolinija.hr/download/78a49598b028455c7a14e7f3c53408bc) | ✅ |
| Korčula town ↔ Pomena | Catamaran | ~45 min | Seasonal | Krilo | [Croatia Week](https://www.croatiaweek.com/dubrovnik-catamaran-mljet-korcula-krilo-2026/) (third-party) | ✅ |
| Pomena ↔ Dubrovnik (Gruž) | Catamaran | ~75 min | Seasonal | Krilo | [Croatia Week](https://www.croatiaweek.com/dubrovnik-catamaran-mljet-korcula-krilo-2026/) (third-party) | ✅ |
| Korčula town ↔ Dubrovnik (Gruž) | Catamaran | ~125 min | Year-round | TP Line / Krilo | [TP Line](https://www.tp-line.hr/files/cjenici/BB-9807-Lastovo-Korcula-Polace-Sobra-Sipan-Dubrovnik-26-ENG.pdf) | ✅ |
| Dubrovnik (Gruž) ↔ Sobra | Catamaran | ~75 min | Year-round | TP Line | [TP Line](https://www.tp-line.hr/files/cjenici/BB-9807-Lastovo-Korcula-Polace-Sobra-Sipan-Dubrovnik-26-ENG.pdf) | ⚠️ time not confirmed |
| Sobra ↔ Polače | Catamaran | ~30 min | Year-round | TP Line | [TP Line](https://www.tp-line.hr/files/cjenici/BB-9807-Lastovo-Korcula-Polace-Sobra-Sipan-Dubrovnik-26-ENG.pdf) | ⚠️ time not confirmed |
| Prapratno (Pelješac) ↔ Sobra | Car ferry | ~45 min | Year-round | Jadrolinija | [Jadrolinija](https://www.jadrolinija.hr/en/travel/prapratno_peljesac_-_sobra_mljet) | ✅ |
| Dubrovnik (Gruž) ↔ Lopud | Passenger boat | ~50 min | Year-round | Jadrolinija | [Jadrolinija](https://www.jadrolinija.hr/download/4e7358ba3a7fe14b2819e696c2ea2d33) | ⚠️ time not confirmed |
| Zadar ↔ Preko | Car ferry | ~25 min | Year-round | Jadrolinija | [Jadrolinija](https://www.jadrolinija.hr/download/5d8e965f266802e3302f1ca3fd76f9f2) | ✅ |
| Zadar ↔ Brbinj | Car ferry | ~100 min | Year-round | Jadrolinija | [Jadrolinija](https://www.jadrolinija.hr/download/cb8076eeec32d906ca634b6dfda1868e) | ✅ |
| Šibenik ↔ Zlarin | Car ferry | ~25 min | Year-round | Jadrolinija | [Jadrolinija](https://www.jadrolinija.hr/download/80d82101cf7d89a737e61d823e62d1b6) | ✅ |
| Rijeka ↔ Cres town | Catamaran | ~80 min | Year-round | Jadrolinija | [Jadrolinija](https://www.jadrolinija.hr/hr/putovanje/mali_losinj_-_ilovik_-_susak_-_unije_-_martinscica_-_cres_-_rijeka) | ✅ |
| Rijeka ↔ Mali Lošinj | Catamaran | ~270 min (calls at Cres, Martinšćica, Unije, Susak and Ilovik) | Year-round | Jadrolinija | [Jadrolinija](https://www.jadrolinija.hr/hr/putovanje/mali_losinj_-_ilovik_-_susak_-_unije_-_martinscica_-_cres_-_rijeka) | ✅ |
| Brestova (Istria) ↔ Porozina | Car ferry | ~20 min | Year-round | Jadrolinija | [Jadrolinija](https://www.jadrolinija.hr/download/9f316ad89853a1119ebf099473556b5d) | ✅ |
| Valbiska ↔ Merag | Car ferry | ~25 min | Year-round | Jadrolinija | [Jadrolinija](https://www.jadrolinija.hr/hr/putovanje/valbiska_krk_-_merag_cres) | ✅ |
| Stinica ↔ Mišnjak | Car ferry | ~20 min | Year-round | Rapska plovidba | [Croatia Ferries](https://croatiaferries.com/stinica-misnjak-ferry.htm) (third-party) | ✅ |

Corrections made after checking: Split–Stari Grad 120→110 min, Split–Vela
Luka 165→180, Split–Korčula catamaran 150→185 (TP Line, year-round), Hvar–Vis
60→45, Makarska–Sumartin 60→50, Drvenik–Sućuraj 35→30, Orebić–Dominče 15→20,
Korčula–Pomena 50→45, Pomena–Dubrovnik 90→75, Zadar–Brbinj 90→100,
Šibenik–Zlarin 30→25, Rijeka–Cres 75→80, Rijeka–Mali Lošinj 180→270 (full
island run), Stinica–Mišnjak 15→20. Dubrovnik–Lopud is now a passenger boat:
Lopud is car-free.

⚠️ Still to check by hand:
- Leg times for Dubrovnik–Sobra, Sobra–Polače and Dubrovnik–Lopud. The lines are confirmed in the 2026 PDFs, but the timetable tables couldn't be read.
- Split–Vis catamaran, Hvar–Vis, Hvar–Korčula and Stinica–Mišnjak times come from third-party sites.
- Whether a Pula–Mali Lošinj catamaran runs in 2027. It is not used on the site.

### Drive times used by the planner (estimates, not checked)

| Between | Time on site |
|---|---|
| Supetar ↔ Bol | ~45 min |
| Supetar ↔ Sumartin | ~50 min |
| Stari Grad ↔ Hvar town | ~25 min |
| Stari Grad ↔ Jelsa | ~20 min |
| Jelsa ↔ Sućuraj | ~70 min |
| Korčula town ↔ Dominče (Korčula) | ~10 min |
| Korčula town ↔ Vela Luka | ~60 min |
| Sobra ↔ Pomena | ~40 min |
| Polače ↔ Pomena | ~10 min |
| Porozina ↔ Cres town | ~30 min |
| Merag ↔ Cres town | ~15 min |
| Cres town ↔ Mali Lošinj | ~60 min |
| Valbiska ↔ Krk town | ~20 min |
| Krk town ↔ Rijeka | ~45 min |
| Mišnjak ↔ Rab town | ~20 min |
| Rijeka ↔ Brestova (Istria) | ~50 min |
| Rijeka ↔ Stinica | ~110 min |
| Split ↔ Makarska | ~75 min |
| Makarska ↔ Drvenik | ~40 min |
| Drvenik ↔ Orebić (Pelješac) | ~90 min |
| Orebić (Pelješac) ↔ Prapratno (Pelješac) | ~50 min |
| Prapratno (Pelješac) ↔ Dubrovnik (Gruž) | ~75 min |
| Split ↔ Šibenik | ~60 min |
| Šibenik ↔ Zadar | ~60 min |

## 2. National parks (`src/data/parks.mjs`)

- ✅ Croatia has 8 national parks (third-party source).
- ✅ Plitvice: 16 named lakes plus smaller unnamed ones; UNESCO 1979 (official).
- 🔧 Plitvice tickets: every ticket has an entry timeslot; online sale is recommended, not mandatory. 2026 adult prices are €10 / €23 / €40 (before 4 pm) or €25 (after) (official).
- ✅ Plitvice: no swimming anywhere; Entrance 1 is north (Big Waterfall), Entrance 2 is south (Upper Lakes) (official).
- 🔧 Plitvice visitors: 1.49 million in 2024 (official). The monthly figures (Aug ≈346k, Feb ≈10k) are from 2016 (EUROPARC presentation).
- ✅ Krka: swimming banned since 1 January 2021; some designated areas open 1 June–30 September (official).
- ✅ Krka: ticket includes the Skradin boat (1 April–31 October); Visovac and Roški slap trips cost extra (official).
- 🔧 Kornati: **89** islands, islets and reefs in the park; about 140 in the wider archipelago (official).
- ✅ Kornati: tickets bought in advance cost much less than those sold inside the park (official).
- ✅ Mljet: seawater lakes; 12th-century Benedictine monastery; ticket includes one return boat trip to the islet; 2026 adult prices €15 / €25 (official).
- 🔧 Paklenica: climbing only in Velika Paklenica (about 600 routes); spring and autumn are the main seasons.
- ⚠️ Paklenica and Krka 2026 ticket prices are not shown on the site. Add them from the official price lists if wanted.

## 3. Food and seasons (`src/data/seasons.mjs`)

- ✅ White truffle season 15 September–31 January, at its best in October (istra.hr).
- 🔧 Summer truffle 1 May–31 October, not May–August (istra.hr).
- 🔧 Grape harvest: late August into October (Malvazija, then Teran).
- ✅ Olive harvest October to mid/late November; Vodnjan Young Olive Oil Days 20–22 November 2026 (istra.hr).
- ✅ Martinje on 11 November (istra.hr).
- ✅ Wild asparagus in spring (istra.hr).
- ✅ White Truffle Days in Livade: weekends 3 October–1 November 2026. Subotina in Buzet: second weekend of September. ⚠️ Update these dates every year.
- 🔧 Sea temperature: about 14–15 °C in April, 17–18 °C in May and 20–21 °C in October (climate data site, third-party).
- ✅ Hvar lavender: from June, peaking late June–early July (visithvar.hr).

## 4. Crowd calendar (`src/data/seasons.mjs` → `crowds`)

The 1–5 levels are **editorial judgements**, labelled "indicative" on the site.

- ✅ Plitvice levels match the official pattern: peak July–August, lowest in February.
- ⚠️ Dubrovnik cruise limit of 2 ships and about 5,000 passengers a day: agreed in 2019 (press). Confirm it still applies in 2026.
- ⚠️ No official monthly data was found for Split or Dubrovnik.

## 5. Places and heritage (`src/data/regions.mjs`, journal)

- ✅ UNESCO years: Poreč 1997, Šibenik 2000, Split 1979, Stari Grad Plain 2008 (the Stari Grad Plain source is third-party).
- ✅ Opatija Lungomare about 12 km, Volosko–Lovran.
- 🔧 Cres vultures: the Beli Visitor Centre is run by the Public Institution Priroda, with seasonal hours.
- ✅ Ston walls about 5 km; Mali Ston oysters EU-protected since 2020 (third-party source).
- ✅ Kopački rit (Ramsar); Đakovo stud farm dating from 1506; Ilok cellars (third-party source).
- 🔧 Islands: 1,244 islands, islets and rocks; about 47–48 permanently inhabited (third-party source).
- ✅ Vis was closed to foreign visitors until 1989 (third-party source).
- ✅ Pelješac Bridge opened in 2022 (European Commission); Rijeka airport is on Krk.
- 🔧 Drive times: Split airport to Split 25–35 min; Dubrovnik airport (Čilipi) about 20 km; Zagreb–Plitvice 2–2.5 h; Zagreb–Osijek 2.5–3 h.

## 6. Placeholders to replace before launch

- [ ] **Contact details** in `site.config.mjs`: email, phone, address and hours are placeholders.
- [ ] **Stays** in `src/data/stays.mjs`: all eight names are invented and labelled "Placeholder" on the site.
- [ ] **Journal dates** in `src/data/journal.mjs`.
- [ ] **Enquiry form**: set `enquiry.formEndpoint` in the config, or keep the mailto fallback. Add a privacy notice if you store submissions.
- [ ] **siteUrl** in `site.config.mjs`: set to the final domain.

## 7. Photos (`src/data/photos.mjs`)

Each photo's Unsplash **location field** was checked on 21 October 2026.

- ⚠️ `humac` ("Humac, Croatia") is assumed to be the village of Humac on Hvar.
- `medimurje` shows Međimurje and is captioned as such; it is used only for "Wine beyond the coast".
