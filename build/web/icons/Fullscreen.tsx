import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Fullscreen = ({
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
      d="M6 19a.968.968 0 0 1-.713-.288A.967.967 0 0 1 5 18v-3a.97.97 0 0 1 .287-.713A.97.97 0 0 1 6 14a.97.97 0 0 1 .713.287A.97.97 0 0 1 7 15v2h2c.283 0 .521.096.713.288A.967.967 0 0 1 10 18c0 .283-.096.52-.287.712A.968.968 0 0 1 9 19H6Zm0-9a.968.968 0 0 1-.713-.288A.967.967 0 0 1 5 9V6a.97.97 0 0 1 .287-.713A.97.97 0 0 1 6 5h3a.97.97 0 0 1 .713.287A.97.97 0 0 1 10 6a.97.97 0 0 1-.287.713A.97.97 0 0 1 9 7H7v2c0 .283-.096.52-.287.712A.968.968 0 0 1 6 10Zm9 9a.965.965 0 0 1-.712-.288A.965.965 0 0 1 14 18c0-.283.096-.52.288-.712A.965.965 0 0 1 15 17h2v-2c0-.283.096-.521.288-.713A.967.967 0 0 1 18 14c.283 0 .52.096.712.287.192.192.288.43.288.713v3c0 .283-.096.52-.288.712A.965.965 0 0 1 18 19h-3Zm3-9a.965.965 0 0 1-.712-.288A.965.965 0 0 1 17 9V7h-2a.967.967 0 0 1-.712-.287A.968.968 0 0 1 14 6c0-.283.096-.521.288-.713A.967.967 0 0 1 15 5h3c.283 0 .52.096.712.287.192.192.288.43.288.713v3c0 .283-.096.52-.288.712A.965.965 0 0 1 18 10Z"
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

export default withTheme(Fullscreen);
