import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import * as api from 'api';
import * as types from './constants';
import * as actions from './actions';

export function* fetchWeather5() {
  const response = yield call(api.fetchWeatherData5);
  if (response.get('error')) {
    yield put(actions.receiveWeather5Failure(response.get('error')));
  } else {
    yield put(actions.receiveWeather5Success(response));
  }
}

export function* watchFetchWeather5() {
  yield takeLatest(types.FETCH_WEATHER5_REQUESTED, fetchWeather5);
}

// Individual exports for testing
export function* defaultSaga() {
  yield watchFetchWeather5();
}

// All sagas to be loaded
export default [defaultSaga];
