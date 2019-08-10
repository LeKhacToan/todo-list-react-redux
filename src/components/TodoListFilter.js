import React, { Component } from "react";
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from "../redux/constants/FilterTypes";

class TodoListFilter extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);   
  }

 

  handleChange(e) {
    const value = e.target.value;
    if (value === SHOW_ACTIVE) this.props.actions.showActive();
    else if (value === SHOW_COMPLETED) this.props.actions.showCompleted();
    else if (value === SHOW_ALL) this.props.actions.showAll();
  }

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <select onChange={this.handleChange}>
            <option value={SHOW_ALL}>All</option>
            <option value={SHOW_ACTIVE}>Active</option>
            <option value={SHOW_COMPLETED}>Completed</option>
          </select>
          <label>Filter todo</label>
        </div>
      </div>
    );
  }
}

export default TodoListFilter;
