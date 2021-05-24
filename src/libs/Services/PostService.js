import CommentModel from "../Models/CommentModel";

let posts = [
  {
    postId: 1,
    user: {
      avatar:
        "https://ichef.bbci.co.uk/news/640/cpsprodpb/CE9D/production/_107639825_wan_bissaka_reuters.jpg",
      username: "wanbissaka"
    },
    img: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/04/30/111939.jpg",
    likesCount: 7,
    description:
      "Give it , Give it , Give it to Edi Cavani! pass him the ball and he will score all the goals!",
    comments: [
      {
        id: 1,
        user: {
          username: "bfernandes",
          avatar:
            "https://pbs.twimg.com/profile_images/1364719465825325057/YQxSgEiH_400x400.jpg"
        },
        text: "what a magnificent goal!"
      },
      {
        id: 21,
        user: {
          username: "paulPogba",
          avatar:
            "https://manunitedcore.com/wp-content/uploads/2021/05/GettyImages-1232114734.jpg"
        },
        text: "damn!"
      },
      {
        id: 3,
        user: {
          username: "Edinson Cavani",
          avatar: "https://s.hs-data.com/bilder/spieler/gross/73627.jpg"
        },
        text: "that was fun!"
      }
    ]
  },
  {
    postId: 2,
    user: {
      avatar:
        "https://ichef.bbci.co.uk/news/640/cpsprodpb/CE9D/production/_107639825_wan_bissaka_reuters.jpg",
      username: "wanbissaka"
    },
    img:
      "https://www.unitedinfocus.com/static/uploads/14/2020/10/GettyImages-1229132241.jpg",
    likesCount: 7,
    description: "Great win today!",
    comments: [
      {
        id: 1,
        user: {
          username: "bfernandes",
          avatar:
            "https://pbs.twimg.com/profile_images/1364719465825325057/YQxSgEiH_400x400.jpg"
        },
        text: "what a magnificent goal!"
      },
      {
        id: 21,
        user: {
          username: "paulPogba",
          avatar:
            "https://manunitedcore.com/wp-content/uploads/2021/05/GettyImages-1232114734.jpg"
        },
        text: "damn!"
      },
      {
        id: 3,
        user: {
          username: "Edinson Cavani",
          avatar: "https://s.hs-data.com/bilder/spieler/gross/73627.jpg"
        },
        text: "that was fun!"
      }
    ]
  },
  {
    postId: 3,
    user: {
      avatar:
        "https://image.freepik.com/free-photo/young-man-traveler-with-backpack-relaxing-outdoor_1421-190.jpg",
      username: "thetraveler"
    },
    img:
      "https://skift.com/wp-content/uploads/2021/02/GettyImages-1059344876-1024x684.jpg",
    likesCount: 4,
    description: "Well... i have no words for this place",
    comments: [
      {
        id: 1,
        user: {
          username: "johnyz",
          avatar:
            "https://yt3.ggpht.com/ytc/AAUvwniLiwFIx3rZFcIB2n8JY5D6hqGiAO7wVUiWNA=s900-c-k-c0x00ffffff-no-rj"
        },
        text: "where are you now?"
      }
    ]
  }
];

const PostService = {
  async getPost(postId) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const post = posts.find((post) => post.postId == postId);

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
        const post = posts.find((post) => post.postId == postId);
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
        const postToLike = posts.find((post) => post.postId == postId);
        if (postToLike) {
          postToLike.isLikedByUser = true;
          posts = [...posts.map((post) => Object.assign({}, post))];
          resolve({ succeeded: true, data: postToLike });
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
  async unlikePost(postId, username) {
    let promise = new Promise((resolve, reject) => {
      setTimeout(function () {
        const postToUnlike = posts.find((post) => post.postId == postId);
        if (postToUnlike) {
          postToUnlike.isLikedByUser = false;
          posts = [...posts.map((post) => Object.assign({}, post))];
          resolve({ succeeded: true, data: postToUnlike });
        }
        reject({
          succeeded: false,
          data: null,
          error: new Error("no such post")
        });
      }, Math.floor(Math.random() * 1500));
    });

    return promise;
  }
};

export default PostService;
