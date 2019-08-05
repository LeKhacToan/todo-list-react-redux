import React, { Component } from "react";

class TodoTextInput extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input type="text" id="autocomplete-input" className="autocomplete" />
              <label htmlFor="autocomplete-input">Create new todo</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoTextInput;
