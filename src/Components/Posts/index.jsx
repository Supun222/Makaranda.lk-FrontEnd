// import { Gallery } from "react-grid-gallery";
// import ProfilePic from "../../Assets/Images/Profile/profile.jpg";
import DotsIcon from "../../Assets/Icons/Svgs/Dots";
import ReactGallery from "../ReactGallgery/ReactGallery";
import Images from "../../Resources/images.json";

function Posts() {
  const posts = [
    {
      username: "Thaththari Dance Crew",
      groupId: 1,
      poastDate: "20 November 2022",
      caption:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit autfugit sed quia consequuntur magni dolores eos qui ra",
      images: Images,
    },
    {
      username: "Thaththari Dance Crew",
      groupId: 1,
      poastDate: "20 November 2022",
      caption:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit autfugit sed quia consequuntur magni dolores eos qui ra",
      images: Images,
    },
    {
      username: "Thaththari Dance Crew",
      groupId: 1,
      poastDate: "20 November 2022",
      caption:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit autfugit sed quia consequuntur magni dolores eos qui ra",
      images: Images,
    },
  ];
  console.log(Images);
  return (
    <div className="col-span-3">
      <div className="overflow-y-auto">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <div
              className="p-3 w-full border-4 border-gray-200 rounded-lg mb-5"
              key={post.groupId}
            >
              <div className="flex flex-col w-full justify-between">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-row">
                    <div className="flex flex-col items-start justify-center ml-2">
                      <h3 className="font-Lato font-semibold text-base text-gray-700">
                        {post.username}
                      </h3>
                      <p className="text-gray-400 text-sm">{post.poastDate}</p>
                    </div>
                  </div>
                  <div className="bg-slate-200 rounded-full p-1">
                    <DotsIcon classList="w-5" />
                  </div>
                </div>
                <p className="text-gray-600">{post.caption}</p>
                <div className="">
                  <ReactGallery images={Images} width="100" height={600} />
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
