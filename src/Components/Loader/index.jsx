import "../../Utils/Styles/Loader.scss";
import BeatLoader from "react-spinners/BeatLoader";

function Loader() {
  return (
    <div className="h-screen w-screen m-auto flex justify-center items-center">
      <BeatLoader />
    </div>
  );
}

export default Loader;
