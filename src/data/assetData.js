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
    content:
      'Every creation begins with a fascination for form, light, and lasting beauty. Each jewel is crafted to embody sophistication refined through innovation, perfected by artistry. From the soft glow of diamonds to the sculpted elegance of gold, Reaux celebrates jewelry as modern poetry made tangible.',
    cta: 'Discover more',
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
    content:
      'Discover the art of brilliance with our lab diamonds, ethically created to embody elegance, sophistication, and beauty that lasts a lifetime.',
    cta: 'Discover more',
  },
  {
    id: 'banner-rendered-perfectly',
    title: 'Rendered perfectly',
    image: getAssetUrl(SUBFOLDERS.banner, 'banner-rendered-perfectly', EXTENSIONS.image),
    alt: 'Ariana Grande Swarovski Holiday 2024 Ad Campaign',
  },
  {
    id: 'vision-rendered',
    title: 'A vision rendered',
    image: getAssetUrl(SUBFOLDERS.decor, 'vision-rendered', EXTENSIONS.image),
    alt: 'Ariana Grande in Swarovski Capsule Collection',
    content: [
      'Reaux began from a quiet fascination with how light moves across form. What started as a love for structure and detail became a devotion to the art of jewelry. Every design is guided by balance and intention, shaped not for excess but for meaning.',
      'Each piece carries a story of care, of hands that build, polish, and refine until light finds its place. Reaux is a reflection of that passion, a reminder that true beauty is made, not found.',
      'A vision rendered.',
    ],
    cta: 'Our story',
  },
  {
    id: 'fine-design',
    title: 'The art of fine design',
    image: getAssetUrl(SUBFOLDERS.decor, 'fine-design', EXTENSIONS.image),
    alt: 'Swarovski brand visual',
    content: [
      'With the creator who saw beauty in structure and precision. What started as ideas became a vision shaped by design and technology. Each piece reflects that balance, built with intention and quiet detail.',
      'Guided by a background in development and a love for form, the founder shaped Reaux around the idea that jewelry can be both crafted and engineered. Every curve follows purpose, every piece reflects clarity.',
      'Reaux is where design meets discipline, and beauty is built line by line.',
    ],
    cta: 'Discover more',
  },
  {
    id: 'reaux-worldwide',
    title: 'Reaux: The world knows the name',
    image: getAssetUrl(SUBFOLDERS.decor, 'reaux-worldwide', EXTENSIONS.image),
    alt: 'Swarovski brand model',
    content: [
      'From Paris ateliers to Tokyo skylines, Reaux has become a quiet constant in the language of modern luxury. Every piece carries the signature restraint and radiance that define the brand — elegant, intentional, unforgettable.',
      'People wear Reaux not to be seen, but to feel something real. The weight, the craft, the calm beauty in every line. Word spread, and soon, Reaux became known not for its fame, but for its honesty.',
      'Reaux isn’t just worn. It’s remembered.',
    ],
    cta: 'Discover more',
  },
  {
    id: 'capsule-collection-video',
    title: 'Rendered perfectly',
    video: getAssetUrl(SUBFOLDERS.decor, 'capsule-collection-video', EXTENSIONS.video),
    alt: 'Swarovski Capsule Collection',
    content:
      'To wear Reaux is to carry elegance that lingers. Jewels that hold the warmth of love and the promise of forever in every glimmer.',
  },
];

export function getAsset(id) {
  return asset.find((item) => item.id === id);
}

export const logos = ['allure', 'cosmopolitan', 'instyle', 'vanity-fair'].map((name) => ({
  id: name,
  svg: getAssetUrl(SUBFOLDERS.marquee, name, EXTENSIONS.icon),
}));
