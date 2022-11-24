import { Link } from "react-router-dom";
import LocationIcon from "../../Assets/Icons/Svgs/Location";
import DancingIcon from "../../Assets/Icons/DancingGroups.png";

function SearchPanel() {
  return (
    <div className="flex flex-row justify-around items-center mb-2">
      <Link to="/timeline/all" className="flex flex-row items-center">
        <LocationIcon classList="w-10 fill-primary" />
        <h1 className="font-Lato font-semibold text-gray-600 text-xl ml-2">
          Search Location
        </h1>
      </Link>
      <div>
        <nav className="rounded-md w-full mb-3">
          <ol className="list-reset flex items-center">
            <li>
              <a
                href="/timeline"
                className="text-gray-600 hover:text-gray-700 flex flex-row items-center"
              >
                <img src={DancingIcon} alt="dancing" className="w-16" />
                <h1 className="font-Lato font-semibold text-lg ml-2">
                  Dancing Groups
                </h1>
              </a>
            </li>
          </ol>
        </nav>
      </div>
      <div>
        <form action="" className="flex flex-row items-center">
          <input type="text" className="rounded " placeholder="Search here" />
          <button type="submit" className="bg-primary rounded p-2 text-white">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchPanel;
