import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="text-center mt-32">
        {/* <img className="w-full" src={img} alt="" />{" "}
         */}
        <h1 className="text-9xl font-extrabold">404</h1>
        <p>COMPONENT NOT FOUND</p>
        <h3 className="text-3xl text-center font-bold m-3">
          NOTHNG TO SEE HERE!
        </h3>
        <p>
          The page are looking for has been moved or doesn’t exist anymore, if
          you like you can return to our homepage. If the problem persists,
          please send us an email to eshoppers-bd@gmail.com
        </p>
        <button className="btn btn-outline text-orange-400 font-bold mt-10">
          Continue Shopping ...
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
