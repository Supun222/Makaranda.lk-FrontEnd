import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import MakarandaLogo from "../../Assets/Icons/Makaranda.lk.png";
import slide1 from "../../Assets/Images/loginOnboard/slide1.png";
// import Loader from "../../Components/Loader";

function Login() {
  const validationSchema = Yup.object().shape({
    Username: Yup.string().required("Please enter the username"),
    Password: Yup.string().required("Please enter the password"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const form = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFetch = () => {
    setIsLoading(true);
    fetch("http://localhost:3000/login")
      .then((respose) => respose.json())
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage("Unable to fetch user list");
        setIsLoading(false);
      });
  };

  console.log(isLoading);
  console.log(errorMessage);

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
                className="mt-4 mx-auto"
                onSubmit={handleSubmit()}
                ref={form}
              >
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register("Username")}
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="font-Lato block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <p className="text-xs text-red-500 ">
                    {errors.email?.message}
                  </p>
                  <label
                    htmlFor="floating_email"
                    className="font-Lato peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                  <p className="font-Lato text-xs text-red-500">
                    {errors.email?.message}
                  </p>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register("Password")}
                    type="password"
                    name="floating_password"
                    id="floating_password"
                    className="font-Lato block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_password"
                    className="font-Lato peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                  <p className="text-xs text-red-500 font-Lato">
                    {errors.email?.message}
                  </p>
                </div>
                <div className="flex justify-end">
                  <Link
                    to="/password/reset"
                    className=" text-blue-400 text-xs font-Lato font-semibold tracking-widest"
                  >
                    Fortgot your password ?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="font-Lato font-medium rounded-md bg-primary pl-3 pr-3 ml-3 mt-3 md:w-52 xl:w-60 pt-0.5 pb-0.5 text-gray-100 hover:text-amber-50 border-2 border-primary hover:border-primary hover:bg-amber-600 hover:bg-tran transition-all hover:transition-all hover:ease-in-out hover:delay-50"
                  onClick={handleFetch}
                >
                  Login
                </button>
              </form>
              <div className="flex flex-row justify-center mt-6 items-center">
                <p className="text-xs font-Lato font-normal tracking-widest text-gray-600">
                  Don&apos;t you have an account ?
                </p>
                <Link
                  to="/account/new/service"
                  className=" text-blue-400 text-xs font-Lato font-semibold tracking-wider ml-1"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex  h-full w-5/6 bg-white justify-end items-center rounded-md">
            <img
              src={slide1}
              alt="slider"
              className="pl-0 h-[26rem] absolute top-45 right-[27rem]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
