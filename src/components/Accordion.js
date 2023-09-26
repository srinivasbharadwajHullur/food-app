import React, { useState, useEffect } from "react";
import { UP_ARROW_URI, DOWN_ARROW_URI } from "../utils/constants";
import ItemCategories from "./ItemCategories";

const Accordion = (restaurantData) => {
 const [showAccordion, setShowAccordion] = useState(true);
  if (!restaurantData.restaurantData.title) {
    return null;
  }
  
  const handleAccordionChange = () => {
    setShowAccordion(!showAccordion);
  };

  const arrowIcon = showAccordion ? UP_ARROW_URI : DOWN_ARROW_URI;
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold mt-2">
            {restaurantData.restaurantData.title}{" "}
          </h1>
        </div>
        <div>
          <img
            onClick={handleAccordionChange}
            className="w-6 cursor-pointer"
            src={arrowIcon}
            alt="Up Arrow"
          />
        </div>
      </div>
      <div>
        {showAccordion && <ItemCategories restaurantData={restaurantData.restaurantData.itemCards}/>}
      </div>
    </div>
  );
};

export default Accordion;
