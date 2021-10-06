import axios from "axios";
import { CHON_GHE, LAY_TT_PHONG_VE } from "../constants/phongVe.const";
import { loadingOffAction, loadingOnAction } from "./common.action";

export const layThongTinPhongVe = (maLichChieu) => {
  return async (dispatch) => {
    dispatch(loadingOnAction());
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}
            `,
        method: "GET",
      });
      dispatch({ type: LAY_TT_PHONG_VE, payload: res.data });
      dispatch(loadingOffAction());
    } catch (error) {}
  };
};
export const datVeAction = (...params) => {
  const [maLichChieu, danhSachGhe, user] = params;
  const { accessToken } = user;
  const gheDangChon = danhSachGhe.filter((ghe) => ghe.dangChon);
  const { taiKhoan } = user;
  return async (dispatch) => {
    try {
      const res = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
        method: "POST",

        data: {
          maLichChieu,
          danhSachVe: gheDangChon,
          taiKhoanNguoiDung: taiKhoan,
        },
        headers: {
          Authorization: `Bearer ${accessToken}  `,
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log("lỗi api đặt vé", error);
    }
  };
};
export const chonGheAction = (chair) => {
  return {
    type: CHON_GHE,
    payload: chair,
  };
};
