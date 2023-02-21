import React from "react";
import { Link } from "react-router-dom";
import MainHeader from "../../Lib/Header/index";
import BrowserItemsByCategory from "../../Components/ItemCategory";
import StartMakingMoneyIcon from "../../Assets/Icons/StartMakingMoney.png";
import WeddingPacks from "../../Assets/Icons/WeddingPacks.png";
import PlusIcon from "../../Assets/Icons/Svgs/Plus";
import ExploreIcon from "../../Assets/Icons/Svgs/Explore";
import QuickLinks from "../../Components/QuixkLinks";
import Footer from "../../Lib/Footer/index";

function Home() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <main>
      <MainHeader />
      <div className="container mx-auto">
        <div className="ml-5 md:ml-15 lg:ml-20 xl:ml-40">
          <h3 className="font-Lato font-semibold text-primaryText tracking-wide">
            Browser Item by Cateogry
          </h3>
          <BrowserItemsByCategory />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-10">
          <div className="flex flex-row border justify-center p-2 items-center bg-white drop-shadow-xl xl:pr-5">
            <img
              src={StartMakingMoneyIcon}
              alt="PostAd"
              className="w-28 xl:mr-2"
            />
            <div className="flex flex-col justify-center md:justify-start">
              <h3
                className="font-Lato text-secondaryText font-semibold"
                name="postads"
              >
                Start Making Money
              </h3>
              <p className="max-w-xs font-Lato text-secondaryText leading-tight tracking-wide">
                Do you have something to sell? <br /> Post your first ad and
                making money!
              </p>
              <button
                type="button"
                className="flex flex-row items-center bg-primary w-fit rounded-full pl-2 pr-2 pt-1/2 pb-1/2 mt-1"
              >
                <PlusIcon />
                <p className="max-w-xs font-Lato text-primaryText font-semibold pl-1 pr-1">
                  Post your ad here
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-row border sm:justify-center p-2 items-center bg-white drop-shadow-xl xl:pr-5 mt-5 md:mt-0">
            <img
              src={WeddingPacks}
              alt="WeddingPackages"
              className="w-28 xl:mr-2"
            />
            <div className="flex flex-col ">
              <h3 className="font-Lato text-secondaryText font-semibold">
                looking for Packages
              </h3>
              <p className="max-w-xs font-Lato text-secondaryText leading-tight tracking-wide">
                Looking for wedding packages?
                <br /> Get packages with your own budgets !
              </p>
              <Link
                to="/package_bundle/dance"
                className="flex flex-row items-center bg-sky-400 w-fit rounded-full pl-2 pr-2 pt-1/2 pb-1/2 mt-1"
              >
                <ExploreIcon />
                <p className="max-w-xs font-Lato text-primaryText font-semibold pl-1 pr-1">
                  Explore more
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <h3 className="font-Lato font-semibold text-primaryText tracking-wide ml-5 md:ml-15 lg:ml-20 xl:ml-40 mt-10">
            Quik Links
          </h3>
          <QuickLinks />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Home;
