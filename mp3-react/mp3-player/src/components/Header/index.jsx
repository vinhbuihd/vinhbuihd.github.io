import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { GiTShirt } from "react-icons/gi";
import { FiUpload, FiSettings } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { FormControlLabel, FormGroup, Switch, Tooltip } from "@mui/material";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx("header")}>
      <div className={cx("header-left")}>
        <div className={cx("header-changePage")}>
          <button className={cx("header-backPage")}>
            <BsArrowLeft />
          </button>
          <button className={cx("header-nextPage")}>
            <BsArrowRight />
          </button>
        </div>
        <div className={cx("header-search-group")}>
          <div className={cx("header-search-icon")}>
            <AiOutlineSearch />
          </div>
          <div className={cx("header-search-input")}>
            <input
              type="text"
              placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
            />
          </div>
        </div>
      </div>
      <div className={cx("header-right")}>
        <Tooltip title="Chủ đề">
          <div className={cx("header-icon")}>
            <GiTShirt />
          </div>
        </Tooltip>
        <Tooltip title="Tải lên">
          <div className={cx("header-icon")}>
            <FiUpload />
          </div>
        </Tooltip>
        <Tooltip title="Cài đặt">
          <div className={cx("header-icon")}>
            <FiSettings />
          </div>
        </Tooltip>
        <div className={cx("header-login")}>
          <img src="https://avatar.talk.zdn.vn/default" alt="avartar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
