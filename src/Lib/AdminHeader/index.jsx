import MakarandaLogo from "../../Assets/Icons/Makaranda.lk.png";
import UserIcon from "../../Assets/Icons/Svgs/User";

function AdminHeader() {
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
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center rounded-full bg-slate-100 p-3  mr-10 ">
          <UserIcon classlist="w-8 fill-slate-300" />
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
