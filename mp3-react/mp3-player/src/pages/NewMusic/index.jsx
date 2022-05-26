import { useContext } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineLine } from "react-icons/ai";
import SongItem from "../../components/SongItem";
import { LayoutContext } from "../../components/Layout";
import "./NewMusic.scss";

const NewMusic = () => {
  const { songs } = useContext(LayoutContext);

  return (
    <div className="new-music home">
      <div className="align-items-center d-flex">
        <h3 className="new-music-heading">Mới Phát Hành</h3>
        <div className="new-music-play-icon d-flex align-items-center">
          <BsFillPlayFill />
        </div>
      </div>

      <div className="zing-chart-playlist">
        {songs.map((song, index) => (
          <div
            className="playlist-item d-flex align-items-center"
            key={song.id}
          >
            <div className={`playlist-position top-${index + 1}`}>
              {index + 1}
            </div>
            <div className="playlist-line">
              <AiOutlineLine />
            </div>
            <SongItem key={song.id} song={song} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewMusic;
