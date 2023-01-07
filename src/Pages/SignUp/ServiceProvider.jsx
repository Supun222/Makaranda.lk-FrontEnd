import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

function ServiceProviderReg() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [username, setUsername] = useState();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    floating_email: Yup.string()
      .email("Invalid email")
      .required("Please enter the email"),
    floating_username: Yup.string()
      .required("Please enter the service name")
      .min(4, "Too Short!"),
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

  const handleReg = async () => {
    // e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(username);
    console.log(confirmPassword);
    try {
      const firstData = {
        newUsername: username,
        newEmail: email,
        newpassword: password,
      };
      localStorage.setItem("firstData", JSON.stringify(firstData));
      reset();
      navigate("/user/Service/new/servicedetails");
    } catch (err) {
      console.log(JSON.stringify(err.message));
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form
        action=""
        className="mt-4 mx-auto"
        onSubmit={handleSubmit(handleReg)}
      >
        <div className="relative z-0 mb-3 w-full group">
          <input
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("floating_username")}
            type="text"
            name="floating_username"
            id="floating_username"
            className="font-Lato block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e) => setUsername(e.target.value)}
          />
          <label
            htmlFor="floating_username"
            className="font-Lato peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Service name
          </label>
          <p className="text-xs text-red-500 mt-1">
            {errors.floating_username?.message}
          </p>
        </div>
        <div className="relative z-0 mb-3 w-full group">
          <input
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("floating_email")}
            type="email"
            name="floating_email"
            id="floating_email"
            className="font-Lato block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="floating_email"
            className="font-Lato peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
          <p className="text-xs text-red-500 mt-1">
            {errors.floating_email?.message}
          </p>
        </div>
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
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="font-Lato font-medium rounded-md bg-primary pl-3 pr-3 ml-3 mt-3 md:w-52 xl:w-60 pt-0.5 pb-0.5 text-gray-100 hover:text-amber-50 border-2 border-primary hover:border-primary hover:bg-amber-600 hover:bg-tran transition-all hover:transition-all hover:ease-in-out hover:delay-50"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default ServiceProviderReg;
