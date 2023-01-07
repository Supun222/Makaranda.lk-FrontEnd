import { useEffect, useState } from "react";

function SecondServiceProviderReg() {
  const [serviceType, setServiceType] = useState();

  const setDetails = async () => {
    console.log(serviceType);
  };

  useEffect(() => {
    console.log(localStorage.getItem("firstData"));
  }, []);

  return (
    <div className="container mx-auto h-screen flex items-center w-screen justify-center">
      <form
        action=""
        className="flex flex-col bg-slate-50 rounded-md shadow-md border-2 border-gray-600 p-5"
      >
        <input type="text" onChange={(e) => setServiceType(e.target.value)} />
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="font-Lato font-medium rounded-md bg-primary pl-3 pr-3 ml-3 mt-3 md:w-52 xl:w-60 pt-0.5 pb-0.5 text-gray-100 hover:text-amber-50 border-2 border-primary hover:border-primary hover:bg-amber-600 hover:bg-tran transition-all hover:transition-all hover:ease-in-out hover:delay-50"
            onClick={setDetails}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default SecondServiceProviderReg;
