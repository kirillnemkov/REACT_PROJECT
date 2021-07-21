import { DELETE_USER, SET_USER, GET_SKILLS, SET_INFO, SET_IMG, INIT_USERINFO } from "../types/userTypes";

const userReducer = (state = null, action) => {

  switch (action.type) {
    case SET_USER:
      return action.payload

      case SET_IMG:
      return {...state, image: action.payload.url}

    case DELETE_USER:
      return null

    case GET_SKILLS: {
        const { skills } = action.payload;
        return {...state, skills};
      }
    case SET_INFO: {
      console.log(action.payload, 'aaaaaccccttttiiiiioooonn')
      const{ payload } = action
      return payload
    }
    
    case INIT_USERINFO: {
      const {info} = action.payload
      return {...state, info}
    }

    default:
      return state
  }
}

export default userReducer
