import "./SideNav.css";
import { MdOutlineMusicVideo, MdOndemandVideo } from "react-icons/md";
import { SiCircle } from "react-icons/si";
import { FaChartLine } from "react-icons/fa";
import { GiMusicSpell } from "react-icons/gi";
import { BiNews, BiCategoryAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { FiMusic } from "react-icons/fi";
import { AiOutlineLeft, AiOutlineRight, AiOutlineStar } from "react-icons/ai";
import { useEffect, useState } from "react";

const SideNav = () => {
  const [showNav, setShowNav] = useState(true);
  const showSideNav = () => {
    document.querySelector(".sideNav").classList.toggle("tablet");
  };

  useEffect(() => {
    if (window.innerWidth > 1200) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1200) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  }, [showNav]);

  return (
    <div className={`sideNav ${showNav ? " " : "tablet"}`}>
      <NavLink to="/" className="logo"></NavLink>
      <div className="navigation">
        <NavLink to="/mymusic" className="navigation-item" title="Cá nhân">
          <div className="navigation-item-icon">
            <MdOutlineMusicVideo />
          </div>
          <div className="navigation-item-title">Cá nhân</div>
        </NavLink>

        <NavLink to="/" className="navigation-item" title="Khám phá">
          <div className="navigation-item-icon">
            <SiCircle />
          </div>
          <div className="navigation-item-title">Khám phá</div>
        </NavLink>
        <NavLink
          to="/zingchart"
          className="navigation-item"
          title="#zing chart"
        >
          <div className="navigation-item-icon">
            <FaChartLine />
          </div>
          <div className="navigation-item-title">#zing chart</div>
        </NavLink>
        <NavLink to="/radio" className="navigation-item" title="Radio">
          <div className="navigation-item-icon">
            <GiMusicSpell />
          </div>
          <div className="navigation-item-title">Radio</div>
        </NavLink>
        <NavLink to="/follow" className="navigation-item" title="Theo dõi">
          <div className="navigation-item-icon">
            <BiNews />
          </div>
          <div className="navigation-item-title">Theo dõi</div>
        </NavLink>
        <div className="side-line">
          <span></span>
        </div>
        <div className="subSideNav">
          <NavLink to="/newmusic" className="navigation-item" title="Nhạc mới">
            <div className="navigation-item-icon">
              <FiMusic />
            </div>
            <div className="navigation-item-title">Nhạc mới</div>
          </NavLink>
          <NavLink to="/category" className="navigation-item" title="Thể loại">
            <div className="navigation-item-icon">
              <BiCategoryAlt />
            </div>
            <div className="navigation-item-title">Thể loại</div>
          </NavLink>
          <NavLink to="/topmusic" className="navigation-item" title="Top 100">
            <div className="navigation-item-icon">
              <AiOutlineStar />
            </div>
            <div className="navigation-item-title">Top 100</div>
          </NavLink>
          <NavLink to="/mv" className="navigation-item" title="MV">
            <div className="navigation-item-icon">
              <MdOndemandVideo />
            </div>
            <div className="navigation-item-title">MV</div>
          </NavLink>
        </div>
      </div>
      <div
        className="showNavBtn"
        style={{ display: `${showNav ? "none" : "flex"}` }}
      >
        <div className="showNav-icon open" onClick={showSideNav}>
          <AiOutlineRight />
        </div>
        <div className="showNav-icon close" onClick={showSideNav}>
          <AiOutlineLeft />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
