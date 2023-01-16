/* eslint-disable object-shorthand */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Minus from "../../Assets/Icons/Svgs/Minus";
import PlusIcon from "../../Assets/Icons/Svgs/Plus";

function ProfileDetails() {
  const [website, setWebSite] = useState();
  const [youtube, SetYoutube] = useState();
  const [facebook, setFacebook] = useState();
  const [instagram, SetInstagram] = useState();
  const [mobile, setMobile] = useState();
  // const [changeSet, setChangeSet] = useState({});
  const [packagess, setPackage] = useState([]);
  const [packageName, setPackageName] = useState();
  const [packageDetails, setPackageDetails] = useState();
  const [packagePrice, setPackagePrice] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setPackage([]);
  }, []);

  const setData = () => {
    const data = {
      packageName: packageName,
      packageDetails: packageDetails,
      packagePrice: packagePrice,
    };
    setPackage([...packagess, data]);
  };

  const sendData = () => {
    const data = {
      pack: packagess,
      mobile,
      website,
      youtube,
      facebook,
      instagram,
    };
    localStorage.setItem("thirdData", JSON.stringify(data));
    navigate("/user/Service/new/CoverPageDetails");
  };

  return (
    <div>
      <div className="container mx-auto h-screen flex items-center w-screen justify-center m-10">
        <form
          action=""
          className="flex flex-col rounded-md shadow-2xl border-2 border-gray-300 p-5 w-3/5"
        >
          <h2 className="font-Lato font-semibold text-primary text-3xl ">
            Register
          </h2>
          <div className="mt-3">
            <div className="flex flex-row items-center">
              <h1 className="font-Lato font-semibold text-gray-500 text-xl">
                Package Details
              </h1>
              <button
                type="button"
                className="flex items-center ml-3 hover:opacity-80"
                data-bs-toggle="modal"
                data-bs-target="#AddPackage"
              >
                <PlusIcon Classlist="w-10 text-orange-500" />
              </button>
            </div>
            <div>
              <table className="min-w-full flex flex-col mt-2">
                <thead className="bg-slate-100 rounded">
                  <tr className="grid grid-cols-9 items-center p-2">
                    <th className="text-start text-gray-600">#</th>
                    <th className="text-center col-span-2 text-gray-600">
                      Package Name
                    </th>
                    <th className="text-center col-span-3 text-gray-600">
                      Description
                    </th>
                    <th className="text-center text-gray-600 col-span-2">
                      Price(Rs)
                    </th>
                    <th className="text-center text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody className="mt-1 w-full">
                  {packagess && packagess.length > 0 ? (
                    packagess.map((pack, no) => (
                      <tr className="grid grid-cols-9 items-center p-2 border-2 border-gray-200 rounded mt-1">
                        <td className="text-start font-Lato text-base font-medium text-gray-400">
                          {no + 1}
                        </td>
                        <td className="text-center font-Lato text-base font-medium text-gray-400 col-span-2">
                          {pack.packageName}
                        </td>
                        <td className="text-center font-Lato text-base font-medium text-gray-400 col-span-3">
                          {pack.packageDetails}
                        </td>
                        <td className="text-center font-Lato text-base font-medium text-gray-400 col-span-2">
                          {pack.packagePrice}
                        </td>
                        <td>
                          <button type="button" className="mr-5">
                            <Minus Classlist="w-8 text-red-500/30" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="grid grid-cols-9 items-center p-2 border-2 border-gray-200 rounded">
                      <td className="text-start font-Lato text-base font-medium text-gray-400">
                        eg:
                      </td>
                      <td className="text-center font-Lato text-base font-medium text-gray-400 col-span-2">
                        Golden
                      </td>
                      <td className="text-center font-Lato text-base font-medium text-gray-400 col-span-3">
                        Decription
                      </td>
                      <td className="text-center font-Lato text-base font-medium text-gray-400 col-span-2">
                        1,500.00
                      </td>
                      <td className="text-end font-Lato text-base font-medium text-gray-400" />
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <h1 className="font-Lato font-semibold text-gray-500 text-xl mt-3">
            Social Detail(s)
          </h1>
          <div className="flex flex-col justify-start mt-2">
            <label
              htmlFor="mobile"
              className="font-Lato font-semibold text-gray-500 text-lg w-full mb-2"
            >
              Mobile
            </label>
            <input
              type="number"
              placeholder="-- enter mobile number --"
              name="websiteurl"
              className="px-3 py-1.5 text-base font-normal  text-gray-500  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:ring-orange-600 focus:ring-offset-orange-600 focus:outline-none "
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-start mt-3">
            <label
              htmlFor="websiteurl"
              className="font-Lato font-semibold text-gray-500 text-lg w-full mb-2"
            >
              Website
            </label>
            <input
              type="text"
              placeholder="-- enter website url --"
              name="websiteurl"
              className="px-3 py-1.5 text-base font-normal  text-gray-500  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:ring-orange-600 focus:ring-offset-orange-600 focus:outline-none "
              onChange={(e) => setWebSite(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-start mt-3">
            <label
              htmlFor="youtube"
              className="font-Lato font-semibold text-gray-500 text-lg w-full mb-2"
            >
              Youtube
            </label>
            <input
              type="text"
              placeholder="-- enter channel url --"
              name="youtube"
              className="px-3 py-1.5 text-base font-normal  text-gray-500  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:ring-orange-600 focus:ring-offset-orange-600 focus:outline-none "
              onChange={(e) => SetYoutube(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-start mt-3">
            <label
              htmlFor="Facebook"
              className="font-Lato font-semibold text-gray-500 text-lg w-full mb-2"
            >
              Facebook
            </label>
            <input
              type="text"
              placeholder="-- enter page url --"
              name="Facebook"
              className="px-3 py-1.5 text-base font-normal  text-gray-500  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:ring-orange-600 focus:ring-offset-orange-600 focus:outline-none "
              onChange={(e) => setFacebook(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-start mt-3">
            <label
              htmlFor="Instagram"
              className="font-Lato font-semibold text-gray-500 text-lg w-full mb-2"
            >
              Instagram
            </label>
            <input
              type="text"
              placeholder="-- enter page url --"
              name="Instagram"
              className="px-3 py-1.5 text-base font-normal  text-gray-500  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:ring-orange-600 focus:ring-offset-orange-600 focus:outline-none "
              onChange={(e) => SetInstagram(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="button"
              className="font-Lato font-medium rounded-md bg-primary pl-3 pr-3 ml-3 mt-3 md:w-52 xl:w-60 pt-0.5 pb-0.5 text-gray-100 hover:text-amber-50 border-2 border-primary hover:border-primary hover:bg-amber-600 hover:bg-tran transition-all hover:transition-all hover:ease-in-out hover:delay-50"
              onClick={sendData}
            >
              Next
            </button>
          </div>
        </form>
        <div
          className="modal fade fixed top-40 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="AddPackage"
          tabIndex="-1"
          aria-labelledby="AddPackage"
          aria-hidden="true"
        >
          <div className="modal-dialog relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5 className="text-xl font-semibold leading-normal text-gray-800">
                  Add New Membership
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body relative p-4">
                <form action="submit">
                  <div className="flex flex-col justify-start mt-3">
                    <label
                      htmlFor="name"
                      className="font-Lato font-semibold text-gray-500 text-lg w-full mb-2"
                    >
                      Package Name
                    </label>
                    <input
                      type="text"
                      placeholder="-- enter package name --"
                      name="name"
                      className="px-3 py-1.5 text-base font-normal  text-gray-500  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:ring-orange-600 focus:ring-offset-orange-600 focus:outline-none "
                      onChange={(e) => setPackageName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-full mt-3">
                    <label
                      htmlFor="details"
                      className="font-Lato font-semibold text-gray-500 text-lg w-full mb-2"
                    >
                      Package Details
                    </label>
                    <textarea
                      className=" form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-500  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:ring-orange-600 focus:ring-offset-orange-600 focus:outline-none "
                      id="details"
                      rows="3"
                      placeholder="-- enter package details --"
                      onChange={(e) => setPackageDetails(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col justify-start mt-2">
                    <label
                      htmlFor="price"
                      className="font-Lato font-semibold text-gray-500 text-lg w-full mb-2"
                    >
                      Package Price
                    </label>
                    <input
                      type="number"
                      placeholder="-- enter package name --"
                      name="price"
                      className="px-3 py-1.5 text-base font-normal  text-gray-500  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:ring-orange-600 focus:ring-offset-orange-600 focus:outline-none "
                      onChange={(e) => setPackagePrice(e.target.value)}
                      required
                    />
                  </div>
                  <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                    <button
                      type="button"
                      className="p-2 pl-6 pr-6 bg-red-500 font-medium text-white leading-tight uppercase rounded hover:bg-red-700 hover:shadow-sm  focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring  active:bg-red-800 active:shadow-sm transition-all duration-1 ease-in-out"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="p-2 pl-6 pr-6 bg-blue-600  text-white font-medium leading-tight uppercase rounded shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                      data-bs-dismiss="modal"
                      onClick={setData}
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
