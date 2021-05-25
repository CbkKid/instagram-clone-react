import React from "react";
import { ReactComponent as Heart } from "../../../../assets/heart.svg";
import { ReactComponent as HeartActive } from "../../../../assets/heart-active.svg";

export default function LikeButton({ isActive , onClick }) {
  return isActive ? <div onClick={onClick}><HeartActive /></div> : <div onClick={onClick}><Heart /></div>;
}
