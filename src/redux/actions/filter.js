import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from "../constants/FilterTypes";
//filter action
export const showAll = () => {
  return {
    type: SHOW_ALL
  };
};
export const showActive = () => {
  return {
    type: SHOW_ACTIVE
  };
};

export const showCompleted = () => {
  return {
    type: SHOW_COMPLETED
  };
};
