/* eslint-disable react/prop-types */
import React from "react";

function Introduction({ ServiceType, Description }) {
  return (
    <div className="bg-gray-100 rounded-md max-w-96 p-5">
      <header className="font-Lato font-semibold text-gray-700 text-lg">
        Intro
      </header>
      <h3 className="font-Lato capitalize font-semibold text-gray-600 text-center">
        {ServiceType} Category
      </h3>
      <hr className="bg-primary h-1 rounded" />
      <p className="up! font-Lato text-gray-500 mt-2 text-justify">
        {Description}
      </p>
    </div>
  );
}

export default Introduction;
