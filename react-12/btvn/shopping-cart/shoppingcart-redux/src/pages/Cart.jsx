import { useDispatch, useSelector } from "react-redux";
import {
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
} from "../store/reducers/cartList.slice";
import { useGetAllProductsQuery } from "../services/product.service";

const Cart = () => {
  const cartList = useSelector((state) => state.cartList);
  const { data } = useGetAllProductsQuery();
  const dispatch = useDispatch();

  let totalPrice = 0;

  const changeQuantity = (id, type) => {
    if (type == "increase") {
      dispatch(increaseQuantity(id));
    } else {
      dispatch(decreaseQuantity(id));
    }
  };

  if (cartList.length == 0) {
    return <h2 className="text-center mt-5">Giỏ hàng trống</h2>;
  }

  return (
    <div className="cart-main">
      <div className="container">
        <h2 className="text-center mt-5">Giỏ hàng</h2>

        {cartList.map((prod) => {
          const product = data.find((product) => product.id == prod.id);
          totalPrice += prod.quantity * product.price;
          return (
            <div
              key={product.id}
              className="cart-item d-flex align-items-center justify-content-between"
            >
              <div className="cart-item-info d-flex align-items-center">
                <img
                  className="cart-item-image"
                  src={product.image}
                  alt={product.title}
                />
                <div className="cart-item-info">
                  <span>{product.title}</span>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <button
                  disabled={prod.quantity == 1}
                  className="changeQuantityBtn"
                  onClick={() => changeQuantity(prod.id, "decrease")}
                >
                  <i className="bi bi-dash-square"></i>
                </button>

                <div className="cart-item-quantity">{prod.quantity}</div>

                <button
                  className="changeQuantityBtn"
                  onClick={() => changeQuantity(prod.id, "increase")}
                >
                  <i className="bi bi-plus-square"></i>
                </button>
              </div>
              <div className="cart-item-price">
                <b>${(prod.quantity * product.price).toFixed(2)}</b>
              </div>
              <div
                className="deleteBtn"
                onClick={() => dispatch(removeProduct(product.id))}
              >
                Xóa
              </div>
            </div>
          );
        })}

        <div className="total-money">
          Tổng cộng: <b>${totalPrice.toFixed(2)}</b>
        </div>
      </div>
    </div>
  );
};
export default Cart;
