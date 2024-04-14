import React from "react";
import "./css/index.css";
import { Provider } from "react-redux";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import middleware from "./middleware";
import reducer from "./reducers";
import { createRoot } from 'react-dom/client';

const store = createStore(reducer,middleware);


// After
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>);

