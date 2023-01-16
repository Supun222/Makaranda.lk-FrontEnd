/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Introduction from "./Introduction";
import ServiceDetails from "./ServiceDetails";
import Message from "./Message";

function ProfileDetails({ socialDetails, ServiceType, Locations }) {
  return (
    <div className="col-span-2">
      <Introduction
        socialDetails={socialDetails}
        ServiceType={ServiceType}
        location={Locations}
      />
      <ServiceDetails />
      <Message />
    </div>
  );
}

export default ProfileDetails;
