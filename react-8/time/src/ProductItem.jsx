const ProductItem = (props) => {
  return (
    <div className="product">
      <div className="product-image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="product-content">
        <h3 className="product-title">{props.title}</h3>
        <p className="product-description">{props.description}</p>
        <span className="product-price">
          <b>${props.price}</b>
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
