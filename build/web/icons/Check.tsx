import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Check = ({
  size = 24,
  contentColor = 'default',
  theme,
  ...props
}: IconProps & {
  theme: DefaultTheme;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    {...props}
  >
    <path
      d="M9.55 17.575c-.133 0-.258-.021-.375-.063a.871.871 0 0 1-.325-.212L4.55 13c-.183-.183-.271-.421-.263-.713.009-.291.105-.529.288-.712a.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275L9.55 15.15l8.475-8.475c.183-.183.421-.275.713-.275.291 0 .529.092.712.275.183.183.275.42.275.712s-.092.53-.275.713l-9.2 9.2c-.1.1-.208.17-.325.212a1.099 1.099 0 0 1-.375.063Z"
      fill={
        isHex(contentColor)
          ? contentColor
          : contentColor === 'brand-gradient'
          ? 'url(#linear-gradient)'
          : theme.contentColor[contentColor]
      }
    />
  </svg>
);

export default withTheme(Check);
