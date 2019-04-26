import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as Redux from "redux";
import {combineReducers} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";

const ADD_USER = 'ADD_USER';

const addUser = (name) => {
    return {
        type: ADD_USER,
        user: {name: name}
    }
};

const userReducer = (state = {}, action) => {
    if (action.type === 'ADD_USER') {
        return {...state, user: action.user}
    }
    return state;
};

const widgetReducer = (state = {}, action) => {
    // if (action.type === 'ADD_USER') {
    //     return [...state, action.user]
    // }
    return state;
};

const rootReducer = combineReducers({
    userState: userReducer,
    widgetState: widgetReducer
});

const store = Redux.createStore(rootReducer, composeWithDevTools());

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(addUser('Dan'));

store.dispatch(addUser('Brown'));

