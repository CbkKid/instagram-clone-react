import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  data: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER:
      return { ...state.find((user) => user.userId == action.userId) };
    case types.FETCH_USER:
      return {
        isLoading: true,
        error: null,
        data: null
      };
    case types.FETCH_USER_SUCCESS:
      console.log("fetched user");
      console.log(action.user);
      return {
        isLoading: false,
        error: null,
        data: action.user
      };
    case types.FETCH_USER_FAIL:
      return {
        isLoading: false,
        error: action.error,
        data: null
      };
    default:
      return state;
  }
};
