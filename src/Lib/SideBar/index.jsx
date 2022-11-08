import { Link } from "react-router-dom";
import DashboardIcon from "../../Assets/Icons/Svgs/Dashboard";
import LocationIcon from "../../Assets/Icons/Svgs/Location";
import MembershipIcon from "../../Assets/Icons/Svgs/Membership";
import LogOutIcon from "../../Assets/Icons/Svgs/LogOut";
import ServiceIcon from "../../Assets/Icons/Svgs/Services";

function SideBar() {
  const addCurrentTagInditicator = () => {
    // document.getElementById("dashobard").classList.remove("bg-yellow-50");
    // document.getElementById("dashobard").classList.add("bg-black");
    // document.querySelector("bg-yellow-50").classList.toggle("bg-black");
  };

  return (
    <nav className="p-3 border-r flex flex-col justify-between">
      <ul className="w-44">
        <li className="mt-2 flex flex-row items-center w-full">
          <Link
            to="/admin/dashboard"
            className="flex flex-row justify-start bg-yellow-50 focus:bg-yellow-100 hover:bg-yellow-100 rounded-sm w-full h-8"
            onClick={addCurrentTagInditicator}
          >
            <hr className="bg-yellow-50 h-11 w-1" id="dashobard" />
            <div className="inline-flex justify-start items-center p-2 ml-1 mt-1 w-full">
              <DashboardIcon />
              <p className="ml-1 max-w-xs font-Lato text-primaryText font-semibold pl-1 pr-1">
                Dashbord
              </p>
            </div>
          </Link>
        </li>
        <li className="mt-2 flex flex-row items-center w-full">
          <Link
            to="/admin/membership"
            className="flex flex-row justify-start bg-yellow-50 focus:bg-yellow-100 hover:bg-yellow-100  rounded-sm w-full h-8 mt-3"
          >
            <div className="inline-flex justify-start items-center p-2 ml-1 mt-1 w-full">
              <MembershipIcon classList="w-6 fill-black" />
              <p className="ml-2 max-w-xs font-Lato text-primaryText font-semibold pl-1 pr-1">
                Membership
              </p>
            </div>
          </Link>
        </li>
        <li className="mt-2 flex flex-row items-center w-full">
          <Link
            to="/admin/membership"
            className="flex flex-row justify-start bg-yellow-50 focus:bg-yellow-100 hover:bg-yellow-100 rounded-sm w-full h-8 mt-3"
          >
            <div className="inline-flex justify-start items-center p-2 ml-1 mt-1 w-full">
              <LocationIcon classList="w-5" />
              <p className="ml-3 max-w-xs font-Lato text-primaryText font-semibold pl-1 pr-1">
                Location
              </p>
            </div>
          </Link>
        </li>
        <li className="mt-2 flex flex-row items-center w-full">
          <Link
            to="/admin/membership"
            className="flex flex-row justify-start bg-yellow-50 focus:bg-yellow-100 hover:bg-yellow-100 rounded-sm w-full h-8 mt-3"
          >
            <div className="inline-flex justify-start items-center p-2 ml-1 mt-1 w-full">
              <ServiceIcon classList="w-6" />
              <p className="ml-2 max-w-xs font-Lato text-primaryText font-semibold pl-1 pr-1">
                Service
              </p>
            </div>
          </Link>
        </li>
      </ul>
      <ul className="w-44">
        <li className="mt-2 flex flex-row items-center w-full">
          <Link
            to="/admin/login"
            className="flex flex-row justify-start bg-yellow-50 focus:bg-yellow-100 hover:bg-yellow-100 rounded-sm w-full h-8"
          >
            <hr className="bg-yellow-50 h-11 w-1" id="dashobard" />
            <div className="inline-flex justify-start items-center p-2 ml-1 mt-1 w-full">
              <LogOutIcon classList="w-6 fill-black" />
              <p className="ml-2 max-w-xs font-Lato text-primaryText font-semibold pl-1 pr-1">
                Log Out
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
