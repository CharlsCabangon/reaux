import React, { useState, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { truncateText } from '@/utils/truncateText';

function ProductCard({ item }) {
  const [isHover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = useCallback(() => {
    setHover(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHover(false);
  }, []);

  const handleProductSelect = useCallback(() => {
    navigate(`/product/${item.id}`);
  }, [navigate, item.id]);

  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleProductSelect}
      className="group relative mx-auto flex h-[380px] w-full max-w-[280px] cursor-pointer flex-col rounded-md border border-white bg-white shadow-md transition-transform duration-300 hover:shadow-lg xs:h-[390px] sm:h-[410px] sm:max-w-[320px] md:h-[440px] md:max-w-[340px] lg:w-80"
      role="button"
      tabIndex={0}
      aria-label={`View details for ${item.name}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleProductSelect();
        }
      }}
    >
      <div
        className={clsx(
          'relative w-full flex-shrink-0 overflow-hidden rounded-t-md bg-white',
          'h-[260px]',
          'xs:h-[270px]',
          'sm:h-[290px]',
          'md:h-[310px]',
          'lg:h-[330px]',
          isHover ? 'scale-100' : 'scale-75'
        )}
      >
        <img
          src={isHover ? item.images.worn : item.images.main}
          alt={`${item.name} ${isHover ? 'worn' : 'main'} view`}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col items-center justify-between px-3 py-3 text-center sm:px-4 sm:py-4">
        <div className="flex w-full flex-col items-center gap-0.5 sm:gap-1">
          <h3 className="w-full font-sourceSerif text-xs font-normal leading-snug sm:text-sm">
            {item.name}
          </h3>

          <p className="w-full font-roboto text-[10px] text-black-muted sm:text-xs">
            {truncateText(item.specs, 45)}
          </p>
        </div>

        <p className="mt-2 font-sourceSerif text-xs font-normal leading-snug sm:text-sm">
          {item.price}
        </p>
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    specs: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    images: PropTypes.shape({
      main: PropTypes.string.isRequired,
      worn: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default memo(ProductCard);
