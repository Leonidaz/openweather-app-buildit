import { css } from 'styled-components';

const sizes = {
  handheld: '420px',
  tablet: '720px',
  weatherMax: '910px',
};

const mediaMixin = (size, ...args) => css`
  @media (max-width: ${size}) {
    ${css(...args)}
  }
`;

export const media = {
  handheld: mediaMixin.bind(null, sizes.handheld),
  tablet: mediaMixin.bind(null, sizes.tablet),
  weatherMax: mediaMixin.bind(null, sizes.weatherMax),
};
