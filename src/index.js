import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as Redux from "redux";
import {applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import currencyReducer from "./app/home/converter/reducers";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    currenciesState: currencyReducer
});

const store = Redux.createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);



