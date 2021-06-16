import { users as usersMock } from '../Mocks/users';

const users = usersMock;

const UserService = {
  getUser(username) {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find((user) => user.username === username);

        if (user) {
          resolve(user);
        }

        reject(null);
      }, Math.floor(Math.random() * 1500));
    });

    return promise;
  }
};

export default UserService;
