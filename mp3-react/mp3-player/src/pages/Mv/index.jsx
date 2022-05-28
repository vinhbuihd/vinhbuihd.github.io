import { Link } from "react-router-dom";
import { FiMusic } from "react-icons/fi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { BiSortDown } from "react-icons/bi";
import "./Mv.scss";
import { useState } from "react";
import CardList from "../../components/CardList";
import { Grid } from "@mui/material";

const mv = [
  {
    id: 1,
    image: "/images/mv-1.jpg",
    avatar: "/images/mv-a-1.jpg",
    name: "Túp Lều Vàng",
    singer: "Nguyễn Đình Vũ, ACV",
    duration: "03:33",
  },
  {
    id: 2,
    image: "/images/mv-2.jpg",
    avatar: "/images/mv-a-2.jpg",
    name: "Lựa Chọn Của Anh",
    singer: "Thương Võ, ACV",
    duration: "04:54",
  },
  {
    id: 3,
    image: "/images/mv-3.jpg",
    avatar: "/images/mv-a-3.jpg",
    name: "Đom Đóm",
    singer: "Jack",
    duration: "06:21",
  },
  {
    id: 4,
    image: "/images/mv-4.jpg",
    avatar: "/images/mv-a-4.jpg",
    name: "Kẹo Bông Gòn",
    singer: "H2K, TRUNKY",
    duration: "03:40",
  },
  {
    id: 5,
    image: "/images/mv-5.jpg",
    avatar: "/images/mv-a-3.jpg",
    name: "Em Gì Ơi",
    singer: "Jack",
    duration: "04:46",
  },
  {
    id: 6,
    image: "/images/mv-6.jpg",
    avatar: "/images/mv-a-6.jpg",
    name: "Khi Cô Đơn Em Nhớ Ai",
    singer: "Vicky Nhung",
    duration: "04:17",
  },
  {
    id: 7,
    image: "/images/mv-7.jpg",
    avatar: "/images/mv-a-6.jpg",
    name: "Những Lời Dối Gian",
    singer: "Vicky Nhung",
    duration: "03:50",
  },
  {
    id: 8,
    image: "/images/mv-8.jpg",
    avatar: "/images/mv-a-8.jpg",
    name: "Em Ơi Lên Phố",
    singer: "Minh Vương M4U",
    duration: "03:46",
  },
  {
    id: 9,
    image: "/images/mv-9.jpg",
    avatar: "/images/mv-a-9.jpg",
    name: "Tình Sầu Thiên Thu Muôn Lối",
    singer: "Doãn Hiếu, BMZ",
    duration: "04:21",
  },
];

const Mv = () => {
  const [isShowOption, setIsShowOption] = useState(false);
  const [isShowOption2, setIsShowOption2] = useState(false);

  const handleClickTitle = (e) => {
    const mvTitleBorder = document.querySelector(".mv-title-border");
    mvTitleBorder.style.width = e.target.offsetWidth + "px";
    mvTitleBorder.style.left = e.target.offsetLeft + "px";
  };

  return (
    <div className="mv home">
      <div className="mv-title d-flex align-items-center">
        <div className="mv-title-main">MV</div>
        <div className="mv-title-group d-flex align-items-center">
          <ul className="mv-title-list d-flex align-items-center">
            <li className="mv-title-item">
              <Link onClick={handleClickTitle} to="/mv/vn">
                Việt Nam
              </Link>
            </li>

            <li className="mv-title-item">
              <Link onClick={handleClickTitle} to="/mv/usuk">
                US-UK
              </Link>
            </li>

            <li className="mv-title-item">
              <Link onClick={handleClickTitle} to="/mv/kpop">
                KPop
              </Link>
            </li>

            <li className="mv-title-item">
              <Link onClick={handleClickTitle} to="/mv/hoatau">
                Hòa tấu
              </Link>
            </li>
          </ul>

          <div className="mv-title-border"></div>
        </div>
      </div>

      <div className="mv-filter">
        <div className="btn" onClick={() => setIsShowOption(!isShowOption)}>
          <ul className={`mv-filter-options ${isShowOption ? "show" : ""}`}>
            <li className="mv-filter-items">Ghitar</li>
            <li className="mv-filter-items">Cello</li>
            <li className="mv-filter-items">Classical</li>
            <li className="mv-filter-items">Violin</li>
            <li className="mv-filter-items">Nhạc cụ khác</li>
            <li className="mv-filter-items">Nhạc Thiền (Meditation)</li>
            <li className="mv-filter-items">Nhạc cụ dân tộc</li>
            <li className="mv-filter-items">Piano</li>
            <li className="mv-filter-items">New Age</li>
            <li className="mv-filter-items">Saxophone</li>
            <li className="mv-filter-items">Chillout/Lounge</li>
            <li className="mv-filter-items">Trumpette</li>
          </ul>
          <div className="mv-select d-flex align-items-center">
            <div className="mv-select-icon">
              <FiMusic />
            </div>
            <span className="mv-select-title">Tất cả</span>
            <div className="mv-select-icon">
              {isShowOption ? <BsChevronUp /> : <BsChevronDown />}
            </div>
          </div>
        </div>
        <div className="btn" onClick={() => setIsShowOption2(!isShowOption2)}>
          <ul
            className={`mv-filter-options small ${isShowOption2 ? "show" : ""}`}
          >
            <li className="mv-filter-items">Nghe nhiều</li>
            <li className="mv-filter-items">Nổi bật</li>
            <li className="mv-filter-items">Mới nhất</li>
          </ul>
          <div className="mv-select d-flex align-items-center">
            <div className="mv-select-icon">
              <BiSortDown />
            </div>
            <span className="mv-select-title">Nghe nhiều</span>
            <div className="mv-select-icon">
              {isShowOption2 ? <BsChevronUp /> : <BsChevronDown />}
            </div>
          </div>
        </div>
      </div>

      <div className="mv-list">
        <Grid container spacing={3}>
          {mv.map((item) => (
            <Grid item key={item.id} md={4} sm={6}>
              <CardList listSong={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Mv;
