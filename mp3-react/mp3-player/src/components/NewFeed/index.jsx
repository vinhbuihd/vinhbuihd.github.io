import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsDot } from "react-icons/bs";

import "./NewFeed.scss";
import { useState } from "react";

function NewFeed({ feed }) {
  const [isFollow, setIsFollow] = useState(false);
  const [isLike, setIsLike] = useState(false);

  return (
    <div className="new-feed">
      <div className="feed-modal">
        <div className="feed-modal-container"></div>
      </div>
      <div className="feed-header d-flex align-items-center">
        <div className="feed-header-avatar">
          <img src={feed.avatar} alt="avatar" />
        </div>
        <div className="feed-header-text">
          <div className="name d-flex align-items-center">
            {feed.name}
            <div className="dot d-flex align-items-center">
              <BsDot />
            </div>
            <span className="follow-btn" onClick={() => setIsFollow(!isFollow)}>
              {isFollow ? (
                <span style={{ color: "#dadada" }}>Đã quan tâm</span>
              ) : (
                "Quan tâm"
              )}
            </span>
          </div>
          <div className="date">{feed.date}</div>
        </div>
      </div>
      <div className="feed-caption">{feed.caption}</div>
      <div className="feed-image">
        <img src={feed.image} alt="avatar" />
      </div>
      <div className="feed-footer d-flex align-items-center">
        <div
          style={{ cursor: "pointer" }}
          className="d-flex align-items-center like"
          onClick={() => setIsLike(!isLike)}
        >
          {isLike ? (
            <AiFillHeart style={{ color: "var(--primary-color)" }} />
          ) : (
            <AiOutlineHeart />
          )}
          <span className="feed-footer-icon">
            {isLike ? +feed.like + 1 : feed.like}
          </span>
        </div>
        <div className="d-flex align-items-center">
          <FaRegComment />
          <span className="feed-footer-icon">{feed.comment}</span>
        </div>
      </div>
    </div>
  );
}

export default NewFeed;
