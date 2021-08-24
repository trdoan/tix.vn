import axios from "axios";
import { reLogin } from "../../pages/dang-nhap/dang-nhap.page";

import { LOGIN, LOGOUT } from "../constants/auth.const";

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
      reLogin(error.response.data);
    }
  };
};
export const logoutAction = (history) => {
  history.push("/");
  return { type: LOGOUT };
};
