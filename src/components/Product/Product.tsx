import React, { useState } from "react";
import AddProduct from "../AddProduct";
import { AddProductProps } from "../../lib/interfaces";

const Product = ({ product }: AddProductProps) => {
  const [isVisibleCartToAdd, setIsVisibleCartToAdd] = useState(false);

  const handleMouseEnter = () => {
    setIsVisibleCartToAdd(true);
  };

  const handleMouseLeave = () => {
    setIsVisibleCartToAdd(false);
  };

  return (
    <div className="Product" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="relative">
        <img src={process.env.PUBLIC_URL + product.imagePath} alt={product.title} height={284} />
        {isVisibleCartToAdd && (
          <div className="absolute bottom-[7px] left-[7px]">
            <AddProduct product={product} />
          </div>
        )}
      </div>
      <div className="text-[18px] font-['Arial'] font-bold leading-6 mt-4">{product.title}</div>
      <div className="flex flex-row">
        <div className="text-base leading-7">{product.price}</div>
        <div className="text-xs ml-1">RSD</div>
      </div>
    </div>
  );
};

export default Product;
