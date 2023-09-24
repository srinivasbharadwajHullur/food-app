import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { SWIGGY_URI } from './constants';

const useFetchRestaurants = () => {
    const [loading, setLoading] = useState(false);
    const [restaurants, setRestaurants] = useState([]);
    const [error, setError] = useState('');
    const fetchRestaurants = async () => {
        setLoading(true);
        try {
            const response = await axios.get(SWIGGY_URI);
            setRestaurants(response.data.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchRestaurants()
    },[])
  return {loading, restaurants, error}
}

export default useFetchRestaurants