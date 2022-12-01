/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
// import { Link } from "react-router-dom";
import axios from "../../axios/index";

function EditMembership() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [details, setDetails] = useState();
  const [price, setPrice] = useState();
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    membership_name: Yup.string().required("Please enter the username"),
    membership_details: Yup.string().required("Please enter the password"),
    membership_price: Yup.number(setPrice)
      .typeError("Please provide price")
      .min(500, "Too little")
      .max(20000, "Very costly!"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState, reset } = useForm(formOptions);
  const { errors } = formState;

  const getMembership = async () => {
    try {
      axios.get(`/admin/membership/id=${id}`).then((response) => {
        setName(response.data.name);
        setDetails(response.data.details);
        setPrice(response.data.price);
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getMembership();
  }, []);

  const onSubmitHandler = async () => {
    try {
      await axios.patch(
        `/admin/membership/edit/${id}`,
        JSON.stringify({
          name,
          details,
          price,
          active: true,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      toast.success("Membrship edited successfully");
      reset();
      setTimeout(navigate("/admin/membership"), 5000);
    } catch (err) {
      console.log(JSON.stringify(err.response?.data.message));
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
    <div>
      <div className="flex justify-center items-center h-screen w-[120rem]">
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-semibold leading-normal text-gray-800"
                id="new_membership"
              >
                Edit Existing Membership
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body relative p-4">
              <form action="submit" onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="form-group mb-3">
                  <label
                    htmlFor="membership_name"
                    className="form-label inline-block mb-2 text-gray-700 font-Lato text-lg"
                  >
                    Membership name
                  </label>
                  <input
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register("membership_name")}
                    type="text"
                    className="form-control font-Lato text-lg block w-full px-3 py-1.5  font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="membership_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <p className="text-xs text-red-500 mt-1">
                    {errors.membership_name?.message}
                  </p>
                </div>
                <div className="form-group mb-3">
                  <label
                    htmlFor="membership_details"
                    className="form-label font-Lato text-lg inline-block mb-2 text-gray-700"
                  >
                    Membership Details
                  </label>
                  <input
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register("membership_details")}
                    type="text"
                    className="form-control font-Lato text-lg block w-full px-3 py-1.5  font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="membership_details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                  />
                  <p className="text-xs text-red-500 mt-1">
                    {errors.membership_details?.message}
                  </p>
                </div>
                <div className="form-group mb-3">
                  <label
                    htmlFor="membership_price"
                    className="form-label font-Lato text-lg inline-block mb-2 text-gray-700"
                  >
                    Membership Price
                  </label>
                  <input
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register("membership_price")}
                    type="number"
                    className="form-control font-Lato text-lg block w-full px-3 py-1.5  font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="membership_price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <p className="text-xs text-red-500 mt-1">
                    {errors.membership_price?.message}
                  </p>
                </div>
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <Link
                    to="/admin/membership"
                    type="button"
                    className="p-2 pl-6 pr-6 bg-red-500 font-medium text-white leading-tight uppercase rounded hover:bg-red-700 hover:shadow-sm  focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring  active:bg-red-800 active:shadow-sm transition-all duration-1 ease-in-out"
                  >
                    Close
                  </Link>
                  <button
                    type="submit"
                    className="p-2 pl-6 pr-6 bg-blue-600  text-white font-medium leading-tight uppercase rounded shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                  >
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default EditMembership;
