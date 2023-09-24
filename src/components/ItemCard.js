import React from 'react';
import {RESTAURANT_ITEM_IMAGE} from '../utils/constants';

const ItemCard = ({restaurantData}) => {
  return (
    <div className="m-4 w-[273px] transform transition-transform hover:scale-90">
      <img
        className="w-[273px] h-[182px] cursor-pointer rounded-xl"
        src={RESTAURANT_ITEM_IMAGE + restaurantData.cloudinaryImageId}
        alt='Restaurant Item Image'
      />
      <div className='mt-2'>
        <h1 className='font-bold text-xl'>{restaurantData.name}</h1>
        <p className='font-thin text-sm'>{restaurantData.avgRating}</p>
        <p className='font-thin text-sm'>{restaurantData.cuisines.join(", ")}</p>
        <p className='font-thin text-sm'>{restaurantData.areaName}</p>
      </div>
    </div>
  )
}

export default ItemCard