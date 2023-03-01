/* eslint-disable prefer-const */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios";

function BrowserItemsByCategory() {
  const [CategoryWithCount, setCategoryWithCount] = useState([]);
  const [CategoryWithOUTCount, setCategoryWithOUTCount] = useState([]);
  const [serviceType, setServiceType] = useState([]);
  // const [changeSet, chan]

  function getALlserviceTypes() {
    axios
      .get("/category/all")
      .then((res) => setServiceType(res.data.Category))
      .catch((err) => console.log(err));
  }

  function getUserCountbyCategory() {
    axios(`/category/user/count`).then((res) =>
      setCategoryWithCount(res.data.result)
    );
  }

  function combineResults() {
    console.log(CategoryWithCount);
    console.log(CategoryWithOUTCount); 
    CategoryWithOUTCount.forEach((item) => {
      let data = {
        category_name: "",
        propic: "",
        count: 0,
      };
      const index = CategoryWithCount.findIndex(
        (o) => o._id === item.category_name
      );
      if (index === -1) {
        data.category_name = item.category_name;
        data.propic = item.picture;
        data.count = 0;
        setServiceType(serviceType => [...serviceType, data]);
      } else {
        data.category_name = CategoryWithCount[index]._id;
        data.propic = item.picture;
        data.count = CategoryWithCount[index].count;
        setServiceType(serviceType => [...serviceType, data]);
      }
    });
    console.log(serviceType);
  }

  useEffect(() => {
    console.log(serviceType);
    setCategoryWithOUTCount([])
    getALlserviceTypes();
    getUserCountbyCategory();
    combineResults()
  }, []);

  return (
    <div className="grid gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-4 md:ml-0 lg:ml-6 xl:ml-4 xl:w-11/12 h-96 overflow-y-auto md:h-auto md:overflow-y-clip mt-5">
      {serviceType && serviceType.length > 0 ? (
        serviceType.map((item) => (
          <Link
            to={`/timeline/${item.category_name}/all`}
            key={item.category_name}
            className="flex flex-row items-center mt-5 ml-1 w-fit"
          >
            <img src={item.picture} alt="itemcategory" className="w-20" />
            <div className="flex flex-col ml-2 justify-start">
              <h5 className="font-Lato max-w-[12rem] text-secondaryText capitalize">
                {String(item.category_name).length < 20
                  ? item.category_name
                  : `${item.category_name.slice(0, 14)}...`}
              </h5>
              <p className="font-Lato max-w-[12rem] text-secondaryText place w-fit">
                {item.count}
              </p>
            </div>
          </Link>
        ))) : (
        <div />
      )}
    </div>
  );
}

export default BrowserItemsByCategory;
