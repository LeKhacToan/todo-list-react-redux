import React, { Component } from "react";
import { ADD_TODO } from "../redux/constants/ActionTypes";
import { connect } from "react-redux";

class TodoTextInput extends Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = e => {
    if(e.charCode === 13){
      this.props.dispatch({type:ADD_TODO, content: this.state.value})
      e.preventDefault();
      this.setState({
        value:''
      })
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                id="autocomplete-input"
                className="autocomplete"
                value={this.state.value}
                onChange={this.handleChange}
                onKeyPress={this.handleSubmit}
              />
              <label htmlFor="autocomplete-input">Create new todo</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(TodoTextInput);
