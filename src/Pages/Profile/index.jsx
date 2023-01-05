import React from "react";
import ProfileIntro from "../../Components/ProfileIntro";
import MainHeader from "../../Lib/Header";
import ProfileDetails from "../../Components/ProfileDetails/index";
import Footer from "../../Lib/Footer";
import Posts from "../../Components/Posts";
import AddPosts from "../../Components/Posts/add";

function Profile() {
  return (
    <div>
      <MainHeader />
      <div className="container mx-auto">
        <ProfileIntro />
        <div className="grid grid-cols-5 h-fit gap-1 lg:gap-2">
          <ProfileDetails />
          <div className="col-span-3 ">
            <AddPosts />
            <Posts />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
