import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import OtpInput from "react-otp-input";
import MakarandaLogo from "../../Assets/Icons/Makaranda.lk.png";
import slide1 from "../../Assets/Images/loginOnboard/slide1.png";
import axios from "../../axios";

function OTPInsert() {
  const [OTP, setOTP] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setEmail(JSON.parse(localStorage.getItem("resetEmail")));
  }, []);

  const VerifyOTP = async () => {
    try {
      await axios.put("/OTP/verify", JSON.stringify({ email, OTPPass: OTP }), {
        headers: { "Content-Type": "application/json" },
      });
      navigate("/passwrod/recover");
    } catch (err) {
      // console.log(JSON.stringify(err.response?.status));
      if (!err.response) {
        toast.error("Something went wronggg");
      } else if (err.response?.status === 404) {
        toast.error(err.response?.data.message);
      } else if (err.response?.status === 409) {
        toast.error(err.response?.data.message);
      } else if (err.response?.status === 500) {
        toast.error(err.response?.data.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  useEffect(() => {
    console.log(OTP);
  }, [OTP]);

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
              <p className="font-Lato font-medium text-secondaryText text-sm mb-3 w-full">
                OTP number has sent to the {email}
              </p>
              <div className="relative z-0 mb-6 w-full group">
                <label
                  htmlFor="floating_email"
                  className="text-gray-500 text-lg font-Lato"
                >
                  Enter OTP number
                </label>
                <OtpInput
                  value={OTP}
                  onChange={setOTP}
                  focusStyle
                  numInputs={6}
                  containerStyle="flex justify-around mt-4"
                  inputStyle={{
                    width: "2.5rem",
                    height: "2.5rem",
                    fontSize: "1rem",
                    borderRadius: 4,
                    border: "2px solid rgba(0,0,0,0.3)",
                  }}
                />
              </div>
              <button
                type="button"
                className="font-Lato font-medium rounded-md bg-primary pl-3 pr-3 md:w-52 xl:w-full pt-0.5 pb-0.5 text-gray-100 hover:text-amber-50 border-2 border-primary hover:border-primary hover:bg-amber-600 hover:bg-tran transition-all hover:transition-all hover:ease-in-out hover:delay-50"
                onClick={VerifyOTP}
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

export default OTPInsert;
