import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const MusicNote = ({
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
      d="M10 21c-1.1 0-2.042-.392-2.825-1.175C6.392 19.042 6 18.1 6 17s.392-2.042 1.175-2.825C7.958 13.392 8.9 13 10 13c.383 0 .737.046 1.062.137.325.092.638.23.938.413V5c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 14 3h2c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.412A1.927 1.927 0 0 1 16 7h-2v10c0 1.1-.392 2.042-1.175 2.825C12.042 20.608 11.1 21 10 21Z"
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

export default withTheme(MusicNote);
