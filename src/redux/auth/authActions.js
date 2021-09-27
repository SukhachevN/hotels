import { AUTHENTICATE, INITIALIZE_AUTH, UNAUTHENTICATE } from './authTypes';

const authenticate = () => ({
  type: AUTHENTICATE,
});

const unauthenticate = () => ({
  type: UNAUTHENTICATE,
});

const initializeAuth = (data) => ({
  type: INITIALIZE_AUTH,
  payload: data,
});

export { authenticate, unauthenticate, initializeAuth };
