import React from "react";
import StarRating from "./StarRating";

const MenuItem = ({ image, name, price }) => {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>{price}</p>
      <div className="rating">
        <p>Rate this Product*</p>
        <StarRating />
      </div>
    </div>
  );
};

export default MenuItem;
