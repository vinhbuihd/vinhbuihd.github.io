import { useSelector } from "react-redux";
import classNames from "classNames/bind";
import styles from "./Song.module.scss";

import SongItem from "../../../components/SongItem";

const cx = classNames.bind(styles);

const Song = () => {
  const { favoriteSong } = useSelector((state) => state);

  if (favoriteSong.length == 0) {
    return (
      <div className={cx("mymusic-song")}>
        <h2>Thư viện trống</h2>
      </div>
    );
  }

  return (
    <div className={cx("mymusic-song")}>
      {favoriteSong.map((song) => (
        <SongItem key={song.id} song={song} />
      ))}
    </div>
  );
};

export default Song;
