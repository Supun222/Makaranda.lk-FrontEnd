import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios/index";

function Category() {
  const [subCategories, setsubCategory] = useState([]);

  const renderCategories = () => {
    axios
      .get("/category/all")
      .then((response) => setsubCategory(response.data[0].subcategory));
  };

  console.log(subCategories);

  useEffect(() => {
    renderCategories();
  }, []);

  return (
    <div className="mt-4">
      <hr className="h-2" />
      <Link to="/timeline/dancing/all">
        <h3 className="font-Lato text-start text-lg font-semibold text-gray-500">
          All Categories
        </h3>
      </Link>
      <div className="flex flex-col justify-center mt-2">
        {subCategories && subCategories.length > 0 ? (
          subCategories.map((item) => (
            <div
              className="font-Lato text-lg font-semibold text-primary text-start mt-1"
              key={item}
            >
              <Link to={`/timeline/dancing/${item}`} className="inline-flex">
                {item} <p className="text-gray-500 ml-2">(102)</p>
              </Link>
            </div>
          ))
        ) : (
          <h1>No categories</h1>
        )}
      </div>
    </div>
  );
}

export default Category;
