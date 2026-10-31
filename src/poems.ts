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
  translation?: { text: string; color?: string; opacity?: number; pinkUnderline?: boolean }[];
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
    lines: [],
    translation: [
      { text: 'The damage is done', color: '#0d0d0d' },
      { text: 'from my homeland the exile', color: '#0d0d0d', pinkUnderline: true },
    ],
  },
  {
    id: 'zurvan', index: '02', title: 'Zurvan', author: 'Persian symbol', year: '2026', shape: 'zurvan',
    technique: 'Tarkib-band',
    manifest: 'An ancient Persian deity who embodies infinite time and space. The tarkib-band is a poetic form found in Persian and Urdu literature.',
    lines: [],
    translation: [
      { text: 'Infinitely smooth surface, is closed within itself.', color: '#171717' },
      { text: 'Even if I stop existing in time,', color: '#8f2638' },
      { text: 'the sunrises will continue repeating,', color: '#8f2638' },
      { text: 'and the cherry trees will go on blooming,', color: '#8f2638' },
    ],
  },
  {
    id: 'cono', index: '03', title: 'Cone', author: 'Calligram', year: '2026', shape: 'cono',
    technique: 'Geometry',
    manifest: 'The poem narrows toward a lower point, like a funnel that condenses meaning into one final syllable.',
    lines: [],
    translation: [
      { text: 'Clear skies, the sound of crickets', color: '#0d0d0d', opacity: 1 },
      { text: 'which keep me company till dawn.', color: '#0d0d0d', opacity: 0.9 },
      { text: 'How deafening loneliness is,', color: '#0d0d0d', opacity: 0.8 },
      { text: 'how present distance feels.', color: '#0d0d0d', opacity: 0.7 },
      { text: 'Turn on the light. Breathe.', color: '#0d0d0d', opacity: 0.6 },
      { text: 'I cannot sleep.', color: '#0d0d0d', opacity: 0.5 },
      { text: 'I do not want', color: '#0d0d0d', opacity: 0.4 },
      { text: 'to close', color: '#0d0d0d', opacity: 0.3 },
      { text: 'my', color: '#0d0d0d', opacity: 0.2 },
      { text: 'e.', color: '#0d0d0d', opacity: 0.1 },
    ],
  },
  {
    id: 'espiral', index: '04', title: 'Spiral', author: 'Technique by Jacqueline Turner', year: '2026', shape: 'espiral',
    technique: 'Ergodic literature',
    manifest: 'The poem begins at the outer edge and moves inward, ending where the spiral collapses at its center. You can start a new spiral with the final word of the previous one.',
    lines: [],
    translation: [
      { text: 'I tried the sun reflected in the water. Its heat burned my lips. The drops were transparent.', color: '#0d0d0d' },
      { text: 'Bitter drops of coffee. I wake after midday.', color: '#0d0d0d' },
    ],
  },
];

/** Returns the poem set for the selected language. */
export function getPoems(language: 'es' | 'en' = 'es'): Poem[] {
  return language === 'en' ? poemsEnglish : poems;
}