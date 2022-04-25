import { useContext } from "react";
import { WrapperContext } from "../Layout";
import "./Overlay.css";

const Overlay = () => {
  const { closePopup, closeCartSide, currentBuy, isShowCart } =
    useContext(WrapperContext);

  const closeAll = () => {
    closePopup();
    closeCartSide();
  };

  return (
    <div
      className={`overlay ${currentBuy || isShowCart ? "open" : ""}`}
      onClick={closeAll}
    ></div>
  );
};

export default Overlay;
