import Register from "../../components/Register";
import "./About.css";

const About = () => {
  return (
    <div>
      <section className="about-banner"></section>

      <section className="main padding-60">
        <div className="container">
          <h2
            data-wow-duration="2s"
            className="h2-heading wow animate__slideInUp"
          >
            Về chúng tôi
          </h2>

          <div className="row mt-4">
            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div
                      data-wow-duration="2s"
                      className="col-12 col-md-6 wow animate__slideInUp mt-4"
                    >
                      <div className="box box-image">
                        <img src="../images/bgbgb.jpeg" alt="chungtoi" />
                      </div>
                    </div>
                    <div
                      data-wow-duration="2s"
                      className="col-12 col-md-6 wow animate__slideInUp"
                    >
                      <div className="box">
                        <div className="box-content">
                          <h3>Khởi nguồn</h3>
                          <p className="sub-title">
                            Thương hiệu bắt nguồn từ cà phê Việt Nam
                          </p>
                          <p className="pharagraph">
                            Coffee Cup được sinh ra từ niềm đam mê bất tận với
                            hạt cà phê Việt Nam. Qua một chặng đường dài, chúng
                            tôi đã không ngừng mang đến những sản phẩm cà phê
                            thơm ngon, sánh đượm trong không gian thoải mái và
                            lịch sự với mức giá hợp lý.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="row item-2">
                    <div
                      data-wow-duration="2s"
                      className="col-12 col-md-6 wow animate__slideInUp mt-4"
                    >
                      <div className="box">
                        <div className="box-content text-end">
                          <h3>Phát triển</h3>
                          <p className="sub-title">
                            Xây dựng niềm tin bằng chất lượng sản phẩm
                          </p>
                          <p className="pharagraph">
                            Chúng tôi mong muốn mang đến cho bạn những trải
                            nghiệm đáng nhớ mỗi lần đến Coffee Cup. Hãy chia sẻ
                            với chúng tôi để chúng tôi có thể mang đến cho bạn
                            những trải nghiệm tuyệt vời hơn thế.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-wow-duration="2s"
                      className="col-12 col-md-6 wow animate__slideInUp"
                    >
                      <div className="box box-image">
                        <img src="../images/chungtoi-2.jpg" alt="chungtoi" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="row">
                    <div
                      data-wow-duration="2s"
                      className="col-12 col-md-6 wow animate__slideInUp mt-4"
                    >
                      <div className="box box-image">
                        <img
                          src="../images/h-5-baner-img-1.jpg"
                          alt="chungtoi"
                        />
                      </div>
                    </div>
                    <div
                      data-wow-duration="2s"
                      className="col-12 col-md-6 wow animate__slideInUp"
                    >
                      <div className="box">
                        <div className="box-content">
                          <h3>Vươn tới đỉnh cao</h3>
                          <p className="sub-title">
                            Hướng tới một hệ thống cơ sở toàn quốc
                          </p>
                          <p className="pharagraph">
                            Với sứ mệnh trở thành thương hiệu cà phê Việt Nam
                            dẫn đầu, Chúng tôi mong muốn mang đến cho bạn những
                            trải nghiệm đáng nhớ mỗi lần đến Cup Coffee®. Hãy
                            chia sẻ với chúng tôi để chúng tôi có thể mang đến
                            cho bạn những trải nghiệm tuyệt vời hơn thế.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Register />
    </div>
  );
};

export default About;
