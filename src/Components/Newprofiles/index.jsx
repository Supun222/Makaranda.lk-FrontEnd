import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Images from "../../Resources/images.json";
import "./slide.scss";

function Newprofiles() {
  return (
    <div className="flex flex-col justify-start w-full p-1 pb-0 border-4 border-gray-100 rounded-lg">
      <div className="flex flex-col justify-start p-2">
        <h1 className="text-start font-Lato font-bold text-gray-500 text-lg">
          Home {">"} All Posts {">"} Dancing Groups{" "}
        </h1>
        <h3 className="text-start font-Lato font-bold text-gray-400 tracking-wide mt-2">
          New and Recent Dancing Groups for Weddings and Fucntionsss
        </h3>
      </div>
      <Carousel showArrows className="main-slide mx-auto w-full mt-3">
        {Images.map((image) => (
          <div key={image.id}>
            <img
              src={image.src}
              alt="tree"
              className="w-96 h-96 object-cover"
            />
            <p className="legend">{image.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Newprofiles;
