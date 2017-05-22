import { fromJS } from 'immutable';
import { weatherData } from 'api/tests/mockWeatherData';
import makeSelectorWeather from '../selectors';

const mockedData = fromJS(weatherData);

const selector = makeSelectorWeather();
const mockedState = fromJS({
  weather: mockedData,
});

describe('makeSelectorWeather', () => {
  it('should select the full weather state', () => {
    expect(selector(mockedState)).toEqual(mockedData);
  });
});

