// Crowd calendar: indicative 1 (quiet) – 5 (very busy) per month, Jan→Dec.
// These are general patterns (school holidays, cruise season, park visitor
// peaks), not measured data. See FACTS-TO-VERIFY.md.
export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const monthsLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const crowdLevels = ['', 'Quiet', 'Moderate', 'Busy', 'Very busy', 'Peak'];

export const crowds = [
  {
    place: 'Dubrovnik', levels: [1, 1, 2, 3, 4, 5, 5, 5, 5, 4, 2, 2],
    note: 'Cruise calls keep spring and autumn busy. Check the daily cruise schedule and avoid the mid-morning to mid-afternoon peak.',
    alternatives: [
      ['Ston & Pelješac', 'Medieval walls, oysters and Plavac Mali, about an hour north.'],
      ['Cavtat', 'A small harbour town south of the city; boats into Dubrovnik.'],
      ['Lopud', 'Car-free Elaphiti island under an hour from Gruž.'],
      ['Korčula town', 'A walled old town on a much smaller scale.'],
    ],
  },
  {
    place: 'Split', levels: [1, 1, 2, 3, 4, 5, 5, 5, 4, 3, 1, 2],
    note: 'The palace quarter fills with ferry passengers in summer. Early mornings stay calm.',
    alternatives: [
      ['Šibenik', 'Another lived-in stone old town and a UNESCO cathedral, about an hour north.'],
      ['Stari Grad, Hvar', 'One of the oldest towns in Croatia and the calm side of Hvar.'],
      ['Komiža, Vis', 'A fishing town at the far end of the far island.'],
      ['Šolta', 'An hour by ferry and almost no tour groups.'],
    ],
  },
  {
    place: 'Plitvice Lakes', levels: [1, 1, 1, 3, 4, 5, 5, 5, 4, 3, 2, 1],
    note: 'The lower lakes boardwalks queue up in summer. October colour draws weekend crowds; weekdays are calmer.',
    alternatives: [
      ['Rastoke', 'A mill village built over small waterfalls near Slunj, on the way from Zagreb.'],
      ['Krka (Roški slap)', 'Krka’s quieter upper falls.'],
      ['Paklenica', 'Gorges and forest trails on Velebit.'],
      ['Plitvice in winter', 'The same park under snow, often with just a few hundred visitors.†'],
    ],
  },
];

// Istrian food seasons strip. Months are 0-indexed; ranges inclusive and may
// wrap the year end. All approximate: see FACTS-TO-VERIFY.md.
export const foodSeasons = [
  {
    id: 'white-truffle', name: 'White truffle', color: 'stone',
    from: 8, to: 0, peak: [9, 10],
    detail: 'Tuber magnatum, the prized white truffle, is hunted with dogs in the oak forests of the Mirna valley. The legal season runs roughly from mid-September to the end of January, at its best in October and November.†',
  },
  {
    id: 'black-truffle', name: 'Black summer truffle', color: 'ink',
    from: 4, to: 7, peak: [5, 6],
    detail: 'The black summer truffle (Tuber aestivum) is milder, more affordable, and on menus through the summer.†',
  },
  {
    id: 'grape-harvest', name: 'Grape harvest (berba)', color: 'lavender',
    from: 8, to: 9, peak: [8, 8],
    detail: 'Malvazija, Teran and Muškat are picked from late August to early October, depending on the vintage and the slope.†',
  },
  {
    id: 'olive-harvest', name: 'Olive harvest', color: 'pine',
    from: 9, to: 11, peak: [10, 10],
    detail: 'Picking starts in October; most of Istria’s mills (uljare) work through November into December.†',
  },
  {
    id: 'new-oil', name: 'New olive oil', color: 'pine',
    from: 10, to: 11, peak: [10, 10],
    detail: 'Fresh, peppery, cloudy “mlado ulje” straight from the mill, at its best in November.',
  },
  {
    id: 'young-wine', name: 'Young wine (mlado vino)', color: 'terracotta',
    from: 10, to: 10, peak: [10, 10],
    detail: 'St Martin’s Day (Martinje, 11 November) is when the year’s must becomes wine, with village feasts across Istria and continental Croatia.†',
  },
  {
    id: 'asparagus', name: 'Wild asparagus', color: 'pine',
    from: 2, to: 4, peak: [3, 3],
    detail: 'Thin, bitter wild asparagus picked from the hedgerows in spring, often scrambled with eggs (fritaja).†',
  },
];

export const whenToGo = [
  { months: 'November–March', title: 'Winter', tone: 'sea', body: 'Many island hotels close, and ferries switch to winter timetables. Cities, Istria’s truffle konobas (until January), Plitvice under snow and Zagreb’s Advent are good reasons to come.' },
  { months: 'April–May', title: 'Spring', tone: 'pine', body: 'Wildflowers, full waterfalls, wild asparagus and Easter processions. The sea is cool, around 16–18 °C,† and prices are low.' },
  { months: 'June', title: 'Early summer', tone: 'lavender', body: 'Long days and warm sea. Hvar’s lavender usually flowers late June into July.† Busy, but not yet August.' },
  { months: 'July–August', title: 'High summer', tone: 'terracotta', body: 'Hot, full and expensive on the coast. If you must, choose remote islands, book every ferry ahead, and stay inland in Istria.' },
  { months: 'September–October', title: 'Our favourite', tone: 'sun', body: 'The sea is still warm from the summer, there’s the grape harvest and white truffles, and the crowds thin out week by week. Catamaran timetables shrink in October.†' },
];
