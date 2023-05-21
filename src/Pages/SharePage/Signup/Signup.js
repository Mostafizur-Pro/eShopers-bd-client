import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import signin from "../../../assete/signup/signup.png";
import logo from "../../../assete/logo/logo.PNG";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    // createImage(data);
    // createUser(data.email, data.password)
    //   .then((result) => {
    //     const user = result.user;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div>
      <div className="hero  ">
        <div className="hero-content flex-col  lg:flex-row">
          <div className="card flex-shrink-0  w-full max-w-lg ">
            <img alt="" src={signin} className="max-w-lg h-max " />
          </div>
          <div className="card flex-shrink-0  w-full max-w-sm ">
            <div className="  m-5">
              <div className="w-6/12">
                <Link to="/" className="  font-bold text-4xl flex">
                  <img className="w-16" src={logo} alt="" />
                  <span className="text-orange-400">Shoppers</span>
                </Link>
              </div>
            </div>
            <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label">Full Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: "Your name is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters or longer",
                    },
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {" "}
                  <span className="label">Forget Password?</span>
                </label>
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label">Number</span>
                </label>
                <input
                  type="text"
                  {...register("number", {
                    required: "Number is required",
                    minLength: {
                      value: 11,
                      message: "Number must be 11  longer",
                    },
                  })}
                  className="input input-bordered w-full max-w-xs"
                />

                {errors.number && (
                  <p className="text-red-600">{errors.number?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label"></span>
                  {/* <span className="label-alt">Alt label</span> */}
                </label>

                <select
                  {...register("usertype", {
                    required: "Must be selected user",
                  })}
                  className="select select-bordered"
                >
                  <option hidden selected>
                    Selected one
                  </option>
                  <option>Buyer</option>
                  <option>Seller</option>
                </select>
                {errors.usertype && (
                  <p className="text-red-600">{errors.usertype?.message}</p>
                )}
              </div>

              <div>
                <label className="label">
                  {" "}
                  <span className="label">Select Your Image</span>
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

              <div className="form-control mt-6">
                <button className="btn btn-primary">SignIn</button>
              </div>
              <p>
                Already have an account{" "}
                <Link className="text-primary" to="/login">
                  Please Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
