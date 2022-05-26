import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { GiTShirt } from "react-icons/gi";
import { FiUpload, FiSettings } from "react-icons/fi";
import { MdOutlineTrendingUp } from "react-icons/md";
import { Tooltip } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { LayoutContext } from "../Layout";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const Header = ({ setIsShowPlayList }) => {
  const [inputValue, setInputValue] = useState("");
  const [isShowSuggest, setIsShowSuggest] = useState(false);
  const { songs, searchResult, setSearchResult, suggestList, setSuggestList } =
    useContext(LayoutContext);

  const headerRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const yPosition = window.scrollY;
      if (yPosition > 80) {
        headerRef.current.style.backgroundColor = "var(--header)";
        headerRef.current.style.boxShadow = "0 0px 4px 0 rgba(0, 0, 0, 0.35)";
      } else {
        headerRef.current.style.backgroundColor = "transparent";
        headerRef.current.style.boxShadow = "unset";
      }
    });
  }, []);

  useEffect(() => {
    if (inputValue == "") {
      setSuggestList([]);
    } else {
      let newList = songs.filter((song) =>
        song.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      if (newList.length > 4) {
        newList = newList.splice(0, 4);
      }
      setSuggestList(newList);
    }
  }, [inputValue]);

  const handleChangeValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleClickSearchSong = (song) => {
    setIsShowSuggest(false);
    setSearchResult(song);
    setInputValue("");
    navigate("/search");
  };

  const handleClickSuggest = (value) => {
    setInputValue(value);
  };

  return (
    <div ref={headerRef} className={cx("header")}>
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
          <div
            className={cx("header-suggest", `${isShowSuggest ? "show" : ""}`)}
          >
            <h3 className={cx("header-suggest-title")}>Đề xuất cho bạn</h3>
            <ul className={cx("header-suggest-box")}>
              <li className={cx("header-suggest-item")}>
                <span className="d-flex align-items-center">
                  <MdOutlineTrendingUp />
                </span>
                <span
                  className={cx("header-suggest-text")}
                  onClick={() => handleClickSuggest("có không giữ")}
                >
                  có không giữ
                </span>
              </li>
              <li className={cx("header-suggest-item")}>
                <span className="d-flex align-items-center">
                  <MdOutlineTrendingUp />
                </span>
                <span
                  className={cx("header-suggest-text")}
                  onClick={() => handleClickSuggest("thương em")}
                >
                  thương em
                </span>
              </li>
              <li className={cx("header-suggest-item")}>
                <span className="d-flex align-items-center">
                  <MdOutlineTrendingUp />
                </span>
                <span
                  className={cx("header-suggest-text")}
                  onClick={() => handleClickSuggest("ngủ ngon")}
                >
                  ngủ ngon
                </span>
              </li>
              <li className={cx("header-suggest-item")}>
                <span className="d-flex align-items-center">
                  <MdOutlineTrendingUp />
                </span>
                <span
                  className={cx("header-suggest-text")}
                  onClick={() => handleClickSuggest("trọn vẹn")}
                >
                  trọn vẹn
                </span>
              </li>
            </ul>

            <div className={cx("suggestion")}>
              <ul
                className={cx(
                  "suggestion-list",
                  `${suggestList.length > 0 ? "show" : ""}`
                )}
              >
                <h3 className={cx("header-suggest-title")}>Gợi ý kết quả</h3>
                {suggestList.map((song) => (
                  <div
                    key={song.id}
                    className={cx("suggestion-item")}
                    onClick={() => handleClickSearchSong(song)}
                  >
                    <div className={cx("suggestion-item-image")}>
                      <img src={song.thumbnail} alt={song.name} />
                    </div>
                    <div className={cx("suggestion-item-info")}>
                      <div className={cx("suggestion-item-info-name")}>
                        {song.name}
                      </div>
                      <div className={cx("suggestion-item-info-singer")}>
                        {song.artists_names}
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className={cx("header-search-icon")}>
            <AiOutlineSearch />
          </div>
          <div className={cx("header-search-input")}>
            <input
              value={inputValue}
              onChange={handleChangeValue}
              type="text"
              placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
              onClick={() => setIsShowSuggest(true)}
            />
          </div>
        </div>
      </div>
      <div className={cx("header-right")}>
        <Tooltip title="Chủ đề">
          <div
            className={cx("header-icon", "header-theme")}
            onClick={() => setIsShowPlayList(true)}
          >
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

        <Tooltip title="Tài khoản">
          <div className={cx("header-login")}>
            <img src="https://avatar.talk.zdn.vn/default" alt="avartar" />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Header;
