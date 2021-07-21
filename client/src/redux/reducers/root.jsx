import { combineReducers } from "redux";
import loaderReducer from "./loaderReducer";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import projectsReducer from "./projectsReducer";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  projects: projectsReducer,
  project: projectReducer,
  error: errorReducer,
})

export default rootReducer;
