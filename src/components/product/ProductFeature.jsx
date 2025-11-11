import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import FlickityComponent from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';

import ProductCard from './ProductCard';
import { jewelryData } from '@/data/productData';
import { getRandomItems } from '@/utils/getRandomItems';

export default function ProductFeature({ count = 5 }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const items = getRandomItems(jewelryData, count);
    setProducts(items);
  }, [count]);

  const flickityOptions = useMemo(
    () => ({
      freeScroll: true,
      wrapAround: true,
      cellAlign: 'center',
      contain: true,
      draggable: true,
      pageDots: false,
      prevNextButtons: true,
      imagesLoaded: true,
      selectedAttraction: 0.015,
      friction: 0.25,
    }),
    []
  );

  if (products.length === 0) return null;

  return (
    <section className="w-full overflow-hidden py-5 sm:py-6 md:py-8" aria-label="Featured products">
      <FlickityComponent
        className="carousel"
        elementType="div"
        options={flickityOptions}
        reloadOnUpdate
        static
      >
        {products.map((item) => (
          <div key={item.id} className="mr-3 flex h-[70vh] items-center justify-center sm:mr-4">
            <ProductCard item={item} />
          </div>
        ))}
      </FlickityComponent>
    </section>
  );
}

ProductFeature.propTypes = {
  count: PropTypes.number.isRequired,
};
