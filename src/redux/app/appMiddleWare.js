import { appLoaded } from './appActions';
import { LOAD_APP } from './appTypes';

const emptyState = false;
const authKey = 'auth';
const favouriteKey = 'favouriteHotels';
const emptyFavourite = {
  idList: [],
  dataList: [],
};

function appMiddleware({ dispatch }) {
  return (next) => (action) => {
    switch (action.type) {
      case LOAD_APP: {
        const authValue = window.localStorage.getItem(authKey);
        const favouriteValue = window.localStorage.getItem(favouriteKey);
        const favourite = JSON.parse(favouriteValue) || emptyFavourite;
        const auth = JSON.parse(authValue) || emptyState;
        return dispatch(
          appLoaded({
            auth: auth,
            favourite: favourite,
          })
        );
      }
      default:
        return next(action);
    }
  };
}

export { appMiddleware };
