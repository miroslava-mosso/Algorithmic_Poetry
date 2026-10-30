export type PoemShape = 'cruz' | 'zurvan' | 'cono' | 'espiral';

export interface Poem {
  id: string;
  index: string;
  title: string;
  author: string;
  year: string;
  shape: PoemShape;
  technique: string;
  manifest: string;
  lines: string[];
}

export const poems: Poem[] = [
  {
    id: 'cruz',
    index: '01',
    title: 'Intersección',
    author: 'Composición en cruz',
    year: '2026',
    shape: 'cruz',
    technique: 'Intersección alfabética',
    manifest:
      'Verso horizontal y verso vertical se cruzan en una letra compartida, como dos miradas que se encuentran.',
    lines: ['e', 'l', ' ', 'd', 'a', 'ñ', 'o','de mi país el destierro ', 's', 't', 'á', '', 'h', 'e', 'c', 'h', 'o' ],
  },
  {
    id: 'zurvan',
    index: '02',
    title: 'Zurvan',
    author: 'Símbolo persa',
    year: '2026',
    shape: 'zurvan',
    technique: 'Tarkib-band',
    manifest:
      'Dios persa antiguo como personificación del tiempo infinito y el espacio. Tarkib-band es una forma poética de la literatura persa       y urdu.',
    lines: ['     nube     ', '   blanca   ', '  sobre el   ', ' cielo de París ', '  sobre el   ', '   blanca   ', '     nube     '],
  },
  {
    id: 'cono',
    index: '03',
    title: 'Cono',
    author: 'Caligrama',
    year: '2026',
    shape: 'cono',
    technique: 'Geometría',
    manifest:
      'El poema se estrecha hacia un punto inferior como un embudo que condensa el sentido en una última sílaba.',
    lines: ['El cielo despejado, el sonido de los grillos', '  me acompañan hasta que amanece.  ', '    Qué sorda es la soledad y qué    ', '       presente es la lejanía.       ','        Prende la luz, respira.         ','          No puedo dormir.           ','            No quiero             ','              cerrar               ', '                los                 ', '                o                 '],
  },
  {
    id: 'espiral',
    index: '04',
    title: 'Espiral',
    author: 'Técnica de Jacqueline Turner',
    year: '2026',
    shape: 'espiral',
    technique: 'Literatura ergódica',
    manifest:
      'El poema empieza desde afuera hacia adentro. Se termina cuando el espiral colapsa en el centro. Puedes comenzar otro espiral que empiece en la última palabra del espiral anterior.',
    lines: ['Probé el sol reflejado en el agua. El calor me quemaba los labios. Transparentes eran las gotas'],
  },
];

/** English translations, keeping each poem's visual structure. */
export const poemsEnglish: Poem[] = [
  {
    id: 'cruz', index: '01', title: 'Intersection', author: 'Cross composition', year: '2026', shape: 'cruz',
    technique: 'Alphabetic intersection',
    manifest: 'A horizontal line and a vertical line meet at a shared letter, like two gazes crossing.',
    lines: ['t', 'h', 'e', ' ', 'w', 'o', 'u', "my country's exile", 'n', 'd', ' ', 'i', 's', ' ', 'd', 'o', 'n', 'e'],
  },
  {
    id: 'zurvan', index: '02', title: 'Zurvan', author: 'Persian symbol', year: '2026', shape: 'zurvan',
    technique: 'Tarkib-band',
    manifest: 'An ancient Persian deity who embodies infinite time and space. The tarkib-band is a poetic form found in Persian and Urdu literature.',
    lines: ['     cloud     ', '   white   ', '  above   ', ' the Paris sky ', '  above   ', '   white   ', '     cloud     '],
  },
  {
    id: 'cono', index: '03', title: 'Cone', author: 'Calligram', year: '2026', shape: 'cono',
    technique: 'Geometry',
    manifest: 'The poem narrows toward a lower point, like a funnel that condenses meaning into one final syllable.',
    lines: ['The clear sky, the sound of crickets', '  keep me company until dawn.  ', '    How deafening loneliness is,    ', '       how present distance feels.       ', '        Turn on the light, breathe.         ', '          I cannot sleep.           ', '            I do not want             ', '              to close               ', '                my                 ', '                eyes                '],
  },
  {
    id: 'espiral', index: '04', title: 'Spiral', author: 'Technique by Jacqueline Turner', year: '2026', shape: 'espiral',
    technique: 'Ergodic literature',
    manifest: 'The poem begins at the outer edge and moves inward, ending where the spiral collapses at its center. You can start a new spiral with the final word of the previous one.',
    lines: ['I tried the sun reflected on the water. The heat burned my lips. The droplets were transparent.'],
  },
];
