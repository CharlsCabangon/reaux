import React, { useState, useEffect, useMemo, memo } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import ButtonAddToCart from '../controls/ButtonAddToCart';
import QuantitySelector from '../controls/QuantitySelector';

function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.images.main);

  const allImages = useMemo(() => Object.values(product.images).filter(Boolean), [product.images]);

  useEffect(() => {
    setSelectedImage(product.images.main);
    setQuantity(1);
  }, [product]);

  return (
    <main className="mx-auto grid gap-6 px-4 sm:gap-8 sm:px-6 md:grid-cols-2 md:px-8 lg:max-w-6xl lg:gap-10 xl:gap-12">
      <div className="order-1 flex flex-col items-center justify-start">
        <div className="w-full max-w-[500px]">
          <img
            src={selectedImage}
            alt={product.name}
            className="aspect-square w-full cursor-pointer rounded-lg object-cover shadow-md"
            loading="lazy"
          />
        </div>

        <div className="mt-3 flex flex-wrap justify-center gap-2 sm:mt-4 sm:gap-3">
          {allImages.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(img)}
              className={clsx(
                'aspect-square cursor-pointer rounded-sm border-2',
                'shadow-sm transition-all duration-200',
                'hover:border-black hover:opacity-80',
                'w-14 sm:w-16 md:w-20',
                selectedImage === img ? 'border-black' : 'border-transparent'
              )}
              aria-label={`View ${product.name} image ${index + 1}`}
            >
              <img
                src={img}
                alt={`${product.name} thumbnail ${index + 1}`}
                className="h-full w-full rounded-sm object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="order-2 flex flex-col gap-4 sm:gap-5">
        <div className="flex flex-col rounded-lg bg-white px-4 py-4 shadow-md sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-10">
          <h5 className="text-lg sm:text-xl">{product.name}</h5>
          <p className="mt-1 text-xs sm:text-sm">{product.specs}</p>
          <hr className="m-2 mx-0 w-full border-t-[1px] border-black-muted" />
          <div className="flex justify-between">
            <h5 className="text-lg sm:text-xl">{product.price}</h5>
            <div className="sm:hidden">
              <QuantitySelector value={quantity} onChange={setQuantity} />
            </div>
          </div>

          <div className="mt-12 flex items-start justify-end gap-4 sm:mt-16 sm:items-center sm:justify-between md:mt-20">
            <div className="relative hidden sm:flex">
              <div className="absolute -top-6 font-roboto text-xs sm:-top-7 sm:text-sm">
                Quantity:
              </div>
              <QuantitySelector value={quantity} onChange={setQuantity} />
            </div>
            <ButtonAddToCart product={product} quantity={quantity} />
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-lg bg-white px-4 py-4 shadow-md sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-10">
          <p className="font-sourceSerif text-xs font-semibold sm:text-sm">Description</p>
          <p className="mb-2 text-xs tracking-wide text-black sm:text-sm">{product.description}</p>
          <p className="font-sourceSerif text-xs font-semibold sm:text-sm">Care instructions</p>
          <ul className="ml-5 list-disc space-y-1">
            {product.careInstructions.map((instruction, idx) => (
              <li key={idx} className="text-xs font-light sm:text-sm">
                {instruction}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    specs: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string,
    careInstructions: PropTypes.arrayOf(PropTypes.string),
    images: PropTypes.shape({
      main: PropTypes.string.isRequired,
      worn: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default memo(ProductDetail);
