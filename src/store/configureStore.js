/* @flow */
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import persistState from 'redux-localstorage';
import history from './history';
import reducers from '~reducers';

const middleware = [
  routerMiddleware(history),
  thunkMiddleware,
  promiseMiddleware(),
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(
  persistState('todos'),
  applyMiddleware(...middleware),
);

export default createStore(connectRouter(history)(reducers), enhancer);
