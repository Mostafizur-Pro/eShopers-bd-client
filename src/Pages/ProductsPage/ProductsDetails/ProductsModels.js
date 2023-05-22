import React from "react";

const ProductsModels = ({ item }) => {
  //   console.log(item._id);
  return (
    <div>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <img className="w-full " src={item.image} alt="Drink" />
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="py-4">{item.product_details}</p>
          <div className="flex text-left ">
            <p className="text-orange-400 text-xl font-bold">
              Price: ${item.resalePrice}
            </p>
            <p className="text-gray-400 ml-5 line-through ">
              ${item.originalPrice}
            </p>
          </div>
        </label>
      </label>
    </div>
  );
};

export default ProductsModels;
