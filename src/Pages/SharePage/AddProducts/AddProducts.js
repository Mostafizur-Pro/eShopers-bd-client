import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useTitle from "../../../hooks/useTitle/useTitle";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const imageHostKey = "07612646d9dabf5692e244b6b0ee5a6e";

const AddProducts = () => {
  useTitle("Add_Products");
  //   const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  //   const [sellerInfo] = SellerInfo(user?.email);
  //   const [imgbb, setImgbb] = useState("");

  const {
    register,
    handleSubmit: handleProduct,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data) => {
    console.log("data", data);
    createImage(data);
  };
  const createImage = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const userInfo = {
            ...data,
            name: data.name,
            email: data.email,
            number: data.number,
            image: imgData.data.url,
            userType: "normalUser",
          };

          const userInfofirebase = {
            displayName: data.name,
            photoURL: imgData.data.url,
          };

          //   updateUserProfile(userInfofirebase);

          saveUser(userInfo);
          // console.log('object', userInfo);
        }
      });
  };

  const saveUser = (addProduct) => {
    console.log("saveuser", addProduct);
    fetch(
      "https://e-shoppers-bd-server-dmq5bw2u1-mostafizur-pro.vercel.app/addProduct",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success("Product add");
          //   navigate("/deshboard/myproducts");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <div className="max-w-lg ">
        <h3 className="text-2xl text-center font-bold mt-10">
          Add Your Selling Product
        </h3>
        <form
          onSubmit={handleProduct(handleAddProduct)}
          className="grid grid-cols-1 gap-3 mt-10"
        >
          <label className="label">
            {" "}
            <span className="label ">
              Product Name <span className="text-red-400">*</span>
            </span>
          </label>
          <input
            type="text"
            {...register("title", {
              required: "Your product name is required",
            })}
            className="input input-bordered w-full max-w-lg"
          />
          {errors.title && (
            <p className="text-red-600">{errors.title?.message}</p>
          )}

          <div className="flex justify-between">
            <div>
              <label className="label">
                {" "}
                <p className="label">
                  Original Price <span className="text-red-400">*</span>
                </p>
              </label>
              <input
                type="text"
                {...register("originalPrice", {
                  required: "Your product original price is required",
                })}
                className="input input-bordered w-full max-w-lg"
              />
              {errors.originalPrice && (
                <p className="text-red-600">{errors.originalPrice?.message}</p>
              )}
            </div>
            <div>
              <label className="label">
                {" "}
                <p className="label">
                  Price <span className="text-red-400">*</span>
                </p>
              </label>
              <input
                type="text"
                {...register("resalePrice", {
                  required: "Your product price is required",
                })}
                className="input input-bordered w-full max-w-lg"
              />
              {errors.resalePrice && (
                <p className="text-red-600">{errors.resalePrice?.message}</p>
              )}
            </div>
          </div>
          {/* <label className="label">
            {" "}
            <span className="label">Product Condition</span>
          </label>

          <select
            {...register("condition", {
              required: "Must be selected user",
            })}
            className="select select-bordered  max-w-lg"
          >
            <option hidden selected>
              Selected one
            </option>
            <option>Excellent</option>
            <option>Good</option>
            <option>Fair</option>
          </select>
          {errors.condition && (
            <p className="text-red-600">{errors.condition?.message}</p>
          )} */}

          <label className="label">
            {" "}
            <p className="label">
              Mobile Number <span className="text-red-400">*</span>
            </p>
          </label>
          <input
            type="text"
            {...register("number", {
              required: "Enter your mobile number is required",
            })}
            className="input input-bordered w-full max-w-lg"
          />
          {errors.number && (
            <p className="text-red-600">{errors.number?.message}</p>
          )}
          <div className="flex justify-between">
            <div>
              <label className="label">
                {" "}
                <p className="label">
                  Rating <span className="text-red-400">*</span>
                </p>
              </label>
              <input
                type="number"
                {...register("rating", {
                  required: "Enter your rating is required",
                  min: 1,
                  max: 5,
                })}
                className="input input-bordered w-full max-w-lg"
              />
              {errors.number && (
                <p className="text-red-600">{errors.rating?.message}</p>
              )}
            </div>
            <div className="ml-10">
              <label className="label">
                {" "}
                <p className="label">
                  Category <span className="text-red-400">*</span>
                </p>
              </label>
              <select
                {...register("category", {
                  required: "Must be selected location",
                })}
                className="select select-bordered max-w-lg"
              >
                <option hidden selected>
                  Select Your Product Category
                </option>
                <option>spa</option>
                <option>beauty</option>
                <option>makeup</option>
                <option>skincare</option>
                <option>bbcreams</option>
              </select>
              {errors.category && (
                <p className="text-red-600">{errors.category?.message}</p>
              )}
            </div>
          </div>

          <label className="label">
            {" "}
            <p className="label">
              Product Details <span className="text-red-400">*</span>
            </p>
          </label>
          <input
            type="textarea"
            {...register("product_details", {
              required: "Your product uesd year is required",
            })}
            className="textarea h-24 input-bordered w-full max-w-lg"
          />
          {errors.product_details && (
            <p className="text-red-600">{errors.product_details?.message}</p>
          )}
          <div>
            <label className="label">
              {" "}
              <p className="label">
                Select Your Image <span className="text-red-400">*</span>
              </p>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "Photo is Required",
              })}
              className=" input-bordered w-full max-w-xs"
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>

          <br />
          {/* <input className="btn btn-accent w-full" type="submit" value="Submit" /> */}
          {/* The button to open modal */}
          <label htmlFor="my-modal" className="btn">
            open modal
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Do you Add your Product, Please Submit !
              </h3>
              {/* <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p> */}
              <div className="modal-action">
                <input
                  className="btn btn-outline "
                  type="submit"
                  value="Submit"
                />
                <label
                  htmlFor="my-modal"
                  type="submit"
                  value="Submit"
                  className="btn"
                >
                  Cancel
                </label>
                {/* <input className="btn btn-accent w-full" type="submit" value="Submit" /> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
