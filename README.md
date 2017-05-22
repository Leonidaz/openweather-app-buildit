# OpenWeather 5 day Forecast written in React


## Link to the production site
[http://actor-objective-10613.bitballoon.com](http://actor-objective-10613.bitballoon.com)


## Quick start

* Clone this repo using `git clone https://github.com/Leonidaz/openweather-app-buildit.git`
* Change directory in to the resulting folder `openweather-app-buildit`
* Run `npm install` to install dependencies.
* Run in dev mode `npm start` to see the app go to `http://localhost:3000`
* To test while developing run `npm run test:watch` (uses Jest)
* To run test, lint, coverage run `npm run test`
* To build the project for production  run `npm run build`
* To run webserver in production after the build step run `npm run start:prod`
* Or to combine build with running in production run `npm run start:production`


Technologies used:
* Uses React for components and Redux for state management
* The app is split into components and containers, the latter being responsible for communicating with the Redux store, the former are just stateless components
* Used a new to me `styled-components` library for writing CSS via components. I generally liked their approach and it was pretty easy
* Uses Jest for testing, something new to me but wanted to see how to work with it vs Mocha + Chai + Sinon + Istanbul
* Created a fetch mock via `jest-fetch-mock` to ease async api testing
* Uses `redux-sagas` for dispatching async actions
* Component's reducers and sagas are asynchronously injected into routes
* Used `react-boilerplate` to initially setup the project

Project description:
* The weather displayed uses Celcius for degrees
* The weather display is for New York City
* The weather icons are pulled from OpenWeather
* The weather widget is essentially 2 React components + a few styled components for CSS
* CSS is responsive with 2 sizes: desktop columns collapsing into rows for smaller resolutions
* The testing is fairly thorough for most of the code

What else could be done
* Add feature: a temperature switch to go from Celcius to Fahrenheit
* Add feature: a way to switch cities
* Add feature: more detailed info about the weather: e.g. wind & wind speed, etc.
* Create a few more tests to test styled components
* Use better-looking weather icons via a font that can be resized
* More stylish CSS



## License

This project is licensed under the MIT license, Copyright (c) 2017. For more information see `LICENSE.md`.
