import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ButtonAddToCart from '../controls/ButtonAddToCart';
import QuantitySelector from '../controls/QuantitySelector';

export default function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.images.main);

  const allImages = Object.values(product.images).filter(Boolean);

  useEffect(() => {
    setSelectedImage(product.images.main);
    setQuantity(1);
  }, [product]);

  return (
    <>
      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
        <div className="order-1 flex flex-col items-center justify-center">
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full max-w-[700px] cursor-pointer rounded-lg object-cover shadow-md"
          />
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {allImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} thumbnail ${index + 1}`}
                className={`h-20 w-20 cursor-pointer rounded-sm border-2 object-cover shadow-sm transition-all duration-200 hover:border-black hover:opacity-80 ${
                  selectedImage === img ? 'border-black' : 'border-transparent'
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="order-2 flex flex-col gap-5">
          <div className="flex flex-col rounded-lg bg-white px-10 py-8 shadow-md">
            <h5>{product.name}</h5>
            <p className="mt-1 text-sm">{product.specs}</p>
            <hr className="m-2 mx-0 w-full border-t-[1px] border-black-muted" />
            <h5>{product.price}</h5>
            <div className="mt-20 flex items-center justify-between gap-4">
              <div className="relative">
                <div className="absolute -top-7 font-roboto text-sm">Quantity:</div>
                <QuantitySelector value={quantity} onChange={setQuantity} />
              </div>
              <ButtonAddToCart product={product} quantity={quantity} />
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-lg bg-white px-10 py-8 shadow-md">
            <p className="font-sourceSerif text-sm font-semibold">Description</p>
            <p className="mb-2 text-sm tracking-wide text-black">{product.description}</p>
            <p className="font-sourceSerif text-sm font-semibold">Care instructions</p>
            {product.careInstructions.map((instruction, idx) => {
              return (
                <li key={idx} className="ml-5 text-sm font-light">
                  {instruction}
                </li>
              );
            })}
          </div>
        </div>
      </main>
    </>
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
