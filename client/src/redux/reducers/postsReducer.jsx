import { GET_ALL_POSTS, GET_ONE_POSTS } from "../types/postsTypes";

const postsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_POSTS: {
      const { posts } = payload;
      return posts;
    }
    case GET_ONE_POSTS: {
      const { post } = payload;
      return [post];
    }
    default: {
      return state;
    }
  }
}

export default postsReducer;
