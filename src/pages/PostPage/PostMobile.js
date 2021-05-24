import React, { useEffect, useState } from "react";
import { CommentsList } from "../../post/CommentsList";
import { LikesCounter } from "../../post/LikesCounter";
import { PostActions } from "../../post/PostActions";
import { PostDescription } from "../../post/PostDescription";
import { PostHeader } from "../../post/PostHeader";
import WithLoading from "../../libs/HOC/WithLoading";
import "./PostMobile.css";

function PostMobile({ post }) {
  return (
    <div>
      {post ? (
        <div className="postMobileContainer">
          <div className="post__header">
            <PostHeader
              username={post.user.username}
              imgUrl={post.user.avatar}
            />
          </div>
          <div className="post__image">
            <img src={post.img} alt="" />
          </div>
          <div className="post__actions">
            <PostActions />
          </div>
          <div className="post__likes">
            <LikesCounter likesCount={post.likesCount} />
          </div>
          <div className="post__description">
            <PostDescription
              username={post.user.username}
              description={post.description}
            />
          </div>
          <div className="post__comments">
            <CommentsList comments={post.comments} />
          </div>
          <time className="post__time">1 DAY AGO</time>
        </div>
      ) : null}
    </div>
  );
}
export default WithLoading(PostMobile);
