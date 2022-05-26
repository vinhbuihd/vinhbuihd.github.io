import { useDispatch, useSelector } from "react-redux";
import "./SongItem.css";
import { BsPlayFill, BsThreeDots } from "react-icons/bs";
import { pauseSong, playSong } from "../../store/reducers/isPlaying.slice";
import { useContext, useEffect, useState } from "react";
import { LayoutContext } from "../Layout";
import Heart from "../Heart";
import ThreeDot from "../ThreeDot";

const SongItem = ({ song }) => {
  const { isPlaying } = useSelector((state) => state);
  const [detailShow, setDetailShow] = useState(false);
  const { currentIndex, setCurrentIndex, songs } =
    useContext(LayoutContext) || {};
  const dispatch = useDispatch();

  const handleActiveSong = (e) => {
    const parentEle = e.target.closest(".song-item");
    const clickedSongIndex = songs.findIndex(
      (song) => song.id == parentEle.getAttribute("dataset")
    );
    setCurrentIndex(clickedSongIndex);
  };

  return (
    <div
      className={`song-item ${
        song.id == songs[currentIndex]?.id ? "active" : ""
      }`}
      dataset={song.id}
    >
      <div className="d-flex align-items-center">
        <div className="song-item-image" onClick={handleActiveSong}>
          <img src={song.thumbnail} alt="image" />
          <div
            className="song-item-image-overlay"
            style={{
              display: `${song.id == songs[currentIndex].id ? "flex" : ""}`,
            }}
          >
            {song.id == songs[currentIndex].id && isPlaying ? (
              <img
                style={{ width: "20px", height: "20px", borderRadius: 0 }}
                src="/images/icon-playing.gif"
                onClick={() => dispatch(pauseSong())}
              />
            ) : (
              <BsPlayFill onClick={() => dispatch(playSong())} />
            )}
          </div>
        </div>
        <div className="song-item-text">
          <div className="song-item-name">{song.name}</div>
          <div className="song-item-singer">{song.artists_names}</div>
        </div>
      </div>

      <div className="song-item-btn d-flex align-items-center">
        <Heart favorite={song.favorite} />
        <ThreeDot
          song={song}
          detailShow={detailShow}
          setDetailShow={setDetailShow}
        />
      </div>
    </div>
  );
};

export default SongItem;
