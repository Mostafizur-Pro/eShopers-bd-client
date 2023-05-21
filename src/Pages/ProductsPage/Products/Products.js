import React from "react";
import ProductBanner from "../ProductBanner/ProductBanner";
import ProductsBody from "../ProductsBody/ProductsBody";

const Products = () => {
  return (
    <div className='mb-20'>
      <ProductBanner />
      <ProductsBody />
    </div>
  );
};

export default Products;
