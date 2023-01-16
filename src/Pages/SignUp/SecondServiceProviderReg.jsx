/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";

function SecondServiceProviderReg() {
  const [serviceType, setServiceType] = useState([]);
  const [selectedType, setSelectedType] = useState();
  const [subCategory, setsubCategory] = useState([]);
  const [selectedSubCat, setSelectedSubCat] = useState([]);
  const [location, setLocation] = useState([]);
  const [allLocations, setAllLocation] = useState([]);
  const [selectedlocation, SetSelectedLocation] = useState([]);
  const [decription, setDescription] = useState([]);
  const navigate = useNavigate();

  const setDetails = async () => {
    const secondData = {
      serviceType: selectedType,
      SubCategory: selectedSubCat,
      locations: selectedlocation,
      details: decription,
    };
    localStorage.setItem("secondData", JSON.stringify(secondData));
    navigate("/user/Service/new/profiledetails");
  };

  const getServiceTypes = async () => {
    await axios
      .get("/category/all")
      .then((res) => setServiceType(res.data.Category))
      .catch((err) => console.log(err));
  };

  const getAllLocation = async () => {
    await axios
      .get("/location/all")
      .then((res) => setLocation(res.data.locations))
      .catch((err) => console.log(err));
    location.forEach((loc) => {
      setAllLocation([...allLocations, loc.location_name]);
    });
    // console.log(allLocations);
  };

  useEffect(() => {
    getServiceTypes();
    getAllLocation();
  }, []);

  useEffect(() => {
    // console.log(subCategory);
    serviceType.every((type) => {
      if (type.category_name === selectedType) {
        setsubCategory(type.subcategory);
        return false;
      }
      return true;
    });
  }, [selectedType]);

  useEffect(() => {
    setSelectedSubCat([]);
  }, [selectedType]);

  return (
    <div className="container mx-auto h-screen flex items-center w-screen justify-center m-10">
      <form
        action=""
        className="flex flex-col rounded-md shadow-2xl border-2 border-gray-300 p-5 w-3/5"
      >
        <h2 className="font-Lato font-semibold text-primary text-3xl mb-5">
          Register
        </h2>
        <div className="relative z-0 mb-3 w-full group">
          <div className="flex justify-center w-full">
            <div className="mb-3 w-full">
              <label
                htmlFor="serviceType"
                className="font-Lato font-semibold text-gray-500 text-xl w-full"
              >
                Service Type <span className="text-red-600"> *</span>
              </label>
              <select
                className="form-select appearance-none block w-full px-3 mt-2 py-1.5 text-base font-normal  text-gray-500  bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:ring-orange-600 focus:ring-offset-orange-600 focus:outline-none "
                aria-label="Default select example"
                onChange={(e) => setSelectedType(e.target.value)}
                name="serviceType"
                defaultValue="DEFAULT"
              >
                <option disabled value="DEFAULT">
                  -- select type --
                </option>
                {serviceType.map((type) => (
                  <option
                    value={type.category_name}
                    // eslint-disable-next-line no-underscore-dangle
                    key={type._id}
                  >
                    {type.category_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-3">
            {subCategory && subCategory.length > 0 ? (
              subCategory.map((sub) => (
                <div className="flex  items-center mt-1" key={sub}>
                  <input
                    type="checkbox"
                    className="ml-5 rounded-sm focus:ring-0 focus:ring-offset-0 focus:bg-primary checked:bg-primary w-5 h-5 "
                    name={sub}
                    value={sub}
                    id={sub}
                    onClick={(e) =>
                      setSelectedSubCat([...selectedSubCat, e.target.value])
                    }
                  />
                  <label
                    htmlFor={sub}
                    className="capitalize ml-2 font-Lato text-gray-500 text-lg font-medium tracking-wide"
                  >
                    {sub}
                  </label>
                </div>
              ))
            ) : (
              <div />
            )}
          </div>
          <div className="flex justify-center w-full mt-3">
            <div className="mb-3 w-full">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="font-Lato font-semibold text-gray-500 text-xl w-full"
              >
                Description <span className="text-red-600"> *</span>
              </label>
              <div className="flex justify-center">
                <div className="w-full mt-2">
                  <textarea
                    className=" form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-500  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:ring-orange-600 focus:ring-offset-orange-600 focus:outline-none "
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="-- description --"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full mt-3">
            <div className="mb-3 w-full">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="font-Lato font-semibold text-gray-500 text-xl w-full"
              >
                Service Locations <span className="text-red-600"> *</span>
              </label>
            </div>
            <div>
              <div className="flex justify-start items-center mb-2">
                <input
                  type="checkbox"
                  className="ml-5 rounded-sm focus:ring-0 focus:ring-offset-0 focus:bg-primary checked:bg-primary w-5 h-5 "
                  name="All"
                  value={allLocations}
                  id="All"
                  onClick={(e) => SetSelectedLocation(e.target.value)}
                />
                <label
                  htmlFor="All"
                  className="capitalize ml-2 font-Lato text-gray-500 text-lg font-medium tracking-wide"
                >
                  All
                </label>
              </div>
              {location.map((loc) => (
                <div className="flex  items-center mt-1" key={loc._id}>
                  <input
                    type="checkbox"
                    className="ml-5 rounded-sm focus:ring-0 focus:ring-offset-0 focus:bg-primary checked:bg-primary w-5 h-5 "
                    name={loc.location_name}
                    id={loc.location_name}
                    value={loc.location_name}
                    onClick={(e) =>
                      SetSelectedLocation([...selectedlocation, e.target.value])
                    }
                  />
                  <label
                    htmlFor={loc.location_name}
                    className="capitalize ml-2 font-Lato text-gray-500 text-lg font-medium tracking-wide"
                  >
                    {loc.location_name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="font-Lato font-medium rounded-md bg-primary pl-3 pr-3 ml-3 mt-3 md:w-52 xl:w-60 pt-0.5 pb-0.5 text-gray-100 hover:text-amber-50 border-2 border-primary hover:border-primary hover:bg-amber-600 hover:bg-tran transition-all hover:transition-all hover:ease-in-out hover:delay-50"
            onClick={setDetails}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default SecondServiceProviderReg;
