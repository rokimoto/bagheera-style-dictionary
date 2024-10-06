import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const FormatIndentIncrease = ({
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
      d="M4 21a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 20c0-.283.096-.52.288-.712A.965.965 0 0 1 4 19h16c.283 0 .52.096.712.288A.965.965 0 0 1 21 20c0 .283-.096.52-.288.712A.965.965 0 0 1 20 21H4Zm-1-6.2V9.2c0-.233.1-.392.3-.475.2-.083.383-.042.55.125l2.8 2.8a.48.48 0 0 1 0 .7l-2.8 2.8c-.167.167-.35.208-.55.125-.2-.083-.3-.242-.3-.475Zm9 2.2a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 16c0-.283.096-.521.288-.713A.967.967 0 0 1 12 15h8c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 20 17h-8ZM4 5a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 4c0-.283.096-.521.288-.713A.967.967 0 0 1 4 3h16c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 20 5H4Zm8 4a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 8c0-.283.096-.521.288-.713A.967.967 0 0 1 12 7h8c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 20 9h-8Zm0 4a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 12c0-.283.096-.521.288-.713A.967.967 0 0 1 12 11h8c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 20 13h-8Z"
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

export default withTheme(FormatIndentIncrease);
