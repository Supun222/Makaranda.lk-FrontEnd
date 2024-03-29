/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../axios/index";

function Category() {
  const [subCategories, setsubCategory] = useState([]);
  const { category, location } = useParams();

  const renderCategories = () => {
    axios.get(`/category/${category}`).then((response) => {
      setsubCategory(response.data.Category);
    });
  };

  useEffect(() => {
    renderCategories();
    // console.log(subCategories);
  }, [category]);

  return (
    <div className="mt-4">
      <hr className="h-2" />
      <Link to={`/timeline/${category}/all`}>
        <h3 className="font-Lato text-start text-lg font-semibold text-gray-500">
          All Categories
        </h3>
      </Link>
      <div className="flex flex-col justify-center mt-2">
        {subCategories && subCategories.length > 0 ? (
          subCategories.map((item) => (
            <div
              className="font-Lato text-lg font-semibold text-primary text-start capitalize"
              key={item._id}
            >
              <Link
                to={`/timeline/${item}/${location}`}
                className="inline-flex mt-2"
              >
                {item._id} <p className="text-gray-500 ml-2">({item.count})</p>
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
