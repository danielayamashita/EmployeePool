import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import { Provider } from "react-redux";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import middleware from "./middleware";
import reducer from "./reducers";

const store = createStore(reducer,middleware);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
