import PropTypes from 'prop-types';

import FilterDropdown from './FilterDropdown';
import useProductFilterOptions from '@/hooks/useProductFilterOptions';

import { capitalize } from '@/utils/capitalizeText';

export default function ProductFilter({ products = [], value = {}, onFilterChange }) {
  const { categories, collections } = useProductFilterOptions(products);

  const category = value.category ?? 'all'; // fall back to 'all'
  const collection = value.collection ?? 'all'; // fall back to 'all'
  const sort = value.sort ?? 'default'; // fall back to 'default'

  const handleChange = (key) => (e) => {
    onFilterChange({ category, collection, sort, [key]: e.target.value });
  };

  return (
    <section className="flex w-full flex-wrap justify-between bg-white px-24 pb-5 pt-6 shadow-md">
      <div className="flex gap-5">
        <FilterDropdown
          label="Shop by Category"
          options={categories}
          value={category}
          onChange={handleChange('category')}
          capitalizeText={capitalize}
        />
        <FilterDropdown
          label="Latest Collections"
          options={collections}
          value={collection}
          onChange={handleChange('collection')}
        />
        <FilterDropdown label="Lab Diamonds" />
        <FilterDropdown label="More at Reaux" />
      </div>

      <div className="mr-20">
        <FilterDropdown
          label="Sort By"
          options={['default', 'price-asc', 'price-desc', 'name-asc', 'name-desc']}
          value={sort}
          onChange={handleChange('sort')}
        />
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
};
