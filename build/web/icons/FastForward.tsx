import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const FastForward = ({
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
      d="M4.05 16.975c-.333.233-.675.25-1.025.05a.973.973 0 0 1-.525-.9v-8.25c0-.4.175-.696.525-.888a.935.935 0 0 1 1.025.038l6.2 4.15c.3.2.45.475.45.825s-.15.625-.45.825l-6.2 4.15Zm10 0c-.333.233-.675.25-1.025.05a.973.973 0 0 1-.525-.9v-8.25c0-.4.175-.696.525-.888a.935.935 0 0 1 1.025.038l6.2 4.15c.3.2.45.475.45.825s-.15.625-.45.825l-6.2 4.15Z"
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

export default withTheme(FastForward);
