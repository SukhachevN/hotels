import { LOAD_APP, APP_LOADED } from './appTypes';

const initialState = {
  initialized: false,
  auth: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_APP:
      return {
        ...initialState,
      };
    case APP_LOADED:
      return {
        initialized: true,
        auth: action.payload,
      };

    default:
      return state;
  }
};

export { appReducer };
