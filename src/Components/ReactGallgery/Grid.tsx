/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/function-component-definition */
import React from "react";
// import "./grid.css";
import Image from "./Image";

interface Props {
  images: any[];
  width: string;
  height: number;
  onClick: () => void;
}

const Grid: React.FC<Props> = ({ images, height, width, onClick }) => {
  return (
    <div
      className="grid grid-cols-12 gap-1"
      style={{ width, height }}
      onClick={onClick}
    >
      {images.length === 1 && (
        <Image
          className="col-span-12"
          src={images[0].src}
          height={`${height}px`}
          width={`${width}px`}
          style={{ objectFit: "cover", padding: 0 }}
        />
      )}
      {images.length === 2 &&
        images.map((image, index) => {
          return (
            <Image
              className="col-span-6"
              key={index}
              src={image.src}
              height={`${height}px`}
              style={{ objectFit: "cover", padding: 0 }}
            />
          );
        })}
      {images.length === 3 && (
        <>
          <Image
            className="col-span-12"
            src={images[0].src}
            height={`${height / 2}px`}
            style={{ objectFit: "cover", padding: 0 }}
          />
          {images.slice(1).map((image, index) => {
            return (
              <Image
                className="col-span-6"
                key={index}
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
            className="col-span-12"
            src={images[0].src}
            height={`${(height / 3) * 2}px`}
            style={{ objectFit: "cover", padding: 0 }}
          />
          {images.slice(1).map((image, index) => {
            return (
              <Image
                className="col-span-4"
                height={`${(height / 3) * 1}px`}
                key={index}
                src={image.src}
                style={{ objectFit: "cover", padding: 0 }}
              />
            );
          })}
        </>
      )}
      {images.length === 5 && (
        <>
          {images.slice(0, 2).map((image, index) => {
            return (
              <Image
                className="col-span-6"
                key={index}
                src={image.src}
                height={`${(height / 3) * 2}px`}
                style={{ objectFit: "cover", padding: 0 }}
              />
            );
          })}
          {images.slice(2).map((image, index) => {
            return (
              <Image
                className="col-span-4"
                key={index}
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
          {images.slice(0, 2).map((image, index) => {
            return (
              <Image
                className="col-span-6 object-cover  h-[340px] w-full"
                key={index}
                src={image.src}
                // height={`${(height / 3) * 2}px`}
              />
            );
          })}
          {images.slice(2, 4).map((image, index) => {
            return (
              <Image
                className="col-span-4 object-cover  h-[13.1rem] w-full"
                key={index}
                src={image.src}
              />
            );
          })}
          <Image
            className="col-span-4 object-cover h-full"
            src={images[4].src}
            showNumber={images.length - 5}
          />
        </>
      )}
    </div>
  );
};

export default Grid;
