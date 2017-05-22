/**
 * Test  sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { call, put } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import { weatherData } from 'api/tests/mockWeatherData';
import * as api from 'api';

import * as actions from '../actions';
import { fetchWeather5 } from '../sagas';

describe('defaultSaga Saga', () => {
  afterEach(() => {
    fetch.resetMocks();
  });

  beforeEach(() => {
    fetch.mockResponse(JSON.stringify(weatherData));
  });

  describe('fetchWeather5 Success', () => {
    const fetchWeatherGenerator = fetchWeather5();

    it('fetchWeather5 saga should yield same result as call to api fetchWeatherData5', () => {
      const nextFetchVal = fetchWeatherGenerator.next().value;

      expect(nextFetchVal).toEqual(call(api.fetchWeatherData5));
    });

    it('should cause a receiveWeather5Success action via put', () => {
      const response = fromJS(weatherData);
      const nextItem = fetchWeatherGenerator.next(response);
      const nextFetchVal = nextItem.value;

      expect(nextFetchVal).toEqual(
        put(actions.receiveWeather5Success(response))
      );
    });

    afterAll(() => {
      fetchWeatherGenerator.next();
    });
  });

  describe('fetchWeather5 Failure', () => {
    const fetchWeatherGenerator = fetchWeather5();
    fetchWeatherGenerator.next();

    it('should cause a receiveWeather5Success action via put', () => {
      const response = fromJS({ error: 'test error message' });
      const nextFetchVal = fetchWeatherGenerator.next(response).value;

      expect(nextFetchVal).toEqual(
        put(actions.receiveWeather5Failure(response.get('error')))
      );
    });

    afterAll(() => {
      fetchWeatherGenerator.next();
    });
  });
});
