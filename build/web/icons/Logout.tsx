import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Logout = ({
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
      d="M8.25 16.275c.183-.217.275-.463.275-.738a.932.932 0 0 0-.275-.687L6.4 13h7.175c.283 0 .52-.096.712-.288a.965.965 0 0 0 .288-.712.968.968 0 0 0-.288-.713.967.967 0 0 0-.712-.287H6.4l1.85-1.85c.2-.2.3-.437.3-.712 0-.275-.1-.513-.3-.713a.894.894 0 0 0-.688-.3.932.932 0 0 0-.687.275l-3.6 3.6c-.1.1-.171.208-.213.325A1.115 1.115 0 0 0 3 12c0 .133.02.258.062.375a.883.883 0 0 0 .213.325l3.6 3.6c.217.217.454.312.712.287.259-.025.48-.129.663-.312ZM18.575 21c.55 0 1.021-.196 1.413-.587.391-.392.587-.863.587-1.413V5c0-.55-.196-1.021-.587-1.413A1.928 1.928 0 0 0 18.575 3h-6a.97.97 0 0 0-.713.287.97.97 0 0 0-.287.713c0 .283.096.52.287.712.192.192.43.288.713.288h6v14h-6a.968.968 0 0 0-.713.288.967.967 0 0 0-.287.712c0 .283.096.52.287.712.192.192.43.288.713.288h6Z"
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

export default withTheme(Logout);
