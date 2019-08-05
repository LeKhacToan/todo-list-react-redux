//import * as types from "../constants/ActionTypes";
const intialState = [
  {
    id: 1,
    content:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    completed: true
  },
  {
    id: 2,
    content: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    completed: false
  },
  {
    id: 3,
    content: "dolorem eum magni eos aperiam quia",
    completed: true
  },
  {
    id: 4,
    content: "dolorem dolore est ipsam",
    completed: false
  }
];
const todoReducer = (state = intialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default todoReducer;
