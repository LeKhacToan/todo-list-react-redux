import React from "react";
import TodoList from "./redux/containers/TodoList";
import TodoTextInput from "./components/TodoTextInput";
function App() {
  return (
    <div className="container">
      <h2 className="center">Todo's</h2>
      <TodoTextInput/>
      <TodoList/>
    </div>
  );
}

export default App;
