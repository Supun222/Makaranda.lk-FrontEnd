import { useEffect, useState } from "react";
import MainHeader from "../../Lib/Header";

/* eslint-disable react/prop-types */
function SendingPackages() {
  const [Packages, setPackages] = useState([]);
  const [totalPrice, setTotalPackages] = useState(0);

  useEffect(() => {
    setPackages(JSON.parse(localStorage.getItem("SearchedPacks")));
    // eslint-disable-next-line array-callback-return
    JSON.parse(localStorage.getItem("SearchedPacks")).map((L) => {
      console.log(L.price);
      setTotalPackages(totalPrice + L.price);
    });
  }, []);

  return (
    <div>
      <MainHeader />
      <div className="w-full flex">
        <h2 className="font-Lato text-2xl font-semibold text-gray-600 justify-center mx-auto">
          Welcome
        </h2>
      </div>
      <div className="flex flex-col m-10">
        <table className="min-w-full flex flex-col">
          <thead className="bg-slate-100 rounded">
            <tr className="grid grid-cols-8 items-center p-3">
              <th className="text-start">#</th>
              <th className="text-center col-span-2">Service Provider</th>
              <th className="text-center col-span-2">Package</th>
              <th className="text-center col-span-2">Details</th>
              <th className="text-end">Price (Rs)</th>
            </tr>
          </thead>
          <tbody className="mt-1 w-full">
            {Packages && Packages.length > 0 ? (
              Packages.map((item, no) => (
                <tr
                  className="grid grid-cols-8 items-center p-3 border-b-4 border-b-slate-100 rounded-lg mt-2"
                  // eslint-disable-next-line no-underscore-dangle
                  key={item.package_id}
                >
                  <td className="text-start font-Lato text-base font-semibold text-gray-600">
                    {no + 1}
                  </td>
                  <td className="text-start font-Lato text-base font-semibold text-gray-600 capitalize col-span-2">
                    <a
                      href={`http://localhost:3000/profile/index=${item.profile_id}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex flex-row items-center">
                        <img
                          src={item.pro_pic}
                          alt="profile"
                          className="rounded-full w-10"
                        />
                        <p className="ml-3 font-Lato text-base font-semibold text-gray-600 ">
                          {item.profile_name}
                        </p>
                      </div>
                    </a>
                  </td>
                  <td className="text-start font-Lato text-base font-semibold text-gray-600 col-span-2 capitalize">
                    {item.packagename}
                  </td>
                  <td className="text-start font-Lato text-base font-semibold text-gray-600 col-span-2">
                    {item.details}
                  </td>
                  <td className="text-end font-Lato text-base font-semibold text-gray-600">
                    {item.price}
                  </td>
                </tr>
              ))
            ) : (
              <tr className="grid grid-cols-7 items-center p-3 border-b-4 border-slate-50 bg-slate-200 rounded-lg">
                <td className="text-center col-span-7 font-Lato font-bold text-gray-900">
                  No Packages Available to Show
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="m-10 grid grid-cols-8">
        <p className="col-span-7 text-end text-lg font-Lato font-bold tracking-wide">
          Totall
        </p>
        <p className="text-end text-lg font-Lato font-bold tracking-wide">
          {totalPrice}
        </p>
      </div>
    </div>
  );
}

export default SendingPackages;
