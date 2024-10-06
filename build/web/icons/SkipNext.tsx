import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const SkipNext = ({
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
      d="M17.5 18a.965.965 0 0 1-.712-.288A.965.965 0 0 1 16.5 17V7c0-.283.096-.521.288-.713A.967.967 0 0 1 17.5 6c.283 0 .52.096.712.287.192.192.288.43.288.713v10c0 .283-.096.52-.288.712A.965.965 0 0 1 17.5 18ZM7.05 16.975c-.333.233-.675.25-1.025.05a.973.973 0 0 1-.525-.9v-8.25c0-.4.175-.696.525-.888a.935.935 0 0 1 1.025.038l6.2 4.15c.3.2.45.475.45.825s-.15.625-.45.825l-6.2 4.15Z"
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

export default withTheme(SkipNext);
