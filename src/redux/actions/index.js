import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED
} from "../constants/ActionTypes";

import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from "../constants/FilterTypes";

export const addTodo = content => {
  return {
    type: ADD_TODO,
    content
  };
};
export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  };
};
export const toggleCompleted = id => {
  return {
    type: TOGGLE_COMPLETED,
    id
  };
};

export const showAll = () => {
    return {
        type: SHOW_ALL
    }
}
export const showActive = () => {
    return {
        type: SHOW_ACTIVE
    }
}

export const showCompleted = () => {
    return {
        type: SHOW_COMPLETED
    }
}

