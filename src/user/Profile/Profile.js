import React from "react";
import { PostGrid } from "../../post/PostGrid";
import { Avatar } from "../Avatar";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import { ProfileInfo } from "./ProfileInfo";
import "./Profile.css";

export default function Profile({ user }) {
  console.log(user);
  return (
    user && (
      <div className="profileContainer">
        <div className="profile">
          <div className="profile__userPic">
            <Avatar imgUrl={user.avatar} />
          </div>
          <div className="profile__username">
            <h2 className="username">{user.username}</h2>
            <button className="profile__btn">Follow</button>
          </div>
          <div className="profile__userDetails">
            <ProfileDetails
              fullname={user.fullname}
              bio={user.bio}
              // info={user.info}
            />
          </div>
          <div className="profile__userInfo">
            <ProfileInfo
              followersCount={user.info.followers}
              followingCount={user.info.following}
              postsCount={5}
            />
          </div>
        </div>
        <div className="profile__userPosts">
          <PostGrid posts={user.posts} />
        </div>
      </div>
    )
  );
}
