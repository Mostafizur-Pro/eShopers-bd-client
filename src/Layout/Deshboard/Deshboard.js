import React from "react";
import Navber from "../../Pages/SharePage/Navber/Navber";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../Pages/SharePage/Footer/Footer";

const Deshboard = () => {
  return (
    <div>
      <Navber />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 ">
            <li>
              <Link to="/deshboard/allUser">All User</Link>
            </li>
            <li>
              <Link to="/dashboard/addproducts">Add a Products</Link>
            </li>
            <li>
              <Link to="/dashboard/myproducts">My Products</Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Deshboard;
