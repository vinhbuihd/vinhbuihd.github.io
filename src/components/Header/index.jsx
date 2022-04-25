import { Link, NavLink } from "react-router-dom";
import { FaBars, FaShoppingBasket } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import "./Header.css";
import { useContext, useEffect, useState } from "react";
import { WrapperContext } from "../Layout";

const Header = () => {
  const { cartList, isShowCart, setIsShowCart } = useContext(WrapperContext);
  const totalQuantity = cartList.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  useEffect(() => {
    const headerEle = document.querySelector("header");

    var lastScrollTop = 0;

    window.addEventListener(
      "scroll",
      function () {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
          headerEle.style.transform = "translateY(-100%)";
        } else {
          headerEle.style.transform = "translateY(0)";
          headerEle.classList.add("scroll-top");
        }
        lastScrollTop = st > 0 ? st : 0;

        if (st == 0) {
          headerEle.classList.add("bg-transparent");
          headerEle.classList.remove("scroll-top");
        } else {
          headerEle.classList.remove("bg-transparent");
        }
      },
      false
    );
  }, []);

  const [isShowSide, setIsShowSide] = useState(false);

  const showCartList = () => {
    setIsShowCart(true);
  };

  const headerClick = (e) => {
    const clickItem = e.target.closest(".nav-item");

    document.querySelector(".nav-item.active").classList.remove("active");
    clickItem.classList.add("active");
    setIsShowSide(false);
  };

  return (
    <header>
      <div className="container ">
        <div className="header-inner d-flex align-items-center">
          <div className="bars-icon">
            <FaBars
              className="bars"
              onClick={() => setIsShowSide(!isShowSide)}
            />
          </div>
          <Link to="/" className="logo">
            <img src="images/logo-2.png" alt="logo" />
          </Link>
          <ul className={`nav-list ${isShowSide ? "show" : ""}`}>
            <li onClick={headerClick} className="nav-item active">
              <NavLink to="/">Trang chủ</NavLink>
            </li>
            <li onClick={headerClick} className="nav-item">
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li onClick={headerClick} className="nav-item">
              <NavLink to="/news">Tin Tức</NavLink>
            </li>
            <li onClick={headerClick} className="nav-item">
              <NavLink to="/contact">Liên hệ</NavLink>
            </li>
            <li onClick={headerClick} className="nav-item">
              <NavLink to="/about">Chúng tôi</NavLink>
            </li>
          </ul>
          <div className="login d-flex">
            <div
              className="cart"
              style={{ color: "#fff" }}
              onClick={showCartList}
            >
              <FaShoppingBasket className="cart-icon" />
              <div
                className="cart-quantity"
                style={{ display: totalQuantity == 0 ? "none" : "block" }}
              >
                {totalQuantity}
              </div>
            </div>
            <div className="user-icon">
              <NavLink to="/login">
                <FaUser style={{ color: "#fff" }} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
