import TodoList from "./redux/containers/TodoList";
import TodoTextInput from "./components/TodoTextInput";
import TodoListFilter from "./redux/containers/TodoFilter";
import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

class App extends Component {

  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
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
