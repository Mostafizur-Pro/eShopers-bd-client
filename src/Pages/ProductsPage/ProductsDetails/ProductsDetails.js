import React, { useState } from "react";
import "./productsDetails.css";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import ProductBanner from "../ProductBanner/ProductBanner";

const ProductsDetails = ({ courseItem }) => {
  const [productId, setProductId] = useState(0);

  const handleId = (item) => {
    setProductId(item);
  };
  return (
    <div>
      <ProductBanner />
      {/* <div className="col-span-3">
        {item.category === productId.category && (
          <>
            <div
              className="hero h-64 mb-10"
              style={{ backgroundImage: `url(${contactImage})` }}
            >
              <div className="hero-overlay "></div>
              <div className="hero-content text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">
                    Products {productId.category}{" "}
                  </h1>

                  <div className="flex gap-2 items-center text-white border-orange-400">
                    <Link to="/">Home </Link>

                    <FaAngleRight />
                    <Link to="/products/spa">{productId.category}</Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div> */}

      <div className="grid grid-cols-3 gap-5">
        {courseItem.map((item) => (
          <>
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              className=" mr-10 relative  duration-300 hover:rounded-md visibleHead"
            >
              <img
                className="w-full hover:scale-110 item"
                src={item.image}
                alt="Drink"
              />
              <div className="text-center mt-5">
                <h2 className="font-bold">{item.title}</h2>
                <div className="flex text-center justify-center">
                  <p className="text-orange-400 text-xl font-bold">
                    ${item.resalePrice}
                  </p>
                  <p className="text-gray-400 ml-5 line-through ">
                    ${item.originalPrice}
                  </p>
                </div>
              </div>
              <div className="absolute top-[50%] -right-[5%] w-full z-50 btnX visibleOption">
                <h1 className="text-red-600 lg:text-xl capitalize font-Josefin font-bold">
                  <div className="flex gap-3">
                    <label
                      htmlFor="my-modal-4"
                      onClick={() => handleId(item)}
                      className="btn text-3xl"
                    >
                      <FaEye />
                    </label>
                    <label className="btn text-3xl">
                      <FaShoppingCart />
                    </label>
                  </div>
                </h1>
              </div>
            </div>
          </>
        ))}

        <div>
          {courseItem.map((item) => (
            <>
              {item._id === productId._id && (
                <>
                  <input
                    type="checkbox"
                    id="my-modal-4"
                    className="modal-toggle"
                  />
                  <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <label className="modal-box relative" htmlFor="">
                      <img className="w-full " src={item.image} alt="Drink" />
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="py-4">{item.product_details}</p>
                      <div className="flex text-left ">
                        <p className="text-orange-400 text-xl font-bold">
                          Price: ${item.resalePrice}
                        </p>
                        <p className="text-gray-400 ml-5 line-through ">
                          ${item.originalPrice}
                        </p>
                      </div>
                    </label>
                  </label>
                </>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
