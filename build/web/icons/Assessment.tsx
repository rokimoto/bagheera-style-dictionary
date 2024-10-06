import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Assessment = ({
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
      d="M8 17a.968.968 0 0 0 .713-.288A.967.967 0 0 0 9 16v-5a.97.97 0 0 0-.287-.713A.97.97 0 0 0 8 10a.97.97 0 0 0-.713.287A.97.97 0 0 0 7 11v5c0 .283.096.52.287.712.192.192.43.288.713.288Zm4 0a.968.968 0 0 0 .713-.288A.967.967 0 0 0 13 16V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7a.967.967 0 0 0-.712.287A.968.968 0 0 0 11 8v8c0 .283.096.52.288.712A.965.965 0 0 0 12 17Zm4 0c.283 0 .52-.096.712-.288A.965.965 0 0 0 17 16v-2a.968.968 0 0 0-.288-.713A.967.967 0 0 0 16 13a.967.967 0 0 0-.712.287A.968.968 0 0 0 15 14v2c0 .283.096.52.288.712A.965.965 0 0 0 16 17ZM5 21c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 0 1 3 19V5c0-.55.196-1.021.587-1.413A1.928 1.928 0 0 1 5 3h14c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v14c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 19 21H5Zm0-2h14V5H5v14Zm0 0V5v14Z"
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

export default withTheme(Assessment);
