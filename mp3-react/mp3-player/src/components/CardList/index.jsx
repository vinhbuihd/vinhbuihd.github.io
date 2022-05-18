import "./CardList.css";
import { BsThreeDots, BsPlayCircle } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Box } from "@mui/material";

const CardList = ({ listSong }) => {
  return (
    <div className="card-list">
      <div className="card-list-image">
        <img src={listSong.image} alt="image" />
        <div className="card-list-image-hover">
          <AiOutlineHeart className="card-list-icon small" />
          <BsPlayCircle className="card-list-icon big" />
          <BsThreeDots className="card-list-icon small" />
        </div>
      </div>
      <h4 className="card-list-title">{listSong.name}</h4>
      <p className="card-list-description">{listSong.singer}</p>
    </div>
  );
};

export default CardList;
