import React from "react";
import { ReactComponent as Heart } from "../../../../assets/heart.svg";
import { ReactComponent as HeartActive } from "../../../../assets/heart-active.svg";

export default function LikeButton({ isActive }) {
  return isActive ? <HeartActive /> : <Heart />;
}
