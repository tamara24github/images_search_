import ImageCard from "./ImageCard";
import "../css/imageList.css";

function ImageList({ images }) {
  const renderImages = images.map((image) => {
    return <ImageCard image={image} key={image.id} />;
  });
  return <div className="image-list"> {renderImages}</div>;
}

export default ImageList;
