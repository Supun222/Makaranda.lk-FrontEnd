import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../axios/index";

function VisitorReg() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [username, setUsername] = useState();

  const handleReg = async (e) => {
    e.preventDefault();
    console.log(confirmPassword);
    try {
      await axios
        .post(
          "/user/signup/visitor",
          JSON.stringify({
            userRole: "VISITOR",
            username,
            email,
            password,
            active: true,
          }),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then((res) => console.log(res));
      toast.success("New location had added successfully");
    } catch (err) {
      console.log(JSON.stringify(err.message));
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
    <div>
      <form action="" className="mt-4 mx-auto" onSubmit={handleReg}>
        <div className="relative z-0 mb-3 w-full group">
          <input
            type="text"
            name="floating_username"
            id="floating_username"
            className="font-Lato block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <label
            htmlFor="floating_username"
            className="font-Lato peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Username
          </label>
        </div>
        <div className="relative z-0 mb-3 w-full group">
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
        <div className="relative z-0 mb-3 w-full group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="font-Lato block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
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
        <div className="relative z-0 mb-3 w-full group">
          <input
            type="password"
            name="floating_cpassword"
            id="floating_cpassword"
            className="font-Lato block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <label
            htmlFor="floating_cpassword"
            className="font-Lato peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm Password
          </label>
        </div>
        {/* <div className="mt-3">
          <div className="flex justify-center">
            <div className="mb-3 w-96">
              <label
                htmlFor="profilePic"
                className="form-label inline-block mb-2 text-gray-400 font-Lato text-base"
              >
                Profile Picture
              </label>
              <input
                className="form-control block w-full px-0.5 py-0.5 text-sm font-normal  text-gray-400  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-400 focus:bg-white focus:border-primary focus:outline-none"
                type="file"
                id="profilePic"
              />
            </div>
          </div>
        </div> */}
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="font-Lato font-medium rounded-md bg-primary pl-3 pr-3 ml-3 mt-3 md:w-52 xl:w-60 pt-0.5 pb-0.5 text-gray-100 hover:text-amber-50 border-2 border-primary hover:border-primary hover:bg-amber-600 hover:bg-tran transition-all hover:transition-all hover:ease-in-out hover:delay-50"
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default VisitorReg;
