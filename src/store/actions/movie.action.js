import axios from "axios";

import {
  GET_DETAIL_MOVIE,
  GET_LIST_MOVIE,
  GET_MOVIE_2,
  LAY_THONG_TIN_LICH_CHIEU_PHIM,
} from "../constants/movie.const";
import { loadingOffAction, loadingOnAction } from "./common.action";

export const getListMovieAction = () => {
  return async (dispatch) => {
    dispatch(loadingOnAction());
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07`,
        method: "GET",
      });
      dispatch({ type: GET_LIST_MOVIE, payload: res.data });
      setTimeout(() => dispatch(loadingOffAction()), 2000);
    } catch (error) {
      console.log("LỖI GET_LIST_MOVIE_ACTION:", error);
    }
  };
};
export const getListMovieAction2 = () => {
  return async (dispatch) => {
    // dispatch(loadingOnAction());
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP08`,
        method: "GET",
      });
      await dispatch({ type: GET_MOVIE_2, payload: res.data });
      // dispatch(loadingOffAction());
    } catch (error) {
      console.log(error);
    }
  };
};
export const getDetailMovieAction = (maPhim) => {
  return async (dispatch) => {
    dispatch(loadingOnAction());
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
        method: "GET",
      });

      dispatch({ type: GET_DETAIL_MOVIE, payload: res.data });
      dispatch(loadingOffAction());
    } catch (err) {
      // dispatch(loadingOffAction());
    }
  };
};

export const getLichChieuPhimCumRap = (maHeThongRap) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP10
        `,
        method: "GET",
      });
      dispatch({ type: LAY_THONG_TIN_LICH_CHIEU_PHIM, payload: res.data });
    } catch (error) {
      console.log(error.response.data);
    }
  };
};
