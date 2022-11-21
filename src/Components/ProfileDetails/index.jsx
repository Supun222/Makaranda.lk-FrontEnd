import React from "react";
import Introduction from "./Introduction";
import ServiceDetails from "./ServiceDetails";
import Message from "./Message";

function ProfileDetails() {
  return (
    <div className="col-span-2">
      <Introduction />
      <ServiceDetails />
      <Message />
    </div>
  );
}

export default ProfileDetails;
