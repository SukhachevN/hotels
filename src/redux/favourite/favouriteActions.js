import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from './favouriteTypes';

const addToFavourite = (id) => ({
  type: ADD_TO_FAVOURITE,
  payload: id,
});

const removeFromFavourite = (id) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: id,
});

export { addToFavourite, removeFromFavourite };
