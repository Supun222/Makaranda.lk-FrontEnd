import { Link } from "react-router-dom";
import "../../Utils/Abstract/Typography.scss";
import Makarandalogo from "../../Assets/Icons/Makaranda.lk.png";
import ChatIcon from "../../Assets/Icons/Svgs/Chat";
import UserIcon from "../../Assets/Icons/Svgs/User";
import banner from "../../Assets/Images/banner.png";

function TimelineHeader() {
  return (
    <main className="bg-gradient-to-b from-tertary h-60">
      <div className="container mx-auto">
        <div className="flex flex-row ml-2 mr-2 md:ml-3 md:mr-3 lg:ml-5 justify-between items-center">
          <div className="flex flex-row mt-5 items-center md:mx-0 justify-start">
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
          </div>
          <div className="flex flex-row mt-5 items-center">
            <Link to="/chat">
              <div className="flex flex-row items-center ml-5 mr-2">
                <ChatIcon classList="h-3 md:h-10 fill-white" />
                <p className="font-Lato ml-3 mr-8 text-primary font-medium hidden md:block">
                  Chat
                </p>
              </div>
            </Link>
            <Link to="/login">
              <div className="flex flex-row items-center">
                <UserIcon classlist="h-6 md:h-9 fill-white" />
                <p className="font-Lato ml-3 text-primary font-medium hidden md:block">
                  Login
                </p>
              </div>
            </Link>
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