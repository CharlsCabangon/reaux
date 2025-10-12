export function PrimaryBtn({ name, type = 'button', onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="min-w-20 cursor-pointer rounded-full bg-black px-12 py-3 text-sm text-off-white transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-black/90 active:scale-95"
    >
      {name}
    </button>
  );
}

export function SecondaryBtn({ name, type = 'button', onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="min-w-20 cursor-pointer rounded-full border-2 border-black px-12 py-3 text-sm text-black transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-off-white-muted/40 active:scale-95"
    >
      {name}
    </button>
  );
}
