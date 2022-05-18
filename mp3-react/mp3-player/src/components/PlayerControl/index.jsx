import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useContext, useEffect, useRef, useState } from "react";
import {
  BsThreeDots,
  BsPlayCircle,
  BsMusicNoteBeamed,
  BsPauseCircle,
} from "react-icons/bs";
import { BiShuffle } from "react-icons/bi";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { RiVolumeUpLine, RiVolumeMuteLine } from "react-icons/ri";
import { GiMicrophone } from "react-icons/gi";
import { CgRepeat } from "react-icons/cg";
import { Slider, Tooltip } from "@mui/material/";

import "./PlayerControl.css";
import { playSong } from "../../store/reducers/isPlaying.slice";
import { pauseSong } from "../../store/reducers/isPlaying.slice";
import { changeRepeat } from "../../store/reducers/isRepeat.slice";
import { changeRandom } from "../../store/reducers/isRandom.slice";
import Heart from "../Heart";
import { LayoutContext } from "../Layout";
import ThreeDot, { ThreeDotDetail } from "../ThreeDot";
import { Lrc } from "react-lrc";
import Lyric from "../Lyric";

const convertTime = (time) => {
  if (!time) return "00:00";
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return `${minutes}:${seconds}`;
};

const PlayerControl = ({ showPlaylist, setShowPlayList }) => {
  const { isPlaying, isRandom, isRepeat } = useSelector((state) => state);
  const [isMute, setIsMute] = useState(false);

  const { currentIndex, nextSong, prevSong, randomSong, songs } =
    useContext(LayoutContext);

  const [detailShow, setDetailShow] = useState(false);

  const dispatch = useDispatch();
  const [songDuration, setSongDuration] = useState(0);
  const [volume, setVolume] = useState(100);
  const [songCurrentTime, setSongCurrentTime] = useState(0);
  const [isShowLyric, setIsShowLyric] = useState(false);
  const audioRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (isMute) {
      audioRef.current.muted = true;
    } else {
      audioRef.current.muted = false;
    }
  }, [isMute]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentIndex]);

  const onTimeUpdate = () => {
    setSongCurrentTime(audioRef.current.currentTime);
  };

  const loadSong = () => {
    setSongDuration(audioRef.current.duration);
  };
  const handleChangeCurrentTime = (e) => {
    console.log(e.target.value);
    let currentTime = (songDuration * e.target.value) / 100;
    audioRef.current.currentTime = currentTime;
    if (!isPlaying) {
      dispatch(playSong());
    }
  };

  const handlePrevSong = () => {
    if (isRandom) {
      randomSong();
    } else {
      prevSong();
    }
    dispatch(playSong());
  };

  const handleNextSong = () => {
    if (isRandom) {
      randomSong();
    } else {
      nextSong();
    }
    dispatch(playSong());
  };

  const handleClickPlayBtn = () => {
    if (isPlaying) {
      dispatch(pauseSong());
    } else {
      dispatch(playSong());
    }
  };

  const onEndedSong = () => {
    if (isRepeat) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      document.querySelector(".next").click();
    }
  };

  const handleChangeVolume = (e) => {
    audioRef.current.volume = e.target.value / 100;

    setVolume(e.target.value);
  };

  const handleShowPlayList = () => {
    setShowPlayList(!showPlaylist);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const showIsPlayingSong = () => {
    navigate("/songplaying");
  };

  const showSongDetail = (e) => {
    e.stopPropagation();
  };

  const handleMuteSong = (e) => {
    e.stopPropagation();
    setIsMute(!isMute);
  };

  const handleShowLyric = (e) => {
    e.stopPropagation();
    setIsShowLyric(true);
  };

  return (
    <div
      to="/songplaying"
      className="player-control"
      onClick={showIsPlayingSong}
    >
      <Lyric
        currentTime={songCurrentTime}
        isShowLyric={isShowLyric}
        setIsShowLyric={setIsShowLyric}
      />

      <audio
        src={songs[currentIndex]?.path}
        ref={audioRef}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={loadSong}
        onEnded={onEndedSong}
      ></audio>
      <div className="song-item song-info" dataset={songs[currentIndex]?.id}>
        <div className="song-info-img">
          <img src={songs[currentIndex]?.thumbnail} alt="images" />
        </div>
        <div className="song-info-text">
          <p className="song-info-name">{songs[currentIndex]?.name}</p>
          <p className="song-info-singer">
            {songs[currentIndex]?.artists_names}
          </p>
        </div>

        <Heart favorite={songs[currentIndex]?.favorite} />

        <div className="song-item-btn" onClick={showSongDetail}>
          <ThreeDot song={songs[currentIndex]} />
        </div>
      </div>
      <div className="song-player">
        <div className="song-player-control" onClick={stopPropagation}>
          <div className="song-player-button-group">
            <div
              className={`shuffle song-player-button small ${
                isRandom ? "active" : ""
              }`}
              onClick={() => dispatch(changeRandom())}
              style={{ fontSize: "24px" }}
            >
              <BiShuffle />
            </div>
            <div
              className="prev song-player-button small"
              onClick={handlePrevSong}
            >
              <MdSkipPrevious />
            </div>
            <div
              className="play song-player-button"
              onClick={handleClickPlayBtn}
            >
              {isPlaying ? <BsPauseCircle /> : <BsPlayCircle />}
            </div>
            <div
              className="next song-player-button small"
              onClick={handleNextSong}
            >
              <MdSkipNext />
            </div>
            <div
              onClick={() => dispatch(changeRepeat())}
              className={`repeat song-player-button small ${
                isRepeat ? "active" : ""
              }`}
              style={{ fontSize: "32px" }}
            >
              <CgRepeat />
            </div>
          </div>
        </div>
        <div className="song-player-slider" onClick={stopPropagation}>
          <div className="song-player-slider-current-time">
            {convertTime(songCurrentTime) || "00:00"}
          </div>
          <div className="song-player-slider-bar">
            <Slider
              size="small"
              value={(songCurrentTime / songDuration) * 100 || 0}
              onChange={handleChangeCurrentTime}
            />
          </div>
          <div className="song-player-slider-duration-time">
            {convertTime(songDuration)}
          </div>
        </div>
      </div>
      <div className="song-subcontrol" onClick={stopPropagation}>
        <Tooltip title="Xem lời bài hát" placement="top">
          <div className="song-mic icon-button" onClick={handleShowLyric}>
            <GiMicrophone />
          </div>
        </Tooltip>
        <div className="song-volume">
          <Tooltip title={isMute ? "No Mute" : "Mute"} placement="top">
            <div
              className="song-volume-btn icon-button"
              onClick={handleMuteSong}
            >
              {volume == 0 || isMute ? (
                <RiVolumeMuteLine />
              ) : (
                <RiVolumeUpLine />
              )}
            </div>
          </Tooltip>

          <Slider
            size="small"
            style={{ color: "#fff" }}
            value={volume}
            onChange={handleChangeVolume}
          />
        </div>
        <div className="line"></div>
        <div
          className="playlist-showBtn"
          onClick={handleShowPlayList}
          style={showPlaylist ? { background: "var(--primary-color)" } : {}}
        >
          <BsMusicNoteBeamed />
        </div>
      </div>
    </div>
  );
};

export default PlayerControl;
