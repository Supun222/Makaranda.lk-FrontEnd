import { Outlet } from "react-router-dom";
import MainHeader from "../../Lib/Header";
import Footer from "../../Lib/Footer";
import MainCategory from "../../Components/MainCategory";
import PackageBucket from "../../Components/PackageCart";

function WeddingPackages() {
  return (
    <div className="h-screen">
      <MainHeader />
      <div className="container mx-auto grid grid-cols-12 gap-3">
        <MainCategory />
        <Outlet />
        <PackageBucket />
      </div>
      <div className="flex-initial w-full">
        <Footer />
      </div>
    </div>
  );
}

export default WeddingPackages;
