import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPosts } from "../../post/actions";
import WithLoading from "../../libs/HOC/WithLoading";
import PostService from "../../libs/Services/PostService";
import { PostList } from "../../post/PostList";
import { FetchLatestPosts } from "../../post/actions";

const ListWithLoading = WithLoading(PostList);

export default function FeedPage() {
  const dispatch = useDispatch();
  const [posts, isLoading] = useSelector((state) => [
    state.posts.data,
    state.posts.isLoading
  ]);

  useEffect(() => {
    dispatch(FetchLatestPosts());
  }, []);

  return <ListWithLoading isLoading={isLoading} posts={posts} />;
}
