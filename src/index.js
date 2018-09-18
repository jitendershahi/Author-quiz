import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import { BrowserRouter, Route} from 'react-router-dom'

import { createStore, applyMiddleware, compose } from 'redux';
import Reducer from './Actions/Reducers'

import thunk from 'redux-thunk'
import { AddAuthorForm } from './components/AddForm/AddForm';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(Reducer, composeEnhancers(
    applyMiddleware(thunk)
))

const appRoute = (
    <Provider store={store}>
        <BrowserRouter>
            <React.Fragment>
                <Route exact path="/" component={App} />
                <Route path="/add" component={AddAuthorForm} />
                {/* <App /> */}
            </React.Fragment>
        </BrowserRouter>
    </Provider>
)


ReactDOM.render(appRoute, document.getElementById('root'));
registerServiceWorker();
