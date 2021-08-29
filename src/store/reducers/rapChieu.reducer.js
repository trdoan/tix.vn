import {
  GET_LIST_HE_THONG_RAP,
  LAY_DANH_SASH_CUM_RAP,
  LAY_TT_LICH_CHIEU_PHIM,
} from "../constants/rapChieu.const";

const initialState = {
  heThongRap: [],
  cumRap: [],
  cumRapChieuPhim: [],
};
export const rapChieuReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LIST_HE_THONG_RAP:
      state.heThongRap = payload;
      return { ...state };
    case LAY_DANH_SASH_CUM_RAP:
      state.cumRap = payload;
      return { ...state };
    case LAY_TT_LICH_CHIEU_PHIM:
      state.cumRapChieuPhim = payload;
      return { ...state };
    default:
      return state;
  }
};
