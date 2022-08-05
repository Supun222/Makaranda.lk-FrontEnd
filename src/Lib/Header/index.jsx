import "../../Utils/Abstract/Typography.scss";
import Makarandalogo from "../../Assets/Icons/Makaranda.lk.png";
import ChatIcon from "../../Assets/Icons/Svgs/Chat";
import UserIcon from "../../Assets/Icons/Svgs/User";
import LocationIcon from "../../Assets/Icons/Svgs/Location";
import SearchIcon from "../../Assets/Icons/Svgs/Search";

function MainHeader() {
  return (
    <main className="bg-gradient-to-b from-tertary h-60">
      <div className="container mx-auto">
        <div className="flex flex-row md:ml-8 md:mr-8 justify-between">
          <div className="flex flex-row mt-5 items-center mx-auto md:mx-0">
            <img src={Makarandalogo} alt="Makaranda.lk" className="w-14" />
            <h1 className="font-Lato font-medium text-primary ml-3">
              Makaranda.lk
            </h1>
            <div className="flex flex-row items-center">
              <p className="ml-5 pt-1/2 pb-1/2 pl-2 pr-3 border rounded-sm border-primary text-primary font-Lato">
                Sinhala
              </p>
              <p className="pt-1/2 pb-1/2 pl-2 pr-3 border rounded-sm border-primary text-primary font-Lato">
                Tamil
              </p>
            </div>
          </div>
          <div className="hidden md:flex md:flex-row md:mt-5 items-center">
            <a href="/login">
              <div className="flex flex-row items-center ml-5">
                <ChatIcon />
                <p className="font-Lato ml-3 mr-8 text-primary font-medium">
                  Chat
                </p>
              </div>
            </a>
            <a href="/chat">
              <div className="flex flex-row items-center">
                <UserIcon />
                <p className="font-Lato ml-3 text-primary font-medium">Login</p>
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-5 md:mt-3">
          <button
            type="button"
            className="flex flex-row items-center bg-primary rounded-2xl pl-3 pr-4 pt-1 pb-1"
          >
            <LocationIcon />
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
              className="font-Lato tracking-wide w-80 ml-4 placeholder-gray-500 border border-white focus:outline-none text-gray-600"
            />
            <button type="button" className="rounded-full bg-primary p-2">
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainHeader;
