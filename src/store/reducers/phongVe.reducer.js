import { LAY_TT_PHONG_VE } from "../constants/phongVe.const";

const initialState = {
  thongTinPhongVe: {},
};

export const phongVeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LAY_TT_PHONG_VE:
      state.thongTinPhongVe = payload;
      return { ...state };

    default:
      return state;
  }
};
