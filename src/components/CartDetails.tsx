import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../lib/interfaces";

const CartDetails = () => {
  const cart = useSelector((state: RootState) => state.user.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const totalPrice = cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setTotalPrice(totalPrice);
    const discount = cart.reduce((total, item) => {
      var disc = total + ((item.price * item.discount) / 100) * item.quantity;
      return disc;
    }, 0);
    setDiscount(discount);
  }, [cart]);

  return (
    <div className="CartDetails w-full md:w-[380px] p-6  bg-[#F0F0F0]">
      <h3 className="font-bold text-lg mb-7">Tvoja narudžbina</h3>

      <div className="flex justify-between mb-3">
        <div className="font-['Arial'] text-base">Ukupno</div>
        <div>
          <div className="flex flex-row">
            <div className="text-2xl leading-7">{totalPrice.toFixed(2)}</div>
            <div className="text-xs ml-1">RSD</div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mb-3">
        <div className="font-['Arial'] text-base">Ušteda</div>
        <div>
          <div className="flex flex-row">
            <div className="text-2xl leading-7">{`${discount ? '- ' + discount.toFixed(2) : '0'} `}</div>
            <div className="text-xs ml-1">RSD</div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mb-3">
        <div className="font-['Arial'] text-base">Isporuka Daily Express*</div>
        <div className="font-['Arial'] text-xs">Besplatna</div>
      </div>

      <div className="border-b w-full my-4"></div>

      <div className="flex justify-between">
        <div>
          <div className="font-['Arial'] text-base">Ukupno za uplatu</div>
          <div className="font-['Arial'] text-xs">Cena je sa uključenim PDV-om</div>
        </div>
        <div>
          <div className="flex flex-row">
            <div className="text-2xl leading-7">{(totalPrice - discount).toFixed(2)}</div>
            <div className="text-xs ml-1">RSD</div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="text-center text-white text-lg w-full font-['Arial'] leading-[18px] bg-black rounded-[100px] py-3 px-3 mt-20"
      >
        Prijavi se za brže plaćanje
      </button>
    </div>
  );
};

export default CartDetails;
