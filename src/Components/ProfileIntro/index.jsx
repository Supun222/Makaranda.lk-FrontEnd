/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */

import React from "react";
import Breadcrums from "../../Lib/Profile/Breadcrums";
import Ratings from "../Ratings";
import ChatIcon from "../../Assets/Icons/Svgs/Chat";
import Packages from "../Packages";

function ProfileIntro({
  profileName,
  ProfilePic,
  CoverPic,
  Membership,
  servicetype,
}) {
  return (
    <div className="">
      <Breadcrums profileName={profileName} serviceType={servicetype} />
      <div className="rounded-lg">
        <img
          src={CoverPic}
          alt="ss"
          className="object-none object-center rounded-lg bg-yellow-300 w-full h-[32rem]"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-row items-center p-2">
          <div className="flex flex-row relative w-44 h-10">
            <div className="absolute -bottom-3 left-3 p-1 rounded-full bg-white">
              <img
                src={ProfilePic}
                alt="ss"
                className="w-44 h-w-44 rounded-full"
              />
            </div>
          </div>
          <div className="p-3 flex flex-col">
            <h1 className="font-Lato text-gray-600 font-semibold text-xl tracking-wide capitalize">
              {profileName}
            </h1>
            <div className="flex flex-row items-center">
              <Ratings ClassList="" />
              <button
                type="button"
                className="bg-gray-200 p-0.5 w-20 text-sm text-gray-500 uppercase rounded-md font-Lato font-semibold ml-2 hover:opacity-80"
              >
                Rate Us
              </button>
              <h1 className="text-green-500 ml-4">{Membership} Membership</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row p-3">
          <button
            type="button"
            className="p-2 bg-slate-200 rounded-md mr-4 flex flex-row hover:opacity-80 items-center leading-tight"
          >
            <ChatIcon classList="w-5 fill-black mr-2" />
            <p>Bookings</p>
          </button>
          <Packages />
        </div>
      </div>
    </div>
  );
}

export default ProfileIntro;
