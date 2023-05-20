import React from "react";
import img02 from "../../../assete/SliderBanner/img02.png";
import backgroundImg from "../../../assete/SliderBanner/img03.jpg";
import img04 from "../../../assete/SliderBanner/img04.png";
import img05 from "../../../assete/SliderBanner/img05.png";

const Sliderbanner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero "
            style={{
              backgroundImage: `url(${backgroundImg})`,
            }}
          >
            <div className="flex justify-around items-center w-full">
              <div className=" text-center  ">
                <h2 className=" text-5xl">Skin</h2>
                <h2 className=" text-5xl">Anti-aging</h2>
                <p className="text-lg mt-5">
                  Unique as the coffe beans is intended for this little scoop
                  will make your morning ritual a special
                </p>

                <button className="btn btn-outline mt-5 ">DISCOVER NOW</button>
              </div>
              <figure>
                <img className="w-full" src={img02} alt="Movie" />
              </figure>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero "
            style={{
              backgroundImage: `url(${backgroundImg})`,
            }}
          >
            <div className="flex justify-around items-center w-full">
              <div className=" text-center  ">
                <h2 className=" text-5xl">Skin</h2>
                <h2 className=" text-5xl">Lightening cream</h2>
                <p className="text-lg mt-5">
                  Unique as the coffe beans is intended for this little scoop
                  will make your morning ritual a special
                </p>

                <button className="btn btn-outline mt-5 ">DISCOVER NOW</button>
              </div>
              <figure>
                <img className="w-full" src={img04} alt="Movie" />
              </figure>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero "
            style={{
              backgroundImage: `url(${backgroundImg})`,
            }}
          >
            <div className="flex justify-around items-center w-full">
              <div className=" text-center  ">
                <h2 className=" text-5xl">Spray</h2>
                <h2 className=" text-5xl">Moisturizing</h2>
                <p className="text-lg mt-5">
                  Unique as the coffe beans is intended for this little scoop
                  will make your morning ritual a special
                </p>

                <button className="btn btn-outline mt-5 ">DISCOVER NOW</button>
              </div>
              <figure>
                <img className="w-full" src={img05} alt="Movie" />
              </figure>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sliderbanner;
