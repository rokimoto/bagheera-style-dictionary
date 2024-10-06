import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const PlayArrow = ({
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
      d="M9.525 18.025c-.333.217-.671.229-1.013.037-.341-.191-.512-.487-.512-.887V6.825c0-.4.17-.696.512-.888.342-.191.68-.179 1.013.038l8.15 5.175c.3.2.45.483.45.85s-.15.65-.45.85l-8.15 5.175Z"
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

export default withTheme(PlayArrow);
