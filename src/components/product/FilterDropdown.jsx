import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function FilterDropdown({ label, options = [], value, onChange, capitalizeText }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatOption = (opt) =>
    opt === 'all'
      ? `All ${label.split(' ')[2] || label}`
      : capitalizeText
        ? capitalizeText(opt)
        : opt;

  const handleSelect = (opt) => {
    const event = { target: { value: opt } };
    onChange(event);
    setIsOpen(false);
  };

  return (
    <label
      ref={dropdownRef}
      className="relative flex cursor-pointer select-none flex-col gap-1 rounded-md px-5 py-2 transition-colors duration-200 hover:bg-off-white-muted/70"
    >
      <div className="flex items-center">
        <p className="mr-1 whitespace-nowrap font-sourceSerif text-base font-semibold">{label}</p>
        <ChevronDownIcon
          className={`size-4 text-black transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center text-left text-sm font-light tracking-wide text-black-muted focus:outline-none"
      >
        <span>{formatOption(value)}</span>
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <ul className="absolute top-full z-10 mt-1 max-h-80 w-full overflow-auto rounded-md bg-white/90 tracking-wide shadow-lg">
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => handleSelect(opt)}
              className={`m-1 cursor-pointer rounded-sm px-3 py-2 text-sm text-black hover:bg-off-white-muted/70 ${
                value === opt ? 'bg-off-white-muted/70' : ''
              }`}
            >
              {formatOption(opt)}
            </li>
          ))}
        </ul>
      )}
    </label>
  );
}

FilterDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  capitalizeText: PropTypes.func,
};
