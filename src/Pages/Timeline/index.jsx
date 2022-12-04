import { Outlet } from "react-router-dom";
import TimelineHeader from "../../Lib/TimelineHeader";
import SearchPanel from "../../Components/SearchPanel";
import FilterPanel from "../../Components/FilterPanel";

function Timeline() {
  return (
    <div className="text-center">
      <TimelineHeader />
      <div className="flex flex-col justify-center container mx-auto mt-fil">
        <SearchPanel />
        <div className="grid grid-cols-5 justify-center">
          <div className="">
            <FilterPanel />
          </div>
          <div className="col-span-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
