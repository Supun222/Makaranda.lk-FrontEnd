/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Introduction from "./Introduction";
import ServiceDetails from "./ServiceDetails";
import Message from "./Message";

function ProfileDetails({
  serviceType,
  description,
  locations,
  socialDetails,
  Mobile,
  Facebook,
  Youtube,
  Instagram,
  email,
}) {
  return (
    <div className="col-span-2">
      <Introduction Description={description} ServiceType={serviceType} />
      <ServiceDetails
        Locations={locations}
        SocialDetails={socialDetails}
        facebook={Facebook}
        mobile={Mobile}
        youtube={Youtube}
        instagram={Instagram}
        email={email}
      />
      <Message />
    </div>
  );
}

export default ProfileDetails;
