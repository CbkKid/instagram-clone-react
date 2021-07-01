import { users } from '../libs/Mocks/users';

const initialState = {
  posts: {ids:[],entities:{}, isLoading: false },
  auth: { user: users[0] },
  users: { data: users[0], isLoading: false }
};

export default initialState;