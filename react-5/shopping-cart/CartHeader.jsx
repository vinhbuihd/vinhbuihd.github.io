const CartHeader = (props) => {
  let totalQuantity = 0;
  props.carts.forEach((item) => {
    return (totalQuantity += item.quantity);
  });
  return (
    <div className="cart-header">
      <div className="width">
        <div className="cart-header-inner">
          <h2>UseReducer</h2>
          <div className="cart-header-icon">
            <i className="bi bi-bag-check"></i>
            <div className="cart-header-quantity">
              <b>{totalQuantity}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
