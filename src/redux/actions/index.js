import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED
} from "../constants/ActionTypes";

import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from "../constants/FilterTypes";
import { CHANGE_VALUE_TODO } from "../constants/EditTypes.js";

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
export const changeValueTodo = (todo) => {
  return {
    type: CHANGE_VALUE_TODO,
    todo
  };
};
