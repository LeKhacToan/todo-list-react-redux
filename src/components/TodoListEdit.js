import React, { Component } from "react";

class TodoListEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.todo.content
    };
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  // handleSubmit(e) {
  //   if (this.state.value !== "") {
  //     const todo = {id: this.props.todoValue.id, content: this.state.value}
  //     this.props.dispatch({type:"EDIT_TODO", todo})
  //   }
  // }
  render() {
    return (
      <div id={"modal" + this.props.todo.id} className="modal">
        <div className="modal-content">
          <h4>Edit todo {this.props.todo.id}</h4>
          <div className="input-field col s12">
            <input
              type="text"
              id="autocomplete-input"
              className="autocomplete"
              value={this.state.value}
              onChange={this.handleChange}
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
          <a
            className="modal-close waves-effect  waves-light btn red"
            href="#!"
          >
            Cancel
          </a>
        </div>
      </div>
    );
  }
}

export default TodoListEdit;
