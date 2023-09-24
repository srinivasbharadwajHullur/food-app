import React, { useRef } from "react";
import useFetchBestOffers from "../utils/useFetchBestOffers";
import {
  BEST_OFFERS_CARD,
  LEFT_ARROW_URI,
  RIGHT_ARROW_URI,
} from "../utils/constants";

const BestOffers = () => {
  const { loading, bestOffers, error } = useFetchBestOffers();
  const containerRef = useRef(null);
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
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error while fetching data...</div>;
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Best offers for you</h1>
        <div className="flex">
          <img
            onClick={scrollToLeft}
            className="w-5 cursor-pointer mr-2"
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
        {bestOffers.map((bestOffer) => {
          return (
            <div key={bestOffer.id} className="mr-5">
              <img
                className="cursor-pointer max-w-none w-[452px] h-[252px]"
                src={BEST_OFFERS_CARD + bestOffer.imageId}
                alt="Best Offers Card"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestOffers;
