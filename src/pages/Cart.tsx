import React, { useEffect } from "react";
import CartProduct from "../components/Product/CartProduct";
import { useSelector } from "react-redux";
import { RootState } from "../lib/interfaces";
import { useNavigate } from "react-router-dom";
import CartDetails from "../components/CartDetails";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.user.cart);
  const navigate = useNavigate();
  const storedUserData = localStorage.getItem('userData');
  const userData = storedUserData ? JSON.parse(storedUserData) : null;

  useEffect(() => {
    if (!userData) {
      navigate('/');
    }
  }, [userData, navigate]);

  const handleBackToShop = () => {
    navigate("/shop");
  };

  return (
    <div className="Cart container mx-auto py-11">
      <h3 className="font-bold text-xl mb-7">Tvoja korpa</h3>
      {cart && cart.length ? (
        <div className="md:flex md:flex-row md:justify-between md:items-start">
          <div className="md:pr-8 mb-8 md:mb-8 w-full">
            {cart.map((product, index) => (
              <div key={product.id}>
                <CartProduct id={product.id} />
                {index + 1 < cart.length && <div className="border-b w-full my-4"></div>}
              </div>
            ))}
          </div>
          <CartDetails />
        </div>
      ) : (
        <div>
          Korpa je prazna,{" "}
          <div onClick={handleBackToShop} className="text-[blue] cursor-pointer">
            Nazad na prodavnicu.
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
