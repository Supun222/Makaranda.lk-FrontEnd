import { Outlet } from "react-router-dom";
import TimelineHeader from "../../Lib/TimelineHeader";
import SearchPanel from "../../Components/SearchPanel";
import FilterPanel from "../../Components/FilterPanel";
import Newprofiles from "../../Components/Newprofiles";

function Timeline() {
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
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
