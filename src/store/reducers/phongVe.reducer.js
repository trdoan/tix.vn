import { CHON_GHE, LAY_TT_PHONG_VE } from "../constants/phongVe.const";

const initialState = {
  thongTinPhongVe: {},
  danhSachGhe: [],
};

export const phongVeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LAY_TT_PHONG_VE:
      state.thongTinPhongVe = payload;
      state.danhSachGhe = state.thongTinPhongVe.danhSachGhe;
      return { ...state };
    case CHON_GHE:
      let newDSGhe = [...state.danhSachGhe];
      let index = newDSGhe.findIndex((ghe) => ghe.maGhe === payload.maGhe);
      // console.log(index);
      let oldChair = newDSGhe[index];
      let newChair = { ...oldChair, dangChon: !oldChair.dangChon };
      // console.log(newChair);
      newDSGhe[index] = newChair;
      state.danhSachGhe = newDSGhe;
      return { ...state };

    default:
      return state;
  }
};
