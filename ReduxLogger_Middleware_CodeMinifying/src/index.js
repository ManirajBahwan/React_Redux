import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import counterReducer from './reducers/counterReducer';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import loggerMiddleware from "./middleware/loggerMiddleware";
import logger from "redux-logger"
//const appStore=createStore(counterReducer, composeWithDevTools());
const appStore=createStore(
    counterReducer, composeWithDevTools(applyMiddleware(loggerMiddleware,logger))
);

ReactDOM.render(<Provider store={appStore}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
