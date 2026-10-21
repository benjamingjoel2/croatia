// Every photo used on the site. Each one was accepted only after checking
// that the LOCATION FIELD on its Unsplash page matches the place it
// illustrates (verbatim value in `location`). All are free-licence
// (Unsplash License), not Unsplash+. Credits are rendered automatically
// next to each image and on /credits/.
//
// To add a photo: copy the photo-… id from images.unsplash.com, record the
// page's location field, and only use it where that place is the subject.

const p = (id, page, location, photographer, username, alt, caption) => ({
  src: `https://images.unsplash.com/photo-${id}`,
  page: `https://unsplash.com/photos/${page}`,
  location, photographer, username, alt, caption,
});

export const photos = {
  hvarPort: p('1761382799997-538f272ebcfb', 'coastal-town-with-historic-architecture-and-harbor-KkWxbXpE6EI', 'Hvar Port, Hvar, Croatia', 'Josip Ivanković', 'piak',
    'Hvar town harbour from above, terracotta roofs and moored boats, with the Pakleni islands offshore', 'Hvar town and the Pakleni islands'),
  hvar: p('1605703296515-515167084932', 'aerial-view-of-city-near-body-of-water-during-daytime-pRH473DZjCg', 'Hvar, Croatia', 'Aleksandra Krasinska', 'alwayshangryfoodie',
    'Hvar town’s harbour and rooftops at dusk, with small islands on the horizon', 'Hvar town'),
  jelsa: p('1502542210750-7c978b400449', 'aerial-photo-of-body-of-water-and-buildings-at-daytime-YRF3nhuZ81s', 'Jelsa, Croatia', 'Grant Ritchie', 'grantritchie',
    'Aerial view of Jelsa’s deep green harbour inlet and surrounding houses on Hvar', 'Jelsa, Hvar'),
  rab: p('1593890349122-90a890752e10', 'green-and-white-mountain-beside-blue-sea-during-daytime-0p1OONiaZXw', 'Rab island', 'Razvan Balsan', 'razvanbalsan',
    'A green headland on Rab ringed by turquoise shallows and deep blue sea', 'Rab'),
  brac: p('1654690678405-b38dd2fa5fe5', 'a-sandy-beach-with-steps-leading-to-the-water-smhXHXoeWLs', 'Brač, Croatia', 'Piotr Musioł', 'szamanm',
    'A small pebble cove on Brač framed by pines, with stone steps down to clear water', 'A cove on Brač'),
  vis: p('1713987438281-726fa090094e', 'an-aerial-view-of-a-city-with-boats-in-the-water-y4hdEn1-f5w', 'Komiža, Croatia', 'Leo Talabardon', '545syr',
    'Komiža on Vis at dusk, its harbour full of small boats below terracotta roofs', 'Komiža, Vis'),
  korcula: p('1693149864297-e44de7849c51', 'an-aerial-view-of-a-city-with-a-large-body-of-water-in-the-background-uvGOH9f7kpE', 'Korčula, Croatia', 'Lidija Divjak', 'lidijadivjak',
    'Korčula old town’s tight grid of stone houses and cathedral tower, with the Pelješac channel behind', 'Korčula town'),
  mljet: p('1632154613912-db7c10789160', 'an-aerial-view-of-a-bay-surrounded-by-mountains-8yB8g5q-Qho', 'Mljet, Croatia', 'Kevin Charit', 'kevin_charit',
    'A wooded bay on Mljet dotted with islets and anchored boats', 'Mljet'),
  losinj: p('1594239330386-9335388e60fb', 'green-trees-near-body-of-water-during-daytime-QSd1HCR4XsM', 'Lošinj, Croatia', 'Ante Hamersmit', 'ante_kante',
    'Pine trees and a pale beach curving around a turquoise bay on Lošinj', 'Lošinj'),
  split: p('1555990538-c48ab0a194b5', 'aerial-view-of-building-near-body-of-water-HjHnI35B4YY', 'Split, Croatia', 'Spencer Davis', 'spencerdavis',
    'Split’s waterfront and old town from above, with mountains behind the city', 'Split'),
  dubrovnik: p('1575540291670-8d3b26f7d327', 'aerial-photo-of-city-RvDc461s1EI', 'Walls of Dubrovnik, Dubrovnik, Croatia', 'Matthias Mullie', 'matthiasmullie',
    'Dubrovnik’s city walls and Fort Lovrijenac on the rocks above deep blue water', 'Dubrovnik’s walls'),
  rovinj: p('1704446181913-592ffe9a8621', 'a-clock-tower-on-top-of-a-building-next-to-a-body-of-water-ph8wzYkpnds', 'Rovinj, Croatia', 'Josip Ivanković', 'piak',
    'Pastel houses of Rovinj below the bell tower of St Euphemia', 'Rovinj'),
  motovun: p('1785443511312-47e1fc2961da', 'W1UG7iGviFg', 'Motovun, Croatia', 'Lothar Boris Piltz', 'lotharborispiltz',
    'The hilltop town of Motovun above rows of vines in inland Istria', 'Motovun, inland Istria'),
  opatija: p('1654901679289-2782bd59dd52', 'a-city-on-a-hill-by-the-water-pFXQfsZyFQE', 'Opatija, Croatia', 'Ozren Cuculic', 'ozren_c',
    'Opatija’s villas and hotels climbing a wooded slope above Kvarner Bay', 'Opatija'),
  zadar: p('1668450418514-7928a8f58d06', 'a-city-with-a-body-of-water-in-the-background-vDZZ-VbZg_8', 'Zadar, Croatia', 'Nazrin Babashova', 'kurokami04',
    'Zadar’s old town rooftops and bell towers at sunset over the sea', 'Zadar'),
  sibenik: p('1554393478-7e87effa46ed', 'birds-eye-view-of-town-x7-Zqi4ZXcc', 'Šibenik, Croatia', 'Hrvoje_Photography', 'hrvoje_photography',
    'Šibenik’s rooftops and cathedral dome from above, by the water at golden hour', 'Šibenik'),
  zagreb: p('1730645612711-1613af3182d5', 'an-aerial-view-of-a-city-with-red-roofs-XErcvgcD6EQ', 'Zagreb, Croatia', 'Lukas', 'zg_aerials',
    'St Mark’s Church in Zagreb’s Upper Town, its tiled roof showing the coats of arms', 'St Mark’s Church, Zagreb'),
  osijek: p('1713307170901-3252ef58056c', 'a-large-cathedral-with-a-clock-on-its-side-m-6kwiUZGvs', 'Osijek, Croatia', 'Daniel Trofimov', 'danieltrofimov',
    'The red-brick neo-Gothic co-cathedral of Saints Peter and Paul in Osijek', 'Osijek'),
  plitvice: p('1550236520-7050f3582da0', 'wooden-walkways-in-plitvice-lakes-wI6o8OwUwdw', 'Plitvice Lakes, Croatia', 'Peter Jan Rijpkema', 'pjrpkm',
    'Wooden walkways threading between turquoise pools and waterfalls in autumn colour at Plitvice', 'Plitvice Lakes in autumn'),
  krka: p('1700571552118-535d8ec8c1d3', 'a-large-waterfall-in-the-middle-of-a-river-UHDJ6sBw-94', 'Krka, Croatia', 'Christopher Politano', 'poli_graphy',
    'A broad waterfall spilling into a green river pool at Krka', 'Krka'),
  kornati: p('1744144081946-7b2125836a69', 'aerial-view-of-a-coastal-island-and-stunning-blue-waters-Ix-rOzkUAsg', 'Kornati, Croatia', 'Mark Pisek', 'flying_solution',
    'A bare limestone Kornati island enclosing a turquoise lagoon, with more islands beyond', 'The Kornati'),
  paklenica: p('1728844484740-1a871298d400', 'a-view-of-a-mountain-range-with-a-body-of-water-in-the-foreground-Jr3bEBoL50c', 'Paklenica, Croatia', 'Marko Brečić', 'markobrecic',
    'The Velebit range rising steeply above the coast at Paklenica', 'Velebit above Paklenica'),
  sailing: p('1744144141324-5f89f09056b3', 'a-sailboat-glides-across-the-calm-blue-sea-UoD63IgF5Lo', 'Kornati, Croatia', 'Mark Pisek', 'flying_solution',
    'A white-sailed yacht crossing open blue water among the Kornati islands', 'Sailing in the Kornati'),
  ferry: p('1743171711146-a959b8f5a1d4', 'a-ferry-is-docked-at-sunset-painting-the-sky-p1XJkBqMqrw', 'Zadar Gaženica ferry port, Zadar, Croatia', 'Tomi Blasic', 'tomiblasic',
    'A car ferry moored at Zadar’s Gaženica port as the sun sets', 'Ferry port, Zadar'),
  humac: p('1785442373977-5a5f74c99ccb', 'traditional-stone-buildings-with-a-clear-blue-sky-overhead-0vnO0Mlol6o', 'Humac, Croatia', 'Lothar Boris Piltz', 'lotharborispiltz',
    'Two traditional stone houses with stone-slab roofs under a deep blue sky in Humac', 'Stone houses, Humac'),
  medimurje: p('1698296550335-ac7189d0a10b', 'a-winding-road-in-the-middle-of-a-lush-green-field-dpDoArrg6d4', 'Mađerkin breg, Robadje, Croatia', 'Goran Ivos', 'goran_ivos',
    'A lane winding between terraced green vineyards on a hill in Međimurje', 'Vineyards, Mađerkin breg (Međimurje)'),
};
