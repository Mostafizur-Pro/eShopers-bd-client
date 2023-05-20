import React from "react";
import useTitle from "../../../hooks/useTitle/useTitle";
import Sliderbanner from "../SliderBanner/Sliderbanner";
import TopSellingProduct from "../TopSellingProduct/TopSellingProduct";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Sliderbanner />
      <TopSellingProduct />
    </div>
  );
};

export default Home;
