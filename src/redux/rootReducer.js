import { combineReducers } from 'redux';
import { appReducer } from './app';
import { authReducer } from './auth';
import { favouriteReducer } from './favourite';
import { hotelsReducer } from './hotels';
import { mainInfoReducer } from './mainInfo';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  hotels: hotelsReducer,
  mainInfo: mainInfoReducer,
  favourite: favouriteReducer,
});

export { rootReducer };
