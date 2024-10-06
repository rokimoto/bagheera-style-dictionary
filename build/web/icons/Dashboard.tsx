import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Dashboard = ({
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
      d="M13 8V4c0-.283.096-.521.288-.713A.967.967 0 0 1 14 3h6c.283 0 .52.096.712.287.192.192.288.43.288.713v4c0 .283-.096.52-.288.712A.965.965 0 0 1 20 9h-6a.965.965 0 0 1-.712-.288A.965.965 0 0 1 13 8ZM3 12V4c0-.283.096-.521.288-.713A.967.967 0 0 1 4 3h6a.97.97 0 0 1 .713.287A.97.97 0 0 1 11 4v8c0 .283-.096.52-.287.712A.968.968 0 0 1 10 13H4a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 12Zm10 8v-8c0-.283.096-.521.288-.713A.967.967 0 0 1 14 11h6c.283 0 .52.096.712.287.192.192.288.43.288.713v8c0 .283-.096.52-.288.712A.965.965 0 0 1 20 21h-6a.965.965 0 0 1-.712-.288A.965.965 0 0 1 13 20ZM3 20v-4c0-.283.096-.521.288-.713A.967.967 0 0 1 4 15h6a.97.97 0 0 1 .713.287A.97.97 0 0 1 11 16v4c0 .283-.096.52-.287.712A.968.968 0 0 1 10 21H4a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 20Zm2-9h4V5H5v6Zm10 8h4v-6h-4v6Zm0-12h4V5h-4v2ZM5 19h4v-2H5v2Z"
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

export default withTheme(Dashboard);
