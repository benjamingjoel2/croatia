// Ferry & catamaran network used by the island-hopping planner.
// ALL durations are rough, typical crossing times in minutes. Timetables,
// operators and seasonal running change every year: every leg is listed
// in FACTS-TO-VERIFY.md. `seasonal: true` = runs mainly late spring–early autumn
// or far less often in winter.
//
// type: 'ferry' (car ferry), 'cat' (passenger catamaran), 'ship' (passenger
// ship, no cars), 'road' (bridge or
// on-island drive/bus, included so the planner can move between ports).

export const ports = {
  // Mainland
  split:      { name: 'Split', island: null, region: 'split' },
  dubrovnik:  { name: 'Dubrovnik (Gruž)', island: null, region: 'dubrovnik' },
  zadar:      { name: 'Zadar', island: null, region: 'zadar-sibenik' },
  sibenik:    { name: 'Šibenik', island: null, region: 'zadar-sibenik' },
  rijeka:     { name: 'Rijeka', island: null, region: 'kvarner' },
  makarska:   { name: 'Makarska', island: null, region: 'split' },
  drvenik:    { name: 'Drvenik', island: null, region: 'split' },
  orebic:     { name: 'Orebić (Pelješac)', island: null, region: 'dubrovnik' },
  prapratno:  { name: 'Prapratno (Pelješac)', island: null, region: 'dubrovnik' },
  brestova:   { name: 'Brestova (Istria)', island: null, region: 'istria' },
  stinica:    { name: 'Stinica', island: null, region: 'kvarner' },
  // Islands
  supetar:    { name: 'Supetar', island: 'brac' },
  bol:        { name: 'Bol', island: 'brac' },
  sumartin:   { name: 'Sumartin', island: 'brac' },
  rogac:      { name: 'Rogač', island: 'solta' },
  starigrad:  { name: 'Stari Grad', island: 'hvar' },
  hvartown:   { name: 'Hvar town', island: 'hvar' },
  jelsa:      { name: 'Jelsa', island: 'hvar' },
  sucuraj:    { name: 'Sućuraj', island: 'hvar' },
  vis:        { name: 'Vis town', island: 'vis' },
  korcula:    { name: 'Korčula town', island: 'korcula' },
  domince:    { name: 'Dominče (Korčula)', island: 'korcula' },
  velaluka:   { name: 'Vela Luka', island: 'korcula' },
  ubli:       { name: 'Ubli', island: 'lastovo' },
  sobra:      { name: 'Sobra', island: 'mljet' },
  polace:     { name: 'Polače', island: 'mljet' },
  pomena:     { name: 'Pomena', island: 'mljet' },
  lopud:      { name: 'Lopud', island: 'elaphiti' },
  preko:      { name: 'Preko', island: 'ugljan' },
  brbinj:     { name: 'Brbinj', island: 'dugiotok' },
  zlarin:     { name: 'Zlarin', island: 'zlarin' },
  crestown:   { name: 'Cres town', island: 'cres' },
  porozina:   { name: 'Porozina', island: 'cres' },
  merag:      { name: 'Merag', island: 'cres' },
  malilosinj: { name: 'Mali Lošinj', island: 'losinj' },
  valbiska:   { name: 'Valbiska', island: 'krk' },
  krktown:    { name: 'Krk town', island: 'krk' },
  rabtown:    { name: 'Rab town', island: 'rab' },
  misnjak:    { name: 'Mišnjak', island: 'rab' },
};

// Bidirectional legs. `op` = operator, `src` = key in sources.mjs.
// Times checked against 2026 timetables where we could (October 2026).
export const legs = [
  // Central Dalmatia from Split
  { a: 'split', b: 'supetar', type: 'ferry', mins: 50, op: 'Jadrolinija', src: 'jadSupetar' },
  { a: 'split', b: 'bol', type: 'cat', mins: 65, op: 'Jadrolinija', src: 'jadBol' },
  { a: 'split', b: 'rogac', type: 'ferry', mins: 60, op: 'Jadrolinija', src: 'jadSolta' },
  { a: 'split', b: 'starigrad', type: 'ferry', mins: 110, op: 'Jadrolinija', src: 'jadStariGrad' },
  { a: 'split', b: 'hvartown', type: 'cat', mins: 60, op: 'TP Line', src: 'tp9604' },
  { a: 'split', b: 'vis', type: 'ferry', mins: 140, op: 'Jadrolinija', src: 'jadVis' },
  { a: 'split', b: 'vis', type: 'cat', mins: 80, op: 'Jadrolinija / Krilo', src: 'ferryVis', note: '70–115 min depending on stops' },
  { a: 'split', b: 'velaluka', type: 'ferry', mins: 180, op: 'Jadrolinija', src: 'jadVelaLuka' },
  { a: 'split', b: 'korcula', type: 'cat', mins: 185, op: 'TP Line', src: 'tp9608', note: 'faster seasonal Split–Dubrovnik boats take about 2 h 30' },
  { a: 'bol', b: 'jelsa', type: 'cat', mins: 25, op: 'Jadrolinija', src: 'jadBol' },
  { a: 'hvartown', b: 'vis', type: 'cat', mins: 45, seasonal: true, op: 'Jadrolinija (summer)', src: 'visitCroatiaVis' },
  { a: 'hvartown', b: 'korcula', type: 'cat', mins: 75, op: 'TP Line / Krilo', src: 'ferryHvarKorcula' },
  { a: 'hvartown', b: 'velaluka', type: 'cat', mins: 55, op: 'TP Line', src: 'tp9604' },
  { a: 'makarska', b: 'sumartin', type: 'ferry', mins: 50, op: 'Jadrolinija', src: 'jadMakarska' },
  { a: 'drvenik', b: 'sucuraj', type: 'ferry', mins: 30, op: 'Jadrolinija', src: 'jadSucuraj' },
  // South Dalmatia
  { a: 'velaluka', b: 'ubli', type: 'ferry', mins: 90, op: 'Jadrolinija', src: 'jadVelaLuka' },
  { a: 'orebic', b: 'domince', type: 'ferry', mins: 20, op: 'Jadrolinija', src: 'jadOrebic' },
  { a: 'korcula', b: 'pomena', type: 'cat', mins: 45, seasonal: true, op: 'Krilo', src: 'kriloMljet' },
  { a: 'pomena', b: 'dubrovnik', type: 'cat', mins: 75, seasonal: true, op: 'Krilo', src: 'kriloMljet' },
  { a: 'korcula', b: 'dubrovnik', type: 'cat', mins: 125, op: 'TP Line / Krilo', src: 'tp9807' },
  { a: 'dubrovnik', b: 'sobra', type: 'cat', mins: 75, op: 'TP Line', src: 'tp9807', unverifiedTime: true },
  { a: 'sobra', b: 'polace', type: 'cat', mins: 30, op: 'TP Line', src: 'tp9807', unverifiedTime: true },
  { a: 'prapratno', b: 'sobra', type: 'ferry', mins: 45, op: 'Jadrolinija', src: 'jadPrapratno' },
  { a: 'dubrovnik', b: 'lopud', type: 'ship', mins: 50, op: 'Jadrolinija', src: 'jadElaphiti', unverifiedTime: true },
  // North Dalmatia
  { a: 'zadar', b: 'preko', type: 'ferry', mins: 25, op: 'Jadrolinija', src: 'jadPreko' },
  { a: 'zadar', b: 'brbinj', type: 'ferry', mins: 100, op: 'Jadrolinija', src: 'jadBrbinj' },
  { a: 'sibenik', b: 'zlarin', type: 'ferry', mins: 25, op: 'Jadrolinija', src: 'jadZlarin' },
  // Kvarner
  { a: 'rijeka', b: 'crestown', type: 'cat', mins: 80, op: 'Jadrolinija', src: 'jadLosinj' },
  { a: 'rijeka', b: 'malilosinj', type: 'cat', mins: 270, op: 'Jadrolinija', src: 'jadLosinj', note: 'calls at Cres, Martinšćica, Unije, Susak and Ilovik' },
  { a: 'brestova', b: 'porozina', type: 'ferry', mins: 20, op: 'Jadrolinija', src: 'jadBrestova' },
  { a: 'valbiska', b: 'merag', type: 'ferry', mins: 25, op: 'Jadrolinija', src: 'jadValbiska' },
  { a: 'stinica', b: 'misnjak', type: 'ferry', mins: 20, op: 'Rapska plovidba', src: 'stinica' },
  // On-island / bridge connections (road)
  { a: 'supetar', b: 'bol', type: 'road', mins: 45 },
  { a: 'supetar', b: 'sumartin', type: 'road', mins: 50 },
  { a: 'starigrad', b: 'hvartown', type: 'road', mins: 25 },
  { a: 'starigrad', b: 'jelsa', type: 'road', mins: 20 },
  { a: 'jelsa', b: 'sucuraj', type: 'road', mins: 70 },
  { a: 'korcula', b: 'domince', type: 'road', mins: 10 },
  { a: 'korcula', b: 'velaluka', type: 'road', mins: 60 },
  { a: 'sobra', b: 'pomena', type: 'road', mins: 40 },
  { a: 'polace', b: 'pomena', type: 'road', mins: 10 },
  { a: 'porozina', b: 'crestown', type: 'road', mins: 30 },
  { a: 'merag', b: 'crestown', type: 'road', mins: 15 },
  { a: 'crestown', b: 'malilosinj', type: 'road', mins: 60 },
  { a: 'valbiska', b: 'krktown', type: 'road', mins: 20 },
  { a: 'krktown', b: 'rijeka', type: 'road', mins: 45 },
  { a: 'misnjak', b: 'rabtown', type: 'road', mins: 20 },
  { a: 'rijeka', b: 'brestova', type: 'road', mins: 50 },
  { a: 'rijeka', b: 'stinica', type: 'road', mins: 110 },
  { a: 'split', b: 'makarska', type: 'road', mins: 75 },
  { a: 'makarska', b: 'drvenik', type: 'road', mins: 40 },
  { a: 'drvenik', b: 'orebic', type: 'road', mins: 90 },
  { a: 'orebic', b: 'prapratno', type: 'road', mins: 50 },
  { a: 'prapratno', b: 'dubrovnik', type: 'road', mins: 75 },
  { a: 'split', b: 'sibenik', type: 'road', mins: 60 },
  { a: 'sibenik', b: 'zadar', type: 'road', mins: 60 },
];

// Islands shown in the planner. `ports` = where you'd normally base yourself
// (first one is preferred). `nights` = our suggested range.
export const islands = [
  { id: 'brac', name: 'Brač', ports: ['bol', 'supetar'], nights: [2, 3], why: 'Pine-backed beaches at Bol, stone villages inland and the quarry that built half of Dalmatia.' },
  { id: 'solta', name: 'Šolta', ports: ['rogac'], nights: [1, 2], why: 'An hour from Split and a world quieter: olive oil, honey and tiny harbours.' },
  { id: 'hvar', name: 'Hvar', ports: ['hvartown', 'starigrad', 'jelsa'], nights: [2, 3], why: 'Lavender, the UNESCO-listed Stari Grad Plain, and a town that calms down beautifully after September.' },
  { id: 'vis', name: 'Vis', ports: ['vis'], nights: [3, 4], why: 'The farthest inhabited island of central Dalmatia, closed to foreign visitors until 1989. Komiža, wine and slow lunches.' },
  { id: 'korcula', name: 'Korčula', ports: ['korcula', 'velaluka'], nights: [2, 3], why: 'A walled old town on a peninsula, white Pošip and Grk wines, and the Pelješac peninsula across the channel.' },
  { id: 'lastovo', name: 'Lastovo', ports: ['ubli'], nights: [2, 3], why: 'A protected nature park with very little light pollution and few visitors.' },
  { id: 'mljet', name: 'Mljet', ports: ['pomena', 'polace', 'sobra'], nights: [2, 2], why: 'Forest, saltwater lakes and a 12th-century monastery on an islet, inside a national park.' },
  { id: 'elaphiti', name: 'Lopud (Elaphiti)', ports: ['lopud'], nights: [1, 2], why: 'Car-free and close to Dubrovnik, with a sandy bay at Šunj.' },
  { id: 'ugljan', name: 'Ugljan', ports: ['preko'], nights: [1, 2], why: 'Zadar’s olive-growing island, 25 minutes away.' },
  { id: 'dugiotok', name: 'Dugi Otok', ports: ['brbinj'], nights: [2, 3], why: 'Telašćica Nature Park on its southern tip, which borders the Kornati National Park.' },
  { id: 'zlarin', name: 'Zlarin', ports: ['zlarin'], nights: [1, 1], why: 'A car-free island of coral-diving history, half an hour from Šibenik.' },
  { id: 'cres', name: 'Cres', ports: ['crestown', 'porozina', 'merag'], nights: [2, 2], why: 'Sheep pasture, griffon vultures and hilltop Lubenice.' },
  { id: 'losinj', name: 'Lošinj', ports: ['malilosinj'], nights: [2, 3], why: 'Pine-scented promenades and captains’ houses, joined to Cres by a bridge at Osor.' },
  { id: 'krk', name: 'Krk', ports: ['krktown', 'valbiska'], nights: [1, 2], why: 'Bridged to the mainland; Vrbnik’s Žlahtina wine and Glagolitic heritage.' },
  { id: 'rab', name: 'Rab', ports: ['rabtown', 'misnjak'], nights: [2, 2], why: 'Four bell towers above the old town, sandy Lopar beaches.' },
];

export const startPorts = ['split', 'dubrovnik', 'zadar', 'sibenik', 'rijeka', 'makarska', 'brestova'];

// Ready-made routes, rendered on the page without JavaScript too.
export const presets = [
  {
    id: 'central',
    name: 'Central Dalmatia classic',
    blurb: 'The easiest loop: frequent year-round boats from Split.',
    start: 'split', end: 'split',
    stops: ['brac', 'hvar', 'vis'],
  },
  {
    id: 'south',
    name: 'Split to Dubrovnik the slow way',
    blurb: 'One-way, island by island, ending where most people start.',
    start: 'split', end: 'dubrovnik',
    stops: ['hvar', 'korcula', 'mljet'],
  },
  {
    id: 'kvarner',
    name: 'Kvarner from Istria',
    blurb: 'Pair with a few days of Istrian food: Cres and Lošinj by car.',
    start: 'brestova', end: 'rijeka',
    stops: ['cres', 'losinj', 'krk'],
  },
  {
    id: 'far',
    name: 'Far islands',
    blurb: 'For people who want the quietest places on the map.',
    start: 'split', end: 'split',
    stops: ['vis', 'korcula', 'lastovo'],
  },
];
