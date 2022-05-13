import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import Cart from "../Cart";
import Footer from "../Footer";
import Header from "../Header";
import Overlay from "../Overlay";
import Popup from "../Popup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackToTop from "../BackToTop";

export const WrapperContext = createContext();
const Layout = () => {
  const [currentBuy, setCurrentBuy] = useState(null);
  const [cartList, setCartList] = useState([]);
  const [data, setData] = useState([]);
  const [isShowCart, setIsShowCart] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [userList, setUserList] = useState(
    JSON.parse(localStorage.getItem("userList")) || []
  );
  const [isLoged, setIsLoged] = useState({
    status: false,
    user: {},
  });

  useEffect(() => {
    document.title = "Coffee Cup";
  }, []);

  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const closePopup = () => {
    setCurrentBuy(null);
  };

  const closeCartSide = () => {
    console.log("Close cart");
    setIsShowCart(false);
  };
  const editItem = (code) => {
    const newList = [...cartList];
    const item = newList.find((prod) => prod.code == code);
    setCurrentBuy(item);
    setIsEdit(true);
  };

  const deleteItem = (code) => {
    const confirm = confirm("Bạn có muốn xóa sản phẩm");
    if (confirm) {
      const newList = [...cartList];
      const index = newList.findIndex((product) => product.code == code);
      newList.splice(index, 1);
      setCartList(newList);
    } else {
      return;
    }
  };
  const totalPrice = cartList.reduce((acc, cur) => {
    return acc + cur.quantity * cur.price[cur.size];
  }, 0);

  return (
    <WrapperContext.Provider
      value={{
        currentBuy,
        setCurrentBuy,
        closePopup,
        cartList,
        setCartList,
        data,
        totalPrice,
        isShowCart,
        setIsShowCart,
        closeCartSide,
        editItem,
        deleteItem,
        isEdit,
        setIsEdit,
        userList,
        setUserList,
        isLoged,
        setIsLoged,
      }}
    >
      <Header />
      <Popup />
      <Cart />
      <ToastContainer
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        autoClose={1000}
        position="bottom-right"
      />
      <BackToTop />
      <Overlay />
      <Outlet />
      <Footer />
    </WrapperContext.Provider>
  );
};

export default Layout;
