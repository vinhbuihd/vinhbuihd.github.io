import "./Register.css";

const Register = () => {
  return (
    <section className="register d-flex align-items-center">
      <div className="container">
        <div className="content">
          <h2>Đăng ký nhận thông tin khuyến mãi</h2>
          <form action="" className="d-flex align-items-center">
            <input type="text" required placeholder="Nhập email của bạn" />
            <button className="btn" type="submit">
              Đăng ký ngay
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
