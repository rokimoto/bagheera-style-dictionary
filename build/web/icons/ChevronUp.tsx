import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const ChevronUp = ({
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
      d="M6.7 14.675a.948.948 0 0 1-.275-.7c0-.283.092-.517.275-.7l4.6-4.6c.1-.1.208-.171.325-.213.117-.041.242-.062.375-.062s.258.02.375.062a.883.883 0 0 1 .325.213l4.625 4.625a.918.918 0 0 1 .275.675c0 .267-.1.5-.3.7a.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275l-3.9-3.9L8.075 14.7a.917.917 0 0 1-.675.275.96.96 0 0 1-.7-.3Z"
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

export default withTheme(ChevronUp);
