import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import CheckIcon from '@/assets/icons/CheckIcon';

export default function FilterDropdown({ label, options = [], value, onChange, capitalizeText }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getLabel = (opt) => {
    if (typeof opt === 'string') {
      if (opt === 'all') return `All ${label.split(' ')[2] || label}`;
      return capitalizeText ? capitalizeText(opt) : opt;
    }
    return opt.label;
  };

  const getValue = (opt) => (typeof opt === 'string' ? opt : opt.value);

  const handleSelect = (opt) => {
    const event = { target: { value: getValue(opt) } };
    onChange(event);
    setIsOpen(false);
  };

  return (
    <label
      ref={dropdownRef}
      className="relative flex cursor-pointer select-none flex-col gap-1 rounded-md px-5 py-2 transition-colors duration-200 hover:bg-off-white"
    >
      <div className="flex items-center">
        <p className="mr-1 whitespace-nowrap font-sourceSerif text-sm font-semibold">{label}</p>
        <ChevronDownIcon
          className={`size-4 text-black transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center text-left text-sm font-light tracking-wide text-black-muted focus:outline-none"
      >
        {/* <span>{formatOption(value)}</span> */}
      </button>

      {options && isOpen && (
        <ul className="absolute top-full z-10 mt-1 max-h-72 w-[150%] overflow-auto rounded-md bg-white tracking-wide shadow-lg ring-1 ring-off-white">
          {options.map((opt) => {
            const optValue = getValue(opt);
            const optLabel = getLabel(opt);
            const isActive = value === optValue;
            return (
              <li
                key={optValue}
                onClick={() => handleSelect(opt)}
                className={`m-1 flex cursor-pointer items-center justify-between rounded-sm px-3 py-2 text-sm text-black hover:bg-off-white ${
                  isActive ? 'bg-off-white' : ''
                }`}
              >
                <span className="truncate">{optLabel}</span>
                {isActive && <CheckIcon color="black" strokeWidth={2} />}
              </li>
            );
          })}
        </ul>
      )}
    </label>
  );
}

FilterDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({ label: PropTypes.string, value: PropTypes.string }),
    ])
  ),
  onChange: PropTypes.func.isRequired,
  capitalizeText: PropTypes.func,
};
