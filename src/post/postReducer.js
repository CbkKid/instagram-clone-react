import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  data: []
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return state;
    case types.ADD_POST:
      return { ...state, data: [...state.data, action.payload.post] };
    case types.ADD_POST_COMMENT_SUCCESS:
      return {
        ...state,
        data: [
          ...state.data.map((post) => {
            if (post.postId !== parseInt(action.payload.post.postId, 10)) {
              return post;
            }

            return action.payload.post;
          })
        ]
      };
    case types.ADD_POST_COMMENT_FAIL:
      return {
        ...state,
        error: action.error
      };
    case types.FETCH_POST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.FETCH_POST_SUCCESS:
      return {
        isLoading: false,
        error: null,
        data: [...state.data, action.post]
      };
    case types.FETCH_POST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case types.FETCH_LATEST_POSTS:
      return {
        ...state,
        isLoading: true
      };
    case types.FETCH_LATEST_POSTS_SUCCESS:
      console.log(action);
      return {
        isLoading: false,
        error: null,
        data: [...action.posts]
      };
    case types.FETCH_LATEST_POSTS_FAIL:
      return {
        isLoading: false,
        error: action.error,
        data: []
      };

    case types.POST_LIKED_BY_USER_SUCCESS:
      return {
        isLoading: false,
        error: null,
        data: [
          ...state.data.map((post) => {
            if (post.postId !== parseInt(action.post.postId, 10)) {
              return post;
            }

            return action.post;
          })
        ]
      };

    case types.POST_LIKED_BY_USER_FAIL:
      return {
        isLoading: false,
        error: action.error,
      };

    case types.POST_UNLIKED_BY_USER_SUCCESS:
      return {
        isLoading: false,
        error: null,
        data: [
          ...state.data.map((post) => {
            if (post.postId !== parseInt(action.post.postId, 10)) {
              return post;
            }

            return action.post;
          })
        ]
      };

    case types.POST_UNLIKED_BY_USER_FAIL:
      return {
        isLoading: false,
        error: action.error,
        data: []
      };

    default:
      return state;
  }
};
