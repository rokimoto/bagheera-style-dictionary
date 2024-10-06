import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const RatingFilled = ({
  size = 24,
  contentColor = 'default',
  theme,
  ...props
}: IconProps & {
  theme: DefaultTheme;
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    {...props}
  >
    <path
      d="m28.62 19.105-2.94-9.68c-.58-1.9-3.26-1.9-3.82 0l-2.96 9.68H10c-1.94 0-2.74 2.5-1.16 3.62l7.28 5.2-2.86 9.22c-.58 1.86 1.58 3.36 3.12 2.18l7.38-5.6 7.38 5.62c1.54 1.18 3.7-.32 3.12-2.18l-2.86-9.22 7.28-5.2c1.58-1.14.78-3.62-1.16-3.62h-8.9v-.02Z"
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

export default withTheme(RatingFilled);
