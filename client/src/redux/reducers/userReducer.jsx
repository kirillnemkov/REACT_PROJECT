import { DELETE_USER, SET_USER, GET_SKILLS } from "../types/userTypes";

const userReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload

    case DELETE_USER:
      return null

    case GET_SKILLS: {
        const { skills } = action.payload;
        return {...state, skills};
      }

    default:
      return state
  }
}

export default userReducer
