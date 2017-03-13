/**
 * src/store/configureStore.js
 */
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from '../reducers';

const logger = createLogger();
const vanillaPromise = store => next => action => {
  if (typeof action.then !== 'function') {
    return next(action);
  }

  return Promise.resolve(action).then(store.dispatch);
};

let createStoreWithMiddleware;

if (process.env.NODE_ENV === 'production') {
  createStoreWithMiddleware = applyMiddleware(
    vanillaPromise,
    ReduxThunk,
  )(createStore);
}
else {
  createStoreWithMiddleware = applyMiddleware(
    vanillaPromise,
    ReduxThunk,
    logger,
  )(createStore);
}

/**
 * @name configureStore
 * @param  {Object} initialState
 * @return {Object}
 */
export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  return store;
}
