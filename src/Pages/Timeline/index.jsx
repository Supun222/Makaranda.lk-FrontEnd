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
        <div className="flex flex-row justify-center">
          <div className="mr-3">
            <FilterPanel />
          </div>
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
