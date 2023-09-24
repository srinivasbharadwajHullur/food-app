import React, { useRef } from "react";
import useFetchWhatsOnYourMind from "../utils/useFetchWhatsOnYourMind";
import {
  WHATS_ON_YOUR_MIND_IMAGES,
  LEFT_ARROW_URI,
  RIGHT_ARROW_URI,
} from "../utils/constants";

const WhatsOnYourMind = () => {
  const { loading, itemCategories, error } = useFetchWhatsOnYourMind();
  const containerRef = useRef(null);
  if (loading || itemCategories.length < 0) {
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
        <h1 className="font-bold">What's on your mind? </h1>
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
        {itemCategories.map((itemCategory) => {
          return (
            <div key={itemCategory.id} className="mr-5">
              <img
                className="cursor-pointer max-w-none w-[144px] h-[180px]"
                src={WHATS_ON_YOUR_MIND_IMAGES + itemCategory.imageId}
                alt="Item Category Images"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatsOnYourMind;
