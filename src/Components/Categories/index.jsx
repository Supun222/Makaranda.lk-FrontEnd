import { useEffect, useState } from "react";
import Reports from "../Report";
import axios from "../../axios/index";
import DeleteIcon from "../../Assets/Icons/Svgs/Delete";
// import AddMembership from "./add";
import DownloadIcon from "../../Assets/Icons/Svgs/Download";
import ResetIcon from "../../Assets/Icons/Svgs/Reset";
import EditdIcon from "../../Assets/Icons/Svgs/Edit";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [changeSet, setChageSet] = useState(false);

  const renderTableData = () => {
    axios
      .get("/category/all")
      .then((response) => setCategories(response.data.Category));
  };

  useEffect(() => {
    console.log(categories);
    renderTableData();
    setChageSet(false);
  }, [changeSet]);

  return (
    <div className="mx-auto flex flex-col justify-between h-full w-full">
      <Reports />
      <div className="p-5 bg-white rounded shadow h-full overflow-y-auto mt-5">
        <div className="flex flex-row justify-between">
          <h1 className="font-Lato font-semibold text-3xl text-gray-500 m-4">
            Category Details
          </h1>
          <div className="inline-flex justify-between items-center">
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
              <tr className="grid grid-cols-7 items-center p-3">
                <th className="text-start">#</th>
                <th className="text-center col-span-2">Category Name</th>
                <th className="text-center col-span-3">SubCategory (ies)</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="mt-1 w-full">
              {categories && categories.length > 0 ? (
                categories.map((item, no) => (
                  <tr className="grid grid-cols-7 items-center p-3 border-b-4 border-b-slate-100 rounded-lg mt-2">
                    <td className="text-start font-Lato text-base font-semibold text-gray-600">
                      {no + 1}
                    </td>
                    <td className="text-center font-Lato text-base font-semibold text-gray-600 col-span-2 capitalize">
                      {item.category_name}
                    </td>
                    <td className="text-center font-Lato text-base font-semibold text-gray-600 col-span-3">
                      {item.subcategory.map((subItem) => (
                        <div className="inline-flex mt-2">
                          <p className="capitalize">{`${subItem} ,`}</p>{" "}
                        </div>
                      ))}
                    </td>
                    <td className="text-center font-Lato text-base font-semibold text-gray-600">
                      <button
                        type="button"
                        className="p-2 bg-white rounded shadow mr-5"
                      >
                        <EditdIcon classList="fill-green-400 w-5 mr-1" />
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
                  <td className="text-center col-span-7 font-Lato font-bold text-gray-600 tracking-wide">
                    No Category available
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

export default Categories;
