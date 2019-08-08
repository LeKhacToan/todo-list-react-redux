import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteTodo,
  toggleCompleted,
  changeValueTodo
} from "../redux/actions/index";

class TodoListItem extends Component {
  handleDelete(id) {
    this.props.deleteTodo(id);
  }

  handleChecked(id) {
    this.props.toggleCompleted(id);
  }
  handleChangeEditValue = todo => {
    const { id, content } = todo;
    const todoValue = { id, content };
    this.props.changeValueTodo(todoValue);
  };
  render() {
    const { todo } = this.props;
    return (
      <li className="collection-item">
        <a
          href="#modal1"
          className="modal-trigger black-text"
          onClick={() => this.handleChangeEditValue(todo)}
        >
          {" "}
          {todo.content}{" "}
        </a>
        <label className="right">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => this.handleChecked(todo.id)}
          />
          <span />

          <label className="right">
            <i
              className="material-icons"
              onClick={() => this.handleDelete(todo.id)}
            >
              close
            </i>
          </label>
        </label>
      </li>
    );
  }
}

export default connect(
  null,
  { deleteTodo, toggleCompleted, changeValueTodo }
)(TodoListItem);
