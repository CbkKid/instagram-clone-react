import * as types from "./actionTypes";
import UserService from "../libs/Services/UserService";

export const GetUser = (userId) => ({
  type: types.GET_USER,
  userId: userId
});

export const FetchUserSuccess = (user) => {
  return {
    type: types.FETCH_USER_SUCCESS,
    user: user
  };
};

export const FetchUserFail = (error) => {
  return {
    type: types.FETCH_USER_FAIL,
    error: error
  };
};

export const FetchUser = (userId) => {
  return function (dispatch) {
    dispatch({ type: types.FETCH_USER });
    UserService.getUser(userId)
      .then((user) => dispatch(FetchUserSuccess(user)))
      .catch((e) => dispatch(FetchUserFail(e)));
  };
};
