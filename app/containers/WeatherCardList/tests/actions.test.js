import * as actions from '../actions';
import * as types from '../constants';

describe('WeatherCardList actions', () => {
  describe('fetchWeatherData5 Action', () => {
    it('should have a type of FETCH_WEATHER5_REQUESTED', () => {
      const expected = {
        type: types.FETCH_WEATHER5_REQUESTED,
      };
      expect(actions.fetchWeatherData5()).toEqual(expected);
    });

    it('should have a type of FETCH_WEATHER5_SUCCESS and response', () => {
      const response = {};

      const expected = {
        type: types.FETCH_WEATHER5_SUCCESS,
        response,
      };
      expect(actions.receiveWeather5Success(response)).toEqual(expected);
    });

    it('should have a type of FETCH_WEATHER5_FAILURE and error', () => {
      const error = new Error('test error');
      const expected = {
        type: types.FETCH_WEATHER5_FAILURE,
        error,
      };
      expect(actions.receiveWeather5Failure(error)).toEqual(expected);
    });
  });
});
