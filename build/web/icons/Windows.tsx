import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Windows = ({
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
      d="m19.998 11.609-8.67.069V5.264L19.998 4v7.609Zm-15.993.764v5.457l6.536.898-.006-6.313-6.53-.041Zm7.311.088.012 6.364 8.67 1.224.002-7.574-8.684-.014ZM4 6.272l.006 5.454 6.536-.037-.003-6.307L4 6.272Z"
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

export default withTheme(Windows);
