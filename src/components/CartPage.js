import React, { useState } from "react";
import { CART_ITEM_IMAGE_URI } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementItemQuantity,
  decrementItemQuantity,
} from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getCartInformation = useSelector((state) => state.cart.cartItems);
  const incrementQuantity = (itemId) => {
    dispatch(incrementItemQuantity(itemId));
  };
  const decrementQuantity = (itemId) => {
    dispatch(decrementItemQuantity(itemId));
  };

  let totalPrice = 0;
  for (let i = 0; i <= getCartInformation.length - 1; i++) {
    totalPrice =
      totalPrice +
      (getCartInformation[i].price / 100) * getCartInformation[i].quantity;
  }
  //Calculate the discount
  const discount = 0.1;
  const discountedTotal = totalPrice - totalPrice * discount;

  //Calculate the delivery percentage
  const delivery = 0.07;
  const deliveryTotal = totalPrice * delivery;

  const goToSuccessPage = () => {
    navigate("/success")
  }
  return (
    <div className="p-20 flex justify-between">
      {/* Cart Items Content */}
      <div className="flex flex-col">
        {getCartInformation.map((information) => {
          return (
            <div
              key={information.id}
              className="flex items-center border border-gray-600 rounded mt-2 p-2 w-[700px]"
            >
              <div>
                <img
                  className="rounded cursor-pointer"
                  src={CART_ITEM_IMAGE_URI + information.imageId}
                  alt={information.name}
                />
              </div>
              <div className="ml-5">
                <h3 className="font-bold">{information.name}</h3>
                <p className="font-thin mt-2">{information.description}</p>
                <p className="font-extrabold mt-2">
                  Rs - {information.price / 100}
                </p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => decrementQuantity(information.id)}
                    className="border border-gray-400 p-1 w-10 rounded"
                  >
                    -
                  </button>
                  <p className="font-bold ml-5 mr-5">{information.quantity}</p>
                  <button
                    onClick={() => incrementQuantity(information.id)}
                    className="border border-gray-400 p-1 w-10 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Order Summary Content */}
      <div className="border border-gray-800 ml-4 p-4 w-[500px] rounded-sm">
        <h1 className="font-bold text-lg mb-2">Order Summary</h1>
        <hr className="border-gray-400 my-2" />

        <div className="mb-4">
          <h2 className="text-base font-semibold">Price</h2>
          <p className="text-gray-700">Rs {totalPrice.toFixed(2)}</p>
        </div>

        <div className="mb-4">
          <h2 className="text-base font-semibold">Discount (10%)</h2>
          <p className="text-gray-700">Rs {discountedTotal.toFixed(2)}</p>
        </div>

        <div className="mb-4">
          <h2 className="text-base font-semibold">Delivery (5%)</h2>
          <p className="text-gray-700">Rs {deliveryTotal.toFixed(2)}</p>
        </div>

        <hr className="border-gray-400 my-2" />

        <div className="mb-4">
          <p className="text-lg font-semibold">Grand Total</p>
          <p className="text-xl font-bold">
            Rs {(discountedTotal + deliveryTotal).toFixed(2)}
          </p>
        </div>

        <button onClick={goToSuccessPage} className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 w-52 hover:bg-blue-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
