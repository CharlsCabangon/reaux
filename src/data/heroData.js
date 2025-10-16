import { BLOB_URL } from '@/config/config';

const FOLDER = 'assets/hero';
const EXT = 'avif';

export const hero = [
  {
    id: 'gema-collection',
    title: 'Gema Collection',
    images: [
      `${BLOB_URL}/${FOLDER}/hero-swarovski-gema-collection.${EXT}`, // desktop
      `${BLOB_URL}/${FOLDER}/hero-swarovski-gema-collection-1500x900.${EXT}`, // tablet
      `${BLOB_URL}/${FOLDER}/hero-swarovski-gema-collection-360x640.${EXT}`, // mobile
    ],
    alt: 'Ariana Grande in swarovski gema 2025 collection',
    details:
      'Infusing vibrant color with a boundless variety of cuts, the Gema family takes crystals into a world of possibility. Discover prismatic jewelry that was born to delight, as well as other vivid products inspired by the family.',
  },
  {
    id: 'sunglasses-collection',
    title: 'Sunglasses Collection',
    images: [
      `${BLOB_URL}/${FOLDER}/hero-swarovski-sunglasses-collection.${EXT}`, // desktop
      `${BLOB_URL}/${FOLDER}/hero-swarovski-sunglasses-collection-1500x900.${EXT}`, // tablet
      `${BLOB_URL}/${FOLDER}/hero-swarovski-sunglasses-collection-360x640.${EXT}`, // mobile
    ],
    alt: 'A model in swarovski sunglasses collection',
    details:
      'Complete your look with luxury crystal-embedded sunglasses. Discover classic aviators, sleek cat-eye styles, and more stylish eyewear with Reaux sunglasses collection.',
  },
  {
    id: 'dulcis-collection',
    title: 'Dulcis Collection',
    images: [
      `${BLOB_URL}/${FOLDER}/hero-swarovski-dulcis-collection.${EXT}`, // desktop
      `${BLOB_URL}/${FOLDER}/hero-swarovski-dulcis-collection-1500x900.${EXT}`, // tablet
      `${BLOB_URL}/${FOLDER}/hero-swarovski-dulcis-collection-360x640.${EXT}`, // mobile
    ],
    alt: 'A model in swarovski dulcis 2025 collection',
    details:
      'Bring a full spectrum of sweetness to your style with the playful designs of Dulcis. Featuring a modern array of bright and expressive jewelry, this bold family has also inspired products that instantly spark joy.',
  },
  {
    id: 'millenia-collection',
    title: 'Millenia Collection',
    images: [
      `${BLOB_URL}/${FOLDER}/hero-swarovski-millenia-collection.${EXT}`, // desktop
      `${BLOB_URL}/${FOLDER}/hero-swarovski-millenia-collection-1500x900.${EXT}`, // tablet
      `${BLOB_URL}/${FOLDER}/hero-swarovski-millenia-collection-360x640.${EXT}`, // mobile
    ],
    alt: 'Ariana Grande in swarovski millenia 2025 collection',
    details:
      'A timeless Reaux style, Millenia injects refinement into every wardrobe. Discover jewelry in a bold mix of cuts and colors, along with a striking range of other products inspired by the family.',
  },
];
