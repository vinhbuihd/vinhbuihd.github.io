import { AiFillQuestionCircle } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { GrMail } from "react-icons/gr";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useMemo, useState } from "react";
import Register from "../../components/Register";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";
import { WrapperContext } from "../../components/Layout";

const FormSignin = ({ userList, setIsLoged }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const loginSubmit = (data) => {
    let isLoginUser = userList.find((user) => {
      return (
        data.userName == user.signupEmail &&
        data.password == user.signupPassword
      );
    });
    if (isLoginUser) {
      setIsLoged({
        status: true,
        user: isLoginUser,
      });
      toast.success("Đăng nhập thành công", { position: "top-center" });
      navigate("/");
    } else {
      toast.error("Tài khoản hoặc mật khẩu không đúng", {
        position: "top-center",
      });
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
    formState: { errors },
  } = useForm();

  const [isSignin, setIsSignin] = useState(true);
  const [isEditInfo, setIsEditInfo] = useState(false);

  const { userList, setUserList, isLoged, setIsLoged } =
    useContext(WrapperContext);

  const compare = () => {
    const signupPw = document.querySelector(".signup-password").value;
    const signupRepeatPw = document.querySelector(".repeat-password").value;
    return signupPw == signupRepeatPw;
  };

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // useEffect(() => {
  //   fetch("/users")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log("loading");
  //       console.log(json);
  //       setUserList(json);
  //     });
  // }, []);

  const signupSubmit = (data) => {
    console.log(data);
    fetch("users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("new user", json);
        const isHasUser = userList.find(
          (user) => user.signupEmail == json.signupEmail
        );
        if (isHasUser) {
          toast.error("Tài khoản đã tồn tại", {
            position: "top-center",
          });
        } else {
          toast.success("Đăng ký thành công", {
            position: "top-center",
          });
          localStorage.setItem(
            "userList",
            JSON.stringify([
              ...userList,
              { ...json, avartar: "images/user-image.png" },
            ])
          );
          setUserList([
            ...userList,
            { ...json, avartar: "images/user-image.png" },
          ]);
          document.querySelector(".login-signin-btn").click();
          fetch("/users", {
            method: "POST",
            body: JSON.stringify([
              ...userList,
              { ...json, avartar: "images/user-image.png" },
            ]),
            headers: {
              "Content-Type": "application/json",
            },
          });
        }
      })
      .catch((error) => console.log(error));
  };

  const handleChangeInfo = (e, type) => {
    const logedUserIndex = userList.findIndex(
      (user) => (user.signupEmail = isLoged.user.signupEmail)
    );
    let newUser;
    if (type == "avartar") {
      const newImage = e.target.files[0];
      toBase64(newImage).then((res) => {
        newUser = {
          ...userList[logedUserIndex],
          avartar: res,
        };
        let newUserList = [...userList];
        newUserList.splice(logedUserIndex, 1, newUser);
        localStorage.setItem("userList", JSON.stringify(newUserList));
        setUserList(newUserList);
      });
    } else {
      newUser = {
        ...userList[logedUserIndex],
        [type]: e.target.value,
      };
      let newUserList = [...userList];
      newUserList.splice(logedUserIndex, 1, newUser);
      localStorage.setItem("userList", JSON.stringify(newUserList));
      setUserList(newUserList);
    }
  };

  const handleUpdateUserInfo = (e) => {
    e.preventDefault();
    if (!isEditInfo) {
      toast.success("Cập nhật thành công!!!", {
        position: "top-center",
      });
    }
    localStorage.setItem("userList", JSON.stringify(userList));
  };

  if (isLoged.status && userList.length > 0) {
    console.log(isLoged.user);
    console.log(userList);
    const logedUser = userList.find(
      (user) => user.signupEmail == isLoged.user.signupEmail
    );

    console.log(logedUser);
    return (
      <div className="login-main-loged">
        <section className="banner"></section>
        <div className="container">
          <h2 className="text-center">Thông tin tài khoản</h2>
          <form action="" className="mt-4" onSubmit={handleUpdateUserInfo}>
            <div className="row">
              <div className="user-text col-12 col-sm-6">
                <div className="input-group">
                  <label htmlFor="">Tên tài khoản: </label>
                  <input
                    type="text"
                    defaultValue={logedUser?.signupEmail}
                    disabled
                    readOnly
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="">Mật khẩu: </label>
                  <input
                    type="password"
                    defaultValue={logedUser?.signupPassword}
                    readOnly
                    disabled
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="">Họ tên: </label>
                  <input
                    placeholder="Họ và tên"
                    type="text"
                    onChange={(e) => handleChangeInfo(e, "name")}
                    value={logedUser?.name}
                    readOnly={!isEditInfo}
                    className={isEditInfo ? "active" : ""}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="">Số điện thoại: </label>
                  <input
                    placeholder="Số điện thoai"
                    type="number"
                    onChange={(e) => handleChangeInfo(e, "phone")}
                    value={logedUser?.phone}
                    readOnly={!isEditInfo}
                    className={isEditInfo ? "active" : ""}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="">Địa chỉ: </label>
                  <input
                    placeholder="Địa chỉ"
                    type="text"
                    onChange={(e) => handleChangeInfo(e, "address")}
                    value={logedUser?.address}
                    readOnly={!isEditInfo}
                    className={isEditInfo ? "active" : ""}
                  />
                </div>
              </div>
              <div className="user-avatar col-12 col-sm-6">
                <div className="user-avatar-box">
                  <p>Ảnh đại diện</p>
                  <img
                    src={logedUser.avartar}
                    alt="avatar"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />

                  <p className="mt-4">
                    <input
                      disabled={!isEditInfo}
                      type="file"
                      id="change-avatar"
                      accept="image/png, image/jpeg"
                      onChange={(e) => handleChangeInfo(e, "avartar")}
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-5">
              <button
                type="submit"
                className="btn "
                onClick={() => setIsEditInfo(!isEditInfo)}
              >
                {isEditInfo ? "Lưu lại" : "Chỉnh sửa"}
              </button>
            </div>
          </form>
        </div>
        <Register />
      </div>
    );
  }

  return (
    <>
      <div className={`login-status d-flex ${isSignin ? "" : "light"}`}>
        <div className="login-main d-flex">
          <div className="login-sign-btn d-flex align-items-center">
            <div className="d-flex flex-column justify-content-between align-items-center">
              <span>Bạn đã có tài khoản</span>
              <button
                className="btn white login-signin-btn"
                onClick={() => setIsSignin(true)}
              >
                Đăng nhập
              </button>
            </div>
            <div className="d-flex flex-column justify-content-between align-items-center">
              <span>Bạn chưa có tài khoản</span>
              <button
                className="btn login-signup-btn"
                onClick={() => setIsSignin(false)}
              >
                Đăng ký
              </button>
            </div>
          </div>
          <div className={`login-runback ${isSignin ? "" : "run-right"}`}>
            <div
              className={`login-signin ${
                isSignin ? "" : "hide"
              } login-box d-flex flex-column justify-content-center`}
            >
              <h2 className="mb-4">Đăng nhập</h2>
              <FormSignin
                userList={userList}
                setUserList={setUserList}
                isLoged={isLoged}
                setIsLoged={setIsLoged}
              />
            </div>
            <div
              className={`login-signup ${
                isSignin ? "" : "show"
              } login-box d-flex flex-column justify-content-center`}
            >
              <h2>Đăng ký</h2>
              <form action="" onSubmit={handleSubmit(signupSubmit)} id="form-2">
                <div className="input-box">
                  <div className="d-flex align-items-end">
                    <div className="form-icon d-flex">
                      <GrMail />
                    </div>
                    <input
                      className="email"
                      type="email"
                      {...register("signupEmail", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                      placeholder="Email của bạn"
                    />
                  </div>
                  {errors.signupEmail?.type == "required" && (
                    <span className="error">Vui lòng nhập Email</span>
                  )}
                  {errors.signupEmail?.type == "pattern" && (
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
                      type="password"
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
                      type="password"
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
    </>
  );
};

export default Login;
