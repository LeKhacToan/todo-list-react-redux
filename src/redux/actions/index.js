import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED
} from "../constants/ActionTypes";

//crud todo action
export const addTodo = content => {
  return {
    type: ADD_TODO,
    content
  };
};

export const editTodo = todo => {
  return {
    type: EDIT_TODO,
    todo
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
