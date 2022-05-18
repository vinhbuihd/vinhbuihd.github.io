import { Tooltip } from "@mui/material";
import styles from "./ThreeDot.module.scss";
import classNames from "classnames/bind";
import { BsThreeDots, BsMusicNoteList, BsLink45Deg } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineDownload } from "react-icons/ai";
import { MdOutlineHeadphones, MdOutlineAddCircleOutline } from "react-icons/md";
import { GiMicrophone } from "react-icons/gi";
import { HiBan } from "react-icons/hi";
import { FiRadio } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";

const cx = classNames.bind(styles);
export const ThreeDotDetail = ({ song }) => {
  return (
    <div className={cx("threedot-detail")}>
      <div className={cx("song-info")}>
        <img
          className={cx("song-img")}
          src={song?.thumbnail}
          alt={song?.name}
        />
        <div className={cx("song-text")}>
          <div className={cx("song-name")}>{song?.name}</div>
          <div className={cx("song-count")}>
            <span className={cx("detail")}>
              <AiOutlineHeart /> 2.4M
            </span>
            <span className={cx("detail")}>
              <MdOutlineHeadphones />
              112.2M
            </span>
          </div>
        </div>
      </div>

      <div className={cx("action")}>
        <div className={cx("action-item")}>
          <div className={cx("icon")}>
            <AiOutlineDownload />
          </div>
          <div className={cx("name")}>Tải xuống</div>
        </div>

        <div className={cx("action-item")}>
          <div className={cx("icon")}>
            <GiMicrophone />
          </div>
          <div className={cx("name")}>Lời bài hát</div>
        </div>

        <div className={cx("action-item")}>
          <div className={cx("icon")}>
            <HiBan />
          </div>
          <div className={cx("name")}>Chặn</div>
        </div>
      </div>

      <div className={cx("menu")}>
        <div className={cx("menu-item")}>
          <div className={cx("menu-icon")}>
            <BsMusicNoteList />
          </div>
          <div className={cx("menu-name")}>Cài đặt nhạc chờ</div>
        </div>

        <div className={cx("menu-item")}>
          <div className={cx("menu-icon")}>
            <MdOutlineAddCircleOutline />
          </div>
          <div className={cx("menu-name")}>Thêm vào playlist</div>
        </div>

        <div className={cx("menu-item")}>
          <div className={cx("menu-icon")}>
            <FiRadio />
          </div>
          <div className={cx("menu-name")}>Phát Radio bài hát</div>
        </div>

        <div className={cx("menu-item")}>
          <div className={cx("menu-icon")}>
            <GiMicrophone />
          </div>
          <div className={cx("menu-name")}>Phát cùng lời bài hát</div>
        </div>

        <div className={cx("menu-item")}>
          <div className={cx("menu-icon")}>
            <FaRegComment />
          </div>
          <div className={cx("menu-name")}>Bình luận</div>
        </div>

        <div className={cx("menu-item")}>
          <div className={cx("menu-icon")}>
            <BsLink45Deg />
          </div>
          <div className={cx("menu-name")}>Sao chép link</div>
        </div>

        <div className={cx("menu-item")}>
          <div className={cx("menu-icon")}>
            <RiShareForwardFill />
          </div>
          <div className={cx("menu-name")}>Chia sẻ</div>
        </div>
      </div>
    </div>
  );
};

const ThreeDot = ({ song }) => {
  const showSongDetail = (e) => {
    e.stopPropagation();
    let parentEle = e.target.closest(".song-item-btn");
    if (e.clientY < 400) {
      parentEle.querySelector(`.${cx("threedot-detail")}`).style.top =
        -e.clientY + 80 + "px";
    }

    if (e.clientX < 300) {
      parentEle.querySelector(`.${cx("threedot-detail")}`).style.right =
        -280 + "px";
    }
    if (parentEle.classList.contains("show")) {
      parentEle.classList.remove("show");
      parentEle
        .querySelector(`.${cx("threedot-detail")}`)
        .classList.remove(cx("show"));
    } else {
      let showEle = document.querySelector(".song-item-btn.show");
      if (showEle) {
        showEle.classList.remove("show");
        showEle
          .querySelector(`.${cx("threedot-detail")}`)
          .classList.remove(cx("show"));
      }

      parentEle.classList.add("show");
      parentEle
        .querySelector(`.${cx("threedot-detail")}`)
        .classList.add(cx("show"));
    }
  };

  window.addEventListener("click", () => {
    let showEle = document.querySelector(".song-item-btn.show");
    if (showEle) {
      showEle.classList.remove("show");
      showEle
        .querySelector(`.${cx("threedot-detail")}`)
        .classList.remove(cx("show"));
    }
  });

  return (
    <Tooltip title="Xem thêm" placement="top">
      <div className={cx("icon-button", "threedot")} onClick={showSongDetail}>
        <BsThreeDots />
        <ThreeDotDetail song={song} />
      </div>
    </Tooltip>
  );
};

export default ThreeDot;
