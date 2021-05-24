import React from "react";
import { Avatar } from "../../user/Avatar";
import { Link } from "react-router-dom";
import "./PostHeader.css";

export default function PostHeader({ username, imgUrl }) {
  return (
    <div className="postHeader">
      <div className="postHeader__userDetails">
        <Link to={`/${username}`}>
          <Avatar style={{ height: "32px", width: "32px" }} imgUrl={imgUrl} />
        </Link>
        <Link className="postHeader__username" to={`/${username}`}>
          {username}
        </Link>
      </div>
      <button className="more-options-btn">
        <svg height="16" viewBox="0 0 48 48" width="16">
          <circle
            clipRule="evenodd"
            cx="8"
            cy="24"
            fillRule="evenodd"
            r="4.5"
          ></circle>
          <circle
            clipRule="evenodd"
            cx="24"
            cy="24"
            fillRule="evenodd"
            r="4.5"
          ></circle>
          <circle
            clipRule="evenodd"
            cx="40"
            cy="24"
            fillRule="evenodd"
            r="4.5"
          ></circle>
        </svg>
      </button>
    </div>
  );
}
