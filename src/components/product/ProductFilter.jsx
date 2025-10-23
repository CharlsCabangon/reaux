import PropTypes from 'prop-types';

import FilterDropdown from './FilterDropdown';
import useProductFilterOptions from '@/hooks/useProductFilterOptions';
import { capitalize } from '@/utils/capitalizeText';
import ButtonRemove from '../controls/ButtonRemove';

export default function ProductFilter({
  products = [],
  value = {},
  onFilterChange,
  onFilterReset,
}) {
  const { categories, collections } = useProductFilterOptions(products);

  const category = value.category ?? 'all'; // fall back to 'all'
  const collection = value.collection ?? 'all'; // fall back to 'all'
  const sort = value.sort ?? 'default'; // fall back to 'default'

  const handleChange = (key) => (e) => {
    onFilterChange({ [key]: e.target.value });
  };

  return (
    <section className="flex w-full flex-wrap justify-between bg-white px-24 pb-4 pt-6 shadow-sm">
      <div className="flex items-center gap-5">
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
        <FilterDropdown label="Lab Diamonds" options={null} />
        <FilterDropdown label="More at Reaux" options={null} />
      </div>

      <div className="relative flex items-center gap-5">
        <FilterDropdown
          label="Sort By"
          options={[
            { label: 'Default', value: 'default' },
            { label: 'Price (low → high)', value: 'price-asc' },
            { label: 'Price (high → low)', value: 'price-desc' },
            { label: 'Name (A → Z)', value: 'name-asc' },
            { label: 'Name (Z → A)', value: 'name-desc' },
          ]}
          value={sort}
          onChange={handleChange('sort')}
        />
        <div onClick={onFilterReset}>
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
