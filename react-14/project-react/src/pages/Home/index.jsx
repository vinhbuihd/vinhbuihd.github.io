import Banner from "../../components/Banner";
import { Link, NavLink } from "react-router-dom";
import SPNoiBat from "../../components/SPNoiBat";

import Register from "../../components/Register";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";

const ThucDon = () => {
  return (
    <section className="intro padding-60">
      <div className="container">
        <h2 className="h2-heading">Thực đơn</h2>
        <div className="lineborder text-center">
          <img src="./images/line-under-heading.png" alt="lineborder" />
        </div>
        <div className="intro-list row mt-4">
          <div className="col-4">
            <div className="intro-item item-1 d-flex align-items-center justify-content-center flex-column">
              <div className="item-content text-center">
                <h4>Cà phê</h4>
                <div className="intro-boder"></div>
                <Link to="/menu">Xem thêm</Link>
              </div>
              <div className="item-image"></div>
            </div>
          </div>
          <div className="col-4">
            <div className="intro-item item-2 d-flex align-items-center justify-content-center flex-column">
              <div className="item-content text-center">
                <h4>Trà</h4>
                <div className="intro-boder"></div>
                <Link to="/menu">Xem thêm</Link>
              </div>
              <div className="item-image"></div>
            </div>
          </div>
          <div className="col-4">
            <div className="intro-item item-3 d-flex align-items-center justify-content-center flex-column">
              <div className="item-content text-center">
                <h4>Freeze</h4>
                <div className="intro-boder"></div>
                <Link to="/menu">Xem thêm</Link>
              </div>
              <div className="item-image"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomeAbout = () => {
  return (
    <section className="about padding-60">
      <div className="container">
        <h2 className="h2-heading">Về chúng tôi</h2>
        <div className="lineborder text-center">
          <img src="./images/line-under-heading.png" alt="lineborder" />
        </div>
        <div className="item row g-0">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="image image-1"></div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="content">
              <h3>khởi nguồn</h3>
              <h4>thương hiệu bắt nguồn từ cà phê việt nam</h4>
              <p className="p-text">
                Từ tình yêu với Việt Nam và niềm đam mê cà phê, năm 1999, thương
                hiệu Black Coffee® ra đời với khát vọng nâng tầm di sản cà phê
                lâu đời của Việt Nam và lan rộng tinh thần tự hào, kết nối hài
                hoà giữa truyền thống với hiện đại
              </p>
            </div>
          </div>
        </div>
        <div className="item row g-0">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="image image-2"></div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="content">
              <h3>phát triển</h3>
              <h4>thương hiệu bắt nguồn từ cà phê việt nam</h4>
              <p className="p-text">
                Từ tình yêu với Việt Nam và niềm đam mê cà phê, năm 1999, thương
                hiệu Black Coffee® ra đời với khát vọng nâng tầm di sản cà phê
                lâu đời của Việt Nam và lan rộng tinh thần tự hào, kết nối hài
                hoà giữa truyền thống với hiện đại
              </p>
            </div>
          </div>
        </div>
        <div className="item row g-0">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="image image-3"></div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="content">
              <h3>vươn tới đỉnh cao</h3>
              <h4>thương hiệu bắt nguồn từ cà phê việt nam</h4>
              <p className="p-text">
                Từ tình yêu với Việt Nam và niềm đam mê cà phê, năm 1999, thương
                hiệu Black Coffee® ra đời với khát vọng nâng tầm di sản cà phê
                lâu đời của Việt Nam và lan rộng tinh thần tự hào, kết nối hài
                hoà giữa truyền thống với hiện đại
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1200, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HomeNews = () => {
  return (
    <section className="news padding-60">
      <div className="container">
        <h2 className="h2-heading">Tin tức khuyến mãi</h2>
        <div className="lineborder text-center">
          <img src="./images/line-under-heading.png" alt="lineborder" />
        </div>

        <div className="wrap mt-3">
          <div className="tintuc-carousel">
            <Carousel
              responsive={responsive}
              itemClass="carouselItem"
              draggable={false}
              showDots={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              customTransition="ease .75s"
              transitionDuration={500}
            >
              <Link to="/news">
                <div className="card">
                  <div className="scard-image image-1"></div>
                  <div className="scard-content d-flex flex-column">
                    <h3>NĂM MỚI, UỐNG "KHỞI ĐẦU SUNG" - NHẬN LÌ XÌ KHỦNG</h3>
                    <div className="calendar d-flex align-items-center">
                      <div className="calendar-icon">
                        <i className="fas fa-calendar-alt"></i>
                      </div>
                      <div className="calendar-date">02/02/2022, 20:02</div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/news">
                <div className="card">
                  <div className="scard-image image-4"></div>
                  <div className="scard-content d-flex flex-column">
                    <h3>Khai trương cơ sở tây sơn, giảm giá lên tới 50%</h3>
                    <div className="calendar d-flex align-items-center">
                      <div className="calendar-icon">
                        <i className="fas fa-calendar-alt"></i>
                      </div>
                      <div className="calendar-date">14/01/2022, 15:30</div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/news">
                <div className="card">
                  <div className="scard-image image-2"></div>
                  <div className="scard-content d-flex flex-column">
                    <h3>Mừng xuân mới, Uống thả ga, Nhận quà liền tay</h3>
                    <div className="calendar d-flex align-items-center">
                      <div className="calendar-icon">
                        <i className="fas fa-calendar-alt"></i>
                      </div>
                      <div className="calendar-date">14/01/2022, 15:30</div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/news">
                <div className="card">
                  <div className="scard-image image-3"></div>
                  <div className="scard-content d-flex flex-column">
                    <h3>"Ô long mùa xuân" - Hương vị mới lạ</h3>
                    <div className="calendar d-flex align-items-center">
                      <div className="calendar-icon">
                        <i className="fas fa-calendar-alt"></i>
                      </div>
                      <div className="calendar-date">14/01/2022, 15:30</div>
                    </div>
                  </div>
                </div>
              </Link>
            </Carousel>
          </div>
        </div>

        <div className="row text-center">
          <NavLink to="/news">
            <button className="btn big-btn">Xem thêm nhiều tin khác</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <Banner />
      <ThucDon />
      <SPNoiBat />
      <Register />
      <HomeAbout />
      <HomeNews />
    </div>
  );
};
export default Home;
