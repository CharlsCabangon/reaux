import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useCart } from '@/context/useCart';

import Checkbox from '../controls/Checkbox';
import QuantitySelector from '../controls/QuantitySelector';
import ButtonRemove from '@/components/controls/ButtonRemove';

export default function ProductCartItem({ cartItem }) {
  const { selectedIds, toggleItemSelected, updateQuantity } = useCart();
  const { id, item, quantity } = cartItem;

  const navigate = useNavigate();

  const handleProductSelect = () => {
    navigate(`/product/${id}`);
  };

  const selected = selectedIds.includes(id);

  return (
    <li className="flex flex-col gap-3 rounded-lg bg-white px-3 py-3 shadow-md transition-all duration-300 ease-out sm:gap-4 sm:px-4 sm:py-4 md:flex-row md:items-center md:px-6">
      <div className="flex items-center md:w-[5%]">
        <Checkbox
          checked={selected}
          onChange={() => toggleItemSelected(id)}
          label={`Select ${item.name}`}
        />
      </div>

      <div className="flex flex-1 gap-3 sm:gap-4 md:w-[90%]">
        <div className="flex-shrink-0">
          <img
            src={item.images?.main}
            alt={item.name}
            className="h-20 w-20 rounded-sm object-cover sm:h-24 sm:w-24"
          />
        </div>

        <div
          onClick={handleProductSelect}
          className="flex flex-1 cursor-pointer flex-col justify-center"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleProductSelect();
            }
          }}
        >
          <p className="font-sourceSerif text-sm font-normal sm:text-base">{item.name}</p>
          <p className="text-xs text-black-muted sm:text-sm">{item.specs}</p>
          <p className="font-sourceSerif text-base font-semibold sm:text-lg md:text-xl">
            {item.price}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 sm:gap-4 md:justify-end md:gap-5">
        <QuantitySelector value={quantity} onChange={(val) => updateQuantity(id, val)} />
        <ButtonRemove id={id} />
      </div>
    </li>
  );
}

ProductCartItem.propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    item: PropTypes.object.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
