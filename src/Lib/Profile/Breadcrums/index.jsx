/* eslint-disable react/style-prop-object */
import React from "react";
import DancingIcon from "../../../Assets/Icons/DancingGroups.png";

function Breadcrums() {
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
              <h1 className="font-Lato font-semibold text-xl">
                Dancing Groups
              </h1>
            </a>
          </li>
          <li>
            <span className="font-Lato font-semibold text-xl mx-2">/</span>
          </li>
          <li className="font-Lato font-semibold text-xl text-primary">
            Thathari Dancing Crew
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrums;
