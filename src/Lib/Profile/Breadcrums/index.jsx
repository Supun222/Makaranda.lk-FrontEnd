/* eslint-disable react/style-prop-object */
import React from "react";
import DancingIcon from "../../../Assets/Icons/DancingGroups.png";

// eslint-disable-next-line react/prop-types
function Breadcrums({ serviceType, profileName }) {
  return (
    <div>
      <nav className="rounded-md w-full mb-3">
        <ol className="list-reset flex items-center">
          <li>
            <a
              href="/timeline"
              className="text-gray-600 hover:text-gray-700 flex flex-row items-center"
            >
              <img src={DancingIcon} alt="dancing" className="w-20" />
              <h1 className="font-Lato font-semibold text-xl capitalize">
                {serviceType} category
              </h1>
            </a>
          </li>
          <li>
            <span className="font-Lato font-semibold text-xl mx-2">/</span>
          </li>
          <li className="capitalize font-Lato font-semibold text-xl text-primary">
            {profileName}
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrums;
