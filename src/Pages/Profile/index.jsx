import React from "react";
import ProfileIntro from "../../Components/ProfileIntro";
import MainHeader from "../../Lib/Header";
import ProfileDetails from "../../Components/ProfileDetails/index";
import Footer from "../../Lib/Footer";

function Profile() {
  return (
    <div>
      <MainHeader />
      <div className="container mx-auto">
        <ProfileIntro />
        <div className="grid grid-cols-5 h-fit gap-1 lg:gap-2">
          <ProfileDetails />
          <div className="bg-gray-400 p-5 col-span-3 overflow-y-auto">
            Hissi
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
