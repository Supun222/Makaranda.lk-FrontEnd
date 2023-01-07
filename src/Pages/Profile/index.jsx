// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "../../axios";
import ProfileIntro from "../../Components/ProfileIntro";
import MainHeader from "../../Lib/Header";
import ProfileDetails from "../../Components/ProfileDetails/index";
import Footer from "../../Lib/Footer";
import Posts from "../../Components/Posts";
import AddPosts from "../../Components/Posts/add";

function Profile() {
  // const { id } = useParams();
  // const getposts = async () => {
  //   axios.get(`/post/id=${id}`).then((res) => console.log(res));
  // };

  // useEffect(() => {
  //   getposts();
  // }, []);

  return (
    <div>
      <MainHeader />
      <div className="container mx-auto">
        <ProfileIntro />
        <div className="grid grid-cols-5 h-fit gap-1 lg:gap-2">
          <ProfileDetails />
          <div className="col-span-3 ">
            <AddPosts />
            <Posts profileID="635b6973ba4a00febf671cd9" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
