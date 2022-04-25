import { FaCalendarAlt } from "react-icons/fa";
import "./News.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";
import Register from "../../components/Register";

export const NewsMain = () => {
  return (
    <>
      <div className="main-content">
        <Link to="/news/1" className="main-content-item d-flex">
          <div className="image">
            <img src="../images/giohang.jpg" alt="tintuc" />
          </div>
          <div className="info">
            <h3 className="info-name">
              Năm mới, uống "cực sung" - Nhận lì xì khủng
            </h3>
            <div className="info-date d-flex">
              <div className="info-date-icon">
                <FaCalendarAlt />
              </div>
              <div className="info-date-time">04/03/2022</div>
            </div>
            <p className="info-content">
              Chia tay năm cũ với quá nhiều nốt trầm, Tết này hãy cùng The
              Coffee Cup nạp cho mình bộ 3 "Sung" gói trọn tình cảm đong đầy,
              vừa ngon tròn vị vừa mang đến sự hứng khởi...
            </p>
          </div>
        </Link>
        <Link to="/news/1" className="main-content-item d-flex">
          <div className="image">
            <img src="../images/tintuc-1.jpg" alt="tintuc" />
          </div>
          <div className="info">
            <h3 className="info-name">
              Tết cận kề - Fan Coffee Cup có quà năm mới...
            </h3>
            <div className="info-date d-flex">
              <div className="info-date-icon">
                <FaCalendarAlt />
              </div>
              <div className="info-date-time">14/02/2022</div>
            </div>
            <p className="info-content">
              Ra mắt bộ sản phẩm mới toanh để “khuynh đảo” những ngày Tết, The
              Coffee House đề cao những tiêu chí có thể cuốn hút và chinh phục
              bạn ngay lần đầu tiên chạm mặt
            </p>
          </div>
        </Link>
        <Link to="/news/1" className="main-content-item d-flex">
          <div className="image">
            <img src="../images/tintuc-2.jpg" alt="tintuc" />
          </div>
          <div className="info">
            <h3 className="info-name">
              Coffee Cup - Quán cà phê lý tưởng để gặp gỡ bạn bè mùa Tết này
            </h3>
            <div className="info-date d-flex">
              <div className="info-date-icon">
                <FaCalendarAlt />
              </div>
              <div className="info-date-time">24/01/2022</div>
            </div>
            <p className="info-content">
              Những ngày cuối năm, đầu năm mới, bạn lên kế hoạch để gặp gỡ
              những...
            </p>
          </div>
        </Link>
        <Link to="/news/1" className="main-content-item d-flex">
          <div className="image">
            <img src="../images/tintuc-3.jpg" alt="tintuc" />
          </div>
          <div className="info">
            <h3 className="info-name">
              Khai trương cơ sở Tây Sơn, giảm giá lên tới 50%
            </h3>
            <div className="info-date d-flex">
              <div className="info-date-icon">
                <FaCalendarAlt />
              </div>
              <div className="info-date-time">14/01/2022</div>
            </div>
            <p className="info-content">
              Nhân dịp khai trương cơ sở mới tại 137 Tây Sơn - Đống Đa-Hà nội,
              chúng tôi vui mừng chào đón khách hang tới tham quan và thưởng
              thức các sản phẩm của cơ sở với nhiều ưu đãi hấp dẫn...
            </p>
          </div>
        </Link>
      </div>
      <div className="row">
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

const News = () => {
  return (
    <div>
      <section className="news-banner"></section>

      <section className="main padding-60">
        <div className="container">
          <h2 className="h2-heading">Tin tức</h2>
          <div className="row mt-4 content">
            <div className="col-12 col-lg-3 col-md-4">
              <div className="side">
                <div className="side-title">Bài viết mới nhất</div>
                <div className="side-news-list">
                  <Link to="/news/1" className="side-news-item d-flex">
                    <div className="image">
                      <img src="../images/tintuc-3.jpg" alt="" />
                    </div>
                    <div className="info">
                      <div className="info-name">
                        Khai trương cơ sở Tây Sơn, giảm giá lên tới 50%
                      </div>
                      <div className="info-date d-flex">
                        <div className="info-date-icon">
                          <FaCalendarAlt />
                        </div>
                        <div className="info-date-time">14/02/2022</div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/news/1" className="side-news-item d-flex">
                    <div className="image">
                      <img src="../images/giohang.jpg" alt="" />
                    </div>
                    <div className="info">
                      <div className="info-name">
                        Năm mới vạn điều may, uống thả ga
                      </div>
                      <div className="info-date d-flex">
                        <div className="info-date-icon">
                          <FaCalendarAlt />
                        </div>
                        <div className="info-date-time">24/01/2022</div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/news/1" className="side-news-item d-flex">
                    <div className="image">
                      <img src="../images/tintuc-1.jpg" alt="" />
                    </div>
                    <div className="info">
                      <div className="info-name">
                        Coffee Cup - Cảm nhận cà phê mạnh
                      </div>
                      <div className="info-date d-flex">
                        <div className="info-date-icon">
                          <FaCalendarAlt />
                        </div>
                        <div className="info-date-time">14/01/2022</div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/news/1" className="side-news-item d-flex">
                    <div className="image">
                      <img src="../images/tintuc-2.jpg" alt="" />
                    </div>
                    <div className="info">
                      <div className="info-name">
                        Xuân mới phát tài - Uống dài dài
                      </div>
                      <div className="info-date d-flex">
                        <div className="info-date-icon">
                          <FaCalendarAlt />
                        </div>
                        <div className="info-date-time">04/01/2022</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="side-title">Bài viết đọc nhiều</div>
                <div className="side-news-list">
                  <Link to="/news/1" className="side-news-item d-flex">
                    <div className="image">
                      <img src="../images/tintuc-3.jpg" alt="" />
                    </div>
                    <div className="info">
                      <div className="info-name">
                        Khai trương cơ sở Tây Sơn, giảm giá lên tới 50%
                      </div>
                      <div className="info-date d-flex">
                        <div className="info-date-icon">
                          <FaCalendarAlt />
                        </div>
                        <div className="info-date-time">04/02/2022</div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/news/1" className="side-news-item d-flex">
                    <div className="image">
                      <img src="../images/giohang.jpg" alt="" />
                    </div>
                    <div className="info">
                      <div className="info-name">
                        Năm mới vạn điều may, uống thả ga
                      </div>
                      <div className="info-date d-flex">
                        <div className="info-date-icon">
                          <FaCalendarAlt />
                        </div>
                        <div className="info-date-time">03/02/2022</div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/news/1" className="side-news-item d-flex">
                    <div className="image">
                      <img src="../images/tintuc-1.jpg" alt="" />
                    </div>
                    <div className="info">
                      <div className="info-name">
                        Coffee Cup - Cảm nhận cà phê mạnh
                      </div>
                      <div className="info-date d-flex">
                        <div className="info-date-icon">
                          <FaCalendarAlt />
                        </div>
                        <div className="info-date-time">14/01/2022</div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/news/1" className="side-news-item d-flex">
                    <div className="image">
                      <img src="../images/tintuc-2.jpg" alt="" />
                    </div>
                    <div className="info">
                      <div className="info-name">
                        Xuân mới phát tài - Uống dài dài
                      </div>
                      <div className="info-date d-flex">
                        <div className="info-date-icon">
                          <FaCalendarAlt />
                        </div>
                        <div className="info-date-time">04/01/2022</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-9 col-md-8">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
      <Register />
    </div>
  );
};

export default News;
