import {
  ADD_TODO,
  EDIT_TODO,
  TOGGLE_COMPLETED,
  DELETE_TODO
} from "../constants/ActionTypes";

const intialState = [
  {
    id: 1,
    content:
      " 1 sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    completed: true
  },
  {
    id: 2,
    content: " 2 ea molestias quasi exercitationem repellat qui ipsa sit aut",
    completed: false
  },
  {
    id: 3,
    content: "3 dolorem eum magni eos aperiam quia",
    completed: true
  },
  {
    id: 4,
    content: "4 dolorem dolore est ipsam",
    completed: false
  }
];

const todoReducer = (state = intialState, action) => {
  switch (action.type) {

    case ADD_TODO:
      return state.concat({
        id: state[state.length - 1].id + 1,
        content: action.content,
        completed: false
      });
    case EDIT_TODO:
      return state.map(todo => {
        if(todo.id !== action.todo.id) return todo;
        return {...todo,content: action.todo.content}
      })

    case DELETE_TODO:
      return state.filter(todo => {
        return todo.id !== action.id;
      });

    case TOGGLE_COMPLETED:
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }
        return { ...todo, completed: !todo.completed };
      });
      
    default:
      return state;
  }
};
export default todoReducer;
