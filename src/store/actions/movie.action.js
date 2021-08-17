import axios from "axios";

import {
  GET_DETAIL_MOVIE,
  GET_LIST_MOVIE,
  GET_MOVIE_2,
} from "../constants/movie.const";
import { loadingOffAction, loadingOnAction } from "./common.action";

export const getListMovieAction = () => {
  return async (dispatch) => {
    console.log("reducer call API get movie call mở loading");
    dispatch(loadingOnAction());
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07`,
        method: "GET",
      });
      console.log("SET MOVIELIST  TỪ API VÀO STORE:", res.data);
      dispatch({ type: GET_LIST_MOVIE, payload: res.data });
      console.log("reducer call API get movie call tắt loading");
      dispatch(loadingOffAction());
    } catch (error) {
      console.log("LỖI GET_LIST_MOVIE_ACTION:", error);
    }
  };
};
export const getListMovieAction2 = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP08`,
        method: "GET",
      });
      console.log("SET MOVIELIST  TỪ API VÀO STORE:", res.data);
      dispatch({ type: GET_MOVIE_2, payload: res.data });
      console.log("reducer call API get movie call tắt loading");
      dispatch(loadingOffAction());
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
      dispatch(loadingOffAction());
    }
  };
};
