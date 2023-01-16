import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import ProfileIntro from "../../Components/ProfileIntro";
import MainHeader from "../../Lib/Header";
import ProfileDetails from "../../Components/ProfileDetails/index";
import Footer from "../../Lib/Footer";
import Posts from "../../Components/Posts";
import AddPosts from "../../Components/Posts/add";

function Profile() {
  const { id } = useParams();
  const [profileName, setProfileName] = useState();
  const [profilePic, setProfilePic] = useState();
  const [coverPhoto, setCoverPhoto] = useState();
  const [packages, setPackages] = useState();
  const [socialDetails, setSocialDetails] = useState();
  const [locations, setLocations] = useState();
  const [serviceType, setServiceType] = useState();
  const [membership, setMembership] = useState();
  const getposts = async () => {
    axios.get(`/user/user/${id}`).then((res) => {
      setProfileName(res.data.username);
      setProfilePic(res.data.profile_pic);
      setCoverPhoto(res.data.cover_pic);
      setPackages(res.data.packages);
      setMembership(res.data.membership);
      setServiceType(res.data.service_type);
      setSocialDetails(res.data.social_details);
      setLocations(res.data.service_location);
    });
  };

  useEffect(() => {
    getposts();
  }, []);

  return (
    <div>
      <MainHeader />
      <div className="container mx-auto">
        <ProfileIntro
          profileName={profileName}
          ProfilePic={profilePic}
          CoverPic={coverPhoto}
          Membership={membership}
          Packages={packages}
        />
        <div className="grid grid-cols-5 h-fit gap-1 lg:gap-2">
          <ProfileDetails
            Locations={locations}
            ServiceType={serviceType}
            socialDetails={socialDetails}
          />
          <div className="col-span-3 ">
            <AddPosts />
            <Posts profileID={id} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
