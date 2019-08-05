import React, { Component } from "react";
import { connect } from "react-redux";
import TodoListComponent from "../../components/TodoList.js";
import TodoListItem from "../../components/TodoListItem";

class TodoList extends Component {

  showListItem(todos) {
    var result = "You dont have todo";
    if (todos.length > 0) {
      result = todos.map((todo, index) => {
        return <TodoListItem key={index} todo={todo} />;
      });
    }
    return result;
  }

  render() {
    const { todos } = this.props;
    return (
      <div>
        <TodoListComponent>
          {this.showListItem(todos)}
        </TodoListComponent>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
export default connect(mapStateToProps)(TodoList);
