import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const VerifiedInverse = ({
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
    <circle cx={12} cy={12} r={12} fill="#fff" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.703 8.01a1.5 1.5 0 0 1 0 2.122l-6.857 6.857a1.5 1.5 0 0 1-2.121 0l-4.286-4.286a1.5 1.5 0 1 1 2.122-2.12l3.225 3.224 5.796-5.796a1.5 1.5 0 0 1 2.121 0Z"
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

export default withTheme(VerifiedInverse);
