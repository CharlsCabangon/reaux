import { BLOB_URL } from '@/config';
import jewelries from '@/data/json/jewelries.json';

const IMAGE_EXT = 'avif';
const FOLDER = 'products';

function getImgUrl(fileName, isMain) {
  const number = isMain ? '1' : '2';

  return `${BLOB_URL}/${FOLDER}/${fileName}-${number}.${IMAGE_EXT}`;
}

function mapImage(item) {
  return {
    ...item,
    images: {
      main: getImgUrl(item.id, true),
      worn: getImgUrl(item.id, false),
    },
  };
}

export const jewelryData = jewelries.map((item) =>
  Object.freeze(mapImage(item))
);
