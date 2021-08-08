import {
  LOADING_OFF,
  LOADING_ON,
  MODAL_OFF,
  MODAL_ON,
  THAYDOIDANHSACHPHIM,
} from "../constants/common.const";

const initialState = {
  isLoading: false,
  isModal: false,
  videoModalId: "",
  maNhomMovieList: true,
};
export const commonReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING_ON:
      // state.isLoading = true;
      return { ...state, isLoading: true };
    case LOADING_OFF:
      // state.isLoading = false;
      return { ...state, isLoading: false };
    case MODAL_ON:
      return { isModal: true, videoModalId: payload };
    case MODAL_OFF:
      return { isModal: false };
    case THAYDOIDANHSACHPHIM:
      state.maNhomMovieList = !state.maNhomMovieList;
      return { ...state };
    default:
      return state;
  }
};
