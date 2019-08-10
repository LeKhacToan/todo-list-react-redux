import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo, toggleCompleted } from "../redux/actions/index";

class TodoListItem extends Component {


  handleDelete(id) {
    this.props.deleteTodo(id);
  }

  handleChecked(id) {
    this.props.toggleCompleted(id);
  }
  
  render() {
    const { todo } = this.props;
    return (
      <div>
        <li className="collection-item">
          <a href="#modal1" className="black-text">
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
      </div>
    );
  }
}

export default connect(
  null,
  { deleteTodo, toggleCompleted }
)(TodoListItem);
