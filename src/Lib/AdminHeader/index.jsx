import { useSelector } from "react-redux";
import MakarandaLogo from "../../Assets/Icons/Makaranda.lk.png";
import UserIcon from "../../Assets/Icons/Svgs/User";
import { selectUser } from "../../Features/userSlice";

function AdminHeader() {
  const user = useSelector(selectUser);

  return (
    <header className="flex flex-row justify-between items-center w-full border-b p-2 bg-gray-50">
      <div className="flex flex-row items-center shadow p-3 rounded-md bg-yellow-50">
        <img src={MakarandaLogo} alt="makaranda.lk" className="w-12" />
        <h3 className="font-Lato font-medium text-secondaryText ml-3">
          Makaranda.lk
        </h3>
      </div>
      <h3 className="font-Lato font-semibold text-2xl text-gray-600 ml-3 tracking-widest uppercase">
        Welcome
      </h3>
      <div className="flex flex-row items-center mr-5">
        <div>
          <div>
            {user ? (
              <div className="flex flex-row items-center">
                <p className="p-2 w-12 text-center text-xl font-Lato font-semibold rounded-full text-primary bg-white capitalize">
                  {user.username.charAt(0)}
                </p>
                <p className="font-Lato ml-3 text-gray-500 font-semibold hidden md:block capitalize">
                  {user.username}
                </p>
              </div>
            ) : (
              <div className="flex flex-row items-center">
                <UserIcon classlist="h-6 md:h-9 fill-gray-300" />
                <p className="font-Lato ml-3 text-gray-500 font-semibold hidden md:block capitalize">
                  Login
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
