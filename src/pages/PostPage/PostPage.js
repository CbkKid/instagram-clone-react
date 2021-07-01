import React, { useEffect, useState } from "react";
import PostMobile from "./PostMobile";
import PostDesktop from "./PostDesktop";
import { createMedia } from "@artsy/fresnel";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FetchPost } from "../../post/actions";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192
  }
});

export default function PostPage() {
  const { postId, username } = useParams();
  const dispatch = useDispatch();
  const [post, user, isLoading] = useSelector((state) => [
    state.posts.entities[postId],
    state.users.data,
    state.posts.isLoading
  ]);

  useEffect(() => {
    dispatch(FetchPost(postId));
  }, []);

  return (
    <MediaContextProvider>
      <Media at="sm">
        <PostMobile isLoading={isLoading} post={post} />
      </Media>
      <Media greaterThanOrEqual="md">
        <PostDesktop isLoading={isLoading} post={post} user={user} />
      </Media>
    </MediaContextProvider>
  );
}
