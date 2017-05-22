import { createSelector } from 'reselect';

/**
 * Direct selector to the weatherCardList state domain
 */
const selectWeatherDomain = () => state => state.get('weather');


/**
 * Default selector used by WeatherCardList
 */
const makeSelectorWeather = () =>
  createSelector(selectWeatherDomain(), substate => substate);

export default makeSelectorWeather;
export { selectWeatherDomain };
