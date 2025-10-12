import { BLOB_URL } from '@/config/config';

const FOLDER = `assets/hero`;

export const hero = [
  {
    id: 'gema-collection-swarovski',
    images: [
      `${BLOB_URL}/${FOLDER}/hero-gema-collection-swarovski.avif`, // desktop
      `${BLOB_URL}/${FOLDER}/hero-gema-collection-swarovski-1500x900.avif`, // tablet
      `${BLOB_URL}/${FOLDER}/hero-gema-collection-swarovski-360x640.png`, // mobile
    ],
    alt: 'Ariana Grande in swarovski gema 2025 collection',
    details:
      'Infusing vibrant color with a boundless variety of cuts, the Gema family takes crystals into a world of possibility. Discover prismatic jewelry that was born to delight, as well as other vivid products inspired by the family.',
  },
  {
    id: 'dulcis-collection-swarovski',
    images: [
      `${BLOB_URL}/${FOLDER}/hero-dulcis-collection-swarovski.avif`, // desktop
      `${BLOB_URL}/${FOLDER}/hero-dulcis-collection-swarovski-1500x900.avif`, // tablet
      `${BLOB_URL}/${FOLDER}/hero-dulcis-collection-swarovski-360x640.png`, // mobile
    ],
    alt: 'Ariana Grande in swarovski dulcis 2025 collection',
    details:
      'Bring a full spectrum of sweetness to your style with the playful designs of Dulcis. Featuring a modern array of bright and expressive jewelry, this bold family has also inspired products that instantly spark joy.',
  },
  {
    id: 'millenia-collection-swarovski',
    images: [
      `${BLOB_URL}/${FOLDER}/hero-millenia-collection-swarovski.avif`, // desktop
      `${BLOB_URL}/${FOLDER}/hero-millenia-collection-swarovski-1500x900.avif`, // tablet
      `${BLOB_URL}/${FOLDER}/hero-millenia-collection-swarovski-360x640.png`, // mobile
    ],
    alt: 'Ariana Grande in swarovski millenia 2025 collection',
    details:
      'A timeless Reaux style, Millenia injects refinement into every wardrobe. Discover jewelry in a bold mix of cuts and colors, along with a striking range of other products inspired by the family.',
  },
];
