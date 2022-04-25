import { useContext } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { WrapperContext } from "../Layout";
import "./Popup.css";
import { toast } from "react-toastify";

const Popup = () => {
  const {
    currentBuy,
    setCurrentBuy,
    closePopup,
    cartList,
    setCartList,
    isEdit,
    setIsEdit,
  } = useContext(WrapperContext);

  const addToCart = () => {
    if (isEdit) {
      const index = cartList.findIndex((prod) => prod.code == currentBuy.code);
      const newList = [...cartList];
      newList.splice(index, 1, currentBuy);
      setCartList(newList);
      toast.success("Đã cập nhật giỏ hàng", {
        position: "bottom-right",
      });
    } else {
      let newItem = {
        ...currentBuy,
        code: new Date().valueOf(),
      };
      if (cartList.length == 0) {
        let newList = [newItem];
        setCartList(newList);
        toast.success("Đã thêm vào giỏ hàng", {
          position: "bottom-right",
        });
      } else {
        let index = cartList.findIndex(
          (product) =>
            product.id == newItem.id &&
            product.size == newItem.size &&
            product.note == newItem.note
        );
        if (index != -1) {
          let newList = [...cartList];
          newList.splice(index, 1, {
            ...newItem,
            quantity: (cartList[index].quantity += newItem.quantity),
          });

          setCartList(newList);
        } else {
          let newList = [...cartList];
          newList.push(newItem);
          setCartList(newList);
        }
        toast.success("Đã thêm vào giỏ hàng", {
          position: "bottom-right",
        });
      }
    }
    closePopup();
    setCurrentBuy(null);
  };

  if (currentBuy) {
    return (
      <div className="product-popup">
        <div className="popup-box">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={closePopup}
          ></button>
          <div className="popup-item d-flex align-items-center">
            <div className="popup-image">
              <img src={currentBuy.image} alt="product" />
            </div>
            <div className="d-flex flex-column">
              <div className="popup-name">{currentBuy.name}</div>
              <div className="popup-price">
                {currentBuy.price.S.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="popup-picksize">
            <div className="popup-title">Chọn size *</div>
            <form className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="S"
                  name="flexRadioDefault"
                  id="size-s"
                  checked={currentBuy.size == "S"}
                  onChange={() => setCurrentBuy({ ...currentBuy, size: "S" })}
                />
                <label className="form-check-label" htmlFor="size-s">
                  Size S
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="M"
                  name="flexRadioDefault"
                  id="size-m"
                  checked={currentBuy.size == "M"}
                  onChange={() => setCurrentBuy({ ...currentBuy, size: "M" })}
                />
                <label className="form-check-label" htmlFor="size-m">
                  Size M + 5.000đ
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="L"
                  name="flexRadioDefault"
                  id="size-l"
                  checked={currentBuy.size == "L"}
                  onChange={() => setCurrentBuy({ ...currentBuy, size: "L" })}
                />
                <label className="form-check-label" htmlFor="size-l">
                  Size L + 10.000đ
                </label>
              </div>
            </form>
          </div>

          <div className="popup-note">
            <div className="popup-title">
              Ghi chú <span>(nếu có)</span>
            </div>
            <input
              className="popup-input"
              type="text"
              placeholder="Ghi chú cho quán"
              value={currentBuy.note}
              onChange={(e) =>
                setCurrentBuy({ ...currentBuy, note: e.target.value })
              }
            />
          </div>

          <div className="popup-bottom mt-16 d-flex align-items-center justify-content-center flex-column">
            <div className="cart-item-button d-flex align-items-center">
              <div className="minus">
                <AiFillMinusCircle
                  className="quantityBtn"
                  onClick={() => {
                    if (currentBuy.quantity == 1) return;
                    setCurrentBuy({
                      ...currentBuy,
                      quantity: currentBuy.quantity - 1,
                    });
                  }}
                />
              </div>
              <div className="cart-item-quantity">{currentBuy.quantity}</div>
              <div className="plus">
                <AiFillPlusCircle
                  className="quantityBtn"
                  onClick={() =>
                    setCurrentBuy({
                      ...currentBuy,
                      quantity: currentBuy.quantity + 1,
                    })
                  }
                />
              </div>
            </div>
            <button className="btn" onClick={() => addToCart()}>
              {isEdit ? "Cập nhật giỏ hàng" : "Thêm vào giỏ hàng:"}{" "}
              <span>
                {(
                  currentBuy.price[currentBuy.size] * currentBuy.quantity
                ).toLocaleString()}
              </span>
              đ
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Popup;
