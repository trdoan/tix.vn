import {
  LOADING_OFF,
  LOADING_ON,
  MODAL_OFF,
  MODAL_ON,
  THAYDOIDANHSACHPHIM,
} from "../constants/common.const";

export const loadingOnAction = () => {
  return {
    type: LOADING_ON,
  };
};
export const loadingOffAction = () => {
  return {
    type: LOADING_OFF,
  };
};
export const modalOnAction = (videoId) => {
  return {
    type: MODAL_ON,
    payload: videoId,
  };
};
export const modalOffAction = () => {
  return {
    type: MODAL_OFF,
  };
};

export const thayDoiDanhSachPhimAction = () => {
  return {
    type: THAYDOIDANHSACHPHIM,
  };
};
