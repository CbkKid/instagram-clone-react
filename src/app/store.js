import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";

const posts = [
  {
    postId: 1,
    user: {
      avatar:
        "https://ichef.bbci.co.uk/news/640/cpsprodpb/CE9D/production/_107639825_wan_bissaka_reuters.jpg",
      username: "wanBissaka"
    },
    img: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/04/30/111939.jpg",
    likesCount: 7,
    description:
      "Give it , Give it , Give it to Edi Cavani! pass him the ball and he will score all the goals!",
    comments: [
      {
        id: 1,
        username: "bfernandes",
        text: "what a magnificent goal!"
      },
      {
        id: 2,
        username: "paulPogba",
        text: "damn!"
      },
      {
        id: 3,
        username: "Edinson Cavani",
        text: "that was fun!"
      }
    ]
  },
  {
    postId: 2,
    user: {
      avatar:
        "https://ichef.bbci.co.uk/news/640/cpsprodpb/CE9D/production/_107639825_wan_bissaka_reuters.jpg",
      username: "wanBissaka"
    },
    img:
      "https://www.unitedinfocus.com/static/uploads/14/2020/10/GettyImages-1229132241.jpg",
    likesCount: 7,
    description: "Great win today!",
    comments: [
      {
        id: 1,
        username: "bfernandes",
        text: "what a magnificent goal!"
      },
      {
        id: 2,
        username: "paulPogba",
        text: "damn!"
      },
      {
        id: 3,
        username: "Edinson Cavani",
        text: "that was fun!"
      }
    ]
  },
  {
    postId: 3,
    user: {
      avatar:
        "https://ichef.bbci.co.uk/news/640/cpsprodpb/CE9D/production/_107639825_wan_bissaka_reuters.jpg",
      username: "theTraveler"
    },
    img:
      "https://skift.com/wp-content/uploads/2021/02/GettyImages-1059344876-1024x684.jpg",
    likesCount: 4,
    description: "Well... i have no words for this place",
    comments: [
      {
        id: 1,
        username: "johnyz",
        text: "where are you now?"
      }
    ]
  }
];

const users = [
  {
    username: "wanbissaka",
    fullname: "aaron wan bissaka",
    avatar:
      "https://ichef.bbci.co.uk/news/640/cpsprodpb/CE9D/production/_107639825_wan_bissaka_reuters.jpg",
    bio: "there is only one wan bissaka",
    info: {
      followers: 5,
      following: 6
    },
    posts: [
      {
        postId: 1,
        user: {
          avatar:
            "https://ichef.bbci.co.uk/news/640/cpsprodpb/CE9D/production/_107639825_wan_bissaka_reuters.jpg",
          username: "wanBissaka"
        },
        img:
          "https://s.france24.com/media/display/525ab96a-a934-11eb-b6da-005056a964fe/w:1280/p:16x9/29025f7b263e9884f163ede740c3436f3b2b9501.webp",
        likesCount: 7,
        description:
          "Give it , Give it , Give it to Edi Cavani! pass him the ball and he will score all the goals!",
        comments: [
          {
            id: 1,
            username: "bfernandes",
            text: "what a magnificent goal!"
          },
          {
            id: 2,
            username: "paulPogba",
            text: "damn!"
          },
          {
            id: 3,
            username: "Edinson Cavani",
            text: "that was fun!"
          }
        ]
      },
      {
        postId: 2,
        user: {
          avatar:
            "https://ichef.bbci.co.uk/news/640/cpsprodpb/CE9D/production/_107639825_wan_bissaka_reuters.jpg",
          username: "wanBissaka"
        },
        img:
          "https://www.unitedinfocus.com/static/uploads/14/2020/10/GettyImages-1229132241.jpg",
        likesCount: 7,
        description:
          "Give it , Give it , Give it to Edi Cavani! pass him the ball and he will score all the goals!",
        comments: [
          {
            id: 1,
            username: "bfernandes",
            text: "what a magnificent goal!"
          },
          {
            id: 2,
            username: "paulPogba",
            text: "damn!"
          },
          {
            id: 3,
            username: "Edinson Cavani",
            text: "that was fun!"
          }
        ]
      }
    ]
  },
  {
    username: "theTraveler",
    fullname: "the traveler",
    avatar:
      "https://ichef.bbci.co.uk/news/640/cpsprodpb/CE9D/production/_107639825_wan_bissaka_reuters.jpg",
    bio: "Around the world!",
    info: {
      followers: 5,
      following: 6
    },
    posts: {
      postId: 3,
      user: {
        avatar:
          "https://ichef.bbci.co.uk/news/640/cpsprodpb/CE9D/production/_107639825_wan_bissaka_reuters.jpg",
        username: "theTraveler"
      },
      img:
        "https://skift.com/wp-content/uploads/2021/02/GettyImages-1059344876-1024x684.jpg",
      likesCount: 4,
      description: "Well... i have no words for this place",
      comments: [
        {
          id: 1,
          username: "johnyz",
          text: "where are you now?"
        }
      ]
    }
  }
];

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
