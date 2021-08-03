import axios from "axios";
import { GET_LIST_MOVIE } from "../constants/movie.const";
import { loadingOffAction, loadingOnAction } from "./common.action";

export const getListMovieAction = () => {
  return async (dispatch) => {
    console.log("reducer call API get movie call mở loading");
    dispatch(loadingOnAction());
    try {
      const res = await axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07",
        method: "GET",
      });
      console.log("Movie list:", res.data);
      dispatch({ type: GET_LIST_MOVIE, payload: res.data });
      console.log("reducer call API get movie call tắt loading");
      dispatch(loadingOffAction());
    } catch (error) {
      console.log("LỖI GET_LIST_MOVIE_ACTION:", error);
    }
  };
};
