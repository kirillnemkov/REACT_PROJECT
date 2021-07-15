import { INIT_FILES, UPLOAD_FILE, EDIT_FILE, DELETE_FILE } from "../types/filesTypes";

const filesReducer = (state = [], action) => {
  switch (action.type) {
    case INIT_FILES: {

      return true;
    }
    case UPLOAD_FILE: {
      const {url, fileName, size, _id, public_id} = action.payload;
      return [{url, fileName, size, _id, public_id }, ...state];
    }
      // case EDIT_FILE: {
      //   const data = action.payload;
      //   const newState = state.map(item => item._id === file.id? file : item);
      //   return newState;
      // }
        case DELETE_FILE: {
          const {id} = action.payload;
          const newState = state.filter(item => item._id !== id); 
          return newState;
        }
    default:
      return state;
  }
}

export default filesReducer
