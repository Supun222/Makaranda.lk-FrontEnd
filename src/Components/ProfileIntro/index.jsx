import React from "react";
import Breadcrums from "../../Lib/Profile/Breadcrums";
import CoverPic from "../../Assets/Images/Profile/cover.jpg";
import ProfilePic from "../../Assets/Images/Profile/profile.jpg";
import Ratings from "../Ratings";
import ChatIcon from "../../Assets/Icons/Svgs/Chat";
import PackageIcon from "../../Assets/Icons/Svgs/Package";

function ProfileIntro() {
  return (
    <div>
      <Breadcrums />
      <div className="rounded-lg">
        <img
          src={CoverPic}
          alt="ss"
          className="object-none object-center rounded-lg bg-yellow-300 w-full h-[32rem]"
        />
      </div>
      <div className="flex flex-row justify-between items-center">
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
            <h1 className="font-Lato text-secondaryText font-semibold">
              Thathari Dancing Crew
            </h1>
            <div className="flex flex-row items-center">
              <Ratings ClassList="" />
              <h1 className="text-green-400 ml-4">Premium Membership</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row p-3">
          <button
            type="button"
            className="p-2 bg-slate-200 rounded-md mr-4 flex flex-row hover:opacity-80 items-center leading-tight"
          >
            <ChatIcon classList="w-5 fill-black mr-2" />
            <p>Message</p>
          </button>
          <button
            type="button"
            className="p-2 bg-blue-500 rounded-md flex flex-row hover:opacity-80 items-center leading-tight"
          >
            <PackageIcon classList="feather feather-package w-5 fill-white stroke-blue-600 mr-2" />
            <p className="font-Lato text-white">view Packages</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileIntro;
