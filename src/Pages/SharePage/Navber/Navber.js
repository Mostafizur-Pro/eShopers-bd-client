import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assete/logo/logo.PNG";

const Navber = () => {
  const [shopLists, setShopList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setShopList(data);
      });
  }, []);

  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        
        <a>
          Shop
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </a>
        <ul className="p-2 bg-white  z-40  ">
          {shopLists.map((shoplist) => (
            <li key={shoplist._id}>
              <Link to={`/collections/${shoplist?.title}`}>
                {shoplist?.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li>
        <a>
          Collection
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </a>
        <ul className="   ">
          <div className="flex w-40   p-2 bg-white z-20">
            {shopLists.map((shoplist) => (
               <li key={shoplist._id}>
                <Link to={`/collections/${shoplist?.title}`}>
                  <div className="card bg-base-100  shadow-xl ">
                    <figure>
                      <img
                        className="w-full "
                        src={shoplist.picture}
                        alt="imag"
                      />
                    </figure>
                    <div className="card-body w-0">
                      <h2 className="card-title text-center text-sm">
                        {shoplist?.name}
                      </h2>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </div>
        </ul>
      </li>

      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <div>
            <Link to="/" className="  font-bold text-4xl flex">
              <img className="w-16" src={logo} alt="" />
              <span className="text-orange-400">Shoppers</span>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>
        <div className="collapse">
          <input type="checkbox" />
          <div className="btn btn-ghost btn-circle collapse-title text-xl font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn btn-outline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
