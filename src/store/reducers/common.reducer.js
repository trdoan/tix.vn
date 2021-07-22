import { LOADING_OFF, LOADING_ON } from "../constants/common.const";

const initialState = {
  isLoading: false,
};
export const commonReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING_ON:
      state.isLoading = true;
      return { ...state };
    case LOADING_OFF:
      state.isLoading = false;
      return { ...state };
    default:
      return state;
  }
};
