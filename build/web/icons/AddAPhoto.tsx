import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const AddAPhoto = ({
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
      d="M11 18.5c1.25 0 2.313-.437 3.188-1.312S15.5 15.25 15.5 14c0-1.25-.437-2.313-1.312-3.188S12.25 9.5 11 9.5c-1.25 0-2.313.437-3.188 1.312S6.5 12.75 6.5 14c0 1.25.437 2.313 1.312 3.188S9.75 18.5 11 18.5ZM3 22c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 1 20V8c0-.55.196-1.02.588-1.412A1.923 1.923 0 0 1 3 6h3.15L7.4 4.65A2.01 2.01 0 0 1 8.875 4H13a.97.97 0 0 1 .713.287A.97.97 0 0 1 14 5v3H3v12h16v-9h1c.133 0 .263.025.388.075.125.05.233.12.325.212.091.092.162.2.212.325.05.125.075.255.075.388v8c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 19 22H3ZM19 6h-1a.967.967 0 0 1-.712-.287A.968.968 0 0 1 17 5c0-.283.096-.521.288-.713A.967.967 0 0 1 18 4h1V3c0-.283.096-.521.288-.713A.967.967 0 0 1 20 2c.283 0 .52.096.712.287.192.192.288.43.288.713v1h1c.283 0 .52.096.712.287.192.192.288.43.288.713a.968.968 0 0 1-.288.713A.967.967 0 0 1 22 6h-1v1a.968.968 0 0 1-.288.713A.967.967 0 0 1 20 8a.967.967 0 0 1-.712-.287A.968.968 0 0 1 19 7V6ZM3 8v12V8Z"
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

export default withTheme(AddAPhoto);
