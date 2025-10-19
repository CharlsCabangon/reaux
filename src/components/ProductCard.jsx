import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ item }) {
  const [isHover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleProductSelect = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div
      className="group relative w-80 cursor-pointer rounded-md border border-white bg-white shadow-md transition-transform duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleProductSelect}
    >
      <div
        className={`relative mb-6 w-full overflow-hidden rounded-t-md bg-white ${isHover ? 'scale-100' : 'scale-75'}`}
      >
        <img
          src={isHover ? item.images.worn : item.images.main}
          alt={`${item.name} ${isHover ? 'worn' : 'main'} view`}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="font-sourceSerif text-sm font-normal leading-snug">{item.name}</h3>
        <p className="mb-2 font-roboto text-xs text-black-muted">{item.specs}</p>
        <p className="mb-7 font-sourceSerif text-sm font-normal leading-snug">{item.price}</p>
      </div>
    </div>
  );
}
