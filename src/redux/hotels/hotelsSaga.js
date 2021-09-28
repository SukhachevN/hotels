import { takeLatest, put, call, take } from 'redux-saga/effects';
import {
  fetchHotelsSuccess,
  fetchHotelsFail,
  fetchHotelsRequest,
} from './hotelsActions';
import { HOTELS_REQUEST_FETCH } from './hotelsType';

function* fetchHotels() {
  try {
    // const { location, startData, endDate } = data;
    // console.log(startData);
    yield put(fetchHotelsRequest());
    const response = yield call(
      fetch,
      'https://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2021-12-10&checkOut=2021-12-12&limit=10'
    );
    const hotels = yield response.json();
    yield put(fetchHotelsSuccess(hotels));
  } catch (error) {
    yield put(fetchHotelsFail(error));
  }
}

export function* watchHotels() {
  // const action = yield take(HOTELS_REQUEST_FETCH);
  // yield console.log(action.payload);
  yield takeLatest(HOTELS_REQUEST_FETCH, fetchHotels);
}
