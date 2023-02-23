import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilterIcon from "../../Assets/Icons/Svgs/Filter";
import axios from "../../axios";
import FilterData from "../FilterData";

function FilterPackages() {
  const [minprice, setMinPrice] = useState(0);
  const [maxprice, setMaxPrice] = useState(50000);
  const [currentPrice, setCurrentPrice] = useState(maxprice);
  const { serviceType } = useParams();
  const [changeset, SetChangeSet] = useState(false);
  const [data, setData] = useState();
  // const [packs, setPacks] = useState([]);
  // eslint-disable-next-line prefer-const
  const [AvailablePackages, seAvailablePackagest] = useState([]);

  const getPacks = async () => {
    setMinPrice(0);
    setMaxPrice(50000);
    await axios.get(`/user/package/service_type=${serviceType}`).then((res) => {
      // console.log(res.data);
      setData(res.data);
    });
    // console.log(data);
    SetChangeSet(!changeset);
  };

  function gettingdata() {
    if (data && data.length > 0) {
      data.map((item) =>
        // eslint-disable-next-line array-callback-return
        item.packages.map((pak, no) => {
          if (
            pak.packagePrice >= minprice &&
            pak.packagePrice <= currentPrice
          ) {
            // eslint-disable-next-line prefer-const
            let tempPack = {
              // eslint-disable-next-line no-underscore-dangle
              key_id: item._id + no,
              // eslint-disable-next-line no-underscore-dangle
              // profile_id: item._id,
              profile_name: item.username,
              pro_pic: item.profile_pic,
              package_name: pak.packageName,
              package_details: pak.packageDetails,
              price: pak.packagePrice,
            };
            seAvailablePackagest((AvailablePackage) => [
              ...AvailablePackage,
              tempPack,
            ]);
          }
        })
      );
      // console.log(data);
    } else {
      console.log(typeof data);
    }
  }

  useEffect(() => {
    getPacks();
  }, [serviceType]);

  useEffect(() => {
    seAvailablePackagest([]);
    // getPacks();
    gettingdata();
    // console.log(AvailablePackages);
  }, [changeset, currentPrice]);

  return (
    <div className="col-span-6 bg-white border border-gray-300 p-3 rounded-md min-h-96 overflow-y-auto">
      <h2 className="font-Lato font-semibold text-slate-600 capitalize mb-3 pb-2 border-b border-b-slate-200">
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
              className="w-36"
            />
          </div>
        </div>
      </div>
      <FilterData AvailablePackages={AvailablePackages} />
    </div>
  );
}

export default FilterPackages;
