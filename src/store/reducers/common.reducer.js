import {
  LOADING_OFF,
  LOADING_ON,
  MODAL_OFF,
  MODAL_ON,
} from "../constants/common.const";

const initialState = {
  isLoading: false,
  isModal: false,
  videoModalId: "",
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

    case MODAL_ON:
      state.videoModalId = payload;
      state.isModal = true;
      return { ...state };
    case MODAL_OFF:
      state.isModal = false;
      return { ...state };

    default:
      return state;
  }
};
