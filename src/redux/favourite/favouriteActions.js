import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from './favouriteTypes';

const addToFavourite = (data) => ({
  type: ADD_TO_FAVOURITE,
  payload: data,
});

const removeFromFavourite = (data) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: data,
});

export { addToFavourite, removeFromFavourite };
