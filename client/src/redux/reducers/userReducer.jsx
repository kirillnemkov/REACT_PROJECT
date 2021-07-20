import { DELETE_USER, SET_USER, SET_IMG } from "../types/userTypes";

const userReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload

      case SET_IMG:
      return {...state, image: action.payload.url}

    case DELETE_USER:
      return null

    default:
      return state
  }
}

export default userReducer
