import React from "react";
import "./Header.css";

export default function Header({ children }) {
  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__logo">
          <h1>instagram</h1>
        </div>
        <nav className="header__nav">{children}</nav>
      </div>
    </div>
  );
}
