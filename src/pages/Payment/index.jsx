import { useContext, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { WrapperContext } from "../../components/Layout";
import "./Payment.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const OrderList = ({ cartList, editItem, deleteItem, totalPrice }) => {
  return (
    <div>
      {cartList.map((product) => {
        return (
          <div
            className="cart-item d-flex align-items-center"
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
                <span>x{product.quantity}</span>
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
        );
      })}
    </div>
  );
};

const Payment = () => {
  const { cartList, editItem, deleteItem, totalPrice } =
    useContext(WrapperContext);
  const [saleValue, setSaleValue] = useState(0);
  const navigate = useNavigate();
  console.log(cartList);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Bạn đã đặt hàng thành công!!!", {
      position: "top-center",
    });
    navigate("/menu");
  };

  const promoCode = [
    {
      name: "xinchao",
      value: 50,
    },
    {
      name: "hello",
      value: 40,
    },
  ];

  const appleCode = (e) => {
    e.preventDefault();
    const inputCodeEle = document.querySelector(".code");
    const errorMs = document.querySelector(".error-ms");

    const isApply = promoCode.find((code) => code.name == inputCodeEle.value);
    if (isApply) {
      setSaleValue((totalPrice * isApply.value) / 100);
      inputCodeEle.value = "";
      errorMs.innerText = "Áp dụng thành công !!!";
      errorMs.style.color = "green";
    } else {
      errorMs.innerText = "Mã giảm giá không đúng";
      errorMs.style.color = "#d8000c";
      setSaleValue(0);
    }
  };

  if (cartList.length == 0) {
    return (
      <>
        <section className="payment-banner"></section>

        <div className="text-center mt-4 mb-4" style={{ margin: "0 auto" }}>
          <h3>Giỏ hàng trống</h3>
          <Link to="/menu">Tiếp tục mua hàng</Link>
        </div>
      </>
    );
  }

  return (
    <div>
      <section className="payment-banner"></section>

      <div className="main padding-60">
        <h2 className="h2-heading">Thanh toán</h2>
        <div className="container">
          <form
            action=""
            className="product-box d-flex"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6">
                <h3 className="text-center">Thông tin khách hàng</h3>
                <div className="profile-item">
                  <div>
                    <label htmlFor="name">Họ tên :</label>

                    <input
                      className="input-text name"
                      type="text"
                      placeholder="Họ và tên"
                      onChange={(e) => handleUserDataChange(e, "name")}
                      {...register("name", {
                        required: true,
                        maxLength: 80,
                      })}
                    />
                  </div>
                  {errors.name && (
                    <span className="error-mesage">
                      Vui lòng nhập tên của bạn
                    </span>
                  )}
                </div>

                <div className="profile-item">
                  <div>
                    <label htmlFor="name">Điện thoại :</label>
                    <input
                      className="input-text tel"
                      type="text"
                      placeholder="Điện thoại"
                      onChange={(e) => handleUserDataChange(e, "phone")}
                      {...register("phone", { required: true, minLength: 10 })}
                    />
                  </div>
                  {errors.phone?.type == "required" && (
                    <span className="error-mesage">
                      Vui lòng nhập số điện thoại
                    </span>
                  )}
                  {errors.phone?.type == "minLength" && (
                    <span className="error-mesage">
                      Số điện thoại không đúng
                    </span>
                  )}
                </div>

                <div className="profile-item">
                  <div>
                    <label htmlFor="name">Địa chỉ :</label>
                    <input
                      className="input-text add"
                      type="text"
                      placeholder="Địa chỉ"
                      onChange={(e) => handleUserDataChange(e, "address")}
                      {...register("address", { required: true })}
                    />
                  </div>
                  {errors.address && (
                    <span className="error-mesage">
                      Vui lòng nhập địa chỉ của bạn
                    </span>
                  )}
                </div>

                <div className="profile-item">
                  <label className="option">Phương thức thanh toán :</label>
                  <div className="d-flex align-items-center mt-3">
                    <div>
                      <input
                        type="radio"
                        name="thanhtoan"
                        id="tienmat"
                        value="cash"
                        {...register("payMethod", { required: true })}
                      />
                      <label className="option" htmlFor="tienmat">
                        Tiền mặt
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="thanhtoan"
                        id="taikhoan"
                        value="credit"
                        {...register("payMethod", { required: true })}
                      />
                      <label className="option" htmlFor="taikhoan">
                        Thẻ ngân hàng
                      </label>
                    </div>
                  </div>
                  {errors.payMethod && (
                    <span className="error-mesage m-0">
                      Hãy chọn phương thức thanh toán
                    </span>
                  )}
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-6 product-list">
                <h3 className="text-center">Thông tin đơn hàng</h3>

                <OrderList
                  cartList={cartList}
                  editItem={editItem}
                  deleteItem={deleteItem}
                  totalPrice={totalPrice}
                />
              </div>
              <div className="calculator col-12">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 promocode">
                    <div className="d-flex align-items-center justify-content-center">
                      <input
                        className="code"
                        type="text"
                        placeholder="Nhập mã giảm giá"
                      />
                      <button className="btn code-apply" onClick={appleCode}>
                        Áp dụng mã
                      </button>
                    </div>
                    <p className="text-center error-ms"></p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6">
                    <div className="price-box">
                      <div className="subtotal d-flex align-items-center mt-4">
                        <p className="product-list-title">Tạm tính :</p>
                        <p>
                          <span className="product-list-price">
                            {totalPrice.toLocaleString()}đ
                          </span>{" "}
                        </p>
                      </div>
                      <div className="sale-money d-flex align-items-center">
                        <p className="product-list-title">Giảm giá :</p>
                        <p>
                          <span className="product-list-price">
                            - {saleValue.toLocaleString()} đ
                          </span>
                        </p>
                      </div>
                      <div className="total d-flex align-items-center">
                        <p className="product-list-title">Tổng cộng : </p>
                        <p>
                          <span className="product-list-price">
                            {(totalPrice - saleValue).toLocaleString()} đ
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-group text-center">
                <Link to="/menu" className="btn white">
                  Quay lại
                </Link>
                <button type="submit" className="btn order-btn">
                  Đặt hàng
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
