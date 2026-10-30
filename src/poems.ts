import type { Lang } from '@/i18n';

export type PoemShape = 'cruz' | 'zurvan' | 'cono' | 'espiral';

export interface PoemBase {
  id: string;
  index: string;
  shape: PoemShape;
  year: string;
}

export interface PoemLocalized {
  title: string;
  author: string;
  technique: string;
  manifest: string;
  lines: string[];
}

export type Poem = PoemBase & PoemLocalized;

export type BilingualPoem = PoemBase & { es: PoemLocalized; en: PoemLocalized };

export const poemBilingual: BilingualPoem[] = [
  {
    id: 'cruz',
    index: '01',
    year: '2026',
    shape: 'cruz',
    es: {
      title: 'Intersección',
      author: 'Composición en cruz',
      technique: 'Intersección alfabética',
      manifest:
        'Verso horizontal y verso vertical se cruzan en una letra compartida, como dos miradas que se encuentran.',
      lines: ['e', 'l', ' ', 'd', 'a', 'ñ', 'o', 'de mi país el destierro ', 's', 't', 'á', '', 'h', 'e', 'c', 'h', 'o'],
    },
    en: {
      title: 'Intersection',
      author: 'Cross composition',
      technique: 'Alphabetic intersection',
      manifest:
        'A horizontal verse and a vertical verse cross at a shared letter, like two gazes that meet.',
      lines: ['t', 'h', 'e', ' ', 'd', 'a', 'm', 'a', 'g', 'e', ' ', 'o', 'f', ' ', 'm', 'y', ' ', 'c', 'o', 'u', 'n', 't', 'r', 'y', ' ', 't', 'h', 'e', ' ', 'e', 'x', 'i', 'l', 'e', ' ', 'i', 's', ' ', 'd', 'o', 'n', 'e'],
    },
  },
  {
    id: 'zurvan',
    index: '02',
    year: '2026',
    shape: 'zurvan',
    es: {
      title: 'Zurvan',
      author: 'Símbolo persa',
      technique: 'Tarkib-band',
      manifest:
        'Dios persa antiguo como personificación del tiempo infinito y el espacio. Tarkib-band es una forma poética de la literatura persa y urdu.',
      lines: ['     nube     ', '   blanca   ', '  sobre el   ', ' cielo de París ', '  sobre el   ', '   blanca   ', '     nube     '],
    },
    en: {
      title: 'Zurvan',
      author: 'Persian symbol',
      technique: 'Tarkib-band',
      manifest:
        'Ancient Persian god as personification of infinite time and space. Tarkib-band is a poetic form from Persian and Urdu literature.',
      lines: ['     cloud     ', '    white    ', '    over the    ', ' Paris sky ', '    over the    ', '    white    ', '     cloud     '],
    },
  },
  {
    id: 'cono',
    index: '03',
    year: '2026',
    shape: 'cono',
    es: {
      title: 'Cono',
      author: 'Caligrama',
      technique: 'Geometría',
      manifest:
        'El poema se estrecha hacia un punto inferior como un embudo que condensa el sentido en una última sílaba.',
      lines: ['El cielo despejado, el sonido de los grillos', '  me acompañan hasta que amanece.  ', '    Qué sorda es la soledad y qué    ', '       presente es la lejanía.       ', '        Prende la luz, respira.         ', '          No puedo dormir.           ', '            No quiero             ', '              cerrar               ', '                los                 ', '                o                 '],
    },
    en: {
      title: 'Cone',
      author: 'Calligram',
      technique: 'Geometry',
      manifest:
        'The poem narrows toward a lower point like a funnel that condenses meaning into a final syllable.',
      lines: ['The clear sky, the sound of crickets', '  stay with me until dawn breaks.  ', '    How deaf is loneliness and how    ', '       present the distance is.       ', '        Turn on the light, breathe.        ', '          I cannot sleep.          ', '            I do not             ', '              want               ', '                to                 ', '                close               '],
    },
  },
  {
    id: 'espiral',
    index: '04',
    year: '2026',
    shape: 'espiral',
    es: {
      title: 'Espiral',
      author: 'Técnica de Jacqueline Turner',
      technique: 'Literatura ergódica',
      manifest:
        'El poema empieza desde afuera hacia adentro. Se termina cuando el espiral colapsa en el centro. Puedes comenzar otro espiral que empiece en la última palabra del espiral anterior.',
      lines: ['Probé el sol reflejado en el agua. El calor me quemaba los labios. Transparentes eran las gotas'],
    },
    en: {
      title: 'Spiral',
      author: 'Jacqueline Turner technique',
      technique: 'Ergodic literature',
      manifest:
        'The poem starts from the outside moving inward. It ends when the spiral collapses at the center. You can start another spiral beginning with the last word of the previous spiral.',
      lines: ['I tasted the sun reflected in the water. The heat burned my lips. Transparent were the drops'],
    },
  },
];

export function getPoems(lang: Lang): Poem[] {
  return poemBilingual.map((p) => ({
    id: p.id,
    index: p.index,
    shape: p.shape,
    year: p.year,
    ...p[lang],
  }));
}

export const poems: Poem[] = poemBilingual.map((p) => ({
  id: p.id,
  index: p.index,
  shape: p.shape,
  year: p.year,
  ...p.es,
}));
