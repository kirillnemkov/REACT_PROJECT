import { combineReducers } from "redux";
import loaderReducer from "./loaderReducer";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import projectsReducer from "./projectsReducer";
import skillsReducer from "./skillsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  projects: projectsReducer,
  error: errorReducer,
  skills: skillsReducer,
})

export default rootReducer;
