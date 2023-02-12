import axios from "axios";
import { useEffect, useState } from "react";

function Booking() {
  const [profileID, setProfileID] = useState();
  const [bookings, setBookings] = useState([]);

  const getBookings = async () => {
    try {
      await axios
        .get(`/bookings/${profileID}`)
        .then((res) => setBookings(res))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setProfileID("");
    getBookings();
    console.log(bookings);
  }, []);

  return (
    <div
      className="modal fade fixed top-60 -left-52 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="bookingList"
      tabIndex="-1"
      aria-labelledby="bookingList"
      aria-hidden="true"
    >
      <div className="modal-dialog relative pointer-events-none w-auto">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-[50rem] pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <div className="flex flex-row items-center">
              <h2 className="ml-3 font-Lato text-xl font-semibold text-gray-500">
                Booking diaply
              </h2>
            </div>
          </div>
          <div className="modal-body relative p-4">
            <h1>sjks</h1>
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
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
