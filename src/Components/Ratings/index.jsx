import React from "react";
import StarIcon from "../../Assets/Icons/Svgs/Star";

function Ratings() {
  return (
    <div className="flex flex-row items-center">
      <h1 className="text-gray-400">Ratings</h1>
      <StarIcon ClassList="feather feather-star w-5 fill-yellow-300 text-yellow-300 ml-3" />
      <StarIcon ClassList="feather feather-star w-5 fill-yellow-300 text-yellow-300 ml-1" />
      <StarIcon ClassList="feather feather-star w-5 fill-yellow-300 text-yellow-300 ml-1" />
      <StarIcon ClassList="feather feather-star w-5 fill-yellow-300 text-yellow-300 ml-1" />
      <StarIcon ClassList="feather feather-star w-5 fill-gray-300 text-gray-300 ml-1" />
    </div>
  );
}

export default Ratings;
