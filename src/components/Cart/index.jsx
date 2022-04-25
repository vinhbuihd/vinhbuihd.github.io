import { useContext } from "react";
import { Link } from "react-router-dom";
import { WrapperContext } from "../Layout";
import { RiDeleteBinFill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import "./Cart.css";

const CartList = ({
  cartList,
  totalPrice,
  isShowCart,
  setIsShowCart,
  closeCartSide,
  editItem,
  deleteItem,
}) => {
  if (cartList.length == 0) {
    return (
      <>
        <h3 className="text-center">Giỏ hàng trống</h3>
        <div className="text-center">
          <Link to="/menu" className="btn" onClick={closeCartSide}>
            Tiếp tục mua hàng
          </Link>
        </div>
      </>
    );
  }

  return (
    <div>
      {cartList.map((product) => (
        <div
          className="cart-item d-flex"
          dataset={product.code}
          key={product.code}
        >
          <div className="cart-item-image">
            <img src={product.image} alt={product.alt} />
          </div>
          <div className="cart-item-info">
            <div className="name">{product.name}</div>
            <div className="size d-flex align-items-center">
              Size {product.size}
              <span>x {product.quantity}</span>
              <div className="edit" onClick={() => editItem(product.code)}>
                <MdModeEdit className="cart-icon-small" />
              </div>
            </div>
            <div className="note">{product.note}</div>
          </div>

          <div className="d-flex align-items-center">
            <div className="cart-item-sub-price">
              <span>
                {(
                  product.quantity * product.price[product.size]
                ).toLocaleString()}
              </span>
              đ
            </div>
          </div>

          <div
            className="delete-product d-flex align-items-center"
            onClick={() => deleteItem(product.code)}
          >
            <RiDeleteBinFill className="cart-icon-small" />
          </div>
        </div>
      ))}
      <Link to="/menu" onClick={closeCartSide}>
        <span>Thêm món</span>
      </Link>
      <div className="sub-total d-flex align-items-center justify-content-between">
        Tổng cộng <span>{totalPrice.toLocaleString()} đ</span>
      </div>
      <div className="cart-side-btn text-center mt-3">
        <Link to="/payment" className="btn" onClick={closeCartSide}>
          Thanh toán
        </Link>
      </div>
    </div>
  );
};

const Cart = () => {
  const {
    cartList,
    totalPrice,
    isShowCart,
    setIsShowCart,
    closeCartSide,
    editItem,
    deleteItem,
  } = useContext(WrapperContext);

  return (
    <div className={`cart-side ${isShowCart ? "open" : ""}`}>
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={closeCartSide}
      ></button>
      <div className="title text-center">Giỏ hàng của tôi</div>

      <div className="content">
        <CartList
          cartList={cartList}
          totalPrice={totalPrice}
          closeCartSide={closeCartSide}
          editItem={editItem}
          deleteItem={deleteItem}
        />
      </div>
    </div>
  );
};

export default Cart;
