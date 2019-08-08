import React, { Component } from "react";
import { connect } from "react-redux";
import TodoListComponent from "../../components/TodoList.js";
import TodoListItem from "../../components/TodoListItem";
import {SHOW_ACTIVE, SHOW_COMPLETED} from "../constants/FilterTypes";

class TodoList extends Component {


  showListItem(todoList) {

    var result = "You dont have todo";
    if (todoList.length > 0) {
      result = todoList.map((todo, index) => {
        return (
        <TodoListItem key={index} todo={todo} />  );
      });
    }
    return result;
  }

  filerTodo(todos) {

    const { filter } = this.props;

    if(filter === SHOW_ACTIVE) {
      return todos.filter(todo => {
        return todo.completed === false;
      })
    }
    if(filter === SHOW_COMPLETED) {
      return todos.filter(todo => {
        return todo.completed === true;
      })
    }
    return todos;
  }

  render() {

    const { todos } = this.props;
    const todoList = this.filerTodo(todos);
    return (
      <div>
        <TodoListComponent>{this.showListItem(todoList)}</TodoListComponent>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.filter.filter,
  };
};
export default connect(mapStateToProps)(TodoList);
