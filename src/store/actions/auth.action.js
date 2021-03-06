import axios from "axios";

import { LOGIN, LOGOUT } from "../constants/auth.const";

import { getListMovieAction } from "./movie.action";

export const loginAction = (user, history) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: user,
      });
      dispatch({ type: LOGIN, payload: res.data });

      history.push("/");
    } catch (error) {
      document.getElementById(
        "notiMessage"
      ).innerHTML = `(*) ${error.response.data}`;
      // reLogin(error.response.data);
    }
  };
};
export const logoutAction = (history) => {
  return (dispatch) => {
    history.push("/");
    dispatch(getListMovieAction());
    return { type: LOGOUT };
  };
};
