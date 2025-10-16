export function PrimaryBtn({ name, type = 'button', onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="min-w-20 cursor-pointer rounded-full bg-black px-12 py-3 text-sm text-off-white transition-all duration-300 ease-out hover:bg-black/85 active:bg-black/60"
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
      className="min-w-20 cursor-pointer rounded-full border-2 border-black px-12 py-3 text-sm text-black transition-all duration-300 ease-out hover:bg-off-white-muted/65 active:bg-off-white-muted/10"
    >
      {name}
    </button>
  );
}
