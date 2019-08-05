import React, { Component } from "react";

class TodoList extends Component {

  render() {
    return (
      <div className="row">
        <ul className="collection">{this.props.children}</ul>
      </div>
    );
  }
}

export default TodoList;
