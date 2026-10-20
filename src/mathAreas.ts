export interface MathExample {
  index: string;
  title: string;
  technique: string;
  lines: string[];
}

export interface MathArea {
  id: string;
  index: string;
  title: string;
  description: string;
  examples: MathExample[];
}

export const mathAreas: MathArea[] = [
  {
    id: 'geometria',
    index: 'I',
    title: 'Geometría',
    description:
      'El verso se pliega en figuras: triángulos, círculos, fractales. La página es el plano donde el poema adquiere forma.',
    examples: [
      {
        index: '01',
        title: 'Triángulo de Pascal',
        technique: 'Sílabas por verso: 1, 1, 2, 1',
        lines: ['sal', 'luz', 'doble voz', 'sol'],
      },
      {
        index: '02',
        title: 'Círculo vicioso',
        technique: 'Poema circular — el último verso enlaza con el primero',
        lines: [
          'el río nace en la montaña',
          'la montaña recibe la lluvia',
          'la lluvia cae al río',
          'el río nace en la montaña',
        ],
      },
      {
        index: '03',
        title: 'Copo de Koch',
        technique: 'Fractal — cada iteración triplica los bordes',
        lines: [
          'un copo',
          'un copo un copo un copo',
          'un copo un copo un copo un copo un copo un copo un copo un copo un copo',
        ],
      },
    ],
  },
  {
    id: 'nudos',
    index: 'II',
    title: 'Nudos',
    description:
      'Poemas inspirados en la teoría de nudos: cuerdas que se cruzan, lazadas que se entrelazan, versos que no se pueden desatar sin cortar.',
    examples: [
      {
        index: '01',
        title: 'Trébol',
        technique: 'Nudo trébol — tres cruces, la lazada más simple que no se deshace',
        lines: [
          'cuerda que se cruza',
          'cuerda que se cruza',
          'cuerda que se cruza',
          'tres veces y vuelve',
          'al mismo punto',
        ],
      },
      {
        index: '02',
        title: 'Ocho',
        technique: 'Nudo de figura ocho — una cuerda, dos cruces, vuelve al inicio',
        lines: [
          'sube y baja',
          'se cruza una vez',
          'se cruza otra vez',
          'y vuelve al inicio',
          'sin haberse ido',
        ],
      },
      {
        index: '03',
        title: 'Desnudo',
        technique: 'El nudo que se desata — poema reversible, cada verbo tiene su inverso',
        lines: ['atar     desatar', 'nudar    desnudar', 'lazo     deslazo'],
      },
    ],
  },
  {
    id: 'grafos',
    index: 'III',
    title: 'Grafos',
    description:
      'Cada palabra es un vértice, cada salto de sentido es una arista. Los poemas se recorren como caminos sobre un grafo.',
    examples: [
      {
        index: '01',
        title: 'Árbol',
        technique: 'Grafo árbol — cada palabra se ramifica en dos',
        lines: [
          '              raíz',
          '        tronco        tronco',
          '    rama    rama    rama    rama',
          'hoja hoja hoja hoja hoja hoja hoja hoja',
        ],
      },
      {
        index: '02',
        title: 'Königsberg',
        technique: 'Los siete puentes — un camino que cruza cada arista una sola vez',
        lines: [
          'siete puentes sobre dos orillas',
          'ningún camino los cruza todos',
          'sin repetir ni uno',
        ],
      },
      {
        index: '03',
        title: 'Bipartito',
        technique: 'Grafo bipartito — dos conjuntos que solo se tocan entre sí',
        lines: [
          'tierra       agua',
          'tierra       agua',
          'tierra       agua',
          'solo se encuentran en la orilla',
        ],
      },
    ],
  },
  {
    id: 'numeros',
    index: 'IV',
    title: 'Teoría de números',
    description:
      'Los enteros gobiernan el ritmo: sílabas primas, sucesiones de Fibonacci, números de Mersenne. El poema obedece a la aritmética.',
    examples: [
      {
        index: '01',
        title: 'Primo',
        technique: 'Cada palabra tiene un número primo de letras: 2, 3, 5, 7, 11',
        lines: ['el sol nogal amanecer imposibilitado'],
      },
      {
        index: '02',
        title: 'Fibonacci',
        technique: 'Sílabas por verso: 1, 2, 3, 5, 8',
        lines: ['sol', 'luna', 'naranja', 'manzana madura', 'círculo de agua que cae y cae'],
      },
      {
        index: '03',
        title: 'Mersenne',
        technique: 'Sílabas por verso: 2ⁿ − 1 → 1, 3, 7, 15',
        lines: ['uno', 'tres manos', 'siete pájaros sobre el alambre', 'quince gotas de lluvia resbalan por el cristal'],
      },
    ],
  },
  {
    id: 'probabilidad',
    index: 'V',
    title: 'Probabilidad y estadística',
    description:
      'El azar como coautor: dados, cadenas de Markov, paseos aleatorios. El poema es uno entre todos los posibles.',
    examples: [
      {
        index: '01',
        title: 'Dado',
        technique: 'Cada palabra elegida lanzando un dado sobre una página abierta al azar',
        lines: ['casa    río    pájaro', 'noche    luz    calle'],
      },
      {
        index: '02',
        title: 'Cadena de Markov',
        technique: 'Cada palabra depende solo de la anterior — memoria de un solo paso',
        lines: [
          'el gato duerme',
          'duerme tranquilo',
          'tranquilo bajo la luna',
          'luna que mira al gato',
        ],
      },
      {
        index: '03',
        title: 'Camino del borracho',
        technique: 'Paseo aleatorio por el diccionario — cada paso es independiente',
        lines: ['paso a paso a paso', 'a paso a paso a paso a', 'a paso a paso a paso'],
      },
    ],
  },
  {
    id: 'cuerdas',
    index: 'VI',
    title: 'Teoría de cuerdas',
    description:
      'La palabra como cuerda que vibra: cada frecuencia genera un sentido distinto, cada dimensión oculta un anagrama.',
    examples: [
      {
        index: '01',
        title: 'Vibración',
        technique: 'La misma cuerda vibra en frecuencias distintas — las mismas notas en órdenes diferentes',
        lines: ['do  re  mi  fa  sol', 'mi  do  sol  re  fa', 'sol  mi  do  fa  re'],
      },
      {
        index: '02',
        title: 'Dimensión oculta',
        technique: 'Anagramas — la misma materia en dimensiones distintas del sentido',
        lines: ['amor    roma    ramo', 'roma    ramo    amor', 'ramo    amor    roma'],
      },
      {
        index: '03',
        title: 'Brana',
        technique: 'Superficie bidimensional de texto — el poema como membrana',
        lines: [
          'l  l  l  l  l  l',
          'l  a  a  a  a  l',
          'l  a     ·     a  l',
          'l  a  a  a  a  l',
          'l  l  l  l  l  l',
        ],
      },
    ],
  },
];
