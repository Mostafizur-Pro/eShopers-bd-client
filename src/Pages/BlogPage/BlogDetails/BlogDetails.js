import React from 'react';
import image01 from "../../../assete/OurBlogs/01.webp";
import image02 from "../../../assete/OurBlogs/02.webp";
import image03 from "../../../assete/OurBlogs/03.webp";
import image04 from "../../../assete/OurBlogs/04.webp";
import image05 from "../../../assete/OurBlogs/05.webp";
import image06 from "../../../assete/OurBlogs/06.webp";

const BlogDetails = () => {
    return (
        <div>
               <div className="">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold">Our Blog</h1>
          <p className="text-lg mt-2">
            News posuere augue, vitae condimentum sapien dignission
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-1 mr-10">
            <img className="w-full hover:scale-110" src={image01} alt="Drink" />
            <div className="text-left mt-5">
              <h2 className="font-bold">Light Solutions for Interior</h2>
              <p className="text-orange-300">
                {" "}
                <span className="text-gray-400">Post by</span> Mr. Mostafiz
              </p>
              <p className="mt-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it -
              </p>
              <p className="text-orange-500 font-bold underline mt-5">
                Read more
              </p>
            </div>
          </div>
          <div className="col-span-1 mr-10 ">
            <img className="w-full hover:scale-110" src={image02} alt="Drink" />
            <div className="text-left mt-5">
              <h2 className="font-bold">Light Solutions for Interior</h2>
              <p className="text-orange-300">
                {" "}
                <span className="text-gray-400">Post by</span> Mr. Mostafiz
              </p>
              <p className="mt-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it -
              </p>
              <p className="text-orange-500 font-bold underline mt-5">
                Read more
              </p>
            </div>
          </div>
          <div className="col-span-1 mr-10">
            <img className="w-full hover:scale-110" src={image03} alt="Drink" />
            <div className="text-left mt-5">
              <h2 className="font-bold">Light Solutions for Interior</h2>
              <p className="text-orange-300">
                {" "}
                <span className="text-gray-400">Post by</span> Mr. Mostafiz
              </p>
              <p className="mt-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it -
              </p>
              <p className="text-orange-500 font-bold underline mt-5">
                Read more
              </p>
            </div>
          </div>
          <div className="col-span-1 mr-10">
            <img className="w-full hover:scale-110" src={image04} alt="Drink" />
            <div className="text-left mt-5">
              <h2 className="font-bold">Light Solutions for Interior</h2>
              <p className="text-orange-300">
                {" "}
                <span className="text-gray-400">Post by</span> Mr. Mostafiz
              </p>
              <p className="mt-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it -
              </p>
              <p className="text-orange-500 font-bold underline mt-5">
                Read more
              </p>
            </div>
          </div>
          <div className="col-span-1 mr-10">
            <img className="w-full hover:scale-110" src={image05} alt="Drink" />
            <div className="text-left mt-5">
              <h2 className="font-bold">Light Solutions for Interior</h2>
              <p className="text-orange-300">
                {" "}
                <span className="text-gray-400">Post by</span> Mr. Mostafiz
              </p>
              <p className="mt-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it -
              </p>
              <p className="text-orange-500 font-bold underline mt-5">
                Read more
              </p>
            </div>
          </div>
          <div className="col-span-1 mr-10">
            <img className="w-full hover:scale-110" src={image06} alt="Drink" />
            <div className="text-left mt-5">
              <h2 className="font-bold">Light Solutions for Interior</h2>
              <p className="text-orange-300">
                {" "}
                <span className="text-gray-400">Post by</span> Mr. Mostafiz
              </p>
              <p className="mt-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it -
              </p>
              <p className="text-orange-500 font-bold underline mt-5">
                Read more
              </p>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default BlogDetails;