import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios/index";

function Location() {
  const [Locations, setsubLocation] = useState([]);

  const renderCategories = () => {
    axios
      .get("/location/all")
      .then((response) => setsubLocation(response.data.locations));
  };

  console.log(Locations);

  useEffect(() => {
    renderCategories();
  }, []);

  return (
    <div className="mt-4">
      <hr className="h-2" />
      <Link to="/timeline/dancing/all">
        <h3 className="font-Lato text-start text-lg font-semibold text-gray-500">
          All Locations
        </h3>
      </Link>
      <div className="flex flex-col justify-center mt-2">
        {Locations && Locations.length > 0 ? (
          Locations.map((item) => (
            <div
              className="font-Lato text-lg font-semibold text-primary text-start mt-1"
              key={item.location_name}
            >
              <Link
                to={`/timeline/dancing/${item.location_name}`}
                className="inline-flex"
              >
                {item.location_name} <p className="text-gray-500 ml-2">(122)</p>
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
