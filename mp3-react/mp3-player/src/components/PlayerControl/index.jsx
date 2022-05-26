import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useContext, useEffect, useRef, useState } from "react";
import { Slider, Tooltip } from "@mui/material/";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { RiVolumeUpLine, RiVolumeMuteLine } from "react-icons/ri";
import { GiMicrophone } from "react-icons/gi";
import Heart from "../Heart";

import { LayoutContext } from "../Layout";
import ThreeDot from "../ThreeDot";
import Lyric from "../Lyric";
import SongPlayerControl from "../SongPlayerControl";
import { playSong } from "../../store/reducers/isPlaying.slice";
import "./PlayerControl.css";

const PlayerControl = ({ showPlaylist, setShowPlayList }) => {
  const { isPlaying, isRepeat } = useSelector((state) => state);
  const [isMute, setIsMute] = useState(false);

  const { currentIndex, songs } = useContext(LayoutContext);

  const dispatch = useDispatch();
  const [songDuration, setSongDuration] = useState(0);
  const [songCurrentTime, setSongCurrentTime] = useState(0);
  const [volume, setVolume] = useState(100);
  const [isShowLyric, setIsShowLyric] = useState(false);
  const [isPlayListTab, setIsPlayListTab] = useState(false);

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
    setIsShowLyric(true);
    setIsPlayListTab(true);
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
    setIsPlayListTab(false);
  };

  const handleChangeCurrentTime = (e) => {
    let currentTime = (songDuration * e.target.value) / 100;
    audioRef.current.currentTime = currentTime;
    if (!isPlaying) {
      dispatch(playSong());
    }
  };

  return (
    <div
      to="/songplaying"
      className="player-control"
      onClick={showIsPlayingSong}
    >
      <Lyric
        isShowLyric={isShowLyric}
        setIsShowLyric={setIsShowLyric}
        lyric={songs[currentIndex]?.lyric}
        songCurrentTime={songCurrentTime}
        songDuration={songDuration}
        handleChangeCurrentTime={handleChangeCurrentTime}
        isPlayListTab={isPlayListTab}
        setIsPlayListTab={setIsPlayListTab}
      />

      <audio
        src={songs[currentIndex]?.path}
        ref={audioRef}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={loadSong}
        onEnded={onEndedSong}
      ></audio>
      <div
        className="song-item song-info play-control-song-info"
        dataset={songs[currentIndex]?.id}
      >
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

      <SongPlayerControl
        songCurrentTime={songCurrentTime}
        songDuration={songDuration}
        handleChangeCurrentTime={handleChangeCurrentTime}
      />

      <div className="song-subcontrol" onClick={stopPropagation}>
        <Tooltip title="Xem lời bài hát" placement="top">
          <div className="song-mic icon-button" onClick={handleShowLyric}>
            <GiMicrophone />
          </div>
        </Tooltip>
        <div className="song-volume">
          <div className="song-volume-btn icon-button" onClick={handleMuteSong}>
            {volume == 0 || isMute ? <RiVolumeMuteLine /> : <RiVolumeUpLine />}
          </div>

          <div className="song-volume-slider">
            <Slider
              size="small"
              style={{ color: "#fff" }}
              value={volume}
              onChange={handleChangeVolume}
            />
          </div>
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
