import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const MenuOpen = ({
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
      d="M19.575 18c.283 0 .52-.096.712-.288a.965.965 0 0 0 .288-.712.965.965 0 0 0-.288-.712.965.965 0 0 0-.712-.288h-11a.968.968 0 0 0-.713.288.967.967 0 0 0-.287.712c0 .283.096.52.287.712.192.192.43.288.713.288h11Zm0-5c.283 0 .52-.096.712-.288a.965.965 0 0 0 .288-.712.968.968 0 0 0-.288-.713.967.967 0 0 0-.712-.287h-8a.97.97 0 0 0-.713.287.97.97 0 0 0-.287.713c0 .283.096.52.287.712.192.192.43.288.713.288h8Zm0-5c.283 0 .52-.096.712-.287A.968.968 0 0 0 20.575 7a.968.968 0 0 0-.288-.713.967.967 0 0 0-.712-.287h-11a.97.97 0 0 0-.713.287.97.97 0 0 0-.287.713.97.97 0 0 0 .287.713.97.97 0 0 0 .713.287h11Zm-13.4 4-2.9 2.9a.948.948 0 0 0-.275.7c0 .283.092.517.275.7a.948.948 0 0 0 .7.275.948.948 0 0 0 .7-.275l3.6-3.6c.2-.2.3-.433.3-.7 0-.267-.1-.5-.3-.7l-3.6-3.6a.948.948 0 0 0-.7-.275.948.948 0 0 0-.7.275.948.948 0 0 0-.275.7c0 .283.092.517.275.7l2.9 2.9Z"
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

export default withTheme(MenuOpen);
