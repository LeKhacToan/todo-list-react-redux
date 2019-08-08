import React, { Component } from "react";
import { connect } from "react-redux";

class TodoListEdit extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ""
    }
  }
 
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      value: e.target.value
    });
  }

  // handleSubmit(e) {
  //   if (this.state.value !== "") {
  //     const todo = {id: this.props.todoValue.id, content: this.state.value}
  //     this.props.dispatch({type:"EDIT_TODO", todo})
  //   }
  // }
  render() {
    console.log(this.props.todoValue.content);
    return (
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>Edit todo</h4>
          <div className="input-field col s12">
            <input
              type="text"
              id="autocomplete-input"
              className="autocomplete"
              value ={this.state.value}
              onChange={this.handleChange}
            />
            <p className="red-text">Khong duoc rong</p>
            <label htmlFor="autocomplete-input">Edit todo</label>
          </div>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-light btn" >
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

const mapStateToProps = state => {
  return {
    todoValue: state.editValue
  };
};
export default connect(mapStateToProps)(TodoListEdit);
