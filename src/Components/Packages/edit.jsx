import ProfilePic from "../../Assets/Images/Profile/profile.jpg";

function EditPackageModal() {
  return (
    <div>
      <div
        className="modal fade fixed top-60 -left-52 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="EditPackageForm"
        tabIndex="-1"
        aria-labelledby="EditPackageForm"
        aria-hidden="true"
      >
        <div className="modal-dialog relative pointer-events-none w-auto">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-[50rem] pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <div className="flex flex-row items-center">
                <img
                  src={ProfilePic}
                  alt="profile"
                  className="w-12 rounded-full"
                />
                <h2 className="ml-3 font-Lato text-xl font-semibold text-gray-500">
                  Thathari Dancing Crew Packages - Booking
                </h2>
              </div>
            </div>
            <div className="modal-body relative p-4">
              <form>
                <div className="relative z-0 mb-6 w-full group p-2">
                  <label
                    htmlFor="floating_email"
                    className="font-Lato peer-focus:font-medium absolute text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Select a booking date
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="p-2 pl-6 pr-6 bg-gray-50  text-gray-600 font-medium leading-tight uppercase rounded shadow-md  hover:bg-gray-50  hover:shadow-lg  focus:bg-gray-50  focus:shadow-lg focus:outline-none focus:ring-0  active:bg-gray-50  active:shadow-lg transition duration-150 ease-in-out ml-1"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="p-2 pl-6 pr-6 bg-blue-600  text-white font-medium leading-tight uppercase rounded shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                data-bs-dismiss="modal"
                // onClick={submitBook}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPackageModal;
