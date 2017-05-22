
import { fromJS } from 'immutable';
import { weatherData } from 'api/tests/mockWeatherData';
import weatherCardListReducer from '../reducer';
import * as actions from '../actions';

const mockedData = fromJS(weatherData);

describe('weatherCardListReducer', () => {
  it('should return the initial state', () => {
    expect(weatherCardListReducer(undefined, {})).toMatchSnapshot();
  });

  it('should populate the store with mocked data', () => {
    expect(weatherCardListReducer(undefined, actions.receiveWeather5Success(mockedData))).toEqual(mockedData);
  });
});
