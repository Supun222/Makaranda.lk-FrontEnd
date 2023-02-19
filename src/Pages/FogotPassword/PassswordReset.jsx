import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "../../axios";
import MakarandaLogo from "../../Assets/Icons/Makaranda.lk.png";
import slide1 from "../../Assets/Images/loginOnboard/slide1.png";

function PasswordReset() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [confirmPassword, setConfirmPassword] = useState();

  useEffect(() => {
    setEmail(JSON.parse(localStorage.getItem("resetEmail")));
  }, []);

  const validationSchema = Yup.object().shape({
    floating_password: Yup.string()
      .required("Password is required")
      .min(6, "at least 6 digits need for password"),
    floating_cpassword: Yup.string()
      .oneOf([Yup.ref("floating_password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState, reset } = useForm(formOptions);
  const { errors } = formState;

  const UpdateUser = async () => {
    try {
      await axios
        .put("/user/recover_password", JSON.stringify({ email, password }), {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => toast.success(res.data.message))
        .catch((err) => console.log(err));
      reset();
    } catch (err) {
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
            <form className="mt-4 mx-auto" onSubmit={handleSubmit(UpdateUser)}>
              <div className="relative z-0 mb-3 w-full group">
                <input
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("floating_password")}
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  className="font-Lato block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  htmlFor="floating_password"
                  className="font-Lato peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
                <p className="text-xs text-red-500 mt-1">
                  {errors.floating_password?.message}
                </p>
              </div>
              <div className="relative z-0 mb-3 w-full group">
                <input
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("floating_cpassword")}
                  type="password"
                  name="floating_cpassword"
                  id="floating_cpassword"
                  className="font-Lato block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label
                  htmlFor="floating_cpassword"
                  className="font-Lato peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Confirm Password
                </label>
                <p className="text-xs text-red-500 mt-1">
                  {errors.floating_cpassword?.message}
                </p>
              </div>
              <button
                type="submit"
                className="font-Lato font-medium rounded-md bg-primary pl-3 pr-3 md:w-52 xl:w-full pt-0.5 pb-0.5 text-gray-100 hover:text-amber-50 border-2 border-primary hover:border-primary hover:bg-amber-600 hover:bg-tran transition-all hover:transition-all hover:ease-in-out hover:delay-50"
                // onClick={UpdateUserCredentials}
              >
                Submit
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

export default PasswordReset;
