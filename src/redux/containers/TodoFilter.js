import React, { Component } from "react";
import { connect } from "react-redux";

class TodoFilter extends Component {
    
  render() {
    return (
        <div>

        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    filter: state.filter.filter
  };
};
export default connect(mapStateToProps)(TodoFilter);
