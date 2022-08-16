import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import MakarandaLogo from "../../Assets/Icons/Makaranda.lk.png";
import slide1 from "../../Assets/Images/loginOnboard/slide1.png";

function Login() {
  const validationSchema = Yup.object().shape({
    Username: Yup.string().required("Please enter the username"),
    Password: Yup.string().required("Please enter the password"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const form = useRef();

  return (
    <main>
      <div className="flex justify-center items-center h-screen bg-quatery">
        <div className="bg-white md:w-8/12 xl:w-5/12 md:h-2/6 xl:h-3/5 flex flex-row justify-center items-center rounded-md shadow-xl">
          <div className="h-full w-full flex flex-col items-start ">
            <div className="flex flex-row justify-center w-full items-center mt-8">
              <img src={MakarandaLogo} alt="makaranda" className="w-12" />
              <h3 className="font-Lato font-medium text-secondaryText ml-3">
                Makaranda.lk
              </h3>
            </div>
            <div className="mx-auto mt-8">
              <h4 className="font-Lato font-semibold text-xl text-primary tracking-wider">
                Login
              </h4>
              <form
                action="submit"
                className="mt-8 mx-auto"
                onSubmit={handleSubmit()}
                ref={form}
              >
                <div className="relative ml-3">
                  <input
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register("Username")}
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Name"
                    className="peer placeholder-transparent h-10 w-full p-2 border-2 border-gray-300 text-gray-900
                    hover:border-amber-700 focus:outline-none focus:border-amber-700 hover:transition-all hover:ease-in-out hover:delay-150 rounded-md"
                  />
                  <label
                    htmlFor="username"
                    className="absolute left-2.5 bg-white pl-1 pr-1 rounded-sm -top-3.5 text-gray-600 text-sm transition-all duration-500 ease-in-out peer-placeholder-shown:text-base 
                    peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-amber-700 peer-focus:text-sm peer-focus:font-semibold"
                  >
                    Username
                  </label>
                  <p className="ml-0 text-sm font-regular text-end text-red-500 transition-all duration-500 ease-in-out">
                    {errors.Username?.message}
                  </p>
                </div>
                <div className="relative ml-3 mt-5">
                  <input
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register("Password")}
                    id="password"
                    name="password"
                    type="text"
                    placeholder="Password"
                    className="peer placeholder-transparent h-10 w-full p-2 border-2 border-gray-300 text-gray-900
                    hover:border-amber-700 focus:outline-none focus:border-amber-700 hover:transition-all hover:ease-in-out hover:delay-150 rounded-md"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-2.5 bg-white pl-1 pr-1 rounded-sm -top-3.5 text-gray-600 text-sm transition-all duration-500 ease-in-out peer-placeholder-shown:text-base 
                    peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-amber-700 peer-focus:text-sm peer-focus:font-semibold"
                  >
                    Password
                  </label>
                  <p className="ml-0 text-sm font-regular text-end text-red-500 transition-all duration-500 ease-in-out">
                    {errors.Password?.message}
                  </p>
                </div>
                <div className="flex justify-end">
                  <Link
                    to="/password/reset"
                    className=" text-blue-400 text-xs mt-2 font-Lato font-semibold tracking-widest"
                  >
                    Fortgot your password ?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="font-Lato font-medium rounded-md bg-primary pl-3 pr-3 ml-3 mt-3 md:w-52 xl:w-60 pt-0.5 pb-0.5 text-gray-100 hover:text-amber-50 border-2 border-primary hover:border-primary hover:bg-amber-600 hover:bg-tran transition-all hover:transition-all hover:ease-in-out hover:delay-50"
                >
                  Login
                </button>
              </form>
              <div className="flex flex-row justify-center mt-6 items-center">
                <p className="text-xs font-Lato font-normal tracking-widest text-gray-600">
                  Don&apos;t you have an account ?
                </p>
                <Link
                  to="/account/newuser"
                  className=" text-blue-400 text-xs font-Lato font-semibold tracking-wider ml-1"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex h-full w-5/6 bg-white justify-end items-center rounded-md">
            <img src={slide1} alt="slider" className="pl-0 h-96 w-80 -mr-5" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
