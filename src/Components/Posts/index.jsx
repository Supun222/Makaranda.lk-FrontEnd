/* eslint-disable no-unused-expressions */
import { Link, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../axios";
// import ProfilePic from "../../Assets/Images/Profile/profile.jpg";
import DotsIcon from "../../Assets/Icons/Svgs/Dots";
import ReactGallery from "../ReactGallgery/ReactGallery";
// import ShowPosts from "../../Resources/posts.json";

// eslint-disable-next-line react/prop-types
function Posts() {
  const [posts, setPosts] = useState([]);
  // const [profileIDs, setProfileIdss] = useState([]);
  const [profileIdD] = useOutletContext();

  const getPosts = () => {
    // setProfileIdss(profileIdD);
    if (profileIdD) {
      profileIdD.forEach(async (element) => {
        await axios
          .get(`/post/post/id=${element}`)
          .then((res) => {
            console.log(res.data.result, "array data");
            const datas = res.data.result;
            setPosts((prev) => [...prev, ...datas]);
          })
          .catch((err) => console.log(err));
      });
    }
  };

  useEffect(() => {
    getPosts();
    // console.log(profileIdD, "hii");
  }, [profileIdD]);

  useEffect(() => {
    console.log(posts, "posts");
  }, [posts]);

  return (
    <div className="">
      <div className="">
        {posts && Array.isArray(posts) && posts.length > 0 ? (
          posts.map((post) => (
            <div
              className="p-3 w-full border-4 border-gray-200 rounded-lg mb-5"
              key={post.groupId}
            >
              <div className="flex flex-col w-full justify-between">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-row items-center mb-3">
                    <img
                      src={post.profile_pic}
                      alt="profile"
                      className="w-12 rounded-full"
                    />
                    <Link
                      to="/profile/index=1"
                      className="flex flex-col items-start justify-center ml-2"
                    >
                      <h3 className="font-Lato font-semibold text-base text-gray-700">
                        {post.username}
                      </h3>
                      <p className="text-gray-400 text-sm">{post.poastDate}</p>
                    </Link>
                  </div>
                  <div className="bg-slate-200 rounded-full p-1">
                    <DotsIcon classList="w-5" />
                  </div>
                </div>
                <p className="text-gray-600">{post.caption}</p>
                <div className="">
                  <ReactGallery images={post.images} width="100" height={600} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-3 w-full border border-gray-400 bg-gray-100 rounded-lg flex justify-center h-56 items-center">
            <h1 className="font-Lato text-lg font-semibold text-gray-600">
              No posts available yet
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Posts;
