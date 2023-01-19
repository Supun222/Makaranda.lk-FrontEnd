/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import PackageIcon from "../../Assets/Icons/Svgs/Package";
import ProfilePic from "../../Assets/Images/Profile/profile.jpg";
// import Package from "../../Resources/packages.json";

// eslint-disable-next-line react/prop-types
function Packages({ items }) {
  // const [Packagess, setPackages] = useState(items);

  // useEffect(() => {
  //   setPackages(items);
  //   console.table(items);
  // }, []);
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
                  src={ProfilePic}
                  alt="profile"
                  className="w-12 rounded-full"
                />
                <h2 className="ml-3 font-Lato text-xl font-semibold text-gray-500">
                  Thathari Dancing Crew Packages
                </h2>
              </div>
            </div>
            <div className="modal-body relative p-4">
              <table className="w-full flex flex-col">
                <thead className="bg-slate-100 rounded">
                  <tr className="grid grid-cols-5 items-center p-3">
                    <th className="text-start">#</th>
                    <th className="text-center">Package Name</th>
                    <th className="text-center col-span-2">Package Details</th>
                    <th className="text-center">Price (LKR)</th>
                  </tr>
                </thead>
                <tbody className="mt-1 w-full">
                  {items && items.length > 0 ? (
                    items.map((item, no) => (
                      <tr
                        className="grid grid-cols-5 items-center p-3 border-b-4 border-b-slate-100 rounded-lg mt-2"
                        key={item.id}
                      >
                        <td className="text-start font-Lato text-base font-semibold text-gray-600">
                          {no + 1}
                        </td>
                        <td className="text-center font-Lato text-base font-semibold text-gray-600 capitalize">
                          {item.packageName}
                        </td>
                        <td className="text-center font-Lato text-base font-semibold text-gray-600 col-span-2">
                          {item.packageDetails}
                        </td>
                        <td className="text-center font-Lato text-base font-semibold text-gray-600">
                          {item.packagePrice}
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
    </div>
  );
}

export default Packages;
