// The sessionErrorsReducer should listen for 2 action types and respond to them like so:

// RECEIVE_SESSION_ERRORS - sets errors to the action's errors
// RECEIVE_CURRENT_USER - clears the errors

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;
