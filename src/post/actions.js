import * as types from "./actionTypes";
import PostService from "../libs/Services/PostService";

export const GetPosts = () => ({
  type: types.GET_POSTS
});

export const ADD_POST = (post) => ({
  type: types.ADD_POST,
  payload: post
});

export const AddCommentToPost = (postId, commentText) => {
  return function (dispatch, getState) {
    const user = getState().auth.user;
    PostService.addCommentToPost(postId, user, commentText)
      .then((result) => {
        dispatch(AddCommentToPostSuccess(result.post))
      })
      .catch((result) => dispatch(AddCommentToPostFail(result.error)));
  };
};

export const AddCommentToPostSuccess = (post) => {
  return {
    type: types.ADD_POST_COMMENT_SUCCESS,
    post: post
  };
};

export const AddCommentToPostFail = (error) => {
  return {
    type: types.ADD_POST_COMMENT_FAIL,
    error: error
  };
};

export const FetchPostSuccess = (post) => {
  return {
    type: types.FETCH_POST_SUCCESS,
    post: post
  };
};

export const FetchPostFail = (error) => {
  return {
    type: types.FETCH_POST_FAIL,
    error: error
  };
};

export const FetchPost = (postId) => {
  return function (dispatch) {
    dispatch({ type: types.FETCH_POST });
    PostService.getPost(postId)
      .then((post) => dispatch(FetchPostSuccess(post)))
      .catch((e) => dispatch(FetchPostFail(e)));
  };
};

// export const FetchPostsByUserSuccess = (posts) => {
//   return {
//     type: types.FETCH_USER_POSTS_SUCCESS,
//     posts: posts
//   };
// };

// export const FetchPostsByUserFail = (error) => {
//   return {
//     type: types.FETCH_USER_POSTS_FAIL,
//     error: error
//   };
// };

// export const FetchPostsByUser = (userId) => {
//   return function (dispatch) {
//     PostService.getPostsByUser(userId)
//       .then((posts) => dispatch(FetchPostSuccess(posts)))
//       .catch((e) => dispatch(FetchPostFail(e)));
//   };
// };

export const FetchLatestPostsSuccess = (posts) => {
  return {
    type: types.FETCH_LATEST_POSTS_SUCCESS,
    posts: posts
  };
};

export const FetchLatestPostsFail = (error) => {
  return {
    type: types.FETCH_LATEST_POSTS_FAIL,
    error: error
  };
};

export const FetchLatestPosts = () => {
  return function (dispatch) {
    dispatch({ type: types.FETCH_LATEST_POSTS });
    PostService.getLatestPosts()
      .then((posts) => dispatch(FetchLatestPostsSuccess(posts)))
      .catch((e) => dispatch(FetchLatestPostsFail(e)));
  };
};

export const LikePostSuccess = (post) => {
  return {
    type: types.POST_LIKED_BY_USER_SUCCESS,
    post: post
  };
};

export const LikePostFail = (error) => {
  return {
    type: types.POST_LIKED_BY_USER_FAIL,
    error: error
  };
};

export const LikePost = (postId, username) => {
  return function (dispatch) {
    dispatch({ type: types.POST_LIKED_BY_USER });
    PostService.likePost(postId, username)
      .then((result) => dispatch(LikePostSuccess(result.data)))
      .catch((result) => dispatch(LikePostFail(result.error)));
  };
};

export const UnlikePostSuccess = (post) => {
  return {
    type: types.POST_UNLIKED_BY_USER_SUCCESS,
    post: post
  };
};

export const UnlikePostFail = (error) => {
  return {
    type: types.POST_UNLIKED_BY_USER_FAIL,
    error: error
  };
};

export const UnlikePost = (postId, username) => {
  return function (dispatch) {
    dispatch({ type: types.POST_UNLIKED_BY_USER });
    PostService.unlikePost(postId, username)
      .then((result) => dispatch(UnlikePostSuccess(result.data)))
      .catch((result) => dispatch(UnlikePostFail(result.error)));
  };
};
