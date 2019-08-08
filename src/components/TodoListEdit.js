import React, { Component } from "react";

class TodoListEdit extends Component {
  render() {
    return (
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>Edit todo</h4>
          <div className="input-field col s12">
            <input
              type="text"
              id="autocomplete-input"
              className="autocomplete"
            />
            <p className="red-text">Khong duoc rong</p>
            <label htmlFor="autocomplete-input">Edit todo</label>
          </div>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-light btn">
            Save
          </a>
          <span> </span>
          <a className="modal-close waves-effect  waves-light btn red" href="#!">
            Cancel
          </a>
        </div>
      </div>
    );
  }
}

export default TodoListEdit;
