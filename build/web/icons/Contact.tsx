import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Contact = ({
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
      d="M2 15.8V3c0-.283.096-.521.288-.713A.967.967 0 0 1 3 2h13c.283 0 .52.096.712.287.192.192.288.43.288.713v9c0 .283-.096.52-.288.712A.965.965 0 0 1 16 13H6l-3.15 3.15c-.167.167-.35.208-.55.125-.2-.083-.3-.242-.3-.475ZM4 4v7-7Zm3 14a.968.968 0 0 1-.713-.288A.967.967 0 0 1 6 17v-2h13V6h2c.283 0 .52.096.712.287.192.192.288.43.288.713v13.8c0 .233-.1.392-.3.475-.2.083-.383.042-.55-.125L18 18H7Zm8-14H4v7h11V4Z"
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

export default withTheme(Contact);
