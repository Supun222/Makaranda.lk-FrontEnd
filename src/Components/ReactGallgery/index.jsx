/* eslint-disable react/function-component-definition */
import { useState, React } from "react";
import Grid from "./Grid";
import Modal from "./Modal";

interface Props {
  images: { src: string }[];
  width: number;
  height: number;
}

// eslint-disable-next-line react/prop-types
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
