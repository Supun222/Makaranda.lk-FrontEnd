/* eslint-disable radix */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectItem } from "../../Features/packageCard";
import Minus from "../../Assets/Icons/Svgs/Minus";

function PackageBucket() {
  const [cardItem, setCarItem] = useState([]);
  const packCard = useSelector(selectItem);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

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

  function removeItem(id) {
    const newList = cardItem.filter((l) => l.package_id !== id);
    // console.log(cardItem[id]);
    // setTotalPrice(totalPrice - cardItem[id].price);
    setCarItem(newList);
  }

  useEffect(() => {
    setTotalPrice(0);
    // eslint-disable-next-line array-callback-return
    cardItem.map((L) => {
      setTotalPrice(totalPrice + parseInt(L.price));
    });
  }, [cardItem]);

  const SendingPacks = async () => {
    localStorage.setItem("SearchedPacks", JSON.stringify(cardItem));
    navigate("/package_bundle/search/packages");
  };

  return (
    <div className="col-span-4 bg-white border border-gray-300 p-3 rounded-md">
      <h2 className="font-Lato font-semibold text-slate-600 capitalize mb-3 pb-2 border-b border-b-slate-200">
        item list
      </h2>
      <div className="flex flex-col">
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
        <div className="max-h-[22rem] overflow-y-auto">
          {cardItem && cardItem.length > 0 ? (
            cardItem.map((pack) => (
              <div className="grid grid-cols-5 mt-1" key={pack.package_id}>
                <div className="col-span-4 p-2 flex flex-row">
                  <button
                    type="button"
                    className="mr-2"
                    onClick={() => removeItem(pack.package_id)}
                  >
                    <Minus Classlist="w-6 text-red-400" />
                  </button>
                  <div className="flex flex-row bg-slate-100 rounded-md p-2 items-center w-48">
                    <img
                      src={pack.pro_pic}
                      alt=""
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex flex-col ml-2">
                      <h2 className="capitalize font-Lato text-sm font-semibold text-gray-700">
                        {pack.profile_name}
                      </h2>
                      <h3 className="capitalize font-Lato text-sm text-gray-600 ">
                        {pack.packagename} Package
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <h2 className="font-Lato font-semibold text-gray-600 mr-5">
                    {pack.price}
                  </h2>
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
      </div>
      <hr className="mt-5" />
      <footer className="mt-2 flex-shrink-0 flex-col">
        <div className="flex justify-around">
          <h2 className="font-Lato font-semibold text-base text-gray-400">
            Total Calculated Price <br /> 10% Discount
          </h2>
          <h2 className="font-Lato font-semibold text-base text-gray-400">
            {totalPrice} LKR
          </h2>
        </div>
        {cardItem.length > 0 ? (
          <div className="flex flex-row justify-end">
            <button
              type="button"
              className="p-2 pt-1 pb-1 bg-gray-100 rounded-md font-Lato font-medium text-gray-500 mr-2 w-20 hover:opacity-80"
              onClick={() => setCarItem([])}
            >
              Reset
            </button>
            <button
              type="button"
              className="p-2 pt-1 pb-1 bg-primary rounded-md font-Lato font-medium text-white w-20 hover:opacity-80 text-center"
              onClick={SendingPacks}
            >
              Send
            </button>
          </div>
        ) : (
          <div />
        )}
      </footer>
    </div>
  );
}

export default PackageBucket;
