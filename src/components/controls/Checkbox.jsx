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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="h-4 w-4 stroke-white opacity-0 transition-opacity"
        >
          <path d="M5 13l4 4L19 7" strokeWidth="3" />
        </svg>
      </div>
    </label>
  );
}
