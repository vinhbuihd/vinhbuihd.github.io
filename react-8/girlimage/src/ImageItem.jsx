const ImageItem = (props) => {
  return (
    <div className="image-item col-lg-3 col-md-4 col-sm-6">
      <img src={props.image.urls.small} alt="image" />
    </div>
  );
};

export default ImageItem;
