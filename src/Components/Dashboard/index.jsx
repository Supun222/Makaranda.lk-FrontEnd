import { Chart as ChartJS, registerables } from "chart.js";
import { Line, Pie, Doughnut } from "react-chartjs-2";
import Reports from "../Report";

ChartJS.register(...registerables);

function Dashboard() {
  // borderColor: ["rgba(39,206,136,0.41)"],
  // backgroundColor: ["rgba(39,206,136,0.41)"],
  // pointBackgroundColor: ["rgba(39,206,136,0.41)"],
  // pointBorderColor: ["rgba(39,206,136,0.41)"],
  const lineData = {
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
      {
        label: "November",
        data: [20, 13, 15, 12, 10, 9, 8, 10],
        fill: true,
      },
      {
        label: "October",
        data: [15, 10, 12, 8, 13, 6, 14, 12],
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
        <h2 className="font-Lato font-semibold text-3xl text-gray-500 m-4">
          Monthly New Service Providers
        </h2>
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
