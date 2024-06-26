import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
// import { store } from './app/store';
import { MemoryRouter } from "react-router-dom";
import middleware from "../middleware";
import reducer from "../reducers";
import App from "../components/App";
import { createStore } from "redux";

const store = createStore(reducer, middleware);

test("renders learn react link", () => {
  var component = render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );

  expect(component).toMatchSnapshot();
});
