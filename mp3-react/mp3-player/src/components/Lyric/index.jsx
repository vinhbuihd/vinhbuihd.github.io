import { Lrc } from "react-lrc";
import { Grid, Tooltip } from "@mui/material";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MdOpenInFull, MdCloseFullscreen } from "react-icons/md";
import { HiOutlineChevronDown } from "react-icons/hi";
import { AiOutlineSetting } from "react-icons/ai";
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import "./Lyric.css";
import "swiper/css";
import CdThumbnail from "../CdThumbnail";
import SongPlayerControl from "../SongPlayerControl";
import { LayoutContext } from "../Layout";
import { Swiper, SwiperSlide } from "swiper/react";

// custom hook

const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

const Lyric = ({
  songCurrentTime,
  isShowLyric,
  setIsShowLyric,
  lyric,
  songDuration,
  handleChangeCurrentTime,
  isPlayListTab,
  setIsPlayListTab,
}) => {
  const { songs, currentIndex } = useContext(LayoutContext);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const handle = useFullScreenHandle();
  const [mySwiper, setMySwiper] = useState();
  const nextSlideRef = useRef();
  const previousState = usePrevious(currentIndex);

  const handleChangeFullScreen = () => {
    if (isFullScreen) {
      handle.exit();
    } else {
      handle.enter();
    }
    setIsFullScreen(!isFullScreen);
  };

  const handleSwiper = () => {
    mySwiper.slideTo(currentIndex);
  };

  useEffect(() => {
    if (previousState != currentIndex && previousState != undefined) {
      nextSlideRef.current.click();
    }
  }, [currentIndex]);

  return (
    <FullScreen handle={handle}>
      <div
        className={`song-karaoke ${isShowLyric ? "show" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lyric-container">
          <div className="lyric-top d-flex align-items-center">
            <div className="lyric-left"></div>
            <div className="lyric-tab">
              <button
                className={`btn ${isPlayListTab ? "active" : ""}`}
                onClick={() => setIsPlayListTab(true)}
              >
                Danh sách phát
              </button>
              <button
                className={`btn ${isPlayListTab ? "" : "active"}`}
                onClick={() => setIsPlayListTab(false)}
              >
                Lời bài hát
              </button>
            </div>

            <div className="lyric-button-group d-flex align-items-center">
              {isFullScreen ? (
                <Tooltip title="Thoát toàn màn hình" placement="bottom">
                  <div className="icon-button" onClick={handleChangeFullScreen}>
                    <MdCloseFullscreen />
                  </div>
                </Tooltip>
              ) : (
                <Tooltip title="Toàn màn hình" placement="bottom">
                  <div className="icon-button" onClick={handleChangeFullScreen}>
                    <MdCloseFullscreen />
                  </div>
                </Tooltip>
              )}

              <Tooltip title="Cài đặt" placement="bottom">
                <div className="icon-button">
                  <AiOutlineSetting />
                </div>
              </Tooltip>

              {isFullScreen ? (
                ""
              ) : (
                <Tooltip title="Đóng" placement="bottom">
                  <div
                    className="icon-button"
                    onClick={() => setIsShowLyric(false)}
                  >
                    <HiOutlineChevronDown />
                  </div>
                </Tooltip>
              )}
            </div>
          </div>

          <div
            style={{ display: `${isPlayListTab ? "" : "none"}` }}
            className="lyric-body playlist d-flex align-items-center"
          >
            <Swiper
              onSwiper={(s) => {
                setMySwiper(s);
              }}
              loop
              spaceBetween={28}
              slidesPerView={"auto"}
              centeredSlides={true}
              allowTouchMove={false}
            >
              {songs.map((song, index) => (
                <SwiperSlide
                  key={song.id}
                  className={index == currentIndex ? "swiperAactive" : ""}
                >
                  <div className="card-list">
                    <div className="card-list-image">
                      <img src={song.bigThumbnail} alt="image" />
                      <div className="card-list-image-hover"></div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <button
                style={{ visibility: "hidden" }}
                ref={nextSlideRef}
                onClick={handleSwiper}
              ></button>
            </Swiper>
          </div>

          <div
            style={{ display: `${isPlayListTab ? "none" : ""}` }}
            className="lyric-body lyric-body-tab-lyric"
          >
            <Grid container spacing={8}>
              <Grid item md={4} sm={12}>
                <div className="lyric-cdThumb">
                  <CdThumbnail />
                </div>
              </Grid>

              <Grid item md={8} sm={12}>
                <div className="lyric-text">
                  <Lrc
                    style={{ height: "500px" }}
                    lrc={lyric}
                    autoScroll={true}
                    topBlank={false}
                    bottomBlank={true}
                    currentMillisecond={songCurrentTime * 1000}
                    lineRenderer={({ index, active, line }) => (
                      <div
                        className="lyric-line"
                        style={{
                          color: active ? "yellow" : "#fff",
                        }}
                      >
                        {line.content}
                      </div>
                    )}
                  />
                </div>
              </Grid>
            </Grid>
          </div>

          <div className="lyric-player-control d-flex">
            <div className="lyric-player-song">
              <h5 className="lyric-player-song-name">
                {songs[currentIndex].name} - {songs[currentIndex].artists_names}
              </h5>
            </div>
            <SongPlayerControl
              songCurrentTime={songCurrentTime}
              songDuration={songDuration}
              handleChangeCurrentTime={handleChangeCurrentTime}
            />
          </div>
        </div>
      </div>
    </FullScreen>
  );
};

export default Lyric;
