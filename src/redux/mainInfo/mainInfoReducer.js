import { formatDate } from '../../utils/formatDate';
import { ADD_INFO } from './mainInfoTypes';

const dateNow = new Date();

const initialState = {
  location: 'Москва',
  startDate: formatDate(dateNow),
  endDate: formatDate(dateNow),
};

const mainInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INFO:
      return {
        location: action.payload.location,
        date: action.payload.date,
      };
    default:
      return state;
  }
};

export { mainInfoReducer };
