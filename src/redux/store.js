import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import { updateAuthLocalStorage } from './auth';
import { appMiddleware } from './app';
import { watchHotels } from './hotels';
import { updateFavouriteLocalStorage } from './favourite/favouriteMiddleWare';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(
    logger,
    appMiddleware,
    updateAuthLocalStorage,
    updateFavouriteLocalStorage,
    sagaMiddleware
  )
);

sagaMiddleware.run(watchHotels);

export { store };
