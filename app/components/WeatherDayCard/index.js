/**
*
* WeatherDayCard
*
*/

import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import Moment from 'moment';
import { WeatherItem } from 'styles/weather';

function WeatherDayCard({ weatherDay }) {
  const temp = weatherDay.get('temp');
  const weather = weatherDay.getIn(['weather', 0]);
  const dt = Moment(weatherDay.get('dt') * 1000);

  return (
    <WeatherItem>
      <div className="date-all">
        <div className="date-day">{dt.format('dddd')}</div>
        <div className="date-month">{dt.format('MMM D')}</div>
      </div>
      <div className="icon-container">
        <img
          alt={weather.get('main')}
          src={`http://openweathermap.org/img/w/${weather.get('icon')}.png`}
        />
      </div>
      <div className="temp-all">
        <div>High: {temp.get('max').toFixed(0)}°</div>
        <div>Low: {temp.get('min').toFixed(0)}°</div>
      </div>
      <div className="humidity">
        Humidity: {weatherDay.get('humidity')}%
      </div>
      <div className="desc">{weather.get('description')}</div>
    </WeatherItem>
  );
}

WeatherDayCard.propTypes = {
  weatherDay: PropTypes.instanceOf(Map).isRequired,
};

export default WeatherDayCard;
