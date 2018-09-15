import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose } from 'redux';
import Reducer from './Actions/Reducers'

import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(Reducer, composeEnhancers(
    applyMiddleware(thunk)
))

const appRoute = (
    <Provider store={store}>
         <App />
    </Provider>
)


ReactDOM.render(appRoute, document.getElementById('root'));
registerServiceWorker();
