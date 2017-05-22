// import React from 'react';
// import { shallow } from 'enzyme';

// import { WeatherList } from 'styles/weather';
// import { WeatherCardList } from '../index';

// describe('<WeatherCardList />', () => {
//   it('should render component', () => {
//     const renderedComponent = shallow(
//       <WeatherCardList />
//     );
//     expect(renderedComponent.contains(
//       <WeatherList />
//     )).toEqual(true);
//   });
// });

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { getAsyncInjectors } from 'utils/asyncInjectors';

import { WeatherList } from 'styles/weather';
import { weatherData } from 'api/tests/mockWeatherData';
import WeatherCardList from '../index';
import reducers from '../reducer';
import sagas from '../sagas';
import configureStore from '../../../store';

describe('<WeatherCardList />', () => {
  let store;
  let renderedComponent;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
    const { injectReducer, injectSagas } = getAsyncInjectors(store);
    fetch.mockResponse(JSON.stringify(weatherData));
    injectReducer('weather', reducers);
    injectSagas(sagas);

    renderedComponent = mount(
      <Provider store={store}>
        <WeatherCardList />
      </Provider>
    );
  });

  afterAll(() => {
    fetch.resetMocks();
  });

  it('should render component and contain WeatherList styled component', () => {
    expect(renderedComponent.contains(<WeatherList />)).toEqual(true);
  });
});
