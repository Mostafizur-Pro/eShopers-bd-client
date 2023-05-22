import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import loginAnimation from "../../../assete/Login/login.gif";
import logo from "../../../assete/logo/logo.PNG";

const Login = () => {
  const [users, setUsers] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = (data) => {};
  const handleGoogleSignIn = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    fetch(`https://e-shoppers-bd.vercel.app/users`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col  lg:flex-row">
          <div className="card hidden sm:flex flex-shrink-0 h-4/6 w-full max-w-sm ">
            <img
              alt=""
              src={loginAnimation}
              className="max-w-sm h-max rounded-lg "
            />
          </div>
          {/* sdfsdfskdfjskl */}
          <h2>{users.length}</h2>
          <div className="card flex-shrink-0 h-4/6 w-full max-w-sm ">
            <div className="  m-5">
              <div className="w-6/12">
                <Link to="/" className="  font-bold text-4xl flex">
                  <img className="w-16" src={logo} alt="" />
                  <span className="text-orange-400">Shoppers</span>
                </Link>
              </div>
            </div>
            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
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
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                {/* {loginError && <p className="text-red-600">{loginError}</p>} */}
              </div>
              <p>
                New to Doctors Portal{" "}
                <Link className="text-primary" to="/signup">
                  Create new Account
                </Link>
              </p>
              <div className="divider">OR</div>
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline w-full mb-12"
              >
                CONTINUE WITH GOOGLE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
