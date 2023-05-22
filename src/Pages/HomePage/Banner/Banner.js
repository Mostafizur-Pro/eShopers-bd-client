import React from "react";
import images1 from "../../../assete/Banner/images1.jpg";
import images3 from "../../../assete/Banner/images2.png";
import images2 from "../../../assete/Banner/images3.jpg";
import Fade from "react-reveal/Fade";

const Banner = () => {
  return (
    <div className="my-20 ">
      <section className="grid grid-cols-3 gap-5 h-full">
        <Fade left>
          <div className="col-span-1 ">
            <div
              className="hero min-h-full"
              style={{ backgroundImage: `url(${images1})` }}
            >
              <div className="hero-overlay bg-opacity-10"></div>
              <div className="hero-content  text-neutral-content">
                <div className="max-w-md text-black my-16">
                  <p className="">NEW ARRIVALS</p>
                  <h1 className="mb-5 text-3xl font-bold">TOTAL BODY WASH</h1>
                  <p className="mb-5">Top Quality Item Skincare</p>
                  <button className="btn btn-outline rounded-none">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade button>
          <div className="col-span-1">
            <div
              className="hero min-h-full"
              style={{ backgroundImage: `url(${images2})` }}
            >
              <div className="hero-overlay bg-opacity-50"></div>
              <div className="hero-content  text-neutral-content">
                <div className="max-w-md  my-16">
                  <p className="">BLACK FRIDAY</p>
                  <h1 className="mb-5 text-3xl font-bold">DISCOUNT MASK</h1>
                  <p className="mb-5">
                    Accusamus et iusto odgnissimos ducimusblanditiis praesentium{" "}
                  </p>
                  <button className="btn btn-outline rounded-none text-white">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="col-span-1">
            <div
              className="hero min-h-full"
              style={{ backgroundImage: `url(${images3})` }}
            >
              <div className="hero-overlay bg-opacity-10"></div>
              <div className="hero-content  text-neutral-content">
                <div className="max-w-md text-black my-16">
                  <p className="">BESTSELLER ITEM</p>
                  <h1 className="mb-5 text-3xl font-bold">FACIAL CREAM</h1>
                  <p className="mb-5">Top Quality Item Skincare</p>
                  <button className="btn btn-outline rounded-none">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default Banner;
