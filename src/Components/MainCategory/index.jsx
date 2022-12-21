import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios";

function MainCategory() {
  const [mainCategory, setMainCategory] = useState();

  const getMainCategories = async () => {
    axios
      .get("/category/all")
      .then((res) => setMainCategory(res.data.Category));
  };

  useEffect(() => {
    getMainCategories();
  }, []);

  return (
    <div className="bg-white border border-gray-300 p-3 rounded-md col-span-2">
      <h2 className="font-Lato font-semibold text-slate-600 capitalize mb-3">
        select item
      </h2>
      <ul>
        {mainCategory && mainCategory.length > 0 ? (
          mainCategory.map((item) => (
            <li className="mb-1">
              <Link
                to={`/package_bundle/${item.category_name}`}
                className="font-Lato text-primary capitalize underline"
              >
                {item.category_name}
              </Link>
            </li>
          ))
        ) : (
          <div>
            <h2 className="text-secondaryText font-Lato font-semibold">
              No items available
            </h2>
          </div>
        )}
      </ul>
    </div>
  );
}

export default MainCategory;
