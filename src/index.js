import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "bootstrap/dist/css/bootstrap.min.css";

import {createStore} from "redux"
import { Provider } from 'react-redux';
import allReducers from "./reducers/index";

import {createLogger} from "redux-logger"

// const logger=ReduxLogger.createLogger()

const store=createStore(allReducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// console.log(store.getState())
// import { createStore, combineReducers } from 'redux';
// import { reducer as reduxFormReducer } from 'redux-form';

// const reducer = combineReducers({
//   form: reduxFormReducer, // mounted under "form"
// });
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
