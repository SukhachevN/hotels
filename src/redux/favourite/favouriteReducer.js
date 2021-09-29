import {
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  INITIALIZE_FAVOURITE,
} from './favouriteTypes';

const initialState = {
  idList: [],
  dataList: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        idList: [...state.idList, action.payload.id],
        dataList: [...state.dataList, action.payload.data],
      };
    case REMOVE_FROM_FAVOURITE:
      return {
        idList: [...state.idList, action.payload.id].filter(
          (hotelId) => action.payload.id !== hotelId
        ),
        dataList: [...state.dataList, action.payload.data].filter(
          (hotel) => action.payload.id !== hotel.hotelId
        ),
      };
    case INITIALIZE_FAVOURITE:
      return {
        idList: action.payload.idList,
        dataList: action.payload.dataList,
      };

    default:
      return state;
  }
};

export { favouriteReducer };
