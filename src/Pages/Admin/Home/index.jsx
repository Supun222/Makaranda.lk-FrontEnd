import { Outlet } from "react-router-dom";
import AdminHeader from "../../../Lib/AdminHeader";
import SideBar from "../../../Lib/SideBar";

function Home() {
  return (
    <main className="h-screen">
      <AdminHeader />
      <div className="flex flex-row h-full">
        <SideBar />
        <div className="p-5 bg-slate-100 w-full flex items-center">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default Home;
