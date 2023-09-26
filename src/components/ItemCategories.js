import React from 'react';
import { RESTAURANT_ITEM_IMAGE_URI } from '../utils/constants';

const ItemCategories = ({ restaurantData }) => {
  if (!restaurantData) {
    return null;
  }

  return (
    <div>
      {restaurantData.map((restaurant) => {
        return (
          <div
            key={restaurant.card.info.id}
            className="bg-white rounded-lg shadow-md p-4 mb-4 flex justify-between items-center"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">
                {restaurant.card.info.name}
              </h3>
              <p className="text-gray-600 mb-2">
                Rs - {restaurant.card.info.price / 100}
              </p>
              <p className="text-gray-700">{restaurant.card.info.description}</p>
            </div>
            <div className="flex flex-col items-center space-x-4">
              <img
                className="rounded w-28 h-28 cursor-pointer"
                src={RESTAURANT_ITEM_IMAGE_URI + restaurant.card.info.imageId}
                alt="Restaurant Menu Item"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 w-28">
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCategories;
