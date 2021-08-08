import axios from "axios";
import { GET_DETAIL_MOVIE, GET_LIST_MOVIE } from "../constants/movie.const";
import { loadingOffAction, loadingOnAction } from "./common.action";

export const getListMovieAction = (maNhomPhim = "GP07") => {
  return async (dispatch) => {
    console.log("reducer call API get movie call mở loading");
    dispatch(loadingOnAction());
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhomPhim}`,
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
export const getDetailMovieAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
        method: "GET",
      });
      console.log("chi tiet phim: ", res.data);
      dispatch({ type: GET_DETAIL_MOVIE, payload: res.data });
    } catch (err) {
      console.log("Lỗi getDetailMovie", err);
    }
  };
};
