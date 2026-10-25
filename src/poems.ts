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
    title: 'Intersección',
    author: 'Composición en cruz',
    year: '2026',
    shape: 'cruz',
    technique: 'Intersección alfabética',
    manifest:
      'Verso horizontal y verso vertical se cruzan en una letra compartida, como dos miradas que se encuentran.',
    lines: ['e', 'l', ' ', 'd', 'a', 'ñ', 'o', 'de mi país el destierro ', 's', 't', 'á', '', 'h', 'e', 'c', 'h', 'o' ],
  },
  {
    id: 'diamante',
    index: '02',
    title: 'Zurvan',
    author: 'Símbolo persa',
    year: '2026',
    shape: 'diamante',
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
    lines: ['amanecer sobre el Sena', '  anecer sobre el Se  ', '    ecer sobr el     ', '      er ob          ', '        o           '],
  },
  {
    id: 'espiral',
    index: '04',
    title: 'Espiral',
    author: 'Jacqueline Turner',
    year: '2026',
    shape: 'espiral',
    technique: 'Literatura ergódica',
    manifest:
      'El poema empieza desde afuera hacia adentro. Se termina cuando el espiral colapsa en el centro. Puedes comenzar otro espiral que         empiece en la última palabra del espiral anterior.',
    lines: ['afuera', 'gira', 'la', 'palabra', 'hacia', 'adentro', 'calla'],
  },
];
