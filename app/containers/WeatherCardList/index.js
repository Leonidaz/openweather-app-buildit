/*
 *
 * WeatherCardList
 *
 */

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import WeatherDayCard from 'components/WeatherDayCard';
import { createStructuredSelector } from 'reselect';
import { WeatherList } from 'styles/weather';
import makeSelectorWeather from './selectors';
import * as actions from './actions';

export class WeatherCardList extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    // const { isInitFetched } = this.props;

    // if(!isInitFetched){
    this.props.actions.fetchWeatherData5();
    // }
  }

  render() {
    const { weather } = this.props;

    return (
      <WeatherList>
        {weather.get('cnt') &&
          weather
            .get('list')
            .take(5)
            .map(objDay => (
              <WeatherDayCard key={objDay.get('dt')} weatherDay={objDay} />
            ))}
      </WeatherList>
    );
  }
}

WeatherCardList.propTypes = {
  actions: PropTypes.objectOf(React.PropTypes.func.isRequired).isRequired,
  weather: PropTypes.instanceOf(Map).isRequired,
};

const mapStateToProps = createStructuredSelector({
  weather: makeSelectorWeather(),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCardList);
