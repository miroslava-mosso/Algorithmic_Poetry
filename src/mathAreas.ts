export type MathShapeId =
  // Geometría
  | 'pascal-triangle'
  | 'circulo-vicioso'
  | 'koch-snowflake'
  // Nudos
  | 'overhand-knot'
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
  | 'borracho'
  // Cuerdas
  | 'vibracion'
  | 'dimension-oculta'
  | 'brana';

export interface MathExample {
  index: string;
  title: string;
  technique: string;
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
      'Los versos se despliegan en figuras: triángulos, círculos, fractales.',
    examples: [
      {
        index: '01',
        title: 'Triángulo de Pascal',
        technique: 'Cada fila suma la anterior — el número es la palabra',
        shape: 'pascal-triangle',
      },
      {
        index: '02',
        title: 'Círculo uroboros',
        technique: 'Poema circular — el último verso enlaza con el primero',
        shape: 'circulo-vicioso',
      },
      {
        index: '03',
        title: 'Copo de nieve de Koch',
        technique: 'Curva fractal — cada arista se reemplaza por un triángulo equilátero',
        shape: 'koch-snowflake',
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
        title: 'Overhand knot',
        technique: 'El nudo más simple — una lazada, un cruce, imposible de desatar',
        shape: 'overhand-knot',
      },
      {
        index: '02',
        title: 'Nudo de figura ocho',
        technique: 'Dos cruces alternados — el nudo de escalada más seguro',
        shape: 'figure-eight-knot',
      },
      {
        index: '03',
        title: 'Nudo trébol',
        technique: 'Tres cruces alternados — el nudo no trivial más pequeño',
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
        shape: 'grafo-arbol',
      },
      {
        index: '02',
        title: 'Los puentes de Königsberg',
        technique: 'Euler demostró que no existe camino que cruce cada arista exactamente una vez',
        shape: 'konigsberg',
      },
      {
        index: '03',
        title: 'Bipartito',
        technique: 'Dos conjuntos que solo se conectan entre sí — nunca consigo mismo',
        shape: 'bipartito',
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
        technique: 'Solo palabras cuyo número de letras es primo: 2, 3, 5, 7, 11',
        shape: 'primo',
      },
      {
        index: '02',
        title: 'Fibonacci',
        technique: 'Sílabas por verso: 1, 1, 2, 3, 5, 8, 13 — espiral logarítmica',
        shape: 'fibonacci',
      },
      {
        index: '03',
        title: 'Mersenne',
        technique: 'Palabras por verso: 2ⁿ − 1 → 1, 3, 7, 15',
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
        technique: 'Seis caras, seis versos — distribución uniforme sobre el lenguaje',
        shape: 'dado',
      },
      {
        index: '02',
        title: 'Cadena de Markov',
        technique: 'Cada palabra depende solo de la anterior — memoria de un solo paso',
        shape: 'markov',
      },
      {
        index: '03',
        title: 'Camino del borracho',
        technique: 'Paseo aleatorio — cada paso es independiente del anterior',
        shape: 'borracho',
      },
    ],
  },
];
