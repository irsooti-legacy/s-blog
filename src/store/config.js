import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { auth, commmon, posts } from './reducers';
import logger from 'redux-logger';
import { rootSaga } from './sagas';

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  common: commmon,
  auth: auth,
  posts
});

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(
      // applyMiddleware(thunk),
      applyMiddleware(sagaMiddleware),
      applyMiddleware(logger)
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
