import React from "react";
import "./PostCard.css";
import { LikesCounter } from "../LikesCounter";
import { AddComment } from "../AddComment";
import { CommentsList } from "../CommentsList";
import { PostActions } from "../PostActions";
import { PostHeader } from "../PostHeader";
import { PostDescription } from "../PostDescription";

export default function PostCard({ post }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__userDetails">
          <PostHeader username={post.user.username} imgUrl={post.user.avatar} />
        </div>
      </div>
      <div className="post__image">
        <img src={post.img} alt="" />
      </div>
      <div className="post__body">
        <div className="post__details">
          <div className="post__actions">
            <PostActions />
          </div>
          <LikesCounter likesCount={post.likesCount} />
          <div>
            <PostDescription
              username={post.user.username}
              description={post.description}
            />
          </div>
          <CommentsList comments={post.comments} />
          <time className="post__time">1 DAY AGO</time>
        </div>
        <div className="post__footer">
          <AddComment postId={post.postId} />
        </div>
      </div>
    </div>
  );
}
