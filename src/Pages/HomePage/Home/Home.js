import React from "react";
import useTitle from "../../../hooks/useTitle/useTitle";
import Sliderbanner from "../SliderBanner/Sliderbanner";
import TopSellingProduct from "../TopSellingProduct/TopSellingProduct";
import Banner from "../Banner/Banner";
import OrganicNatural from "../OrganicNatural/OrganicNatural";
import Comments from "../Comments/Comments";
import OurBlogs from "../OurBlogs/OurBlogs";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Sliderbanner />
      <Banner />
      <OrganicNatural />
      <TopSellingProduct />
      <Comments />
      <OurBlogs />
    </div>
  );
};

export default Home;
