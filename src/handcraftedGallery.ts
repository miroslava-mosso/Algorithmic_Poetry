export interface HandcraftedGalleryCard {
  id: string;
  index: string;
  title: string;
  technique: string;
  /** Each entry is shown as an editable line in the card and the lightbox. */
  descriptions: string[];
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
    technique: 'Intersección alfabética',
    descriptions: [
      'El poema está escrito a pluma sobre un cuaderno y sobre un papel transparente de color rojo y blanco.',
    ],
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
    technique: 'Tarkib-band',
    descriptions: ['Poema escrito sobre una tablet usando colores verde y azul.'],
    // Add image paths here; all paths in this array are included in the lightbox.
    images: ['/Algorithmic_Poetry/images/artesanal/zurvan_1.png',
  '/Algorithmic_Poetry/images/artesanal/zurvan_2.png',
  '/Algorithmic_Poetry/images/artesanal/zurvan_3.png'],
  },
  {
    id: 'artesanal-cono',
    index: 'O3',
    title: 'Cono',
    technique: 'Geometría',
    descriptions: ['El poema está escrito a mano sobre un cono de filtro de café y sobre un cuaderno.'],
    // Add image paths here; all paths in this array are included in the lightbox.
    images: ['/Algorithmic_Poetry/images/artesanal/cono.jpeg',
  '/Algorithmic_Poetry/images/artesanal/cono_cuaderno.jpeg'],
  },
  {
    id: 'artesanal-espiral',
    index: 'O4',
    title: 'Espiral',
    technique: 'Literatura ergódica',
    descriptions: ['Poemas escritos sobre una tablet y en una composición de fotografías y texto digital.'],
    // Add image paths here; all paths in this array are included in the lightbox.
    images: ['/Algorithmic_Poetry/images/artesanal/espiral_1.png',
  '/Algorithmic_Poetry/images/artesanal/espiral_1_2.jpeg',
  '/Algorithmic_Poetry/images/artesanal/espiral_2.png',
  '/Algorithmic_Poetry/images/artesanal/espiral_2_2.jpeg'],
  },
  // Three editable blank templates. Change each title and descriptions, then add image paths.
  {
    id: 'artesanal-reflexion', index: 'O5', title: 'Reflexión', technique: 'Poema palíndromo',
    descriptions: ['Texto que salió del ejercicio de mirar la imagen "Lágrimas de cambio" del libro "La topografía de las lágrimas" de Rose-Lynn Fisher. Escrito sobre una tablet.'],
    // Add image paths here; all paths in this array are included in the lightbox.
    images: ['/Algorithmic_Poetry/images/artesanal/reflexion_2.png',
  '/Algorithmic_Poetry/images/artesanal/reflexion.png'],
  },
  {
    id: 'artesanal-koch', index: 'O6', title: 'Copo de nieve de Koch', technique: 'Curva Fractal',
    descriptions: ['Poema —y sus iteraciones— escritas sobre una tablet.'],
    // Add image paths here; all paths in this array are included in the lightbox.
    images: ['/Algorithmic_Poetry/images/artesanal/koch_1.png',
  '/Algorithmic_Poetry/images/artesanal/koch_2.png'],
  },
  {
    id: 'artesanal-circulo', index: 'O7', title: 'Círculo uroboros', technique: 'Poema circular',
    descriptions: ['Texto que salió del ejercicio de mirar la imagen "Lágrimas de cambio" del libro "La topografía de las lágrimas" de Rose-Lynn Fisher. Escrito sobre una tablet.'],
    // Add image paths here; all paths in this array are included in the lightbox.
    images: ['/Algorithmic_Poetry/images/artesanal/circulo_2.png',
  '/Algorithmic_Poetry/images/artesanal/circulo.png'],
  },
];
