import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers/index";

const store = createStore(rootReducer);
const todo = {id: 1, content: "thu edit todo xem sao"}
store.dispatch({type:"EDIT_TODO", todo});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
