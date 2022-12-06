import React from "react";
import { Link, Outlet } from "react-router-dom";
import slide1 from "../../Assets/Images/loginOnboard/slide1.png";
import MakarandaLogo from "../../Assets/Icons/Makaranda.lk.png";

// // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, no-unused-vars
// function Fragments({ activeStep }: any) {
//   switch (activeStep) {
//     case 1:
//       return (
//         <>
//           <h1>This is page one</h1>
//           <button type="button">Click me</button>
//         </>
//       );
//     default:
//       break;
//   }
// }

function SignUp() {
  // const [pageCount, setPageCount] = useState(1);
  return (
    <div className="flex justify-center items-center h-screen bg-quatery p-5">
      <div className="bg-white flex flex-row justify-center items-center rounded-md shadow-xl p-8">
        <div className="h-full w-full flex flex-col items-start ">
          <Link
            to="/"
            className="flex flex-row justify-center w-full items-center mt-2"
          >
            <img src={MakarandaLogo} alt="makaranda" className="w-12" />
            <h3 className="font-Lato font-medium text-secondaryText ml-3">
              Makaranda.lk
            </h3>
          </Link>
          <div className="mx-auto m-5 mt-2">
            <h4 className="font-Lato font-semibold text-xl text-primary tracking-wider">
              Sign Up
            </h4>
            <div className="flex flex-row items-center justify-center m-3">
              <Link
                to="/user/visitor/new"
                className="border border-gray-500 p-1 hover:bg-slate-100 rounded-md mr-3 w-36 text-center font-Lato text-gray-500 font-semibold"
              >
                Visitor
              </Link>
              <Link
                to="/user/Service/new"
                className="border border-gray-500 p-1 hover:bg-slate-100 rounded-md  w-36 text-center font-Lato text-gray-500 font-semibold"
              >
                Servie Provider
              </Link>
            </div>
            <Outlet />
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

export default SignUp;
