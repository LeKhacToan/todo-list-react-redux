import React, { Component } from "react";

class TodoListItem extends Component {
  render() {
    const { todo } = this.props;
    return (
      <li className="collection-item">
        {todo.content}
        <label className="right">
          <input type="checkbox" defaultChecked={todo.completed} />
          <span />
          <label className="right">
            <i className="material-icons">close</i>
          </label>
        </label>
      </li>
    );
  }
}

export default TodoListItem;
