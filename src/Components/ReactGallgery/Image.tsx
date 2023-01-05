/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/function-component-definition */
import React from "react";

interface Props {
  src: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  className?: string;
  showNumber?: number;
}

const Image: React.FC<Props> = ({
  src,
  height,
  width,
  style,
  className,
  showNumber,
}) => {
  return showNumber ? (
    <div
      style={{ width, height, padding: 0, position: "relative" }}
      className={className}
    >
      <img
        className="w-full h-[13.1rem]"
        src={src}
        style={{ ...style, filter: "brightness(28%)" }}
        alt="ajasd"
      />
      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "white",
          transform: "translate(-50%, -50%)",
        }}
      >
        +{showNumber}
      </span>
    </div>
  ) : (
    <img
      src={src}
      height={height}
      width={width}
      style={style}
      className={className}
      alt="ajasd"
    />
  );
};

export default Image;
