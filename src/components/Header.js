import React from "react";
import { LOGO_URI, USER_ICON, CART_URI } from "../utils/constants";

const Header = () => {
  return (
    <div className="flex justify-around items-center shadow-md">
      <div className="flex items-center">
        <img
          className="w-20 cursor-pointer mr-2"
          src={LOGO_URI}
          alt="App Logo"
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
          <img className="w-10 cursor-pointer" src={CART_URI} alt="Cart Icon" />
          <p> - 0 </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
