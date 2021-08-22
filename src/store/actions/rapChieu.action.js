import axios from "axios";
import {
  GET_LIST_HE_THONG_RAP,
  LAY_DANH_SASH_CUM_RAP,
  LAY_THONG_TIN_LICH_CHIEU_RAP,
} from "../constants/rapChieu.const";
import { loadingOffAction, loadingOnAction } from "./common.action";

export const getListHeThongRapAction = () => {
  return async (dispatch) => {
    // dispatch(loadingOnAction());
    try {
      const res = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
        method: "GET",
      });
      dispatch({ type: GET_LIST_HE_THONG_RAP, payload: res.data });
      // dispatch(loadingOffAction());
    } catch (error) {
      //   dispatch(loadingOffAction());
      console.log(error);
    }
  };
};
// cụm rạp
export const getThongTinCumRap = (maHeThongRap = "BHD") => {
  return async (dispatch) => {
    // dispatch(loadingOnAction());
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}
        `,
        method: "GET",
      });
      dispatch({ type: LAY_DANH_SASH_CUM_RAP, payload: res.data });
      //   dispatch(loadingOffAction());
    } catch (error) {
      //   dispatch(loadingOffAction());
      console.log(error);
    }
  };
};
export const getThongTinLichChieuRap = (maHeThongRap) => {
  return async (dispatch) => {
    // dispatch(loadingOnAction());
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01
        `,
        method: "GET",
      });
      dispatch({ type: LAY_THONG_TIN_LICH_CHIEU_RAP, payload: res.data });
      //   dispatch(loadingOffAction());
    } catch (error) {
      //   dispatch(loadingOffAction());
      console.log(error);
    }
  };
};
