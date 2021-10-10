import axios from "axios";
import { NotificationModal } from "../../components/NotificationModal/NotificationModal";
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
  console.log(gheDangChon.length === 0);
  const { taiKhoan } = user;
  return async (dispatch) => {
    try {
      if (gheDangChon.length === 0) {
        NotificationModal("error", "Danh sách ghế trống");
      } else {
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
        NotificationModal("success", "Đặt vé thành công");
        document
          .getElementsByClassName("btnConfirm")[0]
          .addEventListener("click", () => {
            dispatch(layThongTinPhongVe(maLichChieu));
          });
      }
    } catch (error) {
      console.log("lỗi api đặt vé", error);
      NotificationModal("error", "Lỗi hệ thống");
    }
  };
};
export const chonGheAction = (chair) => {
  return {
    type: CHON_GHE,
    payload: chair,
  };
};
