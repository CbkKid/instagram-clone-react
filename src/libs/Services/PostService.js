import CommentModel from "../Models/CommentModel";
import { posts as postsMock } from '../Mocks/posts';

let posts = postsMock;

const PostService = {
  async getPost(postId) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const post = posts.find((post) => post.postId === parseInt(postId,10));

        if (post) {
          resolve(post);
        }
        return null;
      }, Math.floor(Math.random() * 1500));
    });

    return promise;
  },
  async getLatestPosts() {
    let promise = new Promise(async (resolve, reject) => {
      setTimeout(function () {
        resolve(posts);
      }, Math.floor(Math.random() * 1500));
    });

    return promise;
  },
  async getPostsByUser(username) {
    let promise = new Promise((resolve, reject) => {
      setTimeout(function () {
        const usersPosts = posts.find(
          (post) => post.user.username === username
        );
        if (usersPosts) resolve(usersPosts);

        reject(null);
      }, Math.floor(Math.random() * 1500));

      return promise;
    });
  },
  async addCommentToPost(postId, user, commentText) {
    let promise = new Promise(async (resolve, reject) => {
      setTimeout(function () {
        const post = posts.find((post) => post.postId === parseInt(postId,10));
        if (post) {
          const length = post.comments.length;
          const comment = CommentModel(length + 1, user, commentText);
          post.comments.push(comment);
          posts = [...posts.map((post) => Object.assign({}, post))];
          resolve({ succeeded: true, data: post });
        }

        reject({
          succeeded: false,
          data: null,
          error: new Error("no such post")
        });
      }, Math.floor(Math.random() * 1500));
    });

    return promise;
  },
  async likePost(postId, username) {
    let promise = new Promise((resolve, reject) => {
      setTimeout(function () {
        const post = posts.find((post) => post.postId === parseInt(postId,10));
        console.log(post)
        if (post) {
          const postToLike = {...post};
          postToLike.isLikedByUser = true;
          postToLike.likesCount = postToLike.likesCount + 1;
          posts = posts.map(post=> post.postId ===  parseInt(postId,10) ? postToLike : post);
          resolve({ succeeded: true, data: postToLike });
        }
        reject({
          succeeded: false,
          data: null,
          error: new Error("no such post")
        });
      }, Math.floor(Math.random() * 500));
    });

    return promise;
  },
  async unlikePost(postId, username) {
    let promise = new Promise((resolve, reject) => {
      setTimeout(function () {
        const post = posts.find((post) => post.postId === parseInt(postId,10));
        if (post) {
          const postToUnlike = {...post}
          postToUnlike.isLikedByUser = false;
          postToUnlike.likesCount--;
          posts = posts.map(post=> post.postId === parseInt(postId,10) ? postToUnlike : post);
          resolve({ succeeded: true, data: postToUnlike });
        }
        reject({
          succeeded: false,
          data: null,
          error: new Error("no such post")
        });
      }, Math.floor(Math.random() * 500));
    });

    return promise;
  }
};

export default PostService;
