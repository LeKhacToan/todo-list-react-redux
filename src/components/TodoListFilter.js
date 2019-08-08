import React, { Component } from "react";
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from "../redux/constants/FilterTypes";
import { connect } from "react-redux";

class TodoListFilter extends Component {

  constructor(props) {
    super(props);
    this.state = {value: SHOW_ALL};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.dispatch({type:e.target.value});
  };

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <select onChange={this.handleChange} >
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
const mapStateToProps = state =>{
    return {
        state: state
    }
}
export default connect(mapStateToProps)(TodoListFilter);
