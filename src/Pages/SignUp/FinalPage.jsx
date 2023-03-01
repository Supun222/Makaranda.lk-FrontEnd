/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";

function FinalPage() {
  const [profilePic, setProfilePic] = useState();
  const [coverPhoto, setCoverPhoto] = useState();
  const [membership, setMembership] = useState([]);
  const [index, setIndex] = useState();
  const [selectedMembership, setSelectedMembership] = useState();
  const navigate = useNavigate();

  const getAllMembership = async () => {
    axios
      .get("/admin/membership/all")
      .then((res) => setMembership(res.data.membership));
  };

  useEffect(() => {
    getAllMembership();
  }, []);

  useEffect(() => {
    setSelectedMembership(membership[index]);
  }, [index]);

  const resgister = async () => {
    // const firstdata = JSON.parse(localStorage.getItem("secondData"));
    // eslint-disable-next-line dot-notation
    // console.log(firstdata.details);
    const packages = JSON.parse(localStorage.getItem("thirdData")).pack;
    const data = {
      mobile: JSON.parse(localStorage.getItem("thirdData")).mobile,
      website: JSON.parse(localStorage.getItem("thirdData")).website,
      youtube: JSON.parse(localStorage.getItem("thirdData")).youtube,
      facebook: JSON.parse(localStorage.getItem("thirdData")).facebook,
      instagram: JSON.parse(localStorage.getItem("thirdData")).instagram,
    };
    const arry = [];
    const ratings = 0;
    arry.push(profilePic[0]);
    arry.push(coverPhoto[0]);
    const bodyFormData = new FormData();
    arry.forEach((file) => {
      bodyFormData.append("file", file);
    });
    bodyFormData.append("userRole", "SERVICE_PROVIDER");
    bodyFormData.append(
      "username",
      JSON.parse(localStorage.getItem("firstData")).newUsername
    );
    bodyFormData.append(
      "email",
      JSON.parse(localStorage.getItem("firstData")).newEmail
    );
    bodyFormData.append(
      "password",
      JSON.parse(localStorage.getItem("firstData")).newpassword
    );
    bodyFormData.append(
      "service_type",
      JSON.parse(localStorage.getItem("secondData")).serviceType
    );
    bodyFormData.append(
      "service_subcategories",
      JSON.stringify(JSON.parse(localStorage.getItem("secondData")).SubCategory)
    );
    bodyFormData.append(
      "service_location",
      JSON.stringify(JSON.parse(localStorage.getItem("secondData")).locations)
    );
    bodyFormData.append(
      "description",
      JSON.parse(localStorage.getItem("secondData")).details
    );
    bodyFormData.append("social_details", JSON.stringify(data));
    bodyFormData.append("packages", JSON.stringify(packages));
    bodyFormData.append("ratings", ratings);
    bodyFormData.append("membership", JSON.stringify(selectedMembership));
    bodyFormData.append(
      "main_service_location",
      JSON.parse(localStorage.getItem("secondData")).SubCategory[0]
    );

    try {
      await axios({
        method: "post",
        url: "http://localhost:8080/api/user/signup/serviceProvider",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(() => {
          toast.success("registration is successfull");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(JSON.stringify(err.response?.data));
      if (!err.response) {
        toast.error("Something went wronggg");
      } else if (err.response?.status === 404) {
        toast.error(err.response?.data.errors);
      } else if (err.response?.status === 400) {
        toast.error(err.response?.data.errors);
      } else if (err.response?.status === 500) {
        toast.error(err.response?.data.errors);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="container mx-auto h-screen flex items-center w-screen justify-center m-10">
      <form className="flex flex-col rounded-md shadow-2xl border-2 border-gray-300 p-5 w-3/5">
        <h2 className="font-Lato font-semibold text-primary text-3xl ">
          Register
        </h2>
        <div className="mb-3 w-96 mt-5">
          <label
            htmlFor="propic"
            className="font-Lato font-semibold text-gray-500 text-xl"
          >
            Profile Picture
          </label>
          <input
            className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            id="propic"
            accept="image/png, image/jpeg, image/jpg"
            onChange={(e) => setProfilePic(e.target.files)}
          />
        </div>
        <div className="mb-3 w-96">
          <label
            htmlFor="covPic"
            className="font-Lato font-semibold text-gray-500 text-xl"
          >
            Cover Photo
          </label>
          <input
            className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            id="covPic"
            accept="image/png, image/jpeg, image/jpg"
            onChange={(e) => setCoverPhoto(e.target.files)}
          />
        </div>

        <table className="min-w-full flex flex-col mt-2">
          <thead className="bg-slate-100 rounded">
            <tr className="grid grid-cols-9 items-center p-2">
              <th className="text-start text-gray-600">#</th>
              <th className="text-center col-span-2 text-gray-600">
                Membership Name
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
            {membership.map((mem, no) => (
              <tr
                key={mem._id}
                className="grid grid-cols-9 items-center p-2 border-2 border-gray-200 rounded mt-1"
              >
                <td className="text-start font-Lato text-base font-medium text-gray-400">
                  {no + 1}
                </td>
                <td
                  htmlFor="membership"
                  className="text-start font-Lato text-base font-medium text-gray-400 col-span-3"
                >
                  {mem.name}
                </td>
                <td className="text-start font-Lato text-base font-medium text-gray-400 col-span-3">
                  {mem.details}
                </td>
                <td className="text-start font-Lato text-base font-medium text-gray-400">
                  {mem.price}
                </td>
                <td className="text-center font-Lato text-base font-medium text-gray-400">
                  <input
                    type="radio"
                    name="membership"
                    id={mem._id}
                    value={no}
                    onChange={(e) => setIndex(e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="font-Lato font-medium rounded-md bg-primary pl-3 pr-3 ml-3 mt-3 md:w-52 xl:w-60 pt-0.5 pb-0.5 text-gray-100 hover:text-amber-50 border-2 border-primary hover:border-primary hover:bg-amber-600 hover:bg-tran transition-all hover:transition-all hover:ease-in-out hover:delay-50"
            onClick={resgister}
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default FinalPage;
