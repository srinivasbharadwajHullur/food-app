import { useState, useEffect } from "react";
import axios from "axios";
import { SWIGGY_URI } from "./constants";

const useFetchBestOffers = () => {
  const [loading, setLoading] = useState([]);
  const [bestOffers, setBestOffers] = useState([]);
  const [error, setError] = useState("");
  const fetchBestOffers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(SWIGGY_URI);
      setBestOffers(response.data.data.cards[0].card.card.imageGridCards.info);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBestOffers();
  }, []);
  return { loading, bestOffers, error };
};

export default useFetchBestOffers;
