import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";

import "./News.css";

const News1 = () => {
  return (
    <div className="main-content">
      <h3 className="h3-heading">
        NĂM MỚI, UỐNG "KHỞI ĐẦU SUNG" - NHẬN LÌ XÌ KHỦNG
      </h3>
      <p>Ngày viết: 22/02/2022</p>
      <div className="row mt-5">
        <div className="col-12 col-md-6">
          <h4>Năm mới "khởi đầu sung" với bộ 3 trà Tết</h4>

          <p>
            Chia tay năm cũ với quá nhiều nốt trầm, Tết này hãy cùng The Coffee
            Cup nạp cho mình bộ 3 "Sung" gói trọn tình cảm đong đầy, vừa ngon
            tròn vị vừa mang đến sự hứng khởi, tươi mới cho những ngày đầu năm
            để bắt đầu năm Dần đầy năng lượng, mãnh liệt và đủ sức "công phá"
            mọi thử thách.Nào, giờ thì hãy cùng nhau khám phá bộ 3 trà Tết và
            cùng nhau đón một cái Tết trọn vẹn hơn cả về sức khỏe, tình cảm, sum
            vầy và sự thịnh vượng!
          </p>
        </div>
        <div className="col12 col-md-6">
          <img
            className="tintuc-img-1"
            src="/images/giohang.jpg"
            alt="giohang"
          />
        </div>
        <div className="col-12 mt-4">
          <h4>Tranh thủ cơ hội nhận lì xì khủng tại "Nhà"</h4>

          <p>
            Không chỉ được thưởng thức những "cực phẩm" Trà mùa Tết, The Coffee
            Cup còn lì xì riêng cho khách hàng khi đến với "Nhà" bằng một món
            quà đặc biệt: Mua một ly trà Tết KHỞI ĐẦU SUNG, bạn sẽ được tặng
            thêm một ly tùy chọn trong bộ ba Trà Sen Nhãn Sum Vầy, Trà Dưa Đào
            Sung Túc và Trà Sữa Sung Sức.
          </p>
          <div>
            <img className="tintuc-img-2" src="/images/cf-10-3.jpg" alt="cf" />
          </div>
          <p>
            Đừng quên chương trình chỉ áp dụng từ 20/1 đến hết ngày 30/2, không
            áp dụng trên topping và mỗi khách hàng chỉ được nhận 1 mã/SĐT thôi
            nhé. Ngoài ra bạn cũng không nhận được ưu đãi này khi sử dụng chương
            trình khuyến mãi song song và chương trình có thể kết thúc sớm hơn
            dự kiến khi hết số lượng voucher phát ra.
          </p>
          <p>
            <i>
              Cùng Nhà chào đón năm Dần đủ đầy, sung sức như hổ, sum vầy tết
              sang và ngày càng sung túc bạn nhé!
            </i>
          </p>
        </div>
      </div>
      <div className="line d-flex align-items-center justify-content-between">
        <div className="share">
          <span>Chia sẻ: </span>

          <Link to="/news" className="footer-icon">
            <AiFillFacebook />
          </Link>
          <Link to="/news" className="footer-icon">
            <AiFillTwitterSquare />
          </Link>
          <Link to="/news" className="footer-icon">
            <AiFillInstagram />
          </Link>
        </div>
        <div className="next-page">
          <a href="#">
            Bài kế tiếp <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default News1;
