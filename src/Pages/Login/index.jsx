import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../axios/index";

import MakarandaLogo from "../../Assets/Icons/Makaranda.lk.png";
import slide1 from "../../Assets/Images/loginOnboard/slide1.png";
import { login } from "../../Features/userSlice";
// import Loader from "../../Components/Loader";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const form = useRef();

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/user/login",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      dispatch(
        login({
          username: response.data.username,
          token: response.data.token,
          role: response.data.role,
          loggedIn: true,
        })
      );
      console.log(response.data);
      setTimeout(navigate("/"), 3000);
      toast.success("Successfully logged in");
    } catch (err) {
      console.log(JSON.stringify(err.response?.data.errors));
      if (!err.response) {
        toast.error("Something went wronggg");
      } else if (err.response?.status === 404) {
        toast.error(err.response?.data.errors);
      } else if (err.response?.status === 400) {
        toast.error(err.response?.data.errors);
      } else if (err.response?.status === 500) {
        toast.error(err.response?.data.errors);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <main>
      <div className="flex justify-center items-center h-screen bg-quatery p-5">
        <div className="bg-white flex flex-row justify-center items-center rounded-md shadow-xl p-8">
          <div className="h-full w-full flex flex-col items-start ">
            <div className="flex flex-row justify-center w-full items-center mt-8">
              <img src={MakarandaLogo} alt="makaranda" className="w-12" />
              <h3 className="font-Lato font-medium text-secondaryText ml-3">
                Makaranda.lk
              </h3>
            </div>
            <div className="mx-auto m-5">
              <h4 className="font-Lato font-semibold text-xl text-primary tracking-wider">
                Login
              </h4>
              <form
                action="submit"
                className="mt-4 mx-auto"
                onSubmit={(e) => handleLogin(e)}
                ref={form}
              >
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="font-Lato block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    htmlFor="floating_email"
                    className="font-Lato peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="password"
                    name="floating_password"
                    id="floating_password"
                    className="font-Lato block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="floating_password"
                    className="font-Lato peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
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
          <div className="hidden md:flex justify-center items-center md:mr-2 lg:mr-10">
            <img
              src={slide1}
              alt="slider"
              className="md:w-[34rem] lg:w-[30rem] h-[27rem]"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}

export default Login;
