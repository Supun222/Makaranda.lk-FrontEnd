/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/order */
import { useState } from "react";
import Grid from "./Grid";
import Modal from "./Modal";
import React from "react";

interface Props {
  images: { src: string }[];
  width: string;
  height: number;
}

const ReactGallery: React.FC<Props> = ({ height, images, width }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => setIsModalOpen((p) => !p);
  return isModalOpen ? (
    <Modal images={images} onClose={handleClick} />
  ) : (
    <Grid images={images} width={width} height={height} onClick={handleClick} />
  );
};

export default ReactGallery;
