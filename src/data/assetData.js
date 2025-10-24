import { BLOB_URL } from '@/config/config';

const FOLDER = 'assets';
const SUBFOLDERS = {
  decor: 'decor',
  marquee: 'marquee',
  banner: 'banner',
};
const EXTENSIONS = {
  image: 'avif',
  video: 'webm',
  icon: 'svg',
};

const getAssetUrl = (subfolder, name, ext) => `${BLOB_URL}/${FOLDER}/${subfolder}/${name}.${ext}`;

const asset = [
  {
    id: 'rendered-perfectly',
    title: 'Rendered perfectly',
    image: getAssetUrl(SUBFOLDERS.decor, 'rendered-perfectly', EXTENSIONS.image),
    alt: 'Swarovski diamond rings',
  },
  {
    id: 'infinite-bloom',
    title: 'Infinite Bloom',
    image: getAssetUrl(SUBFOLDERS.decor, 'infinite-bloom', EXTENSIONS.image),
    alt: 'Swarovski Dulcis Collection',
  },
  {
    id: 'static-to-dynamic',
    title: 'Static to Dynamic',
    image: getAssetUrl(SUBFOLDERS.decor, 'static-to-dynamic', EXTENSIONS.image),
    alt: 'Swarovski Idyllia Collection',
  },
  {
    id: 'reaux-vision',
    title: 'Reaux Vision',
    image: getAssetUrl(SUBFOLDERS.decor, 'reaux-vision', EXTENSIONS.image),
    alt: 'Swarovski Millenia Collection',
  },
  {
    id: 'ephemeral',
    title: 'Ephemeral',
    image: getAssetUrl(SUBFOLDERS.decor, 'ephemeral', EXTENSIONS.image),
    alt: 'Swarovski The Galaxy Collection',
  },
  {
    id: 'infinite',
    title: 'Infinite',
    image: getAssetUrl(SUBFOLDERS.decor, 'infinite', EXTENSIONS.image),
    alt: 'Swarovski The Galaxy Collection',
  },
  {
    id: 'cascade',
    title: 'Cascade',
    image: getAssetUrl(SUBFOLDERS.decor, 'cascade', EXTENSIONS.image),
    alt: 'Swarovski The Galaxy Collection',
  },
  {
    id: 'banner-diamonds-are-forever',
    title: 'Diamonds are forever',
    image: getAssetUrl(SUBFOLDERS.banner, 'banner-diamonds-are-forever', EXTENSIONS.image),
    alt: 'Ariana Grande Swarovski Holiday 2024 Ad Campaign',
  },
  {
    id: 'banner-rendered-perfectly',
    title: 'Rendered perfectly',
    image: getAssetUrl(SUBFOLDERS.banner, 'banner-rendered-perfectly', EXTENSIONS.image),
    alt: 'Ariana Grande Swarovski Holiday 2024 Ad Campaign',
  },
  {
    id: 'ariana-swarovski-capsule-collection',
    title: 'Capsule Collection',
    image: getAssetUrl(SUBFOLDERS.decor, 'ariana-swarovski-capsule-collection', EXTENSIONS.image),
    alt: 'Ariana Grande in Swarovski Capsule Collection',
  },
  {
    id: 'fine-design',
    title: 'Fine design',
    image: getAssetUrl(SUBFOLDERS.decor, 'fine-design', EXTENSIONS.image),
    alt: 'Swarovski brand visual',
  },
  {
    id: 'reactive-framework',
    title: 'Reactive framework',
    image: getAssetUrl(SUBFOLDERS.decor, 'reactive-framework', EXTENSIONS.image),
    alt: 'Swarovski brand model',
  },
  {
    id: 'capsule-collection-video',
    title: 'Rendered perfectly',
    video: getAssetUrl(SUBFOLDERS.decor, 'capsule-collection-video', EXTENSIONS.video),
    alt: 'Swarovski Capsule Collection',
  },
];

export function getAsset(id) {
  return asset.find((item) => item.id === id);
}

export const logos = ['allure', 'cosmopolitan', 'instyle', 'vanity-fair'].map((name) => ({
  id: name,
  svg: getAssetUrl(SUBFOLDERS.marquee, name, EXTENSIONS.icon),
}));
