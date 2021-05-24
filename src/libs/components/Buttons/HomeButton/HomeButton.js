import React from "react";
import { ReactComponent as Home } from "../../../../assets/home.svg";
import { ReactComponent as HomeActive } from "../../../../assets/home-active.svg";

export default function LikeButton({ isActive }) {
  return isActive ? <HomeActive /> : <Home />;
}
