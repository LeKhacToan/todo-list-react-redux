import React, { Component } from "react";
import TodoListFilterComponent from "../../components/TodoListFilter.js";
import { showActive, showAll, showCompleted } from "../actions/index";
import { connect } from "react-redux";

class TodoFilter extends Component {
  render() {
    return (
      <div>
        <TodoListFilterComponent showAll={this.props.showAll} showActive= {this.props.showActive} showCompleted = {this.props.showCompleted} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filter: state.filter.filter
  };
};
export default connect(
  mapStateToProps,
  { showActive, showAll, showCompleted }
)(TodoFilter);
