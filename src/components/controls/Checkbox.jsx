import PropTypes from 'prop-types';

import CheckIcon from '@/assets/icons/CheckIcon';

export default function Checkbox({ checked, onChange, label }) {
  return (
    <label className="flex cursor-pointer select-none items-center gap-2.5 text-black">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
        aria-label={label}
      />

      <div
        className="flex h-4 w-4 items-center justify-center rounded-full border border-black transition-opacity duration-300 ease-out hover:opacity-80 peer-checked:bg-black md:h-6 md:w-6 md:border-2 peer-checked:[&>svg]:opacity-100"
        aria-hidden="true"
      >
        <CheckIcon className="opacity-0 transition-opacity" />
      </div>
    </label>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
