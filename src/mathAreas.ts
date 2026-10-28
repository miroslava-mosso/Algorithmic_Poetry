export type MathShapeId =
  // Geometría
  | 'pascal-triangle'
  | 'circulo-vicioso'
  | 'koch-snowflake'
  // Nudos
  | 'hopf-link'
  | 'figure-eight-knot'
  | 'trefoil-knot'
  // Grafos
  | 'grafo-arbol'
  | 'konigsberg'
  | 'bipartito'
  // Números
  | 'primo'
  | 'fibonacci'
  | 'mersenne'
  // Probabilidad
  | 'dado'
  | 'markov'
  | 'borracho';


export interface MathExample {
  index: string;
  title: string;
  technique: string;
  manifest: string;
  shape: MathShapeId;
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
      'Los versos obedecen la geometría asignada y al mismo tiempo la geometría define al poema.',
    examples: [
      {
        index: '01',
        title: 'Triángulo de Pascal',
        technique: 'Cada número representa el número de sílabas de cada palabra',
        manifest: 'Cada fila del triángulo propone una nueva medida para el poema. Puedes extender el triángulo de Pascal                   tanto como quieras.',
        shape: 'pascal-triangle',
},
      {
        index: '02',
        title: 'Círculo uroboros',
        technique: 'Poema circular — Palíndromo',
        manifest: 'Se lee igual en un sentido que al revés.',
        shape: 'circulo-vicioso',
      },
      {
        index: '03',
        title: 'Copo de nieve de Koch',
        technique: 'Curva fractal ',
        manifest: 'Cada arista se reemplaza por un triángulo equilátero.',
        shape: 'koch-snowflake',
      },
    ],
  },
  {
    id: 'nudos',
    index: 'II',
    title: 'Nudos',
    description:
      'Caligramas inspirados en la teoría de nudos, versos entrelazados que no se pueden desenredar sin cortar.',
    examples: [
      {
        index: '01',
        title: 'Hopf link',
        technique: '2 círculos enlazados entre sí una vez.',
        manifest: 'El link no-trivial más simple con más de una componente. Texto del poema inspirado en los landays.',
        shape: 'hopf-link',
      },
      {
        index: '02',
        title: 'Nudo Figure-eight',
        technique: '4 cruces',
        manifest: 'Nudo no-trivial cuya notación de Alexander–Briggs es 4₁',
        shape: 'figure-eight-knot',
      },
      {
        index: '03',
        title: 'Nudo de trébol',
        technique: 'Trefoil-knot ó Pretzel',
        manifest: 'Es el nudo no-trivial más simple, cuya notación de Alexander–Briggs 3₁',
        shape: 'trefoil-knot',
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
        technique: 'Grafo árbol — acíclico, sin raíz fija, toda hoja es un poema',
        manifest: 'Puedes hacer el triángulo de Pascan tan grande como desees.',
        shape: 'grafo-arbol',
      },
      {
        index: '02',
        title: 'Los puentes de Königsberg',
        technique: 'Acertijo matemático',
        manifest: 'Euler demostró que no existe camino que cruce cada arista exactamente una vez.',
        shape: 'konigsberg',
      },
      {
        index: '03',
        title: 'Bipartito',
        technique: 'Funciones',
        manifest: 'Dos conjuntos que solo se conectan entre sí — nunca consigo mismo.',
        shape: 'bipartito',
      },
    ],
  },
  {
    id: 'numeros',
    index: 'IV',
    title: 'Teoría de números',
    description:
      'Los números y sus propiedades aritméticas determinan la longitud y/o el ritmo del poema. De números primos, sucesiones de         Fibonacci, un π-ema.',
    examples: [
      {
        index: '01',
        title: 'El número primo 53',
        technique: 'Números primos',
        manifest: 'Un poema de 53 sílabas, divididas en 11 líneas.',
        shape: 'primo',
      },
      {
        index: '02',
        title: 'Secuencia de Fibonacci',
        technique: 'Espiral logarítmica',
        manifest: '20 sílabas y 6 líneas. Cada número de la secuencia de Fibonacci determina el número de sílabas que debe de                        tener el verso. Puedes continuar con más dígitos de la secuencia.',
        shape: 'fibonacci',
      },
      {
        index: '03',
        title: 'Mersenne',
        technique: 'Sucesiones',
        manifest: 'Palabras por verso: 2ⁿ − 1 → 1, 3, 7, 15.',
        shape: 'mersenne',
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
        technique: 'Seis caras, seis versos',
        manifest: 'Distribución uniforme sobre el lenguaje.',
        shape: 'dado',
      },
      {
        index: '02',
        title: 'Cadena de Markov',
        technique: 'Memoria de un solo paso',
        manifest: 'Cada palabra depende solo de la anterior.',
        shape: 'markov',
      },
      {
        index: '03',
        title: 'Camino del borracho',
        technique: 'Paseo aleatorio',
        manifest: 'Cada paso es independiente del anterior.',
        shape: 'borracho',
      },
    ],
  },
];