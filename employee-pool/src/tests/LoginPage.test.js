import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import LoginPage from '../components/LoginPage';

import { Provider } from 'react-redux';

import { MemoryRouter } from 'react-router'; 
import middleware from "../middleware"
import reducer from "../reducers";

import { createStore } from "redux";
import '@testing-library/jest-dom'


const store = createStore(reducer,middleware);

describe('LoginPage', () => {
    it('will display an error if the name is not provided.', () => {
        var component = render(<MemoryRouter>
            <Provider store={store}>
            <LoginPage />
            </Provider>
            </MemoryRouter>);

        var submitButton = component.getByTestId('btn-submit');
        fireEvent.click(submitButton);
        expect(component.getByTestId('error-msg-login')).toBeInTheDocument();
    });

    it('will erase the form field when submit button is clicked.', () => {
        var component = render(<MemoryRouter>
            <Provider store={store}>
            <LoginPage />
            </Provider>
            </MemoryRouter>);

        var input = component.getByTestId('input-name');        
        fireEvent.change(input, { target: { value: 'mtsamis' } });
        
        var input = component.getByTestId('input-password');        
        fireEvent.change(input, { target: { value: 'xyz123' } });
        var submitButton = component.getByTestId('btn-submit');

        setTimeout(fireEvent.click(submitButton),1000);
        
        
        
        var input = component.getByTestId('input-name')
        expect(input).toHaveValue('');  
        var input = component.getByTestId('input-password')
        expect(input).toHaveValue('');  
    });

    it('There are filds for input name.', () => {
        var component = render(<MemoryRouter>
            <Provider store={store}>
            <LoginPage />
            </Provider>
            </MemoryRouter>);

        var input = component.getByTestId('input-name');        
        expect(input).toBeInTheDocument();
        
        
        
        
    });
});