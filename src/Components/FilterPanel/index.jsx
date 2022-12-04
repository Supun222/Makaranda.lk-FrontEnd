import React from "react";
import Category from "../Category";
import Location from "../LocationFilter";
import DancingIcon from "../../Assets/Icons/DancingGroups.png";

function FilterPanel() {
  return (
    <div className="border-4 border-gray-100 rounded-lg h-fit flex flex-col justify-start p-3">
      <div>
        <nav className="rounded-md w-full mb-3">
          <ol className="list-reset flex items-center">
            <li>
              <a
                href="/timeline"
                className="text-gray-600 hover:text-gray-700 flex flex-row items-center"
              >
                <img src={DancingIcon} alt="dancing" className="w-16" />
                <h1 className="font-Lato font-semibold text-xl text-gray-500 ml-2">
                  Dancing Groups
                </h1>
              </a>
            </li>
          </ol>
        </nav>
      </div>
      <div className="">
        <h1 className="font-Lato text-start text-lg font-semibold text-gray-500">
          Sort Result by
        </h1>
        <div className="mt-2">
          <select
            name="postType"
            id="postType"
            className="rounded border-gray-300 font-Lato w-full font-semibold text-gray-500 focus:ring-primary focus:ring-offset-primary focus:border-primary"
          >
            <option value="newtoold" className="p-2 m-2 hover:bg-primary">
              Date : New to Old
            </option>
            <option value="newtoold" className="p-2 m-2 hover:bg-primary">
              Date : Olf to New
            </option>
          </select>
        </div>
      </div>
      <div className="mt-3">
        <h1 className="font-Lato text-start text-lg font-semibold text-gray-500">
          Types of Posts
        </h1>
        <div className="mt-2">
          <select
            name="postType"
            id="postType"
            className="rounded border-gray-300 font-Lato w-full font-semibold text-gray-500 focus:ring-primary focus:ring-offset-primary focus:border-primary"
          >
            <option value="newtoold">Premium Membership</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col justify-start">
          <Category />
          <Location />
        </div>
      </div>
    </div>
  );
}

export default FilterPanel;
