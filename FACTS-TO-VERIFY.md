# Facts to verify before launch

Everything on the site was written from general knowledge, **not** from current
official sources. Before publishing, check each item below with the operator
or authority named, then tick it off. On the site, most of these are marked
with a **†**, which links to a note telling visitors to check before travelling.

Where a fact lives in the code is given in brackets, so you can correct it in
one place.

---

## 1. Ferry and catamaran legs (`src/data/ferries.mjs`)

Sources: **Jadrolinija** (jadrolinija.hr), **Krilo / Kapetan Luka**
(krilo.hr), **TP Line** (tp-line.hr), **G&V Line** (gv-line.hr). Timetables
change every season and winter service is much thinner.

For each leg, check that it **exists**, **who runs it**, the **typical
crossing time**, and whether it runs **year-round or only in season**.

| Leg | Type | Typical time on site | Running | Checked |
|---|---|---|---|---|
| Split ↔ Supetar | Car ferry | ~50 min | Year-round (assumed) | ☐ |
| Split ↔ Bol | Catamaran | ~60 min | Year-round (assumed) | ☐ |
| Split ↔ Rogač | Car ferry | ~60 min | Year-round (assumed) | ☐ |
| Split ↔ Stari Grad | Car ferry | ~120 min | Year-round (assumed) | ☐ |
| Split ↔ Hvar town | Catamaran | ~60 min | Year-round (assumed) | ☐ |
| Split ↔ Vis town | Car ferry | ~140 min | Year-round (assumed) | ☐ |
| Split ↔ Vis town | Catamaran | ~85 min | Year-round (assumed) | ☐ |
| Split ↔ Vela Luka | Car ferry | ~165 min | Year-round (assumed) | ☐ |
| Split ↔ Korčula town | Catamaran | ~150 min | Year-round (assumed) | ☐ |
| Bol ↔ Jelsa | Catamaran | ~25 min | Year-round (assumed) | ☐ |
| Hvar town ↔ Vis town | Catamaran | ~60 min | Seasonal (assumed) | ☐ |
| Hvar town ↔ Korčula town | Catamaran | ~75 min | Year-round (assumed) | ☐ |
| Hvar town ↔ Vela Luka | Catamaran | ~55 min | Year-round (assumed) | ☐ |
| Makarska ↔ Sumartin | Car ferry | ~60 min | Year-round (assumed) | ☐ |
| Drvenik ↔ Sućuraj | Car ferry | ~35 min | Year-round (assumed) | ☐ |
| Vela Luka ↔ Ubli | Car ferry | ~90 min | Year-round (assumed) | ☐ |
| Orebić (Pelješac) ↔ Dominče (Korčula) | Car ferry | ~15 min | Year-round (assumed) | ☐ |
| Korčula town ↔ Pomena | Catamaran | ~50 min | Seasonal (assumed) | ☐ |
| Pomena ↔ Dubrovnik (Gruž) | Catamaran | ~90 min | Seasonal (assumed) | ☐ |
| Korčula town ↔ Dubrovnik (Gruž) | Catamaran | ~120 min | Year-round (assumed) | ☐ |
| Dubrovnik (Gruž) ↔ Sobra | Catamaran | ~75 min | Year-round (assumed) | ☐ |
| Sobra ↔ Polače | Catamaran | ~30 min | Year-round (assumed) | ☐ |
| Prapratno (Pelješac) ↔ Sobra | Car ferry | ~45 min | Year-round (assumed) | ☐ |
| Dubrovnik (Gruž) ↔ Lopud | Car ferry | ~50 min | Year-round (assumed) | ☐ |
| Zadar ↔ Preko | Car ferry | ~25 min | Year-round (assumed) | ☐ |
| Zadar ↔ Brbinj | Car ferry | ~90 min | Year-round (assumed) | ☐ |
| Šibenik ↔ Zlarin | Car ferry | ~30 min | Year-round (assumed) | ☐ |
| Rijeka ↔ Cres town | Catamaran | ~75 min | Year-round (assumed) | ☐ |
| Rijeka ↔ Mali Lošinj | Catamaran | ~180 min | Year-round (assumed) | ☐ |
| Brestova (Istria) ↔ Porozina | Car ferry | ~20 min | Year-round (assumed) | ☐ |
| Valbiska ↔ Merag | Car ferry | ~25 min | Year-round (assumed) | ☐ |
| Stinica ↔ Mišnjak | Car ferry | ~15 min | Year-round (assumed) | ☐ |

### Drive times between ports used by the planner

| Between | Time on site | Checked |
|---|---|---|
| Supetar ↔ Bol | ~45 min | ☐ |
| Supetar ↔ Sumartin | ~50 min | ☐ |
| Stari Grad ↔ Hvar town | ~25 min | ☐ |
| Stari Grad ↔ Jelsa | ~20 min | ☐ |
| Jelsa ↔ Sućuraj | ~70 min | ☐ |
| Korčula town ↔ Dominče (Korčula) | ~10 min | ☐ |
| Korčula town ↔ Vela Luka | ~60 min | ☐ |
| Sobra ↔ Pomena | ~40 min | ☐ |
| Polače ↔ Pomena | ~10 min | ☐ |
| Porozina ↔ Cres town | ~30 min | ☐ |
| Merag ↔ Cres town | ~15 min | ☐ |
| Cres town ↔ Mali Lošinj | ~60 min | ☐ |
| Valbiska ↔ Krk town | ~20 min | ☐ |
| Krk town ↔ Rijeka | ~45 min | ☐ |
| Mišnjak ↔ Rab town | ~20 min | ☐ |
| Rijeka ↔ Brestova (Istria) | ~50 min | ☐ |
| Rijeka ↔ Stinica | ~110 min | ☐ |
| Split ↔ Makarska | ~75 min | ☐ |
| Makarska ↔ Drvenik | ~40 min | ☐ |
| Drvenik ↔ Orebić (Pelješac) | ~90 min | ☐ |
| Orebić (Pelješac) ↔ Prapratno (Pelješac) | ~50 min | ☐ |
| Prapratno (Pelješac) ↔ Dubrovnik (Gruž) | ~75 min | ☐ |
| Split ↔ Šibenik | ~60 min | ☐ |
| Šibenik ↔ Zadar | ~60 min | ☐ |

### Other ferry and transport statements
- [ ] Bridges: Krk, Pag, Čiovo, Murter and Vir are bridged to the mainland; Cres and Lošinj are joined at Osor (Islands page, ferry tips).
- [ ] In July and August, queues for car ferries can last for hours, and online booking is available (Islands page).
- [ ] Catamarans are cut back sharply in winter; catamaran timetables shrink in October (Islands, When to go).
- [ ] Split–Stari Grad car ferry and Split–Hvar town catamaran run all year (Journal: Hvar in October).
- [ ] The Pelješac Bridge means the drive from Split to Dubrovnik no longer crosses Neum, in Bosnia and Herzegovina (Dubrovnik region).
- [ ] Rijeka airport is on Krk (Kvarner region).
- [ ] Airports and drive times: Split airport about 30 min to the city; Zadar airport; Dubrovnik airport near Čilipi; Pula airport; Osijek airport; Zagreb to Plitvice about 2 h; Zagreb to Kvarner about 2 h; Zagreb to Osijek about 3 h; Split airport to Šibenik about 1 h (region pages).

## 2. National parks (`src/data/parks.mjs`, `src/data/regions.mjs`)

Sources: np-plitvicka-jezera.hr, npkrka.hr, np-kornati.hr, np-mljet.hr, np-paklenica.hr.

- [ ] Croatia has **eight** national parks (Parks page intro).
- [ ] **Plitvice**: 16 terraced lakes; UNESCO World Heritage since 1979.
- [ ] **Plitvice**: timed tickets sold online in busy months; summer prices much higher than winter. Add **current prices** if you want to show them.
- [ ] **Plitvice**: swimming not allowed anywhere in the park.
- [ ] **Plitvice**: Entrance 1 / Entrance 2 advice. Starting at Entrance 2 on the upper lakes means fewer people.
- [ ] **Plitvice in winter**: "often a few hundred visitors a day" (crowd calendar alternatives).
- [ ] **Krka**: swimming at Skradinski buk banned since 2021.
- [ ] **Krka**: park boat from Skradin to Skradinski buk in season.
- [ ] **Kornati**: around 140 islands, islets and reefs in the park.
- [ ] **Kornati**: entry charged per boat or per person; cheaper to buy in advance.
- [ ] **Mljet**: ticket includes the boat to St Mary’s islet.
- [ ] **Mljet**: about 1½ h by catamaran from Dubrovnik (Dubrovnik region).
- [ ] **Paklenica**: the Anića kuk walls are the classic climbing area; climbing season peaks in spring.
- [ ] Opening hours and seasonal route closures for all parks (not stated on site; add if wanted).

## 3. Seasons and food (`src/data/seasons.mjs`)

Sources: Istria Tourist Board (istra.hr), local truffle associations and wine routes.

- [ ] **White truffle** (Tuber magnatum): legal season roughly mid-September to end of January; best in October–November.
- [ ] **Black summer truffle** (Tuber aestivum): roughly May–August.
- [ ] **Grape harvest** in Istria: late August to early October.
- [ ] **Olive harvest**: from October, with mills working through November into December.
- [ ] **New olive oil**: best in November.
- [ ] **Young wine / Martinje**: 11 November, with village feasts.
- [ ] **Wild asparagus**: March–May, often in fritaja.
- [ ] Truffle fairs in the Mirna valley on weekends in October and November (Journal: truffle week). Check this year's dates; the site deliberately names no specific event.
- [ ] Buzet calls itself the "city of truffles"; Hum calls itself the smallest town in the world (Journal).
- [ ] Hvar lavender usually flowers late June into July (When to go).
- [ ] Sea temperature in April–May is around 16–18 °C (When to go).
- [ ] Sea usually still swimmable for much of October around Hvar (Journal).

## 4. Crowd calendar (`src/data/seasons.mjs` → `crowds`)

The 1–5 levels for **Dubrovnik**, **Split** and **Plitvice** are **indicative
judgements** based on school holidays, cruise season and park visitor peaks.
They are not measured data.

- [ ] Compare against official visitor or arrival statistics (Croatian Bureau of Statistics, eVisitor data, Plitvice park visitor numbers).
- [ ] Check the Dubrovnik cruise schedule (Dubrovnik Port Authority, portdubrovnik.hr) for the spring and autumn levels.
- [ ] Check that the alternatives (Ston, Cavtat, Lopud, Korčula, Šibenik, Stari Grad, Komiža, Šolta, Rastoke, Roški slap, Paklenica) are still sensible.

## 5. Places and heritage (`src/data/regions.mjs`, journal)

- [ ] Euphrasian Basilica, Poreč: 6th-century mosaics; UNESCO-listed.
- [ ] Cathedral of St James, Šibenik: UNESCO-listed.
- [ ] Stari Grad Plain, Hvar: UNESCO-listed; field system dating from 4th-century BC Greek colonists.
- [ ] Diocletian’s Palace built around AD 300.
- [ ] Opatija Lungomare about 12 km, from Volosko to Lovran.
- [ ] Cres: Lubenice; griffon vulture conservation project (check it is still running and open to visitors).
- [ ] Ston and Mali Ston: medieval walls, salt pans, oysters from Mali Ston Bay.
- [ ] Dubrovnik: advice to walk the walls at opening time and to check the cruise schedule.
- [ ] Kopački rit: wetland nature park near the Danube–Drava confluence.
- [ ] Ilok: Graševina and Traminac in historic cellars.
- [ ] Đakovo: cathedral and Lipizzaner stud farm.
- [ ] Croatia has more than a thousand islands, islets and rocks, around fifty of them inhabited (Islands intro).
- [ ] Vis "long closed to foreigners" (Islands planner text).
- [ ] Planner suggested nights per island are editorial judgements, so review them.

## 6. Placeholders to replace

- [ ] **Contact details** in `site.config.mjs`: email, phone, address and hours are placeholders.
- [ ] **Stays** in `src/data/stays.mjs`: all eight names are invented and labelled "Placeholder" on the site.
- [ ] **Journal dates** in `src/data/journal.mjs`: set real publication dates.
- [ ] **Enquiry form**: set `enquiry.formEndpoint` in the config if you don't want the email-app fallback, and add a privacy notice if you store submissions.
- [ ] **siteUrl** in `site.config.mjs`: set to the final domain.

## 7. Photos (`src/data/photos.mjs`)

Each photo's Unsplash **location field** was checked against the place it
illustrates on 21 October 2026. Re-check if you swap any photo. Notes:

- [ ] `medimurje` shows Međimurje (northern Croatia), not Istria. It is used only in the "Wine beyond the coast" section and captioned as Međimurje.
- [ ] `humac` has the location "Humac, Croatia". It is used for the About page and a placeholder Hvar stay. Humac is the abandoned village above Jelsa on Hvar, so check that the photo is that Humac.
- [ ] Stays cards show area photos (labelled "Area photo"), not the properties.
