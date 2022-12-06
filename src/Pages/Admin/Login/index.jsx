import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "../../../axios/index";
import "react-toastify/dist/ReactToastify.css";
import MakarandaLogo from "../../../Assets/Icons/Makaranda.lk.png";
import { login } from "../../../Features/userSlice";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let response;
  // toast.configure();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-console
      response = await axios.post(
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
      setTimeout(navigate("/admin/dashboard"), 3000);
      toast.success("Successfully logged in");
    } catch (err) {
      // console.log(JSON.stringify(err.response?.data.errors));
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
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center w-1/5 mx-auto shadow-lg rounded-md p-5">
        <div className="flex flex-row items-center bg-slate-50 p-3 rounded-md">
          <img src={MakarandaLogo} alt="makaranda.lk" className="w-12" />
          <h3 className="font-Lato font-medium text-secondaryText ml-3">
            Makaranda.lk
          </h3>
        </div>
        <div className="w-full">
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="flex flex-col justify-center">
              <label htmlFor="email" className="font-Lato tracking-wide">
                Email
              </label>
              <input
                type="email"
                className="mt-2 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col justify-center mt-3 ">
              <label htmlFor="email" className="font-Lato tracking-wide">
                Password
              </label>
              <input
                type="password"
                className="mt-2 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassowrd(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="mt-5 w-full px-6 py-2.5  bg-blue-600  text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Login in
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default AdminLogin;
