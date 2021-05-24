import { combineReducers } from "redux";
import { postsReducer } from "../post/postReducer";
import { usersReducer } from "../user/userReducer";
import { authReducer } from "../auth/authReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  auth: authReducer,
  users: usersReducer
});
