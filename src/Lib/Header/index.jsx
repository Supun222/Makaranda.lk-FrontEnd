import { Link } from "react-router-dom";
import "../../Utils/Abstract/Typography.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { logout, selectUser } from "../../Features/userSlice";
import Makarandalogo from "../../Assets/Icons/Makaranda.lk.png";
import ChatIcon from "../../Assets/Icons/Svgs/Chat";
import UserIcon from "../../Assets/Icons/Svgs/User";
import LocationIcon from "../../Assets/Icons/Svgs/Location";
import SearchIcon from "../../Assets/Icons/Svgs/Search";
import Booking from "../../Components/Booking";
import LogOutIcon from "../../Assets/Icons/Svgs/LogOut";

function MainHeader() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [UserRole, setUserRole] = useState("");
  const [userID, setUserId] = useState("");
  const [logged, setLogged] = useState(false);

  const logOut = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  useEffect(() => {
    if (user) {
      let users = {
        userID: String,
        role: String,
        token: String,
        email: String,
        username: String,
        loggedIn: Boolean,
      };
      users = user;
      setUserRole(users.role);
      setUserId(users.userID);
      setLogged(user.loggedIn);
      console.log(userID);
    }
  }, []);

  return (
    <main className="bg-gradient-to-b from-tertary h-60">
      <div className="container mx-auto">
        <div className="flex flex-row ml-2 mr-2 md:ml-3 md:mr-3 lg:ml-5 justify-between items-center">
          <Link
            to="/"
            className="flex flex-row mt-5 items-center md:mx-0 justify-start"
          >
            <img
              src={Makarandalogo}
              alt="Makaranda.lk"
              className="w-8 md:w-14"
            />
            <h1 className="font-Lato font-medium text-primary ml-3">
              Makaranda.lk
            </h1>
            <div className="hidden flex-row md:flex items-center">
              <p className="ml-5 pt-1/2 pb-1/2 pl-2 pr-3 border rounded-sm border-primary text-primary font-Lato text-xs">
                Sinhala
              </p>
              <p className="pt-1/2 pb-1/2 pl-2 pr-3 border rounded-sm border-primary text-primary font-Lato text-xs">
                Tamil
              </p>
            </div>
          </Link>
          <div className="flex flex-row mt-5 items-center">
            <div className="flex flex-row items-center ml-5 mr-2">
              <button
                type="button"
                className="flex flex-row items-center"
                data-bs-toggle="modal"
                data-bs-target="#bookingList"
              >
                {!logged ? (
                  <div className="flex flex-row items-center">
                    <ChatIcon classList="h-3 md:h-10 fill-white" />
                    <p className="font-Lato ml-3 mr-8 text-primary font-medium hidden md:block">
                      Bookings
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>
            {UserRole === "VISITOR" ? <Booking /> : <Booking />}
            <div>
              <div>
                {user ? (
                  <div className="flex flex-row items-center">
                    <p className="p-1 w-10 text-center text-xl font-Lato font-semibold rounded-full text-primary bg-white">
                      {user.username.charAt(0)}
                    </p>
                    <p className="font-Lato ml-3 text-primary font-medium hidden md:block capitalize">
                      {user.username}
                    </p>
                    <Link to="/login" onClick={() => logOut()}>
                      <LogOutIcon classList="w-8 fill-gray-50 ml-5" />
                    </Link>
                  </div>
                ) : (
                  <Link to="/login" className="flex flex-row items-center">
                    <UserIcon classlist="h-6 md:h-9 fill-white" />
                    <p className="font-Lato ml-3 text-primary font-medium hidden md:block capitalize">
                      Login
                    </p>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5 md:mt-3">
          <button
            type="button"
            className="flex flex-row items-center bg-primary rounded-2xl pl-3 pr-4 pt-1 pb-1"
          >
            <LocationIcon classList="w-5 fill-white" />
            <p className="font-Lato ml-2 text-white font-medium text-">
              All fo Sri Lanka
            </p>
          </button>
        </div>
        <div className="flex justify-center mt-5">
          <div className="flex flex-row w-72 md:w-96 h-10 bg-white rounded-3xl items-center justify-between">
            <input
              type="text"
              placeholder="What are you looking for ?"
              className="font-Lato tracking-wide w-60 md:w-80  ml-4 placeholder-gray-500 border border-white focus:outline-none text-gray-600 focus:ring-0 focus:ring-offset-0 focus:border-0"
            />
            <button
              type="button"
              className="rounded-full bg-primary w-8 h-8 mr-1 hover:bg-amber-600"
            >
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainHeader;
