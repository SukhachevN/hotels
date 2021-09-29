import { takeLatest, put, call } from 'redux-saga/effects';
import {
  fetchHotelsSuccess,
  fetchHotelsFail,
  fetchHotelsRequest,
} from './hotelsActions';
import { HOTELS_REQUEST_FETCH } from './hotelsType';

function* fetchHotels(action) {
  try {
    const { location, start, end } = action.payload;
    yield put(fetchHotelsRequest());
    console.log(start, end);
    const response = yield call(
      fetch,
      `https://engine.hotellook.com/api/v2/cache.json?location=${encodeURI(
        location
      )}&currency=rub&checkIn=${start}&checkOut=${end}&limit=10`
    );
    const hotels = yield response.json();
    if (hotels?.message) {
      yield put(fetchHotelsFail(hotels));
    } else {
      yield put(fetchHotelsSuccess(hotels));
    }
  } catch (error) {
    yield put(fetchHotelsFail(error));
  }
}

export function* watchHotels() {
  // const action = yield take(HOTELS_REQUEST_FETCH);
  // yield console.log(action.payload);
  yield takeLatest(HOTELS_REQUEST_FETCH, fetchHotels);
}
