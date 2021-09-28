import {
  HOTELS_FAIL,
  HOTELS_REQUEST,
  HOTELS_SUCCESS,
  HOTELS_REQUEST_FETCH,
} from './hotelsType';

const fetchHotelsRequest = () => ({
  type: HOTELS_REQUEST,
});

const fetchHotelsSuccess = (hotels) => ({
  type: HOTELS_SUCCESS,
  payload: hotels,
});

const fetchHotelsFail = (error) => ({
  type: HOTELS_FAIL,
  payload: error,
});

const fetchHotelsRequestFetch = () => ({
  type: HOTELS_REQUEST_FETCH,
});

export {
  fetchHotelsRequest,
  fetchHotelsSuccess,
  fetchHotelsFail,
  fetchHotelsRequestFetch,
};
