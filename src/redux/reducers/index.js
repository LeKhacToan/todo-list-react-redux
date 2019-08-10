import { combineReducers } from "redux";
import todos from "./Todos";
import filter from "./FilterTodo";


const rootReducer = combineReducers({
  todos,
  filter,
});

export default rootReducer;
