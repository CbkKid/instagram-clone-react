import React from "react";
import { PostCard } from "../PostCard";
import './PostList.css';

export default function PostList({ posts }) {
  return (
    <ul className="postlist">
      {posts.length > 0
        ? posts.map((post) => <li data-testid="post-listitem" key={post.postId}><PostCard post={post} /></li>)
        : null}
    </ul>
  );
}
