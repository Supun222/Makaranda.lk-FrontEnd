import { Outlet } from "react-router-dom";
import AdminHeader from "../../../Lib/AdminHeader";
import SideBar from "../../../Lib/SideBar";

function Home() {
  return (
    <main className="h-screen">
      <AdminHeader />
      <div className="flex flex-row justify-start h-screen">
        <SideBar />
        <section className="p-5 bg-slate-100 flex items-center w-full">
          <Outlet />
        </section>
      </div>
    </main>
  );
}

export default Home;
