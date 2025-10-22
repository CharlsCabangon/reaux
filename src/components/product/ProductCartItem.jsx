import { useNavigate } from 'react-router-dom';

import Checkbox from '../controls/Checkbox';
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
    <li className="flex cursor-pointer flex-col rounded-lg bg-white px-6 py-4 shadow-md transition-all duration-300 ease-out md:flex-row md:items-center">
      <div className="flex w-2 items-center md:w-[5%]">
        <Checkbox
          checked={selected}
          onChange={() => onSelectToggle(id)}
          aria-label={`Select ${item.name}`}
        />
      </div>
      <div className="flex md:w-[90%]">
        <div className="md:w-[14%]">
          <img
            src={item.images?.main}
            alt={item.name}
            className="h-24 w-24 rounded-sm object-cover"
          />
        </div>
        <div onClick={() => handleProductSelect()} className="flex flex-col justify-center">
          <p className="font-sourceSerif text-base font-normal">{item.name}</p>
          <p className="text-sm text-black-muted">{item.specs}</p>
          <p className="font-sourceSerif text-xl font-semibold">{item.price}</p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <QuantitySelector value={quantity} onChange={(val) => onQuantityChange(id, val)} />
        <ButtonRemove onClick={() => onRemove(id)} />
      </div>
    </li>
  );
}
