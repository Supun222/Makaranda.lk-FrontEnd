/* eslint-disable react/prop-types */
import Ratings from "../Ratings";
import ProfilePic from "../../Assets/Images/Profile/profile.jpg";

// eslint-disable-next-line react/prop-types
function FilterData({ AvailablePackages }) {
  //   console.log(AvailablePackages);
  return (
    <div className="flex flex-col mt-5 ">
      {AvailablePackages && AvailablePackages.length > 0 ? (
        AvailablePackages.map((item) => (
          <div
            className="bg-slate-100 rounded-md w-full p-3 mb-3"
            key={item.profile_id}
          >
            <header className="flex flex-row border-b-4 border-b-slate-300 pb-2 justify-between">
              <div className="flex flex-row items-center">
                <img
                  src={ProfilePic}
                  alt="profile"
                  className="w-10 rounded-full"
                />
                <p className="font-Lato text-gray-600 font-semibold text-lg tracking-wide ml-2">
                  {item.profile_name}
                </p>
              </div>
              <Ratings />
            </header>
            <div className="flex flex-col justify-center">
              <div className="flex flex-row justify-between mt-2">
                <div className="flex flex-row items-center">
                  <h4 className="capitalize font-Lato text-gray-500">
                    packages :{" "}
                  </h4>
                  <p className="capitalize font-Lato text-yellow-400 ml-2">
                    {item.package_name} Package
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <h4 className="capitalize font-Lato text-gray-500 mr-2">
                    Package Price :
                  </h4>
                  <p className="font-Lato text-blue-500"> {item.price} LKR</p>
                </div>
              </div>
              <div className="mt-2 font-Lato text-gray-600 flex flex-row items-start">
                <h4 className="capitalize font-Lato text-gray-500 mr-2">
                  details :
                </h4>
                <p>{item.package_details}</p>
              </div>
            </div>
            <footer className="flex justify-end mt-2">
              <button
                className="p-1 pr-2 pl-2 capitalize bg-primary rounded-md text-gray-100 font-Lato font-medium"
                type="button"
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