import { Link } from "react-router-dom";
import LocationIcon from "../../Assets/Icons/Svgs/Location";

function SearchPanel() {
  return (
    <div className="flex flex-row justify-between items-center mb-4">
      <Link to="/timeline/all" className="flex flex-row items-center">
        <LocationIcon classList="w-10 fill-primary" />
        <h1 className="font-Lato font-semibold text-gray-500 text-2xl ml-2">
          Search Location
        </h1>
      </Link>
      <div>
        <form action="" className="flex flex-row items-center">
          <input
            type="text"
            className="rounded border-gray-300 focus:ring-primary focus:ring-offset-primary focus:border-primary"
            placeholder="Search here"
          />
          <button type="submit" className="bg-primary rounded p-2 text-white ">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchPanel;
