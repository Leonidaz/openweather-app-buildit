/*
 *
 * WeatherCardList actions
 *
 */

import * as types from './constants';

export const fetchWeatherData5 = () => ({
  type: types.FETCH_WEATHER5_REQUESTED,
});
export const receiveWeather5Success = response => ({
  type: types.FETCH_WEATHER5_SUCCESS,
  response,
});
export const receiveWeather5Failure = error => ({
  type: types.FETCH_WEATHER5_FAILURE,
  error,
});
