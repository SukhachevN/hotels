import { HOTELS_FAIL, HOTELS_REQUEST, HOTELS_SUCCESS } from './hotelsType';

const initialState = {
  loading: false,
  hotels: null,
  error: null,
  initialized: false,
};

const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOTELS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case HOTELS_SUCCESS:
      return {
        ...initialState,
        hotels: action.payload,
        initialized: true,
      };
    case HOTELS_FAIL:
      return {
        ...initialState,
        error: action.payload,
        initialized: true,
      };
    default:
      return state;
  }
};

export { hotelsReducer };
