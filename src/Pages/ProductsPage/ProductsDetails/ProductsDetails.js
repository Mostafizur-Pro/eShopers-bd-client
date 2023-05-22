import React from "react";

const ProductsDetails = ({ courseItem }) => {
  return (
    // <div className="grid grid-cols-3 gap-5">
    <div className="grid grid-cols-3 gap-5">
      {courseItem.map((item) => (
        <>
          <div className=" mr-10">
            <img
              className="w-full hover:scale-110"
              src={item.image}
              alt="Drink"
            />
            <div className="text-center mt-5">
              <h2 className="font-bold">{item.title}</h2>
              <div className="flex text-center justify-center">
                <p className="text-orange-400 text-xl font-bold">
                  ${item.resalePrice}
                </p>
                <p className="text-gray-400 ml-5 line-through ">
                  ${item.originalPrice}
                </p>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ProductsDetails;
