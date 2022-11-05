import { useState } from "react";
import packages from "../../Resources/Packages";

function PackageDetails() {
  const [newPackageName, setNewPackageName] = useState("");
  const [newPackageDetails, setNewPackageDetails] = useState("");
  const [newPackagePrice, setNewPackagePrice] = useState(0);

  const handlePackegs = () => {
    if (packages.length === 0) {
      return "empty";
    }
    if (packages.length === 5) {
      return "full";
    }
    const tempPackage = {
      id: newPackageName,
      name: newPackageDetails,
      price: newPackagePrice,
    };

    packages.push(tempPackage);
    return "success";
  };

  return (
    <div
      className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5
              className="text-xl font-medium leading-normal text-gray-800"
              id="exampleModalLabel"
            >
              New package
            </h5>
            <button
              type="button"
              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body relative p-4">
            <form>
              <div className="flex flex-col mt-2">
                <label
                  htmlFor="packageName"
                  className="font-Lato font-medium text-secondaryText"
                >
                  Package Name
                </label>
                <input
                  type="text"
                  id="packageName"
                  name="packageName"
                  placeholder="-- package name here --"
                  className="bg-gray-100 rounded-sm h-8 mt-2 p-2 text-gray-800 placeholder:text-gray-400 focus:outline-amber-700 hover:transition-all hover:ease-in-out hover:delay-50"
                  onChange={(e) => setNewPackageName(e.target.value)}
                />
              </div>
              <div className="flex flex-col mt-2">
                <label
                  htmlFor="packageName"
                  className="font-Lato font-medium text-secondaryText"
                >
                  Package Details
                </label>
                <input
                  type="text"
                  id="packageName"
                  name="packageName"
                  placeholder="-- package name here --"
                  className="bg-gray-100 rounded-sm h-8 mt-2 p-2 text-gray-800 placeholder:text-gray-400 focus:outline-amber-700 hover:transition-all hover:ease-in-out hover:delay-50"
                  onChange={(e) => setNewPackageDetails(e.target.value)}
                />
              </div>
              <div className="flex flex-col mt-2">
                <label
                  htmlFor="packageName"
                  className="font-Lato font-medium text-secondaryText"
                >
                  Package Price
                </label>
                <input
                  type="text"
                  id="packageName"
                  name="packageName"
                  placeholder="-- package name here --"
                  className="bg-gray-100 rounded-sm h-8 mt-2 p-2 text-gray-800 placeholder:text-gray-400 focus:outline-amber-700 hover:transition-all hover:ease-in-out hover:delay-50"
                  onChange={(e) => setNewPackagePrice(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button
              type="button"
              className="px-6py-2.5 bg-red-600 text-whitefont-medium text-xs leading-tight uppercase rounded shadow-md  hover:bg-red-700 hover:shadow-lg  focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="px-6 py-2.5  bg-amber-600  text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:bg-amber-700 hover:shadow-lg  focus:bg-amber-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-amber-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
              onClick={handlePackegs}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageDetails;
