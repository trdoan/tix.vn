import { combineReducers } from "redux";
import { commonReducer } from "./common.reducer";
import { movieReducer } from "./movie.reducer";
export const rootReducer = combineReducers({
  // reducer  child
  commonReducer,
  movieReducer,
});
