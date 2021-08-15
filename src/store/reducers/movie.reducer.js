import {
  GET_DETAIL_MOVIE,
  GET_LIST_MOVIE,
  GET_MOVIE_2,
} from "../constants/movie.const";

const initialState = {
  listMovie: [],
  listMovie2: [],
  movieDetail: [],
};

export const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LIST_MOVIE:
      state.listMovie = payload;
      return { ...state };
    case GET_MOVIE_2:
      state.listMovie2 = payload;
      return { ...state };
    case GET_DETAIL_MOVIE:
      state.movieDetail = payload;
      return { ...state };
    default:
      return state;
  }
};
