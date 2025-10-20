import { useNavigate } from "react-router-dom";

import Checkbox from "../controls/Checkbox";
import QuantitySelector from '@/components/controls/QuantitySelector';
import ButtonRemove from '@/components/controls/ButtonRemove';

export default function ProductCartItem({
  cartItem,
  selected,
  onSelectToggle,
  onQuantityChange,
  onRemove,
}) {
  const { id, item, quantity } = cartItem;
  const navigate = useNavigate();

  const handleProductSelect = () => {
    navigate(`/product/${id}`);
  };

  return (
    <li
      onClick={() => handleProductSelect()}
      className="flex flex-col rounded-lg bg-white hover:scale-105 px-6 py-4 shadow-md cursor-pointer transition-all duration-300 ease-out md:flex-row md:items-center"
    >
      <div className="flex w-2 items-center md:w-[4%]">
        <Checkbox
          checked={selected}
          onChange={() => onSelectToggle(id)}
          aria-label={`Select ${item.name}`}
        />
      </div>

      <div className="md:w-[11%]">
        <img src={item.images?.main} alt={item.name} className="h-24 w-24 rounded object-cover" />
      </div>

      <div className="flex-1 md:w-[30%]">
        <p className="font-sourceSerif text-base font-normal">{item.name}</p>
        <p className="font-sourceSerif text-xl font-semibold">{item.price}</p>
      </div>

      <div className="flex items-center justify-center gap-5">
        <QuantitySelector value={quantity} onChange={(val) => onQuantityChange(id, val)} />
        <ButtonRemove onClick={() => onRemove(id)} />
      </div>
    </li>
  );
}
