import { useSelector } from "react-redux";
import "./Song.css";

import SongItem from "../../../components/SongItem";

const Song = () => {
  const { favoriteSong } = useSelector((state) => state);

  if (favoriteSong.length == 0) {
    return (
      <div className="mymusic-song">
        <h2>Thư viện trống</h2>
      </div>
    );
  }

  return (
    <div className="mymusic-song">
      {favoriteSong.map((song) => (
        <SongItem key={song.id} song={song} />
      ))}
    </div>
  );
};

export default Song;
