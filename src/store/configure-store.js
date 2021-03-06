/**
 * Select data from state for roles
 * @module store/configure-store
 */

import {
  compose,
  createStore,
  applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';
import rootReducer from '../reducer';

const sagaMiddleware = createSagaMiddleware();

/**
 * Creating redux store with saga as middleware
 * @returns 
 */
const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;
