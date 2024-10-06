import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const SplitViewRight = ({
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
      d="M20 20c.55 0 1.02-.196 1.412-.587.392-.392.588-.863.588-1.413V6c0-.55-.196-1.02-.588-1.412A1.923 1.923 0 0 0 20 4H4c-.55 0-1.021.196-1.413.588A1.925 1.925 0 0 0 2 6v12c0 .55.196 1.021.587 1.413.392.391.863.587 1.413.587h16ZM6.5 8.675H4V6h2.5v2.675Zm0 4.65H4v-2.65h2.5v2.65ZM20 18H8.5V6H20v12ZM6.5 18H4v-2.675h2.5V18Z"
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

export default withTheme(SplitViewRight);
