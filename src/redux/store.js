import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './rootReducer';
import { updateAuthLocalStorage } from './auth';
import { appMiddleware } from './app';

const store = createStore(
  rootReducer,
  applyMiddleware(logger, appMiddleware, updateAuthLocalStorage)
);

export { store };
