import React from "react";
import organicImage from "../../../assete/OrganicNatural/picture01.jpg";
import Slide from "react-reveal/Slide";

const OrganicNatural = () => {
  return (
    <div>
      <div
        className="hero h-72 mb-10 "
        style={{ backgroundImage: `url(${organicImage})` }}
      >
        <Slide top>
          <div className="text-left  text-white">
            <p>TOP DISCOUNT</p>
            <h1 className="text-4xl font-bold">ORGANIC NATURAL</h1>
            <p>Top Quality Item Skincare</p>
            <button className="btn mt-5 btn-outline border-gray-50 text-white rounded-none">
              Read More
            </button>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default OrganicNatural;
