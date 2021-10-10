import { LOGIN, LOGOUT } from "../constants/auth.const";

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
      localStorage.setItem("user", JSON.stringify(payload));
      return { ...state };
    case LOGOUT:
      state.user = {};
      state.isLogin = false;
      return { ...state };
    default:
      return state;
  }
};
