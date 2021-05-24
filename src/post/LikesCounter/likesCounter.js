import React from "react";
import "./likesCounter.css";

export default function LikesCounter({ likesCount }) {
  return (
    <p className="likesCounter">{`${likesCount} ${
      likesCount > 1 ? "likes" : "like"
    } `}</p>
  );
}
