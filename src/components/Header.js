import React from "react";
import { LOGO_URI, USER_ICON, CART_URI } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/")
  }

  const cartItems = useSelector(state => state.cart.cartItems)
  let count = 0;
  for(let i=0;i<=cartItems.length-1;i++) {
    count = count + cartItems[i].quantity
  }
  

  const goToCartPage = () => {
    navigate("/cart");
  }
  return (
    <div className="flex justify-around items-center shadow-md">
      <div className="flex items-center">
        <img
          className="w-20 cursor-pointer mr-2"
          src={LOGO_URI}
          alt="App Logo"
          onClick={goToHome}
        />
        <p className="underline font-semibold cursor-pointer hover:text-orange-400 mr-2">
          Home
        </p>
        <p className="cursor-pointer">Chikkalasandra, Bengaluru, 560061</p>
      </div>
      <div className="flex items-center">
        <img
          className="w-10 cursor-pointer mr-2"
          src={USER_ICON}
          alt="User Icon"
        />
        <div className="flex items-center">
          <img onClick={goToCartPage} className="w-10 cursor-pointer" src={CART_URI} alt="Cart Icon" />
          <p> - {count} </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
