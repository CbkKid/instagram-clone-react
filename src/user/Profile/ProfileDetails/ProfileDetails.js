import React from "react";
import { ProfileInfo } from "../ProfileInfo";
import "./ProfileDetails.css";

export default function ProfileDetails({ fullname, bio, info }) {
  return (
    <div className="userDetails">
      <h3 className="userDetails__fullname">{fullname}</h3>
      <div className="userDetails__bio">
        <p>{bio}</p>
      </div>
    </div>
  );
}
