import React from 'react';
import { shallow } from 'enzyme';

import { weatherData } from 'api/tests/mockWeatherData';
import { fromJS } from 'immutable';
import { WeatherItem } from 'styles/weather';
import WeatherDayCard from '../index';

describe('<WeatherDayCard />', () => {
  const data = fromJS(weatherData);

  it('should contain one <WeatherItem /> and one ".data-all"', () => {
    const objDay = data.getIn(['list', 0]);
    const component = shallow(
      <WeatherDayCard key={objDay.get('dt')} weatherDay={objDay} />
    );
    expect(component.find(WeatherItem)).toHaveLength(1);
    expect(component.find('.date-all')).toHaveLength(1);
  });
});
