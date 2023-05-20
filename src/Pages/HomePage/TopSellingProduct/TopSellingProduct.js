import React from "react";
import image01 from "../../../assete/TopSelling/01.webp";
import image02 from "../../../assete/TopSelling/02.webp";
import image03 from "../../../assete/TopSelling/03.webp";
import image04 from "../../../assete/TopSelling/04.webp";
import image05 from "../../../assete/TopSelling/05.webp";
import image06 from "../../../assete/TopSelling/06.webp";
import image07 from "../../../assete/TopSelling/07.webp";
import image08 from "../../../assete/TopSelling/08.webp";

const TopSellingProduct = () => {
  return (
    <div>
      <div className="text-center my-10">
        <h1 className="text-4xl font-semibold">Top Selling Products</h1>
        <p className="text-lg mt-2">
          Commodo sociosqu venenatis cras dolor sogittis integer luctus sem
          primis eget moecenos
        </p>
      </div>
      <div className="carousel ">
        <div className="carousel-item mr-10">
          <img className="w-3/6" src={image01} alt="Drink" />
        </div>
        <div className="carousel-item mr-10 ">
          <img className="w-3/6" src={image02} alt="Drink" />
        </div>
        <div className="carousel-item mr-10">
          <img className="w-3/6" src={image03} alt="Drink" />
        </div>
        <div className="carousel-item mr-10">
          <img className="w-3/6" src={image04} alt="Drink" />
        </div>
        <div className="carousel-item mr-10">
          <img className="w-3/6" src={image05} alt="Drink" />
        </div>
        <div className="carousel-item mr-10">
          <img className="w-3/6" src={image06} alt="Drink" />
        </div>
        <div className="carousel-item mr-10">
          <img className="w-3/6" src={image07} alt="Drink" />
        </div>
        <div className="carousel-item mr-10">
          <img className="w-3/6" src={image08} alt="Drink" />
        </div>
      </div>
    </div>
  );
};

export default TopSellingProduct;
