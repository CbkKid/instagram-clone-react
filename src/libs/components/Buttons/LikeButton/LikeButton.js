import React from "react";
import { ReactComponent as Heart } from "../../../../assets/heart.svg";
import { ReactComponent as HeartActive } from "../../../../assets/heart-active.svg";

export default function LikeButton({ isActive , onClick }) {
  return isActive ? <div data-testid="likeButton" onClick={onClick}><HeartActive /></div> : <div data-testid="likeButton" onClick={onClick}><Heart /></div>;
}
