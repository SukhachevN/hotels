import { ADD_INFO } from './mainInfoTypes';

const addInfo = (info) => ({
  type: ADD_INFO,
  payload: info,
});

export { addInfo };
