import { AUTHENTICATE, INITIALIZE_AUTH, UNAUTHENTICATE } from './authTypes';

const initialState = {
  auth: false,
  initialized: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_AUTH:
      return {
        auth: action.payload.auth,
        initialized: true,
      };
    case UNAUTHENTICATE:
      return {
        ...state,
        auth: false,
      };
    case AUTHENTICATE:
      return {
        ...state,
        auth: true,
      };
    default:
      return state;
  }
};

export { authReducer };
