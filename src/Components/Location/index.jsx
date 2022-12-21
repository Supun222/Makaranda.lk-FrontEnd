import { useEffect, useState, React } from "react";
// import { createStore } from "redux";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "../../axios/index";
import Reports from "../Report";
import DownloadIcon from "../../Assets/Icons/Svgs/Download";
import ResetIcon from "../../Assets/Icons/Svgs/Reset";
import EditdIcon from "../../Assets/Icons/Svgs/Edit";
import DeleteIcon from "../../Assets/Icons/Svgs/Delete";
import AddLocation from "./add";

function Location() {
  const [Locations, setLocation] = useState([]);
  const [deleteid, setDeleteId] = useState();
  const [deleteLoc, setDeleteLoc] = useState();
  const [EditID, setEditID] = useState();
  const [EditLoc, setEditLoc] = useState();
  const [EditLat, setEditLat] = useState();
  const [EditLong, setEditLong] = useState();
  const [changeSet, setChageSet] = useState(false);

  const renderTableData = () => {
    axios
      .get("/location/all")
      .then((response) => setLocation(response.data.locations));
  };
  useEffect(() => {
    renderTableData();
    setChageSet(false);
  }, [changeSet]);

  const SetDeleteData = (id, loc) => {
    setDeleteId(id);
    setDeleteLoc(loc);
    toast.dismiss();
  };

  const SetEditData = (id, locname, lattitude, longtude) => {
    setEditID(id);
    setEditLoc(locname);
    setEditLat(lattitude);
    setEditLong(longtude);
    toast.dismiss();
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

  const validationSchema = Yup.object().shape({
    location_name: Yup.string().required("Please enter the location name"),
    latitude: Yup.number().typeError("Please provide price"),
    longtitude: Yup.number().typeError("Please provide price"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState, reset } = useForm(formOptions);
  const { errors } = formState;

  const resetFeild = () => {
    reset();
  };

  const onSubmitHandler = async () => {
    try {
      console.log(EditID);
      console.log(EditID);
      await axios.patch(
        `/location/${EditID}`,
        JSON.stringify({
          location_name: EditLoc,
          lattitude: EditLat.toString(),
          longtude: EditLong.toString(),
          active: true,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      toast.success("Location had updated successfully");
      reset();
      // setTimeout(navigate("/admin/location"), 5000);
    } catch (err) {
      console.log(JSON.stringify(err.response?.data.message));
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
    <div className="mx-auto flex flex-col justify-between h-full w-full">
      <Reports />
      <div className="p-5 bg-white rounded shadow h-full overflow-y-auto mt-5">
        <div className="flex flex-row justify-between">
          <h1 className="font-Lato font-semibold text-3xl text-gray-500 m-4">
            Location Details
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
              <tr className="grid grid-cols-5 items-center p-3">
                <th className="text-start">#</th>
                <th className="text-center">Location Name</th>
                <th className="text-center">Latitude</th>
                <th className="text-center">Longitude</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="mt-1 w-full">
              {Locations && Locations.length > 0 ? (
                Locations.map((item, no) => (
                  <tr
                    className="grid grid-cols-5 items-center p-3 border-b-4 border-b-slate-100 rounded-lg mt-2"
                    // eslint-disable-next-line no-underscore-dangle
                    key={item._id}
                  >
                    <td className="text-start font-Lato text-base font-semibold text-gray-600">
                      {no + 1}
                    </td>
                    <td className="text-center font-Lato text-base font-semibold text-gray-600 capitalize">
                      {item.location_name}
                    </td>
                    <td className="text-center font-Lato text-base font-semibold text-gray-600">
                      {item.lattitude}
                    </td>
                    <td className="text-center font-Lato text-base font-semibold text-gray-600">
                      {item.longtude}
                    </td>
                    <td className="text-center flex flex-row items-center justify-center">
                      <button
                        type="button"
                        className="inline-flex items-center hover:bg-white/70 p-2 bg-white rounded shadow mr-5"
                        data-bs-toggle="modal"
                        data-bs-target="#EditLocation"
                        onClick={() =>
                          SetEditData(
                            // eslint-disable-next-line no-underscore-dangle
                            item._id,
                            item.location_name,
                            item.lattitude,
                            item.longtude
                          )
                        }
                      >
                        <EditdIcon classList="w-5 fill-green-500 mr-1" />
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
                <tr className="grid grid-cols-7 items-center p-3 border-b-4 border-slate-50 bg-slate-200 rounded-lg">
                  <td className="text-center col-span-7 font-Lato font-bold text-gray-800">
                    No Category available
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
      <div
        className="modal fade fixed top-40 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="EditLocation"
        tabIndex="-1"
        aria-labelledby="new_membership"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-semibold leading-normal text-gray-800"
                id="new_membership"
              >
                Edit Location
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body relative p-4">
              <form action="submit" onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="form-group mb-3">
                  <label
                    htmlFor="location_name"
                    className="form-label inline-block mb-2 text-gray-700 font-Lato text-lg"
                  >
                    Location name
                  </label>
                  <input
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register("location_name")}
                    type="text"
                    className="form-control font-Lato text-lg block w-full px-3 py-1.5  font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="location_name"
                    placeholder="Enter name"
                    value={EditLoc}
                    onChange={(e) => setEditLoc(e.target.value)}
                  />
                  <p className="text-xs text-red-500 mt-1">
                    {errors.location_name?.message}
                  </p>
                </div>
                <div className="form-group mb-3">
                  <label
                    htmlFor="latitude"
                    className="form-label font-Lato text-lg inline-block mb-2 text-gray-700"
                  >
                    Latitude
                  </label>
                  <input
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register("latitude")}
                    type="number"
                    step="0.000000000000001"
                    className="form-control font-Lato text-lg block w-full px-3 py-1.5  font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="latitude"
                    value={EditLat}
                    placeholder="Enter Latitude"
                    onChange={(e) => setEditLat(e.target.value)}
                  />
                  <p className="text-xs text-red-500 mt-1">
                    {errors.latitude?.message}
                  </p>
                </div>
                <div className="form-group mb-3">
                  <label
                    htmlFor="longtitude"
                    className="form-label font-Lato text-lg inline-block mb-2 text-gray-700"
                  >
                    Longtitude
                  </label>
                  <input
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register("longtitude")}
                    type="number"
                    step="0.000000000000001"
                    className="form-control font-Lato text-lg block w-full px-3 py-1.5  font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="longtitude"
                    value={EditLong}
                    placeholder="Enter longtitude"
                    onChange={(e) => setEditLong(e.target.value)}
                  />
                  <p className="text-xs text-red-500 mt-1">
                    {errors.longtitude?.message}
                  </p>
                </div>
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button
                    type="button"
                    className="p-2 pl-6 pr-6 bg-red-500 font-medium text-white leading-tight uppercase rounded hover:bg-red-700 hover:shadow-sm  focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring  active:bg-red-800 active:shadow-sm transition-all duration-1 ease-in-out"
                    data-bs-dismiss="modal"
                    onClick={resetFeild}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="p-2 pl-6 pr-6 bg-blue-600  text-white font-medium leading-tight uppercase rounded shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                    data-bs-dismiss="modal"
                  >
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Location;
