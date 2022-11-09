import { css } from 'styled-components';
import { DeviceTypes } from '../types';

export const flexBox = (direction = 'row', justify = 'center', align = 'center') => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`;

export const positionCenterX = (type = 'absolute') => {
  if (type === 'absolute' || type === 'fixed') {
    return css`
      position: ${type};
      left: 50%;
      transform: translateX(-50%);
    `;
  }
  return '';
};

export const positionCenterY = (type = 'absolute') => {
  if (type === 'absolute' || type === 'fixed') {
    return css`
      position: ${type};
      top: 50%;
      transform: translateY(-50%);
    `;
  }
  return '';
};

export const positionCenter = (type = 'absolute') => {
  if (type === 'absolute' || type === 'fixed')
    return css`
      position: ${type};
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    `;
  return '';
};

export const responsive = (device: string) => {
  switch (device) {
    case DeviceTypes.PhonedeviceSm:
      return `@media screen and (min-width: 360px) and (max-width: 450px)`;
    default:
      return '';
  }
};
