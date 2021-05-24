import React, { useEffect } from "react";
import Profile from "../../user/Profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { FetchUser } from "../../user/actions";
import { FetchPostsByUser } from "../../post/actions";
import WithLoading from "../../libs/HOC/WithLoading";

const ProfileWithLoading = WithLoading(Profile);

export default function UserProfilePage() {
  const { username } = useParams();
  const [user, isLoading, userPosts] = useSelector((state) => [
    state.users.data,
    state.users.isLoading,
    state.posts.data.includes((post) => post.username === username)
  ]);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(username);
    dispatch(FetchUser(username));
    // dispatch(FetchPostsByUser(username));
  }, [username]);
  return <ProfileWithLoading user={user} isLoading={isLoading} />;
}
