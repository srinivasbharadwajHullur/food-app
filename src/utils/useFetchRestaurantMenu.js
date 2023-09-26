import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { RESTAURANT_MENU_URI } from './constants';

const useFetchRestaurantMenu = (id) => {
    const [loading, setLoading] = useState(false);
    const [restaurantTitleDetails, setRestaurantTitleDetails] = useState([]);
    const [restaurantMenuData, setRestaurantMenuData] = useState([]);
    const [restaurantOffers, setRestaurantOffers] = useState([]);
    const [error, setError] = useState('')
    const fetchRestaurantMenu = async () => {
        setLoading(true)
        try {
            const response = await axios.get(RESTAURANT_MENU_URI + id);
            setRestaurantTitleDetails(response.data.data.cards[0].card.card.info);
            setRestaurantOffers(response.data.data.cards[1].card.card.gridElements.infoWithStyle.offers)
            setRestaurantMenuData(response.data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.slice(1, ))
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchRestaurantMenu()
    },[])
  return {restaurantTitleDetails,loading, restaurantMenuData, error, restaurantOffers}
}

export default useFetchRestaurantMenu