import React from "react";
import ProductsCategories from "../ProductsCategories/ProductsCategories";
import ProductsDetails from "../ProductsDetails/ProductsDetails";
import { useLoaderData } from "react-router-dom";

const ProductsBody = () => {
  const categories = useLoaderData();
  console.log(categories);
  // const [categories, setCategories]
  return (
    <div className="grid grid-cols-3 mt-20">
      <div className="col-span-1">
        <ProductsCategories />
      </div>
      <div className="col-span-2">
        <ProductsDetails courseItem={categories}></ProductsDetails>
        {/* {categories.map((category) => (
          <ProductsDetails
            key={category._id}
            courseItem={category}
          ></ProductsDetails>
        ))} */}
      </div>
    </div>
  );
};

export default ProductsBody;
