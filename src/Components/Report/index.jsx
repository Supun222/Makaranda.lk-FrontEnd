// import { useEffect, useState } from "react";
// import axios from "../../axios";
import UsersIcon from "../../Assets/Icons/Svgs/Users";
import Totalservice from "../../Assets/Images/Dashboard/total_service.jpg";
import StarIcon from "../../Assets/Icons/Svgs/Star";
import PostIcon from "../../Assets/Icons/Svgs/Post";
import CategoryIcon from "../../Assets/Icons/Svgs/Category";

function Reports() {
  // const [totalServiceCount, setTotalServiceCount] = useState(0);
  // const [totalVisitorsCount, setTotalVisitorsCount] = useState(0);
  // const ReportDataBinding = () => {
  //   axios.get("/user/total/services/location=all").then((response) => {
  //     setTotalServiceCount(response.data.count);
  //     // console.log(totalServiceCount);
  //   });
  //   axios.get("/user/total/visitors").then((response) => {
  //     setTotalVisitorsCount(response.data.count);
  //     // console.log(totalServiceCount);
  //   });
  // };
  // // console.log(JSON.stringify(totalCount?.data.count));
  // useEffect(() => {
  //   ReportDataBinding();
  // }, []);
  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-row justify-center p-3 items-center rounded-md bg-white w-2/5">
        <div className="flex flex-col justify-start">
          <p className="font-Lato font-semibold text-secondaryText text-2xl w-fit">
            Total Service Providers
          </p>
          <p className="font-Lato text-2xl mt-2 font-semibold text-blue-500 text-center">
            1200
          </p>
        </div>
        <img src={Totalservice} alt="totalservice" className="w-44 ml-2" />
      </div>
      <div className="flex flex-row items-center justify-between rounded-md bg-white w-full ml-3 pl-8 pr-8 pt-11 pb-11">
        <div className="flex flex-row items-center">
          <CategoryIcon ClassList="w-12 bg-blue-400 p-2 rounded-md mr-3" />
          <div className="flex flex-col justify-start mr-2">
            <p className="font-Lato text-lg text-gray-600 font-semibold">
              Total Categories
            </p>
            <p className="text-blue-500 font-Lato font-semibold text-lg">15</p>
          </div>
        </div>
        <hr className="h-14 w-0.5 bg-gray-300 mr-2 ml-2" />
        <div className="flex flex-row items-center bg-white rounded-md ">
          <UsersIcon classList="w-12 bg-yellow-300 p-2 rounded-md mr-3" />
          <div className="flex flex-col justify-start mr-2">
            <p className="font-Lato text-lg text-gray-600 font-semibold">
              Total Subcategories
            </p>
            <p className="font-Lato text-lg text-yellow-400 font-semibold">
              95
            </p>
          </div>
        </div>
        <hr className="h-14 w-0.5 bg-gray-300 mr-2 ml-2" />
        <div className="flex flex-row items-center bg-white rounded-md ">
          <PostIcon ClassList="w-12 bg-purple-400 p-2 rounded-md mr-3" />
          <div className="flex flex-col justify-start mr-2">
            <p className="font-Lato text-lg text-gray-600 font-semibold">
              Total Posts
            </p>
            <p className="font-Lato text-lg text-purple-400 font-semibold">
              357
            </p>
          </div>
        </div>
        <hr className="h-14 w-0.5 bg-gray-300 mr-2 ml-2" />
        <div className="flex flex-row items-center bg-white rounded-md ">
          <StarIcon ClassList="w-12 bg-[#8fa3b3] p-2 rounded-md mr-3" />
          <div className="flex flex-col justify-start mr-2">
            <p className="font-Lato text-lg text-gray-600 font-semibold">
              Total Ratings
            </p>
            <p className="font-Lato text-lg text-[#8fa3b3] font-semibold">
              920
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
