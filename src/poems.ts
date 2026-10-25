export type PoemShape = 'cruz' | 'diamante' | 'cono' | 'espiral';

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
    title: 'Cruz',
    author: 'Noël Arnaud',
    year: '1961',
    shape: 'cruz',
    technique: 'Poema cruz',
    manifest:
      'Verso horizontal y verso vertical se cruzan en una letra compartida, como dos miradas que se encuentran.',
    lines: ['            o            ', '            j            ', '            e            ', 'P O É T I C A _ P O T E N C I A L', '            i            ', '            a            ', '            l            '],
  },
  {
    id: 'diamante',
    index: '02',
    title: 'Diamante',
    author: 'Jacques Bens',
    year: '1965',
    shape: 'diamante',
    technique: 'Contrapunto',
    manifest:
      'Un diamante de versos: crece y mengua por el centro, dos vértices de cúspide y base.',
    lines: ['     nube     ', '   blanca   ', '  sobre el   ', ' cielo de París ', '  sobre el   ', '   blanca   ', '     nube     '],
  },
  {
    id: 'cono',
    index: '03',
    title: 'Cono',
    author: 'Paul Braffort',
    year: '1973',
    shape: 'cono',
    technique: 'Geométrica',
    manifest:
      'El poema se estrecha hacia un punto, embudo que condensa el sentido en una sola sílaba final.',
    lines: ['amanecer sobre el Sena', '  anecer sobre el Se  ', '    ecer sobr el     ', '      er ob          ', '        o           '],
  },
  {
    id: 'espiral',
    index: '04',
    title: 'Espiral',
    author: 'Jacqueline Turner',
    year: '1966',
    shape: 'espiral',
    technique: 'Literatura ergódica',
    manifest:
      'El poema empieza desde afuera hacia adentro. Se termina cuando el espiral colapsa en el centro. Comenzamos otro espiral que empiece en la última palabra del espiral anterior.',
    lines: ['afuera', 'gira', 'la', 'palabra', 'hacia', 'adentro', 'calla'],
  },
];
