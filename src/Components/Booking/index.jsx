import { useEffect, useState } from "react";
import moment from "moment";
import axios from "../../axios";
import DeleteIcon from "../../Assets/Icons/Svgs/Delete";
import EditdIcon from "../../Assets/Icons/Svgs/Edit";

function Booking() {
  const [profileID, setProfileID] = useState("63c5565f1dcbdbeb4b9bdf20");
  const [bookings, setBookings] = useState([]);

  const getBookings = async () => {
    try {
      setProfileID("63c5565f1dcbdbeb4b9bdf20");
      await axios
        .get(`/booking/service_provider=${profileID}`)
        .then((res) => setBookings(res.data))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setProfileID("63c5565f1dcbdbeb4b9bdf20");
    getBookings();
    console.log(bookings);
  }, []);

  return (
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
            <div className="flex flex-row items-center">
              <h2 className="ml-3 font-Lato text-xl font-semibold text-gray-500">
                Booking Display
              </h2>
            </div>
          </div>
          <div className="modal-body relative p-4">
            <table className="min-w-full flex flex-col">
              <thead className="bg-slate-100 rounded">
                <tr className="grid grid-cols-12 items-center p-3">
                  <th className="text-start">#</th>
                  <th className="text-center col-span-3">Customer Name</th>
                  <th className="text-center col-span-2">Customer Name</th>
                  <th className="text-center col-span-2">Package name</th>
                  <th className="text-center col-span-2">Booking date</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody className="mt-1 w-full">
                {bookings && bookings.length > 0 ? (
                  bookings.map((item, no) => (
                    <tr
                      className="grid grid-cols-12 items-center p-3 border-b-4 border-b-slate-100 rounded-lg mt-2"
                      // eslint-disable-next-line no-underscore-dangle
                      key={item._id}
                    >
                      <td className="text-start font-Lato text-base font-semibold text-gray-600">
                        {no + 1}
                      </td>
                      <td className="text-start col-span-3 font-Lato text-base font-semibold text-gray-600">
                        {item.profile_id}
                      </td>
                      <td className="text-start col-span-2 font-Lato text-base font-semibold text-gray-600">
                        {item.made_by}
                      </td>
                      <td className="text-center col-span-2 font-Lato text-base font-semibold text-gray-600">
                        {item.package_name}
                      </td>
                      <td className="text-center col-span-2 font-Lato text-base font-semibold text-gray-600">
                        {moment(item.booked_date).format("dd MMMM yyyy")}
                      </td>
                      <td className="text-center font-Lato text-base font-semibold text-gray-600">
                        {item.status}
                      </td>
                      <td className="text-center flex flex-row items-center justify-center">
                        <button
                          type="button"
                          className="p-2 bg-white rounded shadow mr-5"
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
  );
}

export default Booking;
