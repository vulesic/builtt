import React from "react";
import Logo from "../images/logo.svg";
import CartImg from "../images/cart.svg";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../lib/interfaces";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const cart = useSelector((state: RootState) => state.user.cart);
  const navigate = useNavigate();
  const handleCartClick = () => {
    navigate('/cart');
  }
  
  if (location.pathname === "/shop" || location.pathname === "/cart") {
    return (
      <div className="Header px-4 sm:px-8 md:px-16 flex justify-between items-center h-[69px] bg-[#F0F0F0;]">
        <div onClick={() => navigate('/shop')} className="cursor-pointer">
          <img src={Logo} alt="Logo Builtt" width={90} />
          <p className="text-[#7B868A] text-[7.5px] text-right">powered by Degordian</p>
        </div>
        <div className="relative cursor-pointer" onClick={handleCartClick}>
          <img src={CartImg} alt="Logo Builtt" width={23} />
          <div className="absolute top-1.5 left-0 text-[10px] w-[23px] text-center">{cart.length}</div>
        </div>
      </div>
    );
  }
  return <></>;
};

export default Header;
