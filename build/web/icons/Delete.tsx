import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Delete = ({
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
      d="M7 21c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 5 19V6a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 5a.97.97 0 0 1 .287-.713A.97.97 0 0 1 5 4h4c0-.283.096-.521.288-.713A.967.967 0 0 1 10 3h4a.97.97 0 0 1 .713.287A.97.97 0 0 1 15 4h4c.283 0 .52.096.712.287.192.192.288.43.288.713a.968.968 0 0 1-.288.713A.967.967 0 0 1 19 6v13c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 17 21H7ZM7 6v13h10V6H7Zm2 10c0 .283.096.52.288.712A.965.965 0 0 0 10 17a.968.968 0 0 0 .713-.288A.967.967 0 0 0 11 16V9a.97.97 0 0 0-.287-.713A.97.97 0 0 0 10 8a.967.967 0 0 0-.712.287A.968.968 0 0 0 9 9v7Zm4 0c0 .283.096.52.288.712A.965.965 0 0 0 14 17a.968.968 0 0 0 .713-.288A.967.967 0 0 0 15 16V9a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 8a.967.967 0 0 0-.712.287A.968.968 0 0 0 13 9v7ZM7 6v13V6Z"
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

export default withTheme(Delete);
