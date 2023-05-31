import React from "react";
import Navber from "../../Pages/SharePage/Navber/Navber";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../Pages/SharePage/Footer/Footer";
import { AuthContext } from "../../contexts/AuthProvider";
import { useContext } from "react";
import useAdmin from "../../hooks/useAdmin/useAdmin";

const Deshboard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  console.log("admin", isAdmin);
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
            {isAdmin && (
              <>
                <li>
                  <Link to="/deshboard/allUser">All User</Link>
                </li>
                <li>
                  <Link to="/deshboard/addproducts">Add a Products</Link>
                </li>
                <li>
                  <Link to="/deshboard/myproducts">My Products</Link>
                </li>
              </>
            )}
            {!isAdmin && (
              <>
                <li>
                  <Link to="/deshboard/addproducts">Add a Products</Link>
                </li>
                <li>
                  <Link to="/deshboard/myproducts">My Products</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Deshboard;
