import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchRestaurantMenu from '../utils/useFetchRestaurantMenu';
import Accordion from './Accordion';

const RestaurantMenu = () => {
    const { id } = useParams();
    const {loading, restaurantMenuData,error,restaurantTitleDetails,restaurantOffers} = useFetchRestaurantMenu(id);
    if (loading || restaurantTitleDetails.length < 0 || !restaurantTitleDetails.sla) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error...</div>
    }
   
  return (
    <div className='p-[130px]'>
        <div className='flex justify-between'>
            <div>
                <h1 className='font-bold'>{restaurantTitleDetails.name}</h1>
                <p className='mt-2 font-thin'>{restaurantTitleDetails.cuisines}</p>
                <p className='mt-2 font-thin'>{restaurantTitleDetails.areaName}, {restaurantTitleDetails.sla.lastMileTravelString}</p>
                <p className='mt-2 font-thin'>{restaurantTitleDetails.feeDetails.message}</p>
            </div>
            <div className='flex flex-col items-center border border-gray-200 rounded-md p-2 h-[100px]'>
                <h1 className='text-green-600 font-semibold'>{restaurantTitleDetails.avgRating}</h1>
                <hr className='mt-1 border-dotted'/>
                <p className='mt-1 text-gray-500 font-thin'>{restaurantTitleDetails.totalRatingsString}</p>
            </div>
        </div>
        <hr className='mt-8 border-dotted'/>
        <div className='flex justify-between mt-4'>
            {restaurantOffers.map((offers) => {
                return (
                    <div key={offers.info.header} className='w-[200px] border border-gray-400 p-2 rounded-md cursor-pointer'>
                        <h2 className='font-extrabold'>{offers.info.header}</h2>
                        <p className='font-thin text-xs mt-2'>{offers.info.couponCode} | {offers.info.description}</p>
                    </div>
                )
            })}
        </div>
        <hr className='mt-8'/>
        <div>
            {restaurantMenuData.map((restaurantData) => {
                return (
                    <div key={restaurantData.card.card.title}>
                        <Accordion restaurantData={restaurantData.card.card}/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default RestaurantMenu