import axios from "axios";
import { LAY_TT_PHONG_VE } from "../constants/phongVe.const";
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
