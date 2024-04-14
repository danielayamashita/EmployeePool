


import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
// import { store } from './app/store';
import { MemoryRouter } from 'react-router'; 
import middleware from "../middleware"
import reducer from "../reducers";
import NewPool from "../components/NewPool"
import { createStore } from "redux";



const store = createStore(reducer,middleware);

store["authedUser"] = "mtsamis"

describe("NewPool", () => {
    it('renders NewPool component', () => {
    var component  = render(
        <MemoryRouter>
        <Provider store={store}>
        <NewPool />
        </Provider>
        </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
    });




});






