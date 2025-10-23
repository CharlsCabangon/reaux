import React from 'react';
import PropTypes from 'prop-types';

export default function QuantitySelector({ value = 1, onChange }) {
  const increment = () => onChange(Math.max(1, value + 1));
  const decrement = () => onChange(Math.max(1, value - 1));

  const handleInputChange = (e) => {
    const newValue = e.target.value;

    if (newValue === '' || /^[0-9]+$/.test(newValue)) {
      const numericValue = newValue === '' ? '' : Math.min(10, Math.max(0, parseInt(newValue)));
      onChange(numericValue);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-0.5 rounded-full border-2 border-black shadow-sm sm:gap-0.5">
        <button
          aria-label="Decrease quantity"
          onClick={decrement}
          className="rounded-l-full border-r-2 px-1.5 py-0.5 text-xs text-black transition transition-all duration-500 ease-out hover:bg-off-white-muted/50 sm:px-2 sm:text-xs"
        >
          −
        </button>

        <input
          type="text"
          inputMode="numeric"
          value={value}
          onChange={handleInputChange}
          className="w-8 bg-transparent text-center font-roboto text-xs text-black outline-none sm:w-8 sm:text-xs"
        />

        <button
          aria-label="Increase quantity"
          onClick={increment}
          className="rounded-r-full border-l-2 px-1.5 py-0.5 text-xs text-black transition transition-all duration-500 ease-out hover:bg-off-white-muted/50 sm:px-2 sm:text-xs"
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
