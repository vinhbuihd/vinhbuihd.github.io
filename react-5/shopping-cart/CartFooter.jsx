const CartFooter = (props) => {
  // props.data

  let totalPrice = 0;
  props.data.map((item) => {
    totalPrice += item.product.price * item.quantity;
  });
  return (
    <div className="width">
      <div className="cart-footer">
        <div className="cart-footer-total">
          <h4>Total</h4>
          <h4 className="total-price">${totalPrice.toFixed(2)}</h4>
        </div>
        <button onClick={props.clearList}>CLEAR CART</button>
      </div>
    </div>
  );
};
