import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import counterReducer from './store/reducers/counter';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  ctr: counterReducer
});

const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware dispatching]', action);
      const result = next(action);
      console.log('[Middleware next action]', store.getState());
      return result;
    }
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
