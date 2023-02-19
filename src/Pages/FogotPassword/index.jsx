import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import MakarandaLogo from "../../Assets/Icons/Makaranda.lk.png";
import slide1 from "../../Assets/Images/loginOnboard/slide1.png";
import axios from "../../axios";

function ForgotPassword() {
  const [email, setEmail] = useState();

  const SendOTP = async () => {
    try {
      await axios
        .post("/OTP/new", JSON.stringify({ email }), {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((res) => {
          toast.success(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-quatery p-5">
      <div className="bg-white flex flex-row justify-center items-center rounded-md shadow-xl p-8">
        <div className="h-full w-full flex flex-col justify-around">
          <Link
            to="/"
            className="flex flex-row justify-center w-full items-center mt-2"
          >
            <img src={MakarandaLogo} alt="makaranda" className="w-12" />
            <h3 className="font-Lato font-medium text-secondaryText ml-3">
              Makaranda.lk
            </h3>
          </Link>
          <div className="mx-auto m-5">
            <h4 className="font-Lato font-semibold text-xl text-primary tracking-wider">
              Password recover password
            </h4>
            <form action="submit" className="mt-4 mx-auto">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="font-Lato block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label
                  htmlFor="floating_email"
                  className="font-Lato peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Enter you email address
                </label>
              </div>
              <button
                type="button"
                className="font-Lato font-medium rounded-md bg-primary pl-3 pr-3 ml-3 mt-3 md:w-52 xl:w-60 pt-0.5 pb-0.5 text-gray-100 hover:text-amber-50 border-2 border-primary hover:border-primary hover:bg-amber-600 hover:bg-tran transition-all hover:transition-all hover:ease-in-out hover:delay-50"
                onClick={SendOTP}
              >
                Enter
              </button>
            </form>
            <div className="flex flex-row justify-center mt-6 items-center">
              <p className="text-xs font-Lato font-normal tracking-widest text-gray-600">
                Already have an account ?
              </p>
              <Link
                to="/login"
                className=" text-blue-400 text-xs font-Lato font-semibold tracking-wider ml-1"
              >
                Sign In
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
      <ToastContainer />
    </div>
  );
}

export default ForgotPassword;
