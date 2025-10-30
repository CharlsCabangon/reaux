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
        className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-black transition-all duration-300 ease-out hover:scale-105 peer-checked:bg-black peer-checked:[&>svg]:opacity-100"
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
