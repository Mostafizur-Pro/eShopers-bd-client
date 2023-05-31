import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import useTitle from "../../../hooks/useTitle/useTitle";
import { Link } from "react-router-dom";

const Profile = () => {
  useTitle("Profile");
  // useTitle("Profile");
  const { user } = useContext(AuthContext);
  const [profilesData, setProfilesData] = useState([]);
  useEffect(() => {
    fetch(
      `https://e-shoppers-bd-server-dmq5bw2u1-mostafizur-pro.vercel.app/users/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProfilesData(data);
      });
  }, []);

  const { image, name, email, number, userType, role } = profilesData;
  console.log("user", user?.email);
  return (
    <div>
      <div className="text-center h-screen mt-96">
        {/* <img className="w-full" src={img} alt="" />{" "}
         */}
        <h1 className="text-9xl font-extrabold mb-10">Profile Working</h1>
        <p>COMPONENT NOT FOUND</p>
        <h3 className="text-3xl text-center font-bold m-3">
          NOTHNG TO SEE HERE!
        </h3>
        <p>
          The page are looking for has been moved or doesn’t exist anymore, if
          you like you can return to our homepage. If the problem persists,
          please send us an email to eshoppers-bd@gmail.com
        </p>

        <Link to="/">
          <button className="btn btn-outline text-orange-400 font-bold mt-10">
            Continue Shopping ...
          </button>
        </Link>
      </div>
      {/* <div>
          {profilesData?.email === user?.email && (
            <div className="hero min-h-screen bg-inherit ">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src={image}
                  alt=""
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-4xl mb-3 font-bold">Name: {name}</h1>
                  <p className="text-3xl mb-3 font-sm">
                    <span className="font-medium">Email : </span> {email}
                  </p>
                  <p className="text-3xl mb-3 font-sm">
                    <span className="font-medium">Phone Number : </span>{" "}
                    {number}
                  </p>
                  <p className="text-3xl mb-3 font-sm">
                    <span className="font-medium">User Type : </span>{" "}
                    <small className="text-green-900">{userType}</small>
                  </p>
                  <p className="text-3xl mb-3 font-sm">
                    <span className="font-medium">User : </span>{" "}
                    <small className="text-green-900">{role}</small>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div> */}
    </div>
  );
};

export default Profile;
