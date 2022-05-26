import "./SidePlayList.css";
import { BsThreeDots } from "react-icons/bs";
import SongItem from "../SongItem";
import { useEffect } from "react";

const SidePlayList = ({ songs, showPlaylist, setShowPlayList }) => {
  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth > 1300) {
        setShowPlayList(true);
      } else {
        setShowPlayList(false);
      }
    };
  }, [showPlaylist]);

  return (
    <div className={`side-playList ${showPlaylist ? "" : "hide"}`}>
      <div className="side-playList-top">
        <div className="change-playlist">
          <button className="btn active">Danh sách phát</button>
          <button className="btn">Nghe gần đây</button>
        </div>
        <div className="side-playList-seemore">
          <BsThreeDots />
        </div>
      </div>
      <div className="side-playList-group">
        {songs.map((song) => (
          <SongItem song={song} key={song.id} />
        ))}
      </div>
    </div>
  );
};

export default SidePlayList;
