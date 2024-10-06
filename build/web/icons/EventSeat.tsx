import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const EventSeat = ({
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
      d="M2.482 16.337h2.223v-2.223H6.18v-2.223h-3.7v4.446ZM11.886 9.611a1.484 1.484 0 0 1 1.482-1.482h4.446c.814 0 1.481.667 1.481 1.482v5.928h-7.409V9.61ZM12.114 4.482v1.881a3.488 3.488 0 0 0-2.228 3.248v.798H4.705V4.482C4.705 3.667 5.372 3 6.187 3h4.445c.815 0 1.482.667 1.482 1.482ZM1 8.187h2.223v2.222H1V8.187ZM9.663 21.466v-4.445h11.855v4.445h-2.223v-2.223h-7.409v2.223H9.663ZM23 13.316h-2.223v2.223H23v-2.223ZM10.404 13.316H8.181v2.223h2.223v-2.223Z"
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

export default withTheme(EventSeat);
