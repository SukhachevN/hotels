import { AUTHENTICATE, INITIALIZE_AUTH, UNAUTHENTICATE } from './authTypes';

const authKey = 'auth';

function updateAuthLocalStorage({ getState }) {
  return (next) => (action) => {
    const returnValue = next(action);
    const { auth } = getState();
    switch (action.type) {
      case INITIALIZE_AUTH:
        window.localStorage.setItem(authKey, auth.auth);
        break;
      case AUTHENTICATE:
        window.localStorage.setItem(authKey, auth.auth);
        break;
      case UNAUTHENTICATE:
        window.localStorage.setItem(authKey, auth.auth);
        break;
      default:
        break;
    }
    return returnValue;
  };
}

export { updateAuthLocalStorage };
