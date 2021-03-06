import TodoList from "./redux/containers/TodoList";
import TodoTextInput from "./components/TodoTextInput";
import TodoListFilter from "./redux/containers/TodoFilter";
import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

class App extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div className="container">
        <h2 className="center">Todo's</h2>
        <TodoTextInput />
        <TodoListFilter />
        <TodoList />
      </div>
    );
  }
}

export default App;
