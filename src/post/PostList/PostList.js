import React from "react";
import { PostCard } from "../PostCard";

export default function PostList({ posts }) {
  return (
    <div>
      {posts.length > 0
        ? posts.map((post) => <PostCard key={post.postId} post={post} />)
        : null}
    </div>
  );
}
