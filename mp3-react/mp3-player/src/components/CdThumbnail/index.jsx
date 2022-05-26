import { BsPauseCircle, BsPlayCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import useWebAnimations from "@wellyshen/use-web-animations";

import { pauseSong, playSong } from "../../store/reducers/isPlaying.slice";
import { useContext, useEffect } from "react";
import { LayoutContext } from "../Layout";

const CdThumbnail = ({ song }) => {
  const { isPlaying } = useSelector((state) => state);
  const { songs, currentIndex } = useContext(LayoutContext);
  const dispatch = useDispatch();

  const { ref, animate, getAnimation } = useWebAnimations({
    keyframes: {
      transform: "rotate(360deg)",
    },
    animationOptions: {
      duration: 15000,
      iterations: 5000,
    },
  });

  useEffect(() => {
    if (isPlaying) {
      getAnimation().play();
    } else {
      getAnimation().pause();
    }
  }, [isPlaying]);

  const handleClickPlaySong = (song) => {
    // setCurrentIndex(song.id)
    if (isPlaying) {
      dispatch(pauseSong());
    } else {
      dispatch(playSong());
    }
  };

  return (
    <div className="card-list">
      <div className="card-list-image">
        <div className="card-list-image-wrapper" ref={ref}>
          <img
            className="thumb"
            src={songs[currentIndex]?.bigThumbnail}
            alt="image"
          />
        </div>

        <div className="card-list-image-hover" onClick={handleClickPlaySong}>
          {isPlaying ? (
            <BsPauseCircle className="card-list-icon big" />
          ) : (
            <BsPlayCircle className="card-list-icon big" />
          )}
        </div>
      </div>
      <h4 className="card-list-title">{songs[currentIndex]?.name}</h4>
      <p className="card-list-description">
        {songs[currentIndex]?.artists_names}
      </p>
    </div>
  );
};

export default CdThumbnail;
