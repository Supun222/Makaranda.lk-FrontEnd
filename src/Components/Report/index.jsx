import { useEffect, useState } from "react";
import axios from "../../axios";
import UsersIcon from "../../Assets/Icons/Svgs/Users";

function Reports() {
  const [totalServiceCount, setTotalServiceCount] = useState(0);
  const [totalVisitorsCount, setTotalVisitorsCount] = useState(0);
  const ReportDataBinding = () => {
    axios.get("/user/total/services/location=all").then((response) => {
      setTotalServiceCount(response.data.count);
      // console.log(totalServiceCount);
    });
    axios.get("/user/total/visitors").then((response) => {
      setTotalVisitorsCount(response.data.count);
      // console.log(totalServiceCount);
    });
  };
  // console.log(JSON.stringify(totalCount?.data.count));
  useEffect(() => {
    ReportDataBinding();
  }, []);
  return (
    <div className="p-3 bg-white rounded shadow flex flex-row justify-around ">
      <div className="flex flex-col justify-center p-3 items-center rounded-md bg-gray-50 w-36">
        <UsersIcon classList="feather feather-users w-20 p-2 rounded-full bg-yellow-200 mb-1" />
        <p className="font-Lato font-medium text-secondaryText mt-1">
          Total Services
        </p>
        <h1 className="font-Lato font-semibold">{totalServiceCount}</h1>
      </div>
      <div className="flex flex-col justify-center items-center p-3 rounded-md bg-gray-50 w-36">
        <UsersIcon classList="feather feather-users w-20 p-2 rounded-full bg-blue-200 mb-1" />
        <p className="font-Lato font-medium text-secondaryText mt-1">
          Total Users
        </p>
        <h1 className="font-Lato font-semibold">{totalVisitorsCount}</h1>
      </div>
      <div className="flex flex-col justify-center items-center p-3 rounded-md bg-gray-50 w-36">
        <UsersIcon classList="feather feather-users w-20 p-2 rounded-full bg-orange-200 mb-1" />
        <p className="font-Lato font-medium text-secondaryText mt-1">
          Total Categories
        </p>
        <h1 className="font-Lato font-semibold">{totalVisitorsCount}</h1>
      </div>
      <div className="flex flex-col justify-center items-center p-3 rounded-md bg-gray-50 w-36">
        <UsersIcon classList="feather feather-users w-20 p-2 rounded-full bg-yellow-200 mb-1" />
        <p className="font-Lato font-medium text-secondaryText mt-1">
          Total Locations
        </p>
        <h1>{totalVisitorsCount}</h1>
      </div>
      <div className="flex flex-col justify-center items-center p-3 rounded-md bg-gray-50 w-36">
        <UsersIcon classList="feather feather-users w-20 p-2 rounded-full bg-yellow-200 mb-1" />
        <p className="font-Lato font-medium text-secondaryText mt-1">
          Total Posts
        </p>
        <h1 className="font-Lato font-semibold">{totalVisitorsCount}</h1>
      </div>
    </div>
  );
}

export default Reports;
