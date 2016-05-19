
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

import myCounter from './reducers/my-counter';
import anotherCounter from './reducers/another-counter';

import First from './components/first';
import Second from './components/second';

const middleware = [
    thunkMiddleware
];

const store = createStore(combineReducers({
    myCounter,
    anotherCounter
}), applyMiddleware(...middleware));


const app = document.querySelector('#app');
ReactDOM.render(
    <Provider store={store}>
        <div>
            <First />
            <Second />
        </div>
    </Provider>,
    app
);
