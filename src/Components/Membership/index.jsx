/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios/index";
import Reports from "../Report";
import DeleteIcon from "../../Assets/Icons/Svgs/Delete";
import AddMembership from "./add";
import DownloadIcon from "../../Assets/Icons/Svgs/Download";
import ResetIcon from "../../Assets/Icons/Svgs/Reset";
import EditdIcon from "../../Assets/Icons/Svgs/Edit";

function Membership() {
  const [Memberships, setMembership] = useState([]);

  const renderTableData = () => {
    axios
      .get("/admin/membership/all")
      .then((response) => setMembership(response.data.membership));
  };
  console.log("outside");
  useEffect(() => {
    console.log("inside");
    renderTableData();
  }, []);

  return (
    <div className="mx-auto flex flex-col justify-between">
      <Reports />
      <div className="p-5 bg-white rounded shadow h-full overflow-y-auto mt-5">
        <div className="flex flex-row justify-between">
          <h1 className="font-Lato font-semibold text-2xl">
            Membership Details
          </h1>
          <div className="inline-flex justify-between items-center">
            <button
              type="button"
              className="inline-flex items-center w-fit hover:bg-gray-200 p-2 rounded mr-4"
              onClick={renderTableData}
            >
              <ResetIcon classList="w-5 fill-black mr-2" />
              <p>Refresh</p>
            </button>
            <AddMembership />
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
              <tr className="grid grid-cols-7 items-center p-3">
                <th className="text-start">#</th>
                <th className="text-center">Membership Name</th>
                <th className="text-center  col-span-3">Details</th>
                <th className="text-center">Price (Rs)</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="mt-1 w-full">
              {Memberships && Memberships.length > 0 ? (
                Memberships.map((item, no) => (
                  <tr
                    className="grid grid-cols-7 items-center p-3 border-b-4 border-b-slate-100 rounded-lg mt-2"
                    // eslint-disable-next-line no-underscore-dangle
                    key={item._id}
                  >
                    <td className="text-start font-Lato text-base font-semibold text-gray-600">
                      {no + 1}
                    </td>
                    <td className="text-center font-Lato text-base font-semibold text-gray-600">
                      {item.name}
                    </td>
                    <td className="text-start col-span-3 font-Lato text-base font-semibold text-gray-600">
                      {item.details}
                    </td>
                    <td className="text-center font-Lato text-base font-semibold text-gray-600">
                      {item.price}
                    </td>
                    <td className="text-center flex flex-row items-center justify-center">
                      <button
                        type="button"
                        className="p-2 bg-white rounded shadow mr-5"
                      >
                        <Link to={`/admin/membership/${item._id}`}>
                          <EditdIcon classList="fill-green-400 w-5 mr-1" />
                        </Link>
                      </button>
                      <button
                        type="button"
                        className="p-2 bg-white rounded shadow"
                      >
                        <DeleteIcon classList="fill-red-400 w-5" />
                      </button>
                    </td>
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
  );
}

export default Membership;
