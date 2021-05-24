import React from "react";
// import "./Header.css";

export default function HeaderItem({ children }) {
  //TODO: change to Link?
  return (
    <div className="header__item" style={{ display: "inline-block" }}>
      {children}
    </div>
  );
}
