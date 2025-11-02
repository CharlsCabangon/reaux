import React from 'react';
import PropTypes from 'prop-types';

export default function QuantitySelector({ value = 1, onChange }) {
  const MIN = 1;
  const MAX = 10;

  const increment = () => onChange(Math.min(MAX, value + 1));
  const decrement = () => onChange(Math.max(MIN, value - 1));

  const handleInputChange = (e) => {
    const newValue = e.target.value;

    if (newValue === '' || /^\d+$/.test(newValue)) {
      const numericValue = newValue === '' ? '' : Math.min(MAX, Math.max(MIN, parseInt(newValue)));
      onChange(numericValue);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-0.5 rounded-full border border-black shadow-sm sm:gap-0.5 md:border-2">
        <button
          aria-label="Decrease quantity"
          onClick={decrement}
          className="rounded-l-full border-r px-1.5 py-0.5 text-xs text-black transition-colors duration-500 ease-out hover:bg-off-white-muted/50 sm:px-2 sm:text-xs md:border-r-2"
        >
          −
        </button>

        <input
          type="text"
          inputMode="numeric"
          value={value}
          onChange={handleInputChange}
          aria-label="Quantity"
          className="w-8 bg-transparent text-center font-roboto text-xs text-black outline-none"
        />

        <button
          aria-label="Increase quantity"
          onClick={increment}
          className="rounded-r-full border-l px-1.5 py-0.5 text-xs text-black transition-colors duration-500 ease-out hover:bg-off-white-muted/50 sm:px-2 sm:text-xs md:border-l-2"
        >
          +
        </button>
      </div>
    </div>
  );
}

QuantitySelector.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
