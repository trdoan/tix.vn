import { GET_LIST_MOVIE } from "../constants/movie.const";

const initialState = {
  listMovie: [],
};

export const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LIST_MOVIE:
      state.listMovie = payload;
      return { ...state };
    default:
      return state;
  }
};
