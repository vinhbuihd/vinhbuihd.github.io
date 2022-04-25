import { AiFillQuestionCircle, AiOutlineClose } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { GrMail } from "react-icons/gr";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import Register from "../../components/Register";
import { ToastContainer, toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router";

const FormSignin = ({ userList }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const loginSubmit = (data) => {
    let isLogin = userList.find(
      (user) =>
        data.userName == user.singupEmail &&
        data.password == user.signupPassword
    );
    console.log(isLogin);
    if (isLogin) {
      toast.success("Đăng nhập thành công", { position: "top-center" });
      navigate("/");
    } else {
      toast.error("Tài khoản hoặc mật khẩu không đúng");
    }
  };
  return (
    <form onSubmit={handleSubmit(loginSubmit)} id="form-1">
      <div className="singin-input">
        <div className="d-flex align-items-center">
          <div className="form-icon d-flex">
            <FaUser />
          </div>
          <input
            type="text"
            className="user-id"
            placeholder="Tên đăng nhập"
            {...register("userName", { required: true })}
          />
        </div>
        {errors.userName && (
          <span className="error">Vui lòng nhập tài khoản</span>
        )}
      </div>

      <div className="singin-input">
        <div className="d-flex align-items-center ">
          <div className="form-icon d-flex">
            <RiLockPasswordFill />
          </div>
          <input
            type="password"
            name="password"
            className="user-password"
            placeholder="Mật khẩu"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
          />
        </div>
        {errors.password?.type == "required" && (
          <span className="error">Vui lòng nhập mật khẩu</span>
        )}
        {errors.password?.type == "minLength" && (
          <span className="error">Mật khẩu tối thiểu 6 kí tự</span>
        )}
      </div>

      <div className=" text-center mt-2">
        <button className="btn signin" type="submit" name="form-1">
          Đăng nhập
        </button>
      </div>
      <div className="d-flex align-items-center justify-content-center font-small mt-4">
        <div className="form-icon d-flex">
          <AiFillQuestionCircle />
        </div>
        <span>Quên mật khẩu</span>
      </div>
    </form>
  );
};

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [userList, setUserList] = useState([]);
  const [isSingin, setIsSingin] = useState(true);
  const compare = () => {
    const signupPw = document.querySelector(".signup-password").value;
    const signupRepeatPw = document.querySelector(".repeat-password").value;
    return signupPw == signupRepeatPw;
  };

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((json) => {
        setUserList(json);
      });
  }, []);
  console.log(userList);

  const singupSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const isHasUser = userList.find(
          (user) => user.singupEmail == json.singupEmail
        );
        if (isHasUser) {
          toast.error("Tài khoản đã tồn tại", {
            position: "top-center",
          });
        } else {
          toast.success("Đăng ký thành công", {
            position: "top-center",
          });
          document.querySelector(".login-signin-btn").click();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className={`login-status d-flex ${isSingin ? "" : "light"}`}>
        <div className="login-main d-flex">
          <div className="login-sign-btn d-flex align-items-center">
            <div className="d-flex flex-column justify-content-between align-items-center">
              <span>Bạn đã có tài khoản</span>
              <button
                className="btn white login-signin-btn"
                onClick={() => setIsSingin(true)}
              >
                Đăng nhập
              </button>
            </div>
            <div className="d-flex flex-column justify-content-between align-items-center">
              <span>Bạn chưa có tài khoản</span>
              <button
                className="btn login-signup-btn"
                onClick={() => setIsSingin(false)}
              >
                Đăng ký
              </button>
            </div>
          </div>
          <div className={`login-runback ${isSingin ? "" : "run-right"}`}>
            <div
              className={`login-signin ${
                isSingin ? "" : "hide"
              } login-box d-flex flex-column justify-content-center`}
            >
              <h2 className="mb-4">Đăng nhập</h2>
              <FormSignin userList={userList} />
            </div>
            <div
              className={`login-signup ${
                isSingin ? "" : "show"
              } login-box d-flex flex-column justify-content-center`}
            >
              <h2>Đăng ký</h2>
              <form action="" onSubmit={handleSubmit(singupSubmit)} id="form-2">
                <div className="input-box">
                  <div className="d-flex align-items-end">
                    <div className="form-icon d-flex">
                      <GrMail />
                    </div>
                    <input
                      className="email"
                      type="email"
                      {...register("singupEmail", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                      placeholder="Email của bạn"
                    />
                  </div>
                  {errors.singupEmail?.type == "required" && (
                    <span className="error">Vui lòng nhập Email</span>
                  )}
                  {errors.singupEmail?.type == "pattern" && (
                    <span className="error">Email không đúng!!!</span>
                  )}
                </div>

                <div className="input-box">
                  <div className="d-flex align-items-end">
                    <div
                      className="form-icon d-flex "
                      style={{ marginRight: "13px" }}
                    >
                      <RiLockPasswordFill />
                    </div>

                    <input
                      className="signup-password"
                      name="signupPassword"
                      type="text"
                      {...register("signupPassword", {
                        required: true,
                        validate: (value) => value.length >= 6,
                      })}
                      placeholder="Mật khẩu"
                    />
                  </div>

                  {errors.signupPassword?.type == "validate" && (
                    <span className="error">Mật khẩu tối thiểu 6 kí tự</span>
                  )}
                  {errors.signupPassword?.type == "required" && (
                    <span className="error">Vui lòng nhập mật khẩu</span>
                  )}
                </div>

                <div className="input-box">
                  <div className="d-flex align-items-end">
                    <div
                      className="form-icon d-flex "
                      style={{ marginRight: "13px" }}
                    >
                      <RiLockPasswordFill />
                    </div>
                    <input
                      className="repeat-password"
                      type="text"
                      {...register("singupPasswordRepeat", {
                        required: true,
                        validate: compare,
                      })}
                      placeholder="Nhập lại mật khẩu"
                    />
                  </div>
                  {errors.singupPasswordRepeat?.type == "required" && (
                    <span className="error">Vui lòng nhập mật khẩu</span>
                  )}
                  {errors.singupPasswordRepeat?.type == "validate" && (
                    <span className="error">Mật khẩu không đúng</span>
                  )}
                </div>

                <div className=" text-center mt-2">
                  <button className="btn signup" type="submit" name="form-2">
                    Đăng ký
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Register />
    </div>
  );
};

export default Login;
