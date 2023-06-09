import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import signin from "../../../assete/signup/signup.png";
import logo from "../../../assete/logo/logo.PNG";
import { AuthContext } from "../../../contexts/AuthProvider";
import useTitle from "../../../hooks/useTitle/useTitle";

const Signup = () => {
  useTitle("SignUp");
  const { createUser, updateUser } = useContext(AuthContext);
  const imageHostKey = "07612646d9dabf5692e244b6b0ee5a6e";
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    createImage(data);

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        console.log(error);
      });
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

          updateUserProfile(userInfofirebase);

          saveUser(userInfo);
          // console.log('object', userInfo);
        }
      });
  };
  const updateUserProfile = (userInfofirebase) => {
    updateUser(userInfofirebase)
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const saveUser = (userInfo) => {
    fetch(
      "https://e-shoppers-bd-server-dmq5bw2u1-mostafizur-pro.vercel.app/users",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log("Server Save", data);
        setCreatedUserEmail(userInfo.email);
        navigate("/");
      });
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
