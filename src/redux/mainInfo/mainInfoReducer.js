import { formatDate } from '../../utils/formatDate';
import { ADD_INFO } from './mainInfoTypes';

const dateNow = new Date();

const initialState = {
  location: 'Москва',
  startDate: formatDate(dateNow),
  endDate: '1 день',
};

const mainInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INFO:
      return {
        location: action.payload.location,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
      };
    default:
      return state;
  }
};

export { mainInfoReducer };
