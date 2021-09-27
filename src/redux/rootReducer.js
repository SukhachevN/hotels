import { combineReducers } from 'redux';
import { appReducer } from './app';
import { authReducer } from './auth';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});

export { rootReducer };
