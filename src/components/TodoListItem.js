import React, { Component } from "react";
import { connect } from "react-redux";
import { DELETE_TODO,TOGGLE_COMPLETED } from "../redux/constants/ActionTypes";


class TodoListItem extends Component {

  handleDelete(id) {
    this.props.dispatch({type: DELETE_TODO, id});
  }

  handleChecked(id) {
    this.props.dispatch({type:TOGGLE_COMPLETED,id});
  }

  render() {
    const { todo } = this.props;
    return (
      <li className="collection-item">
        {todo.content}
        <label className="right">
          <input type="checkbox" defaultChecked={todo.completed} onChange={() => this.handleChecked(todo.id)} />
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

export default connect()(TodoListItem);
