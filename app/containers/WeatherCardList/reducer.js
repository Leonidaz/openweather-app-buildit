/*
 *
 * WeatherCardList reducer
 *
 */

import { fromJS } from 'immutable';
import * as types from './constants';

const initialState = fromJS({});

function weatherCardListReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_WEATHER5_SUCCESS:
      return action.response;
    case types.FETCH_WEATHER5_FAILURE:
      return fromJS({});
    default:
      return state;
  }
}

export default weatherCardListReducer;
