import { appLoaded } from './appActions';
import { LOAD_APP } from './appTypes';

const emptyState = {
  auth: false,
};

const authKey = 'auth';

function appMiddleware({ dispatch }) {
  return (next) => (action) => {
    switch (action.type) {
      case LOAD_APP: {
        const authValue = window.localStorage.getItem(authKey);
        const auth = authValue || emptyState;
        return dispatch(
          appLoaded({
            auth: auth,
          })
        );
      }
      default:
        return next(action);
    }
  };
}

export { appMiddleware };
