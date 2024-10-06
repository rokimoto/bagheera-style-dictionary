import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const ArrowDropUp = ({
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
      d="m11.3 10.3-2.6 2.6c-.317.317-.387.679-.212 1.087.175.409.487.613.937.613h5.15c.45 0 .762-.204.937-.613.175-.408.105-.77-.212-1.087l-2.6-2.6c-.1-.1-.208-.175-.325-.225A.942.942 0 0 0 12 10a.942.942 0 0 0-.375.075c-.117.05-.225.125-.325.225Z"
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

export default withTheme(ArrowDropUp);
