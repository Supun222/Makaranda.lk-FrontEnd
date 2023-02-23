import React from "react";
import Location from "./Locations";
import MobileIcon from "../../../Assets/Icons/Svgs/Mobile";
import FacebookIcon from "../../../Assets/Icons/Svgs/Facebook";
import Instagram from "../../../Assets/Icons/Svgs/Instagram";
import YoutubeIcon from "../../../Assets/Icons/Svgs/Youtube";
import EmailIcon from "../../../Assets/Icons/Svgs/Email";

// eslint-disable-next-line react/prop-types, prettier/prettier
function ServiceDetails({ Locations, mobile, facebook, youtube, instagram, email }) {
  return (
    <div className="bg-gray-100 rounded-md max-w-96 p-5 mt-4">
      <Location places={Locations} />
      <div className="mt-12">
        <h3 className="font-Lato font-semibold text-lg text-gray-700 mb-2">
          Additional Information
        </h3>
        <div className="flex flex-row items-center mt-3">
          <MobileIcon classList="w-7 fill-gray-700 mb-1.5" />
          <h3 className="font-Lato font-semibold text-base text-blue-500 mb-2 ml-4">
            {mobile}
          </h3>
        </div>
        <div className="flex flex-row items-center mt-3">
          <FacebookIcon classList="w-7 fill-gray-500 mb-1.5" />
          <a
            href={facebook}
            className="font-Lato font-semibold text-base text-blue-500 mb-2 ml-4"
            target="_blank"
            rel="noreferrer"
          >
            {/* {facebook} */}
            {[...String(facebook)].length > 40
              ? [...facebook].slice(0, 39)
              : facebook}
          </a>
        </div>
        <div className="flex flex-row items-center mt-3">
          <Instagram classList="w-7 fill-gray-500 mb-1.5" />
          <a
            href={instagram}
            className="font-Lato font-semibold text-base text-blue-500 mb-2 ml-4"
            target="_blank"
            rel="noreferrer"
          >
            {/* {instagram} */}
            {[...String(instagram)].length > 40
              ? [...instagram].slice(0, 39)
              : instagram}
          </a>
        </div>
        <div className="flex flex-row items-center mt-3">
          <YoutubeIcon classList="w-7 fill-gray-500 mb-1.5" />
          <a
            href={youtube}
            className="font-Lato font-semibold text-base text-blue-500 mb-2 ml-4"
            target="_blank"
            rel="noreferrer"
          >
            {[...String(youtube)].length > 40
              ? [...youtube].slice(0, 39)
              : youtube}
          </a>
        </div>
        <div className="flex flex-row items-center mt-3">
          <EmailIcon classList="w-7 fill-gray-500 mb-1.5" />
          <h3 className="font-Lato font-semibold text-base text-blue-500 mb-2 ml-4">
            {email}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails; // some desmon, sometimes men get cold feet
