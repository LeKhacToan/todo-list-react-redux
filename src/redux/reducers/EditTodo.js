import { CHANGE_VALUE_TODO } from "../constants/EditTypes.js";
const intialState = {
  id: null,
  content: "sao kong dc nhi"
};

const EditTodoReducer = (state = intialState, action) => {
  switch (action.type) {
      case CHANGE_VALUE_TODO:
          return {
              id: action.todo.id,
              content: action.todo.content
          }
    default:
      return state;
  }
};
export default EditTodoReducer;
