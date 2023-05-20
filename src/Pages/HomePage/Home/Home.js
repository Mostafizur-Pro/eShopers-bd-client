import React from "react";
import useTitle from "../../../hooks/useTitle/useTitle";
import Sliderbanner from "../SliderBanner/Sliderbanner";
import TopSellingProduct from "../TopSellingProduct/TopSellingProduct";
import Banner from "../Banner/Banner";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Sliderbanner />
      <Banner />
      <TopSellingProduct />
    </div>
  );
};

export default Home;
