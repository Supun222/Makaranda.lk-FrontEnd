import { useEffect, useState, React } from "react";
// import { createStore } from "redux";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../axios/index";
import Reports from "../Report";
import DownloadIcon from "../../Assets/Icons/Svgs/Download";
import ResetIcon from "../../Assets/Icons/Svgs/Reset";
import EditdIcon from "../../Assets/Icons/Svgs/Edit";
import DeleteIcon from "../../Assets/Icons/Svgs/Delete";
import AddLocation from "../LocationFilter/add";

function Location() {
  const [Locations, setLocation] = useState([]);
  const [deleteid, setDeleteId] = useState();
  const [deleteLoc, setDeleteLoc] = useState();
  const [changeSet, setChageSet] = useState(false);

  const renderTableData = () => {
    axios
      .get("/location/all")
      .then((response) => setLocation(response.data.locations));
  };
  console.log(Locations);
  useEffect(() => {
    console.log("inside");
    renderTableData();
    setChageSet(false);
  }, [changeSet]);

  const SetDeleteData = (id, loc) => {
    setDeleteId(id);
    setDeleteLoc(loc);
    console.log(deleteid);
  };

  const deletelocation = (e) => {
    e.preventDefault();
    try {
      axios.delete(`/location/remove/${deleteid}`);
      toast.success(`Location ${deleteLoc} has deleted succefully`);
      setChageSet(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="mx-auto flex flex-col justify-between h-full w-full">
      <Reports />
      <div className="p-5 bg-white rounded shadow h-full overflow-y-auto mt-5">
        <div className="flex flex-row justify-between">
          <h1 className="font-Lato font-semibold text-2xl">Location Details</h1>
          <div className="inline-flex justify-between items-center">
            <button
              type="button"
              className="inline-flex items-center w-fit hover:bg-gray-200 p-2 rounded mr-4"
              onClick={renderTableData}
            >
              <ResetIcon classList="w-5 fill-black mr-2" />
              <p>Refresh</p>
            </button>
            <AddLocation />
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
                <th className="text-center col-span-3">Location Name</th>
                <th className="text-center">Latitude</th>
                <th className="text-center">Longitude</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="mt-1 w-full">
              {Locations && Locations.length > 0 ? (
                Locations.map((item, no) => (
                  <tr
                    className="grid grid-cols-7 items-center p-3 border-b-4 border-b-slate-100 rounded-lg mt-2"
                    // eslint-disable-next-line no-underscore-dangle
                    key={item._id}
                  >
                    <td className="text-start font-Lato text-base font-semibold text-gray-600">
                      {no + 1}
                    </td>
                    <td className="text-start col-span-3 font-Lato text-base font-semibold text-gray-600 capitalize">
                      {item.location_name}
                    </td>
                    <td className="text-center font-Lato text-base font-semibold text-gray-600">
                      65.23424234
                    </td>
                    <td className="text-center font-Lato text-base font-semibold text-gray-600">
                      45.76674543
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
                        data-bs-target="#deleteLocation"
                        onClick={() =>
                          // eslint-disable-next-line no-underscore-dangle
                          SetDeleteData(item._id, item.location_name)
                        }
                      >
                        <DeleteIcon classList="fill-red-400 w-5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="grid grid-cols-7 items-center p-3 border-b-4 border-b-slate-100 rounded-lg mt-2">
                  <td className="text-center col-span-7 font-Lato font-bold text-gray-900">
                    No Locations available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div
          className="modal fade fixed top-40 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="deleteLocation"
          tabIndex="-1"
          aria-labelledby="delet_location"
          aria-hidden="true"
        >
          <div className="modal-dialog relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h1 className="font-Lato text-2xl text-gray-700">
                  Confirmation
                </h1>
              </div>
              <div className="modal-body relative p-4">
                <p className="font-Lato text-lg text-gray-500">
                  Are you sure?... delete{" "}
                  <strong className="capitalize text-red-600">
                    {deleteLoc}
                  </strong>{" "}
                  location
                </p>
              </div>
              <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="button"
                  className="p-2 pl-6 pr-6 text-gray-600 bg-stone-50 font-medium leading-tight uppercase rounded hover:bg-stone-300 hover:shadow-sm  focus:bg-stone-500 focus:shadow-lg focus:outline-none focus:ring  active:bg-stone-500 active:shadow-sm transition-all duration-1 ease-in-out"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="p-2 pl-6 pr-6 bg-red-600  text-white font-medium leading-tight uppercase rounded shadow-md  hover:bg-red-700 hover:shadow-lg  focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                  data-bs-dismiss="modal"
                  onClick={deletelocation}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Location;
