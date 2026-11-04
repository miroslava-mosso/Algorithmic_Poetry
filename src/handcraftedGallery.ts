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
      'Verso horizontal y verso vertical se cruzan en una letra compartida.',
      'Poema escrito a pluma sobre papel transparente',
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
    descriptions: ['Dios persa antiguo como personificación del tiempo infinito y el espacio. Tarkib-band es una forma poética de la literatura persa y urdu.'],
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
    descriptions: ['El poema se estrecha hacia un punto inferior como un embudo que condensa el sentido en una última sílaba.'],
    // Add image paths here; all paths in this array are included in the lightbox.
    images: [],
  },
  {
    id: 'artesanal-espiral',
    index: 'O4',
    title: 'Espiral',
    technique: 'Literatura ergódica',
    descriptions: ['El poema empieza desde afuera hacia adentro. Se termina cuando el espiral colapsa en el centro. Puedes comenzar otro espiral que empiece en la última palabra del espiral anterior.'],
    // Add image paths here; all paths in this array are included in the lightbox.
    images: [],
  },
  // Three editable blank templates. Change each title and descriptions, then add image paths.
  {
    id: 'artesanal-nuevo-1', index: 'O5', title: 'Nuevo poema 1', technique: 'Añade la técnica',
    descriptions: ['Añade aquí una descripción o manifiesto.'],
    // Add image paths here; all paths in this array are included in the lightbox.
    images: [],
  },
  {
    id: 'artesanal-nuevo-2', index: 'O6', title: 'Nuevo poema 2', technique: 'Añade la técnica',
    descriptions: ['Añade aquí una descripción o manifiesto.'],
    // Add image paths here; all paths in this array are included in the lightbox.
    images: [],
  },
  {
    id: 'artesanal-nuevo-3', index: 'O7', title: 'Nuevo poema 3', technique: 'Añade la técnica',
    descriptions: ['Añade aquí una descripción o manifiesto.'],
    // Add image paths here; all paths in this array are included in the lightbox.
    images: [],
  },
];
