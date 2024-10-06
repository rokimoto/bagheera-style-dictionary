import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const FullscreenExit = ({
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
      d="M9 19a.965.965 0 0 1-.712-.288A.965.965 0 0 1 8 18v-2H6a.968.968 0 0 1-.713-.288A.967.967 0 0 1 5 15a.97.97 0 0 1 .287-.713A.97.97 0 0 1 6 14h3a.97.97 0 0 1 .713.287A.97.97 0 0 1 10 15v3c0 .283-.096.52-.287.712A.968.968 0 0 1 9 19Zm-3-9a.968.968 0 0 1-.713-.288A.967.967 0 0 1 5 9a.97.97 0 0 1 .287-.713A.97.97 0 0 1 6 8h2V6c0-.283.096-.521.288-.713A.967.967 0 0 1 9 5a.97.97 0 0 1 .713.287A.97.97 0 0 1 10 6v3c0 .283-.096.52-.287.712A.968.968 0 0 1 9 10H6Zm9 9a.965.965 0 0 1-.712-.288A.965.965 0 0 1 14 18v-3c0-.283.096-.521.288-.713A.967.967 0 0 1 15 14h3c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 18 16h-2v2c0 .283-.096.52-.287.712A.968.968 0 0 1 15 19Zm0-9a.965.965 0 0 1-.712-.288A.965.965 0 0 1 14 9V6c0-.283.096-.521.288-.713A.967.967 0 0 1 15 5a.97.97 0 0 1 .713.287A.97.97 0 0 1 16 6v2h2c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 18 10h-3Z"
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

export default withTheme(FullscreenExit);
