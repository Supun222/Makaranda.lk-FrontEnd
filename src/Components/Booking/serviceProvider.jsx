/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import { useEffect, useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../axios";
import DeleteIcon from "../../Assets/Icons/Svgs/Delete";
import EditdIcon from "../../Assets/Icons/Svgs/Edit";
import { selectUser } from "../../Features/userSlice";
import ProfilePic from "../../Assets/Images/Profile/profile.jpg";
import ResetIcon from "../../Assets/Icons/Svgs/Reset";

function ServiceProviderBooking() {
  const [profileID, setProfileID] = useState("");
  const [bookings, setBookings] = useState([]);
  const [bookingID, setBookingID] = useState("");
  const [bookingStatus, setBookingStatus] = useState();
  const [chanegSet, setChanegSet] = useState(false);
  const user = useSelector(selectUser);

  const getBookings = async () => {
    try {
      await axios
        .get(`/booking/service_provider=${profileID}`)
        .then((res) => setBookings(res.data))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  const postBooking = async () => {
    try {
      await axios
        .put(`/booking/id=${bookingID}`, {
          status: bookingStatus,
        })
        .then(toast.success("Status updated"))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(bookingID);
  }, []);

  useEffect(() => {
    if (user) {
      setProfileID(user.userID);
      getBookings();
    }
  }, [chanegSet]);

  useEffect(() => {
    console.log(bookingStatus);
  }, []);

  return (
    <div>
      <div
        className="modal fade fixed top-60 -left-[23rem] hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="bookingList"
        tabIndex="-1"
        aria-labelledby="bookingList"
        aria-hidden="true"
      >
        <div className="modal-dialog relative pointer-events-none w-auto">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-[70rem] pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md w-full">
              <div className="flex flex-row items-center justify-between">
                <h2 className="ml-3 font-Lato text-xl font-semibold text-gray-500">
                  Booking Display
                </h2>
                <button
                  type="button"
                  onClick={() => setChanegSet(!chanegSet)}
                  className="ml-5"
                >
                  <ResetIcon classList="w-5 text-gray-500" />
                </button>
              </div>
            </div>
            <div className="modal-body relative p-4">
              <table className="min-w-full flex flex-col">
                <thead className="bg-slate-100 rounded">
                  <tr className="grid grid-cols-10 items-center p-3">
                    <th className="text-start">#</th>
                    <th className="text-center col-span-2">Customer Name</th>
                    <th className="text-center col-span-2">Package name</th>
                    <th className="text-center col-span-2">Booking date</th>
                    <th className="text-center col-span-2">Status</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="mt-1 w-full">
                  {bookings && bookings.length > 0 ? (
                    bookings.map((item, no) => (
                      <tr
                        className="grid grid-cols-10 items-center p-3 border-b-4 border-b-slate-100 rounded-lg mt-2"
                        key={item._id}
                      >
                        <td className="text-start font-Lato text-base font-semibold text-gray-600">
                          {no + 1}
                        </td>
                        <td className="text-start col-span-2 font-Lato text-base font-semibold text-gray-600 capitalize">
                          {item.service_reciever}
                        </td>
                        <td className="text-center col-span-2 font-Lato text-base font-semibold text-gray-600 capitalize">
                          {item.package_name}
                        </td>
                        <td className="text-center col-span-2 font-Lato text-base font-semibold text-gray-600">
                          {moment(item.booked_date).format("dd MMMM yyyy")}
                        </td>
                        {item.status === "pending" ? (
                          <td className="text-center col-span-2 font-Lato text-base font-semibold text-yellow-400 capitalize">
                            {item.status}
                          </td>
                        ) : item.status === "available" ? (
                          <td className="text-center col-span-2 font-Lato text-base font-semibold text-green-600 capitalize">
                            {item.status}
                          </td>
                        ) : (
                          <td className="text-center col-span-2 font-Lato text-base font-semibold text-red-600 capitalize">
                            {item.status}
                          </td>
                        )}
                        <td className="text-center flex flex-row items-center justify-end">
                          <div className="text-center flex flex-row items-center justify-center">
                            <button
                              type="button"
                              className="p-2 bg-white rounded shadow mr-5"
                              data-bs-toggle="modal"
                              data-bs-target="#updateBooking"
                              onClick={() => {
                                setBookingStatus(item.status);
                                setBookingID(item._id);
                              }}
                            >
                              <EditdIcon classList="fill-green-400 w-5 mr-1" />
                            </button>
                            <button
                              type="button"
                              className="p-2 bg-white rounded shadow"
                              data-bs-toggle="modal"
                              data-bs-target="#"
                              // onClick={() =>
                              //   // eslint-disable-next-line no-underscore-dangle
                              //   // SetDeleteData(item._id, item.name)
                              // }
                            >
                              <DeleteIcon classList="fill-red-400 w-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="grid grid-cols-7 items-center p-3 border-b-4 border-slate-50 bg-slate-200 rounded-lg">
                      <td className="text-center col-span-7 font-Lato font-bold text-gray-900">
                        No Bookings available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="p-2 pl-6 pr-6 bg-gray-50  text-gray-600 font-medium leading-tight uppercase rounded shadow-md  hover:bg-gray-50  hover:shadow-lg  focus:bg-gray-50  focus:shadow-lg focus:outline-none focus:ring-0  active:bg-gray-50  active:shadow-lg transition duration-150 ease-in-out ml-1"
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
        id="updateBooking"
        tabIndex="-1"
        aria-labelledby="updateBookings"
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
                  Thathari Dancing Crew Packages - Booking
                </h2>
              </div>
            </div>
            <div className="modal-body relative p-4">
              <form>
                <div className="flex flex-col justify-start w-full">
                  <label
                    htmlFor="ss"
                    className="font-Lato text-xl font-semibold text-gray-500 mb-2"
                  >
                    Select the availablity status
                  </label>
                  <div className="mb-3 w-full">
                    <select
                      className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal  text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      aria-label="status select"
                      onChange={(e) => setBookingStatus(e.target.value)}
                      value={bookingStatus}
                    >
                      <option value="pending">Pending</option>
                      <option value="available">Available</option>
                      <option value="unavailable">Unavailable</option>
                    </select>
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
                onClick={postBooking}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ServiceProviderBooking;
