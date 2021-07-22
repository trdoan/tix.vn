import { LOADING_OFF, LOADING_ON } from "../constants/common.const";

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
