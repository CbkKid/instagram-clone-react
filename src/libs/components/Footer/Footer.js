import React from "react";
import "./Footer.css";
import GithubLogo from '../../../assets/GitHub-Mark-32px.png';

export default function Footer() {
  return (
    <div className="footer">
      <p><a href="https://www.github.com/mb-cbk/instagram-clone-react" target="_blank"><img src={GithubLogo}/></a></p>
    </div>
  );
}
