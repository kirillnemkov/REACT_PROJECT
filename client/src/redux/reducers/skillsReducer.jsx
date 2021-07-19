import { GET_SKILLS } from "../types/skillsTypes";

const skillsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SKILLS: {
      const { skills } = payload;
      return skills;
    }
    default: {
      return state;
    }
  }
}

export default skillsReducer;
