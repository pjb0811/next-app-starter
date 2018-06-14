import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';
import { createLogger } from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const initializeStore = initialState => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(sagaMiddleware, createLogger())
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.runSagaTask();
  return store;
};

export default initializeStore;
