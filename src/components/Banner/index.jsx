import "./Banner.css";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
import Button from "../Button";

const CarouselContainer = () => {
  return (
    <Carousel controls={false} fade={true}>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 banner-item"
          style={{ objectFit: "cover" }}
          src="images/home-4-slide.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="content">
            <img
              className="banner-icon go-to-top"
              src="/images/banner-logo-3.png"
              alt="First slide"
            />
            <h1 className="banner-heading go-to-top" style={{ "--order": 2 }}>
              Coffee Cup
            </h1>
            <h4
              className="banner-subheading go-to-top"
              style={{ "--order": 3 }}
            >
              Cà phê - Trà - Freeze
            </h4>
            <NavLink to="/menu">
              <Button
                title="Khám phá ngay"
                type="white go-to-top"
                style={{ "--order": 4 }}
              />
            </NavLink>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 banner-item"
          style={{ objectFit: "cover" }}
          src="images/home-1-slider-4.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="content">
            <img
              className="banner-icon go-to-top"
              src="images/banner-logo-1.png"
              alt="First slide"
            />
            <h1 className="banner-heading go-to-top" style={{ "--order": 2 }}>
              Coffee Cup
            </h1>
            <h4
              className="banner-subheading go-to-top"
              style={{ "--order": 3 }}
            >
              Đặt hàng dễ dàng hơn với ứng dụng di dộng
            </h4>
            <NavLink to="/menu">
              <Button
                title="Tải App ngay"
                type="white go-to-top"
                style={{ "--order": 4 }}
              />
            </NavLink>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 banner-item"
          style={{ objectFit: "cover" }}
          src="images/home-1-slider-img-2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className="content">
            <img
              className="banner-icon go-to-top"
              src="images/banner-logo-2.png"
              alt="First slide"
            />
            <h1 className="banner-heading go-to-top" style={{ "--order": 2 }}>
              Coffee Cup
            </h1>
            <h4
              className="banner-subheading go-to-top"
              style={{ "--order": 3 }}
            >
              Khuyến mãi đầu xuân Nhâm Dần lên tới 20%
            </h4>
            <NavLink to="/menu">
              <Button
                title="Đăng ký ngay"
                type="white go-to-top"
                style={{ "--order": 4 }}
              />
            </NavLink>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const Banner = () => {
  return (
    <section className="bannerHome">
      <CarouselContainer />
      <div className="banner-border">
        <img src="svg/border-top.svg" alt="border" />
      </div>
    </section>
  );
};

export default Banner;
