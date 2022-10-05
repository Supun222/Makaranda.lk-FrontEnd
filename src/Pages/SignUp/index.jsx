/* eslint-disable react/jsx-props-no-spreading */
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import axios from "axios";
import * as Yup from "yup";
// import { Link } from "react-router-dom";
import Plus from "../../Assets/Icons/Svgs/Plus";
// import Minus from "../../../Assets/Icons/Svgs/Minus";
import options from "../../Resources/ServiceType";
import servicerCtegory from "../../Resources/Districts";
import MakarandaLogo from "../../Assets/Icons/Makaranda.lk.png";
import slide1 from "../../Assets/Images/loginOnboard/slide1.png";

function SignUp() {
  const firstPageSchema = Yup.object().shape({
    email: Yup.string()
      .required("Please enter the email")
      .email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    serviceName: Yup.string()
      .required("Please enter the email")
      .min("Please enter proper username")
      .max("Maximum characters are 30"),
    servicerType: Yup.string().required("Please select a service type"),
    ServiceDetails: Yup.string().required("Please "),
  });

  const firstPageformOptions = { resolver: yupResolver(firstPageSchema) };

  // get functions to build form with useForm() hook
  // eslint-disable-next-line prettier/prettier
  const { register, handleSubmit, formState } = useForm(firstPageformOptions);
  const { errors } = formState;

  // const [value, setValue] = useState("fruit");

  const [pageCount, setPageCount] = useState(1);

  function handlePage() {
    handleSubmit();
    console.log(pageCount);
    setPageCount(pageCount + 1);
  }

  function handlePreviuosPage() {
    console.log(pageCount);
    setPageCount(pageCount - 1);
  }

  if (pageCount === 1) {
    return (
      <div className="flex justify-center items-center h-screen bg-quatery">
        <div className="bg-white md:w-8/12 xl:w-5/12 md:h-2/6 xl:h-3/5 flex flex-row justify-center items-center rounded-md shadow-xl">
          <div className="h-full w-full flex flex-col items-start ">
            <div className="flex flex-row justify-center w-full items-center mt-8">
              <img src={MakarandaLogo} alt="makaranda" className="w-12" />
              <h3 className="font-Lato font-medium text-secondaryText ml-3">
                Makaranda.lk
              </h3>
            </div>
            <div className="ml-12 mt-5">
              <h4 className="font-Lato font-semibold text-xl text-primary tracking-wider">
                Sign Up
              </h4>
              <form className="mt-4 ml-5">
                <div className="flex flex-col h-60 overflow-y-auto">
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="font-Lato font-semibold text-secondaryText"
                    >
                      Email
                    </label>
                    <input
                      {...register("email")}
                      type="text"
                      id="email"
                      name="email"
                      placeholder="-- email --"
                      className="bg-gray-100 rounded-sm h-8 w-56 mt-1 p-2 text-gray-800 placeholder:text-gray-400 focus:outline-amber-700 hover:transition-all hover:ease-in-out hover:delay-50"
                      // onChange={getEmail}
                    />
                    <p className="text-xs text-red-500 ">
                      {errors.email?.message}
                    </p>
                  </div>
                  <div className="flex flex-col mt-5">
                    <label
                      htmlFor="password"
                      className="font-Lato font-semibold text-secondaryText"
                    >
                      Password
                    </label>
                    <input
                      {...register("password")}
                      type="password"
                      id="password"
                      name="password"
                      placeholder="-- password --"
                      className="bg-gray-100 rounded-sm h-8 w-56 mt-1 p-2 text-gray-800 placeholder:text-gray-400 focus:outline-amber-700 hover:transition-all hover:ease-in-out hover:delay-50"
                      // password={getPassword}
                    />
                    <p className="text-xs text-red-500 ">
                      {errors.password?.message}
                    </p>
                  </div>
                  <div className="flex flex-col mt-5">
                    <label
                      htmlFor="confirmPassword"
                      className="font-Lato font-semibold text-secondaryText"
                    >
                      Confirm Password
                    </label>
                    <input
                      {...register("confirmPassword")}
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="-- confirm password --"
                      className="bg-gray-100 rounded-sm h-8 w-56 mt-1 p-2 text-gray-800 placeholder:text-gray-400 focus:outline-amber-700 hover:transition-all hover:ease-in-out hover:delay-50"
                    />
                    <p className="text-xs text-red-500 ">
                      {errors.confirmPassword?.message}
                    </p>
                  </div>
                </div>
              </form>
              <div className="flex flex-row justify-center mt-3 items-center">
                <p className="text-xs font-Lato font-normal tracking-widest text-gray-600">
                  Do you have an account ?
                </p>
                <Link
                  to="/login"
                  className=" text-blue-400 text-xs font-Lato font-semibold tracking-wider ml-1"
                >
                  Sign in
                </Link>
                <button
                  type="submit"
                  className="ml-2 w-16 font-Lato font-semibold text-gray-400 hover:text-primary hover:border-primary pb-1/2 border-2 border-gray-400 rounded-full text-sm"
                  onClick={handlePage}
                >
                  next
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex h-full w-5/6 bg-white justify-end items-center rounded-md">
            <img
              src={slide1}
              alt="slider"
              className="pl-0 h-[26rem] w-80 -mr-5"
            />
          </div>
        </div>
      </div>
    );
  }
  if (pageCount === 2) {
    return (
      <div className="container flex justify-center mx-auto">
        <div className="w-6/12 bg-white rounded p-5 m-5 shadow-lg">
          <h4 className="font-Lato font-semibold text-xl text-primary tracking-wider">
            Registration
          </h4>
          <div className="m-5">
            <form>
              <div className="flex flex-col mt-5">
                <label
                  htmlFor="serviceName"
                  className="font-Lato font-semibold text-secondaryText"
                >
                  Service Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("serviceName")}
                  type="text"
                  id="serviceName"
                  name="serviceName"
                  placeholder="-- service name --"
                  className="bg-gray-100 rounded-sm h-8 mt-3 p-2 text-gray-800 placeholder:text-gray-400 focus:outline-amber-700 hover:transition-all hover:ease-in-out hover:delay-50"
                />
                <p className="text-xs text-red-500 ">
                  {errors.serviceName?.message}
                </p>
              </div>
              <div className="flex flex-col mt-5">
                <label
                  htmlFor="serviceDetails"
                  className="font-Lato font-semibold text-secondaryText"
                >
                  Service Type <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("servicerType")}
                  id="servicerType"
                  className="bg-gray-100 rounded-sm h-8 mt-3 pl-2 pr-2 text-gray-400 placeholder:text-gray-400 focus:outline-amber-700 hover:transition-all hover:ease-in-out hover:delay-50"
                >
                  {options.map((option) => (
                    <option className="bg-gray-100">{option.label}</option>
                  ))}
                </select>
                <p className="text-xs text-red-500 ">
                  {errors.servicerType?.message}
                </p>
              </div>
              <div className="flex flex-col mt-5">
                <label
                  htmlFor="serviceDetails"
                  className="font-Lato font-semibold text-secondaryText"
                >
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...register("ServiceDetails")}
                  id="ServiceDetails"
                  className="resize-y rounded-md bg-gray-100 mt-3 h-24 p-2 text-gray-800 placeholder:text-gray-400 focus:outline-amber-700 hover:transition-all hover:ease-in-out hover:delay-50"
                  placeholder="-- Service details --"
                />
                <p className="text-xs text-red-500 ">
                  {errors.ServiceDetails?.message}
                </p>
              </div>
              <div className="flex flex-col mt-5">
                <label
                  htmlFor="serviceDetails"
                  className="font-Lato font-semibold text-secondaryText"
                >
                  Select Service Location(s)
                  <span className="text-red-500"> *</span>
                </label>
                <div className="form-check mt-5 ml-6 flex flex-row items-center">
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-amber-800 ring-2 ring-amber-600 rounded-lg"
                    id="service_loc"
                  />
                  <label
                    htmlFor="service_loc"
                    className="ml-3 font-Lato font-medium text-secondaryText"
                  >
                    All
                  </label>
                </div>
                {servicerCtegory && servicerCtegory.length > 0 ? (
                  servicerCtegory.map((province) => (
                    <details className="mt-2 ml-5">
                      <summary className="flex flex-row items-center w-fit">
                        <Plus />
                        <label
                          htmlFor={`service_category_${province.id.toString()}`}
                          className="ml-2 font-Lato font-medium text-secondaryText"
                        >
                          {province.value}
                        </label>
                      </summary>
                      {/* Districts start here */}
                      {province.districts.length > 0 ? (
                        province.districts.map((districts) => (
                          <div
                            className="form-check mt-3 ml-10 flex flex-row items-center"
                            key={districts.id}
                          >
                            <input
                              type="checkbox"
                              className="w-5 h-5 accent-amber-700 ring-1 ring-amber-600 rounded-lg"
                              id={`service_loctio_${districts.name.toString()}`}
                            />
                            <label
                              htmlFor={`service_loctio_${districts.name.toString()}`}
                              className="ml-3 font-Lato font-medium text-secondaryText"
                            >
                              {districts.name}
                            </label>
                          </div>
                        ))
                      ) : (
                        <h1 className="ml-10 mt-2 font-Lato font-medium text-secondaryText">
                          No Distrcits Available
                        </h1>
                      )}
                    </details>
                  ))
                ) : (
                  <h1 className="ml-2 mt-2 font-Lato font-medium text-secondaryText">
                    No Category Provinces Available
                  </h1>
                )}
              </div>
            </form>
            <div className="flex flex-row justify-end items-center">
              <button
                type="button"
                className="font-Lato font-medium rounded-md border-primary pl-3 pr-3 ml-3 mt-3 w-20 pt-0.5 pb-0.5 text-primary hover:text-amber-50 border-2 hover:border-primary hover:bg-amber-600 hover:bg-tran transition-all hover:transition-all hover:ease-in-out hover:delay-50"
                onClick={handlePreviuosPage}
              >
                Back
              </button>
              <button
                type="submit"
                className="font-Lato font-medium rounded-md border-primary pl-3 pr-3 ml-3 mt-3 w-20 pt-0.5 pb-0.5 text-primary hover:text-amber-50 border-2 hover:border-primary hover:bg-amber-600 hover:bg-tran transition-all hover:transition-all hover:ease-in-out hover:delay-50"
                onClick={handlePage}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (pageCount === 3) {
    return (
      <div className="container flex justify-center mx-auto">
        <div className="w-6/12 bg-white rounded p-5 m-5 shadow-lg">
          <h4 className="font-Lato font-semibold text-xl text-primary tracking-wider">
            Registration
          </h4>
          <form className="m-5">
            <div className="flex flex-col mt-5">
              <div className="flex flex-row items-center">
                <label
                  htmlFor="serviceName"
                  className="font-Lato font-semibold text-secondaryText mr-2"
                >
                  Package Details
                </label>
                <Plus />
              </div>
            </div>
            <h6 className="font-Lato font-semibold text-secondaryText tracking-wider mt-5">
              Link(s)
            </h6>
            <div className="flex flex-col mt-2">
              <label
                htmlFor="serviceName"
                className="font-Lato font-medium text-secondaryText"
              >
                Website
              </label>
              <input
                {...register("serviceName")}
                type="text"
                id="serviceName"
                name="serviceName"
                placeholder="-- enter your website page here --"
                className="bg-gray-100 rounded-sm h-8 mt-2 p-2 text-gray-800 placeholder:text-gray-400 focus:outline-amber-700 hover:transition-all hover:ease-in-out hover:delay-50"
              />
              <p className="text-xs text-red-500 ">
                {errors.serviceName?.message}
              </p>
            </div>
            <div className="flex flex-col mt-2">
              <label
                htmlFor="serviceName"
                className="font-Lato font-medium text-secondaryText"
              >
                You tube
              </label>
              <input
                {...register("serviceName")}
                type="text"
                id="serviceName"
                name="serviceName"
                placeholder="-- enter your You Tube channel here --"
                className="bg-gray-100 rounded-sm h-8 mt-2 p-2 text-gray-800 placeholder:text-gray-400 focus:outline-amber-700 hover:transition-all hover:ease-in-out hover:delay-50"
              />
              <p className="text-xs text-red-500 ">
                {errors.serviceName?.message}
              </p>
            </div>
            <div className="flex flex-col mt-2">
              <label
                htmlFor="serviceName"
                className="font-Lato font-medium text-secondaryText"
              >
                Facebook
              </label>
              <input
                {...register("serviceName")}
                type="text"
                id="serviceName"
                name="serviceName"
                placeholder="-- enter your facebook page url --"
                className="bg-gray-100 rounded-sm h-8 mt-2 p-2 text-gray-800 placeholder:text-gray-400 focus:outline-amber-700 hover:transition-all hover:ease-in-out hover:delay-50"
              />
              <p className="text-xs text-red-500 ">
                {errors.serviceName?.message}
              </p>
            </div>
            <div className="flex flex-col mt-2">
              <label
                htmlFor="serviceName"
                className="font-Lato font-medium text-secondaryText"
              >
                Intagram
              </label>
              <input
                {...register("serviceName")}
                type="text"
                id="serviceName"
                name="serviceName"
                placeholder="-- enter your instagram page url --"
                className="bg-gray-100 rounded-sm h-8 mt-2 p-2 text-gray-800 placeholder:text-gray-400 focus:outline-amber-700 hover:transition-all hover:ease-in-out hover:delay-50"
              />
              <p className="text-xs text-red-500 ">
                {errors.serviceName?.message}
              </p>
            </div>
            <div className="flex flex-col mt-2">
              <label
                htmlFor="serviceName"
                className="font-Lato font-medium text-secondaryText"
              >
                Mobile Number
              </label>
              <input
                {...register("serviceName")}
                type="text"
                id="serviceName"
                name="serviceName"
                placeholder="-- enter your mobile number --"
                className="bg-gray-100 rounded-sm h-8 mt-2 p-2 text-gray-800 placeholder:text-gray-400 focus:outline-amber-700 hover:transition-all hover:ease-in-out hover:delay-50"
              />
              <p className="text-xs text-red-500 ">
                {errors.serviceName?.message}
              </p>
            </div>
            <div className="flex flex-col mt-5">
              <label
                htmlFor="serviceDetails"
                className="font-Lato font-semibold text-secondaryText"
              >
                Terms and Conditions
              </label>
              <textarea
                {...register("ServiceDetails")}
                id="ServiceDetails"
                className="resize-y rounded-md bg-gray-100 mt-3 h-24 p-2 text-gray-800 placeholder:text-gray-400 focus:outline-amber-700 hover:transition-all hover:ease-in-out hover:delay-50"
              />
              <p className="text-xs text-red-500 ">
                {errors.ServiceDetails?.message}
              </p>
            </div>
            <div className="form-check mt-5 ml-6 flex flex-row items-center">
              <input
                type="checkbox"
                className="w-5 h-5 accent-amber-800 ring-2 ring-amber-600 rounded-lg"
                id="service_loc"
              />
              <label
                htmlFor="service_loc"
                className="ml-3 font-Lato font-medium text-secondaryText"
              >
                I agree to the terms and conditions
              </label>
            </div>
            <div className="flex flex-row justify-end items-center">
              <button
                type="button"
                className="font-Lato font-medium rounded-md border-primary pl-3 pr-3 ml-3 mt-3 w-20 pt-0.5 pb-0.5 text-primary hover:text-amber-50 border-2 hover:border-primary hover:bg-amber-600 hover:bg-tran transition-all hover:transition-all hover:ease-in-out hover:delay-50"
                onClick={handlePreviuosPage}
              >
                Back
              </button>
              <button
                type="submit"
                className="font-Lato font-medium rounded-md border-primary pl-3 pr-3 ml-3 mt-3 w-20 pt-0.5 pb-0.5 text-primary hover:text-amber-50 border-2 hover:border-primary hover:bg-amber-600 hover:bg-tran transition-all hover:transition-all hover:ease-in-out hover:delay-50"
                onClick={handlePage}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return <h1>No way</h1>;
}

export default SignUp;
