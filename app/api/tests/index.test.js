import { weatherData } from 'api/tests/mockWeatherData';
import * as api from 'api';

describe('fetchWeatherData5 api call', () => {
  afterEach(() => {
    fetch.resetMocks();
  });

  it('should select the full weather state', () => {
    fetch.mockResponse(JSON.stringify(weatherData));

    return api.fetchWeatherData5().then(response => {
      expect(response).toMatchSnapshot();
    });
  });
});
