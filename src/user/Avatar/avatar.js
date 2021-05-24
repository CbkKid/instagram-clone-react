import React from "react";
import "./avatar.css";

export default function Avatar({ imgUrl, style }) {
  return (
    <img
      className="avatar"
      style={{ ...style }}
      src={imgUrl}
      alt="profile pic"
    />
  );
}
