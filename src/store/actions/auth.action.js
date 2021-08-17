import axios from "axios";

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
      // alert("login successfully");
      history.push("/");
      // console.log(res.data);
    } catch (error) {
      // console.log("thất bại", error.response);
      document.getElementById("notifiLogin").innerHTML = error.response.data;
      document.getElementById("notifiLogin").style.display = "block";
    }
  };
};
export const logoutAction = (history) => {
  history.push("/");
  return { type: LOGOUT };
};
