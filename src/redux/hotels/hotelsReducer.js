import { HOTELS_FAIL, HOTELS_REQUEST, HOTELS_SUCCESS } from './hotelsType';

const initialState = {
  loading: false,
  hotels: null,
  error: null,
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
      };
    case HOTELS_FAIL:
      return {
        ...initialState,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { hotelsReducer };
