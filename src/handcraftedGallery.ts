export interface HandcraftedGalleryCard {
  id: string;
  index: string;
  title: string;
  titleEn?: string;
  technique: string;
  techniqueEn?: string;
  /** Each entry is shown as an editable line in the card and the lightbox. */
  descriptions: string[];
  descriptionsEn?: string[];
  images: string[];
}

/**
 * Handcrafted gallery content. Add image files under public/images/artesanal/
 * and list their public paths in `images` (for example, '/images/artesanal/interseccion-1.jpg').
 * The first image is used on the card; every path in the same array appears in
 * the lightbox carousel. Keep paths empty until you have added the image files.
 */
export const handcraftedGallery: HandcraftedGalleryCard[] = [
  {
    id: 'artesanal-interseccion',
    index: 'O1',
    title: 'Intersección',
    titleEn: 'Intersection',
    technique: 'Intersección alfabética',
    techniqueEn: 'Alphabetic intersection',
    descriptions: [
      'El poema está escrito a pluma sobre un cuaderno y sobre un papel transparente de color rojo y blanco.',
    ],
    descriptionsEn: ['The poem is handwritten in a notebook and on red and white transparent paper.'],
    // Add one or more image paths here. They appear on the card and in the lightbox.
    images: [
  '/Algorithmic_Poetry/images/artesanal/interseccion.jpeg',
  '/Algorithmic_Poetry/images/artesanal/interseccion_cuaderno.jpeg',
],
  },
  {
    id: 'artesanal-zurvan',
    index: 'O2',
    title: 'Zurvan',
    titleEn: 'Zurvan',
    technique: 'Tarkib-band',
    techniqueEn: 'Tarkib-band',
    descriptions: ['Poema escrito sobre una tablet usando colores verde y azul.'],
    descriptionsEn: ['Poem written on a tablet using green and blue colors.'],
    // Add image paths here; all paths in this array are included in the lightbox.
    images: ['/Algorithmic_Poetry/images/artesanal/zurvan_1.png',
  '/Algorithmic_Poetry/images/artesanal/zurvan_2.png',
  '/Algorithmic_Poetry/images/artesanal/zurvan_3.png'],
  },
  {
    id: 'artesanal-cono',
    index: 'O3',
    title: 'Cono',
    titleEn: 'Cone',
    technique: 'Geometría',
    techniqueEn: 'Geometry',
    descriptions: ['El poema está escrito a mano sobre un cono de filtro de café y sobre un cuaderno.'],
    descriptionsEn: ['The poem is handwritten on a coffee filter cone and in a notebook.'],
    // Add image paths here; all paths in this array are included in the lightbox.
    images: ['/Algorithmic_Poetry/images/artesanal/cono.jpeg',
  '/Algorithmic_Poetry/images/artesanal/cono_cuaderno.jpeg'],
  },
  {
    id: 'artesanal-espiral',
    index: 'O4',
    title: 'Espiral',
    titleEn: 'Spiral',
    technique: 'Literatura ergódica',
    techniqueEn: 'Ergodic literature',
    descriptions: ['Composición de fotografías y texto digital. Textos escritos sobre una tablet'],
    descriptionsEn: ['A composition of photographs and digital text. The texts were written on a tablet.'],
    // Add image paths here; all paths in this array are included in the lightbox.
    images: ['/Algorithmic_Poetry/images/artesanal/espiral_1_2.jpeg',
  '/Algorithmic_Poetry/images/artesanal/espiral_1.png',
  '/Algorithmic_Poetry/images/artesanal/espiral_2_2.jpeg',
  '/Algorithmic_Poetry/images/artesanal/espiral_2.png'],
  },
  // Three editable blank templates. Change each title and descriptions, then add image paths.
  {
    id: 'artesanal-reflexion', index: 'O5', title: 'Reflexión', titleEn: 'Reflection', technique: 'Poema palíndromo', techniqueEn: 'Palindrome poem',
    descriptions: ['Texto que salió del ejercicio de mirar la imagen "Lo que realmente significó después de un tiempo en el olvido" del libro "La topografía de las lágrimas" de Rose-Lynn Fisher. Texto escrito sobre una tablet.',
                  'El libro y sus respectivas imágenes se pueden encontrar en [Link](https://rose-lynnfisher.com/tears.html).'],
    descriptionsEn: ['Resulting text from the exercise of looking at the image “What it meant long after a time forgotten” from Rose-Lynn Fisher’s book The Topography of Tears. Text written on a tablet.',
      'The book and its images can be found at [Link](https://rose-lynnfisher.com/tears.html).'],
    // Add image paths here; all paths in this array are included in the lightbox.
    images: ['/Algorithmic_Poetry/images/artesanal/reflexion_2.png',
  '/Algorithmic_Poetry/images/artesanal/reflexion.png'],
  },
  {
    id: 'artesanal-koch', index: 'O6', title: 'Copo de nieve de Koch', titleEn: 'Koch snowflake', technique: 'Curva Fractal', techniqueEn: 'Fractal curve',
    descriptions: ['Poema —y sus iteraciones— escritas sobre una tablet.'],
    descriptionsEn: ['Poem—and its iterations—written on a tablet.'],
    // Add image paths here; all paths in this array are included in the lightbox.
    images: ['/Algorithmic_Poetry/images/artesanal/koch_1.png',
  '/Algorithmic_Poetry/images/artesanal/koch_2.png'],
  },
  {
    id: 'artesanal-circulo', index: 'O7', title: 'Círculo uroboros', titleEn: 'Ouroboros circle', technique: 'Poema circular', techniqueEn: 'Circular poem',
    descriptions: ['Texto que salió del ejercicio de mirar la imagen "Lágrimas de cambio" del libro "La topografía de las lágrimas" de Rose-Lynn Fisher. Escrito sobre una tablet.',
                  'El libro y sus respectivas imágenes se pueden encontrar en [Link](https://rose-lynnfisher.com/tears.html).'],
    descriptionsEn: ['Text inspired by looking at the image “Tears of Change” from Rose-Lynn Fisher’s book The Topography of Tears. Written on a tablet.',
      'The book and its images can be found at [Link](https://rose-lynnfisher.com/tears.html).'],
    // Add image paths here; all paths in this array are included in the lightbox.
    images: ['/Algorithmic_Poetry/images/artesanal/circulo_2.png',
  '/Algorithmic_Poetry/images/artesanal/circulo.png'],
  },
  {
    id: 'artesanal-koch', index: 'O8', title: 'Nudo forma de ocho', titleEn: 'Figure-eight knot', technique: 'Cruces', techniqueEn: 'Crossings',
    descriptions: ['Plantilla del nudo figura-ocho. Nudo reducido a una curva dibujada en un editor de fotos. Poema escrito sobre una tablet.', 
      'Plantilla de la 1ra imagen tomada de [Link](https://en.wikipedia.org/wiki/Figure-eight_knot_(mathematics).'],
    descriptionsEn: ['Figure-eight knot template. The knot is reduced to a curve drawn in a photo editor. Poem written on a tablet.',
      'The template for the first image was taken from [Link](https://en.wikipedia.org/wiki/Figure-eight_knot_(mathematics).'],
    // Add image paths here; all paths in this array are included in the lightbox.
    images: ['/Algorithmic_Poetry/images/artesanal/ocho_3.webp',
  '/Algorithmic_Poetry/images/artesanal/ocho_2.png',
  '/Algorithmic_Poetry/images/artesanal/ocho.png']
  },
{
    id: 'artesanal-trebol', index: 'O9', title: 'Nudo de trébol', titleEn: 'Trefoil knot', technique: 'Trefoil', techniqueEn: 'Trefoil',
    descriptions: ['Plantilla para nudo de trebol de un pin. Poema escrito sobre una tablet. '],
    descriptionsEn: ['Template for a trefoil knot based on a pin. Poem written on a tablet.'],
    // Add image paths here; all paths in this array are included in the lightbox.
    images: ['/Algorithmic_Poetry/images/artesanal/trebol_2.jpeg',
      '/Algorithmic_Poetry/images/artesanal/trebol.png']
  },
{
    id: 'artesanal-53', index: '1O', title: 'Número primo 53', titleEn: 'Prime number 53', technique: 'Press 53 editors', techniqueEn: 'Press 53 editors',
    descriptions: ['Poema escrito sobre una tablet. '],
    descriptionsEn: ['Poem written on a tablet.'],
    // Add image paths here; all paths in this array are included in the lightbox.
    images: ['/Algorithmic_Poetry/images/artesanal/53.png']
  },
  {
    id: 'artesanal-fibonacci', index: '11', title: 'Secuencia de Fibonacci', titleEn: 'Fibonacci sequence', technique: 'Técnica de Gregory K. Pincus', techniqueEn: 'Gregory K. Pincus technique',
    descriptions: ['Espiral de Fibonacci en la naturaleza. Poema escrito sobre una tablet. ',
                   'Primeras dos imágenes tomadas de [Link](https://infinitesums.simonsfoundation.org/resources/fibonacci-day-community-activity-pack-english/)'],
    descriptionsEn: ['The Fibonacci spiral in nature. Poem written on a tablet.',
      'The first two images are from [Link](https://infinitesums.simonsfoundation.org/resources/fibonacci-day-community-activity-pack-english/)'],
    // Add image paths here; all paths in this array are included in the lightbox.
    images: ['/Algorithmic_Poetry/images/artesanal/fibonacci_2.png',
            '/Algorithmic_Poetry/images/artesanal/fibonacci_3.png',
            '/Algorithmic_Poetry/images/artesanal/fibonacci.png']
  },
{
    id: 'artesanal-piema', index: '11', title: 'El pi-ema', titleEn: 'The Pi-em', technique: 'Técnica de Mike Keith', techniqueEn: 'Mike Keith technique',
    descriptions: ['Poema escrito sobre una tablet. '],
    descriptionsEn: ['Poem written on a tablet.'],
    // Add image paths here; all paths in this array are included in the lightbox.
    images: ['/Algorithmic_Poetry/images/artesanal/piema.png']
  },
  
];
