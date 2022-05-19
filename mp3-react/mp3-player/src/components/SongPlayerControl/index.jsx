import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import { BiShuffle } from "react-icons/bi";
import { CgRepeat } from "react-icons/cg";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { changeRepeat } from "../../store/reducers/isRepeat.slice";
import { changeRandom } from "../../store/reducers/isRandom.slice";
import { LayoutContext } from "../Layout";
import { pauseSong, playSong } from "../../store/reducers/isPlaying.slice";
import { Slider } from "@mui/material";
import "./SongPlayerControl.css";
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

const SongPlayerControl = ({
  songCurrentTime,
  songDuration,
  handleChangeCurrentTime,
}) => {
  const { isPlaying, isRandom, isRepeat } = useSelector((state) => state);
  const { nextSong, prevSong, randomSong } = useContext(LayoutContext);

  const dispatch = useDispatch();

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

  return (
    <div className="song-player">
      <div className="song-player-control" onClick={(e) => e.stopPropagation()}>
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
          <div className="play song-player-button" onClick={handleClickPlayBtn}>
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

      <div className="song-player-slider" onClick={(e) => e.stopPropagation()}>
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
  );
};

export default SongPlayerControl;
