import React, { useCallback, useMemo, memo } from 'react';
import PropTypes from 'prop-types';

import FilterDropdown from './FilterDropdown';
import useProductFilterOptions from '@/hooks/useProductFilterOptions';
import { capitalize } from '@/utils/capitalizeText';

function ProductFilter({ products = [], value = {}, onFilterChange, onFilterReset }) {
  const { categories, collections } = useProductFilterOptions(products);

  const category = value.category ?? 'all'; // fall back to 'all'
  const collection = value.collection ?? 'all'; // fall back to 'all'
  const sort = value.sort ?? 'default'; // fall back to 'default'

  const handleCategoryChange = useCallback(
    (e) => onFilterChange({ category: e.target.value }),
    [onFilterChange]
  );

  const handleCollectionChange = useCallback(
    (e) => onFilterChange({ collection: e.target.value }),
    [onFilterChange]
  );

  const handleSortChange = useCallback(
    (e) => onFilterChange({ sort: e.target.value }),
    [onFilterChange]
  );

  const sortOptions = useMemo(
    () => [
      { label: 'Default', value: 'default' },
      { label: 'Price (low → high)', value: 'price-asc' },
      { label: 'Price (high → low)', value: 'price-desc' },
      { label: 'Name (A → Z)', value: 'name-asc' },
      { label: 'Name (Z → A)', value: 'name-desc' },
    ],
    []
  );

  return (
    <section
      role="search"
      aria-label="Product filters"
      className="flex w-full flex-col gap-4 bg-white px-4 py-4 shadow-sm sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-6 sm:py-5 md:px-8 lg:px-16 lg:py-6 xl:px-24"
    >
      <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start sm:gap-3 md:gap-4 lg:gap-5">
        <FilterDropdown
          label="Shop by Category"
          options={categories}
          value={category}
          onChange={handleCategoryChange}
          capitalizeText={capitalize}
        />
        <FilterDropdown
          label="Latest Collections"
          options={collections}
          value={collection}
          onChange={handleCollectionChange}
        />
        <div className="hidden lg:flex lg:gap-5">
          <FilterDropdown label="Lab Diamonds" options={null} />
          <FilterDropdown label="More at Reaux" options={null} />
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 sm:justify-start sm:gap-3 md:gap-4 lg:gap-5">
        <FilterDropdown
          label="Sort By"
          options={sortOptions}
          value={sort}
          onChange={handleSortChange}
        />
        <div onClick={onFilterReset} className="cursor-pointer" aria-label="Clear all filters">
          <FilterDropdown label="Clear" options={null} />
        </div>
      </div>
    </section>
  );
}

ProductFilter.propTypes = {
  products: PropTypes.array,
  value: PropTypes.shape({
    category: PropTypes.string,
    collection: PropTypes.string,
    sort: PropTypes.string,
  }),
  onFilterChange: PropTypes.func.isRequired,
  onFilterReset: PropTypes.func.isRequired,
};

export default memo(ProductFilter);
