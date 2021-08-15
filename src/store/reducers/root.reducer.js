import { combineReducers } from "redux";
import { commonReducer } from "./common.reducer";
import { movieReducer } from "./movie.reducer";
import { authReducer } from "./auth.reducer";
export const rootReducer = combineReducers({
  // reducer  child
  commonReducer,
  movieReducer,
  authReducer,
});
