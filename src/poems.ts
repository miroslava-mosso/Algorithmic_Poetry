export type PoemShape =
  | 'liana'
  | 'pajarito'
  | 'cruz'
  | 'diamante'
  | 'piramide'
  | 'cono'
  | 'ola'
  | 'gemelos'
  | 'espiral'
  | 'centrifugo';

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
    id: 'liana',
    index: '01',
    title: 'Liana',
    author: 'Raymond Queneau',
    year: '1963',
    shape: 'liana',
    technique: 'Morfograma',
    manifest:
      'Una letra que cuelga de la página como bejuco. Cada verso pierde una letra hasta casi desaparecer.',
    lines: ['enredaderas', 'nredadera', 'redader', 'edade', 'dad', 'ad', 'd'],
  },
  {
    id: 'pajarito',
    index: '02',
    title: 'Pajarito',
    author: 'Raymond Queneau',
    year: '1963',
    shape: 'pajarito',
    technique: 'Morfograma',
    manifest:
      'El poema es un pájaro que levanta el vuelo: dos ajas de palabras, un cuerpo, una cola que se disipa.',
    lines: ['  ala  ala  ', '   pajarito   ', '    pajari     ', '     pajar      ', '      paja       ', '       pa         '],
  },
  {
    id: 'cruz',
    index: '03',
    title: 'Cruz',
    author: 'Noël Arnaud',
    year: '1961',
    shape: 'cruz',
    technique: 'Poema cruz',
    manifest:
      'Verso horizontal y verso vertical se cruzan en una letra compartida, como dos miradas que se encuentran.',
    lines: [
      '            o            ',
      '            j            ',
      '            e            ',
      'P O É T I C A _ P O T E N C I A L',
      '            i            ',
      '            a            ',
      '            l            ',
    ],
  },
  {
    id: 'diamante',
    index: '04',
    title: 'Diamante',
    author: 'Jacques Bens',
    year: '1965',
    shape: 'diamante',
    technique: 'Contrapunto',
    manifest:
      'Un diamante de versos: crece y mengua por el centro, dos vértices de cúspide y base.',
    lines: [
      '     nube     ',
      '   blanca   ',
      '  sobre el   ',
      ' cielo de París ',
      '  sobre el   ',
      '   blanca   ',
      '     nube     ',
    ],
  },
  {
    id: 'piramide',
    index: '05',
    title: 'Pirámide',
    author: 'Jacques Bens',
    year: '1965',
    shape: 'piramide',
    technique: 'Irradiación',
    manifest:
      'Una pirámide de palabras: una cima, dos hombros, tres cimientos. El verso se ensancha como una colina.',
    lines: ['     pájaro     ', '   ala   canto   ', ' cielo   nube   viento '],
  },
  {
    id: 'cono',
    index: '06',
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
    id: 'ola',
    index: '07',
    title: 'Ola',
    author: 'Marcel Bénabou',
    year: '1967',
    shape: 'ola',
    technique: 'Línea móvil',
    manifest:
      'Versos que se inclinan como una ola que rompe. El ritmo se lee con los ojos, no con el oído.',
    lines: ['--- el mar escribe ---', ' --- el mar escri ---', '  --- el mar es ---', '   --- el mar ---', '    --- el ---', '     --- ---'],
  },
  {
    id: 'gemelos',
    index: '08',
    title: 'Gemelos',
    author: 'François Le Lionnais',
    year: '1973',
    shape: 'gemelos',
    technique: 'Espejo',
    manifest:
      'Dos columnas gemelas, la izquierda y la derecha como dos hermanos que se miran de reojo.',
    lines: [
      'pequeña     niebla',
      'blanca      fría',
      'sobre       sobre',
      'el cielo    la calle',
      'de la       de la',
      'mañana      noche',
    ],
  },
  {
    id: 'espiral',
    index: '09',
    title: 'Espiral',
    author: 'Jacques Roubaud',
    year: '1966',
    shape: 'espiral',
    technique: 'Geométrica',
    manifest:
      'El verso gira sobre sí mismo en espiral, cada vuelta repite con un giro, como una escala que sube.',
    lines: ['sube', '  sube gira', '    sube gira calla', '      sube gira calla vuela', '        sube gira calla vuela canta'],
  },
  {
    id: 'centrifugo',
    index: '10',
    title: 'Centrífugo',
    author: 'Italo Calvino',
    year: '1967',
    shape: 'centrifugo',
    technique: 'Irradiación',
    manifest:
      'El sentido sale del centro hacia los bordes: una palabra madre de la que huyen hijas en todas direcciones.',
    lines: [
      '  norte   mar   sur  ',
      ' oeste        este   ',
      '   río  París  río    ',
      ' oeste        este   ',
      '  norte   mar   sur  ',
    ],
  },
];
