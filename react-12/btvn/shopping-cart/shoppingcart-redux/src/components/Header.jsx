import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const cartList = useSelector((state) => state.cartList);
  const totalQuantity = cartList.reduce((pre, cur) => {
    return (pre += cur.quantity);
  }, 0);

  return (
    <div className="header d-flex align-items-center justify-content-between">
      <div className="container d-flex align-items-center justify-content-between">
        <Link className="logo" to="/">
          LOGO
        </Link>
        <ul className="d-flex align-items-center">
          <li className="header-link">
            <NavLink to="/">Trang chủ</NavLink>
          </li>
          <li className="header-link">
            <NavLink to="/menu">Menu</NavLink>
          </li>
        </ul>

        <div className="cart-icon">
          <Link to="/cart">
            <i className="bi bi-bag-check"></i>
            <span>{totalQuantity == 0 ? "" : totalQuantity}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
