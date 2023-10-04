import React from 'react';
import { Link } from 'react-router-dom'; 

const SuccessPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-semibold text-green-600 mb-4">Order Placed Successfully!</h1>
        <p className="text-gray-600 text-lg mb-4">Thank you for shopping with us. Your order has been successfully placed.</p>
        <p className="text-gray-600 text-lg mb-4">Order ID: #123456</p>
        <p className="text-gray-600 text-lg mb-4">Estimated Delivery Date: October 29, 2023</p>
        <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 inline-block text-lg">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
