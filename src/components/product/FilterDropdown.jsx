/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';

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
      className="relative flex cursor-pointer select-none flex-col gap-1 rounded-md px-3 py-1.5 text-center transition-colors duration-200 hover:bg-off-white sm:px-4 sm:py-2 md:px-5"
    >
      <div className="flex items-center gap-1">
        <p className="whitespace-nowrap font-sourceSerif text-xs font-semibold sm:text-sm">
          {label}
        </p>
        {options && (
          <ChevronDownIcon
            aria-hidden="true"
            className={clsx(
              'size-3 text-black transition-transform duration-300',
              'sm:size-4',
              isOpen ? 'rotate-180' : ''
            )}
          />
        )}
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={`${label} filter`}
        aria-expanded={isOpen}
        className="flex items-center text-left text-xs font-light tracking-wide text-black-muted sm:text-sm"
      />
      <AnimatePresence>
        {options && isOpen && (
          <motion.ul
            initial={{ opacity: 0, scaleY: 0.8, originY: 0 }}
            animate={{ opacity: 1, scaleY: 1, originY: 0 }}
            exit={{ opacity: 0, scaleY: 0.8, originY: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            role="listbox"
            aria-label={`${label} options`}
            className="absolute left-1/2 top-full z-10 mt-1 max-h-72 w-[200%] -translate-x-1/2 overflow-auto rounded-md bg-white tracking-wide shadow-lg ring-1 ring-off-white sm:w-[150%]"
          >
            {options.map((opt) => {
              const optValue = getValue(opt);
              const optLabel = getLabel(opt);
              const isActive = value === optValue;
              return (
                <li
                  key={optValue}
                  onClick={() => handleSelect(opt)}
                  role="option"
                  aria-selected={isActive}
                  className={clsx(
                    'm-1 flex cursor-pointer items-center justify-between',
                    'rounded-sm px-3 py-2 text-black hover:bg-off-white',
                    'text-xs',
                    'sm:text-sm',
                    isActive ? 'bg-off-white' : ''
                  )}
                >
                  <span className="truncate">{optLabel}</span>
                  {isActive && <CheckIcon color="black" strokeWidth={2} />}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
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
