/* eslint-disable prefer-const */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import axios from "../../axios";
import PackageIcon from "../../Assets/Icons/Svgs/Package";
import ProfilePic from "../../Assets/Images/Profile/profile.jpg";
import { selectUser } from "../../Features/userSlice";
import ResetIcon from "../../Assets/Icons/Svgs/Reset";

function Packages() {
  const [bookDate, setBookDate] = useState();
  const [packageName, setPackageName] = useState();
  const [madeBy, setMadeBy] = useState();
  const [Owner, setOwner] = useState();
  const [packageIndex, setPackageIndex] = useState();
  const [Editablepackage, setEditablepackage] = useState({
    packageName: String,
    packageDetails: String,
    packagePrice: String,
  });
  const [oldPacks, setOldpacks] = useState([]);

  // edit packs
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [details, setDetails] = useState();
  const [profilename, setProfilename] = useState();
  const [profilePic, setProfilePic] = useState();
  // const [today, setToday] = useState();

  const user = useSelector(selectUser);
  const { id } = useParams();

  const loadPackages = async () => {
    try {
      console.log("reload");
      axios.get(`/user/user/${id}`).then((res) => {
        setOldpacks(res.data.packages);
        setProfilename(res.data.username);
        setProfilePic(res.data.profile_pic);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user) {
      setMadeBy(user.userID);
      setOwner(user.userID);
    }
    loadPackages();
  }, []);

  useEffect(() => {
    // console.log(Editablepackage);
    setName(Editablepackage.packageName);
    setDetails(Editablepackage.packageDetails);
    setPrice(Editablepackage.packagePrice);
  }, [packageIndex]);

  const submitBook = async () => {
    try {
      await axios
        .post(
          "/booking/new",
          JSON.stringify({
            // eslint-disable-next-line camelcase
            profile_id: id,
            made_by: madeBy,
            package_name: packageName,
          }),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then((res) => console.log(res));
      toast.success("Booking successful");
    } catch (err) {
      toast.error(err);
    }
  };

  const UpdatePackegs = async () => {
    const temparray = [];
    const temp = {
      packageName: name,
      packageDetails: details,
      packagePrice: price,
    };
    console.log(oldPacks);
    oldPacks.forEach((item, no) => {
      if (no === packageIndex) {
        temp.packageName = name;
        temp.packageDetails = details;
        temp.packagePrice = price;
        temparray.push(temp);
      } else {
        temparray.push(item);
      }
    });
    console.log(temparray);
    try {
      await axios
        .put("/user/packages", {
          id,
          packages: temparray,
        })
        .then((res) => toast.success(res.data.message))
        .catch((err) => toast.error(err.message));
    } catch (err) {
      console.log(err);
    }
  };

  const DisableDates = () => {
    let today;
    let dd;
    let mm;
    let yyyy;
    today = new Date();

    // if day is between 1 to 10
    if (today.getDate() < 10) {
      dd = `0${today.getDate() + 1}`;
    } else {
      dd = today.getDate() + 1;
    }

    // if month is between 1 to 10
    if (today.getMonth() < 10) {
      mm = `0${today.getMonth() + 1}`;
    } else {
      mm = today.getMonth() + 1;
    }
    yyyy = today.getFullYear();
    console.log(`${yyyy}-${mm}-${dd}`);
    return `${yyyy}-${mm}-${dd}`;
  };
  return (
    <div>
      <button
        type="button"
        className="p-2 bg-blue-500 rounded-md flex flex-row hover:opacity-80 items-center leading-tight"
        data-bs-toggle="modal"
        data-bs-target="#ShowPackage"
      >
        <PackageIcon classList="feather feather-package w-5 fill-white stroke-blue-500 mr-2" />
        <p className="font-Lato text-white">view Packages</p>
      </button>
      <div
        className="modal fade fixed top-60 -left-52 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="ShowPackage"
        tabIndex="-1"
        aria-labelledby="delet_location"
        aria-hidden="true"
      >
        <div className="modal-dialog relative pointer-events-none w-auto">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-[50rem] pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <div className="flex flex-row items-center">
                <img
                  src={profilePic}
                  alt="profile"
                  className="w-12 rounded-full"
                />
                <div className="flex flex-row justify-start items-center">
                  <h2 className="ml-3 font-Lato text-xl font-semibold text-gray-500 capitalize">
                    {profilename} Packages
                  </h2>
                  <button type="button" onClick={loadPackages}>
                    <ResetIcon classList="w-6 ml-5" />
                  </button>
                </div>
              </div>
            </div>
            <div className="modal-body relative p-4">
              <table className="w-full flex flex-col">
                <thead className="bg-slate-100 rounded">
                  <tr className="grid grid-cols-7 items-center p-3">
                    <th className="text-start">#</th>
                    <th className="text-center">Package Name</th>
                    <th className="text-center col-span-3">Package Details</th>
                    <th className="text-center">Price (LKR)</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="mt-1 w-full">
                  {oldPacks && oldPacks.length > 0 ? (
                    oldPacks.map((item, no) => (
                      <tr
                        className="grid grid-cols-7 items-center p-3 border-b-4 border-b-slate-100 rounded-lg mt-2"
                        key={item.id}
                      >
                        <td className="text-start font-Lato text-base font-semibold text-gray-600">
                          {no + 1}
                        </td>
                        <td className="text-start font-Lato text-base font-semibold text-gray-600 capitalize">
                          {item.packageName}
                        </td>
                        <td className="text-justify font-Lato text-base font-semibold text-gray-600 col-span-3">
                          {item.packageDetails}
                        </td>
                        <td className="text-center font-Lato text-base font-semibold text-gray-600">
                          {item.packagePrice}
                        </td>
                        <td className="text-center font-Lato text-base font-semibold text-gray-600">
                          {Owner === id ? (
                            <button
                              type="button"
                              className="p-2 pl-6 pr-6 bg-yellow-600  text-white font-medium leading-tight uppercase rounded shadow-md  hover:bg-yellow-700 hover:shadow-lg  focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                              data-bs-toggle="modal"
                              data-bs-target="#EditPackageForm"
                              onClick={() => {
                                setPackageIndex(no);
                                setEditablepackage(item);
                              }}
                            >
                              Edit
                            </button>
                          ) : user ? (
                            <button
                              type="button"
                              className="p-2 pl-6 pr-6 bg-orange-600  text-white font-medium leading-tight uppercase rounded shadow-md  hover:bg-orange-700 hover:shadow-lg  focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                              data-bs-toggle="modal"
                              data-bs-target="#bookingForm"
                              onClick={() => setPackageName(item.packageName)}
                            >
                              Book
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="p-2 pl-6 pr-6 bg-slate-400  text-black font-medium leading-tight uppercase rounded shadow-md  hover:bg-gray-700 hover:shadow-lg  focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                              data-bs-toggle="modal"
                              data-bs-target="#bookingForm"
                              disabled
                            >
                              Book
                            </button>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="grid grid-cols-5 items-center p-3 border-b-4 border-b-slate-100 rounded-lg mt-2">
                      <td className="text-start font-Lato text-base font-semibold text-gray-600 col-span-5">
                        No packages available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="p-2 pl-6 pr-6 bg-blue-600  text-white font-medium leading-tight uppercase rounded shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade fixed top-60 -left-52 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="bookingForm"
        tabIndex="-1"
        aria-labelledby="bookingForm"
        aria-hidden="true"
      >
        <div className="modal-dialog relative pointer-events-none w-auto">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-[50rem] pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <div className="flex flex-row items-center">
                <img
                  src={profilePic}
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
                <div className="relative z-0 mb-4 w-full group p-2">
                  <input
                    type="date"
                    className="font-Lato block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    value={bookDate}
                    min={DisableDates()}
                    required
                    onChange={(e) => setBookDate(e.target.value)}
                  />
                  <label
                    htmlFor="floating_email"
                    className="font-Lato peer-focus:font-medium absolute text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Select a booking date
                  </label>
                </div>
                <div className="flex justify-center">
                  <div className="w-full mt-2 mb-2">
                    <label
                      htmlFor="floating_email"
                      className="font-Lato peer-focus:font-medium absolute text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Special note (This is optional)
                    </label>
                    <textarea
                      className=" form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-500  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:ring-orange-600 focus:ring-offset-orange-600 focus:outline-none "
                      id="details"
                      rows="3"
                      placeholder="-- Special Notes --"
                    />
                  </div>
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
                onClick={submitBook}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <div
        className="modal fade fixed top-60 -left-52 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="EditPackageForm"
        tabIndex="-1"
        aria-labelledby="EditPackageForm"
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
                <h2 className="ml-3 font-Lato text-xl font-semibold text-gray-500">
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
                onClick={UpdatePackegs}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
