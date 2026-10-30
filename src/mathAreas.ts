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
        title: 'Reflexión',
        technique: 'Poema palíndromo',
        manifest: 'Las palabras se refleja con respecto a un eje en el plano. El poema original se lee en un sentido y                     el reflejado se lee al revés.',
        shape: 'reflexion',
},
      {
        index: '02',
        title: 'Círculo uroboros',
        technique: 'Poema circular — Loop',
        manifest: 'Poema de pensamientos rumiantes que se repiten en un ciclo eterno.',
        shape: 'circulo-vicioso',
      },
      {
        index: '03',
        title: 'Copo de nieve de Koch',
        technique: 'Curva fractal ',
        manifest: 'En la 1ra iteración elige 4 palabras y escríbelas sobre las líneas. Para la 2da iteración divide cada segmento en 4 de la forma original. Crea un verso nuevo de 4 palabras, preservando la 1ra palabra de la 1ra iteración, y así sucesivamente. ',
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
      'Cada concepto es un vértice, cada verso es una arista. Los poemas se recorren como caminos sobre un grafo.           Esta sección sigue en construcción.',
    examples: [
      {
        index: '01',
        title: 'Árbol',
        technique: 'Grafo árbol — acíclico, todas las hojas es un poema',
        manifest: 'PRÓXIMAMENTE.',
        shape: 'grafo-arbol',
      },
      {
        index: '02',
        title: 'Los puentes de Königsberg',
        technique: 'Acertijo matemático',
        manifest: 'Euler demostró que no existe camino que cruce cada arista exactamente una vez. PRÓXIMAMENTE',
        shape: 'konigsberg',
      },
      {
        index: '03',
        title: 'Bipartito',
        technique: 'Funciones',
        manifest: 'PRÓXIMAMENTE.',
        shape: 'bipartito',
      },
    ],
  },
  {
    id: 'numeros',
    index: 'IV',
    title: 'Teoría de números',
    description:
      'Los números y sus propiedades aritméticas determinan la longitud y/o el ritmo del poema. De números primos, sucesiones de               Fibonacci, un π-ema.',
    examples: [
      {
        index: '01',
        title: 'El número primo 53',
        technique: 'Press 53 Editors',
        manifest: 'Un poema de 4 estrofas, 53 sílabas, divididas en 11 líneas. El número en cada línea denota el número de sílabas que                 debes usar, nótese que son números primos.',
        shape: 'primo',
      },
      {
        index: '02',
        title: 'Secuencia de Fibonacci',
        technique: 'Técnica de Gregory K. Pincus',
        manifest: 'Cada número de la secuencia de Fibonacci determina el número de sílabas del verso. Puedes continuar con más dígitos de         la secuencia.',
        shape: 'fibonacci',
      },
      {
        index: '03',
        title: 'El Pi-ema',
        technique: 'Técnica de Mike Keith',
        manifest: 'El número de palabras en cada verso sigue los dígitos de π. Puedes continuar tu poema usando los siguientes dígitos de π hasta donde tu quieras.',
        shape: 'piema',
      },
    ],
  },
  {
    id: 'probabilidad',
    index: 'V',
    title: 'Probabilidad y combinatoria',
    description:
      'Métodos para jugar con el azar, las palabras, la combinatoria y los versos. Tira los dados para determinar el tema de tus versos. Poema predictivo. Coeficientes binomiales determinan  el número de las sílabas. ',
    examples: [
      {
        index: '01',
        title: 'Dados',
        technique: '6 versos generados a partir del azar de los dados.',
        manifest: 'Asigna verbos aleatorios a cada número impar y asigna sustantivos aleatorios a los números pares. Tira los                 dados, observa los números y escribe un verso por cada dado que incluya la palabra asignada al número.',
        shape: 'dado',
      },
      {
        index: '02',
        title: 'Cadena de Markov',
        technique: 'El poema más probable.',
        manifest: 'Escoge tu buscador web favorito, comienza con una palabra e.g. "borrar", comienza un                 verso con ella, el siguiente verso debe comenzar con la palabra sugerida de tu buscador, e.g.                "tu", y así sucesivamente. La probabilidad de que aparezca la siguiente palabra depende solo de              la palabra actual.',
        shape: 'markov',
      },
      {
        index: '01',
        title: 'Triángulo de Pascal',
        technique: 'Sílabas de coeficientes binomiales.',
        manifest: 'Cada fila del triángulo propone una nueva medida para el poema. Cada fila representa un verso, cada número denota el                     número de sílabas totales en tu verso. Puedes extender el triángulo de Pascal tanto como quieras.',
        shape: 'pascal-triangle',
      },
    ],
  },
];