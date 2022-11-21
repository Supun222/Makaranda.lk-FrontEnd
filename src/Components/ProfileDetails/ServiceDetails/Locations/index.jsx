import { React } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
// import env from "react-dotenv";

function Locations() {
  const mapStyles = {
    height: "20rem",
    width: "100%",
  };

  const defaultCenter = {
    lat: 6.785686410707279,
    lng: 79.93700511450389,
  };

  const locations = [
    {
      name: "Kesbewa",
      location: {
        lat: 6.785686410707279,
        lng: 79.93700511450389,
      },
    },
    {
      name: "Madapatha",
      location: {
        lat: 6.769135971139842,
        lng: 79.9289043046299,
      },
    },
  ];

  return (
    <div className=" rounded w-full h-[20rem]">
      <h3 className="font-Lato font-semibold text-lg text-gray-700 mb-2">
        Locations
      </h3>
      <LoadScript googleMapsApiKey="AIzaSyAzGHnoAlDrnKB9LD4v7cUfksTU4hJWX3o">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={20}
          center={defaultCenter}
          className="rounded-lg"
        >
          {locations.map((item) => {
            return <MarkerF key={item.name} position={item.location} />;
          })}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Locations;
