import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import axios from "../../axios";
import ProfileIntro from "../../Components/ProfileIntro";
import MainHeader from "../../Lib/Header";
import ProfileDetails from "../../Components/ProfileDetails/index";
import Footer from "../../Lib/Footer";
// import Posts from "../../Components/Posts";
import AddPosts from "../../Components/Posts/add";

function Profile() {
  const { id } = useParams();
  const [profileID, setProfileIds] = useState([]);
  const [profileName, setProfileName] = useState();
  const [profilePic, setProfilePic] = useState();
  const [coverPhoto, setCoverPhoto] = useState();
  const [Locations, setLocations] = useState();
  const [ServiceType, setServiceType] = useState();
  const [membership, setMembership] = useState();
  const [Decription, setDescription] = useState();
  const [mobile, setMobile] = useState();
  const [youtube, setYoutube] = useState();
  const [instagram, setInstagram] = useState();
  const [facebook, setFacebook] = useState();
  const [email, setEmail] = useState();
  const getposts = async () => {
    await axios.get(`/user/user/${id}`).then((res) => {
      setProfileName(res.data.username);
      setProfilePic(res.data.profile_pic);
      setCoverPhoto(res.data.cover_pic);
      setMembership(res.data.membership.name);
      setServiceType(res.data.service_type);
      setMobile(res.data.social_details.mobile);
      setLocations(res.data.service_location);
      setDescription(res.data.description);
      setYoutube(res.data.social_details.youtube);
      setInstagram(res.data.social_details.instagram);
      setFacebook(res.data.social_details.facebook);
      setEmail(res.data.email);
    });
  };

  useEffect(() => {
    if (id) {
      setProfileIds([id]);
      getposts();
    }
  }, [id]);

  return (
    <div>
      <MainHeader />
      <div className="container mx-auto">
        <ProfileIntro
          profileName={profileName}
          ProfilePic={profilePic}
          CoverPic={coverPhoto}
          Membership={membership}
          servicetype={ServiceType}
        />
        <div className="grid grid-cols-5 h-fit gap-1 lg:gap-2">
          <ProfileDetails
            locations={Locations}
            serviceType={ServiceType}
            Mobile={mobile}
            Facebook={facebook}
            Youtube={youtube}
            Instagram={instagram}
            description={Decription}
            email={email}
          />
          <div className="col-span-3 ">
            <AddPosts ProName={profileName} ProPic={profilePic} />
            <Outlet context={[profileID]} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
