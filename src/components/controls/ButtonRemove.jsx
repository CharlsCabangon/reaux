import RemoveIcon from '@/assets/icons/RemoveIcon';

export default function ButtonRemove({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-full p-1 transition-all duration-500 ease-out hover:bg-off-white"
    >
      <RemoveIcon />
    </button>
  );
}
