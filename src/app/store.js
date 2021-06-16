import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";
import { users } from '../libs/Mocks/users';


const initialState = {
  posts: { data: [], isLoading: false },
  auth: { user: users[0] },
  users: { data: users[0], isLoading: false }
};

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);
