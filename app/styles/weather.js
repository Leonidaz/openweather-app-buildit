import styled from 'styled-components';
import { media } from './utils';

export const WeatherList = styled.ul`
    display: flex;
    flex-direction: row;
    width: 900px;
    margin: 0 auto 40px auto;

  ${media.weatherMax`
    flex-direction: column;
    width: 100%;
  `}
`;

export const WeatherItem = styled.li`
  padding: 20px;
  border: 1px solid grey;
  border-left-width: 0px;
  width: 180px;
  box-sizing: border-box;

  &:first-child {
    border-left-width: 1px;
  }

  .humidity, .desc {
    margin-top: 10px;
  }

  .temp-all {

  }

  .desc {
    margin-top: 20px;
  }

  .icon-container {
    text-align: left;
  }

  ${media.weatherMax`
    border-width: 0;
    border-bottom-width: 1px;
    width: 100%;

    &:first-child {
      border-left-width: 0;
      border-top-width: 1px;
    }

    .date-all {
      margin-bottom: 20px;

      .date-day, .date-month {
        display: inline-block;
      }

      .date-day {
        padding-right: 8px;
      }
    }

    .temp-all, .icon-container, .humidity {
      display: inline-block;
      vertical-align: middle;
      padding-right: 20px;
    }

    .humidity{
      vertical-align: top;
    }   
  `}
`;
