import React, { useRef } from "react";
import useFetchTopRestaurantData from "../utils/useFetchTopRestaurantData";
import { LEFT_ARROW_URI, RIGHT_ARROW_URI } from "../utils/constants";
import ItemCard from "./ItemCard";

const TopRestaurantChains = () => {
  const { loading, topRestaurantData, error } = useFetchTopRestaurantData();
  const containerRef = useRef(null);
  if (loading || topRestaurantData.length < 0) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }
  const scrollToLeft = () => {
    const container = containerRef.current;
    container.scrollBy({
      left: -300,
      behaviour: "smooth",
    });
  };

  const scrollToRight = () => {
    const container = containerRef.current;
    container.scrollBy({
      left: 300,
      behaviour: "smooth",
    });
  };
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Top Restaurant Chains </h1>
        <div className="flex">
          <img
            className="w-5 cursor-pointer mr-2"
            onClick={scrollToLeft}
            src={LEFT_ARROW_URI}
            alt="left arrow"
          />
          <img
            onClick={scrollToRight}
            className="w-5 cursor-pointer"
            src={RIGHT_ARROW_URI}
            alt="right arrow"
          />
        </div>
      </div>
      <div className="flex mt-2 overflow-x-scroll" ref={containerRef}>
        {topRestaurantData.map((restaurantData) => {
          return (
            <div key={restaurantData.info.id}>
              <ItemCard restaurantData={restaurantData.info} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRestaurantChains;
