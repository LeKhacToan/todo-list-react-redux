import { combineReducers } from "redux";
import todos from "./Todos";
import filter from "./FilterTodo";
import editValue from "./EditTodo.js";

const rootReducer = combineReducers({
  todos,
  filter,
  editValue
});

export default rootReducer;
