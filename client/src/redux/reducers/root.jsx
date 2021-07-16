import { combineReducers } from "redux";
import loaderReducer from "./loaderReducer";
import userReducer from "./userReducer";
import filesReducer from "./filesReducer";
import errorReducer from "./errorReducer";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  files: filesReducer,
  posts: postsReducer,
  error: errorReducer,
})

export default rootReducer;
