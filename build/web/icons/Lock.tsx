import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Lock = ({
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
      d="M6 22c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 4 20V10c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 6 8h1V6c0-1.383.488-2.563 1.463-3.538C9.438 1.487 10.617 1 12 1s2.563.487 3.538 1.462C16.513 3.437 17 4.617 17 6v2h1c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v10c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 18 22H6Zm0-2h12V10H6v10Zm6-3c.55 0 1.021-.196 1.413-.587.391-.392.587-.863.587-1.413s-.196-1.021-.587-1.413A1.928 1.928 0 0 0 12 13c-.55 0-1.02.196-1.412.587A1.927 1.927 0 0 0 10 15c0 .55.196 1.021.588 1.413.391.391.862.587 1.412.587ZM9 8h6V6c0-.833-.292-1.542-.875-2.125A2.893 2.893 0 0 0 12 3c-.833 0-1.542.292-2.125.875A2.893 2.893 0 0 0 9 6v2ZM6 20V10v10Z"
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

export default withTheme(Lock);
