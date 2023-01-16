import { useState } from "react";
// import axios from "../../axios/index";
import ProfilePic from "../../Assets/Images/Profile/profile.jpg";

function AddPosts() {
  const [profileID, setProfileID] = useState();
  const [caption, getCaption] = useState();
  const [photos, setPhotos] = useState([]);

  const handleFile = (e) => {
    const newFiles = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < e.target.files.length; i++) {
      newFiles.push(e.target.files[i]);
    }
    setPhotos(newFiles);
    setProfileID("635b6973ba4a00febf671cd9");
  };

  const sendPost = async () => {
    console.log(photos);
    console.log(profileID);
    console.log(caption);
    // const bodyFormData = new FormData();
    // photos.forEach((file) => {
    //   bodyFormData.append("file", file);
    // });
    // bodyFormData.append("profileId", profileID);
    // bodyFormData.append("decription", caption);
    // await axios({
    //   method: "post",
    //   url: "http://localhost:8080/api/post/post",
    //   data: bodyFormData,
    //   headers: { "Content-Type": "multipart/form-data" },
    // })
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-row items-center justify-center mb-3 bg-gray-50 p-2 rounded">
      <button
        type="button"
        className="bg-blue-500 p-2 rounded-xl text-white shadow-md hover:opacity-70"
        data-bs-toggle="modal"
        data-bs-target="#addnewpost"
      >
        Add your post here
      </button>
      <div
        className="modal fade fixed top-60 -left-52 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="addnewpost"
        tabIndex="-1"
        aria-labelledby="delet_location"
        aria-hidden="true"
      >
        <div className="modal-dialog relative pointer-events-none w-auto">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-[50rem] pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <div className="flex flex-row items-center">
                <img
                  src={ProfilePic}
                  alt="profile"
                  className="w-12 rounded-full"
                />
                <h2 className="ml-3 font-Lato text-xl font-semibold text-gray-500">
                  Thathari Dancing Crew New Post
                </h2>
              </div>
            </div>
            <div className="modal-body relative p-4">
              <form onSubmit={sendPost} className="">
                <div className="flex  flex-col justify-center">
                  <div className="flex flex-col justify-center">
                    <label htmlFor="email" className="font-Lato tracking-wide">
                      Caption
                    </label>
                    <input
                      type="text"
                      className="mt-2 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="caption"
                      placeholder="Enter caption"
                      onChange={(e) => getCaption(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3 w-96">
                    <label
                      htmlFor="formFile"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Upload your photos
                    </label>
                    <input
                      className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      type="file"
                      id="formFile"
                      multiple
                      accept="image/png, image/gif, image/jpeg, image/jpg"
                      onChange={handleFile}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="p-2 pl-6 pr-6 bg-gray-100  text-gray-600 font-medium leading-tight uppercase rounded shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="p-2 pl-6 pr-6 bg-blue-600  text-white font-medium leading-tight uppercase rounded shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                >
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPosts;
