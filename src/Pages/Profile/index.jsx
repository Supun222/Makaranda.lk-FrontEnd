import React from "react";
import ProfileIntro from "../../Components/ProfileIntro";
import MainHeader from "../../Lib/Header";
import ProfileDetails from "../../Components/ProfileDetails/index";

function Profile() {
  return (
    <div>
      <MainHeader />
      <div className="container mx-auto">
        <ProfileIntro />
        <div className="grid grid-cols-3 h-fit">
          <ProfileDetails />
          <div className="bg-gray-400 p-5 col-span-2">Hii</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
