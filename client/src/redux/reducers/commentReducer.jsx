import { PROJECT_COMMENT } from "../types/projectsTypes";

const commentReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case PROJECT_COMMENT: {
      const { comment } = payload;
      return comment;
    }
    default: {
      return state;
    }
  }
}

export default commentReducer;
