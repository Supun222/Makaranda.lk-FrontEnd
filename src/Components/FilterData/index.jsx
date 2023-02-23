/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Ratings from "../Ratings";
import { setItemCard } from "../../Features/packageCard";

// eslint-disable-next-line react/prop-types
function FilterData({ AvailablePackages }) {
  //   console.log(AvailablePackages);

  // const [items, SetItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({
    Profile_id: null,
    Profile_name: null,
    Propic: null,
    Package_id: null,
    PackageName: null,
    Price: null,
  });
  const dispatch = useDispatch();

  const setItems = () => {
    dispatch(
      setItemCard({
        // eslint-disable-next-line no-underscore-dangle
        profile_id: selectedItem.Profile_id,
        profile_name: selectedItem.Profile_name,
        pro_pic: selectedItem.Propic,
        package_id: selectedItem.Package_id,
        packagename: selectedItem.PackageName,
        price: selectedItem.Price,
      })
    );
  };

  useEffect(() => {
    setItems();
  }, [selectedItem]);

  return (
    <div className="flex flex-col mt-5 w-full">
      {AvailablePackages && AvailablePackages.length > 0 ? (
        AvailablePackages.map((item) => (
          <div
            className="bg-slate-100 rounded-md w-full p-3 mb-3"
            key={item.key_id}
          >
            <header className="flex flex-row border-b-4 border-b-slate-300 pb-2 justify-between">
              <div className="flex flex-row items-center">
                <img
                  src={item.pro_pic}
                  alt="profile"
                  className="w-10 rounded-full"
                />
                <p className="font-Lato text-gray-600 font-semibold text-lg tracking-wide ml-2 capitalize">
                  {item.profile_name}
                </p>
              </div>
              <Ratings />
            </header>
            <div className="flex flex-col justify-center">
              <div className="flex flex-row justify-between mt-2">
                <div className="flex flex-row items-center">
                  <h4 className="capitalize font-Lato text-gray-500 w-fit">
                    packages :{" "}
                  </h4>
                  <p className="capitalize font-Lato text-yellow-400 ml-2">
                    {item.package_name} Package
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <h4 className="capitalize font-Lato text-gray-500 mr-2 w-fit">
                    Package Price :
                  </h4>
                  <p className="font-Lato text-blue-500"> {item.price} LKR</p>
                </div>
              </div>
              <div className="mt-2 font-Lato text-gray-600 flex flex-row items-start">
                <h4 className="capitalize font-Lato text-gray-500 mr-2">
                  details:
                </h4>
                <p className=" font-Lato text-gray-500 ml-5">
                  {item.package_details}
                </p>
              </div>
            </div>
            <footer className="flex justify-end mt-2">
              <button
                className="p-1 pr-2 pl-2 capitalize bg-primary rounded-md text-gray-100 font-Lato font-medium"
                type="button"
                onClick={() =>
                  setSelectedItem({
                    Profile_id: item.profile_id,
                    Profile_name: item.profile_name,
                    Propic: item.pro_pic,
                    Package_id: item.key_id,
                    PackageName: item.package_name,
                    Price: item.price,
                  })
                }
              >
                select
              </button>
            </footer>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center w-full bg-slate-50 rounded-md h-32">
          <h1 className="font-Lato font-semibold text-gray-600">
            No Items Available
          </h1>
        </div>
      )}
    </div>
  );
}

export default FilterData;
