import CheckIcon from '@/assets/icons/CheckIcon';

export default function Checkbox({ checked, onChange }) {
  return (
    <label className="flex cursor-pointer select-none items-center gap-2.5 text-black">
      {/* hidden native checkbox used as the peer */}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only" // sr-only keeps it accessible but visually hidden
      />

      {/* styled visual checkbox (sibling of the peer) */}
      <div
        className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-black transition-all duration-300 ease-out hover:scale-105 peer-checked:bg-black peer-checked:[&>svg]:opacity-100"
        aria-hidden="true"
      >
        <CheckIcon className="opacity-0 transition-opacity" />
      </div>
    </label>
  );
}
