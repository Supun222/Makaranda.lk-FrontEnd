import { useEffect, useState } from "react";
import axios from "../../axios/index";
import Reports from "../Report";
import EditdIcon from "../../Assets/Icons/Svgs/Edit";
import DeleteIcon from "../../Assets/Icons/Svgs/Delete";
import AddMembership from "./add";
import DownloadIcon from "../../Assets/Icons/Svgs/Download";

function Membership() {
  const [Memberships, setMembership] = useState([]);

  const renderTableData = () => {
    axios
      .get("/admin/membership/all")
      .then((response) => setMembership(response.data.membership));
  };

  useEffect(() => {
    renderTableData();
  }, []);

  return (
    <div className="mx-auto flex flex-col justify-between h-full w-full">
      <Reports />
      <div className="p-5 bg-white rounded shadow h-full mt-5">
        <div className="flex flex-row justify-between">
          <h1 className="font-Lato font-semibold text-2xl">
            Membership Details
          </h1>
          <div className="inline-flex justify-between w-48 items-center">
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
                    className="grid grid-cols-7 items-center p-3 border-b-4 border-b-slate-50"
                    // eslint-disable-next-line no-underscore-dangle
                    key={item._id}
                  >
                    <td className="text-start">{no + 1}</td>
                    <td className="text-center">{item.name}</td>
                    <td className="text-center col-span-3">{item.details}</td>
                    <td className="text-center">{item.price}</td>
                    <td className="text-center flex flex-row items-center justify-center">
                      <button
                        type="button"
                        className="p-2 bg-white rounded shadow mr-5"
                      >
                        <EditdIcon classList="fill-green-400 w-5" />
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
                <tr className="grid grid-cols-7 items-center p-3 border-b-4 border-b-slate-50">
                  <td className="text-center col-7">No data</td>
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
