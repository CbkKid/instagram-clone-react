import React from "react";
import "./PostDescription.css";

export default function PostDescription({ username, description }) {
  return (
    <div>
      <span className="post__body__username">{username}</span> {description}
    </div>
  );
}
