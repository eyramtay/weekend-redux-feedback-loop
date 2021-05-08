import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const surveryReducer = ( state = {}, action ) => {
    if (action.type === 'sendFeeling') {
        state = {...state, feeling: action.payload}
    }
    if (action.type === 'sendUnderstanding') {
        state = {...state, understanding: action.payload}
    }
    if (action.type === 'sendSupport') {
        state = {...state, support: action.payload}
    }
    if (action.type === 'sendComments') {
        state = {...state, comments: action.payload}
    }
    return state;

}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
