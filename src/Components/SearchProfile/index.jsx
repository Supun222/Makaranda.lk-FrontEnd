import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../axios";
import SearchIcon from "../../Assets/Icons/Svgs/Search";

function SearchProfile() {
  const [profile, setProfile] = useState("");
  const [result, setResults] = useState([]);

  const getProfiles = () => {
    try {
      axios
        .get(`/user/profiles/${profile}`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((res) => setResults(res.data.profiles))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // setResults([]);
  }, []);

  useEffect(() => {
    setResults([]);
    getProfiles();
  }, [profile]);

  return (
    <div className="flex justify-center mt-5 flex-col mx-auto">
      <div className="flex flex-row w-72 md:w-96 h-10 bg-white rounded-3xl items-center justify-between">
        <input
          type="text"
          placeholder="What are you looking for ?"
          className="font-Lato tracking-wide w-60 md:w-80  ml-4 placeholder-gray-500 border border-white focus:outline-none text-gray-600 focus:ring-0 focus:ring-offset-0 focus:border-0"
          onChange={(e) => setProfile(e.target.value)}
        />
        <button
          type="button"
          className="rounded-full bg-primary w-8 h-8 mr-1 hover:bg-amber-600"
          onClick={getProfiles}
        >
          <SearchIcon />
        </button>
      </div>
      <div className="bg-slate-100 w-full rounded-br-md rounded-bl-md">
        <div className="flex flex-col justify-start pl-1 pr-1 z-50">
          {result && result.length > 0 ? (
            result.map((item) => (
              <Link
                to={`profile/index=${item.id}`}
                className="flex flex-row justify-start items-center bg-white p-2.5 rounded-md w-full mt-1 mb-1 hover:bg-gray-200"
                key={item.id}
              >
                <img
                  src={item.proPic}
                  alt="prpfilePic"
                  className="w-10 rounded-full"
                />
                <h1 className="font-Lato font-semibold text-primaryText ml-3 capitalize">
                  {item.username}
                </h1>
              </Link>
            ))
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchProfile;
