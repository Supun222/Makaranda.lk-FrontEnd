/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-unresolved */
import { React } from "react";
// import "./grid.css";
import Image from "./Image";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  images: any[];
  width: number;
  height: number;
  onClick: () => void;
}

const Grid: React.FC<Props> = ({ images, height, width, onClick }) => {
  return (
    <div className="row m-0" style={{ width, height }} onClick={onClick}>
      {images.length === 1 && (
        <Image
          className="col-12"
          key={images[0].title}
          src={images[0].src}
          height={`${height}px`}
          width={`${width}px`}
          style={{ objectFit: "cover", padding: 0 }}
        />
      )}
      {images.length === 2 &&
        images.map((image) => {
          return (
            <Image
              className="col-6"
              key={image.title}
              src={image.src}
              height={`${height}px`}
              style={{ objectFit: "cover", padding: 0 }}
            />
          );
        })}
      {images.length === 3 && (
        <>
          <Image
            className="col-12"
            key={images[0].title}
            src={images[0].src}
            height={`${height / 2}px`}
            style={{ objectFit: "cover", padding: 0 }}
          />
          {images.slice(1).map((image) => {
            return (
              <Image
                className="col-6"
                key={image.title}
                src={image.src}
                height={`${height / 2}px`}
                style={{ objectFit: "cover", padding: 0 }}
              />
            );
          })}
        </>
      )}
      {images.length === 4 && (
        <>
          <Image
            className="col-12"
            key={images[0].title}
            src={images[0].src}
            height={`${(height / 3) * 2}px`}
            style={{ objectFit: "cover", padding: 0 }}
          />
          {images.slice(1).map((image) => {
            return (
              <Image
                className="col-4"
                height={`${(height / 3) * 1}px`}
                key={image.title}
                src={image.src}
                style={{ objectFit: "cover", padding: 0 }}
              />
            );
          })}
        </>
      )}
      {images.length === 5 && (
        <>
          {images.slice(0, 2).map((image) => {
            return (
              <Image
                className="col-6"
                key={image.title}
                src={image.src}
                height={`${(height / 3) * 2}px`}
                style={{ objectFit: "cover", padding: 0 }}
              />
            );
          })}
          {images.slice(2).map((image) => {
            return (
              <Image
                className="col-4"
                key={image.title}
                src={image.src}
                height={`${(height / 3) * 1}px`}
                style={{ objectFit: "cover", padding: 0 }}
              />
            );
          })}
        </>
      )}
      {images.length > 5 && (
        <>
          {images.slice(0, 2).map((image) => {
            return (
              <Image
                className="col-6"
                key={image.title}
                src={image.src}
                height={`${(height / 3) * 2}px`}
                style={{ objectFit: "cover", padding: 0 }}
              />
            );
          })}
          <Image
            className="col-4"
            key={images[4].title}
            src={images[4].src}
            height={`${(height / 3) * 1}px`}
            showNumber={images.length - 5}
            style={{ objectFit: "cover", padding: 0 }}
          />
        </>
      )}
    </div>
  );
};

export default Grid;
