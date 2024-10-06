import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const CalendarAdd = ({
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
      d="M5 20c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 0 1 3 18V6c0-.55.196-1.02.587-1.412A1.927 1.927 0 0 1 5 4h1V3a1 1 0 0 1 2 0v1h6V3a1 1 0 1 1 2 0v1h1c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v6.1a6.732 6.732 0 0 0-2 0V10H5v8h7c0 .333.025.667.075 1 .05.333.142.667.275 1H5ZM5 8h12V6H5v2Z"
      fill={
        isHex(contentColor)
          ? contentColor
          : contentColor === 'brand-gradient'
          ? 'url(#linear-gradient)'
          : theme.contentColor[contentColor]
      }
    />
    <path
      d="M17.288 21.712A.965.965 0 0 0 18 22c.283 0 .52-.096.712-.288A.965.965 0 0 0 19 21v-2h2c.283 0 .52-.096.712-.288A.965.965 0 0 0 22 18a.968.968 0 0 0-.288-.713A.967.967 0 0 0 21 17h-2v-2a.968.968 0 0 0-.288-.713A.967.967 0 0 0 18 14a.967.967 0 0 0-.712.287A.968.968 0 0 0 17 15v2h-2a.967.967 0 0 0-.712.287A.968.968 0 0 0 14 18c0 .283.096.52.288.712A.965.965 0 0 0 15 19h2v2c0 .283.096.52.288.712Z"
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

export default withTheme(CalendarAdd);
