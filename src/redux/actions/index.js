import {ADD_TODO, ACTIVE_TYPE, COMPLETE, DELETE_TODO} from "../constants/ActionTypes";
export const addTodo = (content) => {
    return {
        type: ADD_TODO,
        content
    }
}
export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        id
    }
}