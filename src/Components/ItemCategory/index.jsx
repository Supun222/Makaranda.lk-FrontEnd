/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios";

function BrowserItemsByCategory() {
  const { category, location } = useState();
  const [serviceType, setServiceType] = useState([]);

  const getALlserviceTypes = async () => {
    try {
      await axios
        .get("/category/all")
        .then((res) => setServiceType(res.data.Category))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getALlserviceTypes();
  }, []);

  return (
    <div className="grid gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-4 md:ml-0 lg:ml-6 xl:ml-4 xl:w-11/12 h-96 overflow-y-auto md:h-auto md:overflow-y-clip mt-5">
      {serviceType.map((item) => (
        <Link
          to={`/timeline/${category}/${location}/${item.category_name}`}
          key={item._id}
          className="flex flex-row items-center mt-5 ml-1 w-fit"
        >
          <img src={item.picture} alt="itemcategory" className="w-20" />
          <div className="flex flex-col ml-2 justify-start">
            <h5 className="font-Lato max-w-[12rem] text-secondaryText capitalize">
              {item.category_name.length < 20
                ? item.category_name
                : `${item.category_name.slice(0, 14)}...`}
            </h5>
            <p className="font-Lato max-w-[12rem] text-secondaryText place w-fit">
              120
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BrowserItemsByCategory;
