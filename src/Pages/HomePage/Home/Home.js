import React from "react";
import useTitle from "../../../hooks/useTitle/useTitle";
import Sliderbanner from "../SliderBanner/Sliderbanner";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Sliderbanner />
    </div>
  );
};

export default Home;
