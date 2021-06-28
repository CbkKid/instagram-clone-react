import React from "react";
import { Avatar } from "../../../user/Avatar";
import "./Comment.css";

export default function Comment({
  username,
  userImg,
  comment,
  isVisible,
  isDetailed
}) {
  return isDetailed ? (
    <div
      data-testid="detailed-comment"
      className={
        isVisible ? "comment comment--visible" : "comment comment--hidden"
      }
    >
      <div className="comment__container">
        <Avatar
          imgUrl={userImg}
          style={{
            width: "32px",
            height: "32px",
            marginRight: "5px",
            marginTop: "5px"
          }}
        />
        <span className="comment__username">{username}</span>
        <span className="comment__text">{comment}</span>
      </div>
    </div>
  ) : (
    <div
      data-testid="plain-comment"
      className={
        isVisible ? "comment comment--visible" : "comment comment--hidden"
      }
    >
      <span className="comment__username">{username}</span>
      {` ${comment}`}
    </div>
  );
}
