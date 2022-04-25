import Register from "../../components/Register";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <section className="contact-banner"></section>

      <section className="contact-main padding-60">
        <div className="container">
          <h2 className="h2-heading">Liên hệ với chúng tôi</h2>
          <div className="row">
            <div className="col-md-6 col-sm-12 col-12">
              <div className="shop d-flex align-items-center">
                <div className="shop-logo">
                  <img src="../images/logo-2.png" alt="logo" />
                </div>
                <p className="shop-name">Coffee Cup</p>
              </div>
              <div className="shop-info mt-3">
                <p className="shop-add">
                  <a
                    target="_blank"
                    href="https://goo.gl/maps/U37UxTnCCesQCuza7"
                  >
                    Địa chỉ : 44 Lê Đại Hành, Hai Bà Trưng, Hà Nội
                  </a>
                </p>
                <p>
                  <a href="tel:0987654321">Điện thoại: 0987654321</a>
                </p>
                <p>
                  <a href="mailto: abc@example.com">
                    Email: coffeecup@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 col-12">
              <form className="form-message text-center">
                <h4>Để lại lời nhắn</h4>

                <p>
                  <input type="text" required placeholder="Họ tên" />
                </p>
                <p>
                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    required
                    placeholder="Số điện thoại"
                  />
                </p>
                <textarea
                  placeholder="Lời nhắn"
                  required
                  cols="30"
                  rows="2"
                ></textarea>
                <button className="btn mt-3" type="submit">
                  Gửi
                </button>
              </form>
            </div>

            <div className="col-12 mt-4">
              <div className="shop-map">
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5353450805987!2d105.84645231482027!3d21.01125509375173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab8bb8fc702f%3A0x4d8d0e7d1feeeffe!2sThe%20Cup%20coffee!5e0!3m2!1svi!2s!4v1644577929608!5m2!1svi!2s"
                  width="100%"
                  height="360"
                  style="border:0;"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Register />
    </div>
  );
};

export default Contact;
