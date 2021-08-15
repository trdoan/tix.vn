import { LOGIN } from "../constants/auth.const";

const initialState = {
  user: {},
  isLogin: false,
};
export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      state.user = payload;
      state.isLogin = true;
      return { ...state };

    default:
      return state;
  }
};
