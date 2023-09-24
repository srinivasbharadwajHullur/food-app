import React, { useState, useEffect } from "react";
import axios from "axios";
import { SWIGGY_URI } from "./constants";

const useFetchTopRestaurantData = () => {
  const [loading, setLoading] = useState(false);
  const [topRestaurantData, setTopRestaurantData] = useState([]);
  const [error, setError] = useState("");
  const fetchTopRestaurantData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(SWIGGY_URI);
      setTopRestaurantData(
        response.data.data.cards[2].card.card.gridElements.infoWithStyle
          .restaurants
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  useEffect(() => {
    fetchTopRestaurantData();
  }, []);
  return { loading, topRestaurantData, error };
};

export default useFetchTopRestaurantData;
