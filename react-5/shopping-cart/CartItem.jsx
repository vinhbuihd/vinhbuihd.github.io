const CartItem = (props) => {
  // {name, price, image}
  return (
    <div className="cart-item">
      <div className="cart-content">
        <div className="cart-image">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="cart-info">
          <h4>{props.name}</h4>
          <p>${props.price}</p>
          <span onClick={() => props.deleteItem(props.id)}>remove</span>
        </div>
      </div>

      <div className="cart-quantity">
        <i
          className="bi bi-chevron-up"
          onClick={() => props.handleChangeQuantity(props.id, "increase")}
        ></i>
        <span>{props.quantity}</span>
        <i
          className="bi bi-chevron-down"
          onClick={() => props.handleChangeQuantity(props.id, "decrease")}
        ></i>
      </div>
    </div>
  );
};
