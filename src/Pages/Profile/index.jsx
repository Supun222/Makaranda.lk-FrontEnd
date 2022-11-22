import React from "react";
import ProfileIntro from "../../Components/ProfileIntro";
import MainHeader from "../../Lib/Header";
import ProfileDetails from "../../Components/ProfileDetails/index";
import Footer from "../../Lib/Footer";
import Posts from "../../Components/Posts";

function Profile() {
  return (
    <div>
      <MainHeader />
      <div className="container mx-auto">
        <ProfileIntro />
        <div className="grid grid-cols-5 h-fit gap-1 lg:gap-2">
          <ProfileDetails />
          <Posts />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
