import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../Pages/SharePage/Navber/Navber";
import Footer from "../Pages/SharePage/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
