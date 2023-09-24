import React, { useState, useEffect } from "react";
import axios from "axios";
import { SWIGGY_URI } from "./constants";

const useFetchWhatsOnYourMind = () => {
  const [loading, setLoading] = useState(false);
  const [itemCategories, setItemCategories] = useState([]);
  const [error, setError] = useState("");
  const fetchWhatsOnYourMindItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get(SWIGGY_URI);
      setItemCategories(
        response.data.data.cards[1].card.card.imageGridCards.info
      );
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchWhatsOnYourMindItems();
  }, []);
  return { loading, itemCategories, error };
};

export default useFetchWhatsOnYourMind;
