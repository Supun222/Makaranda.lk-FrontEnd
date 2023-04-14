/* eslint-disable array-callback-return */
import { Chart as ChartJS, registerables } from "chart.js";
import { Line, Pie, Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "../../axios";
import Reports from "../Report";

ChartJS.register(...registerables);

function Dashboard() {
  // borderColor: ["rgba(39,206,136,0.41)"],
  // backgroundColor: ["rgba(39,206,136,0.41)"],
  // pointBackgroundColor: ["rgba(39,206,136,0.41)"],
  // pointBorderColor: ["rgba(39,206,136,0.41)"],
  const [recentUserCount, setRecentUserCount] = useState([]);
  const [category, setCategory] = useState([]);
  const [changeSet, setChangeSet] = useState("ALL");

  const getRecentUsers = async () => {
    await axios
      .get(`/user/dashboard/users/category=${changeSet}`)
      .then((res) => {
        setRecentUserCount(res.data.data);
      });
  };

  const getAllCategories = async () => {
    axios.get("/category/all").then((res) => {
      setCategory(res.data.Category);
    });
  };

  useEffect(() => {
    getRecentUsers();
    getAllCategories();
    console.log(category);
  }, []);

  useEffect(() => {
    setRecentUserCount([]);
    getRecentUsers();
  }, [changeSet]);

  const lineData = {
    scaleFontSize: 20,
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "ALL",
        data: recentUserCount,
        fill: true,
      },
    ],
  };

  const pieData = {
    scaleFontSize: 20,
    labels: [
      "Dancing",
      "Photography",
      "Decoration",
      "Wedding Hotels",
      "Wedding Suits",
      "Bridal Dressing",
      "Stationary",
      "Music",
    ],
    datasets: [
      {
        label: "December",
        data: [16, 15, 9, 7, 14, 10, 12, 14],
        fill: true,
      },
    ],
  };

  const pieDataTwo = {
    scaleFontSize: 20,
    labels: ["Western", "Estern", "Wes", "Hip Pop", "Pahatha Rata"],
    datasets: [
      {
        label: "December",
        data: [16, 15, 9, 7, 14],
        fill: true,
      },
    ],
  };

  const lineOptions = {
    scales: {
      x: {
        ticks: {
          font: {
            size: 18,
            weight: "bold",
          },
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 25,
            style: "italic",
            weight: "700",
          },
        },
      },
    },
  };

  const piechartOneOptions = {
    scales: {
      x: {
        ticks: {
          font: {
            size: 18,
            weight: "bold",
          },
        },
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 25,
            style: "italic",
            weight: "700",
          },
        },
        position: "left",
        align: "center",
      },
      datalabels: {
        color: "#36A2EB",
        display: true,
      },
    },
  };

  return (
    <div className="mx-auto flex flex-col justify-between h-full w-full overflow-y-auto">
      <Reports />
      <div className="p-2 bg-white rounded shadow w-full mt-5 flex flex-col">
        <div className="flex flex-row items-center justify-between">
          <h2 className="font-Lato font-semibold text-3xl text-gray-500 m-4">
            Monthly New Service Providers
          </h2>
          <div className="mr-5">
            <select
              className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal  text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="status select"
              onChange={(e) => setChangeSet(e.target.value)}
              value={changeSet}
            >
              <option value="ALL">All</option>
              <option value="dance">Dance</option>
              <option value="music">Music</option>
              <option value="decoration">Decoration</option>
              <option value="wedding Suit">Wedding Suit</option>
              <option value="photography">Photography</option>
            </select>
          </div>
        </div>
        <Line data={lineData} options={lineOptions} height={110} />
      </div>
      <div className="p-2 bg-white rounded shadow mt-5 flex flex-col justify-start">
        <h2 className="font-Lato font-semibold text-3xl text-gray-500 m-4">
          Service Providers : Around the Country
        </h2>
        <div className="flex flex-row justify-around w-full mt-2">
          <div className="w-[45rem] ">
            <h2 className="font-Lato font-semibold text-2xl text-gray-500 mb-2">
              Category (9)
            </h2>
            <Pie data={pieData} options={piechartOneOptions} />
          </div>
          <div className="w-[45rem]">
            <h2 className="font-Lato font-semibold text-2xl text-gray-500 mb-2">
              Dance : Sub Category (5)
            </h2>
            <Doughnut data={pieDataTwo} options={piechartOneOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
