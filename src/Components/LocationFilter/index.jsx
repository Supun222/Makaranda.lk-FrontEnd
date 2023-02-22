/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../axios/index";

function Location() {
  const [Locations, setsubLocation] = useState([]);
  const { category } = useParams();

  const renderCategories = () => {
    axios
      .get("/location/count")
      .then((response) => setsubLocation(response.data.result));
  };

  useEffect(() => {
    renderCategories();
  }, []);

  return (
    <div className="mt-4">
      <hr className="h-2" />
      <Link to={`/timeline/${category}/all`}>
        <h3 className="font-Lato text-start text-lg font-semibold text-gray-500">
          All Locations
        </h3>
      </Link>
      <div className="flex flex-col justify-center mt-2">
        {Locations && Locations.length > 0 ? (
          Locations.map((item) => (
            <div
              className="font-Lato text-lg font-semibold text-primary text-start mt-1 capitalize"
              key={item._id}
            >
              <Link
                to={`/timeline/${category}/${item.location_name}`}
                className="inline-flex mt-2"
              >
                {item._id} <p className="text-gray-500 ml-2">({item.count})</p>
              </Link>
            </div>
          ))
        ) : (
          <h1>No categories</h1>
        )}
      </div>
    </div>
  );
}

export default Location;
