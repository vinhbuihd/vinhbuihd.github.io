import "./Card.css";
import data from "/public/js/db";
import { FaShoppingBasket } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { useContext, useEffect } from "react";
import { WrapperContext } from "../Layout";
import { toast } from "react-toastify";

const Card = ({ product }) => {
  const { currentBuy, setCurrentBuy, closePopup, isShowModal, setIsShowModal } =
    useContext(WrapperContext);

  const handleClickBuy = (productId) => {
    const product = data.find((product) => product.id == productId);
    setCurrentBuy({
      ...product,
      size: "S",
      note: "",
      quantity: 1,
    });
  };

  return (
    <div className="card" dataset={product.id}>
      <div className="card-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="card-content">
        <div className="card-content-left d-flex align-items-center justify-content-between">
          <div className="card-like">
            <div className="like-icon">
              {/* {product.star} */}
              <AiFillStar
                style={{
                  display: `${product.star > 0 ? "inline-block" : "none"}`,
                }}
              />
              <AiFillStar
                style={{
                  display: `${product.star > 1 ? "inline-block" : "none"}`,
                }}
              />
              <AiFillStar
                style={{
                  display: `${product.star > 2 ? "inline-block" : "none"}`,
                }}
              />
              <AiFillStar
                style={{
                  display: `${product.star > 3 ? "inline-block" : "none"}`,
                }}
              />
              <AiFillStar
                style={{
                  display: `${product.star > 4 ? "inline-block" : "none"}`,
                }}
              />
            </div>
          </div>

          <div className="card-price d-flex align-items-center">
            <div className="price">
              <span>{product.price.S.toLocaleString()}</span> đ
            </div>
          </div>
        </div>
        <div className="card-content-right d-flex align-items-center justify-content-between">
          <h3 className="card-name">{product.name}</h3>

          <div
            onClick={() => handleClickBuy(product.id)}
            className="card-cart d-flex align-items-center justify-content-center"
          >
            <FaShoppingBasket />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
