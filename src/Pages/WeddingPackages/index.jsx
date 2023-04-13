import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import MainHeader from "../../Lib/Header";
import Footer from "../../Lib/Footer";
import MainCategory from "../../Components/MainCategory";
import PackageBucket from "../../Components/PackageCart";

function WeddingPackages() {
  useEffect(() => {
    // console.log(JSON.parse(localStorage.getItem("SearchedPacks")));
  }, []);

  return (
    <div className="h-screen">
      <MainHeader />
      <div className="container mx-auto grid grid-cols-12 gap-3 min-h-[33rem]">
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
