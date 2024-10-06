import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Playstore = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="m15.603 9.343.003-.004.056.031 3.04 1.729c.87.49.87 1.3 0 1.796l-3.04 1.729-.056.037-.004-.004-9.017 5.127a1.008 1.008 0 0 1-1.245.002l-.004.004-.044-.043a1.23 1.23 0 0 1-.286-.87V5.124a1.25 1.25 0 0 1 .284-.868l-.003-.003.038-.033.01-.01h.002a1.008 1.008 0 0 1 1.243.005l9.023 5.127Zm-2.565 2.656V12Z"
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

export default withTheme(Playstore);
