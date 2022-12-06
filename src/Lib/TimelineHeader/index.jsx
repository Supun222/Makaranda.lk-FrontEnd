import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "../../Features/userSlice";
import "../../Utils/Abstract/Typography.scss";
import Makarandalogo from "../../Assets/Icons/Makaranda.lk.png";
import ChatIcon from "../../Assets/Icons/Svgs/Chat";
import UserIcon from "../../Assets/Icons/Svgs/User";
import banner from "../../Assets/Images/banner.png";
import LogOutIcon from "../../Assets/Icons/Svgs/LogOut";

function TimelineHeader() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOut = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
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
            <Link to="/chat">
              <div className="flex flex-row items-center ml-5 mr-2">
                <ChatIcon classList="h-3 md:h-10 fill-white" />
                <p className="font-Lato ml-3 mr-8 text-primary font-medium hidden md:block">
                  Chat
                </p>
              </div>
            </Link>
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
        <div className="mt-5 flex justify-center">
          <img src={banner} alt="asd" className="w-7/12" />
        </div>
      </div>
    </main>
  );
}

export default TimelineHeader;
