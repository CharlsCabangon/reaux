import { memo } from 'react';
import PropTypes from 'prop-types';

import ProductCard from '@/components/product/ProductCard';
import FallbackPage from '@/pages/FallbackPage';
import { PrimaryBtn } from '@/components/controls/Button';

function ProductGrid({ filteredProducts, onFilterReset }) {
  return (
    <main
      className="relative mb-20 mt-8 flex h-auto w-full flex-wrap justify-center px-4 sm:mb-24 sm:mt-10 sm:px-6 md:mb-28 md:px-8 lg:mb-32"
      role="main"
      aria-label="Product catalog"
    >
      {filteredProducts.length === 0 ? (
        <FallbackPage>
          <h3 className="mb-4">No pieces rendered</h3>
          <p className="mb-6 text-black-muted">
            Try adjusting your filters to discover more pieces.
          </p>
          <PrimaryBtn name="Clear filters" onClick={onFilterReset} />
        </FallbackPage>
      ) : (
        <div
          className="grid w-full max-w-7xl grid-cols-1 gap-3 xs:grid-cols-2 md:grid-cols-3 md:gap-4 xl:grid-cols-4 xl:gap-x-12 xl:gap-y-3"
          role="list"
          aria-label={`${filteredProducts.length} products available`}
        >
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </main>
  );
}

ProductGrid.propTypes = {
  filteredProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onFilterReset: PropTypes.func.isRequired,
};

export default memo(ProductGrid);
