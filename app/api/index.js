import { fromJS } from 'immutable';

const owpApiKey = 'c76d6b63065dc8fc76ec535574f84631';

export const fetchWeatherData5 = () =>
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast/daily?q=New%20York,us&mode=json&units=metric&APPID=${owpApiKey}`
  )
    .then(response => response.json())
    .then(response => fromJS(response))
    .catch(() =>
      fromJS({
        error: 'Something went wrong with getting a list of products',
      })
    );
