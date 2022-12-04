/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-duplicates */
import { useRef, useState } from "react";
import React from "react";
import Image from "./Image";

interface Props {
  images: any[];
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ images, onClose }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setSelectedIndex((prev) => {
      let mode = "";
      if (ref.current) {
        mode =
          e.clientX <
          (ref.current.getBoundingClientRect().left +
            ref.current.getBoundingClientRect().right) /
            2
            ? "prev"
            : "next";
      }

      if (mode === "next") {
        return ++prev < images.length ? prev : 0;
      }
      return --prev > -1 ? prev : images.length - 1;
    });
  };

  const onHover = () => {
    setIsHover(true);
  };

  const onNotHover = () => {
    setIsHover(false);
  };
  return (
    <div
      ref={ref}
      onClick={handleClick}
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 25000,
      }}
    >
      <div onMouseEnter={onHover} onMouseLeave={onNotHover}>
        <Image
          src={images[selectedIndex].src}
          style={{
            height: "100%",
            width: "100%",
            padding: 0,
          }}
        />
      </div>
      <div
        onClick={onClose}
        style={{
          fontSize: "50px",
          position: "absolute",
          color: "white",
          fontWeight: "bold",
          top: "5%",
          right: "5%",
          cursor: "pointer",
        }}
      >
        <h1>X</h1>
      </div>
    </div>
  );
};

export default Modal;
