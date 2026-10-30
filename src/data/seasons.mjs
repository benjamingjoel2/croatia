// Crowd calendar: indicative 1 (quiet) – 5 (very busy) per month, Jan→Dec.
// These are general patterns (school holidays, cruise season, park visitor
// peaks), not measured data. See FACTS-TO-VERIFY.md.
export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const monthsLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const crowdLevels = ['', 'Quiet', 'Moderate', 'Busy', 'Very busy', 'Peak'];

export const crowds = [
  {
    place: 'Dubrovnik', levels: [1, 1, 2, 3, 4, 5, 5, 5, 5, 4, 2, 2],
    note: 'Croatia’s busiest cruise port. Since 2019 the city has agreed limits with cruise lines of two ships and about 5,000 cruise passengers a day.† Check the day’s schedule and avoid the mid-morning to mid-afternoon peak.', src: ['dubrovnikCruise', 'dzsCruise'],
    alternatives: [
      ['Ston & Pelješac', 'Medieval walls, oysters and Plavac Mali, about an hour north.'],
      ['Cavtat', 'A small harbour town south of the city; boats into Dubrovnik.'],
      ['Lopud', 'Car-free Elaphiti island under an hour from Gruž.'],
      ['Korčula town', 'A walled old town on a much smaller scale.'],
    ],
  },
  {
    place: 'Split', levels: [1, 1, 2, 3, 4, 5, 5, 5, 4, 3, 1, 2],
    note: 'The palace quarter fills with ferry passengers in summer. Early mornings stay calm.', src: [],
    alternatives: [
      ['Šibenik', 'Another lived-in stone old town and a UNESCO cathedral, about an hour north.'],
      ['Stari Grad, Hvar', 'One of the oldest towns in Croatia and the calm side of Hvar.'],
      ['Komiža, Vis', 'A fishing town at the far end of the far island.'],
      ['Šolta', 'An hour by ferry and almost no tour groups.'],
    ],
  },
  {
    place: 'Plitvice Lakes', levels: [1, 1, 1, 3, 4, 5, 5, 5, 4, 3, 2, 1],
    note: 'The park had almost 1.5 million visitors in 2024. In 2016 August had about 346,000 and February about 10,000, so the difference between summer and winter is huge.', src: ['plitvice2024', 'plitviceMonthly'],
    alternatives: [
      ['Rastoke', 'A mill village built over small waterfalls near Slunj, on the way from Zagreb.'],
      ['Krka (Roški slap)', 'Krka’s quieter upper falls.'],
      ['Paklenica', 'Gorges and forest trails on Velebit.'],
      ['Plitvice in winter', 'The same park under snow, with a fraction of the summer visitors and a €10 ticket.'],
    ],
  },
];

// Istrian food seasons strip. Months are 0-indexed; ranges inclusive and may
// wrap the year end. All approximate: see FACTS-TO-VERIFY.md.
export const foodSeasons = [
  {
    id: 'white-truffle', name: 'White truffle', color: 'stone',
    from: 8, to: 0, peak: [9, 10], src: ['istraTruffles', 'istraTruffleDays'],
    detail: 'Tuber magnatum, the prized white truffle, is hunted with dogs in the oak forests of the Mirna valley. The Istria Tourist Board gives the season as 15 September to 31 January, at its best in October. In 2026 the White Truffle Days in Livade ran on weekends from 3 October to 1 November.',
  },
  {
    id: 'black-truffle', name: 'Summer truffle', color: 'ink',
    from: 4, to: 9, peak: [5, 7], src: ['istraTruffles'],
    detail: 'The black summer truffle (Tuber aestivum) is the most common truffle in Istria, in season from 1 May to 31 October. Milder and more affordable, it’s on menus all summer.†',
  },
  {
    id: 'grape-harvest', name: 'Grape harvest (berba)', color: 'lavender',
    from: 7, to: 9, peak: [8, 8], src: ['iwcIstria'],
    detail: 'Malvazija is picked from late August into September, and Teran follows a week or two later, sometimes into mid-October. Dates move with the vintage.',
  },
  {
    id: 'olive-harvest', name: 'Olive harvest', color: 'pine',
    from: 9, to: 10, peak: [9, 10], src: ['istraOil'],
    detail: 'Picking runs from early October to mid or late November, and family mills (uljare) press day and night.',
  },
  {
    id: 'new-oil', name: 'New olive oil', color: 'pine',
    from: 10, to: 11, peak: [10, 10], src: ['istraOil'],
    detail: 'Fresh, peppery, cloudy “mlado ulje” straight from the mill. Vodnjan’s Young Olive Oil Days are held in late November (20–22 November in 2026).',
  },
  {
    id: 'young-wine', name: 'Young wine (mlado vino)', color: 'terracotta',
    from: 10, to: 10, peak: [10, 10], src: ['istraMartinje'],
    detail: 'On St Martin’s Day (Martinje, 11 November) the new wine is “baptised”. Istrian towns hold Martinje feasts through November, centred on Malvazija and Teran.',
  },
  {
    id: 'asparagus', name: 'Wild asparagus', color: 'pine',
    from: 2, to: 4, peak: [3, 3], src: ['istraAsparagus'],
    detail: 'Thin, bitter wild asparagus is picked along the coast in spring and scrambled with eggs in a fritaja. Spring festivals celebrate it.',
  },
];

export const whenToGoSources = ['hvarSea', 'hvarLavender', 'tp9608', 'istraTruffles'];

export const whenToGo = [
  { months: 'November–March', title: 'Winter', tone: 'sea', body: 'Many island hotels close, and ferries switch to winter timetables. Cities, Istria’s truffle konobas (until January), Plitvice under snow and Zagreb’s Advent are good reasons to come.' },
  { months: 'April–May', title: 'Spring', tone: 'pine', body: 'Wildflowers, full waterfalls, wild asparagus and Easter processions. The sea is cold in April (about 14–15 °C) and warming to about 17–18 °C by late May.' },
  { months: 'June', title: 'Early summer', tone: 'lavender', body: 'Long days and warm sea. Hvar’s lavender starts flowering in June and peaks from late June to early July. Busy, but not yet August.' },
  { months: 'July–August', title: 'High summer', tone: 'terracotta', body: 'Hot, full and expensive on the coast. If you must, choose remote islands, book every ferry ahead, and stay inland in Istria.' },
  { months: 'September–October', title: 'Our favourite', tone: 'sun', body: 'The sea is still about 20–21 °C in October. There’s the grape harvest and white truffles, and the crowds thin out week by week. Most catamaran lines switch to winter timetables from late September.' },
];
