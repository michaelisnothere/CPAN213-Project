import { combineReducers } from "redux";
import { movieReducer } from "./taskReducer";
import { authReducer } from "./taskReducer";

export const rootReducer = combineReducers({
  movies: movieReducer,
  auth: authReducer,
});
