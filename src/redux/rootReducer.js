import { combineReducers } from 'redux';
import { appReducer } from './app';
import { authReducer } from './auth';
import { hotelsReducer } from './hotels';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  hotels: hotelsReducer,
});

export { rootReducer };
