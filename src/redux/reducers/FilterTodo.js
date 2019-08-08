import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from "../constants/FilterTypes.js";

const intialState = {
  filter: SHOW_ALL
};

const filterReducer = (state = intialState, action) => {
  switch (action.type) {
    case SHOW_ALL:
      return {
        filter: SHOW_ALL
      };

    case SHOW_ACTIVE:
      return {
        filter: SHOW_ACTIVE
      };

    case SHOW_COMPLETED:
      return {
        filter: SHOW_COMPLETED
      };

    default:
      return state;
  }
};

export default filterReducer;
