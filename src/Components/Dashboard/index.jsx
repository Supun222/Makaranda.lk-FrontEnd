import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
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

  const lineOptions = {
    scales: {
      x: {
        ticks: {
          font: {
            size: 18,
            weight: "bold",
          },
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

  return (
    <div className="mx-auto flex flex-col justify-between h-full w-full">
      <Reports />
      <div className="p-2 bg-white rounded shadow w-full mt-5 flex flex-col">
        <h2 className="font-Lato font-semibold text-3xl text-gray-500 m-4">
          New Service Providers
        </h2>
        <Line data={lineData} options={lineOptions} height={110} />
      </div>
    </div>
  );
}

export default Dashboard;
