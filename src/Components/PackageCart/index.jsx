function PackageBucket() {
  return (
    <div className="col-span-4 bg-white border border-gray-300 p-3 rounded-md">
      <h2 className="font-Lato font-semibold text-slate-600 capitalize mb-3">
        item list
      </h2>
      <div className="max-h-[23rem] overflow-y-auto">
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
        <div className="flex justify-center items-center w-full bg-slate-50 rounded-md h-32 mt-5">
          <h1 className="font-Lato font-semibold text-gray-600">
            Please Select a Package
          </h1>
        </div>
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
