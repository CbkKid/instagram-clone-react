import React from "react";
import "./ProfileInfo.css";

export default function ProfileInfo({
  postsCount,
  followersCount,
  followingCount,
  isStreched
}) {
  return (
    <div className="profileInfo">
      <div
        className={
          isStreched ? "profileInfo__item item--stretched" : "profileInfo__item"
        }
      >
        <span className="profileInfo__count">{postsCount}</span>
        <span> posts</span>
      </div>
      <div
        className={
          isStreched ? "profileInfo__item item--stretched" : "profileInfo__item"
        }
      >
        <span className="profileInfo__count">{followersCount}</span>
        <span> followers</span>
      </div>
      <div
        className={
          isStreched ? "profileInfo__item item--stretched" : "profileInfo__item"
        }
      >
        <span className="profileInfo__count">{followingCount}</span>
        <span> following</span>
      </div>
    </div>
  );
}
