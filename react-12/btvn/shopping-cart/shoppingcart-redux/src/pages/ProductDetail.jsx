import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../services/product.service";
import { addProduct } from "../store/reducers/cartList.slice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  let { productId } = useParams();

  const { data, isFetching } = useGetProductByIdQuery(productId);

  const showAndHidePopup = () => {
    const popup = document.querySelector(".productDetail-popup");

    popup.style.display = "flex";
    setTimeout(() => {
      popup.style.display = "none";
    }, 1000);
  };

  const addToCart = (id) => {
    dispatch(addProduct(id));
    showAndHidePopup();
  };

  if (isFetching) {
    return <h3 className="text-center mt-5">LOADING...</h3>;
  }

  return (
    <div className="productDetail">
      <div className="container">
        <h3 className="productDetail-heading">Chi tiết sản phẩm</h3>
        <div className="productDetail-popup flex-column justify-content-center align-items-center">
          <i className="bi bi-check-circle" style={{ fontSize: "32px" }}></i>
          <span>Đã thêm vào giỏ hàng</span>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="product-image">
              <img src={data.image} alt={data.title} />
            </div>
          </div>

          <div className="col-6">
            <div className="product-info">
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <p>
                Rating: {data.rating?.rate} <i className="bi bi-star-fill"></i>{" "}
                ({data.rating.count})
              </p>
              <p>
                Price: <b>${data.price}</b>
              </p>
            </div>
            <button
              onClick={() => addToCart(data.id)}
              className="btn btn-primary"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
