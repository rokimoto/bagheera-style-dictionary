import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Rating = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.834 19.664a2 2 0 0 1-1.915 1.421h-8.907l7.27 5.192a2 2 0 0 1 .747 2.22l-2.857 9.214 7.378-5.6a2 2 0 0 1 2.42.003l7.377 5.617-2.858-9.214a2 2 0 0 1 .748-2.22l7.27-5.192h-8.908a2 2 0 0 1-1.913-1.419l-2.937-9.668-2.915 9.646Zm4.825-10.239 2.94 9.68h8.92c1.94 0 2.74 2.48 1.16 3.62l-7.28 5.2 2.86 9.22c.58 1.86-1.58 3.36-3.12 2.18l-7.38-5.62-7.38 5.6c-1.54 1.18-3.7-.32-3.12-2.18l2.86-9.22-7.28-5.2c-1.58-1.12-.78-3.62 1.16-3.62h8.92l2.92-9.66c.56-1.9 3.24-1.9 3.82 0Z"
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

export default withTheme(Rating);
