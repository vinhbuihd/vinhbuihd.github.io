import { Tooltip } from "@mui/material";
import "./ThreeDot.scss";
import { BsThreeDots, BsMusicNoteList, BsLink45Deg } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineDownload } from "react-icons/ai";
import { MdOutlineHeadphones, MdOutlineAddCircleOutline } from "react-icons/md";
import { GiMicrophone } from "react-icons/gi";
import { HiBan } from "react-icons/hi";
import { FiRadio } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";

export const ThreeDotDetail = ({ song }) => {
  return (
    <div className="threedot-detail">
      <div className="song-info">
        <img className="song-img" src={song?.thumbnail} alt={song?.name} />
        <div className="song-text">
          <div className="song-name">{song?.name}</div>
          <div className="song-count">
            <span className="detail">
              <AiOutlineHeart /> 2.4M
            </span>
            <span className="detail">
              <MdOutlineHeadphones />
              112.2M
            </span>
          </div>
        </div>
      </div>

      <div className="action">
        <div className="action-item">
          <div className="icon">
            <AiOutlineDownload />
          </div>
          <div className="name">Tải xuống</div>
        </div>

        <div className="action-item">
          <div className="icon">
            <GiMicrophone />
          </div>
          <div className="name">Lời bài hát</div>
        </div>

        <div className="action-item">
          <div className="icon">
            <HiBan />
          </div>
          <div className="name">Chặn</div>
        </div>
      </div>

      <div className="menu">
        <div className="menu-item">
          <div className="menu-icon">
            <BsMusicNoteList />
          </div>
          <div className="menu-name">Cài đặt nhạc chờ</div>
        </div>

        <div className="menu-item">
          <div className="menu-icon">
            <MdOutlineAddCircleOutline />
          </div>
          <div className="menu-name">Thêm vào playlist</div>
        </div>

        <div className="menu-item">
          <div className="menu-icon">
            <FiRadio />
          </div>
          <div className="menu-name">Phát Radio bài hát</div>
        </div>

        <div className="menu-item">
          <div className="menu-icon">
            <GiMicrophone />
          </div>
          <div className="menu-name">Phát cùng lời bài hát</div>
        </div>

        <div className="menu-item">
          <div className="menu-icon">
            <FaRegComment />
          </div>
          <div className="menu-name">Bình luận</div>
        </div>

        <div className="menu-item">
          <div className="menu-icon">
            <BsLink45Deg />
          </div>
          <div className="menu-name">Sao chép link</div>
        </div>

        <div className="menu-item">
          <div className="menu-icon">
            <RiShareForwardFill />
          </div>
          <div className="menu-name">Chia sẻ</div>
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
      parentEle.querySelector(".threedot-detail").style.top =
        -e.clientY + 110 + "px";
    }

    if (e.clientX < 300) {
      parentEle.querySelector(".threedot-detail").style.right = -280 + "px";
    }
    if (parentEle.classList.contains("show")) {
      parentEle.classList.remove("show");
      parentEle.querySelector(".threedot-detail").classList.remove("show");
    } else {
      let showEle = document.querySelector(".song-item-btn.show");
      if (showEle) {
        showEle.classList.remove("show");
        showEle.querySelector(".threedot-detail").classList.remove("show");
      }

      parentEle.classList.add("show");
      parentEle.querySelector(".threedot-detail").classList.add("show");
    }
  };

  window.addEventListener("click", () => {
    let showEle = document.querySelector(".song-item-btn.show");
    if (showEle) {
      showEle.classList.remove("show");
      showEle.querySelector(".threedot-detail").classList.remove("show");
    }
  });

  return (
    <Tooltip title="Xem thêm" placement="top">
      <div className="icon-button threedot" onClick={showSongDetail}>
        <BsThreeDots />
        <ThreeDotDetail song={song} />
      </div>
    </Tooltip>
  );
};

export default ThreeDot;
