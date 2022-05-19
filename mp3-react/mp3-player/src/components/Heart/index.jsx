import { Tooltip } from "@mui/material";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../../store/reducers/favoriteSong.slice";
import { LayoutContext } from "../Layout";
import "./Heart.css";

const Heart = ({ favorite }) => {
  const dispatch = useDispatch();
  const { favoriteSong } = useSelector((state) => state);

  const { songs, setSongs } = useContext(LayoutContext);

  const handleClickLikeSong = (e) => {
    e.stopPropagation();
    const songClickedId = e.target
      .closest(".song-item")
      .getAttribute("dataset");

    const clickedSongIndex = songs.findIndex(
      (song) => song.id == songClickedId
    );
    const newSongs = [...songs];
    const isLoved = favoriteSong.find((song) => song.id == songClickedId);
    if (isLoved) {
      newSongs.splice(clickedSongIndex, 1, {
        ...songs[clickedSongIndex],
        favorite: false,
      });
      setSongs(newSongs);
      dispatch(removeSong(songs[clickedSongIndex]));
      toast.success("Đã xóa khỏi thư viện");
    } else {
      newSongs.splice(clickedSongIndex, 1, {
        ...songs[clickedSongIndex],
        favorite: true,
      });
      setSongs(newSongs);
      dispatch(addSong({ ...songs[clickedSongIndex], favorite: true }));
      toast.success("Đã thêm vào thư viện");
    }
  };
  return (
    <>
      <Tooltip title={favorite ? "Bỏ thích" : "Yêu thích"} placement="top">
        <div
          className="song-info-like icon-button"
          onClick={handleClickLikeSong}
        >
          {favorite ? (
            <AiFillHeart className="fill-heart" />
          ) : (
            <AiOutlineHeart />
          )}
        </div>
      </Tooltip>
    </>
  );
};

export default Heart;
