import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { auth, commmon } from './reducers';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootSaga } from './sagas';

let composeEnhancers = compose;

composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  common: commmon,
  auth: auth
});

const myMiddleware = store => next => action => {
  const result = next(action);
  console.table(action);
  return result;
};

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk),
      applyMiddleware(sagaMiddleware),
      applyMiddleware(logger),
      applyMiddleware(myMiddleware)
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
