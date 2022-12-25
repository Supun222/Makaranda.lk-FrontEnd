import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectItem } from "../../Features/packageCard";

function PackageBucket() {
  const [cardItem, setCarItem] = useState([]);
  const packCard = useSelector(selectItem);

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    if (packCard == null) {
      setCarItem([]);
    } else if (packCard.packagename == null) {
      setCarItem([]);
    } else {
      setCarItem((prev) => [...prev, packCard]);
    }
  }, [packCard]);

  return (
    <div className="col-span-4 bg-white border border-gray-300 p-3 rounded-md">
      <h2 className="font-Lato font-semibold text-slate-600 capitalize mb-3">
        item list
      </h2>
      <div className="max-h-[23rem] overflow-y-auto flex flex-col">
        <div className="grid grid-cols-3">
          <div className="col-span-2 flex justify-center">
            <h2 className="font-Lato font-semibold text-base text-gray-600">
              Package Name
            </h2>
          </div>
          <div className="flex justify-center">
            <h2 className="font-Lato font-semibold text-base text-gray-600">
              Price LKR
            </h2>
          </div>
        </div>
        {cardItem && cardItem.length > 0 ? (
          cardItem.map((pack) => (
            <div className="grid grid-cols-4 p-2 mt-2">
              <div className="col-span-2 p-2 bg-slate-300 rounded-md">
                <h2>{pack.packagename}</h2>
              </div>
              <hr className="bg-gray-400 w-1 rounded-sm h-full ml-5" />
              <div>
                <h2>{pack.price}</h2>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center w-full bg-slate-50 rounded-md h-32 mt-5">
            <h1 className="font-Lato font-semibold text-gray-600">
              Please Select a Package
            </h1>
          </div>
        )}
      </div>

      <hr className="mt-5" />
      <footer className="mt-2 flex-shrink-0">
        <div className="flex justify-around">
          <h2 className="font-Lato font-semibold text-base text-gray-400">
            Total Calculated Price <br /> 10% Discount
          </h2>
          <h2 className="font-Lato font-semibold text-base text-gray-400">
            0 LKR
          </h2>
        </div>
      </footer>
    </div>
  );
}

export default PackageBucket;
