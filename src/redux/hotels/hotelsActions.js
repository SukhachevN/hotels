import {
  HOTELS_FAIL,
  HOTELS_REQUEST,
  HOTELS_SUCCESS,
  HOTELS_REQUEST_FETCH,
} from './hotelsType';

const fetchHotelsRequest = (data) => ({
  type: HOTELS_REQUEST,
  payload: data,
});

const fetchHotelsSuccess = (hotels) => ({
  type: HOTELS_SUCCESS,
  payload: hotels,
});

const fetchHotelsFail = (error) => ({
  type: HOTELS_FAIL,
  payload: error,
});

const fetchHotelsRequestFetch = (data) => ({
  type: HOTELS_REQUEST_FETCH,
  payload: data,
});

export {
  fetchHotelsRequest,
  fetchHotelsSuccess,
  fetchHotelsFail,
  fetchHotelsRequestFetch,
};
