import { Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TimelineHeader from "../../Lib/TimelineHeader";
import SearchPanel from "../../Components/SearchPanel";
import FilterPanel from "../../Components/FilterPanel";
import Newprofiles from "../../Components/Newprofiles";
import axios from "../../axios";

function Timeline() {
  const { category, location } = useParams();
  const [profileID, setProfileIds] = useState([]);
  // const [changeSet, setChangeSet] = useState();
  const getUsersIds = async () => {
    await axios
      .get(`/user/timeline/category=${category}/location=${location}`)
      .then((res) => setProfileIds(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUsersIds();
    // console.log(profileID);
  }, [category]);

  useEffect(() => {
    // console.log(profileID, "timeline");
  }, [profileID]);

  useEffect(() => {
    setProfileIds([]);
    getUsersIds();
  }, [location, category]);

  return (
    <div className="text-center">
      <TimelineHeader />
      <div className="flex flex-col justify-center container mx-auto mt-fil">
        <SearchPanel />
        <div className="grid grid-cols-6 justify-center gap-2">
          <div className="col-span-2">
            <FilterPanel />
          </div>
          <div className="col-span-4 flex flex-col">
            <div className="w-full mb-5">
              <Newprofiles />
            </div>
            <div className="w-full">
              <Outlet context={[profileID]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
