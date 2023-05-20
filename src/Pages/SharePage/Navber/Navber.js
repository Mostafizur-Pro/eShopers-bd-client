import React from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
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
        <ul className="p-2 bg-gray-400  z-40  ">
          <li>
            <Link to="/categorydetails/Laptop">Laptop</Link>
          </li>
          <li>
            <Link to="/categorydetails/Monitor">Monitor</Link>
          </li>
          <li>
            <Link to="/categorydetails/Printer">Printer</Link>
          </li>
          <li>
            <Link to="/categorydetails/Desktop">Desktop</Link>
          </li>
          <li>
            <Link to="/categorydetails/Accessories">Accessories</Link>
          </li>
          <li>
            <Link to="/categorydetails/Products">Products</Link>
          </li>
        </ul>
        {/* <Link to="/categorydetails/laptop">Category List</Link> */}
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
        <ul className="p-2 bg-gray-400  z-40  ">
          <li>
            <Link to="/categorydetails/Laptop">Laptop</Link>
          </li>
          <li>
            <Link to="/categorydetails/Monitor">Monitor</Link>
          </li>
          <li>
            <Link to="/categorydetails/Printer">Printer</Link>
          </li>
          <li>
            <Link to="/categorydetails/Desktop">Desktop</Link>
          </li>
          <li>
            <Link to="/categorydetails/Accessories">Accessories</Link>
          </li>
          <li>
            <Link to="/categorydetails/Products">Products</Link>
          </li>
        </ul>
        {/* <Link to="/categorydetails/laptop">Category List</Link> */}
      </li>

      <li>
        <a>Blogs</a>
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
          <a className="btn btn-ghost normal-case font-bold text-4xl">e<span className="text-orange-400">Shoppers</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>
        <div className="collapse">
  <input type="checkbox" />
  <div className="btn btn-ghost btn-circle collapse-title text-xl font-medium">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </div>

  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
