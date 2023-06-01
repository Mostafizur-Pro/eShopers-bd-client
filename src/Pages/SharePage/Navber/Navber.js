import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assete/logo/logo.PNG";
import { AuthContext } from "../../../contexts/AuthProvider";
import axios from "axios";
import AllLoginUser from "../AllLoginUser/AllLoginUser";

const Navber = () => {
  const [shopLists, setShopList] = useState([]);
  const { user, logOut } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [sellerInfo] = AllLoginUser(user?.email);

  // console.log("sellerInfo", users);

  useEffect(() => {
    axios
      .get(
        "https://e-shoppers-bd-server-dmq5bw2u1-mostafizur-pro.vercel.app/users"
      )
      .then((data) => {
        const users = data.data;

        setUsers(users);
      });
  });

  useEffect(() => {
    fetch(
      "https://e-shoppers-bd-server-dmq5bw2u1-mostafizur-pro.vercel.app/categories"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setShopList(data);
      });
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

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
        <ul className="p-2 bg-white  z-40  ">
          {shopLists.map((shoplist) => (
            <li key={shoplist._id}>
              <Link to={`/products/${shoplist?.title}`}>{shoplist?.name}</Link>
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
                <Link to={`/products/${shoplist?.title}`}>
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

      {users.map((userData) => (
        <>
          {userData?.email === user?.email ? (
            <>
              {userData?.email ? (
                <>
                  {userData?.userType === "admin" && (
                    <>
                      <li>
                        <Link to="/deshboard/allUser">Dashboard</Link>
                      </li>
                    </>
                  )}
                  {userData?.userType === "normalUser" && (
                    <>
                      <li>
                        <Link to="/deshboard/addproducts">Dashboard</Link>
                      </li>
                    </>
                  )}
                  {!userData?.userType === "admin" && (
                    <>
                      <li>
                        <Link to="/deshboard/addproducts">Dashboard</Link>
                      </li>
                    </>
                  )}
                </>
              ) : (
                <>
                  {/* <li>
            <Link to="/login">Login</Link>
          </li> */}
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </>
      ))}
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

        <div className="navbar-end">
          {user?.email ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {users.map((mongodbUser) => (
                      <>
                        {mongodbUser.email === user?.email ? (
                          <img
                            alt="error"
                            src="https://img.favpng.com/1/20/21/businessperson-computer-icons-avatar-png-favpng-B8ky3XmC82yLn1QkdvZ17t1vC.jpg"
                          />
                        ) : (
                          <img alt="profilePic" src={user.photoURL} />
                          // // <p>{user.email}</p>
                          // <>{user.email}</>
                        )}
                      </>
                    ))}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/profile" className="justify-between">
                      Profile
                      <span className="badge border-secondary bg-secondary">
                        New
                      </span>
                    </Link>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li onClick={handleLogOut}>
                    <Link>Logout</Link>
                  </li>
                  {users.map((userData) => (
                    <>
                      {userData?.email === user?.email ? (
                        <>
                          {userData?.email ? (
                            <>
                              {userData?.userType === "admin" && (
                                <>
                                  <li>
                                    <Link to="/deshboard/allUser">
                                      Dashboard
                                    </Link>
                                  </li>
                                </>
                              )}
                              {userData?.userType === "normalUser" && (
                                <>
                                  <li>
                                    <Link to="/deshboard/addproducts">
                                      Dashboard
                                    </Link>
                                  </li>
                                </>
                              )}
                            </>
                          ) : (
                            <>
                              {/* <li>
            <Link to="/login">Login</Link>
          </li> */}
                            </>
                          )}
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <Link to="/login" className="btn  btn-outline">
              Login
            </Link>
          )}
          {/* {user?.email? (<>
          
          
          </>:<><Link to="/login" className="btn btn-outline">
            Login
          </Link></>)} */}
        </div>
      </div>
    </div>
  );
};

export default Navber;
