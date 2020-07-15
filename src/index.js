import React from 'react';
import ReactDOM from 'react-dom';
// importing createStore, carReducer, provider
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from './reducers/carReducer';

import 'bulma/css/bulma.css';
import './styles.scss';

import App from './App';

const store = createStore(reducer);
console.log("This is my state:", store.getState());


const rootElement = document.getElementById('root');
ReactDOM.render(
    // wrapping and passing props
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement);
