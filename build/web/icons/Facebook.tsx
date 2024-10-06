import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Facebook = ({
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
      d="m16.158 13.049.495-3.233h-3.101V7.718c0-.885.433-1.747 1.822-1.747h1.41V3.218S15.505 3 14.282 3c-2.555 0-4.225 1.548-4.225 4.351v2.465h-2.84v3.232h2.84v7.816a11.26 11.26 0 0 0 3.496 0v-7.816h2.606Z"
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

export default withTheme(Facebook);
