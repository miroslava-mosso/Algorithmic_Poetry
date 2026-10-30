import type { Lang } from '@/i18n';

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
  | 'borracho'
  // Otros
  | 'reflexion'
  | 'piema';

export interface MathExampleBase {
  index: string;
  shape: MathShapeId;
}

export interface MathExampleLocalized {
  title: string;
  technique: string;
  manifest: string;
}

export type MathExample = MathExampleBase & MathExampleLocalized;

export type BilingualMathExample = MathExampleBase & {
  es: MathExampleLocalized;
  en: MathExampleLocalized;
};

export interface MathArea {
  id: string;
  index: string;
  title: string;
  description: string;
  examples: MathExample[];
}

export interface BilingualMathArea {
  id: string;
  index: string;
  es: {
    title: string;
    description: string;
    examples: BilingualMathExample[];
  };
  en: {
    title: string;
    description: string;
    examples: BilingualMathExample[];
  };
}

export const mathAreasBilingual: BilingualMathArea[] = [
  {
    id: 'geometria',
    index: 'I',
    es: {
      title: 'Geometría',
      description:
        'Los versos obedecen la geometría asignada y al mismo tiempo la geometría define al poema.',
      examples: [
        {
          index: '01',
          shape: 'reflexion',
          es: {
            title: 'Reflexión',
            technique: 'Poema palíndromo',
            manifest:
              'Las palabras se refleja con respecto a un eje en el plano. El poema original se lee en un sentido y el reflejado se lee al revés.',
          },
          en: {
            title: 'Reflection',
            technique: 'Palindrome poem',
            manifest:
              'Words are reflected across an axis in the plane. The original poem is read in one direction and the reflected one is read backwards.',
          },
        },
        {
          index: '02',
          shape: 'circulo-vicioso',
          es: {
            title: 'Círculo uroboros',
            technique: 'Poema circular — Loop',
            manifest: 'Poema de pensamientos rumiantes que se repiten en un ciclo eterno.',
          },
          en: {
            title: 'Ouroboros circle',
            technique: 'Circular poem — Loop',
            manifest: 'A poem of ruminating thoughts that repeat in an eternal cycle.',
          },
        },
        {
          index: '03',
          shape: 'koch-snowflake',
          es: {
            title: 'Copo de nieve de Koch',
            technique: 'Curva fractal',
            manifest:
              'En la 1ra iteración elige 4 palabras y escríbelas sobre las líneas. Para la 2da iteración divide cada segmento en 4 de la forma original. Crea un verso nuevo de 4 palabras, preservando la 1ra palabra de la 1ra iteración, y así sucesivamente.',
          },
          en: {
            title: 'Koch snowflake',
            technique: 'Fractal curve',
            manifest:
              'In the 1st iteration choose 4 words and write them on the lines. For the 2nd iteration divide each segment into 4 of the original shape. Create a new verse of 4 words, preserving the 1st word of the 1st iteration, and so on.',
          },
        },
      ],
    },
    en: {
      title: 'Geometry',
      description:
        'The verses obey the assigned geometry and at the same time the geometry defines the poem.',
      examples: [
        {
          index: '01',
          shape: 'reflexion',
          es: {
            title: 'Reflexión',
            technique: 'Poema palíndromo',
            manifest:
              'Las palabras se refleja con respecto a un eje en el plano. El poema original se lee en un sentido y el reflejado se lee al revés.',
          },
          en: {
            title: 'Reflection',
            technique: 'Palindrome poem',
            manifest:
              'Words are reflected across an axis in the plane. The original poem is read in one direction and the reflected one is read backwards.',
          },
        },
        {
          index: '02',
          shape: 'circulo-vicioso',
          es: {
            title: 'Círculo uroboros',
            technique: 'Poema circular — Loop',
            manifest: 'Poema de pensamientos rumiantes que se repiten en un ciclo eterno.',
          },
          en: {
            title: 'Ouroboros circle',
            technique: 'Circular poem — Loop',
            manifest: 'A poem of ruminating thoughts that repeat in an eternal cycle.',
          },
        },
        {
          index: '03',
          shape: 'koch-snowflake',
          es: {
            title: 'Copo de nieve de Koch',
            technique: 'Curva fractal',
            manifest:
              'En la 1ra iteración elige 4 palabras y escríbelas sobre las líneas. Para la 2da iteración divide cada segmento en 4 de la forma original. Crea un verso nuevo de 4 palabras, preservando la 1ra palabra de la 1ra iteración, y así sucesivamente.',
          },
          en: {
            title: 'Koch snowflake',
            technique: 'Fractal curve',
            manifest:
              'In the 1st iteration choose 4 words and write them on the lines. For the 2nd iteration divide each segment into 4 of the original shape. Create a new verse of 4 words, preserving the 1st word of the 1st iteration, and so on.',
          },
        },
      ],
    },
  },
  {
    id: 'nudos',
    index: 'II',
    es: {
      title: 'Nudos',
      description:
        'Caligramas inspirados en la teoría de nudos, versos entrelazados que no se pueden desenredar sin cortar.',
      examples: [
        {
          index: '01',
          shape: 'hopf-link',
          es: {
            title: 'Hopf link',
            technique: '2 círculos enlazados entre sí una vez.',
            manifest:
              'El link no-trivial más simple con más de una componente. Texto del poema inspirado en los landays.',
          },
          en: {
            title: 'Hopf link',
            technique: '2 circles linked together once.',
            manifest:
              'The simplest non-trivial link with more than one component. Poem text inspired by landays.',
          },
        },
        {
          index: '02',
          shape: 'figure-eight-knot',
          es: {
            title: 'Nudo Figure-eight',
            technique: '4 cruces',
            manifest: 'Nudo no-trivial cuya notación de Alexander–Briggs es 4₁',
          },
          en: {
            title: 'Figure-eight knot',
            technique: '4 crossings',
            manifest: 'Non-trivial knot whose Alexander–Briggs notation is 4₁',
          },
        },
        {
          index: '03',
          shape: 'trefoil-knot',
          es: {
            title: 'Nudo de trébol',
            technique: 'Trefoil-knot ó Pretzel',
            manifest: 'Es el nudo no-trivial más simple, cuya notación de Alexander–Briggs 3₁',
          },
          en: {
            title: 'Trefoil knot',
            technique: 'Trefoil knot or Pretzel',
            manifest:
              'It is the simplest non-trivial knot, whose Alexander–Briggs notation is 3₁',
          },
        },
      ],
    },
    en: {
      title: 'Knots',
      description:
        'Calligrams inspired by knot theory, intertwined verses that cannot be untangled without cutting.',
      examples: [
        {
          index: '01',
          shape: 'hopf-link',
          es: {
            title: 'Hopf link',
            technique: '2 círculos enlazados entre sí una vez.',
            manifest:
              'El link no-trivial más simple con más de una componente. Texto del poema inspirado en los landays.',
          },
          en: {
            title: 'Hopf link',
            technique: '2 circles linked together once.',
            manifest:
              'The simplest non-trivial link with more than one component. Poem text inspired by landays.',
          },
        },
        {
          index: '02',
          shape: 'figure-eight-knot',
          es: {
            title: 'Nudo Figure-eight',
            technique: '4 cruces',
            manifest: 'Nudo no-trivial cuya notación de Alexander–Briggs es 4₁',
          },
          en: {
            title: 'Figure-eight knot',
            technique: '4 crossings',
            manifest: 'Non-trivial knot whose Alexander–Briggs notation is 4₁',
          },
        },
        {
          index: '03',
          shape: 'trefoil-knot',
          es: {
            title: 'Nudo de trébol',
            technique: 'Trefoil-knot ó Pretzel',
            manifest: 'Es el nudo no-trivial más simple, cuya notación de Alexander–Briggs 3₁',
          },
          en: {
            title: 'Trefoil knot',
            technique: 'Trefoil knot or Pretzel',
            manifest:
              'It is the simplest non-trivial knot, whose Alexander–Briggs notation is 3₁',
          },
        },
      ],
    },
  },
  {
    id: 'grafos',
    index: 'III',
    es: {
      title: 'Grafos',
      description:
        'Cada concepto es un vértice, cada verso es una arista. Los poemas se recorren como caminos sobre un grafo. Esta sección sigue en construcción.',
      examples: [
        {
          index: '01',
          shape: 'grafo-arbol',
          es: {
            title: 'Árbol',
            technique: 'Grafo árbol — acíclico, todas las hojas es un poema',
            manifest: 'PRÓXIMAMENTE.',
          },
          en: {
            title: 'Tree',
            technique: 'Tree graph — acyclic, all leaves are a poem',
            manifest: 'COMING SOON.',
          },
        },
        {
          index: '02',
          shape: 'konigsberg',
          es: {
            title: 'Los puentes de Königsberg',
            technique: 'Acertijo matemático',
            manifest:
              'Euler demostró que no existe camino que cruce cada arista exactamente una vez. PRÓXIMAMENTE',
          },
          en: {
            title: 'The bridges of Königsberg',
            technique: 'Mathematical puzzle',
            manifest:
              'Euler proved that no path exists that crosses each edge exactly once. COMING SOON',
          },
        },
        {
          index: '03',
          shape: 'bipartito',
          es: {
            title: 'Bipartito',
            technique: 'Funciones',
            manifest: 'PRÓXIMAMENTE.',
          },
          en: {
            title: 'Bipartite',
            technique: 'Functions',
            manifest: 'COMING SOON.',
          },
        },
      ],
    },
    en: {
      title: 'Graphs',
      description:
        'Each concept is a vertex, each verse is an edge. Poems are traversed like paths on a graph. This section is still under construction.',
      examples: [
        {
          index: '01',
          shape: 'grafo-arbol',
          es: {
            title: 'Árbol',
            technique: 'Grafo árbol — acíclico, todas las hojas es un poema',
            manifest: 'PRÓXIMAMENTE.',
          },
          en: {
            title: 'Tree',
            technique: 'Tree graph — acyclic, all leaves are a poem',
            manifest: 'COMING SOON.',
          },
        },
        {
          index: '02',
          shape: 'konigsberg',
          es: {
            title: 'Los puentes de Königsberg',
            technique: 'Acertijo matemático',
            manifest:
              'Euler demostró que no existe camino que cruce cada arista exactamente una vez. PRÓXIMAMENTE',
          },
          en: {
            title: 'The bridges of Königsberg',
            technique: 'Mathematical puzzle',
            manifest:
              'Euler proved that no path exists that crosses each edge exactly once. COMING SOON',
          },
        },
        {
          index: '03',
          shape: 'bipartito',
          es: {
            title: 'Bipartito',
            technique: 'Funciones',
            manifest: 'PRÓXIMAMENTE.',
          },
          en: {
            title: 'Bipartite',
            technique: 'Functions',
            manifest: 'COMING SOON.',
          },
        },
      ],
    },
  },
  {
    id: 'numeros',
    index: 'IV',
    es: {
      title: 'Teoría de números',
      description:
        'Los números y sus propiedades aritméticas determinan la longitud y/o el ritmo del poema. De números primos, sucesiones de Fibonacci, un π-ema.',
      examples: [
        {
          index: '01',
          shape: 'primo',
          es: {
            title: 'El número primo 53',
            technique: 'Press 53 Editors',
            manifest:
              'Un poema de 4 estrofas, 53 sílabas, divididas en 11 líneas. El número en cada línea denota el número de sílabas que debes usar, nótese que son números primos.',
          },
          en: {
            title: 'The prime number 53',
            technique: 'Press 53 Editors',
            manifest:
              'A poem of 4 stanzas, 53 syllables, divided into 11 lines. The number on each line denotes the number of syllables you must use; note that they are prime numbers.',
          },
        },
        {
          index: '02',
          shape: 'fibonacci',
          es: {
            title: 'Secuencia de Fibonacci',
            technique: 'Técnica de Gregory K. Pincus',
            manifest:
              'Cada número de la secuencia de Fibonacci determina el número de sílabas del verso. Puedes continuar con más dígitos de la secuencia.',
          },
          en: {
            title: 'Fibonacci sequence',
            technique: 'Gregory K. Pincus technique',
            manifest:
              'Each number in the Fibonacci sequence determines the number of syllables in the verse. You can continue with more digits of the sequence.',
          },
        },
        {
          index: '03',
          shape: 'piema',
          es: {
            title: 'El Pi-ema',
            technique: 'Técnica de Mike Keith',
            manifest:
              'El número de palabras en cada verso sigue los dígitos de π. Puedes continuar tu poema usando los siguientes dígitos de π hasta donde tu quieras.',
          },
          en: {
            title: 'The Pi-em',
            technique: 'Mike Keith technique',
            manifest:
              'The number of words in each verse follows the digits of π. You can continue your poem using the following digits of π for as long as you wish.',
          },
        },
      ],
    },
    en: {
      title: 'Number theory',
      description:
        'Numbers and their arithmetic properties determine the length and/or rhythm of the poem. Prime numbers, Fibonacci sequences, a π-em.',
      examples: [
        {
          index: '01',
          shape: 'primo',
          es: {
            title: 'El número primo 53',
            technique: 'Press 53 Editors',
            manifest:
              'Un poema de 4 estrofas, 53 sílabas, divididas en 11 líneas. El número en cada línea denota el número de sílabas que debes usar, nótese que son números primos.',
          },
          en: {
            title: 'The prime number 53',
            technique: 'Press 53 Editors',
            manifest:
              'A poem of 4 stanzas, 53 syllables, divided into 11 lines. The number on each line denotes the number of syllables you must use; note that they are prime numbers.',
          },
        },
        {
          index: '02',
          shape: 'fibonacci',
          es: {
            title: 'Secuencia de Fibonacci',
            technique: 'Técnica de Gregory K. Pincus',
            manifest:
              'Cada número de la secuencia de Fibonacci determina el número de sílabas del verso. Puedes continuar con más dígitos de la secuencia.',
          },
          en: {
            title: 'Fibonacci sequence',
            technique: 'Gregory K. Pincus technique',
            manifest:
              'Each number in the Fibonacci sequence determines the number of syllables in the verse. You can continue with more digits of the sequence.',
          },
        },
        {
          index: '03',
          shape: 'piema',
          es: {
            title: 'El Pi-ema',
            technique: 'Técnica de Mike Keith',
            manifest:
              'El número de palabras en cada verso sigue los dígitos de π. Puedes continuar tu poema usando los siguientes dígitos de π hasta donde tu quieras.',
          },
          en: {
            title: 'The Pi-em',
            technique: 'Mike Keith technique',
            manifest:
              'The number of words in each verse follows the digits of π. You can continue your poem using the following digits of π for as long as you wish.',
          },
        },
      ],
    },
  },
  {
    id: 'probabilidad',
    index: 'V',
    es: {
      title: 'Probabilidad y combinatoria',
      description:
        'Métodos para jugar con el azar, las palabras, la combinatoria y los versos. Tira los dados para determinar el tema de tus versos. Poema predictivo. Coeficientes binomiales determinan el número de las sílabas.',
      examples: [
        {
          index: '01',
          shape: 'dado',
          es: {
            title: 'Dados',
            technique: '6 versos generados a partir del azar de los dados.',
            manifest:
              'Asigna verbos aleatorios a cada número impar y asigna sustantivos aleatorios a los números pares. Tira los dados, observa los números y escribe un verso por cada dado que incluya la palabra asignada al número.',
          },
          en: {
            title: 'Dice',
            technique: '6 verses generated from the randomness of dice.',
            manifest:
              'Assign random verbs to each odd number and random nouns to even numbers. Roll the dice, observe the numbers and write a verse for each die that includes the word assigned to that number.',
          },
        },
        {
          index: '02',
          shape: 'markov',
          es: {
            title: 'Cadena de Markov',
            technique: 'El poema más probable.',
            manifest:
              'Escoge tu buscador web favorito, comienza con una palabra e.g. "borrar", comienza un verso con ella, el siguiente verso debe comenzar con la palabra sugerida de tu buscador, e.g. "tu", y así sucesivamente. La probabilidad de que aparezca la siguiente palabra depende solo de la palabra actual.',
          },
          en: {
            title: 'Markov chain',
            technique: 'The most likely poem.',
            manifest:
              'Choose your favorite search engine, start with a word e.g. "delete", begin a verse with it, the next verse must start with the suggested word from your search engine, e.g. "your", and so on. The probability of the next word appearing depends only on the current word.',
          },
        },
        {
          index: '01',
          shape: 'pascal-triangle',
          es: {
            title: 'Triángulo de Pascal',
            technique: 'Sílabas de coeficientes binomiales.',
            manifest:
              'Cada fila del triángulo propone una nueva medida para el poema. Cada fila representa un verso, cada número denota el número de sílabas totales en tu verso. Puedes extender el triángulo de Pascal tanto como quieras.',
          },
          en: {
            title: "Pascal's triangle",
            technique: 'Syllables from binomial coefficients.',
            manifest:
              "Each row of the triangle proposes a new measure for the poem. Each row represents a verse, each number denotes the total number of syllables in your verse. You can extend Pascal's triangle as much as you want.",
          },
        },
      ],
    },
    en: {
      title: 'Probability and combinatorics',
      description:
        'Methods for playing with chance, words, combinatorics, and verses. Roll the dice to determine the theme of your verses. Predictive poem. Binomial coefficients determine the number of syllables.',
      examples: [
        {
          index: '01',
          shape: 'dado',
          es: {
            title: 'Dados',
            technique: '6 versos generados a partir del azar de los dados.',
            manifest:
              'Asigna verbos aleatorios a cada número impar y asigna sustantivos aleatorios a los números pares. Tira los dados, observa los números y escribe un verso por cada dado que incluya la palabra asignada al número.',
          },
          en: {
            title: 'Dice',
            technique: '6 verses generated from the randomness of dice.',
            manifest:
              'Assign random verbs to each odd number and random nouns to even numbers. Roll the dice, observe the numbers and write a verse for each die that includes the word assigned to that number.',
          },
        },
        {
          index: '02',
          shape: 'markov',
          es: {
            title: 'Cadena de Markov',
            technique: 'El poema más probable.',
            manifest:
              'Escoge tu buscador web favorito, comienza con una palabra e.g. "borrar", comienza un verso con ella, el siguiente verso debe comenzar con la palabra sugerida de tu buscador, e.g. "tu", y así sucesivamente. La probabilidad de que aparezca la siguiente palabra depende solo de la palabra actual.',
          },
          en: {
            title: 'Markov chain',
            technique: 'The most likely poem.',
            manifest:
              'Choose your favorite search engine, start with a word e.g. "delete", begin a verse with it, the next verse must start with the suggested word from your search engine, e.g. "your", and so on. The probability of the next word appearing depends only on the current word.',
          },
        },
        {
          index: '01',
          shape: 'pascal-triangle',
          es: {
            title: 'Triángulo de Pascal',
            technique: 'Sílabas de coeficientes binomiales.',
            manifest:
              'Cada fila del triángulo propone una nueva medida para el poema. Cada fila representa un verso, cada número denota el número de sílabas totales en tu verso. Puedes extender el triángulo de Pascal tanto como quieras.',
          },
          en: {
            title: "Pascal's triangle",
            technique: 'Syllables from binomial coefficients.',
            manifest:
              "Each row of the triangle proposes a new measure for the poem. Each row represents a verse, each number denotes the total number of syllables in your verse. You can extend Pascal's triangle as much as you want.",
          },
        },
      ],
    },
  },
];

export function getMathAreas(lang: Lang): MathArea[] {
  return mathAreasBilingual.map((a) => ({
    id: a.id,
    index: a.index,
    title: a[lang].title,
    description: a[lang].description,
    examples: a[lang].examples.map((ex) => ({
      index: ex.index,
      shape: ex.shape,
      ...ex[lang],
    })),
  }));
}

export const mathAreas: MathArea[] = getMathAreas('es');
