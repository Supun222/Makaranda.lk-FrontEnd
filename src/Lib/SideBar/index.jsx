import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import DashboardIcon from "../../Assets/Icons/Svgs/Dashboard";
import LocationIcon from "../../Assets/Icons/Svgs/Location";
import MembershipIcon from "../../Assets/Icons/Svgs/Membership";
import LogOutIcon from "../../Assets/Icons/Svgs/LogOut";
import ServiceIcon from "../../Assets/Icons/Svgs/Services";
import { logout } from "../../Features/userSlice";

function SideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/admin/login");
  };

  return (
    <nav className="p-3 border-r flex flex-col justify-between bg-white w-72">
      <ul className="w-full">
        <li className="mt-2 flex flex-row items-center w-full">
          <Link
            to="/admin/dashboard"
            className="flex flex-row justify-start bg-slate-50 focus:bg-slate-300 hover:bg-slate-200 rounded-sm w-full mt-3"
          >
            {/* <hr className="bg-yellow-50 h-8 w-1 rounded-sm" id="dashobard" /> */}
            <div className="inline-flex justify-start items-center p-3 w-full">
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
            className="flex flex-row justify-start bg-slate-50 focus:bg-slate-300 hover:bg-slate-200 rounded-sm w-full mt-3"
          >
            <div className="inline-flex justify-start items-center p-3 w-full">
              <MembershipIcon classList="w-6 fill-black" />
              <p className="ml-2 max-w-xs font-Lato text-primaryText font-semibold pl-1 pr-1">
                Membership
              </p>
            </div>
          </Link>
        </li>
        <li className="mt-2 flex flex-row items-center w-full">
          <Link
            to="/admin/location"
            className="flex flex-row justify-start bg-slate-50 focus:bg-slate-300 hover:bg-slate-200 rounded-sm w-full mt-3"
          >
            <div className="inline-flex justify-start items-center p-3 w-full">
              <LocationIcon classList="w-5" />
              <p className="ml-3 max-w-xs font-Lato text-primaryText font-semibold pl-1 pr-1">
                Location
              </p>
            </div>
          </Link>
        </li>
        <li className="mt-2 flex flex-row items-center w-full">
          <Link
            to="/admin/category"
            className="flex flex-row justify-start bg-slate-50 focus:bg-slate-300 hover:bg-slate-200 rounded-sm w-full mt-3"
          >
            <div className="inline-flex justify-start items-center p-3 w-full">
              <ServiceIcon classList="w-6" />
              <p className="ml-2 max-w-xs font-Lato text-primaryText font-semibold pl-1 pr-1">
                Service
              </p>
            </div>
          </Link>
        </li>
      </ul>
      <ul className="w-full">
        <li className="mt-2 flex flex-row items-center w-full">
          <Link
            to="/admin/login"
            type="button"
            className="flex flex-row justify-start bg-slate-50 focus:bg-slate-300 hover:bg-slate-200 rounded-sm w-full mt-3"
            onClick={() => logOut()}
          >
            <div className="inline-flex justify-start items-center p-3 w-full">
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
