import { BLOB_URL } from '@/config/config';

const FOLDER = 'assets';
const SUBFOLDERS = {
  decor: 'decor',
  marquee: 'marquee',
};
const EXTENSIONS = {
  image: 'avif',
  icon: 'svg',
};

const getAssetUrl = (subfolder, name, ext) =>
  `${BLOB_URL}/${FOLDER}/${subfolder}/${name}.${ext}`;

const decor = [
  {
    id: 'rendered-perfectly',
    image: getAssetUrl(
      SUBFOLDERS.decor,
      'rendered-perfectly',
      EXTENSIONS.image
    ),
    alt: 'Swarovski diamond rings',
  },
  {
    id: 'infinite-bloom',
    image: getAssetUrl(SUBFOLDERS.decor, 'infinite-bloom', EXTENSIONS.image),
    alt: 'Swarovski Dulcis Collection',
  },
  {
    id: 'static-to-dynamic',
    image: getAssetUrl(SUBFOLDERS.decor, 'static-to-dynamic', EXTENSIONS.image),
    alt: 'Swarovski Idyllia Collection',
  },
  {
    id: 'reaux-vision',
    image: getAssetUrl(SUBFOLDERS.decor, 'reaux-vision', EXTENSIONS.image),
    alt: 'Swarovski Millenia Collection',
  },
  {
    id: 'ephemeral',
    image: getAssetUrl(SUBFOLDERS.decor, 'ephemeral', EXTENSIONS.image),
    alt: 'Swarovski The Galaxy Collection',
  },
  {
    id: 'infinite',
    image: getAssetUrl(SUBFOLDERS.decor, 'infinite', EXTENSIONS.image),
    alt: 'Swarovski The Galaxy Collection',
  },
  {
    id: 'cascade',
    image: getAssetUrl(SUBFOLDERS.decor, 'cascade', EXTENSIONS.image),
    alt: 'Swarovski The Galaxy Collection',
  },
];

export function getDecor(id) {
  return decor.find((item) => item.id === id) || null;
}

export const logos = ['allure', 'cosmopolitan', 'instyle', 'vanity-fair'].map(
  (name) => ({
    id: name,
    svg: getAssetUrl(SUBFOLDERS.marquee, name, EXTENSIONS.icon),
  })
);
