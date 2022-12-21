import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilterIcon from "../../Assets/Icons/Svgs/Filter";
import ProfilePic from "../../Assets/Images/Profile/profile.jpg";
import Ratings from "../Ratings";
import axios from "../../axios";

function FilterPackages() {
  const [minprice, setMinPrice] = useState();
  const [maxprice, setMaxPrice] = useState();
  const [currentPrice, setCurrentPrice] = useState(80);
  const { serviceType } = useParams();
  const [currentType, setCurrentType] = useState(serviceType);
  // interface package {
  //   profile_id: string;
  //   profile_name: string;
  //   package_name: string;
  //   package_details: string;
  //   price: number;
  // }

  const [data, setData] = useState();
  // const [packs, setPacks] = useState([]);

  const getPacks = async () => {
    axios
      .get(`/user/package/service_type=${currentType}`)
      .then((res) => setData(res.data));
  };

  function gettingdata() {
    data.map((item) => console.log(item.packages));
  }

  useEffect(() => {
    setMinPrice(0);
    setMaxPrice(10000);
    setCurrentType(serviceType);
    getPacks();
    gettingdata();
  }, []);

  return (
    <div className="col-span-6 bg-white border border-gray-300 p-3 rounded-md">
      <h2 className="font-Lato font-semibold text-slate-600 capitalize mb-3">
        Wedding / Party Packs
      </h2>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row">
          <button type="button" className="flex flex-row items-center">
            <FilterIcon classList="w-6 mr-1" />
            <p className="font-Lato font-medium text-base">Filter</p>
          </button>
        </div>
        <input
          type="text"
          placeholder="Serch here"
          className="p-1 bg-white rounded text-gray-700 h-8"
        />
        <div className="flex flex-col items-center">
          <div className="flex flex-row justify-between items-center">
            <p className="font-Lato font-semibold text-sm text-primary">
              {minprice}
            </p>
            <span className="font-semibold  mt-0 text-primary"> - </span>
            <p className="font-Lato font-semibold text-sm text-primary">
              {currentPrice} LKR
            </p>
          </div>
          <div className="flex flex-row items-center">
            <p className="mr-2 capitalize font-Lato font-semibold">price :</p>
            <input
              type="range"
              min={minprice}
              max={maxprice}
              value={currentPrice}
              onChange={(e) => setCurrentPrice(e.target.value)}
              className=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-5">
        <div className="bg-slate-100 rounded-md w-full p-3">
          <header className="flex flex-row border-b-4 border-b-slate-300 pb-2 justify-between">
            <div className="flex flex-row items-center">
              <img
                src={ProfilePic}
                alt="profile"
                className="w-10 rounded-full"
              />
              <p className="font-Lato text-gray-600 font-semibold text-lg tracking-wide ml-2">
                Thathari Dance
              </p>
            </div>
            <Ratings />
          </header>
          <div className="flex flex-col justify-center">
            <div className="flex flex-row justify-between mt-2">
              <div className="flex flex-row items-center">
                <h4 className="capitalize font-Lato text-gray-500">
                  package :{" "}
                </h4>
                <p className="capitalize font-Lato text-yellow-400 ml-2">
                  Golden Package
                </p>
              </div>
              <div className="flex flex-row items-center">
                <h4 className="capitalize font-Lato text-gray-500 mr-2">
                  Package Price :
                </h4>
                <p className="font-Lato text-blue-500"> 20,000 LKR</p>
              </div>
            </div>
            <div className="mt-2 font-Lato text-gray-600 flex flex-row items-start">
              <h4 className="capitalize font-Lato text-gray-500 mr-2 w-28">
                details :
              </h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ra
              </p>
            </div>
          </div>
          <footer className="flex justify-end mt-2">
            <button
              className="p-1 pr-2 pl-2 capitalize bg-primary rounded-md text-gray-100 font-Lato font-medium"
              type="button"
            >
              select
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default FilterPackages;
