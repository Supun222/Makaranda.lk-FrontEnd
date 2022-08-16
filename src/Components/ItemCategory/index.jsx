import { Link } from "react-router-dom";
import WeddingPlanners from "../../Assets/Icons/Weddingsplanners.png";
import WeddingRing from "../../Assets/Icons/WeddingRing.png";
import DancingGroups from "../../Assets/Icons/DancingGroups.png";
import MusicGroups from "../../Assets/Icons/MusicGroups.png";
import Photography from "../../Assets/Icons/Photography.png";
import DecorationsGroups from "../../Assets/Icons/DecorationsGroups.png";
import Others from "../../Assets/Icons/Others.png";

function BrowserItemsByCategory() {
  const ItemsCategory = [
    {
      id: 1,
      categoryName: "Wedding Planners",
      categoryIcon: WeddingPlanners,
      AdsAmount: 1106,
    },
    {
      id: 2,
      categoryName: "Wedding Suits",
      categoryIcon: WeddingRing,
      AdsAmount: 1403,
    },
    {
      id: 3,
      categoryName: "Dancing Groups",
      categoryIcon: DancingGroups,
      AdsAmount: 1226,
    },
    {
      id: 4,
      categoryName: "Decorating Teams",
      categoryIcon: DecorationsGroups,
      AdsAmount: 1253,
    },
    {
      id: 5,
      categoryName: "Musics Bands",
      categoryIcon: MusicGroups,
      AdsAmount: 1092,
    },
    {
      id: 6,
      categoryName: "Photography",
      categoryIcon: Photography,
      AdsAmount: 1026,
    },
    {
      id: 7,
      categoryName: "Others",
      categoryIcon: Others,
      AdsAmount: 1274,
    },
  ];

  return (
    <div className="grid gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-4 md:ml-0 lg:ml-6 xl:ml-4 xl:w-11/12 h-96 overflow-y-auto md:h-auto md:overflow-y-clip mt-5">
      {ItemsCategory.map((item) => (
        <Link
          to="/timeline"
          key={item.id}
          className="flex flex-row items-center mt-5 ml-1 w-fit"
        >
          <img src={item.categoryIcon} alt="itemcategory" className="w-20" />
          <div className="flex flex-col ml-2 justify-start">
            <h5 className="font-Lato max-w-[12rem] text-secondaryText">
              {item.categoryName.length < 20
                ? item.categoryName
                : `${item.categoryName.slice(0, 14)}...`}
            </h5>
            <p className="font-Lato max-w-[12rem] text-secondaryText place w-fit">
              {item.AdsAmount}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BrowserItemsByCategory;
