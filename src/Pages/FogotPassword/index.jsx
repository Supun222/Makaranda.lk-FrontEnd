import { Link } from "react-router-dom";
import MakarandaLogo from "../../Assets/Icons/Makaranda.lk.png";
import slide1 from "../../Assets/Images/loginOnboard/slide1.png";

function ForgotPassword() {
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
                />
                <label
                  htmlFor="floating_email"
                  className="font-Lato peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Enter you email address
                </label>
              </div>
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
    </div>
  );
}

export default ForgotPassword;
