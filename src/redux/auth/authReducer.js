import { AUTHENTICATE, INITIALIZE_AUTH, UNAUTHENTICATE } from './authTypes';

const initialState = {
  auth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_AUTH:
      return {
        auth: action.payload.auth,
      };
    case UNAUTHENTICATE:
      return {
        auth: false,
      };
    case AUTHENTICATE:
      return {
        auth: true,
      };
    default:
      return state;
  }
};

export { authReducer };
