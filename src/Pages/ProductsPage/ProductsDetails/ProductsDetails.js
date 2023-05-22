import React from "react";
import { Link } from "react-router-dom";

const ProductsDetails = ({ courseItem }) => {
  const {
    _id,
    title,
    picture,
    details,
    price,
    oldPrice,
    size,
    collections,
    ProductType,
    Availability,
    category,
  } = courseItem;

  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="col-span-1 mr-10">
        <img className="w-full hover:scale-110" src={picture} alt="Drink" />
        <div className="text-center mt-5">
          <h2>01106 - Upholstered Simple</h2>
          <p className="text-gray-400">$93.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
