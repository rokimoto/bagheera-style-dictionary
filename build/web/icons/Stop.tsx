import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Stop = ({
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
      d="M8 18c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 6 16V8c0-.55.196-1.02.588-1.412A1.923 1.923 0 0 1 8 6h8c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v8c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 16 18H8Z"
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

export default withTheme(Stop);
