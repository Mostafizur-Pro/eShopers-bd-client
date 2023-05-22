import React from "react";
import { Link } from "react-router-dom";

const ProductsDetails = ({ courseItem }) => {
  const {
    title,
    originalPrice,
    resalePrice,
    number,
    rating,
    category,
    product_details,
    image,
    userType,
  } = courseItem;

  return (
    <div className="grid grid-cols-3 gap-5">
      <div className=" mr-10">
        <img className="w-full hover:scale-110" src={image} alt="Drink" />
        <div className="text-center mt-5">
          <h2 className="font-bold">{title}</h2>
          <div className="flex text-center justify-center">
            <p className="text-orange-400 text-xl font-bold">${resalePrice}</p>
            <p className="text-gray-400 ml-5 line-through ">${originalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
