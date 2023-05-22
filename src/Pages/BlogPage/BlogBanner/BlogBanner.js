import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import contactImage from "../../../assete/Contactpage/image-02.jpg";


const BlogBanner = () => {
    return (
        <div>
            <div
        className="hero h-96 mb-20"
        style={{ backgroundImage: `url(${contactImage})` }}
      >
        <div className="hero-overlay "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Life style </h1>

            <div className="flex gap-2 items-center text-white border-orange-400">
              <Link to="/">Home </Link>

              <FaAngleRight />
              <Link to="/contact">Lifestyle</Link>
            </div>
          </div>
        </div>
      </div>
            
        </div>
    );
};

export default BlogBanner;