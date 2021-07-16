import { GET_ALL_POSTS } from "../types/postsTypes";

const postsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_POSTS: {
      const { posts } = payload;
      return posts;
    }
    default: {
      return state;
    }
  }
}

export default postsReducer;
