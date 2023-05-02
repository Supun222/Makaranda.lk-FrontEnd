import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminHeader from "../../../Lib/AdminHeader";
import SideBar from "../../../Lib/SideBar";
import { selectUser } from "../../../Features/userSlice";
import AdminLogin from "../Login";

function Home() {
  const user = useSelector(selectUser);

  return (
    <main className="h-screen">
      {user && user.role === "ADMIN" ? (
        <div>
          <AdminHeader />
          <div className="flex flex-row justify-start h-screen">
            <SideBar />
            <section className="p-5 bg-slate-100 flex items-center w-full">
              <Outlet />
            </section>
          </div>
        </div>
      ) : (
        <div>
          <AdminLogin />
        </div>
      )}
    </main>
  );
}

export default Home;
