import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { auth, commmon } from './reducers';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

let composeEnhancers = compose;

composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  common: commmon,
  auth: auth
});

const configureStore = () => {
  return createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk),
      applyMiddleware(logger),
      applyMiddleware(createSagaMiddleware())
    )
  );
};

export default configureStore;
