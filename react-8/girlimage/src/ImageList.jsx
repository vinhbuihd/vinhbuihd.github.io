import ImageItem from "./ImageItem";

const ImageList = (props) => {
  console.log(props);
  return (
    <div className="container d-flex">
      <div className="row g-0">
        {props.images.map((image) => (
          <ImageItem key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default ImageList;
