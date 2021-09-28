import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from './favouriteTypes';

const initialState = [];

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return [...state, action.payload];
    case REMOVE_FROM_FAVOURITE:
      return [...state].filter((hotelId) => action.payload !== hotelId);
    default:
      return state;
  }
};

export { favouriteReducer };
