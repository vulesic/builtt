import React, { useState } from "react";
import CartWhite from "../images/cartWhite.svg";
import Minus from "../images/minus.svg";
import Plus from "../images/plus.svg";
import { AddProductProps } from "../lib/interfaces";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/userSlice";

const AddProduct = ({ product }: AddProductProps) => {
  const [quantity, setQuantity] = useState(product.quantity === 0 ? 1 : product.quantity);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const newProduct = {...product, quantity}
    dispatch(addToCart(newProduct));
  };

  const reduceQuantity = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  }
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  }

  return (
    <div className="AddProduct flex flex-row">
      <div className="bg-white rounded-[100px] p-2 flex flex-row items-center mr-[7px]">
        <div className="cursor-pointer" onClick={() => reduceQuantity()}>
          <img src={Minus} alt="minus icon" />
        </div>
        <div className="mx-3 w-4 text-center" >{quantity}</div>
        <div className="cursor-pointer" onClick={() => increaseQuantity()}>
          <img src={Plus} alt="plus icon" />
        </div>
      </div>
      <div className="bg-black rounded-[100px] p-2 cursor-pointer" onClick={handleAddToCart}>
        <img src={CartWhite} alt="add to cart" />
      </div>
    </div>
  );
};

export default AddProduct;
