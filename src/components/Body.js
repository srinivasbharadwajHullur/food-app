import React from 'react'
import BestOffers from './BestOffers'
import WhatsOnYourMind from './WhatsOnYourMind'
import TopRestaurantChains from './TopRestaurantChains'
import RestaurantContainer from './RestaurantContainer'

const Body = () => {
  return (
    <div className='p-12'>
        {/* Best Offers for you component */}
        <BestOffers />
        <hr className='mt-4'/>
        {/* Whats on your mind component */}
        <WhatsOnYourMind />
        <hr className='mt-4'/>
        {/* Top Restaurant Chains Component */}
        <TopRestaurantChains />
        <hr className='mt-4' />
        {/* Restaurant Container Component */}
        <RestaurantContainer />
    </div>
  )
}

export default Body