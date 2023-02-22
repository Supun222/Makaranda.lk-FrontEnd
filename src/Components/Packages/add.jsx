import { useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import axios from "../../axios";

// eslint-disable-next-line react/prop-types
function AddPackage({ ProfilePic, profilename }) {
  const [name, setName] = useState();
  const [details, setDetails] = useState();
  const [price, setPrice] = useState();
  const { id } = useParams();

  const PostNamePackage = async () => {
    const newPak = {
      packageName: name,
      packageDetails: details,
      packagePrice: price,
    };
    try {
      await axios
        .post("/user/packages", {
          id,
          packages: newPak,
        })
        .then((res) => toast.success(res.message))
        .catch((err) => toast.error(err.message));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="modal fade fixed top-60 -left-52 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="AddPackage"
      tabIndex="-1"
      aria-labelledby="AddPackage"
      aria-hidden="true"
    >
      <div className="modal-dialog relative pointer-events-none w-auto">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-[50rem] pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <div className="flex flex-row items-center">
              <img
                src={ProfilePic}
                alt="profile"
                className="w-12 rounded-full"
              />
              <h2 className="ml-3 font-Lato text-xl font-semibold text-gray-500 capitalize">
                {profilename} - Booking
              </h2>
            </div>
          </div>
          <div className="modal-body relative p-4">
            <form>
              <div className="relative z-0 mb-6 w-full group p-2">
                <input
                  type="text"
                  name="floating_name"
                  id="floating_name"
                  className="font-Lato block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <label
                  htmlFor="floating_name"
                  className="font-Lato peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Package Name
                </label>
              </div>
              <div className="mb-3 w-full">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="font-Lato font-semibold text-gray-500 text-xl w-full"
                >
                  Description <span className="text-red-600"> *</span>
                </label>
                <div className="flex justify-center">
                  <div className="w-full mt-2">
                    <textarea
                      className=" form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-500  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:ring-orange-600 focus:ring-offset-orange-600 focus:outline-none "
                      id="details"
                      rows="3"
                      value={details}
                      placeholder="-- description --"
                      onChange={(e) => setDetails(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="relative z-0 mb-6 w-full group p-2">
                <input
                  type="number"
                  name="floating_price"
                  id="floating_price"
                  className="font-Lato block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={price}
                  required
                  onChange={(e) => setPrice(e.target.value)}
                />
                <label
                  htmlFor="floating_price"
                  className="font-Lato peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Package Price
                </label>
              </div>
            </form>
          </div>
          <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button
              type="button"
              className="p-2 pl-6 pr-6 bg-gray-50  text-gray-600 font-medium leading-tight uppercase rounded shadow-md  hover:bg-gray-50  hover:shadow-lg  focus:bg-gray-50  focus:shadow-lg focus:outline-none focus:ring-0  active:bg-gray-50  active:shadow-lg transition duration-150 ease-in-out ml-1"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="p-2 pl-6 pr-6 bg-blue-600  text-white font-medium leading-tight uppercase rounded shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
              data-bs-dismiss="modal"
              onClick={PostNamePackage}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPackage;
