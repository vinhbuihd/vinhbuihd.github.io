const Cart = (props) => {
  return (
    <div className="cart">
      <div className="width">
        {props.carts.map((cartItem) => {
          return (
            <CartItem
              name={cartItem.product.name}
              image={cartItem.product.image}
              price={cartItem.product.price}
              quantity={cartItem.quantity}
              key={cartItem.product.id}
              id={cartItem.product.id}
              handleChangeQuantity={props.handleChangeQuantity}
              deleteItem={props.deleteItem}
            />
          );
        })}
      </div>
    </div>
  );
};
