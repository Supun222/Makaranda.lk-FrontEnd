/* eslint-disable no-nested-ternary */
import { useEffect, useState } from "react";
import moment from "moment";
import Reports from "../Report";
import axios from "../../axios";
import ResetIcon from "../../Assets/Icons/Svgs/Reset";
import DownloadIcon from "../../Assets/Icons/Svgs/Download";

function AdminBooking() {
  const [Booking, setBooking] = useState([]);
  const [Category, setCategory] = useState("");

  const GetAllBookings = async (type) => {
    try {
      await axios.get(`/booking/type=${type}`).then((res) => {
        setBooking(res.data.bookings);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetAllBookings("all");
  }, []);

  useEffect(() => {
    setBooking([]);
    GetAllBookings(Category);
  }, [Category]);

  return (
    <div className="mx-auto flex flex-col justify-between h-full w-full">
      <div className="mx-auto flex flex-col justify-between h-full w-full">
        <Reports />
        <div className="p-5 bg-white rounded shadow h-full overflow-y-auto mt-5">
          <div className="flex flex-row justify-between">
            <h1 className="font-Lato font-semibold text-3xl text-gray-500 m-4">
              Booking Details
            </h1>
            <div className="inline-flex justify-between items-center">
              <div className="w-full mr-5">
                <select
                  className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal  text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="status select"
                  onChange={(e) => setCategory(e.target.value)}
                  value={Category}
                >
                  <option value="all">All</option>
                  <option value="pending">Pending</option>
                  <option value="available">Available</option>
                  <option value="unavailable">Unavailable</option>
                </select>
              </div>
              <button
                type="button"
                className="inline-flex items-center w-fit hover:bg-gray-200 p-2 rounded mr-4"
              >
                <ResetIcon classList="w-5 fill-black mr-2" />
                <p>Refresh</p>
              </button>
              <button
                type="button"
                className="inline-flex items-center w-fit hover:bg-gray-200 p-2 rounded"
              >
                <DownloadIcon classList="w-5 fill-black mr-1" />
                <p>Export</p>
              </button>
            </div>
          </div>
          <div className="mt-5 flex flex-col">
            <table className="min-w-full flex flex-col">
              <thead className="bg-slate-100 rounded">
                <tr className="grid grid-cols-10 items-center p-3">
                  <th className="text-start">#</th>
                  <th className="text-center col-span-2">Service Name</th>
                  <th className="text-center col-span-2">Customer</th>
                  <th className="text-center col-span-2">Package</th>
                  <th className="text-center">Booking Date</th>
                  <th className="text-center">Price (Rs)</th>
                  <th className="text-center">Status</th>
                </tr>
              </thead>
              <tbody className="mt-1 w-full">
                {Booking && Booking.length > 0 ? (
                  Booking.map((item, no) => (
                    <tr
                      className="grid grid-cols-10 items-center p-3 border-b-4 border-b-slate-100 rounded-lg mt-2"
                      // eslint-disable-next-line no-underscore-dangle
                      key={item._id}
                    >
                      <td className="text-start font-Lato text-base font-semibold text-gray-600">
                        {no + 1}
                      </td>
                      <td className="text-start font-Lato text-base font-semibold text-gray-600 col-span-2 capitalize">
                        {item.service_provider}
                      </td>
                      <td className="text-start font-Lato text-base font-semibold text-gray-600 col-span-2 capitalize">
                        {item.service_reciever}
                      </td>
                      <td className="text-start font-Lato text-base font-semibold text-gray-600 col-span-2 capitalize">
                        {item.package_name}
                      </td>
                      <td className="text-center font-Lato text-base font-semibold text-gray-600">
                        {moment(item.booked_date).format("dd MMMM yyyy")}
                      </td>
                      <td className="text-end font-Lato text-base font-semibold text-gray-600">
                        2300
                      </td>
                      {item.status === "pending" ? (
                        <td className="text-center font-Lato text-base font-semibold text-yellow-400 capitalize">
                          {item.status}
                        </td>
                      ) : item.status === "available" ? (
                        <td className="text-center font-Lato text-base font-semibold text-green-600 capitalize">
                          {item.status}
                        </td>
                      ) : (
                        <td className="text-center font-Lato text-base font-semibold text-red-600 capitalize">
                          {item.status}
                        </td>
                      )}
                    </tr>
                  ))
                ) : (
                  <tr className="grid grid-cols-7 items-center p-3 border-b-4 border-slate-50 bg-slate-200 rounded-lg">
                    <td className="text-center col-span-7 font-Lato font-bold text-gray-900">
                      No membership available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminBooking;
