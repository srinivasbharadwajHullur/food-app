import React, { useState } from "react";
import useFetchRestaurants from "../utils/useFetchRestaurants";
import ItemCard from "./ItemCard";
import ButtonList from "./ButtonList";
import { useNavigate } from "react-router-dom";

const RestaurantContainer = () => {
  const navigate = useNavigate();
  const { loading, error, restaurants } = useFetchRestaurants();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  if (loading || restaurants.length < 0) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }

  const handleClick = (filterFunction) => {
    const filteredData = restaurants.filter(filterFunction);
    setFilteredRestaurants(filteredData);
  };

  // Search for restaurant
  const handleSearch = (searchTerm) => {
    const filteredData = restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRestaurants(filteredData);
  };

  //Define the button with array of obejcts
  const buttons = [
    {
      label: "Fast Delivery",
      filterFunction: (restaurant) => restaurant.info.sla.deliveryTime < 20,
    },
    {
      label: "Rating 4.0+",
      filterFunction: (restaurant) => restaurant.info.avgRating > 4.0,
    },
    {
      label: "Less than Rs 400",
      filterFunction: (restaurant) =>
        restaurant.info.feeDetails.totalFee / 10 < 400,
    },
  ];

  const handleClicks = (id) => {
    navigate("/restaurantmenu/" + id)
  }
  
  return (
    <div className="mt-5">
      <h1 className="font-bold">Restaurants with online food delivery</h1>
      {/* Place the Button Component here */}
      <div className="flex justify-evenly">
        <ButtonList buttons={buttons} onClick={handleClick} />
      </div>
      <div className="mt-5 flex justify-center">
        {/* Search Restaurant Here */}
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            handleSearch(e.target.value);
          }}
          className="border border-gray-500 rounded-sm w-[300px]"
          type="text"
          placeholder="Search For Restaurant..."
        />
      </div>
      <div className="mt-2 grid grid-cols-4 gap-4">
      {filteredRestaurants.length > 0
          ? filteredRestaurants.map((restaurantData) => {
              return (
                <div
                  key={restaurantData.info.id}
                >
                  <ItemCard restaurantData={restaurantData.info} />
                </div>
              );
            })
          : restaurants.map((restaurantData) => {
              return (
                <div
                  key={restaurantData.info.id}
                  onClick={() => handleClicks(restaurantData.info.id)}
                >
                  <ItemCard restaurantData={restaurantData.info} />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default RestaurantContainer;
