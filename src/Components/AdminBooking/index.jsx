import Reports from "../Report";
import ResetIcon from "../../Assets/Icons/Svgs/Reset";
import DownloadIcon from "../../Assets/Icons/Svgs/Download";

function AdminBooking() {
  return (
    <div className="mx-auto flex flex-col justify-between h-full w-full">
      <div className="mx-auto flex flex-col justify-between h-full w-full">
        <Reports />
        <div className="p-5 bg-white rounded shadow h-full overflow-y-auto mt-5">
          <div className="flex flex-row justify-between">
            <h1 className="font-Lato font-semibold text-3xl text-gray-500 m-4">
              Booking Details
            </h1>
            <div className="inline-flex justify-between items-center">
              <button
                type="button"
                className="inline-flex items-center w-fit hover:bg-gray-200 p-2 rounded mr-4"
              >
                <ResetIcon classList="w-5 fill-black mr-2" />
                <p>Refresh</p>
              </button>
              <button
                type="button"
                className="inline-flex items-center w-fit hover:bg-gray-200 p-2 rounded"
              >
                <DownloadIcon classList="w-5 fill-black mr-1" />
                <p>Export</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminBooking;
